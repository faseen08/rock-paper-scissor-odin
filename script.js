console.log("Hi");


let humanScore = 0;
let ComputerScore = 0;
let n = 5



function playGame()
{
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

    function gethumanChoice()
    {
        let choice = prompt("Enter your choice: ");
        choice = choice.toLowerCase();
        return choice;
    }

    

    function playRound(humanChoice, computerChoice)
    {
        if(humanChoice === computerChoice)
        {
            console.log("Tie");
        }
        else if((humanChoice === "rock") && (computerChoice != "paper"))
        {
            humanScore++;
            console.log(`You win!, ${humanChoice} beats ${computerChoice}`);
        }
        else if((humanChoice === "paper") && (computerChoice != "scissor"))
        {
            humanScore++;
            console.log(`You Win!, ${humanChoice} beats ${computerChoice}`);
        }
        else if((humanChoice === "scissor") && (computerChoice != "rock"))
        {
            humanScore++;
            console.log(`You Win!, ${humanChoice} beats ${computerChoice}`);
        }
        else
        {
            ComputerScore++;
            console.log(`You Lose!, ${computerChoice} beats ${humanChoice}`);
        }

        console.log(`humans score = ${humanScore} and computer score = ${ComputerScore}`);
    }

    const humanSelection = gethumanChoice();
    console.log(`human choice is ${humanSelection}`);

    const computerSelection = getComputerChoice();
    console.log(`computer choice is ${computerSelection}`);

    playRound(humanSelection, computerSelection);

    n--;

    while(n != 0)
        playGame();
}

