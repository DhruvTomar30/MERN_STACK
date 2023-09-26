const Student={
    name:"dhruv",
    age:20,
    eng:96,
    phy:98,
    maths:92,
    getAvg(){
        console.log(this);
        let avg=(maths+phy+eng)/3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}

// Arrow Function....
const sum=(a,b)=> {
 console.log(a+b);}

 "or"
 const mul=(a,b)=>a*b;

//  SetTimeout Function...
setTimeout(()=>{
 console.log("apna College");
},2000);
console.log("welcome to");


// Set Interval....
let id=setInterval(()=>{
    console.log("apna College");
}, 2000);

clearInterval(id);


