// // single element event listner

// // document.querySelector("button").addEventListener("click", handleClick);
// // function handleClick(){
// //     alert("i got clicked!");
// // }


// // another way for single element event listner
// // document.querySelector("button").addEventListener("click", function (){
// //     alert("i got clicked!");
// // });


// // Multiple  element event listner 

// // document.querySelectorAll("button").forEach(function(elem) {
// //     elem.addEventListener("click", function() {
// //         alert("i got clicked!");
// //     });
// // });

// // another way for Multiple  element event listner 
// var numberOfDrum = document.querySelectorAll(".drum").length;
// for (var j = 0; j < numberOfDrum; j++){
//     document.querySelectorAll(".drum")[j].addEventListener("click" , function(){
//         alert("i Got Clicked!");
//     });
// }

// Writing the seprate code for all seprate button
//for W
document.querySelectorAll(".drum")[0].addEventListener("click", function(){
    alert(" W is getting clicked!")
});
//for a
document.querySelectorAll(".drum")[1].addEventListener("click", function(){
    alert(" A is getting clicked!")
});
// for s
document.querySelectorAll(".drum")[2].addEventListener("click", function(){
    alert(" S is getting clicked!")
});
//For d
document.querySelectorAll(".drum")[3].addEventListener("click", function(){
    alert(" D is getting clicked!")
});
//for j
document.querySelectorAll(".drum")[4].addEventListener("click", function(){
    alert(" J is getting clicked!")
});
//for k
document.querySelectorAll(".drum")[5].addEventListener("click", function(){
    alert(" K is getting clicked!")
});
//for l
document.querySelectorAll(".drum")[6].addEventListener("click", function(){
    alert(" L is getting clicked!")
});