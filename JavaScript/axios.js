// Example 1 random cat facts....

// let btn=document.querySelector("button");
// btn.addEventListener("click", async()=>{
//     let fact=await getfacts();
//     // console.log(fact);
//     let p=document.querySelector("#result");
//     p.innerHTML=fact;
// });

// let url= "https://catfact.ninja/fact";
// async function getfacts(){
//     try{
//         let res=await axios.get(url);
//         return res.data.fact;
//     }
//     catch(e){
//         console.log("ERROR-", e);
//         return "no fact found";
//     }
// }


// Example 2 random Dog Images... 
// let url2="https://dog.ceo/api/breeds/image/random";
// let btn=document.querySelector("button");
// btn.addEventListener("click", async()=>{
//     let link=await getImage();
//     let img=document.querySelector("#result");
//     img.setAttribute("src",link);
//     console.log(link);


// });


// async function getImage(){
//     try{
//         let res=await axios.get(url2);
//         return res.data.message;
//         // return res.data.fact;
//     }
//     catch(e){
//         console.log("ERROR-", e);
//         return "no fact found";
//     }
// }


// Example 3- sending headers with API requests....
// const url="https://icanhazdadjoke.com/";
// async function getJokes(){
//     try{
//         const config={ headers: { Accept: "application/json"}};
//         let res=await axios.get(url, config);
//         console.log(res.data);
//     }catch(err){
//         console.log(err);
//     }
// }


// Example-4 Activity Using Query Strings.... 
let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");
btn.addEventListener("click", async()=>{
    let country=document.querySelector("input").value;
    console.log(country);

    let colArr=await getColleges(country);
    show(colArr);
    

});
 function show(colArr){
    let list=document.querySelector("#list");
    list.innerText="";
    for(col of colArr){
        console.log(col.name);

        let li=document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
    }
 }

async function getColleges(country){
    try{
        let res=await axios.get(url+country);
        return res.data;
    }catch(e){
        console.log("error:", e);
        return[];
    }
}