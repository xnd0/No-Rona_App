// ---------------------- //
// ----- Javascript ----- //
// ---------------------- //



var quoteContainer = document.getElementById('quoteContainer');



// Chuck Norris API URL
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

//Covid Act Now API
//API key: 805adad0a8864a70a3239476c6971e3e
//URLs
/*
Current Data for Specific Locations
https://api.covidactnow.org/v2/state/{state}.json?apiKey=YOUR_KEY_HERE
https://api.covidactnow.org/v2/county/{fips}.json?apiKey=YOUR_KEY_HERE
https://api.covidactnow.org/v2/cbsa/{cbsa_code}.json?apiKey=YOUR_KEY_HERE
*/

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