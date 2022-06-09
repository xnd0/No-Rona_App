// ---------------------- //
// ----- Javascript ----- //
// ---------------------- //


// Chuck Norris API URL
var requestUrl = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random'




fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
  });