//https://leafletjs.com/examples/quick-start/



// Selecciona el SVG donde se dibujarán las estancias
const map = document.getElementById('map');

// Función para crear una estancia
function crearEstancia(x, y, width, height, color, text) {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x); // Posición horizontal
    rect.setAttribute("y", y); // Posición vertical
    rect.setAttribute("width", width); // Ancho del rectángulo
    rect.setAttribute("height", height); // Alto del rectángulo
    rect.setAttribute("fill", color); // Color de fondo
    rect.setAttribute("stroke", "black"); // Color del borde
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
function crearPasilloT(x, y, width, height, color) {
    // Pasillo vertical
    crearEstancia(x + width / 4, y, width / 2, height, color, "Pasillo T");
    // Pasillo horizontal
    crearEstancia(x, y + height, width, height / 4, color, "");
}

// Crear estancias (añade más según el plano)

crearEstancia(50, 50, 120, 120, "lightgreen", "V.3B.0.017");
crearEstancia(170, 50, 70, 20, "orange", "");
crearEstancia(170, 70, 70, 100, "purple", "V.3B.0.06");
crearEstancia(240, 50, 70, 120, "lightblue", "V.3B.0.017");
crearEstancia(310, 50, 70, 120, "brown", "V.3B.0.017");


/*crearEstancia(150, 50, 100, 50, "lightblue", "V.3B.0.002");
crearEstancia(150, 100, 100, 50, "green", "V.3B.0.003");
crearEstancia(50, 150, 80, 100, "blue", "V.3B.0.001");
crearEstancia(130, 150, 20, 100, "red", "V.3B.0.001");
crearPasilloT(150, 200, 100, 50, "white");
*/

/*
crearEstancia(50, 50, 100, 100, "lightgreen", "Estancia 1");
crearEstancia(150, 50, 100, 100, "lightblue", "Estancia 2");
crearEstancia(50, 150, 100, 100, "lightyellow", "Estancia 3");
crearEstancia(150, 150, 100, 100, "lightcoral", "Estancia 4");

*/
// Añadir más estancias según sea necesario
