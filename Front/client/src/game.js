var placeLetterInterval = 500;
var placeLetterTimer, moveLettersTimer;
var startButton, resetButton;
var box, message, score;


function placeLetter() {
    // 12593 ~ 12643
    var Con = 12593 + Math.floor(Math.random() * 50);
    var consonant = [12595, 12597, 12598, 12602, 12603, 12604, 12605, 12606, 12607, 12608, 12612];
    for (var i = 0; i < consonant.length; i++) {
        if (Con == consonant[i]) {
            return;
        }
    }
    var letter = String.fromCharCode(Con); // ㄾ ㅘ ㅢ 
    // console.log(letter + " " + test);

    /*
ㄳ 12595
ㄵ 12597
ㄶ 12598
ㄺ 12602
ㄻ 12603
ㄼ 12604
ㄽ 12605
ㄾ 12606
ㄿ 12607
ㅀ 12608
ㅄ 12612
    */
    // 한글
    // var letter = String.fromCharCode(12593 + Math.floor(Math.random() * 50)); // ㄾ ㅘ ㅢ 
    // 영어
    // var letter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    var newLetter = document.createElement("div");
    newLetter.innerHTML = letter;
    newLetter.className = letter;

    // newLetter.style.right = Math.random() * 300 + "px";
    // newLetter.style.top = 1000 - (Math.random() * 500) + "px";
    newLetter.style.left = 50 + Math.random() * 500 + "px";
    newLetter.style.bottom = 400 + (Math.random() * 500) + "px";

    box.appendChild(newLetter);
}

function moveLetters() {
    var boxes = document.querySelectorAll("#box > div");
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.bottom = parseInt(boxes[i].style.bottom) - 10 + "px";
        if (parseInt(boxes[i].style.bottom) <= -10) {
            boxes[i].remove();
            hart.innerHTML = parseInt(hart.innerHTML) - 1;
            decreaseLetterSpeed(hart);
            if (hart.innerHTML == 0) {
                endGame();
            }
        }
    }
}

function decreaseLetterSpeed(score) {
    if (parseInt(score.innerHTML) % 20 === 0) {
        clearInterval(placeLetterTimer);
        placeLetterInterval = placeLetterInterval * 1.1
        placeLetterTimer = setInterval(placeLetter, placeLetterInterval)
    }
}

function endGame() {
    toggleText();
    clearInterval(moveLettersTimer);
    clearInterval(placeLetterTimer);
    document.removeEventListener('keydown', keyboardInput);
    message.classList.remove("hidden");
    resetButton.classList.remove("disabled")
}

function toggleText() {
    var text = document.getElementById("message");
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function resetText() {
    var text = document.getElementById("message");
    text.style.display = "none";
}

function resetGame() {
    resetText();
    message.classList.remove("hidden"); // add
    resetButton.classList.add("disabled")
    score.innerHTML = 0;
    hart.innerHTML = 5;

    var boxes = document.querySelectorAll("#box > div");
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].remove();
    }

    // startGame();
}

function keyboardInput() {
    if (event.keyCode === 27) {
        return endGame();
    };

    var key = String.fromCharCode(event.keyCode).toLowerCase();
    // var boxes = document.getElementsByClassName(key);
    console.log(key);
    var chosung_index = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ",
        "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ",
        "ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ",
        "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"]; //19개 + 21개
    var eng_keyboard = ["r", "R", "s", "e", "E", "f", "a", "q", "Q", "t", "T", "d", "w", "W", "c", "z", "x", "v", "g",
        "k", "o", "i", "O", "j", "p", "u", "P", "h", "1", "2", "3", "y", "n", "4", "5", "6", "b", "m", "7", "l"];
    var test;



    for (var i = 0; i < chosung_index.length; i++) {
        // console.log(decodeURI(chosung_index[i]));
        if (key == eng_keyboard[i]) {
            test = chosung_index[i];
        }
    }
    console.log(test);
    var boxes = document.getElementsByClassName(test);


    if (boxes[0]) {
        boxes[0].remove();
        score.innerHTML = parseInt(score.innerHTML) + 1;
        decreaseLetterSpeed(score);
    } else {
        score.innerHTML = parseInt(score.innerHTML) - 1;
    }

}


function startGame() {
    resetText();
    placeLetterTimer = setInterval(placeLetter, placeLetterInterval);
    moveLettersTimer = setInterval(moveLetters, 100);
    document.addEventListener('keydown', keyboardInput);
    startButton.classList.add("disabled");
}

document.addEventListener("DOMContentLoaded", function (event) {
    console.log("OH HAI THERE!");

    message = document.getElementById('message');
    box = document.getElementById('box');
    score = document.getElementById("score");

    startButton = document.getElementById('start')
    startButton.onclick = startGame;

    resetButton = document.getElementById('reset')
    resetButton.onclick = resetGame;
});

export default game