
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




