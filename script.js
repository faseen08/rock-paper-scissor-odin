console.log("Hi");


let humanScore = 0;
let ComputerScore = 0;

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let final = document.querySelector(".final");
let current = document.querySelector(".current");
let score = document.querySelector(".score");

let count = 0;

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click",() => playRound("paper", getComputerChoice()));
scissor.addEventListener("click",() => playRound("scissor", getComputerChoice()));

current.textContent = "";
final.textContent = "";

function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3) + 1;

    if(choice === 1)
    {
        return "rock";
    }
    else if(choice === 2)
        return "paper";
    else
        return "scissor"
}

function playRound(humanChoice, computerChoice)
{
    if(humanChoice === computerChoice)
    {
        current.textContent = "Tie"
    }
    else if((humanChoice === "rock") && (computerChoice != "paper"))
    {
        humanScore++;
        current.textContent = `You win!, ${humanChoice} beats ${computerChoice}`;
    }
    else if((humanChoice === "paper") && (computerChoice != "scissor"))
    {
        humanScore++;
        current.textContent = `You win!, ${humanChoice} beats ${computerChoice}`;;
    }
    else if((humanChoice === "scissor") && (computerChoice != "rock"))
    {
        humanScore++;
        current.textContent = `You win!, ${humanChoice} beats ${computerChoice}`;
    }
    else
    {
        ComputerScore++;
        current.textContent = `You Lose!, ${computerChoice} beats ${humanChoice}`;
    }

    count++;

    if(count === 5)
    {
        function winner(humanScore, ComputerScore)
        {
            if(humanScore === ComputerScore)
                return "Tie";
            else if(humanScore > ComputerScore)
                return "Human";
            else
                return "Computer";
        }

        score.textContent = `humans score = ${humanScore} and computer score = ${ComputerScore}`;
        final.textContent = `Game Over!
        Winner is ${winner(humanScore, ComputerScore)}`;
        humanScore = 0;
        ComputerScore = 0;
        count = 0;
    }
    else
        score.textContent = `humans score = ${humanScore} and computer score = ${ComputerScore}`;
    
}




    



