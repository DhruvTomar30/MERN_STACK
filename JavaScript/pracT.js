// console.log(document.querySelector('p'));

// <----- Spread... expand iterable into multiple vlaues... 
// let arr=[1,2,3,4];
// let newarr=[...arr];
// console.log(newarr);

// let data={
//     email:"dt@gmail.com",
//     pass:"Hello",
// };
// let datacopy={...data, id:123};
// console.log(datacopy)

// function sum(...args){
//     return args.reduce((add,el)=>add+el);
// }

// function min(msg, ...args){
//     return args.reduce((min,el));
// } 

// let x=5;
// let y=x++;
// let z=y++;
// console.log(x,y,z);
// console.log(y)
// console.log(x)
// console.log(z)

// console.log('1'+2+2)
// console.log(1+2+'2')


const a =Symbol("sonu");
const b =Symbol("sonu");
console.log(a==b);