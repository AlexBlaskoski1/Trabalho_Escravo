document.addEventListener("DOMContentLoaded", function() {
  var regionChartCanvas = document.getElementById("region-chart").getContext("2d");
  var regionChart = new Chart(regionChartCanvas, {
    type: "bar",
    data: {
      labels: ["Região 1", "Região 2", "Região 3", "Região 4", "Região 5"],
      datasets: [{
        label: "Número de Casos",
        data: [500, 300, 200, 400, 600],
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        borderWidth: 1
      }]
    },
    options:{
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            font: {
              weight: "bold"
            },
            color: "#495057"
          },
          title: {
            display: true,
            text: "Número de Casos",
            font: {
              weight: "bold"
            },
            color: "#495057"
          }
        },
        x: {
          grid: {
            display: false
          },
          ticks: {
            font: {
              weight: "bold"
            },
            color: "#495057"
          },
          title: {
            display: true,
            text: "Regiões",
            font: {
              weight: "bold"
            },
            color: "#495057"
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });

  var literacyChartCanvas = document.getElementById("literacy-chart").getContext("2d");
  var literacyChart = new Chart(literacyChartCanvas, {
    type: "doughnut",
    data: {
      labels: ["Alfabetizados", "Não Alfabetizados"],
      datasets: [{
        data: [80, 20],
        backgroundColor: ["#28a745", "#dc3545"],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: "bottom",
          labels: {
            font: {
              weight: "bold"
            },
            color: "#495057"
          }
        }
      },
      cutout: "70%"
    }
  });
});
``
//