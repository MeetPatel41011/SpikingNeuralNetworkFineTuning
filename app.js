// Metrics extracted from the benchmark
const metrics = {
    labels: ['Transformer', 'SNN', 'Pruned SNN'],
    accuracy: [75.3, 72.0, 73.5],
    time: [47.95, 241.39, 96.62],
    throughput: [833, 118334, 117555],
    energy: [48.23, 2.29, 2.30],
    test_time: [1.20, 0.0085, 0.0085]
};

// Colors matching CSS tokens
const colors = {
    transformer: 'rgba(66, 133, 244, 0.8)', // Primary Blue
    snn: 'rgba(234, 67, 53, 0.8)',          // Accent1 Red
    pruned: 'rgba(251, 188, 5, 0.8)',       // Accent2 Yellow
    border: 'rgba(255, 255, 255, 0.2)',
    text: '#fafafa'
};

const bgColors = [colors.transformer, colors.snn, colors.pruned];

// Global Chart settings for Dark Mode
Chart.defaults.color = colors.text;
Chart.defaults.font.family = "'Outfit', sans-serif";
Chart.defaults.scale.grid.color = colors.border;

// 1. Radar Chart (Hero Section)
const radarCtx = document.getElementById('radarChart').getContext('2d');
new Chart(radarCtx, {
    type: 'radar',
    data: {
        labels: ['Accuracy', 'Speed', 'Efficiency', 'Sparsity'],
        datasets: [
            {
                label: 'Transformer',
                data: [90, 100, 5, 0], // Normalized subjective scores
                backgroundColor: 'rgba(66, 133, 244, 0.2)',
                borderColor: colors.transformer,
                pointBackgroundColor: colors.transformer,
            },
            {
                label: 'Pruned SNN',
                data: [80, 20, 100, 100], 
                backgroundColor: 'rgba(251, 188, 5, 0.2)',
                borderColor: colors.pruned,
                pointBackgroundColor: colors.pruned,
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            r: {
                angleLines: { color: colors.border },
                grid: { color: colors.border },
                pointLabels: { color: colors.text, font: { size: 14, weight: 600 } },
                ticks: { display: false, max: 100, min: 0 }
            }
        },
        plugins: {
            legend: { position: 'bottom' }
        }
    }
});

// 2. Training Time Chart
new Chart(document.getElementById('timeChart'), {
    type: 'bar',
    data: {
        labels: metrics.labels,
        datasets: [{
            label: 'Total Time (s)',
            data: metrics.time,
            backgroundColor: bgColors,
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: 8
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } }
    }
});

// 3. Test Accuracy Chart
new Chart(document.getElementById('accChart'), {
    type: 'bar',
    data: {
        labels: metrics.labels,
        datasets: [{
            label: 'Accuracy (%)',
            data: metrics.accuracy,
            backgroundColor: bgColors,
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: 8
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { y: { min: 50, max: 80 } }
    }
});

// 4. Test Time Chart
new Chart(document.getElementById('throughputChart'), {
    type: 'bar',
    data: {
        labels: metrics.labels,
        datasets: [{
            label: 'Hardware Latency (ms)',
            data: metrics.test_time,
            backgroundColor: bgColors,
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: 8
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { y: { type: 'logarithmic' } }
    }
});

// 5. Energy Chart
new Chart(document.getElementById('energyChart'), {
    type: 'bar',
    data: {
        labels: metrics.labels,
        datasets: [{
            label: 'Energy per Epoch (mJ)',
            data: metrics.energy,
            backgroundColor: bgColors,
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: 8,
            barPercentage: 0.6
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.parsed.y + ' mJ';
                    }
                }
            }
        },
        scales: { y: { type: 'logarithmic' } }
    }
});
