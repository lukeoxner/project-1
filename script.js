

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

