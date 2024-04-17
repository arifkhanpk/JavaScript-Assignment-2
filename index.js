/*                   Chapter # 6-9  MATH EXPRESSIONS */

/* Q.1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser: */

// var a = 10
// document.write("<h3>Result</h3>"+"The value of a is: " + a + "<br>")
// document.write(".............................................." + "<br><br>")

//  document.write("The value of ++a is: " + ++a + "<br>")
//  document.write("Now the value of a is: " + a + "<br><br>")

//  document.write("The value of a++ is: " + a++ + "<br>")
//  document.write("Now the value of a is: " + a + "<br><br>")

//  document.write("The value of --a is: " + --a + "<br>")
//  document.write("Now the value of a is: " + a + "<br><br>")

//  document.write("The value of a-- is: " + a-- + "<br>")
//  document.write("Now the value of a is: " + a + "<br><br>")
//  document.write("_______________________")



/* Q.2. What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--;
Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--; */

// var a = 2;
// var b = 1;

// document.write("--a: ")
// document.write(--a + "<br>")  // 1
// document.write("--a - --b: ")
// document.write(--a - --b + "<br>")  // 0
// document.write("--a - --b + ++b: ")
// document.write(--a - --b + ++b + "<br>")  // 0
// document.write("--a - --b + ++b + b--: ")
// document.write(--a - --b + ++b + b-- + "<br>")   //   -1

// document.write("a: " , a  + "<br>")
// document.write("b: " , b + "<br>")

// var result = --a - --b + ++b + b--;
// document.write("result: " , result)



/* Q.3. Write a program that takes input a name from user & greet the user. */

// var userInput = prompt("Enter your Name")
// document.write("Hello! " + userInput + "<br>")



/* Q.4&5. Write a program to take input a number from user & display it’s multiplication table on your browser.
   If user does not enter a new number, multiplication table of 5 should be displayed by default. */

// var table = +prompt("Enter number for table")
// var defaultTable = 5

//  for (let index = 1; index < 11; index++) {
//     if (table === 0) {
//         var defaultTable1 = document.write(defaultTable + " x " + index + " = " + defaultTable*index + "<br>")

//        }
//     if (table >= 1) {
//        var table1 = document.write(table + " x " + index + " = "+ table*index + "<br>")

//     }


//   }


/* Q.6. Take
a) Take three subjects name from user and store them in 3 different variables.
b) Total marks for each subject is 100, store it in another variable.
c) Take obtained marks for first subject from user and stored it in different variable.
d) Take obtained marks for remaining 2 subjects from user and store them in variables.
e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table) */


// var sub1 = prompt("Enter Subject Name 1");
// var sub2 = prompt("Enter Subject Name 2");
// var sub3 = prompt("Enter Subject Name 3");

// var total_marks = 100;
// var sub_total = 300;

// var obtained_marks1 = +prompt("Enter Obtained Marks "+ sub1 );
// var obtained_marks2 = +prompt("Enter Obtained Marks "+ sub2);
// var obtained_marks3 = +prompt("Enter Obtained Marks "+ sub3);

// var total_obtained =  obtained_marks1 + obtained_marks2 + obtained_marks3


// var per1 = (obtained_marks1 / total_marks) * 100
// var per2 = (obtained_marks2 / total_marks) * 100
// var per3 = (obtained_marks3 / total_marks) * 100
// var per = (total_obtained / sub_total) * 100
// console.log(per)

// document.write("<h3>" + "Subject " + "Total Marks " + "Obtained Marks " + "Percentage " + "</h3>")
// document.write("<h3>" + sub1 + ".........." +  total_marks + "................." + obtained_marks1 + "..............." + per1+"%" + "</h3>")
// document.write("<h3>" + sub2 + ".........." +  total_marks + "................." + obtained_marks2 + "..............." + per2 +"%"+ "</h3>")
// document.write("<h3>" + sub3 + ".........." +  total_marks + "................."+ obtained_marks3 + "..............." +  per3 +"%" + "</h3>")
// document.write('_______________________________________________'+ `<br></br>`)
// document.write("<h3>" + "Total Marks: " + sub_total + "<br>" + "<br>" +  "Marks Obtained: " + total_obtained + "<br>" + "<br>"  +  "Grand Percentage: " + per +"%")


// document.write("<h2>" + "" + "</h2>" + "<br>" + "Total Marks: " +total_marks+"<br>"+ total_marks +"<br>"+ total_marks);
// document.write("<h2>" + "" + "</h2>" + "<br>"+ "Obtained marks: " + obtained_marks1+"<br>"+ obtained_marks2+"<br>"+ obtained_marks3 + "<br>"+ total_obtained);
// // document.write("<h2>" + "" + "</h2>" + "<br>"+ "Percentage: " + per1+"<br>"+ per2+"<br>"+ per3 + "<br>"+per);
// document.write("Total Obtained: ", total_obtained)

//                   Chapter # 9-11  USER INPUT & CONDITIONAL STATEMENT


/* Q.1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights” */

// var user = prompt("Enter a city Name");
// if(user === "Karachi"){
// alert("Welcome to city of Lights")
// }



/* Q.2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir.
   If the user is female, give the message: Good Morning Ma’am. */

// var user = prompt("Enter your Gender");
// if(user === "male"){
//     alert("Good Morning Sir")
// }
// else if(user === "female"){
//     alert("Good Morning Ma'am")
// }else{
//     alert("Choose only male or female")
// }


/* Q.3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
Signal color
Red: Message Red Must Stop
Yellow: Ready to move
Green: Move now */

// var user = prompt("Enter the name of traffic signal colour");
// if(user === "Red"){
//     alert("Must Stop")
// }
// else if(user === "Yellow"){
//     alert("Ready to Move")
// }
// else if(user === "Green"){
//     alert("Move Now")
// }else{
//     alert("Choose the correct traffic signal colour")
// }

// /* Q.4. Write a program to take input remaining fuel in car (in litres) from user.
//   If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car” */

// var user = +prompt("Enter remaining fuel in car in litres");
// if(user < 0.25){
//     alert("Please refill the fuel in your car")
// }else{
//     alert("Fuel is enough for riding")
// }

/* Q.5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
a. var a = 4; if (++a === 5){ alert("given condition for variable a is true"); }
b. var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }
c. var c = 12; if (c++ === 13){ alert("condition 1 is true"); } if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); }
d. var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); }
e. if (true){ alert("True"); } if (false){ alert("False"); }
f. if("car" < "cat"){ alert("car is smaller than cat"); } */

// var a = 4;
// if(++a === 5){
//     alert("given condition for variable a is true"); // given condition for variable a is true
// }

// var b = 82;
// if(b++ === 83){
//     alert("given condition for variable b is true")
// }

// var c = 12;
// if(c++ === 13){
// alert("condition 1 is true");
// }

// if(c === 13){
//     alert("condition 2 is true") // condition 2 is true"
// }
// if(++c < 14){
//     alert("condition 3 is true");
// }
// if(c === 14){
//     alert("condition 4 is true");  // condition 4 is true
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//    alert("The cost equals");                    // The cost equals
// }
// if (true){
//    alert("True");     //True
// } if (false){
// alert("False");
// }


// if("car" < "cat"){
//    alert("car is smaller than cat"); // car is smaller than cat
// }

// /* Q.6. Write a program to take input the marks obtained in three subjects & total marks.
//   Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table: */

// var sub1 = +prompt("Enter Math Marks");
// var sub2 = +prompt("Enter English Marks");
// var sub3 = +prompt("Enter Urdu Marks");
// var obtn =  (sub1 + sub2 + sub3);
// var totalmarks = +prompt("Enter total Marks");

// var percentage = obtn / totalmarks * 100;
// var grade = " "

// document.write("<h1>" + "Marks Sheet" + "<h1>")

// if(percentage >= 80){

//   document.write("<h2>"+ "Total Marks: 300" + "<br>" + "Marks Obtained:" + obtn + "<br>" + "Percentage:" + percentage + "<br>" + "Grade: A+"  + "<br>" + "Remarks:" + "Excellent" +"</h2>")
// }

// else if(percentage >= 70){
//    document.write("<h2>"+ "Total Marks: 300" + "<br>" + "Marks Obtained:" + obtn + "<br>" + "Percentage:" + percentage + "<br>" + "Grade: A"  + "<br>" + "Remarks:" + "Good" +"</h2>")
// }
// else if(percentage >= 60){
//    document.write("<h2>"+ "Total Marks: 300" + "<br>" + "Marks Obtained:" + obtn + "<br>" + "Percentage:" + percentage + "<br>" + "Grade: B"  + "<br>" + "Remarks:" + "You need to improve" +"</h2>")
// }
// else if (percentage < 60){
//    document.write("<h2>"+ "Total Marks: 300" + "<br>" + "Marks Obtained:" + obtn + "<br>" + "Percentage:" + percentage + "<br>" + "Grade: Fail"  + "<br>" + "Remarks:" + "Sorry" +"</h2>")
// }


/* Q.7. Guess game:
Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. a. If user guesses the same number, show “Bingo! Correct answer”.
b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”. */

// var numb = +prompt("Guess a secret number (ranging 1 to 10)")

// if (numb == 5) {
//     alert("Bingo! Correct answer")
// }else if (numb == 4 || numb == 6) {
//     alert("Close enough to the correct answer")
// }else{
//     alert("Try again")
// }

/* Q.8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3. */

// var user = +prompt("Enter numbers divisible by 3.")
// var divisible = user%3

// if (divisible == 0) {
//     alert("The number is divisible by 3.")
// } else {
//    alert("It's not Divisible by 3" + "\n" + "Enter only divisible by 3 number.")
// }

// /* Q.9. Write a program that checks whether the given input is an even number or an odd number. */


// var userNumber = +prompt('Enter you number')
// if (userNumber%2 === 0) {
//     alert('This number is even')
// }else{
//     alert('This number is odd')
// }



/* Q.10. Write a program that takes temperature as input and shows a message based on following criteria a. T > 40 then “It is too hot outside.”
   b. T > 30 then “The Weather today is Normal.” c. T > 20 then “Today’s Weather is cool.” d. T > 10 then “OMG! Today’s weather is so Cool.” */

// var temp = + prompt("Enter a Temperature")
//   if(temp > 40){
//     alert("It is to Hot Outside")
//   }
// else if (temp > 30 ){
//   alert("The Weather today is Normal")
// }
// else if (temp > 20){
//   alert("TOday's Weather is Cool")
// }
// else if(temp > 10){
//   alert("OMG!  Today Weather is so cool")
// }
// else{
//   alert("Enter Temperature above 10")
// }

/* Q.11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
  a. First number b. Second number c. Operation (+, -, *, /, %) Compute & show the calculated result to user. */

// var num1 = +prompt("Enter the first number: ");
// var num2 = +prompt("Enter the second number: ");
// var operator = prompt("Enter the operator (+, -, *, /, %): ");

// var result;

// if (operator === "+") {
//   result = num1 + num2;
// } else if (operator === "-") {
//   result = num1 - num2;
// } else if (operator === "*") {
//   result = num1 * num2;
// } else if (operator === "/") {
//   result = num1 / num2;
// } else if (operator === "%") {
//   result = num1 % num2;
// } else {
//   document.write("Invalid operator");
// }

// document.write("Result: " , result);


//                   Chapter # 12-13  IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS



/* Q.1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter.
 (Hint: ASCII codes:- A=65, Z=90, a=97, z=122). */

// var input = prompt("Enter a character: (number 0-9 or string A-Z or a-z)");

// if (input >= "0" && input <= "9") {
//    document.write(input + " " + "is a number");
// } else if (input >= "A" && input <= "Z") {
//    document.write(input + " " + "is an Uppercase Character");
// } else if (input >= "a" && input <= "z") {
//    document.write(input + " " +  "is a Lowercase Character");
// } else {
//    document.write(input , "is not a Number or Character");
// }

/* Q.2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal. */

// var num1 = +prompt("Enter the first integer: ");
// var num2 = +prompt("Enter the second integer: ");

// if (num1 > num2) {
//    document.write(num1 + " " + "is larger than" + " " + num2);
// } else if (num1 < num2) {
//    document.write(num2 + " " + "is larger than" + " " + num1);
// } else {
//    document.write(num1 + " " + "and" + " " + num2 + " " + "both are equal");
// }

/* Q.3. Write a program that takes input a number from user & state whether the number is positive, negative or zero. */

// var num = +prompt("Enter a number: ");

// if (num > 0) {
//    document.write(num + " " + "is positive");
// } else if (num < 0) {
//    document.write(num + " " + "is negative");
// } else {
//    document.write(num + " " + "is zero");
// }

/* Q.4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise. */

// var char = prompt("Enter a character: string, Length 1");

// if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
//   document.write(char + " " + "is a vowel");
// } else {
//   document.write(char + " " + "is not a vowel");
// }


/* Q.5. Write a program that
a. Store correct password in a JS variable.
b. Asks user to enter his/her password
c. Validate the two passwords:
i. Check if user has entered password. If not, then give message “ Please enter your password”
ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise. */


// var password = "Arif";

// var userPassword = prompt("Please enter your password");

// if (userPassword === "") {
//   alert("Please enter your password");
// } else if (userPassword === password) {
//    alert("Correct! The password you entered matches the original password");
// } else {
//    alert("Incorrect password.");
// }


/* Q.6. This if/else statement does not work. Try to fix it: var greeting; var hour = 13; if (hour < 18) { greeting = "Good day"; else greeting = "Good evening"; } */

// var greeting;
// var hour = +prompt("Enter the hour 1-24");
// if (hour < 18) {
// alert("Good Day");
// }else if (hour >= 18 && hour <=24){
// alert("Good Evening");
// }
// else {
//    alert("Enter correct hour");
//    }




//                   Chapter # 14-16  ARRAYS

/* Q.1. Declare an empty array using JS literal notation to store student names in future. */

// var empArr = [];

/* Q.2. Declare an empty array using JS object notation to store student names in future. */
// var empArr = [0];

/* Q.3. Declare and initialize a strings array. */
// var strArr = ["Arif","Pakistan","Karachi"];

/* Q.4. Declare and initialize a numbers array. */
// var numArr = [1,2,3,4,5];

/* Q.5. Declare and initialize a boolean array. */
// var boolArr = [true];

/* Q.6. Declare and initialize a mixed array. */
// var mixArr = ["Arif", 5 ,true];


/* Q.7. Declare and Initialize an array and store available education qualifications in Pakistan
   (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like: */

// var arr = ["SSC","HSC","BSC","BS","BCOM","MS","M. PHILL","PHD"];

// document.write("<h1>" + "Qualifications:" + "</h1>")
// document.write("<h1>" + "1) " + arr[0] + "</h1>")
// document.write("<h1>" + "2) " + arr[1] + "</h1>")
// document.write("<h1>" + "3) " + arr[2] + "</h1>")
// document.write("<h1>" + "4) " + arr[3] + "</h1>")
// document.write("<h1>" + "5) " + arr[4] + "</h1>")
// document.write("<h1>" + "6) " + arr[5] + "</h1>")
// document.write("<h1>" + "7) " + arr[6] + "</h1>")
// document.write("<h1>" + "8) " + arr[7] + "</h1>")


/* Q.8. Write a program to store 3 student names in an array.Take another array to store score of these three students.
   Assume that total marks are 500 for each student, display the scores & percentages of students like: */


// var student = ['Michael', 'John', 'Tony']
// var score = [320, 230, 480]
// for (var i = 0; i < student.length; i++) {

//    var percentage = [score[0] / 500 * 100, score[1] / 500 * 100, score[2] / 500 * 100]
//    document.write("<h2>" + "Score of " + student[i] + " is " + score[i] + ". Percentage: " + percentage[i] + "%" + "</h2>")

// }

// var studentName = ["Michael","John","Tony"];
// var score = ["320","230","480"] ;

// document.write("<h2>" + "Score of " + studentName[0]+ " is " + score[0] + ". Percentage: " + score[0]/500*100 + "%" + "</h2>" )
// document.write("<h2>" + "Score of " + studentName[1]+ " is " + score[1] + ". Percentage: " + score[1]/500*100 + "%" + "</h2>")
// document.write("<h2>" + "Score of " + studentName[2]+ " is " + score[2] + ". Percentage: " + score[2]/500*100 + "%" + "</h2>")

/* Q.9. Initialize an array with color names. Display the array elements in your browser.
    a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.  Display the updated array in your browser.
    b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
    c. Add two more color to the beginning of the array. Display the updated array in your browser.
    d. Delete the first color in the array. Display the updated array in your browser.
    e. Delete the last color in the array. Display the updated array in your browser.
    f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. Display the updated array in your browser.
    g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index.
    Display the updated array in your browser. */

// var arr = ["Red" , "Green" ,"Yellow"];
// document.write(arr + "</br>")

// var user = prompt("In which colour you wants to add in the array");
// var newUser = user
// //(a)
// // arr.unshift("White","Blue")
// arr.unshift(newUser)

// document.write(arr)

// (b)

// var arr = ["Red" , "Green" ,"Yellow"];
// document.write(arr + "</br>")
// var user = prompt("In which colour you wants to add in the array");
// var newUser = user

// arr.push(newUser)
// document.write(arr)

// (C)
// var arr = ["Red" , "Green" ,"Yellow"];
// arr.unshift("Gray","Pink");
// document.write(arr)

// (d)
// var arr = ["Red" , "Green" ,"Yellow"];
// arr.shift(arr);

// document.write(arr)

// (e)
// var arr = ["Red" , "Green" ,"Yellow"];
// arr.pop(arr)

// document.write(arr)

// (f)
// var arr = ["Red" , "Green" ,"Yellow"];
// var user = prompt("In which colour you wants to add in the array");
// var newUser = user

// arr.splice(2,0, newUser)
// document.write(arr)

// (g)

// var arr = ["Red" , "Green" ,"Yellow","Pink","Brown","Blue"];
// var user = +prompt("In which index no you wants to remove in the array");
// var newUser = user

// arr.splice(2,newUser)
// document.write(arr)


/* Q.10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method. */


// var arr = [320,230,480,120];
// document.write("Scores of Student " + arr + "<br>")

// var arr = [320,230,480,120].sort()
// document.write("Ordered Scores of Student " + arr)

/* Q.11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array. */

// var cityName = ["Karachi "," Lahore "," Islamabad "," Quetta "," Peshawar "]
// document.write("<h2>" + cityName + "</h2>")

// var selectedCities = cityName.slice(2,4)
// document.write("<h2>" + selectedCities + "</h2>")

/* Q.12. Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method) */

// var arr = [];
// arr = ["This", "is", "my","cat"];
// // arr.join(",")
// document.write(arr.join(" "))

/* Q.13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out) */

// var arrDevices = [];
// arrDevices.push("keyboard","mouse","printer","monitor");
// document.write("<h2>" + "Devices: " + "<br>" + arrDevices + "</h2>")
// document.write("<h2>" + "Out:" + "<br>" + arrDevices[0] + "</h2>")
// document.write("<h2>" + "Out:" + "<br>" + arrDevices[1] + "</h2>")
// document.write("<h2>" + "Out:" + "<br>" + arrDevices[2] + "</h2>")
// document.write("<h2>" + "Out:" + "<br>" + arrDevices[3] + "</h2>")

/* Q.14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out) */

// var arr = [];
// arr.push("keyboard","mouse","printer","monitor");
// document.write("Out:" + "<br>" + arr[3]+ "<br>")
// document.write("Out:" + "<br>" + arr[2]+ "<br>")
// document.write("Out:" + "<br>" + arr[1]+ "<br>")
// document.write("Out:" + "<br>" + arr[0]+ "<br>")


/* Q.15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
   Display the following dropdown/select menu in your browser using document.write() method:*/

// var arr = ["Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier"];
// document.write(arr[0]+ "<br>")
// document.write(arr[1]+ "<br>")
// document.write(arr[2]+ "<br>")
// document.write(arr[3]+ "<br>")
// document.write(arr[4]+ "<br>")
// document.write(arr[5])