// Función para crear una sección de alertas
function createAlertSection(title, id) {
    const section = document.createElement('div');
    section.className = 'alert-section';

    const sectionTitle = document.createElement('h2');
    sectionTitle.textContent = title;
    section.appendChild(sectionTitle);

    const indicator = document.createElement('p');
    indicator.textContent = 'Número de alertas: ';
    const countSpan = document.createElement('span');
    countSpan.id = id;
    countSpan.textContent = '0';  // Valor inicial
    indicator.appendChild(countSpan);

    section.appendChild(indicator);

    return section;
}

// Función para actualizar el contador de alertas
function updateAlertCount(id, count) {
    const countSpan = document.getElementById(id);
    if (countSpan) {
        countSpan.textContent = count;
    }
}

// Inicialización del contenedor de alertas
window.onload = function() {
    const alertsContainer = document.getElementById('alerts-container');

    // Crear y añadir las secciones al contenedor de alertas
    const lowRiskSection = createAlertSection('Riesgo Bajo', 'low-risk-count');
    const mediumRiskSection = createAlertSection('Riesgo Medio', 'medium-risk-count');
    const highRiskSection = createAlertSection('Riesgo Alto', 'high-risk-count');

    alertsContainer.appendChild(lowRiskSection);
    alertsContainer.appendChild(mediumRiskSection);
    alertsContainer.appendChild(highRiskSection);
}

// Ejemplo de cómo actualizar las alertas desde otro lugar en tu código:
// updateAlertCount('low-risk-count', 5);   // Actualiza el número de alertas de riesgo bajo a 5
// updateAlertCount('medium-risk-count', 2); // Actualiza el número de alertas de riesgo medio a 2
// updateAlertCount('high-risk-count', 1);   // Actualiza el número de alertas de riesgo alto a 1
