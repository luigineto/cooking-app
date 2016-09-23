var add = function(number1, number2) {
	return number1 + number2;
};

var subtract = function(number1, number2) {
	return number1 - number2;
};

var multiply = function(number1, number2) {
	return number1 * number2;
};

var divide = function(number1, number2) {
	return number1 / number2;
};

var bmi = function(weightInKg, heightInM) {
	return weightInKg / (heightInM^2);
};

var celsiusToFahrenheit = function(celsius) {
	return (celsius * 9/5) + 32;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

var result = add(number1, number2);
alert(result);

result = subtract(number1, number2);
alert(result);

result = multiply(number1, number2);
alert(result);

result = divide(number1, number2);
alert(result);

var weightInKg = parseInt(prompt("Enter a weight in kg:"));
var heightInM = parseInt(prompt("Enter a height in m:"));
result = bmi(weightInKg, heightInM);
alert(result);

var celsius = parseInt(prompt("Enter a temperature in Celsius:"));
result = celsiusToFahrenheit(celsius);
alert(result);



