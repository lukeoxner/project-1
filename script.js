

$("#submitBtn").on("click", function() {


var category = "Spooky"
var queryURL = "https://v2.jokeapi.dev/joke/" + category + "?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"

$.ajax({
	url: queryURL,
	method: "GET"
}).then(function(response) {
	console.log(response);

	//add if statement to determine if it is a two part joke or a one part

	//make variables for items that will be needed

	//add functionality that displays data from response to matching DOM elements

	
})

})

//build a function that determines which catergories have been selected and put them into an array

