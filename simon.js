    let gameseq=[];
    let userseq=[];
    let btns=["yellow","red","purple","green"];
    let started=false;
    let level=0;
    let h2=document.querySelector("h2");
    document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started ");
        started=true;
        levelup();

    }}
    );
    function gameFlash(btn){
        btn.classList.add("flash");
        setTimeout(function(){
            btn.classList.remove("flash");
        },250);
    }

    function userFlash(btn){
        btn.classList.add("userflash");
        setTimeout(function(){
            btn.classList.remove("userflash");
            console.log("user is flashed");
        },250);
    }
    function levelup(){
        userseq=[];
        level++;
        h2.innerText=`level ${level}`;
        let randIndx=Math.floor(Math.random()*3);
        let randColor=btns[randIndx];
        let randBtn=document.querySelector(`.${randColor}`);
        
    gameseq.push(randColor);
    console.log(gameseq);  
        gameFlash(randBtn);
    }
    function checkAns(idx){
        if(userseq[idx]===gameseq[idx]){
            if(userseq.length==gameseq.length){
                setTimeout(levelup,1000);
            }
        }
        else{
            h2.innerText="game over! press any key to start";
        }
    }

    function btnPress(){
        console.log(this);
        let btn=this;
        userFlash(btn);
        userColor=btn.getAttribute("id");
        userseq.push(userColor);
        checkAns(userseq.length-1);

    }
    let allBtns=document.querySelectorAll(".btn");
    for(btn of allBtns){
        btn.addEventListener("click",btnPress);
    }