<template>
  <div class="acid">
    <div class="acid_left">
      <title>The Game Formerly Known as Typing</title>
      <!-- <script src="js/game.js"></script> -->
      <!-- <link href="css/style.css" rel="stylesheet"> -->

      <div class="container">
        <div class="header">
          <button
            class="btn btn-success pull-right"
            id="start"
            v-on:click="startGame"
          >
            <span class="glyphicon glyphicon-play"></span> Start
          </button>
          <!-- disabled -->
          <button
            class="btn btn-danger pull-right"
            id="reset"
            v-on:click="resetGame"
          >
            <span class="glyphicon glyphicon-flash"></span> Reset
          </button>
          <h3 class="text-muted">산 성 비</h3>
          <hr />
        </div>

        <div class="panel panel-default">
          <div class="panel-body">
            <div id="box">
              <span id="message" class="hidden" style="display: none"
                >Game Over!</span
              >
              <!-- <img src="./background.gif" class="bg" style="object-fit: fill" /> -->
            </div>
          </div>
          <div class="panel-footer">
            <strong>Score: <span id="score">0 </span></strong>
            <strong>생명 : <span v-for="idx in hart" :key="idx">
              <img src="./heart.gif" style="width:20px">
            </span></strong>
          </div>
        </div>
        <hr />
      </div>
    </div>
    <div class="acid_right">
      <div class="a">a</div>
      <hr />
      <div class="b">b</div>
    </div>
  </div>
</template>

<script>
var placeLetterInterval = 500;
var placeLetterTimer, moveLettersTimer;
var startButton, resetButton;
var box, message, score;
var hart = 5;

export default {
  name: "Acid_rain",
  data: function () {
    return {
      score: "",
      hart: "5",
    };
  },
  mounted() {
    // document.addEventListener("DOMContentLoaded", this.doTest);
    message = document.getElementById("message");
    box = document.getElementById("box");
    score = document.getElementById("score");
    hart = this.hart;
  },
  methods: {
    placeLetter: function () {
      // 12593 ~ 12643
      var Con = 12593 + Math.floor(Math.random() * 50);
      var consonant = [
        12595, 12597, 12598, 12602, 12603, 12604, 12605, 12606, 12607, 12608,
        12612,
      ];
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
      newLetter.id = "quiz";
      newLetter.innerHTML = letter;
      newLetter.className = letter;

      // newLetter.style.right = Math.random() * 300 + "px";
      // newLetter.style.top = 1000 - (Math.random() * 500) + "px";
      newLetter.style.left = 100 + Math.random() * 700 + "px";
      newLetter.style.bottom = 400 + Math.random() * 500 + "px";

      box.appendChild(newLetter);
    },

    moveLetters: function () {
      var boxes = document.querySelectorAll("#box > div");
      for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.bottom = parseInt(boxes[i].style.bottom) - 10 + "px";
        if (parseInt(boxes[i].style.bottom) <= -10) {
          boxes[i].remove();
          this.hart = parseInt(this.hart) - 1;
          this.decreaseLetterSpeed(hart);
          if (this.hart == 0) {
            this.endGame();
          }
        }
      }
    },

    endGame: function () {
      this.toggleText();
      clearInterval(moveLettersTimer);
      clearInterval(placeLetterTimer);
      document.removeEventListener("keydown", this.keyboardInput);
      message.classList.remove("hidden");
      resetButton.classList.remove("disabled");
    },

    decreaseLetterSpeed: function (score) {
      if (parseInt(score.innerHTML) % 20 === 0) {
        clearInterval(placeLetterTimer);
        placeLetterInterval = placeLetterInterval * 1.1;
        placeLetterTimer = setInterval(this.placeLetter, placeLetterInterval);
      }
    },

    toggleText: function () {
      var text = document.getElementById("message");
      if (text.style.display === "none") {
        text.style.display = "block";
      } else {
        text.style.display = "none";
      }
    },
    resetText: function () {
      var text = document.getElementById("message");
      text.style.display = "none";
    },

    resetGame: function () {
      this.resetText();
      message.classList.add("hidden"); // add
      // resetButton.classList.add("disabled");
      score.innerHTML = 0;
      this.hart = 5;

      var boxes = document.querySelectorAll("#box > div");
      for (var i = 0; i < boxes.length; i++) {
        boxes[i].remove();
      }
      this.endGame();
      // startGame();
    },

    keyboardInput: function () {
      if (event.keyCode === 27) {
        return this.endGame();
      }

      var key = String.fromCharCode(event.keyCode).toLowerCase();
      // var boxes = document.getElementsByClassName(key);
      console.log(key);
      var chosung_index = [
        "ㄱ",
        "ㄲ",
        "ㄴ",
        "ㄷ",
        "ㄸ",
        "ㄹ",
        "ㅁ",
        "ㅂ",
        "ㅃ",
        "ㅅ",
        "ㅆ",
        "ㅇ",
        "ㅈ",
        "ㅉ",
        "ㅊ",
        "ㅋ",
        "ㅌ",
        "ㅍ",
        "ㅎ",
        "ㅏ",
        "ㅐ",
        "ㅑ",
        "ㅒ",
        "ㅓ",
        "ㅔ",
        "ㅕ",
        "ㅖ",
        "ㅗ",
        "ㅘ",
        "ㅙ",
        "ㅚ",
        "ㅛ",
        "ㅜ",
        "ㅝ",
        "ㅞ",
        "ㅟ",
        "ㅠ",
        "ㅡ",
        "ㅢ",
        "ㅣ",
      ]; //19개 + 21개
      var eng_keyboard = [
        "r",
        "R",
        "s",
        "e",
        "E",
        "f",
        "a",
        "q",
        "Q",
        "t",
        "T",
        "d",
        "w",
        "W",
        "c",
        "z",
        "x",
        "v",
        "g",
        "k",
        "o",
        "i",
        "O",
        "j",
        "p",
        "u",
        "P",
        "h",
        "1",
        "2",
        "3",
        "y",
        "n",
        "4",
        "5",
        "6",
        "b",
        "m",
        "7",
        "l",
      ];
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
        this.decreaseLetterSpeed(score);
      } else {
        score.innerHTML = parseInt(score.innerHTML) - 1;
      }
    },

    startGame: function () {
      this.hart = 5;
      console.log("start");
      this.resetText();
      placeLetterTimer = setInterval(this.placeLetter, placeLetterInterval);
      moveLettersTimer = setInterval(this.moveLetters, 100);
      document.addEventListener("keydown", this.keyboardInput);
      startButton.classList.add("disabled");
    },
    // doTest() {
    //   message = document.getElementById("message");
    //   box = document.getElementById("box");
    //   score = document.getElementById("score");
    //   hart = document.getElementById("hart");
    //   // startButton = document.getElementsById("start");
    //   // startButton.onclick = this.startGame;
    // },

    // document.addEventListener("DOMContentLoaded", function(event) {
    //     console.log("OH HAI THERE!");

    //     message = document.getElementById('message');
    //     box = document.getElementById('box');
    //     score = document.getElementById("score");

    //     startButton = document.getElementById('start')
    //     startButton.onclick = startGame;

    //     resetButton = document.getElementById('reset')
    //     resetButton.onclick = resetGame;
    // })
  },
  created() {},
};
</script>


<style>
#box {
  margin: auto;
  height: 600px;
  /* background: grey; */
  background: url("./background.gif");
  overflow: hidden;
  position: relative;
  font-family: "Georgia";
  font-size: 55px;
  font-weight: bold;
  color: purple;
}

.bg {
  width: 100%;
  height: 100%;
  z-index: 1;
}

#quiz {
  display: inline-block;
  position: absolute;
  height: 50px;
  width: 50px;
  text-align: center;
  transition-property: bottom;
  transition-duration: 100ms;
  transition-timing-function: linear;
  transition-delay: 0;
}

#message {
  display: block;
  text-align: center;
  position: relative;
  font-size: 125px;
  top: 50%;
  z-index: 10;
  color: rgba(0, 0, 0, 0.6);
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  text-shadow: 2px 2px 3px purple;
}

.panel {
  max-width: 100%;
  /* margin: auto; */
}

.panel-body {
  padding: 0;
}

.btn {
  margin-left: 10px;
}

.container {
  width: 70%;
}

.acid {
  width: 100%;
  height: 100%;
}
.acid_left {
  float: left;
  width: 70%;
}
.acid_right {
  float: right;
  width: 30%;
  height: 100%;
}
.a {
  height: 300px;
  margin: auto;
}
.b {
  margin: auto;
  height: 200px;
}
</style>