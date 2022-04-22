let passwordChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let passwordGenViewElement = document.querySelectorAll(".pw-gen__box");
let passwordLength = 12;

function genPasswordLoop(){
    passwordGenViewElement.forEach((e) => {
        e.textContent = "";
    });

    passwordGenViewElement.forEach((e) => {
        for ( let i = 0; i < passwordLength; i++){  
            let randomNumber = Math.floor(Math.random() * passwordChars.length);
            e.textContent += passwordChars[randomNumber];
            // console.log(Math.floor(Math.random() * passwordChars.length));
        }
    });
}

// console.log(passwordChars.length);