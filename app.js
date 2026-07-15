const detailedRoutines = [ /* mismo contenido detallado del mensaje anterior */ ];

let progressLog = JSON.parse(localStorage.getItem('progressLog')) || {};
let streak = parseInt(localStorage.getItem('streak')) || 0;

function showTab(n) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.getElementById(`tab${n}`).classList.add('active');
    if (n === 1) renderRoutines();
    if (n === 2) renderDiet();
    if (n === 3) renderTracker();
    if (n === 4) renderSupplements();
}

function renderRoutines() {
    let html = `<h2>Rutinas Detalladas 3 Meses</h2>`;
    // (copia el renderRoutines completo del mensaje anterior con imágenes y ejercicios)
    document.getElementById('routines-content').innerHTML = html;
}

// Agrega las demás funciones (renderDiet, renderTracker, etc.) del mensaje anterior

document.addEventListener('DOMContentLoaded', () => {
    renderRoutines();
});
