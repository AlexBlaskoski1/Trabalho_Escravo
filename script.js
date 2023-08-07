document.addEventListener("DOMContentLoaded", function() {
  var regionChartCanvas = document.getElementById("region-chart").getContext("2d");
  var regionChart = new Chart(regionChartCanvas, {
    type: "bar",
    data: {
      labels: ["São Paulo", "Pedregulho", "Salto", "Limeira", "Indaiatuba"],
      datasets: [{
        label: "Número de Casos",
        data: [195, 55, 34, 30, 28],
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
    type: "pie",
    data: {
      labels: ["Operador de Motosserra", "Vendedor Pracista", "Trabalhador Volante da Agricultura", "Trabalhador Agropecuário em Geral", "Confecção na Máquina"],
      datasets: [{
        data: [924, 195, 166, 117, 117],
        backgroundColor: ["#a2825c", "#88d3ab", "#f9fad2", "#f5da7a", "#ff985e"],
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
      cutout: "0%"
    }
  });
});

  var economicChartCanvas = document.getElementById("economic-chart").getContext("2d");
  var economicChart = new Chart(economicChartCanvas, {
    type: "doughnut",
    data: {
      labels: ["Confecção de peças do vestuário, exceto roupas íntimas", "Cultivo de café", "Comércio varejista de produtos de padaria, laticínio e outros", "Cultivo de laranja", "Construção de edifícios"],
      datasets: [{
        data: [171, 56, 52, 46, 30],
        backgroundColor: ["#bd2f28", "#fcc574", "#295264", "#89373d", "#142433" ],
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
``
