// MATH METHODS

// Qno1
// Write a program that displays current date and time in 
// your browser

// var currentDate = new Date();
// document.write("<h1>Current Date:" + currentDate)

// Qno2
// Write a program that alerts the current month in words. 
// For example December.

// var currentDate = new Date();
// var currentMonth = currentDate.getMonth();
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var currentMonthName = monthNames[currentMonth];
// document.write("<h1>Current Month: " + currentMonthName);

// Qno3
// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show 
// Sun

// var currentDate = new Date();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDay = currentDate.getDay();
// var currentDayLetters = dayNames[currentDay].slice(0, 3);
// document.write("<h1>Today is: " + currentDayLetters);


// Qno4
// . Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today
// var currentDate = new Date();
// var currentDay = currentDate.getDay();
// if (currentDay === 6 || currentDay === 0) {
// } 
// else {
//   document.write("<h1>It's Fun day");
// }

// Qno5
// Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”

// var currentDate = new Date();
// var currentDay = currentDate.getDate();
// if (currentDay < 16) {
// } else { 
//     document.write("<h1>First fifteen days of the month");
// }

// Qno6
// . Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object.

// var currentDate = new Date();
// console.log("Current Date:" + currentDate);
// var currentDate = new Date();
// var timeInMillis = currentDate.getTime();
// var minutesSinceMidnight = Math.round( timeInMillis / (1000 * 60));
// console.log(" Elapsed Millisecond since junuary 1, 1970: " + minutesSinceMidnight);
// console.log("Elapsed Minutes since junuary 1, 1970: " + timeInMillis );

// Qno7
// Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”

// var currentTime = new Date();
// var currentHour = currentTime.getHours();
// if (currentHour < 12) {
//   document.write("<b>It's PM");
// } else {
//     document.write("It's AM");
// }

// Qno8
// . Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate.


// var currentDate = new Date("2021-01-01");
// currentDate.setMonth(currentDate.getMonth() - 1);
// currentDate.setDate(0);
// var laterDate = currentDate;
// document.write( "<b>Later Date:" + laterDate);

// Qno9

// / 9. Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
// document.write('<br>', "<h3>Number of days passed from Ramzan</h3>"); 

// var sDate = new Date(2015, 5, 18);
// var current = new Date()
// var new3 = current-sDate;
// var dDiff = Math.floor(new3/ (24* 60 * 60 * 1000));
// document.write("Number of days passed since 1st Ramadan: " +dDiff)


// /Qno10

// Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015.

// var currentDate = new Date();
// document.write("<b>Current Date:" + currentDate +"<br>");
// var referenceDate = new Date();
// referenceDate.setFullYear(2015, 0, 1);
// var secondsElapsed = Math.floor((referenceDate.getTime() - new Date(0).getTime()) / 1000);
// document.write("Seconds had passed since the beginning of 2015: " + secondsElapsed);


// Qno11
// Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser

// var date = new Date()
// document.write('<br>'+"Current date: "+date + '<br>')
// var date1 = date.setHours(date.getHours()-1)
// var pre = new Date(date1)
// document.write("1 hour ago: " + pre+ '<br>')

// Qno12
// Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back?

// var curr = new Date()
// document.write("Current: "+ curr + '<br>');
// var date1 = curr.setFullYear(curr.getFullYear()-100)
// var pre = new Date(date1)
// document.write('<br>'+"100 Years Back: " + pre)


// Qno13

// Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser.

// var age = +prompt("Enter your age");
// var currentYear =2023;
//  var DOB = currentYear-age;
//  alert(DOB);

// Qno14
// Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// DATE METHODS | JAVASCRIPT
// Page 5 of 5
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where

// document.write('<br>', "<h3>K-Electric Bill</h3>");
// var customer = prompt("ENter your Name");
// document.write('<b>Customer Name: </b>'+customer+'<br>');

// var customerMonth= prompt("Enter Your recent Bill Month");
// document.write('<b>Month Name: </b>'+customerMonth+'<br>')

// var customerUnit = +prompt("Enter your number of units");
// document.write('<b>Number of unit: </b>'+customerUnit+'<br>');

// var customerCharges = +prompt("Enter the charges per unit");
// document.write('<b>Charges per unit: </b>'+customerCharges+'<br>');


// var latePayment = 300;
// document.write("Late payment charges: "+ latePayment +'<br>');

// var netAmount = customerUnit * customerCharges ;
// var gross = netAmount + latePayment;

// document.write("Net Amount Payable (within Due Date): " +netAmount+ '<br>');
// document.write("Gross payment Payable (after Due Date): " +gross+ '<br>');































