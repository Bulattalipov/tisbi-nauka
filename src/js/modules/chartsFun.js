import { Chart, registerables } from 'chart.js';

export default function() {

  const block = document.querySelector('.charts');

  if(!block) return;

  Chart.register(...registerables);

  // Диаграмма номер 1

  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: dataCharts.chart1,
    options: {
      scales: {
        y: {
          beginAtZero: true,
          border: {
            display: false
          },
        },
        x: {
          border: {
            display: false
          },
        }
      },
      plugins: {
        legend: {
            display: false,
            labels: {
                color: 'rgb(256, 256, 256)',
            },
            position: 'bottom'
        }
      }
    }
  });


  // Диаграмма номер 2

  const ctx2 = document.getElementById('myChart2');

  new Chart(ctx2, {
    type: 'polarArea',
    data: dataCharts.chart2,
    options: {
      borderWidth: 0,
      borderDashOffset: 2,
      borderAlign: 'inner',
      plugins: {
        legend: {
            display: true,
            labels: {
              boxWidth: 20,
              boxHeight: 20
            },
            position: 'bottom'
        }
      }
    }
  })


  // Диаграмма номер 3

  const ctx3 = document.getElementById('myChart3');

  new Chart(ctx3, {
    type: 'doughnut',
    data: dataCharts.chart3,
    options: {
      borderWidth: 0,
      plugins: {
        legend: {
            display: true,
            labels: {
                boxWidth: 27,
                boxHeight: 20
            },
            position: 'bottom',
            align: 'start'
        }
      }
    }
  });
}
