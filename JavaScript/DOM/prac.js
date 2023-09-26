// let para1=document.createElement("p");
// para1.innerText="hello";
// document.querySelector("body").append(para1);

// para1.classList.add("red");

// let h3=document.createElement("h3");
// h3.innerText="i am blue h3!";
// document.querySelector("body").append(h3);

// h3.classList.add("blue");

// let div=document.createElement("div");
// let h1=document.createElement("h1");
// let para2=document.createElement("para2");

// h1.innerText="I am in a div";
// para2.innerText="Me Too!";

// div.append(h1);
// div.append(para2);
// div.classList.add("box");

// document.querySelector("body").append(div);

// part 10 Dom......

// <------- This in Event Listeners ---------->
// let p=document.querySelector("p");
// let btn=document.querySelector("button");
// let h1=document.querySelector("h1");
// let h3=document.querySelector("h3");

// function colorChange(){
//     console.dir(this.innerText);
//     this.style.background="blue";
// }

// btn.addEventListener("click",colorChange);
// p.addEventListener("click",colorChange);
// h1.addEventListener("click",colorChange);
// h3.addEventListener("click",colorChange);


// <---------- Keyboard Events ------------>
let inp=document.querySelector("input");
// inp.addEventListener("keydown",function(event){
//     console.log("key= ",event.key);
//     console.log("code= ", event.code);
//     console.log("key was pressed");
// });

// inp.addEventListener("keyup",function(){       
//     console.log("key was released");
// });

// <----- Combination of keys --->
// inp.addEventListener("keydown",function(event){
//     console.log("code= ", event.code); // Arrowup(U), ArrowDown(D), ArrowLeft(L), R..
//     if(event.code=="KeyU"){
//         console.log("character moves up");
//     }
//     else if(event.code=="KeyD"){
//         console.log("character moves down");
//     }
//     else if(event.code=="KeyL"){
//         console.log("character moves left");
//     }
//     else if(event.code=="KeyR"){
//         console.log("character moves right");
//     }
// });

// <----- Form Events --->
let form=document.querySelector("form");
form.addEventListener("submit",function (event) {
    event.preventDefault();
    alert("form submitted");
    // console.dir(form);
    // let user=this.element[0];
    // let pass=this.element[1];

    // console.log(user.value);
    // console.log(pass.value);

    // alert(`hi ${user.value}, your pass is set to ${pass.value}`);
});
