#This function: Take weight and height Calculates and returns the BMI value.
def calculator_bmi(weight, height):
    bmi = weight / (height * height)
    return bmi

#This function: which receives the BMI value and returns the appropriate description for it
def interpret_bmi(bmi):
    if bmi < 18.5:
        return "Underweight"
    elif 18.5 <= bmi < 25:
        return "Normal weight"
    elif 25 <= bmi < 30:
        return "Overweight"
    else:
        return "Obese"

#Ask the user to enter the value of weight in kilograms and height in metres
weight = float(input("Enter weight in kilograms: "))
height = float(input("Enter height in meters: "))

bmi = calculator_bmi(weight, height)
interpretation = interpret_bmi(bmi)

print("Your BMI value is:", bmi)
print("The corresponding description is:", interpretation)