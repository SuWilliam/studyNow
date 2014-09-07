var geocoder;
var map;
  
function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(42.277071, -83.738279);
    var mapOptions = {
      zoom: 16,
      center: LatLng
    }
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);


  }

function codeAddress(studyLocation, title, name, course, note) {
	var destinationLat;
	var destinationLng;
    geocoder.geocode( { 'address': studyLocation}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
      	destinationLat = results[0].geometry.location.k;
      	destinationLng = results[0].geometry.location.B; 
      	console.log(destinationLat);
      	console.log(destinationLng);
      	addStudy(title, name, course, destinationLat, destinationLng, note);
      } 
    });
  }
			
/*google.maps.event.addDomListener(window, 'load', initialize);

var stockholm = new google.maps.LatLng(42.277071, -83.738279);
var parliament = new google.maps.LatLng(42.277071, -83.738279);
var marker;
var map;

function initialize() {
  var mapOptions = {
    zoom: 13,
    center: stockholm
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
          mapOptions);

  marker = new google.maps.Marker({
    map:map,
    draggable:true,
    animation: google.maps.Animation.DROP,
    position: parliament
  });
  google.maps.event.addListener(marker, 'click', toggleBounce);
}

function toggleBounce() {

  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

google.maps.event.addDomListener(window, 'load', initialize); */
      