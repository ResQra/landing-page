# ResQra — Official Product & Hackathon Showcase Landing Page

A dedicated, informational, world-class landing page for **ResQra** (Autonomous Agentic Flood Disaster Response Platform).

Built specifically for hackathon judges, disaster agency officials, and the public to explain the system's architecture, multi-agent reasoning, deterministic safety boundaries, and dual-persona workflows.

---

## Key Features

1. **Global Disaster Problem Framing**: Contrasts the failure modes of legacy 911 dispatch lines and spreadsheet triage against ResQra's autonomous multi-agent coordination.
2. **Interactive 5-Stage Agent Pipeline**: Visualizes the flow from Multilingual Report Intake → Deterministic Priority Scoring → Constrained Fleet Allocation → WatchAgent Sweeps → Human-in-the-Loop Approval Cards.
3. **Dual-Persona Interactive Showcase**: Toggles between the **Resident Life-Line PWA** (mobile SOS, empathetic multilingual Copilot) and the **Tactical Command Center Console** (live GIS canvas, boat squadron telemetry).
4. **Safety-by-Design Architectural Defense**: Explains why generative LLMs are restricted to language perception and translation, while life-critical dispatch and triage scoring remain 100% deterministic.
5. **1-Click Sandbox Launchpad**: Instant navigation cards to:
   - **Resident SOS Portal** (`http://localhost:5173`)
   - **Tactical Command Console** (`http://localhost:5173/login`)
   - **4-Act Judge Simulation & Chaos Sandbox** (`http://localhost:5174`)
   - **FastAPI OpenAPI Specifications** (`http://localhost:8000/docs`)

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server (Port 5175)
npm run dev
```

The landing page runs at:
👉 **`http://localhost:5175`**

---

## Production Build

```bash
npm run build
npm run preview
```

---

## Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 + Custom Tactical Glassmorphism
- **Icons**: Lucide React
- **Typography**: Plus Jakarta Sans + JetBrains Mono
