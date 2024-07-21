// single element event listner

// document.querySelector("button").addEventListener("click", handleClick);
// function handleClick(){
//     alert("i got clicked!");
// }


// another way for single element event listner
// document.querySelector("button").addEventListener("click", function (){
//     alert("i got clicked!");
// });


// Multiple  element event listner 

// document.querySelectorAll("button").forEach(function(elem) {
//     elem.addEventListener("click", function() {
//         alert("i got clicked!");
//     });
// });

// another way for Multiple  element event listner 
// var numberOfDrum = document.querySelectorAll(".drum").length;
// for (var j = 0; j < numberOfDrum; j++){
//     document.querySelectorAll(".drum")[j].addEventListener("click" , function(){
//         alert("i Got Clicked!");
//     });
// }

// // Writing the seprate code for all seprate button
// // for W
// document.querySelectorAll(".drum")[0].addEventListener("click", function(){
//     var audio = new Audio('sounds/crash.mp3')
//     audio.play();
//     // alert(" W is getting clicked!")
// });
// //for a
// document.querySelectorAll(".drum")[1].addEventListener("click", function(){
//     var audio = new Audio('sounds/kick-bass.mp3')
//     audio.play();
// });
// // for s
// document.querySelectorAll(".drum")[2].addEventListener("click", function(){
//     var audio = new Audio('sounds/snare.mp3')
//     audio.play();
// });
// //For d
// document.querySelectorAll(".drum")[3].addEventListener("click", function(){
//     var audio = new Audio('sounds/tom-1.mp3')
//     audio.play();
// });
// //for j
// document.querySelectorAll(".drum")[4].addEventListener("click", function(){
//     var audio = new Audio('sounds/tom-2.mp3')
//     audio.play();
// });
// //for k
// document.querySelectorAll(".drum")[5].addEventListener("click", function(){
//     var audio = new Audio('sounds/tom-3.mp3')
//     audio.play();
// });
// //for l
// document.querySelectorAll(".drum")[6].addEventListener("click", function(){
//     var audio = new Audio('sounds/tom-4.mp3')
//     audio.play();
// });


// dectecting button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0 ; i < numberOfDrumButtons ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , function (){
        var buttoninnerHTML = this.innerHTML;
        makeSound(buttoninnerHTML);
            
    });
}
// detecting keybord press
document.addEventListener("keydown", function(event){
    makeSound(event.key)
});
function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio ("sounds/tom-1.mp3");
            tom1.play();
        break;
        case "a" :
            var tom2 = new Audio ("sounds/tom-2.mp3");
            tom2.play();
        break;
        case "s":
            var tom3 = new Audio ("sounds/tom-3.mp3");
            tom3.play();
        break;
        case "d" :
            var tom4 = new Audio ("sounds/tom-4.mp3");
            tom4.play();
        break;
        case "j" :
            var snare = new Audio ("sounds/snare.mp3");
            snare.play();
        break;
        case "k":
            var crash = new Audio ("sounds/crash.mp3");
            crash.play();
        break;
        case "l" :
            var kick = new Audio ("sounds/kick-bass.mp3");
            kick.play();
        break;
        default:console.log();
    }
}