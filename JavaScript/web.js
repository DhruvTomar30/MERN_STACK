let loginForm=
document.getElementById("loginForm");

loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    let username=
    document.getElementById("username");
    let card_number=
    document.getElementById("card_number");

    if(username.value=="" || card_number.value==""){
        alert("ensure you input a value in both fields");
    
    } else{
        alert("form submitted successfully");
        console.log(
            `this form has a username of          
    ${username.value} and card_number of 
    ${card_number.value}`
         );

         username.value="";
         card_number="";
        
    }
});