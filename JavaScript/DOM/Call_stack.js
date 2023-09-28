// function hello(){
//     console.log("inside hello function");     //-03
//     console.log("hello");                        //-04
// }
// function demo(){
//     console.log("calling hello function");   //--- 02
//     hello();
// }
// console.log("calling demo function");       //---- 01
// demo();
// console.log("done, bye!");                  //--- 05


// Visualizing Call Stack...
// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }
// function three(){
//     let ans=two()+one();
//     console.log(ans);
//     three();
// }

// Call Back Hell....
// h1=document.querySelector("h1");

// function changeColor(color, delay, nextColorchange){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextColorchange)nextColorchange();
//     },delay);
// }

// changeColor("red",1000,()=>{
//     changeColor("green",1000,()=>{
//         changeColor("orange",1000,()=>{
//             changeColor("blue",1000);
//         })
//     })
// })



// Asynchronous Situation......
// function savetoDB(data,success,failure){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         // success();
//         console.log("success");
//     }
//     else{
//         // failure();
//         console.log("failure");
//     }
// }
// savetoDB("apnacollege",
// ()=>{
//     console.log("success: your database saved");
//     savetoDB("hello World",
//     ()=>{
//         console.log("success 2: data was saved");
//     },
//     ()=>{
//         console.log("failure: weak conn.");
//     });
// },
// ()=>{
//     console.log("failure 1: weak conn.");
// });
// }



// Using Promise to prevent the code from Asynchronous Function....
// function savetoDB(data){
//     return new Promise((resolve,reject)=>{
//         let internetSpeed=Math.floor(Math.random()*10)+1;
//         if(internetSpeed>4){
//             resolve("success: data was saved");
//         }
//         else{
//             reject("failure: weak Connnection");
//         }
//     });
// }

// // Then() and catch().......
// // savetoDB("Hello")
// // .then(()=>{
// //     console.log("promised resolve")
// // })
// // .catch(()=>{
// //     console.log("promise rejected");
// // })



// // Promise cHaining..... (Enhanced Version of Asynchronous Situation Code.....)
// savetoDB("apna college")
//     .then(()=>{
//         console.log("data 1 saved");
//         return savetoDB("hello world");
//     })
//     .then(()=>{
//         console.log("data 2 saved");
//         return savetoDB("Dhruv");
//     })
//     .then(()=>{
//         console.log("data 3 saved");
//     })
//     .catch(()=>{
//         console.log("some promise rejected");
//     })


//Compact code of Callback Hell/color Code....
h1=document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color changed");
        },delay);
    });
}
changeColor("red",1000)
    .then(()=>{
        console.log("red color was changed");
        return changeColor("blue",1000);
    })
    .then(()=>{
        console.log("blue color was changed");
        return changeColor("green", 1000);
    })
    .then(()=>{
        console.log("green color was chnaged");
        return changeColor("yellow", 1000);
    })
    .then(()=>{
    console.log("yellow was changed");
    });
