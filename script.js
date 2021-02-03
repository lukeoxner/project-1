// GIPHY API key (Luke)
APIKey = "8eGmlbOaPfd5YDK197y9hhIn3Bj0M5A3";

function giphyCarousel() {


    // GIPHY API key (Luke)
    APIKey = "8eGmlbOaPfd5YDK197y9hhIn3Bj0M5A3";

    var input = "deadpool";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=dc6zaTOxFJmzC&limit=10";


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        // console.log(response);

    })
}


function giphyJoke(){

    // GIPHY API key (Luke's)
    var APIKey = "8eGmlbOaPfd5YDK197y9hhIn3Bj0M5A3";

    // *** set this variable equal to category of joke shown to user
    var input = "car";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=" + APIKey + "limit=20";

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
