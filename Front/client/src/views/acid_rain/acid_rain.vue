<template>
  <div class="acid">
    <audio id="gameOver" src="@/assets/music/gameover/gameover.mp3"></audio>
    <audio id="click" src="@/assets/music/answer/Correct 2.mp3"></audio>
    <audio id="answer" src="@/assets/music/answer/Correct 1.mp3"></audio>
    <audio
      id="wrongAnswer"
      src="@/assets/music/wrongAnswer/Error 2.mp3"
    ></audio>
    <template v-if="!modelLoaded">
      <loading message="👋 Loading hand detection model..." />
    </template>

    <div v-if="gameIsOver">
      <b-modal
        v-model="showend"
        class="modal-border"
        size="sm"
        id="bv-modal-example"
        hide-footer
        hide-header
        no-close-on-backdrop
      >
        <!-- <b-button
          class="mt-3 modal-close-btn"
          block
          @click="$bvModal.hide('bv-modal-example')"
        >
          <span class="close-btn-txt">닫기</span></b-button
        > -->
        <p class="game-over-text">GAME OVER</p>
        <div class="modal-cardFont">Score</div>
        <div class="modal-score">{{ score }}</div>
        <div class="row">
          <div class="column">
            <div class="modal-rank-cardFont">Rank</div>
            <span>
              <div class="modal-rank-score">
                <img
                  src="@/assets/trophy.png"
                  alt="trophy"
                  class="rank-img"
                />43
              </div>
            </span>
            <b-button class="mt-3 modal-restart-btn" block @click="resetGame">
              <span class="restart-btn-txt">다시하기</span></b-button
            >
          </div>
          <div class="column">
            <div class="modal-hscore-cardFont">Best score</div>
            <span>
              <div class="modal-hscore-score">
                <img
                  src="@/assets/best-badge.png"
                  alt="best-badge"
                  class="best-score-img"
                />2500
              </div>
            </span>
            <b-button class="mt-3 modal-halloffame-btn" block href="#">
              <span class="halloffame-btn-txt">명예의전당</span></b-button
            >
          </div>
        </div>
      </b-modal>
    </div>

    <b-modal
      v-model="show"
      :consonant="Consonant"
      hide-footer
      hide-header
      class="modalBox"
    >
      <b-container fluid>
        <div style="width: 45%; float: left">
          <img class="startImg" src="@/assets/acidStart.png" />
        </div>
        <div style="width: 45%; float: right">
          <div cols="3">자음 모음을 선택해 주세요</div>
          <div cols="3">
            <b-button
              id="modalBtn"
              v-bind:class="{ white: !clicked, blue: clicked }"
              v-on:click="
                [con(), (clicked = !clicked), (clickedCon = false), click()]
              "
              >자음</b-button
            >
          </div>
          <div cols="3">
            <b-button
              id="modalBtn"
              v-bind:class="{ white: !clickedCon, blue: clickedCon }"
              v-on:click="
                [col(), (clickedCon = !clickedCon), (clicked = false), click()]
              "
              >모음</b-button
            >
          </div>
          <div cols="3">
            <div class="w-100">
              <b-button
                id="modalBtn"
                variant="primary"
                size="sm"
                class="float-right"
                @click="[(show = false), startGame(), click()]"
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
    </b-modal>
    <div class="acid_left">
      <title>The Game Formerly Known as Typing</title>
      <!-- <script src="js/game.js"></script> -->
      <!-- <link href="css/style.css" rel="stylesheet"> -->

      <div class="container">
        <div class="panel panel-default">
          <div class="panel-body">
            <div id="box">
              <!-- <img class="ground" src="@/assets/ground.png" /> -->
              <img class="gosm" src="@/assets/right.gif" />
              <img class="lgosm" src="@/assets/left.gif" />
              <img class="ground" src="@/assets/tree-ground.png" />
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
              >Life :
              <span v-for="idx in hart" :key="idx">
                <img src="./heart.gif" style="width: 20px" /> </span
            ></strong>
          </div>
        </div>
        <hr />
      </div>
    </div>
    <div class="acid_right">
      <div class="a">하태린 님</div>
      <!-- <hr /> -->
      <div class="b">
        <strong
          >Life :
          <span v-for="idx in hart" :key="idx">
            <img
              src="@/assets/hart.png"
              style="width: 30px; float: right; margin: 0 8px"
            /> </span
        ></strong>
        <br />
        <br />
        <strong
          > Score:
          <div style="float: right; margin: 0 5%">{{ score }}</div></strong
        >
        <br />
        <br />
        <strong
          >Best Score:
          <div style="float: right; margin: 0 5%">0</div></strong
        >
      </div>
      <div class="c">{{ consonant }}</div>
      <div class="d">
        {{ test }} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ per }}
      </div>
      <!-- <div class="e"> -->
      <camera
        v-show="modelLoaded && !minimizeCamera"
        @on-loaded="modelLoaded = true"
        @on-minimize="minimizeCamera = true"
        :test="test"
        @word="testEmit"
        :mode="mode"
        @per="testPer"
      />
      <!-- </div> -->
    </div>
  </div>
</template>


<script>
import Camera from "@/components/Camera.vue";
import Loading from "@/components/Loading.vue";

var placeLetterInterval = 1000;
var placeLetterTimer, moveLettersTimer;

var aiLetterTimer;
// var startButton, resetButton;
var box,
  score,
  hart = 5;

export default {
  name: "Acid_rain",

  components: {
    // Camera,
    Camera,
    Loading,
  },

  data: function () {
    return {
      score: 0,
      hart: "5",
      show: true,
      consonant: "",
      modelLoaded: false,
      minimizeCamera: false,
      test: "",
      mode: 0,
      per: 0,
      gameIsOver: false,
      clicked: false,
      clickedCon: false,
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
    click() {
      var click = document.getElementById("click");
      click.play();
    },
    con() {
      this.consonant = "자음"; // mode 1
      // Camera.data.mode = 1;
      this.mode = 1;
    },
    col() {
      this.consonant = "모음"; // mode 0
      // Camera.data.mode = 0;
      this.mode = 0;
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
      // for (let i = 12593; i < 12644; i++) {
      //   console.log(i + " : " + consonant[i]);
      // }
      var consonant = [
        12595, 12597, 12598, 12602, 12603, 12604, 12605, 12606, 12607, 12608,
        12612, 12594, 12600, 12611, 12614, 12617, 12632, 12633, 12634, 12637,
        12638, 12639, 12642, 12624, 12626, 12628, 12630,
      ];
      for (var i = 0; i < consonant.length; i++) {
        if (Con == consonant[i]) {
          return;
        }
      }
      var letter = String.fromCharCode(Con); // ㄾ ㅘ ㅢ
      console.log(letter + " " + Con);

      /*
ㅘ 12632
ㅙ 12633
ㅚ 12634
ㅝ 12637
ㅞ 12638
ㅟ 12639
ㅢ 12642
ㅐ 12624
ㅒ 12626
ㅔ 12628
ㅖ 12630

ㄲ 12594
ㄸ 12600
ㅃ 12611
ㅆ 12614
ㅉ 12617
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
      var wrongAnswer = document.getElementById("wrongAnswer");
      var gameOver = document.getElementById("gameOver");

      for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.bottom = parseInt(boxes[i].style.bottom) - 8 + "px";
        if (parseInt(boxes[i].style.bottom) <= -10) {
          boxes[i].remove();
          this.hart = parseInt(this.hart) - 1;
          this.decreaseLetterSpeed(hart);
          if (this.hart == 0) {
            // this.toggleText();
            gameOver.play();
            this.gameIsOver = true;
            this.endGame();
          }
        }
      }
    },

    endGame: function () {
      // this.togglerestart();
      clearInterval(moveLettersTimer);
      clearInterval(placeLetterTimer);
      clearInterval(aiLetterTimer);

      // document.removeEventListener("keydown", this.keyboardInput);
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

      this.gameIsOver = false;
      // this.resetText();

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
    testEmit(test) {
      this.test = test;
    },
    testPer(per) {
      this.per = per;
    },
    aiLetter: function () {
      // console.log(31);

      // console.log(Camera.data.detection.name);
      // var test = Camera.detection.name;
      // this.test = test;
      // console.log(test);
      // console.log(1);

      var boxes = document.getElementsByClassName(this.test);
      // console.log(this.test);

      if (boxes[0]) {
        boxes[0].remove();
        // score.innerHTML = parseInt(score.innerHTML) + 1;
        this.score += 10;
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
      aiLetterTimer = setInterval(this.aiLetter, 10);

      // document.addEventListener("keydown", this.keyboardInput);
      // this.keyboardInput();

      // startButton.classList.add("disabled");
    },

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
.startImg {
  /* width: 39.813rem;
  height: 26rem;
  margin: 0 6rem 0 0; */
  height: 80%;
  width: 100%;
  object-fit: cover;
}
#box {
  height: 700px;
  width: 100%;
  /* background: url("./background.gif"); */
  /* background-size: 100% 100%; */
  background-image: linear-gradient(to top, #dfe9f3, #fff);
  border-radius: 3rem;
  box-shadow: 0.31rem 0.38rem 0.44rem 0rem rgba(0, 0, 0, 0.43);

  overflow: hidden;
  position: relative;
  font-family: "Georgia";
  font-size: 55px;
  font-weight: bold;
  color: purple;
  position: relative;
}

#box > .ground {
  /* background: url("@/assets/ground.png"); */
  /* top: 100%; */
  z-index: 2;
  object-fit: contain;
  width: 100%;
  /* height: 37%; */
  position: absolute;
  bottom: 0px;
  left: 0px;

  /* margin: 44% 0 0 0; */
}

#box > .gosm {
  /* background: url("@/assets/ground.png"); */
  /* top: 100%; */
  z-index: 3;
  object-fit: contain;
  /* width: 100%; */
  height: 12%;
  position: absolute;
  bottom: 0px;
  left: 0px;

  animation-name: gosm;
  animation-duration: 6s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  /* animation-direction: alternate; */
  animation-fill-mode: backwards;
  /* animation-delay: 3s; */

  /* margin: 44% 0 0 0; */
}
@keyframes gosm {
  0% {
    left: 5%;
    bottom: 5%;
    opacity: 1;
    /* transform: scaleX(-1); */
  }
  50% {
    left: 80%;
    bottom: 5%;
    opacity: 1;
    /* transform: scaleX(-1); */
  }
  50.1% {
    opacity: 0;
  }
  100% {
    left: 160%;
    bottom: 5%;
    opacity: 0;
    /* transform: scaleX(-1); */
  }
}

#box > .lgosm {
  /* background: url("@/assets/ground.png"); */
  /* top: 100%; */
  z-index: 3;
  object-fit: contain;
  /* width: 100%; */
  height: 12%;
  position: absolute;
  bottom: 0px;
  left: 0px;

  animation-name: lgosm;
  animation-duration: 6s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  /* animation-direction: alternate; */
  animation-fill-mode: backwards;
  /* animation-delay: 3s; */

  /* margin: 44% 0 0 0; */
}
@keyframes lgosm {
  100% {
    left: 5%;
    bottom: 5%;
    opacity: 1;
    /* transform: scaleX(-1); */
  }
  50% {
    left: 80%;
    bottom: 5%;
    opacity: 1;
    /* transform: scaleX(-1); */
  }
  49.9% {
    opacity: 0;
  }
  0% {
    left: 160%;
    bottom: 5%;
    opacity: 0;
    /* transform: scaleX(-1); */
  }
}

.tree-ground {
  width: 100%;
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
  z-index: 200;
}
.modal-content {
  /* height: 100% !important; */
  border: 0px !important;
}
.modal-body {
  background-color: #f4f1eb;
}
.modal-dialog {
  max-width: 1000px !important;
  /* position: absolute;
  vertical-align: middle;
  top: 40%; */
  width: 75% !important;
  height: 45%;
  top: 25%;
  /* margin: 25% 22%; */
  padding: 1% 2% 1.3% 1%;
  /* object-fit: contain; */
  border-radius: 1.31rem;
  box-shadow: 0rem 0.5rem 1rem 0.06rem rgba(0, 0, 0, 0.43);
  border: solid 0.06rem #a4a4a3;
  background-color: #f4f1eb;

  font-family: SDSamliphopangcheTTFBasic;
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.71;
  letter-spacing: normal;
  text-align: center;
  color: #b59e7a;
}

#message {
  position: absolute;
  /* vertical-align: middle; */
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
  overflow: hidden;
  /* display: flex; */
}
.acid_left {
  float: left;
  width: 70%;
  height: 100%;
}
.acid_right {
  /* box-sizing: inherit; */
  float: right;
  width: 30%;
  height: 100%;
  font-weight: bold;
}
.a {
  /* width: 80%; */
  height: 7%;
  box-shadow: 2px 2px gray;
  border-radius: 2.56rem;
  border-width: 2px;
  /* padding: 10% 0; */
  margin: 0% 2% 6% 2%;
  text-align: center;
  background-color: #f4f1eb;
  padding: 5%;
  font-family: SDSamliphopangche_Basic;
  font-size: 130%;
  color: #917052;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  /* display: table-cell; */
  /* vertical-align: middle; */
}
.b {
  /* width: 80%; */
  height: 20%;
  box-shadow: 2px 2px gray;
  border-radius: 2.56rem;
  border-width: 2px;
  padding: 4% 0;
  margin: 0% 2% 6% 2%;
  text-align: left;
  background-color: #f4f1eb;

  /* float: left; */
}
.b > strong {
  padding: 5%;
  margin: 0%;
  font-family: SDSamliphopangche_Basic;
  font-size: 130%;
  color: #b59e7a;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
}
.b > strong > div {
  color: #917052;
  padding: 0 15%;
  border-radius: 1.06rem;
  float: center;
  text-align: center;
  font-size: 3vh;
  width: 50%;
  box-shadow: 0.19rem 0.19rem 0.13rem 0rem rgba(0, 0, 0, 0.3);
  border: solid 0.19rem #af9b76;
  background-color: #e5d2bd;
}
.c,
.d {
  /* width: 80%; */
  height: 7%;
  box-shadow: 2px 2px gray;
  border-radius: 2.56rem;
  border-width: 2px;
  /* padding: 10% 0; */
  margin: 0% 2% 6% 2%;
  text-align: center;
  background-color: #f4f1eb;
  padding: 4%;
  font-family: SDSamliphopangche_Basic;
  font-size: 120%;
  color: #917052;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
}

.camera {
  width: 80%;
  height: 40%;
  box-shadow: 2px 2px gray;
  border-radius: 30px;
  border-width: 2px;
  /* padding: 10% 0; */
  margin: 2%;
  padding: 3% 2%;
  text-align: center;
  background: #f4f1eb;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
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
  width: 400px;
  height: 50px;
  margin: 4% 0 3%;
  padding: 0.3% 35% 0.3%;
  /* padding: 1.438rem 10.813rem 1.188rem; */
  /* object-fit: contain; */
  border-radius: 2.56rem;
  box-shadow: 0rem 0.31rem 0.25rem 0rem rgba(0, 0, 0, 0.3);
  border: solid 0.19rem #957252;
  background-color: #e5d2bd;
  font-family: SDSamliphopangcheTTFBasic;
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.83;
  letter-spacing: normal;
  text-align: center;
  color: #937356;
}
#modalBtn:active {
  position: relative;
  box-shadow: 0rem 0.15rem 0.12rem 0rem rgba(0, 0, 0, 0.3);
  top: 2px;
}
.camera {
  z-index: 999;
}

.white {
  background-color: #e5d2bd !important;
  color: #937356 !important;
  border: solid 0.19rem #957252 !important;
}
.blue {
  background-color: #937356 !important;
  color: #e5d2bd !important;
  border: solid 0.19rem #e5d2bd !important;
}

/* game-over modal */

.modal-close-btn {
  position: absolute;
  width: 15%;
  height: 15%;
  left: 80%;
  border: none;
  background-color: grey;
  box-shadow: 0rem 0.38vh 0.56rem 0 rgba(0, 0, 0, 0.3);
  object-fit: contain;
  border-radius: 2rem;
}

.close-btn-txt {
  font-family: SDSamliphopangche_Basic;
  font-size: 3.5vh;
}

.game-over-text {
  font-family: SDSamliphopangche_Basic;
  font-size: 6vh;
  margin-bottom: 3%;
  font-weight: bolder;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.63;
  letter-spacing: normal;
  text-shadow: 0rem 0.38rem 0.56rem rgba(0, 0, 0, 0.3);
  text-align: center;
  color: #1e3663;
}

.modal-cardFont {
  color: #b59e7a;
  font-size: 5vh;
  font-family: "SDSamliphopangche_Basic";
  margin-bottom: 0;
  padding: 0;
  margin-top: 1.5vh;
}

.modal-score {
  position: relative;
  left: 27.5%;
  width: 40%;
  height: 6vh;
  background-color: #e5d2bd;
  margin-bottom: 0;
  margin-top: 1%;
  margin-left: 3vh;
  margin-right: 3vh;
  border-radius: 30px;
  border: solid 4px #b49f7b;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
  color: #957457;
  font-family: "SDSamliphopangche_Basic";
  font-size: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}

.rank-img {
  position: absolute;
  left: -11.5%;
  width: 25%;
}

.modal-rank-cardFont {
  color: #b59e7a;
  font-size: 4vh;
  font-family: "SDSamliphopangche_Basic";
  margin-bottom: 0;
  padding: 0;
  margin-top: 1.5vh;
}

.modal-rank-score {
  position: relative;
  left: 20%;
  width: 50%;
  height: 5vh;
  background-color: #e5d2bd;
  margin-bottom: 0;
  margin-top: 0.5%;
  margin-left: 3vh;
  margin-right: 3vh;
  border-radius: 30px;
  border: solid 4px #b49f7b;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
  color: #957457;
  font-family: "SDSamliphopangche_Basic";
  font-size: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}

.best-score-img {
  position: absolute;
  left: -10%;
  width: 25%;
}

.modal-hscore-cardFont {
  color: #b59e7a;
  font-size: 4vh;
  font-family: "SDSamliphopangche_Basic";
  margin-bottom: 0;
  padding: 0;
  margin-top: 1.5vh;
}

.modal-hscore-score {
  position: relative;
  left: 20%;
  width: 50%;
  height: 5vh;
  background-color: #e5d2bd;
  margin-bottom: 0;
  margin-top: 0.5%;
  margin-left: 3vh;
  margin-right: 3vh;
  border-radius: 30px;
  border: solid 4px #b49f7b;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
  color: #957457;
  font-family: "SDSamliphopangche_Basic";
  font-size: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}

.row {
  display: flex;
}

.column {
  flex: 50%;
}



.modal-restart-btn {
  width: 40%;
  height: 40%;
  /* border: solid 0.5vh #76300b; */
  border: none;
  background-color: #fe6e27;
  box-shadow: 0rem 0.38vh 0.56rem 0 rgba(0, 0, 0, 0.3);
  object-fit: contain;
  border-radius: 2rem;
}

.restart-btn-txt {
  font-family: SDSamliphopangche_Basic;
  font-size: 3.5vh;
}

.modal-halloffame-btn {
  width: 40%;
  height: 40%;
  border: none;
  background-color: #68bbf7;
  box-shadow: 0rem 0.38vh 0.56rem 0 rgba(0, 0, 0, 0.3);
  object-fit: contain;
  border-radius: 2rem;
}

.halloffame-btn-txt {
  font-family: SDSamliphopangche_Basic;
  font-size: 3.5vh;
}
</style>
