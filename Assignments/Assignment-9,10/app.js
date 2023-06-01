// USER INPUT & CONDITIONAL  STATEMENT
    // Qno1
    // Write a program to take “city” name as input from user. If 
    // user enters “Karachi”, welcome the user like this: 
    // “Welcome to city of lights”

//     var cityName = prompt("Enter the name of your city:");
// if (cityName.toLowerCase() === "karachi") {
//   alert("Welcome to the city of lights!");
// } else {
//   alert("Welcome to " + cityName);
// }

    //  Qno2
//     2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am

// var gender = prompt("Enter your gender:");

// if (gender.toLowerCase() === "male") {
//   alert("Good Morning Sir.");
// } else if (gender.toLowerCase() === "female") {
//   alert("Good Morning Ma'am.");
// } 

    //  Qno3
//     3. Write a program to take input color of road traffic signal 
// from the user & show the message according to this table

// var signalColor = prompt("Enter the color of the traffic signal:");

// if (signalColor.toLowerCase() === "red") {
//   alert("Must stop!");
// } else if (signalColor.toLowerCase() === "yellow") {
//   alert("Ready to move!");
// } else if (signalColor.toLowerCase() === "green") {
//   alert("Move now");
// } 

    //   Qno4
    // 4. Write a program to take input remaining fuel in car (in 
    //     litres) from user. If the current fuel is less than 0.25litres, 
    //     show the message “Please refill the fuel in your car”
        
//     var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));

// if (remainingFuel < 0.25) {
//   alert("Please refill the fuel in your car");
// } else {
//   alert("You have enough fuel in your car");
// }

    // Qno5
    // 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
//  if("car" < "cat"){
// alert("car is smaller than cat");
// }


//   Qno6
// Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute 
// grade as per following table

// function calculateGrade() {
//   var subject1 = parseInt(prompt("Enter marks obtained in Subject 1:"));
//   var subject2 = parseInt(prompt("Enter marks obtained in Subject 2:"));
//   var subject3 = parseInt(prompt("Enter marks obtained in Subject 3:"));
//   var totalMarks = parseInt(prompt("Enter total marks for each subject:"));

//   var totalObtainedMarks = subject1 + subject2 + subject3;
//   var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

//   var grade;
//   if (percentage >= 80) {
//     grade = "A+";
//   } else if (percentage >= 70) {
//     grade = "A";
//   } else if (percentage >= 60) {
//     grade = "B";
//   } else if (percentage >= 50) {
//     grade = "C";
//   } else if (percentage >= 40) {
//     grade = "D";
//   } else {
//     grade = "Fail";
//   }

//   document.write("Total Marks: " + totalMarks * 3 + "<br>");
//   document.write("Marks Obtained: " + totalObtainedMarks + "<br>");
//   document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
//   document.write("Grade: " + grade);
// }
// calculateGrade();
//    Qno7
// . Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
// function playGuessGame() {
//   var secretNumber = Math.floor(Math.random() * 10) + 1;
//     var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

//   if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer");
//   } else if (userGuess === secretNumber + 1) {
//     alert("Close enough to the correct answer");
//   } else {
//     alert("Wrong guess! The secret number was " + secretNumber);
//   }
// }
// playGuessGame();


    // Qno 
//     8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number 
// is divisible by 3.

// function checkDivisibility(number) {
//     if (number % 3  === 0) {
//       console.log(number + " is divisible by 3");
//     } else {
//       console.log(number + " is not divisible by 3");
//     }
//   }
  
//   var userInput = parseInt(prompt("Enter a number:"));
//   checkDivisibility(userInput);
  
//   Qno9
// Write a program that checks whether the given input is an
// even number or an odd number.
// function checkEvenOdd(number) {
//     if (number % 2 === 0) {
//       alert(number + " is an even number");
//     } else {
//       alert(number + " is an odd number");
//     }
//   }
  
//   var userInput = parseInt(prompt("Enter a number:"));
//   checkEvenOdd(userInput);
  
//   Qno10
// Write a program that takes temperature as input and 
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”


// function checkWeather(temperature) {
//     if (temperature > 40) {
//       alert("It is too hot outside.");
//     } else if (temperature > 30) {
//       alert("The Weather today is Normal.");
//     } else if (temperature > 20) {
//       alert("Today's Weather is cool.");
//     } else if (temperature > 10) {
//       alert("OMG! Today's weather is so Cool.");
//     } else {
//       alert("Temperature is too low.");
//     }
//   }
  
//   var userInput = parseFloat(prompt("Enter the temperature:"));
//   checkWeather(userInput);

//    Qno11
// Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user
// function calculator(num1, num2, operator) {
//     var result;
  
//     if (operator === '+') {
//       result = num1 + num2;
//     } else if (operator === '-') {
//       result = num1 - num2;
//     } else if (operator === '*') {
//       result = num1 * num2;
//     } else if (operator === '/') {
//       result = num1 / num2;
//     } else if (operator === '%') {
//       result = num1 % num2;
//     } else {
    
//       return "Invalid operator!";
//     }
  
//     return result;
//   }

//   var number1 = parseFloat(prompt("Enter the first number:"));
//   var number2 = parseFloat(prompt("Enter the second number:"));
//   var operation = prompt("Enter the operation (+, -, *, /, %):");
  
//   var calculatedResult = calculator(number1, number2, operation);
//   alert("The calculated result is: " + calculatedResult);
  
  



