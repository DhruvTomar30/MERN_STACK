let btn=document.querySelector('#up');
let btn2=document.querySelector('#down');
let p=document.querySelector('p');

p.style.background="yellow";
let count=0;

p.innerText=count;

btn.addEventListener("click", function(){
  count+=3;
  p.innerText=count;


});
btn2.addEventListener("click", function(){
    count-=1;
    p.innerText=count;
  
})



