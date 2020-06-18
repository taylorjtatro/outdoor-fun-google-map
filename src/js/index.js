/*


import { Map }  from './models/MapsAPI';




document.addEventListener('DOMContentLoaded', function() {
    let mapElement = document.getElementById('map');

    
    Map.loadGoogleMapsApi().then(function(googleMaps) {
        //Map.createMap(googleMaps, mapElement);
       new googleMaps.Map(document.querySelector('#map'), {
            center: {lat: 39.5296, lng: -119.8138},
            zoom:12
        })
         







        
        
        /*
        new googleMaps.Marker({
            location: {lat: 39.5296, lng: -119.8138},
            map:map
        })*/

        /*
    })

})





*/


/*
    const yup = new testMap();

    yup.loadGoogleMapsApi().then(function(googleMaps) {
        yup.createMap(googleMaps, mapElement);
        yup.addMarker(googleMaps, mapElement)
    })


*/


console.log(process.env.GOOGLEMAPS_KEY)