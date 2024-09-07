let btn=document.createElement("button");
btn.innerText="submit";
document.querySelector("body").append(btn);
let count=0;
btn.addEventListener("click",function()
{
    count++;
    if(count==1){
        add1();
    }
    else if(count==2){
        add2();
    }
    else{
        add3();
    }

})



function add1(){
    let div=document.createElement("div");
    div.classList.add("div");
    div.innerText="this is new div";
    document.querySelector("body").append(div);
    btn.classList.add("blue");
    document.querySelector("body").append(btn);

}
function add2(){
    let div2=document.createElement("div");
    div2.classList.add("div2")
 document.querySelector("body").append(div2);
}

function add3(){
    console.log("isse aage kuchh nhi he");
}