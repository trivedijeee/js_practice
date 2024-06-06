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

