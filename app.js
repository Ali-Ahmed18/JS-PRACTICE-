//            ///////////////CH#1////////////////////

// alert("Hello World")
// alert("Error! Please enter a valid password.")
// alert("Welcome to JS land...\nHappy Coding...!")
// alert("Welcome to JS land...")
// alert("Happy Coding!")

//          ///////////////CH#2////////////////////

// var username;         
// var myName = "Ali Ahmed";
// var message = "“Hello World”";
// alert(message)
// var userName = "john Doe";
// var age = "15 Years old";
// var skill = "Certified Mobile app development";
// alert(userName);
// alert(age);
// alert(skill);
// var pizza = "pizza\npizz\npiz\npi\np";
// alert(pizza);
// var email = "My email address is aliahmedyk18@gmail.com";
// alert(email);
// var book = "A smarter way to learn JavaScript.";
// alert("I am trying to learn from the book" +" "+ book)
// document.write("Yah! I can write HTML content through JavaScript")
// var symbol = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
// document.write(symbol);
// alert(symbol);

//         ///////////////CH#3////////////////////

// var age = 18;    
// alert("i am" + " " + age + " " +"Years old")
// var visited = "14";
// alert("You are visited This Site" + " " + visited + " " +"Times")
// var birthYear = 2004;
// document.write("My Birth Year is" +" "+ birthYear + "<br>Data Type of my declared variable is number")
// var visitorName = "John Doe";
// var productTitle = "T-shirts";
// var quantity = 5;
// document.write("“" + visitorName + " " + "order" + " " + quantity + " " + productTitle + "(s) on  XYZ Clothing store”.")

//             ///////////////CH#4////////////////////

// var name = "ali" ,age = 18 , religion = "islam";       

// ///LEGAL VARIABLE NAMES///////
// var _name$1;
// var $name;
// var _name;
// var name_1;
// var name1;

// ///ILLEGAL VARIABLEA NAMES///////

// var 1name
// var -num
// var nam@
// var &nam%
// var 1nam-num!
// /////////////////////////////////////

// document.write("<h1>“Rules for naming JS variables</h1>Variable names can only contain numbers, $, _ and alphabets.<br/>Variables must begin with a $, _ or alphabets. For example $name, _name or name<br/>Variable names are case sensitive<br/>Variable names should not be JS Keywords")

//            ///////////////CH#5//////////////////// 

// var num1 = 3;           
// var num2 = 5;           
// var adding = num1 + num2;
// document.write(`sum of ${num1} and ${num2} is ${adding}`)
// var num1 = 3;           
// var num2 = 5;           
// var adding = num1 - num2;
// document.write(`subtraction of ${num1} and ${num2} is ${adding}`)
// var num1 = 3;           
// var num2 = 5;           
// var adding = num1 * num2;
// document.write(`Multiplication of ${num1} and ${num2} is ${adding}`)
// var num1 = 3;           
// var num2 = 5;           
// var adding = num1 / num2;
// document.write(`Division of ${num1} and ${num2} is ${adding}`)
// var num1 = 3;           
// var num2 = 5;           
// var adding = num1 % num2;
// document.write(`Modulus of ${num1} and ${num2} is ${adding}`)


// var variable;
// document.write(`Value after variable declaration is: ${variable}.<br>`)
// var num = 5;
// document.write(`Initial value: ${num}<br/>`)
// document.write(`Value after increment is: ${++num}<br/>`)
// var addition = num + 7;
// document.write(`Value after addition is:${addition} <br/>`)
// document.write(`Value after decerement is:${--addition} <br/>`)
// document.write(`The remainder is:${addition % 3} <br/>`)


// var ticket = 600;
// var quantity = 5;
// document.write(`Total cost to buy ${quantity} tickets to a movie is ${ticket * quantity}PKR`)


// var value = +prompt("type a number")
// var result;
// document.write(`<h1>Table of:${value}</h1>`)
// for(a = 1;a <= 10; a++){
//     result = value * a;
//     document.write(`${value}x${a}=${result}<br/>`)
// }


// var celcius = +prompt("celcius to fahrenheit");
// var  fahrenheit = +prompt(" fahrenheit to celcius");
// var toKnowCelcius = (fahrenheit - 32) * 5 / 9;
// var toKnowfahrenheit = (celcius * 9 / 5) + 32
// document.write(`${celcius}<sup>0</sup>C is ${toKnowfahrenheit}<sup>0</sup>F<br/>`)
// document.write(`${fahrenheit}<sup>0</sup>F is ${toKnowCelcius}<sup>0</sup>C`)


// var priceOfItem1 = 650;
// var priceOfItem2 = 100;
// var orderQuantity1 = prompt("First item quantity");
// var orderQuantity2 = prompt("Secong item quantity");
// var shippingCharges = 100;
// var total = (priceOfItem1 * orderQuantity1) + ( priceOfItem2 * orderQuantity2) + shippingCharges;
// document.write(`<h1>Shopping Cart</h1><p>Price of item 1 is ${priceOfItem1}</p><p>Quantity of item 1 is ${orderQuantity1}</p><p>Price of item 2 is ${priceOfItem2}</p><p>Quantity of item 2 is ${orderQuantity2}</p><p> Shipping charges ${shippingCharges}</p><br/><p>Total cost of your order is ${total}</p>`)


// var totalMarks = +prompt("Total Marks");
// var obtainMarks = +prompt("Obtain Marks");
// var percantage = (obtainMarks / totalMarks) * 100;
// document.write(`<h1>Marks Sheet</h1>Total marks: ${totalMarks}<br/>Obtain marks: ${obtainMarks}<br/>Percentage${percantage}`)


// var usDollar = 104.80;
// var saudiRiyal = 28;
// var total = (usDollar * 10) + (saudiRiyal * 25);

// document.write(`<h1>Currency in PKR</h1>Total currency in PKR: ${total}`)


// var num = (5 * 10) / 2;
// alert(num)


// var currentYear = 2023;
// var birthYear = +prompt("Your Birth Day Year");
// document.write(`<h1>Age Calculator</h1>Current Year: ${currentYear}<br/>Birth Year: ${birthYear}<br/>Your Age is: ${currentYear - birthYear}`)



// var radius = +prompt("radius of circle");
// var circumference = 3.142 * 2 * radius;
// var area = 3.142 * (20*20)
// document.write(`<h1>The Geometrizer</h1>Radius of circle ${radius}<br/>The circumference is ${circumference}<br/>The area is ${area}`)


// var snacks = prompt("Your favourite snaks");
// var age = prompt("your current age");
// var maxAge = prompt("maximum age");
// var amount = +prompt("how many you eat per day");
// var total = 365 * (maxAge - age) * amount;
// document.write(`<h1>The Lifetime Supply Calculator</h1>favorite snack: ${snacks}<br/>Current age: ${age}<br/>Estimited Maximum age: ${maxAge}<br/>Amount of snacks per day eating: ${amount}<br/>You will need ${total} ${snacks} to last you until the ripe old age of ${maxAge}`)


//            ///////////////CH#6-9////////////////////


// var a = 10;         
// document.write(`Result:<br/>The Value of a is: ${a}<br/><hr/><br/>`)
// document.write(`The value of ++a is: ${++a}<br/>Now The Value of a is: ${a}<br/><br/><br/>`)
// document.write(`The value of a++ is: ${a++}<br/>Now The Value of a is: ${a}<br/><br/><br/>`)
// document.write(`The value of --a is: ${--a}<br/>Now The Value of a is: ${a}<br/><br/><br/>`)
// document.write(`The value of a-- is: ${a--}<br/>Now The Value of a is: ${a}`)


// var a = 2 , b = 1;
// var result = --a - --b + ++b + b--;
// --a; ==> 1
// --a  ==> 1 - --b; ==> 0
// --a  ==> 1 - --b ==> 0 + ++b ==> 1;
// --a  ==> 1 - --b ==> 0 + ++b ==> 1 + b-- ==> 1;
// 1 - 0 + 1 + 1
// 3 is answer
// document .write(`a is ${a}<br/>b is ${b}<br/>Result is ${result}`)


// var name = prompt("What's Your Name ?")
// alert(`Welcome ${name}`)


// var value = +prompt("type a number")
// var result;


// if(value !== 0){
//         document.write(`<h1>Table of:${value}</h1>`)
//         for(a = 1;a <= 10; a++){    
//                 result = value * a;
//                 document.write(`${value}x${a}=${result}<br/>`)
//             }
// }else{
//         document.write(`<h1>Table of:${5}</h1>`)
//         for(a = 1;a <= 10; a++){     
//                 result = 5 * a;
//                 document.write(`${5}x${a}=${result}<br/>`)
//             } 
// }
        

// var subjectName1 = prompt("What is your first subject");
// var subjectName2 = prompt("What is your second subject");
// var subjectName3 = prompt("What is your third subject");
// var totalMarksSubject = 100;
// var obtsubj1 = +prompt("obtain marks of subject one")
// var obtsubj2 = +prompt("obtain marks of subject two")
// var obtsubj3 = +prompt("obtain marks of subject three")
// var totalObjectMarks = totalMarksSubject * 3;
// var totalObt = obtsubj1 + obtsubj2 + obtsubj3;
// document.write(`<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr><tr><td>${subjectName1}</td><td>${totalMarksSubject}</td><td>${obtsubj1}</td><td>${obtsubj1 / totalMarksSubject * 100}%</td></tr>
// <tr><td>${subjectName2}</td><td>${totalMarksSubject}</td><td>${obtsubj2}</td><td>${obtsubj2 / totalMarksSubject * 100}%</td></tr>
// <tr><td>${subjectName3}</td><td>${totalMarksSubject}</td><td>${obtsubj3}</td><td>${obtsubj3 / totalMarksSubject * 100}%</td></tr>
// <tfoot><tr><th></th><th>${totalObjectMarks}</th><th>${totalObt}</th><th>${(totalObt / totalObjectMarks) * 100}%</th></tr></tfoot></table>`)


//                 ///////////////CH#9-11////////////////////

// var city = prompt("Enter city of pakistan") 
// if(city == "karachi"){
//         alert("Welcome to city of lights")
// }else{
//         alert("Welcome")
// }


// var gender = prompt("Enter Your Gender")
// if(gender == "male"){
//         alert("Good Morning Sir")
// }else if(gender == "female"){
//         alert("Good Morning Ma’am")
// }else{
//         alert("Good Morning")
// }


// var inp = prompt(" color of road traffic signal")
// if(inp == "red" || inp == "Red"){
//         document.write(`<table><tr><th>Signal color</th><th>Message</th></tr><tr><td>${inp}</td><td>Must Stop</td></tr></table>`)
// }else if(inp == "yellow" || inp == "Yellow"){
//         document.write(`<table><tr><th>Signal color</th><th>Message</th></tr><tr><td>${inp}</td><td>Ready to move</td></tr></table>`)
// }else if(inp == "green" || inp == "Green"){
//         document.write(`<table><tr><th>Signal color</th><th>Message</th></tr><tr><td>${inp}</td><td>Move now</td></tr></table>`)
// }else{
//         document.write(`${inp} is not a traffic ligh color`)
// }


// var remFuel = prompt("remaining fuel in car (in litres)")
// if(remFuel < 0.25 + "litre"){
//         alert("Please refill the fuel in your car")
// }else{
//         alert("the fuel is enough in your car") 
// }


// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }else{
//         alert("given condition for variable a is false");  
// }


// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }else{
//         alert("given condition for variable b is true");
// }


// var c = 12; //13//14
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
        

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
   

// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }


// if("car" < "cat"){
// alert("cat is smaller than car");
// }else{
// alert("car is smaller than cat");
// }

  
// var totalObMarks = +prompt("the marks obtained in three subjects")
// var totalMarks = +prompt("Total Marks")
// document.write(`<center><table border="1px"><tr><th>Percentage%</th><th>Grade</th><th>Remarks</th></tr><tr><td>greater than or equal to 80</td><td>Grade A-one</td><td>Excellent</td></tr>`) 
// document.write(`<tr><td>greater than or equal to 70</td><td>Grade A</td><td>Good</td></tr>`)
// document.write(`<tr><td>greater than or equal to 60</td><td>Grade b</td><td>You Need To Improve</td></tr>`)
// document.write(`<tr><td>Less Than 60</td><td>Fail</td><td>Sorry</td></tr></table></center>`)  
// if((totalObMarks / totalMarks) * 100 >= 80){
// document.write(`<center><div><h1>Marks Sheet</h1>total marks: ${totalMarks}<br/>Marks Obtain: ${totalObMarks}<br/>Percentage: ${(totalObMarks / totalMarks) * 100}%<br/>Grade: A-one<br/>Remarks: Excellent<br/></center>`)
// }else if((totalObMarks / totalMarks) * 100 >= 70 && (totalObMarks / totalMarks) * 100 < 80){
// document.write(`<center><h1>Marks Sheet</h1>total marks: ${totalMarks}<br/>Marks Obtain: ${totalObMarks}<br/>Percentage: ${(totalObMarks / totalMarks) * 100}%<br/>Grade: A<br/>Remarks: Good<br/></center>`)
// }else if((totalObMarks / totalMarks) * 100 >= 60 && (totalObMarks / totalMarks) * 100 < 70){
// document.write(`<center><h1>Marks Sheet</h1>total marks: ${totalMarks}<br/>Marks Obtain: ${totalObMarks}<br/>Percentage: ${(totalObMarks / totalMarks) * 100}%<br/>Grade: B<br/>Remarks: You Need To Improve<br/></center>`)
// }else{
// document.write(`<center><h1>Marks Sheet</h1>total marks: ${totalMarks}<br/>Marks Obtain: ${totalObMarks}<br/>Percentage: ${(totalObMarks / totalMarks) * 100}%<br/>Grade: Fail<br/>Remarks:Sorry<br/></center>`) 
// }      



// var num = 7;
// var sNum = +prompt(" guess the secret number between 1 to 10");
// if(sNum === num){
// alert("Bingo! Correct answer")
// }else{
// alert("Close enough to the correct answer") 
// }


// var num = +prompt("the given number is divisible by 3 or not")
// if(num % 3 === 0){
//         alert("Its divisible by 3")
// }else{
//         alert("It dosen't divisible by 3")
// }


// var number = +prompt("Type any number")
// if(number % 2 === 0){
//         alert(number + " " +"Its Even Number")
// }else{
//         alert(number + " " +"Its Odd Number")
// }


// var temprature = prompt("whats temprature outside?")
// if(temprature > 40){
// alert("It is too hot outside.")
// }else if(temprature > 30){
// alert("The Weather today is Normal.")
// }else if(temprature > 20){
// alert("Today’s Weather is cool.")
// }else if(temprature > 10){
// alert("OMG! Today’s weather is so Cool.")
// }else if(temprature < 10){
// alert("Today weather is freezing cold")
// }else{
// alert("You dont give any temprature")
// }


// var num1 = +prompt("first number");
// var opt = prompt("Operator");
// var num2 = +prompt("Second number");
// if(opt === "+"){
//         var result = num1 + num2
//         alert(`${num1}+${num2}=${result}`)
// }else if(opt === "-"){
//         var result = num1 - num2
//         alert(`${num1}-${num2}=${result}`)
// }else if(opt === "*"){
//         var result = num1 * num2
//         alert(`${num1}*${num2}=${result}`)
// }else if(opt === "/"){
//         var result = num1 / num2
//         alert(`${num1}/${num2}=${result}`)
// }else if(opt === "%"){
//         var result = num1 % num2
//         alert(`${num1}%${num2}=${result}`)
// }


//             ///////////////CH#12-13////////////////////

// var cha = prompt("type any character, number or string")           
// if(cha >= "A" && cha <= "Z"){
// alert(`${cha} is a Upper case`)
// }else if(cha >= "a" && cha <= "z"){
// alert(`${cha} is a Lower case`)
// }else if(cha >= "0"){
// alert(`${cha} is a Number`)
// }else{
// alert(`${cha} is a Special character`)       
// }


// var num1 = +prompt("Type first Number")
// var num2 = +prompt("Type second Number")
// if(num1 > num2){
// alert(`${num1} is larger than ${num2}`)
// }else if(num1 == num2){
// alert(`${num1} is equal to ${num2}`)
// }else{
// alert(`${num1} is smaller than ${num2}`)        
// }


// var num = +prompt("Type any number")
// if(num < 0 ){
// alert(`${num} is negative number`)
// }else if(num > 0){
// alert(`${num} is positive number`)
// }else{
// alert(`${num} is Zero`)      
// }


// var vowel = prompt("write any singal lower case word")
// if(vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"){
// alert(true)
// }else{
// alert(false)
// }



// var psw1 = prompt("Enter your Password")
// if(psw1 !== "" && psw1 !== null){
// var psw2 = prompt("Confirm your Password")      
// if(psw1 === psw2){
// alert(`Correct!`)
// }else{
// alert(`Incorrect Password`)       
// }
// }else{
// alert(`Please Enter Your Password`)
// }


// var greeting;
// var hour = 19;
// if (hour < 18){
// greeting = "Good Day"
// alert(greeting)
// }else{
// greeting = "Good Evening"
// alert(greeting)
// }



// var time = prompt("What time it is in 24 hour format")
// if(time === "00:00"){
// alert("12am (midnight)")
// }else if(time === "01:00"){
// alert("1am")
// }else if(time === "02:00"){
// alert("2am")
// }else if(time === "03:00"){
// alert("3am")
// }else if(time === "04:00"){
// alert("4am")
// }else if(time === "05:00"){
// alert("5am")
// }else if(time === "06:00"){
// alert("6am")
// }else if(time === "07:00"){
// alert("7am")
// }else if(time === "08:00"){
// alert("8am")
// }else if(time === "09:00"){
// alert("9am")
// }else if(time === "10:00"){
// alert("10am")
// }else if(time === "11:00"){
// alert("11am")
// }else if(time === "12:00"){
// alert("12pm (noon)")
// }else if(time === "13:00"){
// alert("1pm")
// }else if(time === "14:00"){
// alert("2pm")
// }else if(time === "15:00"){
// alert("3pm")
// }else if(time === "16:00"){
// alert("4pm")
// }else if(time === "17:00"){
// alert("5pm")
// }else if(time === "18:00"){
// alert("6pm")
// }else if(time === "19:00"){
// alert("7pm")
// }else if(time === "20:00"){
// alert("8pm")
// }else if(time === "21:00"){
// alert("9pm")
// }else if(time === "22:00"){
// alert("10pm")
// }else if(time === "23:00"){
// alert("11pm")
// }else if(time === "24:00"){
// alert("12am")
// }else{
// alert("Not Programmed")
// }