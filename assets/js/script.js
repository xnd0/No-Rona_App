// ---------------------- //
// ----- Javascript ----- //
// ---------------------- //





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
	.then(response => console.log(response.value))
	.catch(err => console.error(err));



// var requestUrl = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random'




// fetch(requestUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log('Fetch Response \n-------------');
//     console.log(data);
//   });


  