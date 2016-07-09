
$(document).ready(function() {

//Allow user to change units
	var unitStatus = "F";
	var newTemperature;

	function changeUnits() {
		var oldTemperature = $('.current-temp').html();
		oldTemperature = oldTemperature.substring(0, oldTemperature.length - 1);
		if (unitStatus === "F") {
			newTemperature = (Number(oldTemperature)  -  32)  *  (5 / 9);
			unitStatus = "C";
		} else if (unitStatus === "C") {
			newTemperature = Number(oldTemperature)  *  (9 / 5) + 32;
			unitStatus = "F";
		}
		newTemperature = Math.round(newTemperature).toString() + '&deg;';
		$('.current-temp').html(newTemperature);
	}

	//Change units when user clicks options
	$('#temp-units label[id="Celsius"]').click(function() {
		if (unitStatus === "F") {
			changeUnits();
			$('#Fahrenheit').css({
				'background-color': '#ffffff',
				'color': tempColor
			});
			$('#Celsius.active').css({
				'background-color': tempColor,
				'color': '#ffffff'
			});
		}
	});

	$('#temp-units label[id="Fahrenheit"]').click(function() {
		if (unitStatus === "C") {
			changeUnits();
			$('#Celsius').css({
				'background-color': '#ffffff',
				'color': tempColor
			});
			$('#Fahrenheit.active').css({
				'background-color': tempColor,
				'color': '#ffffff'
			});
		}
	});

});




