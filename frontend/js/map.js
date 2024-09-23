
// Selecciona el SVG donde se dibujarán las estancias
const map = document.getElementById('map');

// Función para añadir el título centrado
function agregarTitulo(texto) {
    const titulo = document.createElementNS("http://www.w3.org/2000/svg", "text");
    titulo.setAttribute("x", 500); // Centra el texto horizontalmente según el viewBox
    titulo.setAttribute("y", 30); // Ajusta la posición vertical
    titulo.setAttribute("font-family", "Arial");
    titulo.setAttribute("font-size", "24"); // Tamaño de la fuente
    titulo.setAttribute("text-anchor", "middle"); // Ancla el texto en el centro
    titulo.setAttribute("fill", "black"); // Color del texto
    titulo.textContent = texto; // Texto que se mostrará
    map.appendChild(titulo);
}

// Llamada a la función para añadir el título
agregarTitulo("Edificio 3P - AGRONOMOS");

// Función para crear una estancia con un ID
function crearEstancia(x, y, width, height, color, text, id) {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x); // Posición horizontal
    rect.setAttribute("y", y); // Posición vertical
    rect.setAttribute("width", width); // Ancho del rectángulo
    rect.setAttribute("height", height); // Alto del rectángulo
    rect.setAttribute("fill", color); // Color de fondo
    rect.setAttribute("stroke", "black"); // Color del borde
    rect.setAttribute("id", id); // Asigna el ID
    map.appendChild(rect); // Añade el rectángulo al SVG

    // Asigna un evento de clic
    rect.addEventListener('click', function() {
        alert(`Has hecho clic en la estancia con ID: ${id}`);
    });

    // Crea el texto que se mostrará dentro de la estancia
    const texto = document.createElementNS("http://www.w3.org/2000/svg", "text");
    texto.setAttribute("x", x + width / 2); // Posición horizontal centrada
    texto.setAttribute("y", y + height / 2); // Posición vertical centrada
    texto.setAttribute("font-family", "Arial"); // Tipo de fuente
    texto.setAttribute("font-size", "12"); // Tamaño de fuente
    texto.setAttribute("text-anchor", "middle"); // Centrado horizontal
    texto.setAttribute("alignment-baseline", "middle"); // Centrado vertical
    texto.textContent = text; // Texto que se mostrará
    map.appendChild(texto);
}

// Función para crear un pasillo en forma de T con texto que incluye salto de línea
function crearPasilloT(x, y, width, height, color, text, id) {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x); // Posición horizontal
    rect.setAttribute("y", y); // Posición vertical
    rect.setAttribute("width", width); // Ancho del rectángulo
    rect.setAttribute("height", height); // Alto del rectángulo
    rect.setAttribute("fill", color); // Color de fondo
    rect.setAttribute("stroke", "pink"); // Color del borde
    rect.setAttribute("id", id); // Asigna el ID
    map.appendChild(rect); // Añade el rectángulo al SVG

    // Asigna un evento de clic
    rect.addEventListener('click', function() {
        alert(`Has hecho clic en el pasillo con ID: ${id}`);
    });

    // Crea el texto que se mostrará dentro del pasillo
    const texto = document.createElementNS("http://www.w3.org/2000/svg", "text");
    texto.setAttribute("x", x + width / 2); // Posición horizontal centrada
    texto.setAttribute("y", y + height / 2); // Posición vertical centrada
    texto.setAttribute("font-family", "Arial"); // Tipo de fuente
    texto.setAttribute("font-size", "12"); // Tamaño de fuente
    texto.setAttribute("text-anchor", "middle"); // Centrado horizontal
    texto.setAttribute("alignment-baseline", "middle"); // Centrado vertical

    // Divide el texto por saltos de línea y crea tspan para cada línea
    const lineas = text.split("\n");
    lineas.forEach((linea, index) => {
        const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        tspan.setAttribute("x", x + width / 2); // Mantén la misma posición x para todas las líneas
        tspan.setAttribute("dy", index === 0 ? "0" : "1.2em"); // Ajusta la distancia entre líneas
        tspan.textContent = linea;
        texto.appendChild(tspan);
    });

    map.appendChild(texto);
}


// Crear estancias con IDs
//pos hori / pos ver / ancho / alto 
crearEstancia(50, 50, 150, 110, "lightgreen", "V.3B.0.017", "3B.0.017");
crearEstancia(200, 50, 60, 20, "violet", "V.3B.0.021", "3B.0.021");
crearEstancia(200, 70, 60, 90, "purple", "V.3B.0.06", "3B.0.06");
crearEstancia(260, 50, 60, 110, "lightblue", "V.3B.0.005", "3B.0.005");
crearEstancia(320, 50, 220, 110, "tan", "V.3B.0.004", "3B.0.004");
crearEstancia(540, 50, 60, 110, "brown", "V.3B.0.003", "3B.0.003");
crearEstancia(600, 50, 120, 110, "violet", "V.3B.0.002", "3B.0.002");
crearEstancia(525, 210, 195, 100, "red", "V.3B.0.016", "3B.0.016");
crearEstancia(290, 260, 85, 50, "purple", "V.3B.0.013", "3B.0.013");
crearEstancia(375, 260, 80, 50, "lightblue", "V.3B.0.014", "3B.0.014");
crearEstancia(50, 210, 170, 100, "lightgreen", "V.3B.0.010", "3B.0.010");
crearEstancia(50, 310, 100, 170, "lightgreen", "V.3B.0.018", "3B.0.018");
crearEstancia(150, 310, 100, 170, "lightgreen", "V.3B.0.019", "3B.0.019");
crearEstancia(250, 310, 245, 170, "lightgreen", "V.3B.0.012", "3B.0.012");
crearEstancia(495, 310, 225, 170, "lightgreen", "V.3B.0.015", "3B.0.015");

crearPasilloT(50, 160, 150, 50, "white", "P - 0.020", "V.3B.0.020");
crearPasilloT(200, 160, 520, 50, "white", "P - 0.001", "V.3B.0.001");

crearPasilloT(220, 210, 70, 100, "white", "P - 0.020", "3B.0.020");
crearPasilloT(455, 210, 70, 100, "white", "P - 0.020", "3B.0.020");
crearPasilloT(290, 210, 165, 50, "white", "P - 0.020", "3B.0.020");
//crearPasilloT(720, 160, 100, 50, "white", "P - 0.010 \n To 3C", "V.3C.0.010");