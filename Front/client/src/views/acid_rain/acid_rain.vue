<template>
  <div class="acid">
    <b-modal v-model="show" :consonant="Consonant" hide-footer>
      <b-container fluid>
        <div style="width: 45%; float: left">a</div>
        <div style="width: 45%; float: right">
          <div cols="3">자음 모음을 선택해 주세요</div>
          <div cols="3">
            <b-button id="modalBtn" v-on:click="con">자음</b-button>
          </div>
          <div cols="3">
            <b-button id="modalBtn" v-on:click="col">모음</b-button>
          </div>
          <div cols="3">
            <div class="w-100">
              <b-button
                id="modalBtn"
                variant="primary"
                size="sm"
                class="float-right"
                @click="[(show = false), startGame()]"
              >
                GO!
              </b-button>
            </div>
          </div>
        </div>
        <!-- <b-row>
          <b-col cols="3">자-모음</b-col>
          <b-col cols="6">
            <b-form-select v-model="Consonant" :options="consonant">
            </b-form-select>
          </b-col>
        </b-row> -->
      </b-container>

      <template #modal-footer> </template>
    </b-modal>
    <div class="acid_left">
      <title>The Game Formerly Known as Typing</title>
      <!-- <script src="js/game.js"></script> -->
      <!-- <link href="css/style.css" rel="stylesheet"> -->

      <div class="container">
        <h3 class="text-muted">산 성 비</h3>
        <hr />
        <div class="panel panel-default">
          <div class="panel-body">
            <div id="box">
              <!-- <div id="message" class="hidden" style="display: none">
                Game Over!
                <br />
                <button
                  class="btn btn-danger pull-right"
                  id="reset"
                  v-on:click="resetGame"
                >
                  <span class="glyphicon glyphicon-flash" id="reset"></span>
                  ReStart
                </button>
              </div> -->
              <!-- <span id="message" class="hidden" style="display: none"
                >Game Over!</span
              > -->
              <span id="menu" class="menu">
                <!-- <button
                  class="btn btn-success pull-right"
                  id="start"
                  v-on:click="startGame"
                  style="display: block"
                >
                  <span class="glyphicon glyphicon-play" id="start"></span>
                  Start
                </button> -->
                <!-- <b-button id="start" @click="show = true" variant="primary"
                  >게임 시작하기</b-button
                > -->

                <div
                  id="message"
                  class="hidden"
                  style="display: none; background-color: grey; opacity: 85%"
                >
                  Game Over!
                  <hr />

                  <div class="game-result">
                    <p>Score: {{ score }}</p>
                    <p>Your Highest Score:</p>
                    <p>Ranking:</p>
                  </div>

                  <button
                    class="btn btn-danger pull-right"
                    id="reset"
                    v-on:click="resetGame"
                  >
                    <span class="glyphicon glyphicon-flash" id="reset"></span>
                    ReStart
                  </button>
                </div>

                <!-- disabled -->
              </span>

              <!-- <img src="./background.gif" class="bg" style="object-fit: fill" /> -->
            </div>
          </div>
          <div class="panel-footer">
            <strong>Score: {{ score }}</strong>
            <strong
              >생명 :
              <span v-for="idx in hart" :key="idx">
                <img src="./heart.gif" style="width: 20px" /> </span
            ></strong>
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
// var startButton, resetButton;
var box,
  score,
  hart = 5;

export default {
  name: "Acid_rain",
  data: function () {
    return {
      score: 0,
      hart: "5",
      show: true,
      consonant: "",
    };
  },
  mounted() {
    // document.addEventListener("DOMContentLoaded", this.doTest);
    // message = document.getElementById("message");
    box = document.getElementById("box");
    score = document.getElementById("score");
    hart = this.hart;
  },
  methods: {
    con() {
      this.consonant = "자음";
    },
    col() {
      this.consonant = "모음";
    },
    placeLetter: function () {
      // 12593 ~ 12643
      // var Con = 12593 + Math.floor(Math.random() * 50);
      var Con;
      if (this.consonant === "자음") {
        // console.log(1);
        Con = 12593 + Math.floor(Math.random() * 29);
      } else {
        Con = 12623 + Math.floor(Math.random() * 20);
      }
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
        boxes[i].style.bottom = parseInt(boxes[i].style.bottom) - 50 + "px";
        if (parseInt(boxes[i].style.bottom) <= -10) {
          boxes[i].remove();
          this.hart = parseInt(this.hart) - 1;
          this.decreaseLetterSpeed(hart);
          if (this.hart == 0) {
            this.toggleText();
            this.endGame();
          }
        }
      }
    },

    endGame: function () {
      // this.togglerestart();
      clearInterval(moveLettersTimer);
      clearInterval(placeLetterTimer);
      document.removeEventListener("keydown", this.keyboardInput);
      // message.classList.remove("hidden");
      // resetButton.classList.remove("disabled");
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
    togglestart: function () {
      // var text = document.getElementById("start");
      // text.style.display = "none";
    },
    togglerestart: function () {
      var text = document.getElementById("restart");
      if (text.style.display === "none") {
        text.style.display = "block";
      } else {
        text.style.display = "none";
      }
    },

    resetGame: function () {
      // this.togglerestart();

      this.resetText();

      // message.classList.add("hidden"); // add
      // resetButton.classList.add("disabled");
      // score.innerHTML = 0;
      this.score = 0;
      this.hart = 5;
      console.log(1);
      var boxes = document.querySelectorAll("#quiz");
      for (var i = 0; i < boxes.length; i++) {
        boxes[i].remove();
      }
      console.log(2);
      // console.log(1);
      this.endGame();
      console.log(3);
      this.startGame();
      // console.log(3);
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
        // score.innerHTML = parseInt(score.innerHTML) + 1;
        this.score += 1;
        this.decreaseLetterSpeed(score);
      }
      // else {
      //   score.innerHTML = parseInt(score.innerHTML) - 1;
      // }
    },

    startGame: function () {
      console.log("start");
      this.togglestart();
      // this.resetText();
      this.hart = 5;

      placeLetterTimer = setInterval(this.placeLetter, placeLetterInterval);
      moveLettersTimer = setInterval(this.moveLetters, 100);
      document.addEventListener("keydown", this.keyboardInput);
      // startButton.classList.add("disabled");
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
  /* margin: 10px 10%; */
  /* background-position: center; */
  /* background-size: 100%; */
  height: 600px;
  width: 100%;
  /* background-size: contain; */
  /* height: 100%; */
  /* height: 100vh;
  width: 100%; */
  /* width: 100vh; */
  /* background: grey; */
  background: url("./background.gif");
  background-size: 100% 100%;
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

.modal-dialog {
  position: absolute;
  vertical-align: middle;
  top: 40%;
}
#message {
  position: absolute;
  vertical-align: middle;
  height: 100%;
  box-sizing: border-box;
  font-size: 100px;
  display: block;
  text-align: center;
  position: relative;
  /* font-size: 100px; */
  top: 40%;
  z-index: 10;
  color: rgba(0, 0, 0, 0.6);
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  text-shadow: 2px 2px 3px purple;
}

.panel {
  width: 100%;
  height: 100%;
  max-width: 100%;
  /* margin: auto; */
}

.panel-body {
  width: 100%;
  height: 100%;
  padding: 0;
}

.btn {
  margin-left: 10px;
}

.container {
  width: 70%;
  height: 100%;
}

.acid {
  width: 100%;
  height: 100%;
}
.acid_left {
  float: left;
  width: 70%;
  height: 100%;
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
.menu {
  float: center;
  width: 100%;
  height: 100%;
}
#start {
  left: 45%;
  float: center;
  display: block;
  text-align: center;
  position: relative;
  top: 50%;
  z-index: 80;
}
/* #restart {
  float: center;
  display: block;
  text-align: center;
  position: relative;
  top: 50%;
  z-index: 100;
} */
.game-result {
  height: 200px;
  margin-top: 5%;
}
.game-result > p {
  font-size: 30px;
}
#modalBtn {
  margin: 2%;
  width: 90%;
  height: 90%;
  border-radius: 12px;
}
</style>
