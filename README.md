#  F1 Telemetry Portfolio 

A high-performance, responsive portfolio application designed to mimic a professional Formula 1 race engineer's dashboard and telemetry tracking feed. 

This project maps my academic milestones, software engineering internships, and research history as individual data sectors along a custom vector-traced racing circuit.

![System Status](https://img.shields.io/badge/SYSTEM__STATUS-ONLINE-green?style=flat-square&logo=font-mono)
![Stack](https://img.shields.io/badge/STACK-Next.js%20%7C%20Tailwind%20%7C%20Framer%20Motion-red?style=flat-square)

---

##  Tech Stack & Telemetry Core

* **Frontend Architecture:** Next.js (App Router) & React
* **Styling & UI Layers:** Tailwind CSS (Monospace/Sci-Fi Theme)
* **Motion Graphics:** Framer Motion (AnimatePresence sector state transitions)
* **Responsive Engine:** Inline SVG Canvas Coordinate Mapping (`viewBox="0 0 1000 650"`)

---

##  Features

### 1. Vector-Traced Circuit Canvas
Unlike basic image layouts that shift or break on mobile screens, the track layout utilizes an inline mathematical SVG vector map. The circuit shapes and sector bounds are dynamically calculated inside a single coordinate grid, making the entire display completely responsive without a single pixel of drift.

### 2. Live Sector Illumination
When a user toggles a career milestone via the timeline or details panel, the matching telemetry track sector dynamically lights up with its designated sector color scheme (ISU, Kingland, DataMavenz, D4, or Buildertrend).

### 3. Chronological Diagnostic Feed
Selecting a sector streams deep-dive chronicle logs detailing core engineering responsibilities, production tech stacks (C#, .NET, SQL, React, Python), and development methodologies.


---

## Local Deployment

To run the telemetry dashboard locally on your machine, execute the following commands:

```bash
# Clone the repository
git clone [https://github.com/varsharavivenkatesh/f1-portfolio.git](https://github.com/varsharavivenkatesh/f1-portfolio.git)

# Navigate into the project directory
cd f1-portfolio

# Install project dependencies
npm install

# Boot up the local development server
npm run dev
