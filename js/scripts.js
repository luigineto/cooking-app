var lbToG = function(pound) {
	return pound / 0.0022046;
};

var gToLb = function(gram) {
	return gram * 0.0022046;
};

var usGalToL = function(usGallon) {
	return usGallon / 0.26417;
};

var lToUsGal = function(liter) {
	return liter * 0.26417;
};

var pound = parseInt(prompt("Enter a pound unit value:"));
result = lbToG(pound);
alert(result);

var gram = parseInt(prompt("Enter a gram unit value:"));
result = gToLb(gram);
alert(result);

var usGallon = parseInt(prompt("Enter an US gallon unit value:"));
result = usGalToL(usGallon);
alert(result);

var liter = parseInt(prompt("Enter a liter unit value:"));
result = lToUsGal(liter);
alert(result);




