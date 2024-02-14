const choices = document.querySelectorAll(".choice");
let compScore = 0; 
let userScore = 0; 
const csocre = document.querySelector("#comp-score");
const usocre = document.querySelector("#user-score");
const msg = document.querySelector("#massage");

const genComputerChoice = () => {
    const arr = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return arr[randomIdx];
}

const gameDrow = () => {
    console.log("Game was Draw");
    msg.innerText = "Game was Draw. Play Again";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        usocre.innerText = userScore;
        msg.innerText = `You Win Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        csocre.innerText = compScore;
        msg.innerText = `You lose ${compChoice} Beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};  

const playGame = (userChoice) => {
    const compChoice = genComputerChoice();
    console.log(userChoice);
    console.log(compChoice);

    if(userChoice===compChoice){
        gameDrow();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compChoice == "paper" ? false : true;
        }else if(userChoice==="paper"){
            userWin = compChoice == "rock" ? true : false;
        }else{
            userWin = compChoice == "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});