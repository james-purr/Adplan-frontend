  var map;
  var mapIconClick=2;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 51.507, lng: -0.0178},
      zoom: 11,
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
	  for(i=0; i<50;i++){
	  	var lng = (Math.random() * (0.30 - 0) + 0) - 0.26
	  	var lat = (Math.random() * (51.55 - 51.35) + 51.35) 
	  	var marker = new google.maps.Marker({position: {lat:lat, lng: lng}, map: map})	;
	  	marker.addListener('click', function() {
	  		if(mapIconClick){
	  			mapIconClick = false
	  			displayCampaignDetails();
	  			setTimeout(reactivateMapIconClick, 1000);
	  		}
        });
	  };    
  };

function displayCampaignDetails(){
	if($( ".adspace-info-block" ).css('right') == "0px"){
		$('#map').removeClass('mobile-hide');
		$( ".adspace-info-block" ).animate({
		    right: "-=380",
		  }, 500, function() {
		});
	}else{
		$('#map').addClass('mobile-hide');
		$( ".adspace-info-block" ).animate({
		    right: "+=380",
		  }, 500, function() {
		});		
	};		
};

function reactivateMapIconClick(){
 	mapIconClick = true;
}

function closeAdspace(){
	$('#map').removeClass('mobile-hide');
	$( ".adspace-info-block" ).animate({
	    right: "-=380",
	  }, 500, function() {
	});
};

function openAccountDetails(){
	$('.account-dropdown').fadeToggle();
};

function goToBillingSection(){
	$('.first-sign-up-fields').toggleClass('hidden');
	$('.second-sign-up-fields').toggleClass('hidden');
};

function goToRegConfirmation(){
	$('.second-sign-up-fields').addClass('hidden');
	$('.third-sign-up-fields').removeClass('hidden');
	$('.form-header').addClass('hidden');
	$('.account-features').addClass('hidden');
	$('.account-upgrade-form').remove();
};

function togglePricingOptions(){
	$('.account-dropdown').fadeOut();
	// closeAdspace();
	if($( ".media-costings-block" ).css('right') == "0px"){
		$( ".media-costings-block" ).animate({
		    right: "-=380",
		  }, 500, function() {
		});
	}else{
		$( ".media-costings-block" ).animate({
		    right: "+=380",
		  }, 500, function() {
		});		
	}
};

function addToCampaign(){
	if(!$(this).hasClass('pricing-btn')){
		$('.alert').show();
		closeAdspace();		
	};
};

function hideAlert(){
	$('.alert').hide();
};

function removeMediaFromCampaign(){
	$(this).parents('tr').remove();
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
 	$('.close-icon').on('click', closeAdspace);
 	$('.account-link').on('click', openAccountDetails);
 	$('.go-to-billing').on('click', goToBillingSection);
 	$('.go-to-payment-confirmed').on('click', goToRegConfirmation);
 	$('.pricing-btn').on('click', togglePricingOptions);
 	$('.add-to-campaign').on('click', addToCampaign);
 	$('.hide-alert').on('click', hideAlert);
 	$('.amend-pricing').on('click', togglePricingOptions);
 	$('.remove-media').on('click', removeMediaFromCampaign);
 });