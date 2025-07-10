function Happy(){
    document.getElementById("Mood").innerText = "Keep that smile Bright!"
    document.getElementById('Mood').style.color = 'rgb(207, 176, 2)'
}

function Sad(){
    document.getElementById("Mood").innerText = "Aww its gonna be ok!!"
    document.getElementById('Mood').style.color = 'rgb(23, 2, 207)'

}
function Angry(){
    document.getElementById('Mood').style.color = 'rgb(207, 19, 2)'
    document.getElementById('Mood').innerText = 'Take deep breaths!'


}

function MYmood(){
    let MOOD = document.getElementById("YourMood").value.toLowerCase()
    if (MOOD == 'happy'){

        return Happy();
    }else if (MOOD == 'sad'){
        return Sad();
    }else if (MOOD == 'angry'){
        return Angry();
    }else{
        document.getElementById('Mood').innerText = 'Youll be fine';
    }
}