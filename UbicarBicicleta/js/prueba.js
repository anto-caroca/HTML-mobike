function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: { lat: -34.397, lng: 150.644 },
    });
    
    const geocoder = new google.maps.Geocoder();
  
    document.getElementById("submit").addEventListener("click", () => {
     
      geocodeAddress(geocoder, map);
      
      document.getElementById("submit2").style.visibility="visible"
      document.getElementById("address").value=""
      
     
    });
  }
  
  function geocodeAddress(geocoder, resultsMap) {
    const address = document.getElementById("address").value;
    geocoder.geocode({ address: address }, (results, status) => {
      if (status === "OK") {
        resultsMap.setCenter(results[0].geometry.location);
        new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location,
          
        });
        
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }
function Aceptar(){
document.getElementById("submit2").addEventListener("click",()=>{
  location.href="mobikeElegir.html";

})

}

