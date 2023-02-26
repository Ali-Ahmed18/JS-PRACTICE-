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


         ///////////////CH#12-13////////////////////


// const arry=[]
// console.log(arry)


// var arrayB = new Array()
// console.log(arrayB)


// var arre = ["hello"]
// console.log(arre)


// var arre =[2]
// console.log(arre)


// var arre =[true , false]
// console.log(arre[0])
// console.log(arre[1])


// var arre =["Ali",18,"aliahmedyk18@gmail.com",true]
// console.log(arre)
              
// var edu = ["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"]
// document.write(`<h1>Qualification:</h1><ol><li>${edu[0]}</li><li>${edu[1]}</li><li>${edu[2]}</li><li>${edu[3]}</li><li>${edu[4]}</li><li>${edu[5]}</li><li>${edu[6]}</li></ol>`)


// var stdNam = ["ali","fahad","shams"]
// var stdScore =[320,350,390]
// var totalmark = 500
// document.write(`score of ${stdNam[0]} is ${stdScore[0]}.percentage: ${stdScore[0] / totalmark * 100}%<br/>`)
// document.write(`score of ${stdNam[1]} is ${stdScore[1]}.percentage: ${stdScore[1] / totalmark * 100}%<br/>`)
// document.write(`score of ${stdNam[2]} is ${stdScore[2]}.percentage: ${stdScore[2] / totalmark * 100}%<br/>`)
 

// var color =["red","blue","yellow","green"]
// document.write(`${color}`)
// console.log(color.shift[0])


// var color = ["red","blue","yellow","green"]
// var whatColor = prompt("what color do you want at beginning")
// color.unshift(whatColor)
// document.write(`${color}<br/>`,)

// var whatColor1=prompt("what color do you want to add in end")
// color.push (whatColor1)
// document.write(`${color}<br/>`)

// color.unshift("golden","brown")
// document.write(`${color}<br/>`)

// color.shift()
// document.write(`${color}<br/>`)

// color.pop()
// document.write(`${color}<br/>`)


// var user1 = prompt("Which index do you you want to add color?")
// var user2 = prompt("What color do yo want to add")
// color.splice(user1,0,user2)
// document.write(`${color}<br/>`)

// var user3 = prompt("which index you want to delete color(s)")
// var user4 = prompt("how many color you want to delete")
// color.splice(user3,user4)
// document.write(`${color}<br/>`)


// var cityName = ["karachi","lahore","islamabad","muree","sialkot"]
// document.write(`<h1>Cities list</h1><p>${cityName}</p>`)
// var selectname = cityName.slice(2,4)
// document.write(`<h1>selected Cities list</h1>${selectname}`)


// var arr = ["this","is","my","cat"]
// console.log(arr)

// console.log(arr.join(" "))


// var accessories = ["keyboard","mouse","printer","monitor"]
// document.write(`<h3>Devices:</h3>${accessories}`)
// for(var i = 0; i < accessories.length; i++)[
// document.write(`<h3>Out:</h3>${accessories[i]}`)
// ]


// var accessories = ["keyboard","mouse","printer","monitor"]
// document.write(`<h3>Devices:</h3>${accessories}`)
// for(var i = 0; i < accessories.length; i++)[
// document.write(`<h3>Out:</h3>${accessories[i]}`)
// ]



// var accessories1 = ["keyboard","mouse","printer","monitor"]
// document.write(`<h3>Devices:</h3>${accessories1}`)
// for(var i = accessories1.length-1; i >= 0;i--){
//     document.write(`<h3>out:</h3>${accessories1[i]}`)

// }


// var mobile = ["sumsung","infinix","motorola","nokia","sony","haier"]
// document.write(`<select><option disabled selected>select brand</option><option>${mobile[0]}</option><option>${mobile[1]}</option><option>${mobile[2]}</option><option>${mobile[3]}</option><option>${mobile[4]}</option><option>${mobile[5]}</option></select>`)


         ///////////////CH#17-20////////////////////


 ////////////question1/////////////
        // var arr = []
        // arr.push([]);
        // arr.push([]);
        // arr[0].push(1);
        // arr[0].push(2);
        // arr[1].push(3);
        // arr[1].push(4);

        // console.log(arr)

         /////////////question2///////////// 

        // var matrix = [
        //     [0,1,2,3],
        //     [1,0,1,2],
        //     [2,1,0,1]
        // ]

        // document.write(matrix[0] + "<br>" + matrix[1] + "<br>" + matrix[2])


    /////////////question3/////////////    

    // for (i=1; i <= 10; i++){
    // console.log(i)
    // }

        // for (var i = 10;i > 0;i--){
        //     console.log(i)
        // }

        
    //////////question4///////////////

    // var value = Number(prompt("what do you want table"));
    // var length = +prompt("length of table")
    // var result;

    //     for(let a = 1; a <= length; a++){
    //         result = value * a
    //         document.write(`<h1>${value}x${a}=${result}<br/></h1>`)
    //     }


    ///////////question5///////////////

    // var fruits = ["apple","mango","banana","orange","strawberry"]
    // for(let i = 0; i < fruits.length; i++){
    //     document.write(`${fruits[i]}<br/>`)
    // }

    // for(let i = 0; i < fruits.length; i++){
    //     document.write(`element at index ${i} is ${fruits[i]}<br/>`)

    // }


    ////////question6////////////
    // document.write("<h2>Counting</h2>")
    // for(b=1;b < 15;b++){
    //     document.write(b + " ")
    //  }


    //  document.write("<h2>Reverse Counting</h2>")
    //  for(b=10;b >= 1;b--){
    //     document.write(b + " ")
    //  }
    
    //  document.write("<h2>Even Number</h2>")
    //  for(i = 0; i <= 20; i += 2){
    //     document.write(i + " ")
    //  }
  
    //  document.write("<h2>Odd Number</h2>")
    //  for(i = 1; i <= 20; i += 2){
    //     document.write(i + " ")
    //  }

    //  document.write("<h2>Series</h2>")
    //  for(i = 2; i <= 20; i += 2){
    //     document.write(i + "K" + " ")
    //  }
    

        ////////question7////////////
  
    // var a = ["cake","apple pie","cookie","chips","patties",]
    // var user = prompt("Welcome to My bakery whats do you want to order?")
    // var flags = false
    // for(var i = 0;i < a.length;i++){
    //     if(a[i] === user){
    //         document.write(`${a[i]} is available at index ${i} in our bakery`)
    //         flags = true
    //         break
    //     }
          
    // }
    // if(flags == false){
    //     document.write(`we are sorry ${user} is not available in our bakery`)
    // }


        ////////question8////////////


    // var a = [20, 53, 50, 91, 70];
    // var lN = 0; 
    // document.write("<h3>Array items:</h3>",a)
    // for(var i = 0; i < a.length; i++){
    //     if(a[i] > lN){
    //         lN = a[i]
    //     }
    // }

    // document.write("<h3>The largest number:</h3>",lN)

        ////////question9////////////

    // var a = [20, 53, 50, 91, 70];
    // var lN = a[0]; 
    // document.write("<h3>Array items:</h3>",a)
    // for(var i = 0; i < a.length; i++){
    //     if(lN > a[i]){
    //         lN = a[i]
    //     }
    // }

    // document.write("<h3>The smallest number:</h3>",lN)  

        ////////question10////////////

//         var limit = 100;

//     for (let i = 1; i <= limit / 10; i++) {
//     document.write(i * 10 + "<br/>");
// }        