// const ctx = document.getElementById('chart2').getContext('2d');
// const myChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ['DHA', 'Tariq Road', 'Mayammar', 'Bahawalpur', 'India'],
//     datasets: [{
//       label: '# of Votes',
//       data: [100, 80, 60, 40, 40],
//       backgroundColor: '#090944',
//       borderWidth: 1,
//       barThickness: 30, // Width of the bars
//       borderRadius: 10,
//       borderSkipped: false,
//       categoryPercentage: 0.8, // Space between bars
//       barPercentage: 0.9, // Space within each bar
//     }]
//   },
//   options: {
//     plugins: {
//       legend: {
//         display: false,
//         labels: {
//           font: {
//             size: 10 // Font size for legend
//           }
//         }
//       },
//       tooltip: {
//         callbacks: {
//           label: function(tooltipItem) {
//             const label = tooltipItem.dataset.label || '';
//             const value = tooltipItem.raw || '';
//             return `${label}: ${value}`;
//           }
//         },
//         titleFont: {
//           size: 12 // Font size for tooltip title
//         },
//         bodyFont: {
//           size: 10 // Font size for tooltip body
//         }
//       }
//     },
//     scales: {
//       y: {
//         beginAtZero: false,
//         min: 20,
//         max: 100,
//         ticks: {
//           stepSize: 20,
//           callback: function(value) {
//             return value;
//           },
//           font: {
//             size: 12 // Font size for y-axis labels
//           }
//         },
//         grid: {
//           display: true,
//           borderDash: [5, 5],
//           color: 'rgba(0, 0, 0, 0.1)' // Color for grid lines
//         }
//       },
//       x: {
//         ticks: {
//           font: {
//             size: 12 // Font size for x-axis labels
//           }
//         },
//         grid: {
//           display: false
//         }
//       }
//     }
//   }
// });


const ctx = document.getElementById('chart2').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['DHA', 'Tariq Road', 'Mayammar', 'Bahawalpur', 'India'],
    datasets: [{
      label: '# of Votes',
      data: [50, 80, 40, 70, 40],
      backgroundColor: '#090944',
      borderWidth: 1,
      barThickness: 40, // Width of the bars
      borderRadius: 10,
      borderSkipped: false,
      categoryPercentage: 0.8, // Space between bars
      barPercentage: 0.9, // Space within each bar
    }]
  },
  options: {
    responsive: true, // Make the chart responsive
    maintainAspectRatio: false, // Allow the chart to resize
    plugins: {
      legend: {
        display: false,
        labels: {
          font: {
            size: 10 // Font size for legend
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            const label = tooltipItem.dataset.label || '';
            const value = tooltipItem.raw || '';
            return `${label}: ${value}`;
          }
        },
        titleFont: {
          size: 12 // Font size for tooltip title
        },
        bodyFont: {
          size: 10 // Font size for tooltip body
        }
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 20,
        max: 100,
        ticks: {
          stepSize: 20,
          callback: function(value) {
            return value;
          },
          font: {
            size: 12 // Font size for y-axis labels
          }
        },
        grid: {
          display: true,
          borderDash: [5, 5],
          color: 'rgba(0, 0, 0, 0.1)' // Color for grid lines
        }
      },
      x: {
        ticks: {
          font: {
            size: 12 // Font size for x-axis labels
          }
        },
        grid: {
          display: false
        }
      }
    }
  }
});
