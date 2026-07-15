// Datos personalizados Geraldo + estilo Jeft_fit
const user = {name:"Geraldo Meneses", age:40};

const routines3Months = [
    {mes:"Mes 1 - Base Técnica", desc:"Enfócate en forma perfecta (Jeft). 4 días/semana PPL", days:["Push: Press Banca 4x8-10, Press Militar 3x10, Fondos","Pull: Dominadas o Remos 4x8-12, Face Pulls","Legs: Sentadillas 4x8-10, Peso Muerto Rumano"]},
    {mes:"Mes 2 - Hipertrofia", desc:"Aumenta volumen y carga progresiva", days:["Push: Inclinado + Aislados pecho/hombros","Pull: Jalones + Remos con control excéntrico","Legs: Búlgaras + Hip Thrust + Gemelos"]},
    {mes:"Mes 3 - Definición", desc:"Supersets y drop sets para quemar grasa manteniendo músculo", days:["Añade intensidad y reduce descanso"]}
];

function showTab(n) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.getElementById(`tab${n}`).classList.add('active');
    
    if (n===1) renderRoutines();
    if (n===2) renderDiet();
    if (n===3) renderSupplements();
    if (n===4) renderProgress();
}

function renderRoutines() {
    let html = `<h2>Rutina 3 Meses - Estilo Jeft_fit</h2>`;
    routines3Months.forEach(r => {
        html += `<div class="exercise"><h3>${r.mes}</h3><p>${r.desc}</p><ul>`;
        r.days.forEach(d => html += `<li>${d}</li>`);
        html += `</ul></div>`;
    });
    document.getElementById('routines-content').innerHTML = html;
}

function renderDiet() {
    const html = `
        <h2>Dieta Económica Venezuela (2800-3200 kcal)</h2>
        <p>Macros aprox: 160g proteína, 300g carbs, 90g grasa</p>
        <ul>
            <li>Desayuno: Avena + 4 huevos + plátano + maní</li>
            <li>Almuerzo: Arroz + pollo/pescado + caraotas + ensalada + aguacate</li>
            <li>Merienda: Atún en lata + arepa o yuca</li>
            <li>Cena: Huevos + queso + vegetales + plátano</li>
        </ul>
        <p>Bebe mucha agua. Come arroz, caraotas, plátano, pollo y huevos como base.</p>
    `;
    document.getElementById('diet-content').innerHTML = html;
}

function renderSupplements() {
    const html = `
        <h2>Suplementos Recomendados</h2>
        <ul>
            <li>Creatina 5g diarios (post-entreno)</li>
            <li>Proteína whey o en polvo (1 scoop post-entreno)</li>
            <li>Vitamina D + Omega-3 (mañana)</li>
            <li>Multivitamínico básico</li>
        </ul>
        <p>Horario: Mañana vitaminas, post-entreno creatina + proteína.</p>
    `;
    document.getElementById('supp-content').innerHTML = html;
}

function renderProgress() {
    document.getElementById('progress-content').innerHTML = `
        <h2>Progreso</h2>
        <p>Registra tu peso semanal y fotos. Apunta a +0.5kg/mes de músculo limpio.</p>
        <button onclick="alert('¡Progreso guardado! Sigue consistente Geraldo 💪')">Registrar Peso Hoy</button>
    `;
}

function startWorkout() {
    alert("¡Entrenamiento de Hoy activado! (Push/Pull/Legs según fase). Registra series, reps y peso.");
    showTab(1);
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderRoutines();
    console.log("Geraldo Fit lista para ti");
});
