const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPwEl = document.getElementById("first_pw"); 
let secondPwEl = document.getElementById("second_pw");



function genRandomPassword(){
    let tmp = ""
        let tmp2 = ""
    for(let i = 1 ; i <= 15 ; i++){
        let randomFirstPw = Math.floor(Math.random()*characters.length);
        let randomSecondPw = Math.floor(Math.random()*characters.length);
        tmp += characters[randomFirstPw]
        tmp2 += characters[randomSecondPw]
    }
    firstPwEl.textContent = tmp;
    secondPwEl.textContent = tmp2;
    
}


function startGenPw(){
    genRandomPassword();

}





 
