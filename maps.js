
			function initialize() {
				var mapCanvas = document.getElementById('map-canvas');
				var mapOptions = {
      center: new google.maps.LatLng(42.292322, -83.713272),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP}
				var map = new google.maps.Map(mapCanvas, mapOptions);
            }
			
			google.maps.event.addDomListener(window, 'load', initialize);
      