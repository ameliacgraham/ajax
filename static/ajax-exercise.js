"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    

    $.get("/fortune", function(results) {
        $("#fortune-text").html(results);
    });
}

$('#get-fortune-button').on('click', showFortune);


// $('#get-fortune-button').on('click', function(evt) {
//         $.get("/fortune", function(results) {
//                             $("#fortune-text").html(results);
//                           });
// });





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    // var url = "/weather.json?zipcode=" + $("#zipcode-field").val();
    var zip = $("#zipcode-field").val();

    // TODO: request weather with that URL and show the forecast in #weather-info
    $.get("/weather.json", {"zipcode": zip}, function(results) {
                                            var forecast = results.forecast;
                                            var temp = results.temp;
                                            $("#weather-info").html(forecast + " " + temp);
    });

}

$("#weather-form").on('submit', showWeather);



// PART 3: ORDER MELONS

function showMelons(results) {
    console.dir(results.msg);
}

function orderMelons(evt) {
    evt.preventDefault();

    var formInputs = {
        "melon_type": $("#melon-type-field").val(),
        "qty": $("#qty-field").val()
    };

    $.post("/order-melons.json", formInputs,
                                  showMelons);
} 

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

$("#order-form").on('submit', orderMelons);


