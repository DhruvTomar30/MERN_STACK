// Example of Async Keyword..

// async function greet(){
//     return "hello wolrd";  //returns a Promise
// }
// let hello= async()=>{};    //returns a Promise


// async function wish(){
//     // throw "404 page not found";   
//     return "hello";
// }

// wish()
//     .then((result)=>{
//         console.log("Promise was resolved");
//         console.log("result was: resolved");
//     })
//     .catch((err)=>{
//         console.log("promise was rejected with err:", err);
//     })


// Example of Await keyword.....
function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random() * 10)+1;
            console.log(num);
            resolve();
        }, 1000);
    });
}

async function demo(){
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    getNum();
}

