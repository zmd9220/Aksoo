<template>
  <div class="hangman-row">
    <!-- 효과음 -->
    <audio
      autoplay
      id="gameStart"
      src="@/assets/music/pageMove/Jump High.mp3"
    ></audio>
    <!-- 게임 bgm -->
    <audio
      loop
      id="gameBgm"
      src="@/assets/music/bgm/Doh_De_Oh.mp3"
    ></audio>
    <!-- 게임 화면 -->
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
      <img class="cage" src="@/assets/cage.png" v-bind:style="cage(life)" />
      <div>
        <img
          class="bird"
          v-bind:style="info(life)"
          src="@/assets/WordGuess/bird.png"
        />
      </div>
    </div>
    <!-- 게임 상태창 -->
    <div class="right-status-column">
      <div class="nickname">{{ accounts.nickname }} 님</div>
      <div class="game-status">
        <div class="game-status-li li-start">
          <div>Life</div>
          <div>
            <span v-for="idx in life" :key="idx">
              <img src="@/assets/heart.png" style="width: 40px" />
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
            {{ hangman.bestScore }}
          </div>
        </div>
      </div>
      <div v-if="mode_letter" class="game-mode-cons" @click="modeChange">
        자음
      </div>
      <div v-else class="game-mode-vowel" @click="modeChange">
        모음
      </div>
      <div class="letter">
        <div class="selected-letter">{{ letter }}</div>
        <div class="selected-confidence">정확도 : {{ confidence }}</div>
      </div>
      <!-- 입력 프로그래스 바 -->
      <b-progress
        height="7px"
        :value="count"
        :max="80"
        class="mb-3"
        style="margin-bottom: 0 !important"
      >
      </b-progress>
      <!-- 카메라 -->
      <div class="camera">
        <!-- 로딩처리 -->
        <template v-if="!modelLoaded">
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
import { mapState } from 'vuex'

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
  },
  props: {
    topic: Object,
    diff: Object,
  },
  methods: {
    cameraData: function (payload1, payload2) { // 카메라 데이터
      this.letter = payload1;
      this.confidence = payload2;
    },
    modeChange: function () { //자음모드, 모음모드 처리 함수
      this.mode_letter = 1 - this.mode_letter;
      this.$refs.camera.modeChange();
    },
    input: function (letter) { // 입력값 처리
      this.$refs.game.listener(letter);
    },
    count1: function (cnt) { // 입력하는데 걸리는 시간
      this.count = (cnt / 100) * 100;
    },
    lifeLoss: function () { // 라이프 처리
      this.life--;
    },
    scoreChange: function (payload) { // 점수변경
      this.score = this.score + payload;
      this.answer = true;
    },
    answers: function (answer) { // 정답
      this.answer = answer;
    },
    info: function (life) { // 라이프에따른 bird css
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
    cage: function (life) { // 라이프 0일시 새장 css
      if (life == 0) {
        return { display: "block" };
      }
    },
  },
  created: function () { // 게임 초기 셋팅
    this.life = this.diff.value;
    this.answer = false;
  },
  computed: { // 유저정보 처리
    ...mapState('userStore', ['accounts', 'hangman'])
  },
  mounted() { // bgm 볼륨조절
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
  position: absolute;
  bottom: -20px;
  left: 0px;
}
.hangman-row .game-container .wolf {
  z-index: 3;
  width: 55%;
  position: absolute;
  bottom: -3%;
  left: 2%;
}
.hangman-row .game-container .bird {
  z-index: 3;
  width: 10%;
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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
  height: 9%;
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.hangman-row .right-status-column .letter .selected-confidence {
  font-size: 1.5rem;
  color: #b59e7a;
  font-family: "SDSamliphopangche_Basic";
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
  position: absolute;
  bottom: 80%;
  left: 35%;
  display: none;
  animation-name: cage;
  animation-duration: 1s;
  animation-timing-function: linear;
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