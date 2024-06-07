
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


