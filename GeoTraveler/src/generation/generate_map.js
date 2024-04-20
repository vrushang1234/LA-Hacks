{/* <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>

//include in head for cdn for leaflet */}

function createMap(start_location) { //connect to mapid of html
    map = L.map('map').setView([start_location], 11);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    return map
}

function createCircle(map, offset, r) {
    if(current_circle)
        map.removeLayer(current_circle)

    var new_circle = L.circle(offset, {  //generate offset of circle
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: r
    }).addTo(map);
    current_circle = new_circle
}

function createMarker(map, destination) {
    var marker = L.marker(destination).addTo(map); //if they cannot find it, add the location
}

//after leaflet's css
{/* <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
crossorigin=""></script> */}
