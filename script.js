

var category = []
var jokeID = []

$("#submitBtn").on("click", function() {
	
$("#search-result").text(category)
	//this variable makes it so the array has no spaces and is seperated by a comma for the queryURL format
var formatCategory = category.join(",")

var queryURL = "https://v2.jokeapi.dev/joke/" + formatCategory + "?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"

$.ajax({
	url: queryURL,
	method: "GET"
}).then(function(response) {

	//make variables for items that will be needed
	var jokeType = response.type;
	var setup = response.setup;
	var delivery = response.delivery;
	var joke = response.joke;
	var catDiv = $("<div>")
	var category = response.category;
	giphyJoke(category);

	//if statement to determine which type of joke it is
	if(jokeType === "twopart") {
		$("#joke-result").text(setup)
		$("#punchline-result").text(delivery)
		localStorage.setItem(response.id, JSON.stringify(setup + delivery))
		jokeID.push(response.id)
	} else {
		$("#joke-result").text(joke)
		localStorage.setItem(response.id, JSON.stringify(joke))
		jokeID.push(response.id)
	}
	hideCategories()

	getLocale()
})

})

//functionality of local storage
function getLocale() {
	var values = []
	$("#last-search").empty()
	keys = Object.keys(localStorage),
	i = keys.length;

	while ( i-- ) {
        values.push(localStorage.getItem(keys[i]));
	}

	for(var index = 0; index < values.length; index++) {
		var oldJokeDiv = $("<div>")
		oldJokeDiv.text(values[index])
		$("#last-search").append(oldJokeDiv)
	}
}



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

//home button is clicked, resets page and array so user can go through process again
$("#home-button").on("click", function() {
	$(".categories").show()
	$("#search-result").empty()
	$("#joke-result").empty()
	$("#punchline-result").empty()
	$("#gif-result").attr("src", "");
	category.length = 0
	console.log(category);
})

//clears local storage on button click
$("#reset-button").on("click", function() {
	localStorage.clear()
	$("#last-search").empty()
})

//function that hides button categories
function hideCategories() {
	$(".categories").hide()
}

// declaring function giphyCarousel
function giphyCarousel() {
    
    // GIPHY API key (Luke's)
    var APIKey = "8eGmlbOaPfd5YDK197y9hhIn3Bj0M5A3";

	// getting the 20 top trending GIFs from GIPHY API
    var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=" + APIKey + "&limit=20";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

		// declaring local variables x and y, and setting their values to be random integers
		var x = Math.floor(Math.random() * 20);
		var y = Math.floor(Math.random() * 20);
		
		// call checkSecondRandom function
		checkSecondRandom();
		
		// use if statement to ensure x and y are different integers
		function checkSecondRandom() {
			if (x === y) {
				y = Math.floor(Math.random() * 20);
				checkSecondRandom();
			}
		}

		// declaring local vars & setting values equal to the API result that corresponds with random ints X and Y
		var firstRandom = response.data[x];
		var secondRandom = response.data[y];

		// declaring local vars and setting value equal to the URL of the random GIFs
        var firstGif = firstRandom.images.fixed_height.url;
		var secondGif = secondRandom.images.fixed_height.url;
		
		// dynamically setting the img src of our two carousel GIFs to the URLs of our API results
		$("#first-carousel-gif").attr("src", firstGif);
		$("#second-carousel-gif").attr("src", secondGif);
	
    })
}

// declaring function giphyJoke that accepts one argument, which the function will call "input"
// "input" will be passed from the function above, and its value will be the category of the joke the user is given. This way the GIF our function generates will relate to the joke.
function giphyJoke(input){

    // GIPHY API key (Luke's)
    var APIKey = "8eGmlbOaPfd5YDK197y9hhIn3Bj0M5A3";

	// using GIPHY API's search endpoint, with "input" (user joke category) as our search term
	// we are returning 20 GIF results which we will then randomize so user doesn't keep getting the same GIF if they pick the same joke category
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=" + APIKey + "&limit=20";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

		// declaring local variable i with value of random int between 0 and 19
        var i = Math.floor(Math.random() * 20);

		// using i to select a random result from our array of API results
        var randomResult = response.data[i];

		// declaring local variable whose value is the URL of our selected GIF
        var jokeGif = randomResult.images.fixed_height.url;

		// dynamically setting img src of #gif-result to the URL of our selected GIF from the API
        $("#gif-result").attr("src", jokeGif);

	})
	
}

// calling giphyCarousel function
giphyCarousel();
