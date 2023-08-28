//This function: Take weight and height Calculates and returns the BMI value.
function calculator_bmi(weight, height) {
    var bmi = weight / (height * height);
    return bmi;
}

//This function: which receives the BMI value and returns the appropriate description for it
function interpret_bmi(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (18.5 <= bmi && bmi < 25) {
        return "Normal weight";
    } else if (25 <= bmi && bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

//Ask the user to enter the value of weight in kilograms and height in metres
var weight = parseFloat(prompt("Enter weight in kilograms: "));
var height = parseFloat(prompt("Enter height in meters: "));

var bmi = calculator_bmi(weight, height);
var interpretation = interpret_bmi(bmi);

console.log("Your BMI value is: " + bmi);
console.log("The corresponding description is: " + interpretation);