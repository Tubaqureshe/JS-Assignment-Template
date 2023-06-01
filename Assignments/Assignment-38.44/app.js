// FUNCTIONS, SWITCH 
// STATEMENTS, WHILE… DOWHILE LO

// Qno1
// Write a custom function power ( a, b ), to calculate the value of 
// a raised to b.
// function power(a, b) {
//   return Math.pow(a, b);
// }

// var a = 2;
// var b = 3;
// var result = power(a, b);
// console.log(result); 

// Qno2
// .  . Any year is entered through the keyboard. Write a function to 
// determine whether the year is a leap year or not.

// function isLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// var inputYear = 2024;
// var isLeap = isLeapYear(inputYear);
// console.log(isLeap); 

// Qno3
// If the lengths of the sides of a triangle are denoted by a, b, and 
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2

// function calculateTriangleArea(a, b, c) {
//   var s = (a + b + c) / 2;
//   var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

//   return area;
// }
// var sideA = 3;
// var sideB = 4;
// var sideC = 5;
// var triangleArea = calculateTriangleArea(sideA, sideB, sideC);
// console.log(triangleArea);

// Qno4
// Write a function that receives marks received by a student in 3 
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction 
// and other are for average and percentage. Call those functions 
// from mainFunction and display result in mainFunction.

// function calculateAverage(mark1, mark2, mark3) {
//   return (mark1 + mark2 + mark3) / 3;
// }
// function calculatePercentage(mark1, mark2, mark3) {
//   var totalMarks = 300; 
//   var obtainedMarks = mark1 + mark2 + mark3;
//   return (obtainedMarks / totalMarks) * 100;
// }
// function calculateResult(mark1, mark2, mark3) {
//   var average = calculateAverage(mark1, mark2, mark3);
//   var percentage = calculatePercentage(mark1, mark2, mark3);
// console.log("Average: " + average.toFixed(2));
//   console.log("Percentage: " + percentage.toFixed(2) + "%");
// }
// function mainFunction() {
//   var subject1Marks = parseInt(prompt("Enter marks for subject 1:"));
//   var subject2Marks = parseInt(prompt("Enter marks for subject 2:"));
//   var subject3Marks = parseInt(prompt("Enter marks for subject 3:"));

//   calculateResult(subject1Marks, subject2Marks, subject3Marks);
// }
// mainFunction();
  //  Qno5
//   You have learned the function indexOf. Code your own custom 
// function that will perform the same functionality. You can code 
// for single character as of now


// function customIndexOf(str, char) {
//   for (var i = 0; i < str.length; i++) {
//     if (str.charAt(i) === char) {
//       return i;
//     }
//   }
//   return -1;
// }
// var string = "Hello, World!";
// var character = "o";
// var index = customIndexOf(string, character);
// console.log(index);

// Qno6
// Write a function to delete all vowels from a sentence. Assume 
// that the sentence is not more than 25 characters long.

// function removeVowels(sentence) {
//   var vowels = ['a', 'e', 'i', 'o', 'u'];
//   var result = '';

//   for (var i = 0; i < sentence.length; i++) {
//     var char = sentence.charAt(i);
//     if (!vowels.includes(char.toLowerCase())) {
//       result += char;
//     }
//   }

//   return result;
// }
// var sentence = "Usama usman developer!";
// var result = removeVowels(sentence);
// console.log(result);


// Qno7
// . Write a function with switch statement to count the number of 
// occurrences of any two vowels in succession in a line of text. 
// For example, in the sentence
// function countSuccessiveVowels(sentence) {
//   var count = 0;
//   var vowels = ['a', 'e', 'i', 'o', 'u'];

//   for (var i = 0; i < sentence.length - 1; i++) {
//     var char1 = sentence.charAt(i).toLowerCase();
//     var char2 = sentence.charAt(i + 1).toLowerCase();

//     switch (char1) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         if (vowels.includes(char2)) {
//           count++;
//           console.log(char1 + char2);
//         }
//         break;
//     }
//   }

//   return count;
// }
// var sentence = "Pleases read this application and give me gratuity";
// var result = countSuccessiveVowels(sentence);
// console.log(result); 

// Qno8
// The distance between two cities (in km.) is input through the 
// keyboard. Write four functions to convert and print this 
// distance in meters, feet, inches and centimeters.

// function convertToMeters(distance) {
//   return distance * 1000;
// }

// function convertToFeet(distance) {
//   return distance * 3280.84;
// }

// function convertToInches(distance) {
//   return distance * 39370.1;
// }

// function convertToCentimeters(distance) {
//   return distance * 100000;
// }

// var distance = parseFloat(prompt("Enter the distance between two cities in kilometers:"));

// var distanceInMeters = convertToMeters(distance);
// console.log("Distance in meters:", distanceInMeters);

// var distanceInFeet = convertToFeet(distance);
// console.log("Distance in feet:", distanceInFeet);

// var distanceInInches = convertToInches(distance);
// console.log("Distance in inches:", distanceInInches);

// var distanceInCentimeters = convertToCentimeters(distanceInKm);
// console.log("Distance in centimeters:", distanceInCentimeters);

// // Qno9
// Write a program to calculate overtime pay of employees. 
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
// worked above 40 hours. Assume that employees do not work 
// for fractional part of an hour
   
// var worked = prompt("Enter the number of hours worked:");
// var hourlyRate = prompt("Enter hourly rate the employee:");

// if (worked > 40) {
//   var overtimeHours = worked - 40;
//   var overtimePay = overtimeHours * 12;
//   var totalPay = 40 * hourlyRate + overtimePay;
//   document.write("Total pay: Rs. " + totalPay);
// } else {
//   var totalPay = worked * hourlyRate;
//   document.write("Total pay: Rs. " + totalPay);
// }


// Qno10
// A cashier has currency notes of denominations 10, 50 and 
// 100. If the amount to be withdrawn is input through the 
// keyboard in hundreds, find the total number of currency notes 
// of each denomination the cashier will have to give to the 
// withdrawer.

// function currencyNotes(amount) {
//   var hundredNotes100 = Math.floor(amount / 100);
//   var fiftyNotes50 = Math.floor((amount % 100) / 50);
//   var tenNotes10 = Math.floor(((amount % 100) % 50) / 10);

//   return {
//     hundredNotes100: hundredNotes100,
//     fiftyNotes50: fiftyNotes50,
//     tenNotes10: tenNotes10
//   };
// }

// var amount = parseInt(prompt("Enter the amount to be withdrawn in hundreds:"));

// var currencyNotes = currencyNotes(amount);

// document.write("<br>Number of 100 denomination notes:", currencyNotes.hundredNotes100 + "<br>");
// document.write("Number of 50 denomination notes:", currencyNotes.fiftyNotes50 + "<br>");
// document.write("Number of 10 denomination notes:", currencyNotes.tenNotes10 + "<br>");

// Qno11


