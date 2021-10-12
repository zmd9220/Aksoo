<template>
  <div id="box">
    <!-- 오디오 (정답, 오답, 게임오버) -->
    <audio id="answer" src="@/assets/music/answer/pop.mp3"></audio>
    <audio
      id="wrongAnswer"
      src="@/assets/music/wrongAnswer/Error 2.mp3"
    ></audio>
    <audio id="gameOver" src="@/assets/music/gameover/gameover.mp3"></audio>

    <!-- 게임 오버 모달 -->
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
                />{{ acidRain.rank }}
              </div>
            </span>
            <b-button
              class="mt-3 modal-restart-btn"
              block
              @click="$router.push({ name: 'AcidRainMain' })"
            >
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
                />{{ acidRain.bestScore }}
              </div>
            </span>
            <b-button
              class="mt-3 modal-halloffame-btn"
              block
              @click="$router.push({ name: 'RankingMain', params: { whatgame: 1 } })"
            >
              <span class="halloffame-btn-txt">명예의전당</span></b-button
            >
          </div>
        </div>
      </b-modal>
    </div>

    <!-- 게임 배경 이미지 -->
    <img class="gosm" src="@/assets/right.gif" />
    <img class="lgosm" src="@/assets/left.gif" />
    <img class="ground" src="@/assets/tree-ground.png" />

    <span id="menu" class="menu"> </span>

  </div>
</template>

<script>
import { mapState } from 'vuex'

// 상자 생성 속도, 상자 이동 속도
var placeLetterInterval = 1000;
var placeLetterTimer, moveLettersTimer;
var aiLetterTimer;

var box;

export default {
  name: "AcidRainGame",
  data() {
    return {
      score: 0,
      life: 5,
      show: true,
      showend: true,
      modelLoaded: false,
      minimizeCamera: false,
      per: 0,
      gameIsOver: false,
      count: 0,
    };
  },
  props: {
    consonant: Object,
    mode: Object,
    letter: Object,
  },
  created() {
    // 카메라 켜지는 시간 고려해서 5초후 시작
    setTimeout(this.startGame, 5000);
    // 글 이동 시작
    this.placeLetter();
    this.moveLetters();
  },
  mounted() {
    box = document.getElementById("box");
  },
  methods: {
    // 문자 생성
    placeLetter: function () {
      // 자음 / 모음 구별
      var Con;
      if (this.consonant === "자음") {
        Con = 12593 + Math.floor(Math.random() * 29);
      } else {
        Con = 12623 + Math.floor(Math.random() * 20);
      }
      // 제외
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
      // 떨어지는 단어 속도 증가
      this.count = this.count + 0.4;

      // 단어 생성
      var letters = String.fromCharCode(Con); 

      var newLetter = document.createElement("div");
      newLetter.id = "quiz";
      newLetter.innerHTML = letters;
      newLetter.className = letters;

      // 단어 위치 랜덤 생성
      newLetter.style.left = 5 + Math.random() * 80 + "%";
      newLetter.style.bottom = 400 + Math.random() * 500 + "px";

      box.appendChild(newLetter);
    },
    // 글자 이동
    moveLetters: function () {
      var boxes = document.querySelectorAll("#box > div");
      var wrongAnswer = document.getElementById("wrongAnswer");
      var gameOver = document.getElementById("gameOver");

      for (var i = 0; i < boxes.length; i++) {
        // 글자 이동
        boxes[i].style.bottom = parseInt(boxes[i].style.bottom) - 8 - this.count+ "px";
        // 글자 바닥 도착
        if (parseInt(boxes[i].style.bottom) <= 100) {
          // 틀린 소리
          wrongAnswer.play();
          // 상자 제거
          boxes[i].remove();
          // 생명 -1
          this.$emit("lifeLoss");
          this.life = this.life - 1;
          // 죽었을 경우
          if (this.life == 0) {
            
            // Vuex에 데이터를 보낼때는 오브젝트 형으로 보낼것을 권장 !!!
            this.$store.dispatch('userStore/setScore', { selectGame: 1, score:this.score})
            // 게임 오버 효과음
            gameOver.play();
            // 게임 오버 모달
            this.gameIsOver = true;
            this.endGame();
          }
        }
      }
    },
    // 게임 종료
    endGame: function () {
      // 글자 생성, 이동, 사용자 입력 정지
      clearInterval(moveLettersTimer);
      clearInterval(placeLetterTimer);
      clearInterval(aiLetterTimer);
    },
    // 리셋
    resetGame: function () {
      // 게임 오버 모달 숨기기
      this.gameIsOver = false;
      // 점수, 생명 리셋
      this.score = 0;
      this.life = 5;
      // 나와 있는 모든 글자 제거
      var boxes = document.querySelectorAll("#quiz");
      for (var i = 0; i < boxes.length; i++) {
        boxes[i].remove();
      }

      this.endGame();
    },
    // 지문자 입력 받기
    aiLetter: function () {
      var boxes = document.getElementsByClassName(this.letter);
      // 입력 받은 글자와 같을경우
      if (boxes[0]) {
        // 정답 효과음
        var answer = document.getElementById("answer");
        answer.play();
        // 글자 제거
        boxes[0].remove();
        // 점수 증가
        this.score += 10;
        this.$emit("scoreChange", 10);
      }
    },
    // 게임 시작
    startGame: function () {
      this.life = 5;
      // 글자 생성 시작
      placeLetterTimer = setInterval(this.placeLetter, placeLetterInterval);
      // 글자 이동 시작
      moveLettersTimer = setInterval(this.moveLetters, 100);
      // 입력 시작
      aiLetterTimer = setInterval(this.aiLetter, 10);
    },
  },
  computed: {
    ...mapState('userStore', ['acidRain'])
  },
  destroyed() {
    // 다른 페이지 이동 시 종료 안되는 현상 해결
    this.endGame();
  },
};
</script>

<style scoped>
#box {
  width: 100%;
  height: 100%;
  /* padding: 20px 30px;
  position: relative;
  margin: auto; */
  background-color: #f4f1eb;
  flex: 70%;
  border-radius: 20px;
  /* margin: 2vh 2vh 0 2vh; */
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
  background: linear-gradient(to top, #fff, #dee8f7);
  position: relative;
  overflow: hidden;
  font-family: "Georgia";
  font-size: 55px;
  font-weight: bold;
  color: purple;
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

.figure-container {
  fill: transparent;
  stroke: #fff;
  stroke-width: 4px;
  stroke-linecap: round;
}
.figure-part {
  display: block;
}
.topic-difficulty {
  display: column;
}
.topic-difficulty .topic {
  font-size: 2.5rem;
  font-family: "SDSamliphopangche_Basic";
  color: #fff;
  position: absolute;
  top: 700%;
  left: 59%;
  z-index: 3;
}
.topic-difficulty .difficulty {
  font-size: 1.5rem;
  font-family: "SDSamliphopangche_Basic";
  color: #fff;
  position: absolute;
  top: 820%;
  left: 60%;
  z-index: 3;
}
.wrong-letters-container {
  position: absolute;
  top: 40%;
  right: 20%;
  display: flex;
  flex-direction: row;
  text-align: right;
}
.wrong-letters-container p {
  margin: 0 0 5px;
  padding: 0px 15px;
}
.wrong-letters-container span {
  font-size: 24px;
}
.word {
  display: flex;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
}
/* .word-letters-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  text-align: right;
} */
.word-letters-container #nextstage {
  position: absolute;
  top: 8%;
  left: 70%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  text-align: right;
}

.word-letters-container p {
  margin: 0 0 5px;
}
.word-letters-container span {
  font-size: 24px;
}
.letter-container {
  display: flex;
  justify-content: center;
}
.letter {
  width: 2.75rem;
  height: 2.625rem;
  background: #957457;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 6px;
  font-family: "SDSamliphopangche_Basic";
  font-size: 2rem;
  border: solid 2px #1cb959;
  margin: 3px;
}
.letter-blank {
  width: 2.75rem;
  height: 2.625rem;
  background: #e5d2bd;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 6px;
  font-family: "SDSamliphopangche_Basic";
  font-size: 2rem;
  border: solid 2px #a38468;
  margin: 3px;
}
.keyboard {
  display: column;
}

.keyboard-line {
  display: flex;
  /* margin: auto; */
  justify-content: center;
}

.keyword {
  width: 2.75rem;
  height: 2.625rem;
  margin: 3px;
  color: white;
  background: #957457;
  border-radius: 6px;
  font-family: "SDSamliphopangche_Basic";
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
}
.pressed {
  width: 40px;
  margin: 3px;
  color: white;
  /* background: gray; */
  border-radius: 20%;
  background: #e5d2bd;
  /* transform: scale(1, 2); */
}
.answer {
  width: 40px;
  margin: 3px;
  height: 2.625rem;
  color: white;
  /* background: gray; */
  border-radius: 20%;
  background: #e5d2bd;
  /* transform: scale(1, 2); */
  border: solid #69c995 2px;
}
.wrongAnswer {
  width: 40px;
  height: 2.625rem;
  margin: 3px;
  color: white;
  /* background: gray; */
  border-radius: 20%;
  background: #e5d2bd;
  border: solid #f4775c 2px;
  /* transform: scale(1, 2); */
}

/* 이미지 */
/* .background-img{
  height: 700px;
  width: 100%;
  background: url("./background.gif");
  background-size: 100% 100%;
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
} */

/* .background-img .sky {
  z-index: 2;

  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0px;
  left: 0px;

} */
/* .background-img .sky {
  position: absolute;
  z-index: 0;
  left: 0%;
  top: 10%;
  width: 100%;
  height: 90%;
} */

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
  /* border: solid 0.5vh #76300b; */
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