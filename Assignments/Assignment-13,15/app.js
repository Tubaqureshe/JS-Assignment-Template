// ARRAYS
// Qno 1

// var studentNames = [];
// //   Qno2
// var studentNames = new Array();

// //   Qno3
// var stringsArray = ["Hello", "World", "JavaScript"];

// //    Qno4
// var numbersArray = [1, 2, 3, 4, 5];

// //    Qno5
// var booleanArray = [true, false, true];

//     // Qno6
//     var mixedArray = ["John", 25, true, "Smith"];

//     //    Qno 7
//     var qualificationsArray = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
//     document.write("Qualifiction: <br>");
//     for (var i = 0; i < qualificationsArray.length; i++) {
//       document.write((i + 1)  + ") " + qualificationsArray[i] + "<br>");
//     }

// Qno8
// Write a program to store 3 student names in an array.Take
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like  

// var studentNames =["sumaiya, areeba, sana"]
// var scores = [340,530,240];
// var totalMarks = 500;
// var percentages = [];
// for (var i = 0; i < scores.length; i++) {
//     var percentage = (scores[i] / totalMarks) * 100;
//     percentages.push(percentage.toFixed(2) + "%");
//   }
//   for (var i = 0; i < studentNames.length; i++) {
//     console.log("Name: " + studentNames[i]);
//     console.log("Score: " + scores[i]);
//     console.log("Percentage: " + percentages[i]);
//     console.log("-------------------------");
//   }

//    Qno9
// . Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// Arrays | JAVASCRIPT
// Page 3 of 6
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
    
// var colorNames = ["Red", "Green", "Blue"];
// document.write("color Names: " + colorNames + "<br><br>");
// var colorToAddStart = prompt("Enter a color to add at the beginning of the array:");
// colorNames.unshift(colorToAddStart);
// document.write("Array after adding color at the beginning: " + colorNames + "<br><br>");
// var colorToAddEnd = prompt("Enter a color to add at the end of the array:");
// colorNames.push(colorToAddEnd);
// document.write("Array after adding color at the end: " + colorNames + "<br><br>");
// colorNames.unshift("Yellow", "Orange");
// document.write("Array after adding two colors at the beginning: " + colorNames + "<br><br>");
// colorNames.shift();
// document.write("Array after deleting the first color: " + colorNames + "<br><br>");
// colorNames.pop();
// document.write("Array after deleting the last color: " + colorNames + "<br><br>");
// var indexToAdd = prompt("Enter the index to add a color:");
// var colorToAddIndex = prompt("Enter the color name to add at the desired index:");
// colorNames.splice(indexToAdd, 0, colorToAddIndex);
// document.write("Array after adding color at index " + indexToAdd + ": " + colorNames + "<br><br>");
// var indexToDelete = prompt("Enter the index to delete color(s):");
// var numToDelete = prompt("Enter the number of colors to delete:");
// colorNames.splice(indexToDelete, numToDelete);
// document.write("Array after deleting color(s) from index " + indexToDelete + ": " + colorNames + "<br><br>");


//    Qno 10
// Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.

// var scores = [320, 330, 480, 120,540];
// scores.sort(function(a, b) {
//   return a - b;
// });
// document.write(" Scores of Student : 320 , 330 , 480 , 120 , 540 </br>")
// document.write(" Order scores of student :  "  +  scores );

//    Qno11
// Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array

// var cities = ["Dubai", "London", "Paris", "Turki", "pakistan"];
// var selectedCities = [];
// selectedCities = cities.slice(0, 3);
// document.write("Cities list : Dubai ", "  London " , " Paris " , " Turki " , " pakistan   </br>")
// document.write("Selected cities list: " + selectedCities);

// //  Qno12
// Write a program to create a single string from the 
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var array = ["This", "is", "my", "cat"];
// var singleString = array.join(" ");
// document.write("<h1>Array: </h1> This, is, my, cat </br>")
// document.write("<h2> String:</h2> " + singleString);

//    Qno13

// 3. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)


// document.write('<h2>First In First Out Method</h2>' + '</br>');
// var arry = ["Keyboard ", "Mouse ", "CD ", "Monitor"+ '</br>']
// document.write(arry)

// var arry1 = arry.shift(0)
// document.write('<strong>OUT</strong>'+'</br>'+arry1 + '</br>')
// var arry2 = arry.shift(1)
// document.write('<strong>OUT</strong>'+ '</br>'+'</br>'+arry2 + '</br>')
// var arry3 = arry.shift(2)
// document.write('<strong>OUT</strong>'+ '</br>'+'</br>'+arry3 + '</br>')
// var arry4 = arry.shift(3)
// document.write('<strong>OUT</strong>'+'</br>'+arry4)


//    Qno14
// Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-First Out

// document.write('<h2>Last In-First Out</h2>' + '</br>');
// var arrys = ["Keyboard ", "mouse ", "printer ", "monitor"+ '</br>']
// document.write(arrys)

// var arrys1 = arrys.pop(1)
// document.write('<strong>OUT</strong>'+'</br>'+arrys1+ '</br>')
// var arrys2 =arrys.pop(2)
// document.write('<strong>OUT</strong>'+ '</br>'+'</br>'+arrys2 + '</br>')
// var arrys3 = arrys.pop(3)
// document.write('<strong>OUT</strong>'+ '</br>'+'</br>'+arrys3+ '</br>')
// var arrys4 = arrys.pop(0)
// document.write('<strong>OUT</strong>'+'</br>'+arrys4+ '</br>')

// Qno15

// Write a program to store phone manufacturers (Apple,
//   Samsung, Motorola, Nokia, Sony & Haier) in an array. 
//   Display the following dropdown/select menu in your 
//   browser using document.write() method:
  
// document.write('<h2>Phone Manufactures</h2>' + '</br>');

// var phoneManufactures = ["Apple ", "Samsung ", "Motrola ", "Nokia ", "Sony ", "Haier "];
// document.write(phoneManufactures);
// document.write('</br>' + phoneManufactures.shift(1)+ '</br>'
// + phoneManufactures.shift(2)+'</br>'
// +phoneManufactures.shift(3)+ '</br>'
//  +phoneManufactures.shift(4)+ '</br>'
//  +phoneManufactures.shift(5));






















