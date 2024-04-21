{/* <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>

//include in head for cdn for leaflet */}

import { instanceData } from './save.js'

export function createMap(start_location) { //connect to mapid of html
    instanceData.map = L.map('map').setView([start_location], 11);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(instanceData.map);
}

//can change parameters to directly import global variables
//but this is in the html directly i don't know if that is a good idea
export function createCircle(offset, r) {
    if(instanceData.current_circle)
        instanceData.map.removeLayer(instanceData.current_circle)

    var new_circle = L.circle(offset, {  //generate offset of circle
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: r
    }).addTo(instanceData.map);
    instanceData.current_circle = new_circle
}

export function createMarker(destination) {
    var marker = L.marker(destination).addTo(instanceData.map); //if they cannot find it, add the location
}

//after leaflet's css
{/* <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
crossorigin=""></script> */}
