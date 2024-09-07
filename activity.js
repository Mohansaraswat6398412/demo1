let btn=document.querySelector("button");
let h3=document.querySelector("h3");
btn.addEventListener("click",function(){
    let color1=randomnum();
    h3.textContent=color1;
    let div=document.querySelector("div");
    div.style.backgroundColor=color1;
});

function randomnum(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color= `rgb(${red},${green},${blue})`;
    //console.log(color);
    return color;
}