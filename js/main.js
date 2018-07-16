  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 51.507, lng: 0.1278},
      zoom: 10
    });
  }

$( document ).ready(function() {
 	$('span.checkmark').on('click', function(e){
 		e.preventDefault();
		e.stopPropagation();
		$(e.target).next().toggleClass('active');
 	});
 });