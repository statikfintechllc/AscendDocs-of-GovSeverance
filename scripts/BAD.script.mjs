import { readdir, stat, writeFile } from 'fs/promises';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);
const repoUrl = 'https://github.com/statikfintechllc/AscendDocs-of-GovSeverance.git';
const localDir = './AscendDocs-of-GovSeverance';
const outputFile = './ascend-index.json';

async function cloneRepo() {
  try {
    await execAsync(`git clone ${repoUrl}`);
    console.log('✅ Repo cloned.');
  } catch (err) {
    if (err.message.includes('already exists')) {
      console.log('📁 Repo already cloned.');
    } else {
      throw err;
    }
  }
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const index = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative(localDir, fullPath);

    if (entry.isDirectory()) {
      index.push({ type: 'directory', name: relPath });
      index.push(...await walk(fullPath));
    } else {
      const fileStat = await stat(fullPath);
      index.push({
        type: 'file',
        name: relPath,
        size: fileStat.size,
        modified: fileStat.mtime.toISOString()
      });
    }
  }

  return index;
}

async function buildIndex() {
  await cloneRepo();
  const index = await walk(localDir);
  await writeFile(outputFile, JSON.stringify({ repository: repoUrl, index }, null, 2));
  console.log(`📄 Index written to ${outputFile}`);
}

buildIndex().catch(err => console.error('❌ Error:', err));
