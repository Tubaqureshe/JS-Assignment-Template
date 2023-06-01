// ARRAYS AND LOOP
  // Qno2
// var arry = [
//   [1, 2, 3],
//   [2, 1, 3],
//   [3, 2, 1]
// ];

// for (var a = 0; a < arry.length; a++) {
//   for (var b = 0; b < arry[a].length; b++) {
//     document.write(arry[a][b] + " ");
//   }
//   document.write("<br>");
// }

  // Qno3
  // Write a program to print numeric counting from 1 to 10
// for (var i = 1; i <= 10; i++) {
//   document.write(i + "<br>");
// }

// Qno4
// Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user.

// var tableNumber = parseInt(prompt("Enter the table number:")); 
// var tableLength = parseInt(prompt("Enter the table length:"));
// for (var i = 1; i <= tableLength; i++) {
//   var result = tableNumber * i;
//   console.log(tableNumber + " x " + i + " = " + result);
// }

// Qno5
// Write a program to print items of the following array 
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]

// var fruits =  ["<h1> apple", "banana", "mango", "orange", "strawberry"]
// for(var i = 0; i < fruits.length; i++) {
//   document.write(fruits[i] + "<br>");
  
// }
// document.write("<h1> Element at index 0 is Apple")
// document.write("<br> Element at index 1 is Banana")
// document.write("<br> Element at index 2 is Mango")
// document.write("<br> Element at index 3 is Orange")
// document.write("<br> Element at index 4 is Strawberry")

// Qno6
// Generate the following series in your browser. See 
// example output.
// Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// document.write("Counting: ");
// for (var i = 1; i <= 15; i++) {
//   document.write(i + ", ");
// }

// document.write("<br>");

// // Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// document.write("Reverse counting: ");
// for (var j = 10; j >= 1; j--) {
//   document.write(j + ", ");
// }

// document.write("<br>");

// // Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// document.write("Even: ");
// for (var k = 0; k <= 20; k += 2) {
//   document.write(k + ", ");
// }


// Qno7

// . You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// var arry = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Wellcome to ABC Bakery. What do you want to order sir/ma'am:");

// var available = false;
// for (var i = 0; i < arry.length; i++) {
//   if (arry[i] === userInput) {
//     available = true;
//   }
// }

// if (available) {
//   alert("cookie is available at index 2 in our bakery.");
// } else {
//   alert("We are sorry pastry is not available in our bakery.");
// }

// Qno.8
//  Write a program to identify the largest number in the 
// given array.
// A = [24, 53, 78, 91, 12]


// var arry = [24, 53, 78, 91, 12];
// var largest = arry[0];

// for (var i = 0; i < arry.length; i++) {
//   if (arry[i] > largest) {
//     largest = arry[i];
//   }
// }
// document.write("<h1> Arry items: 24, 53, 78, 91, 12 <br>");
// document.write("The largest number is: " + largest);


// Qno9
// . Write a program to identify the smallest number in the 
// given array.
// A = [24, 53, 78, 91, 12]

// var arry = [24, 53, 78, 91, 12];
// var smallest = arry[0];

// for (var i = 1; i < arry.length; i++) {
//   if (arry[i] < smallest) {
//     smallest = arry[i];
//   }
// }
// document.write("<h1> Arry items: 24, 53, 78, 91, 12 <br>");
// document.write("The smallest number is: " + smallest);

// Qno10
// Write a program to print multiples of 5 ranging 1 to 
// 100
 
// for(var i = 1; i <= 100; i++){
//   if(i % 5 === 0) {
//     document.write(i + " ,")
//   }
// }














































































