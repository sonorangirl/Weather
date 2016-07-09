
var base = "https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather";
var lat = "";
var lon = "";
var APIkey = "&appid=392e8e512b039c6ddb7ee382f837b322";
var units = "&units=imperial";
var cityName = "";
var city = "?q=" + cityName;
var api = "";
var weatherIcons;
var newTemperature;


//creates geolocated api call
function callGeoAPI() {
	api += base + lat + lon + APIkey + units;
	console.log(api);
}

//creates City Name api call
function callCityAPI() {
	api += base + city + APIkey + units;
	console.log(api);
}

//Changes Location to City Parameter
$('#cityName').click(function() {


});

$(document).ready(function() {

	function getOpenWeatherData() {
		//call OpenWeather api
		$.getJSON(api, function(data) {
			
			console.log(data);
			//update HTML with current temp and city name
			$('.current-temp').html(Math.round(data.main.temp) + '&deg;');
			$('.location-name').html(data.name);

			
			//Get Correct Icon
				var code = data.weather[0].id;
				var prefix = 'wi wi-owm-';
				var timeOfDay = "";

				var today = new Date();
				var hour = today.getHours();

				if (hour > 6 && hour < 20) {
					timeOfDay = "day-"; //Day time

				} else {
					timeOfDay ="night-"; //Night time
				}

				var icon = prefix + timeOfDay + code;

			$('.main-icon').html('<i class="' + icon + '"></i>');


			//Change background color
			var tempColorMap = {
				//Extremely Cold Greys
				"-21": "#D0D5E1",
				"-20": "#D0D5E1",
				"-19": "#D0D5E1",
				"-18": "#C6D0E1",
				"-17": "#C6D0E1",
				"-16": "#BDCBE2",
				"-15": "#BDCBE2",
				"-14": "#B4C7E3",
				"-13": "#B4C7E3",
				"-12": "#ABC2E4",
				"-11": "#ABC2E4",
				"-10": "#A1BDE4",
				"-9": "#A1BDE4",
				"-8": "#98B9E5",
				"-7": "#98B9E5",
				"-6": "#8FB4E6",
				"-5": "#8FB4E6",
				"-4": "#86AFE7",
				"-3": "#86AFE7",
				"-2": "#7DABE8",
				"-1": "#7DABE8",
				//Very Cold Blues/Greys
				"0": "#7DABE9",
				"1": "#7DABE9",
				"2": "#7198DB",
				"3": "#7198DB",
				"4": "#6585CE",
				"5": "#6585CE",
				"6": "#5972C1",
				"7": "#5972C1",
				"8": "#4D5FB4",
				"9": "#4D5FB4",
				"10": "#414CA7",
				"11": "#414CA7",
				"12": "#35399A",
				"13": "#35399A",
				"14": "#29268D",
				"15": "#29268D",
				"16": "#1D1380",
				"17": "#1D1380",
				"18": "#110172",
				"19": "#110172",
				//Cold Blues
				"20": "#110174",
				"21": "#110174",
				"22": "#100A77",
				"23": "#100A77",
				"24": "#0F147A",
				"25": "#0F147A",
				"26": "#0F1D7D",
				"27": "#0F1D7D",
				"28": "#0E2781",
				"29": "#0E2781",
				"30": "#0D3184",
				"31": "#0D3184",
				"32": "#0D3A87",
				"33": "#0D3A87",
				"34": "#0C448A",
				"35": "#0C448A",
				"36": "#0B4E8E",
				"37": "#0B4E8E",
				"38": "#0B5791",
				"39": "#0B5791",
				"40": "#0A6194",
				"41": "#0A6194",
				"42": "#0A6A97",
				"43": "#0A6A97",
				"44": "#09749B",
				"45": "#09749B",
				"46": "#087E9E",
				"47": "#087E9E",
				"48": "#0887A1",
				"49": "#0887A1",
				"50": "#0791A4",
				"51": "#0791A4",
				"52": "#069BA8",
				"53": "#069BA8",
				"54": "#06A4AB",
				"55": "#06A4AB",
				"56": "#05AEAE",
				"57": "#05AEAE",
				"58": "#05B8B2",
				"59": "#05B8B2",
				//Mild/Warm  Greens/Yellows
				"60": "#05B8A4",
				"61": "#05B8A4",
				"62": "#1DBE9C",
				"63": "#1DBE9C",
				"64": "#35C494",
				"65": "#35C494",
				"66": "#4DCA8C",
				"67": "#4DCA8C",
				"68": "#65D084",
				"69": "#65D084",
				"70": "#71D380",
				"71": "#71D380",
				"72": "#89DA78",
				"73": "#89DA78",
				"74": "#A1E070",
				"75": "#A1E070",
				"76": "#B9E668",
				"77": "#B9E668",
				"78": "#D1EC60",
				"79": "#D1EC60",
				//Hot Oranges/Reds
				"80": "#EAF358",
				"81": "#EAF358",
				"82": "#F2D54E",
				"83": "#F2D54E",
				"84": "#F1BB44",
				"85": "#F1BB44",
				"86": "#F1A23B",
				"87": "#F1A23B",
				"88": "#F18832",
				"89": "#F18832",
				"90": "#F16F29",
				"91": "#F16F29",
				"92": "#F15B22",
				"93": "#F15B22",
				"94": "#F1481B",
				"95": "#F1481B",
				"96": "#F13514",
				"97": "#F13514",
				"98": "#F1220D",
				"99": "#F1220D",
				//Very Hot Reds/Violets
				"100": "#F10904",
				"101": "#F10904",
				"102": "#F40A1A",
				"103": "#F40A1A",
				"104": "#F70C31",
				"105": "#F70C31",
				"106": "#FA0E48",
				"107": "#FA0E48",
				"108": "#FE105F",
				"109": "#FE105F",
				"110": "#FE0F68",
				"111": "#FE0F68",
				"112": "#FE0E71",
				"113": "#FE0E71",
				"114": "#FE0E7B",
				"115": "#FE0E7B",
				"116": "#FE0D84",
				"117": "#FE0D84",
				"118": "#FE0C8E",
				"119": "#FE0C8E",
				//Super Hot Violets
				"120": "#FE0C97",
				"121": "#FE0C97",
				"122": "#FE0BA1",
				"123": "#FE0BA1",
				"124": "#FE0AAA",
				"125": "#FE0AAA",
				"126": "#FF0AB4",
				"127": "#FF0AB4",
				"128": "#FF0FC3",
				"129": "#FF0FC3",
				"130": "#FF14D3",
				"131": "#FF14D3"

			};

			var currentTemp = Math.round(data.main.temp).toString(); //gets temperature, rounds it, then makes it a string
			console.log(currentTemp);
			var tempColor = tempColorMap[currentTemp]; //gets hexcode color for the current temp
			console.log(tempColor);
			$('body, html').css('background-color', tempColor);
			$('.text-muted, i.wi, .current-temp, .location-name').css('color', tempColor);
			$('.panel-footer').css('background-color', '#ffffff', 'border-top', tempColor);

			//Change footer text
			var tempRange = data.main.temp;
			if (tempRange < 20) {
				$('.text-muted').html('Error....frozen...');
			} else if (tempRange >= 20 && tempRange < 40) {
				$('.text-muted').html('Damn its cold');
			} else if (tempRange >= 40 && tempRange < 60) {
				$('.text-muted').html('Brrrrrrr.....');
			} else if (tempRange >= 60 && tempRange < 80) {
				$('.text-muted').html('Lovely weather we\'re having');
			} else if (tempRange >= 80 && tempRange < 90) {
				$('.text-muted').html('At least its not above 90');
			} else if (tempRange >= 90 && tempRange < 100) {
				$('.text-muted').html('Yikes its hot outside!');
			} else if (tempRange >= 100 && tempRange < 110) {
				$('.text-muted').html('Danger Will Robinson, you\'re melting!');
			} else if (tempRange >= 110) {
				$('.text-muted').html('I think you may be on Venus?');
			}
				
		});
	}

	//Get users Location info
	function success(pos) {
		lat += "?lat=" + pos.coords.latitude;
		lon += "&lon=" + pos.coords.longitude;
		console.log(lat, lon);
		callGeoAPI(); //set API call parameters
		getOpenWeatherData(); //Get information from API and update HTML

	}

	//Get lat and lon, use to create API call with success callback
	navigator.geolocation.getCurrentPosition(success);



});

//TO DO 
	
	//Add fallback if geolocation data unavailable

	//Make error message if location requested not found

	

	//Make another api call to get weather data for next four days

	//Make function to update days of the week

	







