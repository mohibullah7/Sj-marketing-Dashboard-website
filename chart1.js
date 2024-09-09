
// const ctx1 = document.getElementById('chart1');

// new Chart(ctx1, {
//   type: 'pie',
//   data: {
//     labels: ['Employee', 'Team Leader', 'Manager', 'Administration'],
//     datasets: [{
//       data: [50, 30, 10, 20],
//       backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'], // Different colors for the sections
//       borderWidth: 1
//     }]
//   },
//   options: {
//     plugins: {
//       legend: {
//         display: true,
//         position: 'right', // Position the legend to the right side
//         labels: {
//           boxWidth: 10, // Customize box size for legend items
          
//           font: {
//             size: 14 // Customize font size
//           }
//         }
//       }
//     },
//     responsive: true,
//     maintainAspectRatio: false, // Allow responsiveness for the chart
//   }
// });


const ctx1 = document.getElementById('chart1').getContext('2d');

new Chart(ctx1, {
  type: 'pie',
  data: {
    labels: ['Employee', 'Team Leader', 'Manager', 'Administration'],
    datasets: [{
      data: [50, 30, 10, 20],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'], // Different colors for sections
      borderWidth: 1
    }]
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: 'right',
        labels: {
          boxWidth: 10, // Adjust box size
          boxHeight: 10, // Make the boxes more square-shaped
          borderRadius: 50, // Circular boxes
          padding: 10, // Space between the legend items
          font: {
            size: 14 // Customize font size
          }
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false // Responsive chart
  }
});
