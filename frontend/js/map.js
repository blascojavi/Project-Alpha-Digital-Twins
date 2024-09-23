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

    // Crea el texto que se mostrará dentro de la estancia
    const texto = document.createElementNS("http://www.w3.org/2000/svg", "text");
    texto.setAttribute("x", x + 10); // Posición horizontal ajustada
    texto.setAttribute("y", y + height / 2); // Posición vertical centrada
    texto.setAttribute("font-family", "Arial"); // Tipo de fuente
    texto.setAttribute("font-size", "12"); // Tamaño de fuente
    texto.textContent = text; // Texto que se mostrará
    map.appendChild(texto);
}

// Función para crear un pasillo en forma de T
function crearPasilloT(x, y, width, height, color, id) {
    // Pasillo vertical
    crearEstancia(x + width / 4, y, width / 2, height, color, "Pasillo T", id + "_vertical");
    // Pasillo horizontal
    crearEstancia(x, y + height, width, height / 4, color, "", id + "_horizontal");
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
crearEstancia(290, 260, 85, 50, "purple", "V.3B.0.013", "0.013");
crearEstancia(375, 260, 80, 50, "lightblue", "V.3B.0.014", "0.014");
crearEstancia(50, 200, 170, 110, "lightgreen", "V.3B.0.010", "3B.0.010");
crearEstancia(50, 310, 100, 170, "lightgreen", "V.3B.0.018", "3B.0.018");
crearEstancia(150, 310, 100, 170, "lightgreen", "V.3B.0.019", "3B.0.019");
crearEstancia(250, 310, 245, 170, "lightgreen", "V.3B.0.012", "3B.0.012");
crearEstancia(495, 310, 225, 170, "lightgreen", "V.3B.0.015", "3B.0.015");



crearEstancia(50, 160, 670, 50, "white", "Pasillo1", "pasillo1");
crearEstancia(220, 210, 70, 100, "white", "Pasillo2", "pasillo2");
crearEstancia(455, 210, 70, 100, "white", "Pasillo3", "pasillo3");
crearEstancia(290, 210, 165, 50, "white", "Pasillo4", "pasillo4");
