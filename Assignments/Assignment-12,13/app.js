//   IF…ELSE & ELSE IF STATEMENT, 
// TESTING SET OF CONDITIONS
  
  
// function checkCharacter(input) {
//     if (!isNaN(input)) {
//       return "The given input is a number.";
//     }
  
//     if (input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 90) {
//       return "The given input is an uppercase letter.";
//     }
  
//     if (input.charCodeAt(0) >= 97 && input.charCodeAt(0) <= 122) {
//       return "The given input is a lowercase letter.";
//     return "The given input is not a number, uppercase letter, or lowercase letter.";
//   }
  
//   var userInput = prompt("Enter a character:");
  
//   var result = checkCharacter(userInput);
//   alert(result);
// }
    
    // Qno2
    // 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.


// function compareIntegers() {
//     var num1 = parseInt(prompt("Enter the first integer:"));
//     var num2 = parseInt(prompt("Enter the second integer:"));
//     if (num1 > num2) {
//       alert(num1 + " is larger.");
//     } else if (num2 > num1) {
//       alert(num2 + " is larger.");
//     } else {
//       alert("Both integers are equal.");
//     }
//   }
//   compareIntegers()
  
    // Qn3
    // Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.

//  var number = parseFloat(prompt("Enter a number:"));
//  if (number > 0) {
//    alert("The number is positive.");
//  } else if (number < 0) {
//    alert("The number is negative.");
//  } else {
//    alert("The number is zero.");
//  }

//    Qno 4
// Write a program that takes a character (i.e. string of 
    // length 1) and returns true if it is a vowel, false otherwise

        // var character = prompt("Enter a character:");
        // var lowercaseCharacter = character.toLowerCase();
        // var isVowel = lowercaseCharacter === "a" || lowercaseCharacter === "e" || lowercaseCharacter === "i" || lowercaseCharacter === "o" || lowercaseCharacter === "u";

        // if (isVowel) {
        //   alert("The character is a vowel.");
        // } else {
        //   alert("The character is not a vowel.");
        // }
    
        //   Qno5
        //. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise

    //  var correctPassword = "12345";
    // var enteredPassword = prompt("Enter your password:");
    // if (!enteredPassword) {
    //   alert("Please enter your password.");
    // } else if (enteredPassword === correctPassword) {
    //   alert("Correct! The password you entered matches the original password.");
    // } else {
    //   alert("Incorrect password.");
    // }

    // Qno6
//     This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

//  var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// alert(greeting);
     
  //  Qno 7
//   Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements

    // var time = parseInt(prompt("Enter the time in 24-hour format"));
    // var convertedTime;

    // if (time >= 0 && time < 1200) {
    //   convertedTime = time + " = " + time / 100 + "am";
    // } else if (time >= 1200 && time < 1300) {
    //   convertedTime = time + " = " + (time / 100) + "pm";
    // } else if (time >= 1300 && time < 2400) {
    //   convertedTime = time + " = " + (time / 100 - 12) + "pm";
    // } else {
    //   convertedTime = "Invalid time format!";
    // }
    // alert(convertedTime);

























