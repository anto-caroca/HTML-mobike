// sessionStorage.setItem("lat", "-33.45672");
// sessionStorage.setItem("lng", -70.71047);

// let lat = sessionStorage.getItem("lat");
// let lng = sessionStorage.getItem("lng");

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function (m, key, value) {
            vars[key] = value;
        });
    return vars;
}

var lat = getUrlVars()["lat1"];
var lng = getUrlVars()["lng1"];

let dataDistancia = {};
let total;
let tiempo;
let dist;
let dur;

console.log('var', lat + ';' + lng);

let url = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=' + lat + ',' + lng + '&destinations=-33.46172,-70.71047&key=AIzaSyCEucHNIWggR7kLSP1GP8LEmw78ElotMi8';


fetch(url)
    .then(res => res.json())
    .then((out) => {
        dataDistancia = out;
        console.log('dataDistancia: ', dataDistancia);
        dist = dataDistancia.rows[0].elements[0].distance.text;
        dur = dataDistancia.rows[0].elements[0].duration.text;

        console.log('dist! ', dist);
        console.log('durt! ', dur);
        document.getElementById('km').innerHTML = 'Distancia: ' + dist;
        document.getElementById('time').innerHTML = 'Tiempo total: ' + dur;


        dur = dur.split(" ");
        console.log('array dur: ', dur);

        if (dur.includes("h")) {
            total = Number(dur[0]) * 60
            total = ((total + Number(dur[2])) / 30) * 200

        } else {
            total = (Number(dur[0]) / 30) * 200
        }

        console.log('total: ', total);

        document.getElementById('monto').innerHTML = 'Monto total: $ ' + total.toFixed(0);
    })
    .catch(err => { throw err });

function setModal() {

    document.getElementById('km1').innerHTML = 'Distancia: ' + dist;
    document.getElementById('time1').innerHTML = 'Tiempo total: ' + dur;
    document.getElementById('monto1').innerHTML = 'Monto total: $ ' + total.toFixed(0);
}

function enviarDudas() {
    if (document.getElementById('asunto').value != "") {

        document.getElementById("asunto").style.borderStyle = "initial";
        document.getElementById('alertAsunto').innerHTML = ''

    } else {

        document.getElementById("asunto").style.borderStyle = "outset";
        document.getElementById("asunto").style.borderColor = "red";
        document.getElementById('alertAsunto').innerHTML = 'Debe agregar el asunto!'
    }

    if(document.getElementById('dudasDesc').value != ""){
        document.getElementById("dudasDesc").style.borderStyle = "initial";
        document.getElementById('alertDesc').innerHTML = ''
    }else {

        document.getElementById("dudasDesc").style.borderStyle = "outset";
        document.getElementById("dudasDesc").style.borderColor = "red";
        document.getElementById('alertDesc').innerHTML = 'Debe agregar una descripción!'
    }
}

function initMap() {

    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: { lat: Number(lat), lng: Number(lng) },
    });
    directionsRenderer.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsRenderer);
    // document.getElementById("mode").addEventListener("change", () => {
    //     calculateAndDisplayRoute(directionsService, directionsRenderer);
    // });
}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    const selectedMode = 'DRIVING';

    directionsService.route(
        {
            origin: { lat: Number(lat), lng: Number(lng) },
            destination: { lat: -33.46172, lng: -70.71047 },
            // Note that Javascript allows us to access the constant
            // using square brackets and a string value as its
            // "property."
            travelMode: google.maps.TravelMode[selectedMode],
        },
        (response, status) => {
            if (status == "OK") {
                directionsRenderer.setDirections(response);
            } else {
                window.alert("Directions request failed due to " + status);
            }
        }
    );
}

