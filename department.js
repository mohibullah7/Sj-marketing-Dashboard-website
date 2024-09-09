


const ctx3 = document.getElementById('chart3').getContext('2d'); // Updated variable for doughnut chart

new Chart(ctx3, {
  type: 'doughnut', // Changed type to doughnut
  data: {
    labels: ['Marketing', 'Finance', 'HR', 'IT','Research'],
    datasets: [{
      data: [50, 30, 10, 20,50],
      backgroundColor: ['#295F98', '#36A2EB', '#8EACCD', '#4BC0C0','#FF6384'], // Different colors for sections
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
