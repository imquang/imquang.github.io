function changeLogo() {
    var lg = document.getElementById("lga").innerHTML;
    document.getElementById("lga").innerHTML = "<img img alt='Google' height='92' id='hplogo' src='https://media.wired.com/photos/5955ad8c5992c54331ac163f/master/w_2048,c_limit/Yahoo_Logo_Purple-question-S.jpg'>";
}

function changeButton() {
    var bt = document.getElementsByTagName("input")[5].value;
    document.getElementsByTagName("input")[5].value = "Yahoo!";
}