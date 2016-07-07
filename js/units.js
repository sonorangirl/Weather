
$(document).ready(function() {

//Allow user to change units
	function toCelsius() {
		var oldTemperature = $('.current-temp').html();
		oldTemperature = oldTemperature.substring(0, oldTemperature.length - 1);
		console.log(oldTemperature);
		var newTemperature = (Number(oldTemperature)  -  32)  *  (5 / 9);
		console.log(newTemperature);
		newTemperature = Math.round(newTemperature).toString() + '&deg;';
		$('.current-temp').html(newTemperature);
		console.log(newTemperature);
	}

	function toFahrenheit() {
		var oldTemperature = $('.current-temp').html();
		oldTemperature = oldTemperature.substring(0, oldTemperature.length - 1);
		var newTemperature = Number(oldTemperature)  *  (9 / 5) + 32;
		newTemperature = Math.round(newTemperature).toString() + '&deg;';
		$('.current-temp').html(newTemperature);
		console.log(newTemperature);

	}

	//Change units when user clicks options
	$('#temp-units label[id="Celsius"]').click(function() {
		toCelsius();
	});
	$('#temp-units label[id="Fahrenheit"]').click(function() {
		toFahrenheit();
	});

});