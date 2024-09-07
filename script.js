const canvas = document.getElementById('offcanvas');

function show() {
    // Toggle the d-none class based on visibility
    if (canvas.classList.contains('d-none')) {
        canvas.classList.remove('d-none');
    } else {
        canvas.classList.add('d-none');
    }
}