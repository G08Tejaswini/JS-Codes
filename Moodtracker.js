let MoodHistory = [];
function tracker(){
    let mood = document.getElementById('yourmood').value;
    MoodHistory.push(mood);
    document.getElementById('History').innerText = MoodHistory.join(", ");


}