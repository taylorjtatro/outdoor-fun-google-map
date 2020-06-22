//Marker takes
/*

position: {lat lng},
title
map:map
icon
content

*/

/*
class Place {
    constructor(title, coords, icon, image, description) {
        this.title = title,
        this.coords = coords, 
        this.icon = icon, 
        this.image = image,
        this.description = description
    }
    //maybe add the this.title for the displaycontent here?
}







let stampedeReservoir = new Place('Stampede Reservoir', {lat:39.493918,lng:-120.097742}, flag, 'stampede.jpg', `Perfect spot for hiking, boating, and Fin! Best found location so far is .7 miles North of turnoff to cross the dam. If you pass the yellow turn sign you've gone too far.`)


let carsonWaterfall = new Place('Carson Waterfall', {lat:39.153380,lng:-119.815623},flag,, 'carsonWaterfall.jpg', `Very easy hike up to a beautiful waterfall. Nearly an hour drive from the new house but a goog place to keep in mind. (Usually mildly crowded)`);

let galenaCreek = new Place('Galena Creek', {lat:39.354260,lng:-119.857190},flag, 'galenaCreek.jpg' `One of our favorite spots for morning trips. Beautiful hiking, easy creek access for water-play, and for such a great spot it usually has very few people.`);

let thomasCreekTrail = new Place('Thomas Creek Trail', {lat:39.392047,lng:-119.839448},flag, 'thomasCreekTrail.png', `Gorgeous trail through the trees and overgrowth. We have only hiked here once but it is sure to become a great trail for us this summer!`);

let places = [stampedeReservoir, carsonWaterfall, galenaCreek, thomasCreekTrail];


places.forEach(el => addMarker(el));





let infoWindowContent = `    
<div class="infoContent">
    <figure>
        <img src="img/${local.img}">
        <figcaption>
            <h3>${local.title}</h3>
        </figcaption>
    </figure>
    <p>${local.description}</p>
</div>
`;*/

//icon size 20px X 32px









            /*icon: {
                path: `M80.95 472.23c-4.28 17.16 6.14 34.53 23.28 38.81 2.61.66 5.22.95 7.8.95 14.33 0 27.37-9.7 31.02-24.23l25.24-100.97-52.78-52.78-34.56 138.22zm14.89-196.12L137 117c2.19-8.42-3.14-16.95-11.92-19.06-43.88-10.52-88.35 15.07-99.32 57.17L.49 253.24c-2.19 8.42 3.14 16.95 11.92 19.06l63.56 15.25c8.79 2.1 17.68-3.02 19.87-11.44zM368 160h-16c-8.84 0-16 7.16-16 16v16h-34.75l-46.78-46.78C243.38 134.11 228.61 128 212.91 128c-27.02 0-50.47 18.3-57.03 44.52l-26.92 107.72a32.012 32.012 0 0 0 8.42 30.39L224 397.25V480c0 17.67 14.33 32 32 32s32-14.33 32-32v-82.75c0-17.09-6.66-33.16-18.75-45.25l-46.82-46.82c.15-.5.49-.89.62-1.41l19.89-79.57 22.43 22.43c6 6 14.14 9.38 22.62 9.38h48v240c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V176c.01-8.84-7.15-16-15.99-16zM240 96c26.51 0 48-21.49 48-48S266.51 0 240 0s-48 21.49-48 48 21.49 48 48 48z`,
                strokeColor: '#b40404',
                scale: .1

            }*/




//need picture for arrowcreek park



            //Train Stations
            //Bowers Mansion Park
            //Location amber found when driving to boca
            //


            //To Sort our markers we may need to add IDs and do it by adding a unique ID to each item as it is entered.




            //Now we need to try and use a document.querySelector to go through our checkboxes and how do we eliminate icons if they are there.









            //document.querySelectorAll('input')