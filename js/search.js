/**
 * Creates a new marker and adds it to a group
 * @param {H.map.Group} group       The group holding the new marker
 * @param {H.geo.Point} coordinate  The location of the marker
 * @param {String} html             Data associated with the marker
 */
 function addMarkerToGroup(group, coordinate, html) {
  var marker = new H.map.Marker(coordinate);
  // add custom data to the marker
  marker.setData(html);
  group.addObject(marker);
}

/**
 * Add two markers showing the position of Liverpool and Manchester City football clubs.
 * Clicking on a marker opens an infobubble which holds HTML content related to the marker.
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function addInfoBubble(map) {
  var group = new H.map.Group();

  map.addObject(group);

  // add 'tap' event listener, that opens info bubble, to the group
  group.addEventListener('tap', function (evt) {
    // event target is the marker itself, group is a parent event target
    // for all objects that it contains
    var bubble =  new H.ui.InfoBubble(evt.target.getGeometry(), {
      // read custom data
      content: evt.target.getData()
    });
    // show info bubble
    ui.addBubble(bubble);

  }, false);
  
  addMarkerToGroup(group, {lat:-33.44963894270547, lng:-70.54962166382464},
    '<div><u style="color:#ff2600">MoBike La Reina</u>' +
    '</div><div>Dirección: José Zapiola 7625</div>');

  addMarkerToGroup(group, {lat: -33.4583, lng:-70.6 },
    '<div><u style="color:#ff2600">MoBike Ñuñoa</u>' +
    '</div><div >Dirección: Exequiel Fernandez 400</div>');

  addMarkerToGroup(group, {lat: -33.4333, lng:-70.6083 },
    '<div><u style="color:#ff2600">MoBike Providencia</u>' +
    '</div><div >Dirección: Mar del Plata 2011</div>');
    
  addMarkerToGroup(group, {lat: -33.43703105238468, lng:-70.60022244140747 },
    '<div><u style="color:#ff2600">MoBike Providencia</u>' +
    '</div><div >Dirección: Av. Francisco Bilbao 2425</div>');
     
  addMarkerToGroup(group, {lat: -33.45233510990661, lng:-70.56946752134421 },
    '<div><u style="color:#ff2600">MoBike La Reina</u>' +
    '</div><div >Dirección: Av. Larrain 5862</div>');
    
  addMarkerToGroup(group, {lat: -33.43906431880004, lng:-70.55610180870796 },
    '<div><u style="color:#ff2600">MoBike La Reina</u>' +
    '</div><div >Dirección: Salvador Izquierdo & Príncipe de Gales</div>');
    
  addMarkerToGroup(group, {lat: -33.453899885253115, lng:-70.60525267557458 },
    '<div><u style="color:#ff2600">MoBike Ñuñoa</u>' +
    '</div><div >Dirección: Irarrázaval 2472</div>');
    
  addMarkerToGroup(group, {lat: -33.44164580680465, lng:-70.58058131520475 },
    '<div><u style="color:#ff2600">MoBike Ñuñoa</u>' +
    '</div><div >Dirección: Emilia Téllez 4885</div>');
    
  addMarkerToGroup(group, {lat: -33.448263562984835, lng:-70.58332955348469 },
    '<div><u style="color:#ff2600">MoBike Ñuñoa</u>' +
    '</div><div >Dirección: Simón Bolívar 4516</div>');
}

/**
 * Boilerplate map initialization code starts below:
 */

// initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
var platform = new H.service.Platform({
  apikey: "../secrets/here.keys.yml"
});
var defaultLayers = platform.createDefaultLayers();

// initialize a map - this map is centered over Av. Ossa & Echeñique
var map = new H.Map(document.getElementById('map2'),
  defaultLayers.vector.normal.map,{
  center: {lat:-33.44487816387513, lng:-70.57195178637623},
  zoom: 14,
  pixelRatio: window.devicePixelRatio || 1
});
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// create default UI with layers provided by the platform
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...

addInfoBubble(map);