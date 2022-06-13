// ---------------------- //
// ----- Javascript ----- //
// ---------------------- //



var quoteContainer = document.getElementById('quoteContainer');
var setupContainer = document.getElementById('setupJoke');
var jokeContainer = document.getElementById('dadJoke');
var badJokeContainer = document.getElementById('badJoke');


// --- Chuck Norris API URL --- //
const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		'X-RapidAPI-Key': '435d50c541mshfc9db86f68d6624p177e00jsn2e5482e44a2b',
		'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
	}
};

fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', options)
	.then(response => response.json())
	.then(
        response => {console.log(response.value);
            console.log("test");
            // --display the quote
            var chuckQuote = document.createElement('h3');
            chuckQuote.textContent = response.value;
            quoteContainer.append(chuckQuote);
        }).catch(err => console.error(err));




// --- Dad Jokes API URL --- //		
const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '435d50c541mshfc9db86f68d6624p177e00jsn2e5482e44a2b',
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
	}
};

fetch('https://dad-jokes.p.rapidapi.com/random/joke', options2)
	.then(response => response.json())
	.then(
		// response => {console.log(response.body);  // <--works?

		response => {console.log(response.body[0].punchline);

		// response => {console.log(response.body.type);	
            console.log("test dadJoke ^^");

			// --display the setup to the dadJoke
			var jokeSetup = document.createElement('h3');
            jokeSetup.textContent = response.body[0].setup;
            setupContainer.append(jokeSetup);

            // --display the joke punchline
            var dadJoke = document.createElement('h3');
            dadJoke.textContent = response.body[0].punchline;
            jokeContainer.append(dadJoke);
	}).catch(err => console.error(err));




// --- BAD Jokes API URL --- //
const options3 = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		'X-RapidAPI-Key': '435d50c541mshfc9db86f68d6624p177e00jsn2e5482e44a2b',
		'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes', options3)
	.then(response => response.json())
	.then(
        response => {console.log(response[0].joke);
            console.log("test BAD joke ^^");
            // --display the BAD joke
            var badJoke = document.createElement('h3');
            badJoke.textContent = response[0].joke;
            badJokeContainer.append(badJoke);
        }).catch(err => console.error(err));


// < !--GoogleMapAPI-- >
    
function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: -33.8688, lng: 151.2195},
	zoom: 13
	});
	
	var input = document.getElementById('searchInput');
	map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
	
	var autocomplete = new google.maps.places.Autocomplete(input);
	autocomplete.bindTo('bounds', map);
	
	var infowindow = new google.maps.InfoWindow();
	var marker = new google.maps.Marker({
	map: map,
	anchorPoint: new google.maps.Point(0, -29)
	});
	
	autocomplete.addListener('place_changed', function() {
	infowindow.close();
	marker.setVisible(false);
	var place = autocomplete.getPlace();
	if (!place.geometry) {
		window.alert("Autocomplete's returned place contains no geometry");
		return;
	}
	
	// If the place has a geometry, then present it on a map.
	if (place.geometry.viewport) {
		map.fitBounds(place.geometry.viewport);
	} else {
		map.setCenter(place.geometry.location);
		map.setZoom(17);
	}
	marker.setIcon(({
		url: place.icon,
		size: new google.maps.Size(71, 71),
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(17, 34),
		scaledSize: new google.maps.Size(35, 35)
	}));
	marker.setPosition(place.geometry.location);
	marker.setVisible(true);
	
	var address = '';
	if (place.address_components) {
		address = [
		  (place.address_components[0] && place.address_components[0].short_name || ''),
		  (place.address_components[1] && place.address_components[1].short_name || ''),
		  (place.address_components[2] && place.address_components[2].short_name || '')
		].join(' ');
	}
	
	infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
	infowindow.open(map, marker);
	
	// Location details
	for (var i = 0; i < place.address_components.length; i++) {
		if(place.address_components[i].types[0] == 'postal_code'){
			document.getElementById('postal_code').innerHTML = place.address_components[i].long_name;
		}
		if(place.address_components[i].types[0] == 'country'){
			document.getElementById('country').innerHTML = place.address_components[i].long_name;
		}
	}
	document.getElementById('location').innerHTML = place.formatted_address;
	document.getElementById('lat').innerHTML = place.geometry.location.lat();
	document.getElementById('lon').innerHTML = place.geometry.location.lng();
	});
	}
	


  