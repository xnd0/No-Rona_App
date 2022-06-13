// ---------------------- //
// ----- Javascript ----- //
// ---------------------- //



var quoteContainer = document.getElementById('quoteContainer');
var setupContainer = document.getElementById('setupJoke');
var jokeContainer = document.getElementById('dadJoke');
var badJokeContainer = document.getElementById('badJoke');

var chuckQuoteArray = [];
var chuckQuoteText = "";

var dadJokeArray = [];
var dadJokeText = "";

var badJokeArray = [];
var badJokeText = "";



// --- Functions Area --- //

function saveAdvice() {
	console.log('test save click')

	var storedChuck = JSON.parse(localStorage.getItem("chuckAdvice"));
	if (storedChuck !== null) {
		chuckQuoteArray = storedChuck;
	};
	chuckQuoteArray.push(chuckQuoteText);
	localStorage.setItem("chuckAdvice", JSON.stringify(chuckQuoteArray));
};


function saveDadJoke() {
	console.log('test dadJoke click')

	var storedDadJoke = JSON.parse(localStorage.getItem("dadJokeSave"));
			if (storedDadJoke !== null) {
				dadJokeArray = storedDadJoke;
			};
			dadJokeArray.push(dadJokeText);
	localStorage.setItem("dadJokeSave", JSON.stringify(dadJokeArray));
};


function saveBadJoke() {
	console.log('test badJoke click')

	var storedBadJoke = JSON.parse(localStorage.getItem("badJokeSave"));
	if (storedBadJoke !== null) {
		badJokeArray = storedBadJoke;
	};
	badJokeArray.push(badJokeText);
	localStorage.setItem("badJokeSave", JSON.stringify(badJokeArray));
};



// function displaySaved() {
// 	let adviceList = JSON.parse(localStorage.getItem("chuckAdvice"))
// 	for (let i = 0; i < adviceList.length; i++) {
//         const adviceEl = document.createElement("li");
//         adviceEl.textContent = adviceList[i];
//         savedQuotes.appendChild(adviceEl); 
//     }

// 	let dadJokeList = JSON.parse(localStorage.getItem("dadJokeSave"))
// 	for (let i = 0; i < dadJokeList.length; i++) {
//         const dadEl = document.createElement("li");
//         dadEl.textContent = dadJokeList[i];
//         savedDadJokes.appendChild(dadEl); 
//     }

// 	let badJokeList = JSON.parse(localStorage.getItem("badJokeSave"))
// 	for (let i = 0; i < badJokeList.length; i++) {
//         const badEl = document.createElement("li");
//         badEl.textContent = badJokeList[i];
//         savedBadJokes.appendChild(badEl); 
//     }
// };

// displaySaved();



// --- Chuck Norris Fetch API URL --- //
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
		response => {
			console.log(response.value);
			console.log("test");
			// --display the quote

			var chuckQuote = document.createElement('h3');
			chuckQuote.textContent = response.value;
			chuckQuoteText = response.value;
			quoteContainer.append(chuckQuote);

		}).catch(err => console.error(err));



// --- Dad Jokes Fetch API URL --- //		
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

		response => {
			console.log(response.body[0].punchline);

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

			dadJokeText =(response.body[0].setup + '--' + response.body[0].punchline);
		}).catch(err => console.error(err));



// --- BAD Jokes Fetch API URL --- //
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
	.then(		response => {
		console.log(response[0].joke);
		console.log("test BAD joke ^^");
		// --display the BAD joke
		var badJoke = document.createElement('h3');
		badJoke.textContent = response[0].joke;
		badJokeText = response[0].joke;
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
	


  initMap()

//insert county code from list to fetch



//retrieves county covid data from api 
function goFetch() {
	
	var select = document.getElementById('county')
	var value = select.options[select.selectedIndex].value
	var apiURL = 'https://api.covidactnow.org/v2/county/' + value + '.json?apiKey=805adad0a8864a70a3239476c6971e3e'
	console.log(value)
	console.log(apiURL)
	fetch(apiURL)
			.then(response => response.json())
			.then(
				response => {console.log(response.metrics.weeklyNewCasesPer100k)
					var levelPreface = document.getElementById('preface')
					var communityLevel  
					var levelText = document.getElementById('level')
					var levelChanger = function() {
						if (response.communityLevels.cdcCommunityLevel === 0) {
							communityLevel = 'Low'
						} else if (response.communityLevels.cdcCommunityLevel === 1) {
							communityLevel = 'Medium'
						} else if (response.communityLevels.cdcCommunityLevel === 2) {
							communityLevel = 'High'
						} else {
							communityLevel = 'Unavailable, Sorry!'
						}
						levelText.innerHTML = communityLevel
					}
					levelPreface.innerHTML = 'CDC Community Level is '
					levelChanger()
					console.log(communityLevel)
                     
      }
			)
		}
					

document.getElementById('searchBtn').addEventListener('click', goFetch)
// --- Event Listeners --- //

norrisButton.addEventListener("click", saveAdvice);
dadJokeButton.addEventListener("click", saveDadJoke);
badJokeButton.addEventListener("click", saveBadJoke);
