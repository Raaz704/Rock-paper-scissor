

let userScore = 0;
let compScore = 0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
userscorepara=document.querySelector("#user-score");
compscorePara=document.querySelector("#comp-score")

const genComputerChoice=()=>{
    
    const options=["rock", "paper", "scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

}

const showresult=(userwin, userChoice, compChoice)=>{
    if(userwin){
        userScore++;
        userscorepara.innerText=userScore;
        msg.innerText=`You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compscorePara.innerText=compScore
        msg.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";

    }
}

const drawgame=()=>{
    console.log("game was draw")
    msg.innerText="Game was Draw!try again"
    msg.style.backgroundColor="blue";

}

 const playGame=( userChoice)=>{
    console.log("userchoice=", userChoice);
//Generate Computer choice
const compChoice=genComputerChoice();
console.log("compChoice=", compChoice);

if(userChoice===compChoice){
    //draw game
    drawgame();
}
else{
    let userwin=true;
    if(userChoice==="rock"){
        //scissors, paper
        userwin=compChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
        //rock, scissor
        userwin= compChoice==="scissor"?false:true;
    }else{
        userwin=compChoice==="rock"?false:true;
    }
    showresult(userwin, userChoice, compChoice);
}

 }


choices.forEach((choice)=>{
      choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
    
        playGame(userChoice);
    });
});
