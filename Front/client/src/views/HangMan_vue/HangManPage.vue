<template>
  <div class="hangman-row">
    <audio
      autoplay
      id="gameStart"
      src="@/assets/music/pageMove/Jump High.mp3"
    ></audio>

    <audio
      loop
      id="gameBgm"
      src="@/assets/music/bgm/Jaunty_Gumption.mp3"
    ></audio>

    <div class="game-container">
      <HangManGame
        ref="game"
        @lifeLoss="lifeLoss"
        @scoreChange="scoreChange"
        @answers="answers"
        :topic="topic"
        :diff="diff"
      />
      <img class="ground" src="@/assets/WordGuess/land-new.png" />
      <!-- <img class="wolf" src="@/assets/WordGuess/wolf-1.png" /> -->
      <img
        class="wolf"
        v-if="answer == true"
        src="@/assets/WordGuess/wolf4.png"
      />
      <img
        class="wolf"
        v-else-if="life != 0"
        src="@/assets/WordGuess/wolf1.png"
      />

      <img
        class="wolf"
        v-else-if="life == 0"
        src="@/assets/WordGuess/wolf3.png"
      />

      <!-- <img v-bind:class="{}" src="@/assets/WordGuess/bird.png" /> -->
      <img class="cage" src="@/assets/cage.png" v-bind:style="cage(life)" />
      <div>
        <img
          class="bird"
          v-bind:style="info(life)"
          src="@/assets/WordGuess/bird.png"
        />
      </div>
    </div>

    <div class="right-status-column">
      <div class="nickname">{{ nickname }} 님</div>
      <div class="game-status">
        <div class="game-status-li li-start">
          <div>Life</div>
          <div>
            <span v-for="idx in life" :key="idx">
              <img src="./heart.png" style="width: 40px" />
            </span>
          </div>
        </div>
        <div class="game-status-li">
          <div>Score</div>
          <div class="game-status-box">
            <span>
              {{ score }}
            </span>
          </div>
        </div>
        <div class="game-status-li li-end">
          <div>Best Score</div>
          <div class="game-status-box">
            {{ best_score }}
          </div>
        </div>
      </div>
      <div v-if="mode_letter" class="game-mode-cons" @click="modeChange">
        자음
        <Progress
          :transitionDuration="5"
          :radius="15"
          :strokeWidth="7"
          :value="this.count"
        >
          <div class="content"></div>
        </Progress>
        <!-- {{ count }} -->
      </div>
      <div v-else class="game-mode-vowel" @click="modeChange">
        모음
        <!-- <Progress :transitionDuration="50" :radius="15" :strokeWidth="7" value="80"/> -->
        <!-- <Progress :transitionDuration="10" :radius="15" :strokeWidth="7" :value="30">
                    <div class="content"></div>
                </Progress> -->
        <!-- {{count}} -->
      </div>
      <!-- <b-progress :value="count" :max="100" class="mb-3"></b-progress> -->

      <div class="letter">
        <div class="selected-letter">{{ letter }}</div>
        <div class="selected-confidence">정확도 : {{ confidence }}</div>
      </div>
      <b-progress
        height="1px"
        :value="count"
        :max="80"
        class="mb-3"
        style="margin-bottom: 0 !important"
      >
      </b-progress>
      <div class="camera">
        <template v-if="!modelLoaded">
          <!-- <img src="./croc.png" style="width: 80px" />  -->
          <loading message="👋 Loading hand detection model..." />
        </template>
        <camera
          v-show="modelLoaded && !minimizeCamera"
          @on-loaded="modelLoaded = true"
          @on-minimize="minimizeCamera = true"
          @word="cameraData"
          @modeChange="modeChange"
          @input="input"
          @count="count1"
          ref="camera"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Camera from "@/components/Camera0.vue";
import Loading from "@/components/Loading.vue";
import HangManGame from "./HangManGame.vue";
// import axios from 'axios';
import Progress from "easy-circular-progress";

export default {
  data() {
    return {
      nickname: "김재민",
      life: 6,
      score: 0,
      words: "",
      best_score: 0,
      mode_letter: 0,
      letter: "",
      confidence: "",
      modelLoaded: false,
      minimizeCamera: false,
      count: 0,
      answer: false,
    };
  },
  name: "HangManPage",
  components: {
    Camera,
    Loading,
    HangManGame,
    Progress,
  },
  props: {
    topic: Object,
    diff: Object,
  },
  methods: {
    cameraData: function (payload1, payload2) {
      this.letter = payload1;
      this.confidence = payload2;
    },
    modeChange: function () {
      this.mode_letter = 1 - this.mode_letter;
      this.$refs.camera.modeChange();
    },
    input: function (letter) {
      this.$refs.game.listener(letter);
    },
    count1: function (cnt) {
      this.count = (cnt / 100) * 100;
    },
    lifeLoss: function () {
      this.life--;
    },
    scoreChange: function (payload) {
      this.score = this.score + payload;
      this.answer = true;
    },
    answers: function (answer) {
      this.answer = answer;
    },
    info: function (life) {
      if (life == 5) {
        return {
          bottom: "30%",
          left: "88%",
        };
      } else if (life == 4) {
        return { bottom: "23.5%", left: "72%" };
      } else if (life == 3) {
        return { bottom: "23%", left: "64%" };
      } else if (life == 2) {
        return { bottom: "15%", left: "50%" };
      } else if (life == 1) {
        return { bottom: "11%", left: "40%" };
      } else {
        return { bottom: "11%", left: "40%" };
      }
    },
    cage: function (life) {
      if (life == 0) {
        return { display: "block" };
      }
    },
  },
  created: function () {
    this.life = this.diff.value;
    this.answer = false;

    // var audio = document.getElementById("gameStart");

    // audio.play();
  },
  computed() {
    // this.count = this.$refs.camera.count/150;
    // console.log(this.$refs.camera.count/150)
  },
  mounted() {
    var gameBgm = document.getElementById("gameBgm");
    gameBgm.volume = 0.3;
    gameBgm.play();
  },
};
</script>

<style scoped>
.hangman-row {
  display: flex;
  width: 100%;
  height: 90vh;
  /* height: 50%; */
  /* margin: 5vh; */
}

.hangman-row .game-container {
  background-color: #f4f1eb;
  flex: 70%;
  border-radius: 20px;
  margin: 2vh 2vh 0 2vh;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
  background: linear-gradient(to top, #fff, #dee8f7);
  position: relative;
  overflow: hidden;
}

.hangman-row .game-container .ground {
  z-index: 2;

  width: 110%;
  /* height: 37%; */
  position: absolute;
  bottom: -20px;
  left: 0px;

  /* margin: 44% 0 0 0; */
}

.hangman-row .game-container .wolf {
  z-index: 3;

  width: 55%;
  /* height: 37%; */
  position: absolute;
  bottom: -3%;
  left: 2%;
}

.hangman-row .game-container .bird {
  z-index: 3;

  width: 10%;
  /* height: 37%; */
  position: absolute;
  bottom: 30%;
  left: 88%;
  display: block;
}

.hangman-row .right-status-column {
  flex: 30%;
  border-radius: 20px;
  margin: 2vh;
}
.hangman-row .right-status-column .nickname {
  width: 100%;
  height: 10%;
  background-color: #f4f1eb;
  margin-bottom: 1.5vh;
  border-radius: 20px;
  border: solid 4px #a4a4a3;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
  color: #917052;
  font-family: "SDSamliphopangche_Basic";
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hangman-row .right-status-column .game-status {
  width: 100%;
  height: 25%;
  background-color: #f4f1eb;
  margin-bottom: 1.5vh;
  border-radius: 20px;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
  font-family: "SDSamliphopangche_Basic";
  font-size: 2rem;
  /* display: row;
    justify-content: space-around; */
}

.hangman-row .right-status-column .game-status .game-status-li {
  display: flex;
  justify-content: space-between;
  margin-left: 2rem;
  margin-right: 2rem;
}

.hangman-row .right-status-column .game-status .li-start {
  margin-top: 1rem;
}
.hangman-row .right-status-column .game-status .li-end {
  margin-bottom: 1rem;
}

.hangman-row .right-status-column .game-status-box {
  width: 10rem;
  height: 2.5rem;
  background-color: #e5d2bd;
  box-shadow: 4px 4px 5px rgba(128, 128, 128, 0.733);
  border-radius: 20px;
  border: 3px solid #957457;
  font-family: "SDSamliphopangche_Basic";
  /* font-size: 1rem; */
  color: #957457;
  display: flex;
  justify-content: center;
  align-self: center;
  line-height: 2.5rem;
  text-align: center;
}

.hangman-row .right-status-column .game-mode-cons {
  width: 100%;
  height: 10%;
  background-color: #f4f1eb;
  margin-bottom: 1.5vh;
  border-radius: 20px;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
  border: solid 4px #fe6f28;
  color: #917052;
  font-family: "SDSamliphopangche_Basic";
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hangman-row .right-status-column .game-mode-vowel {
  width: 100%;
  height: 10%;
  background-color: #f4f1eb;
  margin-bottom: 1.5vh;
  border-radius: 20px;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
  border: solid 4px #86c7f4;
  color: #917052;
  font-family: "SDSamliphopangche_Basic";
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hangman-row .right-status-column .letter {
  width: 100%;
  height: 7%;
  background-color: #f4f1eb;
  margin-bottom: 1.5vh;
  border-radius: 20px;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
  display: flex;
  justify-content: space-around;
}

.hangman-row .right-status-column .letter .selected-letter {
  font-size: 1.5rem;
  color: #957457;
  font-family: "SDSamliphopangche_Basic";
  /* margin-left: 20%; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.hangman-row .right-status-column .letter .selected-confidence {
  font-size: 1.5rem;
  color: #b59e7a;
  font-family: "SDSamliphopangche_Basic";
  /* margin-right: 20%; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.hangman-row .right-status-column .camera {
  width: 100%;
  height: 41%;
  background-color: #f4f1eb;
  border-radius: 20px;
  margin-left: 0;
  overflow: hidden;
  padding-top: 0;
  padding-left: 0;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
}

.percent {
  display: none !important;
}

.cage {
  z-index: 5;

  width: 20%;
  /* height: 37%; */
  position: absolute;
  bottom: 80%;
  left: 35%;
  display: none;
  animation-name: cage;
  animation-duration: 1s;
  animation-timing-function: linear;
  /* animation-iteration-count: infinite; */
  /* animation-direction: alternate; */
  animation-fill-mode: forwards;
}

@keyframes cage {
  100% {
    bottom: 8%;
  }
  0% {
    bottom: 80%;
  }
}
</style>