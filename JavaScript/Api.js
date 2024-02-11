let url= "https://catfact.ninja/fact";
// fetch(url)
//         .then((res)=>{
//             // console.log(res);
//             return res.json();
//         })
//         .then((data)=>{
//             console.log("data1=", data.fact);
//             return fetch(url);
//         })
//         .then((res)=>{
//             return res.json();
//         })
//         .then((data2)=>{
//             console.log("data2=", data2.fact);
//         })
//         .catch((err)=>{
//             console.log("ERROR-", err);
//         })


// Using Fetch with Async and Await....
// async function getfacts(){
//         try{
//             let res=await fetch(url);
//             let data=await res.json();
//             console.log(data.fact);

//             let res2=await fetch(url);
//             let data2=await res2.json();
//             console.log(data2.fact);
//         }
//         catch(e){
//             console.log("ERROR- ", e);
//         }

         
//      console.log("bye");          
//     }

let newobj={
    42:"harshuu",
    harsh:"hunny",
};
console.log(newobj);
console.log(typeof(newobj.harsh));
console.log(typeof(newobj[42]));



