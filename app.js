const themeToggle = document.getElementById("themeToggle");

// create a local storage to store the privious theme mode
const storedTheme = localStorage.getItem('theme');
if(storedTheme=='dark'){
    // light to dark
    document.documentElement.style.setProperty('--bg-color', '#040D12');
    document.documentElement.style.setProperty('--text-color', '#fff');
    document.documentElement.style.setProperty('--keypad-bg-color', '#040D12');
    document.documentElement.style.setProperty('--keypad-bg-color', '#183D3D');
    localStorage.setItem('theme','dark');
}
else{
    // dark to light
    document.documentElement.style.setProperty('--bg-color', '#F1EAFF');
    document.documentElement.style.setProperty('--text-color', '#000');
    document.documentElement.style.setProperty('--keypad-bg-color', '#F1EAFF');
    document.documentElement.style.setProperty('--keypad-bg-color', '#fff');
    localStorage.setItem('theme','light');
}

themeToggle.addEventListener("change", function(){
    if(this.checked){
        // light to dark
        document.documentElement.style.setProperty('--bg-color', '#040D12');
        document.documentElement.style.setProperty('--text-color', '#fff');
        document.documentElement.style.setProperty('--keypad-bg-color', '#040D12');
        document.documentElement.style.setProperty('--keypad-bg-color', '#183D3D');
        localStorage.setItem('theme','dark');
    }
    else{
        // dark to light
        document.documentElement.style.setProperty('--bg-color', '#F1EAFF');
        document.documentElement.style.setProperty('--text-color', '#000');
        document.documentElement.style.setProperty('--keypad-bg-color', '#F1EAFF');
        document.documentElement.style.setProperty('--keypad-bg-color', '#fff');
        localStorage.setItem('theme','light');
    }
});

let result = document.getElementById("result");

function appendToResult(value){
    result.value += value;
    playButtonSound();
}
function backspace(){
    if(result.value=='Error'){
        result.value='';
    }
    result.value=result.value.slice(0,-1);
    playButtonSound();
}
function clearResult(){
    result.value="";
    playButtonSound();
}
function calculate(){
    playButtonSound();
    try{
        if(result.value==''){
            result.value='0';
        }
        result.value = eval(result.value);
    }
    catch(e){
        result.value='Error';
    }
}
function playButtonSound(){
    const buttonSound = document.getElementById('buttonSound');
    buttonSound.currentTime=0;
    buttonSound.play();
}