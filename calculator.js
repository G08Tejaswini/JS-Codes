function calcfunct1(){
    let number1 = Number(document.getElementById('calc1').value);
    let number2 = Number(document.getElementById('calc2').value);
    let sum = number1 + number2 ;
    document.getElementById('result').innerText = sum;
    console.log(sum);
    document.getElementById("Q").innerText = number1 + "+" + number2;

}

function calcfunct2(){
    let number1 = Number(document.getElementById('calc1').value);
    let number2 = Number(document.getElementById('calc2').value);
    let minus = number1 - number2 ;
    document.getElementById('result').innerText = minus;
    console.log(minus);
    document.getElementById("Q").innerText = number1 + "-" + number2;

}

function calcfunct3(){
    let number1 = Number(document.getElementById('calc1').value);
    let number2 = Number(document.getElementById('calc2').value);
    let devide = number1 / number2 ;
    document.getElementById('result').innerText = devide;
    console.log(devide);
    document.getElementById("Q").innerText = number1 + "/" + number2;
}

function calcfunct4(){
    let number1 = Number(document.getElementById('calc1').value);
    let number2 = Number(document.getElementById('calc2').value);
    let multiply = number1 * number2 ;
    document.getElementById('result').innerText = multiply;
    console.log(multiply);
    document.getElementById("Q").innerText = number1 + "*" + number2;

}

function calc(){
    document.getElementById("calc1").value = " ";
    document.getElementById("calc2").value = " ";
    document.getElementById("Q").innerText = " ";
    document.getElementById("result").innerText = " ";
    console.log("cleared!")
}

document.getElementById("result").style.color = "rgb(111, 12, 75)";