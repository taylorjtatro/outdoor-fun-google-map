import { Map } from './models/MapsAPI';

console.log(process.env.TEST);

document.addEventListener('DOMContentLoaded', function() {
    let mapElement = document.getElementById('map');

    Map.loadGoogleMapsApi().then(function(googleMaps) {
        Map.createMap(googleMaps, mapElement);
    })
})