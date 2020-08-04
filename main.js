const map = L.map('map', {
    center: [40.952, -5.660],
    zoom: 16
});
const osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Iconos de bootstrap
const miMarker = L.AwesomeMarkers.icon({
    icon: 'tower',
    prefix: 'glyphicon',
    markerColor: 'red'
});
const monumentos = function (feature, marker) {
    marker.setIcon(miMarker);
    marker.bindPopup("<ul><h3>" + feature.properties.Nombre + " </h3><li>Estilo: " + feature.properties.Estilo
        + "</li><li>Siglo: " + feature.properties.Siglo + "</li><li>Latitud: " + feature.geometry.coordinates[1] + "</li><li>Longitud: " + feature.geometry.coordinates[0] + "</li></ul>");
};

//Arqueoloxía		
const monuSalamanca = new L.geoJSON(geojson, {
    onEachFeature: monumentos
}).addTo(map);