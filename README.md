# Spiking Neural Network Benchmark & Architecture

This repository hosts an interactive, data-driven visualization comparing state-of-the-art AI architectures, highlighting the performance, efficiency, and latency improvements achieved by **Pruned Spiking Neural Networks (SNNs)** over traditional Transformers and dense SNNs.

## 🔬 Project Overview

The core objective of this project is to evaluate and visualize the trade-offs in modern deep learning architectures. This presentation site dynamically plots key metrics to demonstrate why Spiking Neural Networks are crucial for ultra-low power, edge-deployed AI:

1. **Transformer Baseline:** High accuracy but heavily bottlenecked by power consumption and inference latency.
2. **Dense SNN:** Improved energy efficiency through spike-based computation, but suffers from slower training times.
3. **Pruned SNN:** The optimized architecture that leverages sparsity to achieve a **95% reduction in energy consumption** while maintaining competitive accuracy and massively improving throughput.

## 📊 Key Metrics Visualized

- **Accuracy vs. Speed:** Analyzing the performance trade-offs.
- **Hardware Latency:** Real-world execution time on neuromorphic or simulated edge hardware.
- **Energy Consumption:** Measuring mJ per epoch, showcasing the massive efficiency gains of sparse spikes.
- **Throughput:** Processing speed under heavy loads.

## 📂 Repository Structure

- `ml/`: Contains the core Jupyter Notebook (`SpikingNeuralNetwork_Architecture.ipynb`) detailing the architecture design, training loop, pruning algorithms, and evaluation scripts.
- `index.html` & `app.js`: The frontend visualization dashboard built with vanilla JavaScript and Chart.js for lightweight, instant rendering.
- `styles.css`: Custom UI styling for the dark-mode dashboard.

## 🛠️ Running Locally

Because this is a lightweight, zero-dependency presentation site, you can run it instantly:

1. Clone the repository
2. Open `index.html` in any modern web browser.
3. (Optional) Run a local HTTP server: `python3 -m http.server 8000`

---
*Built to demonstrate neuromorphic computing efficiency and architectural benchmarking.*
