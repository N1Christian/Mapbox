mapboxgl.accessToken = 'pk.eyJ1IjoibjFjaHJpc3RpYW4iLCJhIjoiY2x6MG80Y2hrMTgxaDJrcHNkMWtvZWx0MCJ9.kHvL5J2yJH2lPYSmk7sBng';
const map = new mapboxgl.Map({
    container: 'map',
    zoom: 12, 
    center: [114.17460, 22.29529] 
});

const infra_data = {
    "type": "FeatureCollection",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [

    { "type": "Feature", "properties": { "id": "HKG", "building_name": "Hong Kong international Airport", "building_type": "Infrastructure" }, "geometry": { "type": "Point", "coordinates": [ 113.92486, 22.31213] } }
    ]
}

map.on('load', () => {
    map.addSource('infra', {
        type: 'geojson',
        data: infra_data
    });

    map.addLayer({
        'id': 'infrastructure',
        'type': 'circle',
        'source': 'infra',
        'paint': {
            'circle-radius': 4,
            'circle-stroke-width': 2,
            'circle-color': 'blue',
            'circle-stroke-color': 'white'
        },
        'layout': {
            // Make the layer visible by default.
            'visibility': 'visible'
        }
    });
});

const map_ele = document.getElementById("map")

const menu_button1 = document.querySelector('.button1')
menu_button1.addEventListener("click", () => {
    map.flyTo({
        center: [113.92486, 22.31213],
        essential: true,
        zoom: 17, //default 12
        pitch:71.5,
        bearing: 33.3
        })
});

const reset_button = document.querySelector('.Compass')
reset_button.addEventListener("click", () => {
    map.jumpTo({
        center: [114.17460, 22.29529],
        zoom: 12,
        pitch:0,
        bearing:0
        })
});

const fullscreen_button = document.querySelector('.Maximize')
fullscreen_button.addEventListener("click", () => {
    console.log("full screen clicked")
});


//map_ele.addEventListener("click",alert("clicked map"))