           /////////////////CH#1////////////////////

// alert("Hello World")
// alert("Error! Please enter a valid password.")
// alert("Welcome to JS land...\nHappy Coding...!")
// alert("Welcome to JS land...")
// alert("Happy Coding!")

         /////////////////CH#2////////////////////

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

        /////////////////CH#3////////////////////

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

            /////////////////CH#4////////////////////

// var name = "ali" ,age = 18 , religion = "islam";       

/////LEGAL VARIABLE NAMES///////
// var _name$1;
//var $name;
//var _name;
//var name_1;
//var name1;

/////ILLEGAL VARIABLEA NAMES///////

// var 1name
// var -num
// var nam@
// var &nam%
// var 1nam-num!
///////////////////////////////////////

// document.write("<h1>“Rules for naming JS variables</h1>Variable names can only contain numbers, $, _ and alphabets.<br/>Variables must begin with a $, _ or alphabets. For example $name, _name or name<br/>Variable names are case sensitive<br/>Variable names should not be JS Keywords")

           /////////////////CH#5//////////////////// 

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


var snacks = prompt("Your favourite snaks");
var age = prompt("your current age");
var maxAge = prompt("maximum age");
var amount = +prompt("how many you eat per day");
var total = (maxAge - age) * amount;
document.write(`<h1>The Lifetime Supply Calculator</h1>favorite snack: ${snacks}<br/>Current age: ${age}<br/>Estimited Maximum age: ${maxAge}<br/>Amount of snacks per day eating: ${amount}<br/>You will need ${total} choclates chip to last you until the ripe old age of ${maxAge}`)