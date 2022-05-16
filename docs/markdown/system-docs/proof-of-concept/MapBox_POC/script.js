// Unique access token 
mapboxgl.accessToken =
"pk.eyJ1IjoidmVuaWRhZ2xhciIsImEiOiJjbDJ5cG1qN3YwMDJtM2JwcGIwYzFkZDRwIn0.6N44tnIarcgDs_jyei5RkQ"

navigator.geolocation.getCurrentPosition(success, errorLocation, {
  enableHighAccuracy: true
})

function success(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  console.log("Failed to load location.")
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15
  })

  const navigator = new mapboxgl.NavigationControl()
  map.addControl(navigator)

  let directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, "top-left")
}
