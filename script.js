

var category = []

$("#submitBtn").on("click", function() {

	//this variable makes it so the array has no spaces and is seperated by a comma for the queryURL format
var formatCategory = category.join(",")

var queryURL = "https://v2.jokeapi.dev/joke/" + formatCategory + "?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"

$.ajax({
	url: queryURL,
	method: "GET"
}).then(function(response) {
	console.log(response);

	//make variables for items that will be needed
	var jokeType = response.type
	var setup = response.setup
	var delivery = response.delivery
	var joke = response.joke

	//if statement to determine which type of joke it is
	if(jokeType === "twopart") {
		$("#joke-result").text(setup)
		$("#punchline-result").text(delivery)
	} else {
		$("#joke-result").text(joke)
	}

	
})

})

//function that pushes user selection into array and removes it if they click on it again.
$(".category").on("click", function() {
	var userCategory = this.textContent
	if(category.includes(userCategory)) { 
		var indexCat = category.indexOf(userCategory)
		category.splice(indexCat, 1) 
	} else {
		category.push(this.textContent)
	}
})


// * IN PROGRESS
function giphyCarousel() {
    
    // GIPHY API key (Luke's)
    var APIKey = "8eGmlbOaPfd5YDK197y9hhIn3Bj0M5A3";

    // *** set this variable equal to random trending gifs

    var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=" + APIKey + "&limit=20";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

		console.log(response);

		var x = Math.floor(Math.random() * 20);
		var y = Math.floor(Math.random() * 20);
		
		checkSecondRandom();
		
		function checkSecondRandom() {
			if (x === y) {
				y = Math.floor(Math.random() * 20);
				checkSecondRandom();
			}
		}

		var firstRandom = response.data[x];
		var secondRandom = response.data[y];

        var firstGif = firstRandom.images.original.url;
        var secondGif = secondRandom.images.original.url;
	

    })
}


function giphyJoke(){

    // GIPHY API key (Luke's)
    var APIKey = "8eGmlbOaPfd5YDK197y9hhIn3Bj0M5A3";

    // *** set this variable equal to category of joke shown to user
    var input = "car";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=" + APIKey + "&limit=20";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        var i = Math.floor(Math.random() * 20);

        var randomResult = response.data[i];

        var jokeGif = randomResult.images.original.url;

        $("#gif-result").attr("src", jokeGif);

    })



}




giphyCarousel();

giphyJoke();
