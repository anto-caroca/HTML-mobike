let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -33.44292250955522, lng: -70.65383235140199 },
    zoom: 15,
  });
  infoWindow = new google.maps.InfoWindow();
  const locationButton = document.createElement("button");
  locationButton.textContent = "Ubicar Posicion Actual";
 
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          infoWindow.setPosition(pos);
          infoWindow.setContent("Ubicacion Actual");
          infoWindow.open(map);
          map.setCenter(pos);
          document.getElementById("table").style.visibility="visible";
          document.getElementById("submit").style.visibility="visible";
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
          
        }
        
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: La geololizacion a fallados."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}