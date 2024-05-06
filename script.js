const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L",
    "M","N","O","P","Q","R","S","T","U","V","W","X",
    "Y","Z","a","b","c","d","e","f","g","h","i","j",
    "k","l","m","n","o","p","q","r","s","t","u","v",
    "w","x","y","z", "0", "1", "2", "3", "4", "5","6",
    "7", "8", "9","~","`","!","@","#","$","%","^","&",
    "*","(",")","_","-","+","=","{","[","}","]",",","|",
    ":",";","<",">",".","?","/"
];


let passwordOneEl = document.getElementById("password-one");
let passwordTwoEl = document.getElementById("password-two");

function generatePasswords() {
    passwordOneEl.textContent = ""
    passwordTwoEl.textContent = ""
    for (let i = 0; i < 16; i++) {
        let indexPasswordOne = Math.floor(Math.random() * characters.length)
        let indexPasswordTwo = Math.floor(Math.random() * characters.length)

        passwordOneEl.textContent += characters[indexPasswordOne]
        passwordTwoEl.textContent += characters[indexPasswordTwo]
        
    }
}

function copyToClickBoard() {
    navigator.clipboard.writeText(passwordTwoEl.textContent);
    alert("Password copied to clickboard!")
}