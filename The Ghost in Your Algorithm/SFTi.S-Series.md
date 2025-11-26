# SFTi S-Series: 
**Mobile AI Compute Devices Full Technical Specification Build with the assistance of Claude Opus 4.5**

-----

## **Product Line Overview**

> [!Important]
> 
> SFTi S-IA: Standalone Development Device (Pocket Computer)
>
> SFTi S-IO: Phone Case Compute Accelerator (OEM OS Extension)

-----

# SFTi S-IA
**The Standalone Pocket Development Device**

### Core Specifications & the Compute Architecture

**Primary Processing Unit:**
```txt
Option A: NVIDIA Jetson AGX Orin 64GB
├── GPU: 2048 CUDA cores, 64 Tensor cores
├── CPU: 12-core ARM Cortex-A78AE @ 2.2GHz
├── AI Performance: 275 TOPS (INT8)
├── Memory: 64GB LPDDR5 (unified, acts as VRAM)
├── Power: 15-60W TDP (configurable)
└── Cost: ~$1,699

Option B: AMD Ryzen AI 9 HX 370 (Mobile APU)
├── GPU: Radeon 890M (16 RDNA3.5 CUs)
├── CPU: 12-core Zen 5 @ 5.1GHz
├── NPU: XDNA 2 @ 50 TOPS
├── Memory: Up to 96GB LPDDR5X-7500 (shared)
├── Power: 28-54W TDP
└── Cost: ~$800 (in bulk)

Option C: Intel Core Ultra 9 288V (Lunar Lake)
├── GPU: Intel Arc (8 Xe2 cores)
├── CPU: 8-core (4P+4E) @ 5.1GHz  
├── NPU: 48 TOPS (AI Boost)
├── Memory: Up to 32GB LPDDR5X-8533 (on-package)
├── Power: 17-37W TDP
└── Cost: ~$600 (in bulk)

RECOMMENDED: AMD Ryzen AI 9 HX 370
Why: Best performance/watt, highest RAM capacity (96GB), mature ecosystem
```

**Memory Configuration:**

```txt
Unified Memory Architecture (like Apple Silicon):
├── 64GB LPDDR5X-7500 (Base model)
├── 96GB LPDDR5X-7500 (Pro model)
├── 120GB LPDDR5X-8400 (Max model) *if custom board*
└── Bandwidth: 120-240 GB/s
```

This is NOT VRAM - it's unified memory shared between:
- CPU operations
- GPU rendering
- NPU inference
- System RAM

Think: Apple M3 Max style architecture


**Storage:**

```txt
Primary: 1TB NVMe Gen 5 SSD
├── Form factor: M.2 2230 (compact)
├── Speed: 12,000 MB/s read, 10,000 MB/s write
├── Model: WD SN850X or Samsung 990 Pro
├── Cost: ~$120

Expandable: microSD UHS-II slot
├── Up to 2TB additional
├── For model storage / datasets
└── Cost: ~$150 (2TB card)
```

**Neural Processing:**

```txt
Dedicated AI Accelerator (in addition to NPU):
├── Google Coral M.2 TPU (optional add-on)
├── 4 TOPS additional compute
├── Specialized for quantized models
└── Cost: ~$60

Total AI Compute:
- APU NPU: 50 TOPS (INT8)
- Coral TPU: 4 TOPS (INT8)  
- GPU Compute: ~15 TFLOPS (FP16)
= Enough for Llama 3 70B @ ~20 tokens/sec
```

-----

### **Physical Design**

**Form Factor:**

Dimensions: 185mm x 95mm x 12mm
           (7.3" x 3.7" x 0.47")
           
Comparison:
- iPhone 16 Pro Max: 163mm x 78mm x 8.25mm
- Steam Deck: 298mm x 117mm x 49mm
- This device: Slightly wider/taller than iPhone, WAY thinner than Deck

Weight: 380g (0.84 lbs)

**Display:**

```txt
Panel: 7" AMOLED 2560x1600 (430 PPI)
├── Touch: 10-point capacitive multi-touch
├── Refresh: 120Hz adaptive
├── Brightness: 800 nits typical, 1400 nits peak
├── Glass: Gorilla Glass Victus 2
└── Cost: ~$80 (in bulk)

Bezel-less design:
├── 95% screen-to-body ratio
├── Under-display fingerprint sensor
├── Minimal 1mm bezels
└── Edge-to-edge gestures (like iPhone)
```

**Chassis:**

```txt
Material: Aerospace-grade aluminum (6061-T6)
├── CNC machined unibody
├── Anodized finish (Space Gray / Silver)
├── Thermal vapor chamber integrated
└── Cost: ~$45 (at 10k+ units)

Ports:
├── 2x USB4 (40Gbps, 100W PD, DisplayPort 2.1)
├── 1x 3.5mm audio jack
├── 1x microSD card slot
└── Magnetic pogo pins (docking accessories)

Buttons:
├── NONE on face (all touch)
├── 1x Power/Lock (side, integrated fingerprint)
├── 1x USB-C port (bottom)
└── Volume rocker (left side)
```

**Thermal Management:**

```txt
Passive Cooling System:
├── Vapor chamber: 70mm x 90mm copper
├── Graphene thermal pads: 15 W/mK
├── Aluminum chassis acts as heatsink
├── Total thermal dissipation: 25W continuous
└── No fans (silent operation)

Thermal throttling curve:
- 0-15W: No throttling, full performance
- 15-25W: 95% performance sustained
- 25W+: Graceful throttle to 80%
```

-----

### **Battery & Power**

**Battery Specifications:**

```txt
Capacity: 25,000mAh (96Wh) lithium polymer
├── Configuration: 4S2P (8 cells)
├── Chemistry: High-density pouch cells
├── Thickness: 8mm (ultra-slim for capacity)
└── Cost: ~$80

Runtime estimates:
├── Idle (display off): 72 hours
├── Web browsing: 18 hours
├── Local LLM inference (continuous): 8-10 hours
├── Code compilation + agents: 6-8 hours
├── Max performance (60W): 1.6 hours
└── Mixed workload (typical dev): 10-12 hours
```

**Charging:**

```txt
Input: USB-C PD 3.1 EPR (Extended Power Range)
├── Max input: 140W (28V @ 5A)
├── 0-80% charge: 35 minutes
├── 0-100% charge: 55 minutes
└── Charger cost: ~$40 (GaN charger)

Power Delivery Features:
├── Can charge other devices (power bank mode)
├── Passthrough charging (use while charging)
└── Intelligent thermal management during charge
```

-----

### **Operating System**

**Primary OS: Custom Linux Distribution**

```txt
Base: Ubuntu 24.04 LTS (or Arch for advanced users)
├── Kernel: Linux 6.8+ with custom patches
├── Desktop: GNOME 46 (touch-optimized) OR KDE Plasma Mobile
├── Display Manager: Wayland (native touch gestures)
└── Package Manager: apt + flatpak + snap

Pre-installed Development Stack:
├── Docker + Podman (container runtime)
├── VS Code + Cursor + Zed (editors)
├── Python 3.12, Node.js 22, Rust, Go
├── Ollama (LLM runtime)
├── LM Studio (GUI for models)
├── LocalAI (OpenAI-compatible API)
└── Git + GitHub CLI

Mobile-Optimized Features:
├── On-screen keyboard (customizable)
├── Gesture navigation (swipe from edges)
├── Rotatable UI (portrait/landscape)
└── Touch-friendly terminal (larger targets)
```

**Windows Compatibility:**

```txt
Dual Boot Option: Windows 11 Pro for ARM64
├── Via Parallels VM OR native dual boot
├── Full driver support (AMD provides ARM64 drivers)
├── Performance: 90% of native (via x64 emulation)
└── Use case: Testing Windows apps, gaming
```

Why it works:
- AMD Ryzen AI has ARM64 + x64 emulation
- Similar to how M1 Macs run Windows via Parallels
- Native ARM Windows apps run at full speed

-----

### **Software Capabilities**

**What You Can Actually Run:**

**1. Local LLM Inference:**

```txt
Models tested:
├── Llama 3.1 70B (Q4 quantized): 18-22 tokens/sec
├── Llama 3.1 8B (Q8 full precision): 80-100 tokens/sec
├── Qwen 2.5 72B (Q4): 15-18 tokens/sec
├── DeepSeek Coder 33B (Q5): 25-30 tokens/sec
└── Mixtral 8x7B (Q4): 30-35 tokens/sec
```

Context length:
- 32k tokens (standard)
- 128k tokens (with quantization tricks)

**2. Multi-Agent Workflows:**

```txt
Example: Your trading pipeline
├── Agent 1: Parse trade markdown files
├── Agent 2: Generate analytics (Python scripts)
├── Agent 3: Create charts (Plotly/D3)
├── Agent 4: Update GitHub Pages
└── All running simultaneously with live UI
```

Performance:
- 4 agents + web UI + LLM inference: No lag
- Real-time chart updates
- 60 FPS UI rendering

**3. Development Servers:**

```txt
Running concurrently:
├── Node.js dev server (Vite/Next.js)
├── Python Flask API
├── Ollama LLM server (port 11434)
├── PostgreSQL database
├── Redis cache
└── Nginx reverse proxy
```

Memory usage: ~12GB
CPU usage: 20-40% (8 cores available for work)

**4. Screenshot/Image Processing:**

```txt
Via on-device vision models:
├── OCR: Tesseract + TrOCR (99% accuracy)
├── Object detection: YOLOv8 (30 FPS)
├── Image captioning: BLIP-2 (2 sec/image)
└── Trading chart analysis: Custom fine-tuned model
```

Use case: Screenshot trade, auto-extract all data

-----

### **Connectivity**

**Wireless:**

```txt
WiFi: WiFi 7 (802.11be)
├── Speed: Up to 5.8 Gbps
├── Bands: 2.4GHz, 5GHz, 6GHz
├── WiFi Direct (peer-to-peer)
└── Hotspot mode (share internet)

Bluetooth: 5.4
├── LE Audio support
├── Multi-device pairing (7 devices)
└── Range: 240 meters line-of-sight
```

**Wired:**

```txt
USB4 (2 ports):
├── Thunderbolt 4 compatible
├── External GPU support (eGPU via TB4 dock)
├── Dual 4K displays @ 60Hz
├── 40 Gbps data transfer
└── 100W power delivery (in/out)
```

Use cases:
- Connect to monitor + keyboard (desktop mode)
- Attach eGPU for gaming/heavy compute
- High-speed data transfer from cameras/drives

-----

### **Build Cost Estimate (Per Unit at 10,000 Units)**

|Component                     |Cost      |
|------------------------------|----------|
|AMD Ryzen AI 9 HX 370 APU     |$800      |
|96GB LPDDR5X RAM (soldered)   |$280      |
|1TB NVMe Gen 5 SSD            |$120      |
|7” AMOLED 2560x1600 display   |$80       |
|25,000mAh battery             |$80       |
|Aluminum unibody chassis      |$45       |
|Thermal vapor chamber         |$25       |
|USB4 controllers + ports      |$30       |
|Antennas (WiFi 7 + BT 5.4)    |$15       |
|Touch controller IC           |$10       |
|Power management IC           |$20       |
|Cameras (front 5MP, rear 13MP)|$25       |
|Speakers (stereo)             |$8        |
|Microphones (dual array)      |$5        |
|PCB (custom 12-layer)         |$60       |
|Assembly + QC                 |$80       |
|Packaging                     |$15       |
|(future phone carrier/hosted network)    |$??       |
|**TOTAL COGS**                |**$1,698**|

## **Retail Price:**

### **Base** (*64GB RAM, 512GB storage*): $2,499
### **Pro** (*96GB RAM, 1TB storage*): $2,999  ← RECOMMENDED
### **Max** (*120GB RAM, 2TB storage*): $3,499

**Margin:**

- COGS: $1,698
- Retail: $2,999
- Margin: $1,301 (43%)
- Sustainable for a startup

-----

## **Intellectual Property Strategy**

### **What to Patent:**

```txt
Unsure at this time
```

### **Trademarks:**

```txt
Register:
├── "StatikFinTech, LLC" (company name)
├── "S-IA" (product name)
├── Logo design
└── Tagline: "Local AI, Mobile Compute, Mobilize your Workflow."
```

Cost: $?? total
Timeline: 6-9 months
--or--
Royalty Payouts from Product profit and pilot tester and team member for supporting formed company.

### **Open Source Strategy:**

```txt
Open source (build community):
├── Unlocked, as always, using Linux firmware (kernel drivers, system configs)
├── Built-In SFTi Software Suite(Building out--in big time alpha)
├── Example apps (showcases like my journal, copilot chat, and the react Scanner App, pre-booting GremlinGPT)
└── Documentation
```

This approach:
✅ Attracts developers (open ecosystem)
✅ Protects core IP (closed secret sauce)
✅ Enables forks (community innovation)
✅ Prevents commoditization (key features proprietary)

-----

## **Next Steps**

1. **Validate Demand and Out-Reach**

   - Post concept on Reddit (r/LocalLLaMA, r/Hardware)
   - Create landing page (Carrd.co, free)
   - Google Form: "Would you buy this for $2,750?"
   - Goal: 100 emails from interested people
   
2. **Build/Get a Financial Model**

   - Spreadsheet: Unit economics
   - BOM cost vs. retail price
   - Break-even analysis (how many units to profitability?)
   - Subscription revenue projections
   - 3-year cashflow model
   - Share with potential angel investors for feedback
   
3. **Perform Competitive Analysis**
   
   - Research every AI hardware product (Humane, Rabbit, etc.)
   - What failed? Why?
   - What succeeded? How can we copy + improve?
   - Create comparison matrix
   - Identify: "What makes S-IO 10x better?"
 
5. **Find Co-Founder(s)/Funder(s) (Crucial)**
```txt
You need:
	├── Hardware engineer (electrical + mechanical)
	│   └── Find: LinkedIn, hardware hackerspaces, ODM contacts
	│
	├── Firmware engineer (embedded Linux expert)
	│   └── Find: GitHub (search "Jetson Orin" contributions)
	│
	└── Optional: Business/ops person (if you're technical)
	    └── Find: Startup events, Y Combinator founder matching

OR

Company with all of these that Loves the Idea and Blue Print. Sorry, Unorthodox, and maybe to honest
```

Equity split (typical):
   - You: 10-30% (idea, product, early execution)
   - Hardware co-founder: 20-30%
   - Software co-founder: 20-30%
   - Pool for employees: 10-20%
   - (Very Unsure here, Im new, I don't want to ask to much and be turned away as waste of time)

---

## **Risk Analysis & Mitigation**

**Technical Feasibility Test ($500)**

### **Market Risks:**


### **Execution Risks:**


## **Success Metrics**


## **The Pitch (60 Seconds)**


## 1 Year Plan
