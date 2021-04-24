var geocoder = new google.maps.Geocoder(); // initialize google map object
var address = "El alcazar Poniente 690 chile";
  geocoder.geocode( { 'address': address}, function(results, status) {
 
    if (status == google.maps.GeocoderStatus.OK) {
      var latitude = results[0].geometry.location.lat();
      var longitude = results[0].geometry.location.lng();
      var myCenter=new google.maps.LatLng(latitude,longitude);
      function initialize(){
        var mapProp = {
        center:myCenter,
        zoom:18,
        mapTypeId:google.maps.MapTypeId.ROADMAP
      };
 
      var map=new google.maps.Map(document.getElementById("map"),mapProp);
 
      var marker=new google.maps.Marker({
      position:myCenter,
      });
 
      marker.setMap(map);
      }
 
      google.maps.event.addDomListener(window, 'load', initialize); 
    }
      
  
  });
 