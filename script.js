
const canvas = document.getElementById('offcanvas');

function show() {
    if (canvas.classList.contains('d-none')) {
        canvas.classList.remove('d-none');
        canvas.style.width = '300px'; 
    } else {
        canvas.classList.add('d-none');
        canvas.style.width = ''; 
    }
}




const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});