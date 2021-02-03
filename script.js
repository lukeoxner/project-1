

var category = []

$("#submitBtn").on("click", function() {

var formatCategory = category.join(",")
console.log(formatCategory);

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

	//add if statement to determine if it is a two part joke or a one part
	if(jokeType === "twopart") {
		$("#joke-result").text(setup)
		$("#punchline-result").text(delivery)
	} else {
		$("#joke-result").text(joke)
	}

	//add functionality that displays data from response to matching DOM elements

	

	
})

})

//build a function that determines which catergories have been selected and put them into an array

$(".category").on("click", function() {
	category.push(this.textContent)
	console.log(this.textContent);
})

// * IN PROGRESS
// function giphyCarousel() {
    
//     // GIPHY API key (Luke's)
//     var APIKey = "8eGmlbOaPfd5YDK197y9hhIn3Bj0M5A3";

//     // *** set this variable equal to random gifs
//     var input = "car";
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=" + APIKey + "&limit=20";

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(response) {

//         // console.log(response);

//     })
// }


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




// giphyCarousel();

giphyJoke();
