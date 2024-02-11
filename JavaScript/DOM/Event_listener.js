// Dom Events...
// let btns=document.querySelectorAll('button');
// for(btn of btns){
//     btn.onclick=sayHello;
//     btn.onmouseenter=function () {
//         console.log("you entered a button");
//     }
//     console.dir(btn);
                  
//  <-------- Event Listeners-------->

//     btn.addEventListener("click",function(){             
//         console.log("button clicked");
//     });

//     btn.addEventListener("click",sayHello);
//     btn.addEventListener("click",sayName);
// }
// function sayHello(){
//     alert("hello");
// }

// function sayName(){
//     alert("apna collgee");
// }

//  RANDOM COLOR CHANGER -------->



let btn=document.querySelector('button');
btn.addEventListener("click",function(){
    h3=document.querySelector('h3');
    let randomColor=getRandomColor();
    h3.innerText=randomColor;

    div=document.querySelector('div');
    div.style.background=randomColor;
    console.log("color updated");
});

function getRandomColor(){
    let red=Math.floor(Math.random()*255)+1;
    let green=Math.floor(Math.random()*255)+1;
    let blue=Math.floor(Math.random()*255)+1;

    let color=`rgb(${red},${green},${blue})`;
    return color;
}