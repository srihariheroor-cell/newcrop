# 🌿 AgriVision AI - Smart Crop Detector & AI Agronomist

**AgriVision AI** is a modern, high-precision web application designed to empower farmers, agronomists, and agricultural researchers with AI-driven crop pathology diagnostics, real open-source LLM chat assistance (Groq Llama 3.3 70B), soil nutrient compatibility calculation, financial yield forecasting, and regional pest outbreak monitoring.

---

## 🌟 Key Features

- **🔬 AI Crop Diagnostic Studio (Computer Vision ExG Index)**:
  - Drag-and-drop crop leaf image uploader & camera simulation.
  - **Excess Greenness ($ExG = 2G - R - B$) Non-Plant Filter**: Automatically rejects random non-leaf images (clothing, furniture, pets, people, objects) and requests a clear plant leaf photo.
  - **Interactive Leaf Canvas Viewport**: Overlays real-time **Bounding Box** detection boundaries and **Severity Heatmaps** directly over uploaded or preset leaf photos.
  - Comprehensive diagnostic report with match confidence %, symptoms breakdown, biological causes, and dual **Organic vs Chemical Treatment Protocols**.

- **🤖 AgriBot AI Agronomist (Groq Open-Source LLM)**:
  - Powered by Groq's high-speed inference engine running **`llama-3.3-70b-versatile`** (with `llama-3.1-8b-instant` fallback).
  - Multi-turn conversation context memory for complex agricultural advice.
  - **Text-to-Speech (TTS)** voice output synthesizer.
  - Floating Chatbot widget accessible from any tab.

- **🧪 Soil & Nutrient Compatibility Doctor**:
  - Interactive sliders for Nitrogen (N), Phosphorus (P), Potassium (K), Soil pH, and Soil Moisture %.
  - Live crop suitability matching matrix (0-100%) and custom fertilizer amendment recipes.

- **💰 Crop Yield & Financial Profit Estimator**:
  - Farm acreage financial calculator estimating harvest tonnage, market revenue ($), untreated disease loss risk, and net treatment recovery gain.

- **🛰️ Regional Outbreak Radar**:
  - 9-zone interactive regional grid displaying micro-climate telemetry (temp, relative humidity, fungal spore index, action warnings).

- **📅 Field Journal & Treatment Tracker**:
  - Farm plot manager for logging spray events and harvest reminders with `localStorage` persistence.

---

## 📁 Repository Structure

```
smart-crop-detector/
├── index.html        # Main HTML web app shell & UI tabs
├── styles.css        # Glassmorphic dark agritech styling system
├── js/
│   ├── app.js        # Core engine, ExG computer vision & Groq LLM integration
│   ├── cropDiseases.js  # Pathology database & diagnostic coordinates
│   ├── botKnowledge.js # Offline agronomist knowledge engine
│   └── groqService.js  # Groq Llama-3.3 70B open-source LLM client
└── README.md
```

---

## 🚀 How to Run Locally

1. Clone or download this repository.
2. Serve static files using Python's built-in HTTP server:
   ```bash
   python -m http.server 8000
   ```
3. Open your browser and navigate to: **http://localhost:8000**

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, Vanilla CSS3 (Glassmorphism, CSS Custom Properties), Modern ES6 JavaScript.
- **Computer Vision**: HTML5 Canvas API & Excess Greenness ($ExG$) Color Spectrum Analysis.
- **AI Engine**: Groq Cloud API (`llama-3.3-70b-versatile`).
- **Speech**: Web Speech API (`SpeechSynthesis`).

---

## 🚀 How to Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Smart Crop Detector & AI Agronomist Web Application"
git branch -M main
git remote add origin https://github.com/srihariheroor-cell/crophealth.git
git push -u origin main
```
