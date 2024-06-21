
// name prompt + slice + concatation + alert
var MyName = prompt("your name");
var FirstLetterSlice = MyName.slice(0,1);
var RestLetterSlice = MyName.slice(1, (MyName.length))
FirstLetterSlice = FirstLetterSlice.toUpperCase();
RestLetterSlice = RestLetterSlice.toLowerCase();
alert("hi " + FirstLetterSlice + RestLetterSlice + ", " + "Thanks for entering your name.");

// Arthmetic and the modulo operator

var addition = alert(2+3);
var Subtract = alert(2-3);
var multiply = alert(2*3);
var division = alert(18/3);
var _Modulo = alert(2%3);


// calculate the age of dog as compare to human 
var dogAge = prompt("enter your dog age");
var HumanAge =  ((dogAge - 2) * 4 +21);
alert(HumanAge);

// Function - creating and calling
function getMilk() {
    alert("leave house");
    alert("take one step");
    alert("take right");
    alert("take one step");
    alert("back to home");
}
getMilk();

//life in weeks exercise
function lifeInWeeks(age) {
    var yearRemeaning = 90-age;
    var days = yearRemeaning*365;
    var weeks = yearRemeaning*52;
    var months = yearRemeaning*12;

    console.log("You have " + days +" days," + weeks + " weeks, and " +months+" months left.");
    alert("You have " + days +" days, " + weeks + " weeks, and " +months+" months left.");
}
lifeInWeeks(51);

// get milk from shop..
function shopMilk(money , costPerBottel){
    console.log("buy " + calcBottels(money,costPerBottel)+ " bottels of milk...")
    return calcchange(money , costPerBottel);
}
function calcBottels (startingMoney ,costPerBottel){
    var numberOfBottels = Math.floor(startingMoney/costPerBottel);
    return numberOfBottels;
}
function calcchange(startingMoney , costPerBottel){
    var change = startingMoney % costPerBottel;
    return change;
}
console.log("Hello master, here is your "+ shopMilk(5 ,1.3 ) + " change..");


////bmi 
function bmiCalculator (weight , height){
    var bmiclc = Math.floor(weight/(height*height));
    return bmiclc;
}

console.log("your bmi is: "+ bmiCalculator(65,1.8));

//random number for dice 
function randomDiceNumber(){
    var n = Math.random();
    console.log(n);
    n = n*6;
    n = Math.floor(n) +1;
    return n;
}
console.log("here is a number after dice roll : "+ randomDiceNumber());


// love calculator
var nmaeOfPerson1 = prompt("Enter your name");
var nameOfPerson2 = prompt("Enter your name");
function loveCalculator(){
    var l = Math.random();
    console.log(l);
    l = Math.floor(l*100) + 1;
    return l;
}
console.log("Hey, your love calculation result between "+ nmaeOfPerson1 +" and " + nameOfPerson2 + " is : "+ loveCalculator() + "%");
alert("Hey, your love calculation result between "+ nmaeOfPerson1 +" and " + nameOfPerson2 + " is : "+ loveCalculator() + "%");

// if else condition

//if (loveCalculator === 100){
//    alert("you are aswesome");
//} else {
 //   alert("you are lol");
//}
// love score calculator
var nmaeOfPerson1 = prompt("Enter your name");
var nameOfPerson2 = prompt("Enter your name");
function loveCalculator(){
    var score = Math.random() * 100;
    score = Math.floor(score) + 1;
    if (score > 70){
        alert("Hey, you guys are awesome. your love calculation result between "+ nmaeOfPerson1 +" and " + nameOfPerson2 + " is : "+ score + "%");
    } else {
        alert("Hey, your love calculation result between "+ nmaeOfPerson1 +" and " + nameOfPerson2 + " is : "+ score + "%. you guys are just in average..");
    }
}
alert(loveCalculator());


// leap year
function isLeap(year){
    if (year%4===0){
        if (year%100){
            if (year%400){
                return "leap year";
            }else{
                return "not leap year";
            }            
        } else {
            return "not leap year";
        }
    } else {
        return "not a leap year";
    }
}
isLeap(2000);

// arrays 
function allGuest(){
    var guestList = ["saurabh" , "gopi" , "anmol" , "kesab"];
    var guestName = prompt("guest name");
    if (guestList.includes(guestName)){
        alert("Welcome");
    } else {
        alert(" sorry next time");
    }
}
allGuest();

// fizzbuzz normal method
var output = [];
var count = 1;
function fizzBuzz(){
    if (count %3 ===0 && count% 5 === 0){
        output.push("FizzBuzz");
    } 
    else if (count % 3 === 0){
        output.push("Fizz");
    }
    else if (count % 5 === 0 ){
        output.push("Buzz");
    }
    else {
        output.push(count)
    
    count++;
    }
    console.log(output);
}
fizzBuzz();

// who buy a lunch today 

function whosPaying(names){
    var names = ["saurabh" , "gopi" , "anmol" , "kesab"];
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random()*numberOfPeople);
    var randomPerson = names[randomPersonPosition];
    return randomPerson + " is going to buy lunch today!";
}
console.log(whosPaying());


// another way to solve - who buy a lunch today problem
function names(){
    var names = ["saurabh" , "gopi" , "anmol" , "kesab"];
    var randomIndex = Math.floor(Math.random()*names.length);
    return names[randomIndex] + " to going to buy lunch today!";

}
alert(names());

// FizzBuzz using whhile looop 
var output = [];
var count = 1;

function fizzBuzz(){
    while (count <= 100){
        if (count %3 === 0 && count %5 ===0){
            output.push("fizzBuzz");
        } else if (count % 3 === 0){
            output.push("fizz");
        } else if (count %5 === 0){
            output.push("buzz");
        } else{
            output.push(count);
        }
        count++;
    }
    console.log(output);
}
fizzBuzz();

// 99 beer bottel soltion 
function beer(){


    var numbersOfBottel = 99;
    while (numbersOfBottel >= 1){
        var bottelWord ="bottel";
        if (numbersOfBottel === 1){
            bottelWord = "bottels";
        }
        console.log(numbersOfBottel + " "+bottelWord + "of the beer on the wall");
        console.log(numbersOfBottel + " "+bottelWord + "of beer");
        console.log("take one down, pass it around ");
        numbersOfBottel--;
        console.log(numbersOfBottel + " "+bottelWord + " of the beer on the wall");

    }
}
console.log(beer());


// FizzBuzz using for looop 
var output = [];
var count = 1;

function fizzBuzz (){
    for (count = 1 ; count < 101; count++){
        if (count %3 === 0 && count %5 ===0){
            output.push("fizzBuzz");
        }
        else if (count % 3 === 0){
            output.push("fizz");
        }
        else if (count %5 === 0){
            output.push("buzz");
        }
        else{
            output.push(count);
        }
    }
    console.log(output);
}
fizzBuzz();


// fibonacci solution 
function fibonacciGenerator (n) {
    var output = [];
        if (n=== 1){
            output = [0];
        }else if (n===2) {
            output = [0 , 1];
        }else {
            output = [0 , 1];
            for (var j = 2; j < n; j++){
                output.push(output[output.length - 2 ] + output[output.length - 1]);
            }
        }
        return output;
}



//random dice game
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource1 = "images/dice"+randomNumber1+".png";
var randomImageSource2 = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "player 1 Win 💪";
}
else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Match Tie ✋"
}
else {
    document.querySelector("h1").innerHTML = "player 2 Win 💪";
}
// another method

// function rollDice() {
//     var dice1 = document.querySelector(".img1");
//     var dice2 = document.querySelector(".img2");
//     var resultText = document.querySelector("h1");
  
//     // Generate random numbers between 1 and 6
//     var randomNum1 = Math.floor(Math.random() * 6) + 1;
//     var randomNum2 = Math.floor(Math.random() * 6) + 1;
  
//     // Set the src attribute of img1 and img2 based on random numbers
//     dice1.setAttribute("src", "images/dice" + randomNum1 + ".png");
//     dice2.setAttribute("src", "images/dice" + randomNum2 + ".png");
  
//     // Determine the winner or if it's a draw
//     if (randomNum1 > randomNum2) {
//       resultText.textContent = "Player 1 Wins!";
//     } else if (randomNum2 > randomNum1) {
//       resultText.textContent = "Player 2 Wins!";
//     } else {
//       resultText.textContent = "It's a Draw!";
//     }
//   }
  
//   // Call rollDice() function when the page loads
//   window.onload = function() {
//     rollDice();
//   };
  