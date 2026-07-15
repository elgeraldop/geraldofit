// Rutinas detalladas 3 meses - Geraldo 40+
const detailedRoutines = [
    {
        mes: "Mes 1 - Base Técnica (Semanas 1-4)",
        days: [
            {day: "Día 1 - Push", img: "https://source.unsplash.com/random/800x400/?benchpress", exercises: ["Press Banca 4x8-10", "Press Militar 3x10-12", "Fondos 3x10-12"], focus: "Técnica perfecta"},
            {day: "Día 2 - Pull", img: "https://source.unsplash.com/random/800x400/?pullups", exercises: ["Dominadas asistidas o Remos 4x8-10", "Jalones al pecho 3x10-12", "Face Pull 3x12"], focus: "Contracción y control"},
            {day: "Día 3 - Piernas", img: "https://source.unsplash.com/random/800x400/?squats", exercises: ["Sentadillas 4x8-10", "Peso Muerto Rumano 3x10", "Elevaciones gemelos 3x15"], focus: "Fuerza base"},
            {day: "Día 4 - Descanso o movilidad"}
        ]
    },
    {
        mes: "Mes 2 - Hipertrofia (Semanas 5-8)",
        days: [
            {day: "Día 1 - Push", img: "https://source.unsplash.com/random/800x400/?chestworkout", exercises: ["Press Inclinado 4x8-10", "Aperturas + Press Militar", "Fondos con peso"], focus: "Aumenta peso cada semana"},
            {day: "Día 2 - Pull", img: "https://source.unsplash.com/random/800x400/?backworkout", exercises: ["Remo con barra 4x8-10", "Jalones supinos", "Curl bíceps"], focus: "Hipertrofia dorsal"},
            {day: "Día 3 - Piernas", img: "https://source.unsplash.com/random/800x400/?legday", exercises: ["Sentadilla Búlgara 4x10", "Hip Thrust 4x10", "Prensa o Zancadas"], focus: "Volumen"}
        ]
    },
    {
        mes: "Mes 3 - Definición e Intensidad (Semanas 9-12)",
        days: [
            {day: "Día 1 - Push", img: "https://source.unsplash.com/random/800x400/?intenseworkout", exercises: ["Supersets Press + Aperturas", "Drop sets en hombros"], focus: "Quema grasa manteniendo músculo"},
            {day: "Día 2 - Pull", img: "https://source.unsplash.com/random/800x400/?backmuscles", exercises: ["Remo + Dominadas superset"], focus: "Alta intensidad"},
            {day: "Día 3 - Piernas", img: "https://source.unsplash.com/random/800x400/?stronglegs", exercises: ["Sentadillas + Búlgaras"], focus: "Metabolismo alto"}
        ]
    }
];

let progressLog = JSON.parse(localStorage.getItem('progressLog')) || {};
let streak = JSON.parse(localStorage.getItem('streak')) || 0;

function showTab(n) { /* misma lógica anterior */ }

function renderRoutines() {
    let html = `<h2>Rutinas Detalladas 3 Meses</h2>`;
    detailedRoutines.forEach(mes => {
        html += `<div class="card"><h3>${mes.mes}</h3>`;
        mes.days.forEach(d => {
            html += `
                <div class="exercise">
                    <h4>${d.day}</h4>
                    <img src="${d.img}" alt="${d.day}">
                    <p><strong>Enfoque:</strong> ${d.focus}</p>
                    <ul>${d.exercises.map(ex => `<li>${ex}</li>`).join('')}</ul>
                    <button onclick="startDayTracker('${d.day}')">Registrar este día</button>
                </div>`;
        });
        html += `</div>`;
    });
    document.getElementById('routines-content').innerHTML = html;
}

function startDayTracker(day) {
    // Aquí se abre tracker simple para registrar pesos
    let log = prompt(`Registra para ${day} (ej: Press Banca 4x8x60kg)`);
    if (log) {
        progressLog[day] = log;
        localStorage.setItem('progressLog', JSON.stringify(progressLog));
        streak++;
        localStorage.setItem('streak', streak);
        alert(`¡Día ${day} registrado! 🔥 Racha actual: ${streak} días`);
    }
}

function renderTracker() {
    let html = `<h2>Tracker de Progreso</h2><p>Racha actual: ${streak} días 🔥</p>`;
    Object.keys(progressLog).forEach(day => {
        html += `<div class="exercise">${day}: ${progressLog[day]} <button class="done">✓</button></div>`;
    });
    document.getElementById('tracker-content').innerHTML = html + `<button onclick="resetStreak()">Reiniciar Racha</button>`;
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderRoutines();
    renderTracker();
});
