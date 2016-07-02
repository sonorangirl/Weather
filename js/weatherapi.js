
var base = "https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather";
var lat = "?lat=35";
var lon = "&lon=139";
var APIkey = "&appid=392e8e512b039c6ddb7ee382f837b322";
var units = "&units=metric";
var city = "";

var api = "https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?lat=33.5&lon=-111.9&appid=392e8e512b039c6ddb7ee382f837b322&units=imperial";

var weatherIcons;

$(document).ready(function() {

	//call api 
	$.getJSON(api, function(data) {
		console.log(data);
		$('.current-temp').html(Math.round(data.main.temp) + '&deg;');
		$('.location-name').html(data.name);

		//For Icons
		$.getJSON('js/weather-icons.json', function(icons) {
			weatherIcons = icons;

			var prefix = 'wi owm-';
			var code = data.weather[0].id;
			var icon = weatherIcons[code].icon;

			// If we are not in the ranges mentioned above, add a day/night prefix.
			if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
				icon = 'day-' + icon;
			}

			// Finally tack on the prefix.
			icon = prefix + icon;
			$('.main-icon').html('<i class="' + icon + '"></i>');
		});

	});

});

//TO DO 
	//Make function to get users geolocation
	//Add fallback if geolocation data unavailable
	//Make function to update location name with users location

	//Make function to get the icon for the current weather

	//Make another api call to get weather data for next four days

	//Make function to update days of the week

	//Make function to let users switch between F and C 

	//Make function to allow users to check weather at other locations 
	//Make error message if location requested not found

	//Make function to fade in new blended header when weather changes upon location change
