  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 51.507, lng: 0.1278},
      zoom: 10,
      styles: [
		    {
		        "featureType": "all",
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "color": "#ffffff"
		            }
		        ]
		    },
		    {
		        "featureType": "all",
		        "elementType": "labels.text.stroke",
		        "stylers": [
		            {
		                "color": "#000000"
		            },
		            {
		                "lightness": 13
		            }
		        ]
		    },
		    {
		        "featureType": "administrative",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#000000"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative",
		        "elementType": "geometry.stroke",
		        "stylers": [
		            {
		                "color": "#144b53"
		            },
		            {
		                "lightness": 14
		            },
		            {
		                "weight": 1.4
		            }
		        ]
		    },
		    {
		        "featureType": "administrative.country",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "on"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative.country",
		        "elementType": "labels",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative.land_parcel",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "on"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape",
		        "elementType": "all",
		        "stylers": [
		            {
		                "color": "#08304b"
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#0c4152"
		            },
		            {
		                "lightness": 5
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#000000"
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "geometry.stroke",
		        "stylers": [
		            {
		                "color": "#0b434f"
		            },
		            {
		                "lightness": 25
		            }
		        ]
		    },
		    {
		        "featureType": "road.arterial",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#000000"
		            }
		        ]
		    },
		    {
		        "featureType": "road.arterial",
		        "elementType": "geometry.stroke",
		        "stylers": [
		            {
		                "color": "#0b3d51"
		            },
		            {
		                "lightness": 16
		            }
		        ]
		    },
		    {
		        "featureType": "road.local",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#000000"
		            }
		        ]
		    },
		    {
		        "featureType": "transit",
		        "elementType": "all",
		        "stylers": [
		            {
		                "color": "#146474"
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "all",
		        "stylers": [
		            {
		                "color": "#021019"
		            }
		        ]
		    }
		]
    });
  }

$( document ).ready(function() {
 	$('span.checkmark').on('click', function(e){
 		console.log('checkmark click event')
 		e.preventDefault();
		e.stopPropagation();
		$(e.target).next().toggleClass('active');
 	});
 	$('span.tick.active').on('click', function(e){
 		e.preventDefault();
		e.stopPropagation();
 		console.log('checkmark click event')
		$(e.target).toggleClass('active');
 	});
 	$('span.tick').on('click', function(e){
 		e.preventDefault();
		e.stopPropagation();
 		console.log('checkmark click event')
		$(e.target).toggleClass('active');
 	});
 });