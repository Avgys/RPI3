
mapboxgl.accessToken = 'pk.eyJ1Ijoib2xlZ29rcyIsImEiOiJja294MGlnc2cwOW5qMm9wY3lwams2cGZ1In0.bHU3WH1wpH-muUAvQArzUg';

function SetCoordsMap(lng, lat) {

    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [lng, lat], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });
}