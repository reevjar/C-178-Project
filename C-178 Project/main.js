let latitude = 22.7868542, longitude = 88.3643296;

// Initializing Mapbox
mapboxgl.accesstoken = "pk.eyJ1IjoicmVldmphciIsImEiOiJjbDY0d21vZDkwbWVtM2NwZ295OWt2NXc4In0.nlWC1e5FJ52vfiI76uz4zw"

var map = new mapboxgl.Map({
    container: 'map',
    style: "mapbox://styles/mapbox/streets-v11",
    center: [longitude,latitude],
    zoom:4
})

var img1 = document.querySelector("#amber")

//Create a Amber Palace, Jaipur Marker and add it to the map.

var marker1 = new mapboxgl.Marker({
    element:img1
})
.setLngLat([75.85133, 26.98547])
.addTo(map);

var img2 = document.querySelector("#gateway")

//Create a Gateway of India, Mumbai Marker and add it to the map.

var marker2 = new mapboxgl.Marker({
    element:img2
})
.setLngLat([ 72.83463, 18.92200])
.addTo(map);

var img3 = document.querySelector("#gate")

//Create a India Gate, Delhi Marker and add it to the map.

var marker3 = new mapboxgl.Marker({
    element:img3
})
.setLngLat([ 77.22948, 28.61297])
.addTo(map);

var img4 = document.querySelector("#lotus")

//Create a Lotus Temple, Delhi Marker and add it to the map.

var marker4 = new mapboxgl.Marker({
    element:img4
})
.setLngLat([77.25861, 28.55349 ])
.addTo(map);

var img5 = document.querySelector("#victoria")

//Create a Victoria Memorial, Kolkata Marker and add it to the map.

var marker5 = new mapboxgl.Marker({
    element:img5
})
.setLngLat([ 88.34252, 22.54490])
.addTo(map);

map.addControl(
    new MapboxGeocoder({
        accesstoken: mapboxgl.accesstoken,
        mapboxgl: mapboxgl
    })
)