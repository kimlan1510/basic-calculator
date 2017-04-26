var add = function(number1, number2){
	return number1 + number2;
};

var subtract = function(number1, number2){
	return number1 - number2;
};

var multiply = function(number1, number2){
	return number1 * number2;
};

var divide = function(number1, number2){
	return number1 / number2;
};

$(document).ready(function() {
	/*get add button to do addition only*/
	$("#button1").click(function(){
		$("form#calculator").submit(function(event){
			var number1 = parseFloat($("#number1").val());
			var number2 = parseFloat($("#number2").val());
			var result = add(number1, number2);
			$("#output1").text(result);

			event.preventDefault();
		});
	});
	/*get subtract button to do subtraction only*/
	$("#button2").click(function(){
		$("form#calculator").submit(function(event){
			var number1 = parseFloat($("#number1").val());
			var number2 = parseFloat($("#number2").val());
			var result = subtract(number1, number2);
			$("#output1").text(result);

			event.preventDefault();
		});
	});

	$("#button3").click(function(){
		$("form#calculator").submit(function(event){
			var number1 = parseFloat($("#number1").val());
			var number2 = parseFloat($("#number2").val());
			var result = multiply(number1, number2);
			$("#output1").text(result);

			event.preventDefault();
		});
	});

	$("#button4").click(function(){
		$("form#calculator").submit(function(event){
			var number1 = parseFloat($("#number1").val());
			var number2 = parseFloat($("#number2").val());
			var result = divide(number1, number2);
			$("#output1").text(result);

			event.preventDefault();
		});
	});


});
