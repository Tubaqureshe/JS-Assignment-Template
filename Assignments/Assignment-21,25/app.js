// Qno1

// . Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.

// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// var fullName = firstName + " " + lastName;

// document.write("<h1>Assalam o alekum " + fullName + "!");

// Qno2

// Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser


// var favoriteModel = prompt("Enter your favorite mobile phone model:");

// var length = favoriteModel.length;

// document.write("<h1> length of String: " + length);

// Qno3

// Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var word = "Pakistani";
// var index = word.indexOf("n");

// document.write("<h1>String: Pakistan <br> index of 'n': " + index);

// Qno4
// . Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser.

// var word = "Hello World";
// var lastIndex = word.lastIndexOf("l");

// document.write("<h1>String:Hello World<br>The last index of 'l': " + lastIndex);


// Qno5
// Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser
// var word = "Pakistani";
// var character = word.charAt(3);

// document.write("<h1> String: Pakistan <br> character at index 3: " + character);

// Qno7

// Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser

// var word = "Hyderabad";
// var cityName = word.replace("Hyder", "Islam");

// document.write("<h1> City: Hyderabad<br>After replacement: " + cityName);

// Qno8
// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”;

// var message = "''Ali and Sami are best friends. They play cricket and football together.''";
// var newMessage = message.replace(/and/g, "&");

// document.write(" var massage = " + newMessage);

// Qno9
// Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser

// var stringNumber = "472";
// var number = parseInt(stringNumber);

// document.write("value: " + stringNumber + "<br>");
// document.write("Type: " + typeof stringNumber + "<br><br>");
// document.write("Number: " + number + "<br>");
// document.write("Type: " + typeof number);

// Qno10

// Write a program that takes user input. Convert and 
// show the input in capital letters.

// var userInput = prompt("Enter your input:");
// var capitalizedInput = userInput.toUpperCase();

// document.write("<h1>User input: " + userInput + "<br>");
// document.write("Upper case: " + capitalizedInput);

// Qno11
// Write a program that takes user input. Convert and 
// show the input in title case.

// var userInput = prompt("Enter your input:");
// var titleCaseInput = userInput.toLowerCase().replace(/(^|\s)\w/g, function(match) {
//   return match.toUpperCase();
// });
// document.write("<h1> User input:"  +  userInput + "<br>" )
// document.write("Title case: " +   titleCaseInput  );

// Qno12
// Write a program that converts the variable num to 
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36;
// var strNum = num.toString();
// var result = strNum.replace(".", "");

// document.write("<h1>Number: 35.36 <br>Result: " + result);

// Qno13
// Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@



// Qno14
// You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. Example:


// var arr = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];

// var input = prompt('Welcome to ABC bakery,what do you want to order Sir/Madam ?');

// if (arr.includes(input)) {
//     var index = arr.indexOf(input);
//     alert(input + ' is available at index ' + index + ' in our bakery.');
//   } else {
//     alert('We are Sorry ' + input + ' is not available in our bakery.');
//   }


// Qno15
// Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document


// Qno16
// Write a program to convert the following string to an 
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser



// var university = "University of Karachi";
// for(var i =0; i<university.length ; i++){
//    console.log(university[i]);
// }

// Qno17
// Write a program to display the last character of a user 
// input
// var userInput = prompt("Enter a string:");
// var lastCharacter = userInput.charAt(userInput.length - 1);
// document.write("<h1>User input:" + userInput + "<br>")
// document.write("Last character: " + lastCharacter);

// Qno18
// var sentence = "The quick brown fox jumps over the lazy dog";
// var wordToSearch = "the";

// sentence = sentence.toLowerCase();
// var words = sentence.split(" ");
// var count = 0;
// for (var i = 0; i < words.length; i++) {
//   if (words[i] === wordToSearch) {
//     count++;
//   }
// }
// document.write(" <h1>Text: " + sentence + "<br>" )
// document.write("There are   " + count + " (s) of the '" +  wordToSearch + "' times.");


























































