let btn=document.querySelector('button');

btn.addEventListener("click", function(){
    let randomColor=getRandomcolor();
    

    let div=document.querySelector('div');
    div.style.background=randomColor;
    console.log("color updated");
    div.innerText=randomColor;

    function getRandomcolor(){
        let red=Math.floor(Math.random()*255)+1;
        let blue=Math.floor(Math.random()*255)+1;
        let green=Math.floor(Math.random()*255)+1;

        let color=`rgb(${red}, ${blue}, ${green})`;
        return color;
    }

})

