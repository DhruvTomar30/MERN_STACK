let greet="hello";
function changeGreet(){
    let greet="namaste";
    console.log(greet);

    function innerGreet(){
        console.log(greet);
    }
}
console.log(greet);
changeGreet();

// Function Expression....
let sum=function(a,b){
    return a+b;
}

// High Order Function...
function multipleGreet(func,count){
    for(let i=1; i<=count; i++){
        func();
    }
}
let greet=function(){
    console.log("hello");
}
multipleGreet(greet,1000);

// Methods.....(shortend)
const calculator={
    add(a,b){         
        // add:function(a,b)
        return a+b;
    },
    sub(a,b){
        // sub:function(a,b)
        return a-b;
    }
}
