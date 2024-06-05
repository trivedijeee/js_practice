var MyName = prompt("your name");
var FirstLetterSlice = MyName.slice(0,1);
var RestLetterSlice = MyName.slice(1, (MyName.length))
FirstLetterSlice = FirstLetterSlice.toUpperCase();
RestLetterSlice = RestLetterSlice.toLowerCase();
alert("hi " + FirstLetterSlice + RestLetterSlice + ", " + "Thanks for entering your name.");



