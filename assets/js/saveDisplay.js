
// ------------------------------ //
// --- saveDisplay Javascript --- //
// ------------------------------ //



function displaySaved() {
	let adviceList = JSON.parse(localStorage.getItem("chuckAdvice"))
	for (let i = 0; i < adviceList.length; i++) {
        const adviceEl = document.createElement("li");
        adviceEl.textContent = adviceList[i];
        savedQuotes.appendChild(adviceEl); 
    }

	let dadJokeList = JSON.parse(localStorage.getItem("dadJokeSave"))
	for (let i = 0; i < dadJokeList.length; i++) {
        const dadEl = document.createElement("li");
        dadEl.textContent = dadJokeList[i];
        savedDadJokes.appendChild(dadEl); 
    }

	let badJokeList = JSON.parse(localStorage.getItem("badJokeSave"))
	for (let i = 0; i < badJokeList.length; i++) {
        const badEl = document.createElement("li");
        badEl.textContent = badJokeList[i];
        savedBadJokes.appendChild(badEl); 
    }
};

displaySaved();