// Inicializa el mapa con vista centrada
var map = L.map('map').setView([39.48228, -0.34468], 18);

// Añadir la capa de OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Definir los polígonos
var polygon3B = L.polygon([
    [39.48242825333031, -0.34481870168984],
    [39.48231646343896, -0.3444452856907263],
    [39.482117725410646, -0.344537069750236],
    [39.48223021749262, -0.3449206256298871]
]).addTo(map);

var polygon3C = L.polygon([
    [39.48237963605125, -0.34432525138937986],
    [39.48227198645418, -0.34394974216196267],
    [39.48199044056643, -0.3440731237652569],
    [39.48210637136423, -0.34446472625493524]
]).addTo(map);

// Añadir popup a los polígonos
polygon3B.bindPopup("<b>Agronomos</b><br>Edificio 3b.");
polygon3C.bindPopup("<b>Agronomos</b><br>Edificio 3c.");

// Añadir interacción al hacer clic en el mapa
var popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}
map.on('click', onMapClick);
