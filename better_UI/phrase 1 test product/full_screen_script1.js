mapboxgl.accessToken = 'pk.eyJ1IjoibjFjaHJpc3RpYW4iLCJhIjoiY2x6MG80Y2hrMTgxaDJrcHNkMWtvZWx0MCJ9.kHvL5J2yJH2lPYSmk7sBng';
const map = new mapboxgl.Map({
    container: 'map',
    zoom: 12, 
    center: [114.17460, 22.29529] 
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

const minimize_button = document.querySelector('.Minimize2')
minimize_button.addEventListener("click", () => {
    map.jumpTo({
        center: [114.17460, 22.29529],
        zoom: 12,
        pitch:0,
        bearing:0
        })
});

