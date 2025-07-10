let nomber = Math.floor(Math.random()*10);
console.log(nomber)
let GuessCount = 0;

function Guess(){
    const Result = document.getElementById('result');
    GuessCount += 1;
    document.getElementById('guessnum').innerText = GuessCount;
    let input = Number(document.getElementById('numberguess').value);
        if (input < nomber){
            Result.innerText = 'Low!';
        }else if (input > nomber){
            Result.innerText = 'High!';
        }else if (input == nomber){
            Result.innerText = 'Correct!';
        
        }
    }
