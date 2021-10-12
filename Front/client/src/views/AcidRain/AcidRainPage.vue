<template>
  <div class="acid">
    <!-- 오디오 (정답, 오답, 버튼 클릭, BGM) -->
    <audio
      loop
      id="gameBgm"
      src="@/assets/music/bgm/Jaunty_Gumption.mp3"
    ></audio>
    <audio id="gameOver" src="@/assets/music/gameover/gameover.mp3"></audio>
    <audio id="click" src="@/assets/music/answer/Correct 2.mp3"></audio>
    <audio id="answer" src="@/assets/music/answer/pop.mp3"></audio>
    <audio
      id="wrongAnswer"
      src="@/assets/music/wrongAnswer/Error 2.mp3"
    ></audio>

    <!-- 게임 박스 -->
    <div class="game-container">
      <AcidRainGame
        ref="game"
        @lifeLoss="lifeLoss"
        @scoreChange="scoreChange"
        @answers="answers"
        :consonant="consonant"
        :mode="mode"
        :confidence="confidence"
        :letter="letter"
      />
    </div>
    <!-- 점수 박스 -->
    <div class="right-status-column">
      <div class="nickname">{{ accounts.nickname }} 님</div>
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
            {{ acidRain.bestScore }}
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
      </div>
      <div v-else class="game-mode-vowel">
        {{ consonant }}
      </div>

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
      <!-- 카메라 -->
      <div class="camera">
        <!-- 로딩 -->
        <template v-if="!modelLoaded">
          <loading message="👋 Loading hand detection model..." />
        </template>
        <!-- 카메라 -->
        <camera
          v-show="modelLoaded && !minimizeCamera"
          @on-loaded="modelLoaded = true"
          @on-minimize="minimizeCamera = true"
          @word="cameraData"
          :mode="mode"
          @count="count1"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Camera from "@/components/Camera1.vue";
import Loading from "@/components/Loading.vue";
import AcidRainGame from "./AcidRainGame.vue";

export default {
  name: "Acid_rain",

  components: {
    AcidRainGame,
    Camera,
    Loading,
  },

  data: function () {
    return {
      nickname: "하태린",
      score: 0,
      life: 5,
      show: true,
      showend: true,
      modelLoaded: false,
      minimizeCamera: false,
      gameIsOver: false,
      letter: "",
      count: 0,
      confidence: "",
    };
  },
  props: {
    consonant: Object,
    mode: Object,
  },

  methods: {
    // 카메라 데이터(인식된 글자, 인식된 퍼센트) 받아오기
    cameraData: function (payload1, payload2) {
      this.letter = payload1;
      this.confidence = payload2;
    },
    // 입력 받은 글자 게임 전달
    input: function (letter) {
      this.$refs.game.listener(letter);
    },
    // 생명 감소
    lifeLoss: function () {
      this.life--;
    },
    // 보여지는 점수 변경
    scoreChange: function (payload) {
      this.score = this.score + payload;
      this.answer = true;
    },
  },
  created() {
    this.endGame();
  },
  destroyed() {
    this.endGame();
  },
  mounted: function () {
    // 게임 BGM 소리 감소
    var gameBgm = document.getElementById("gameBgm");
    gameBgm.volume = 0.1;
    gameBgm.play();
  },
  computed: {
    ...mapState('userStore', ['accounts', 'acidRain'])
  },
};
</script>


<style>
.startImg {
  height: 80%;
  width: 100%;
  object-fit: cover;
}
.acid .game-container {
  background-color: #f4f1eb;
  flex: 70%;
  border-radius: 20px;
  margin: 2vh 2vh 0 2vh;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
  position: relative;
  overflow: hidden;
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
  border: 0px !important;
}
.modal-body {
  background-color: #f4f1eb;
}
.modal-dialog {
  max-width: 1000px !important;
  width: 75% !important;
  height: 45%;
  top: 25%;
  padding: 1% 2% 1.3% 1%;
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
  display: flex;
  width: 100%;
  height: 90vh;
}

.right-status-column {
  flex: 30%;
  border-radius: 20px;
  margin: 2vh;
}

.right-status-column .nickname {
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

.right-status-column .game-status {
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

.right-status-column .game-status .game-status-li {
  display: flex;
  justify-content: space-between;
  margin-left: 2rem;
  margin-right: 2rem;
}

.right-status-column .game-status .li-start {
  margin-top: 1rem;
}
.right-status-column .game-status .li-end {
  margin-bottom: 1rem;
}

.right-status-column .game-status-box {
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

.right-status-column .game-mode-cons {
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

.right-status-column .game-mode-vowel {
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

.right-status-column .letter {
  width: 100%;
  height: 9.5%;
  background-color: #f4f1eb;
  margin-bottom: 1.5vh;
  border-radius: 20px;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
  display: flex;
  justify-content: space-around;
}

.right-status-column .letter .selected-letter {
  font-size: 1.5rem;
  color: #957457;
  font-family: "SDSamliphopangche_Basic";
  /* margin-left: 20%; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.right-status-column .letter .selected-confidence {
  font-size: 1.5rem;
  color: #b59e7a;
  font-family: "SDSamliphopangche_Basic";
  /* margin-right: 20%; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.right-status-column .camera {
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
  border: none;
  background-color: #fe6e27;
  box-shadow: 0rem 0.38vh 0.56rem 0 rgba(0, 0, 0, 0.3);
  object-fit: contain;
  border-radius: 2rem;
}

.modal-restart-btn {
  width: 40%;
  height: 40%;
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
