//comment, my 1st js code
console.log('hello world'); //you can see this in console in inspect
let name = 'eula' ;
console.log(name)

const intrestRate = 1;

console.log(intrestRate);

name = "youou";//string
let agge = 20; //Number
let anotherVar = true; //boolean(false too)
let firstVar = undefined;
let secondVar = null;

let person = {
    name:'eula',
    age: 20 
} //object!!

person.age = 21;//dot notation
person['name'] = 'beidou';

console.log(person.age)
console.log(person.name)

let colours = ['red', 'pink', 'blue']; //array
console.log(colours[0]);//selecting particular thinng in an array
colours[2] = 44;//adding different values in the array 

function greet(namee) {
    console.log('yo '+ namee);
}
greet('josh');

function calculate(numbber) {
    return numbber * numbber 
}
console.log(calculate(4));

var nami = 1; //this is also a variable 
console.log(nami)


//Lets go for condtionals now!! 
//first some if and if else 
var age = 10; 
if (age >= 18 ){
    console.log('Adult');
}else {
    console.log('minor');
}



function yourFunction(){
    nomber = Number(document.getElementById('yourInputid').value); 
    if (nomber >= 18 && nomber <= 100){
        document.getElementById("Result").innerText = "Adult";
        document.getElementById("Result").style.color = 'green';
    }else if (nomber <= 0){
        
        document.getElementById("Result").innerText = "Invalid bro";
        document.getElementById("Result").style.color = 'Red';
    }else if(nomber >100){
        document.getElementById("Result").innerText = 'Too old to belive';
        document.getElementById('Result').style.color = "brown";

    }
    else if (nomber >=0 && nomber <= 18){
        document.getElementById("Result").innerText = "Minor";
        document.getElementById("Result").style.color = 'blue';
    }
    document.getElementById("Result").style.fontSize = "30px";
}



