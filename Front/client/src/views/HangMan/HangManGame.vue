<template>
  <div>
    <!-- 효과음 -->
    <audio id="answer" src="@/assets/music/answer/Correct 1.mp3"></audio>
    <audio
      id="wrongAnswer"
      src="@/assets/music/wrongAnswer/Error 2.mp3"
    ></audio>
    <audio id="gameOver" src="@/assets/music/gameover/gameover.mp3"></audio>
    <!-- 게임오버 모달 -->
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
                />{{ hangman.rank }}
              </div>
            </span>
            <b-button class="mt-3 modal-restart-btn" block @click="$router.push({ name: 'HangManMain'})">
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
                />{{ hangman.bestScore }}
              </div>
            </span>
            <b-button class="mt-3 modal-halloffame-btn" block @click="$router.push({ name: 'RankingMain', params: { whatgame: 3 } })">
              <span class="halloffame-btn-txt">명예의전당</span></b-button
            >
          </div>
        </div>
      </b-modal>
    </div>

    <div class="game-container">
      <img :src='"@/assets/WordGuess/board/"+ board_topic + "-" + board_diff +".png"' alt="land" class="board">
    </div>
    <!-- letter 표시창 -->
    <div class="letter-container">
      <div v-for="(letter, index) in selected" :key="index">
        <div class="letter" v-if="correct.includes(letter)">
          {{ letter }}
        </div>
        <div class="letter-blank" v-else></div>
      </div>
    </div>
    <br />
    <div class="word-letters-container">
      <button
        id="nextstage"
        style="padding: 0; border: none; background: none; display: none"
        v-on:click="nextWord"
      >
        <b-icon
          icon="arrow-right-short"
          animation="cylon"
          font-scale="3"
        ></b-icon>
      </button>
    </div>
    <!-- 키보드 -->
    <div class="keyboard">
      <div class="keyboard-line">
        <div
          class="keyword"
          v-for="letter in words1"
          v-bind:key="letter"
          :class="keyboardClick(letter)"
        >
          {{ letter }}
        </div>
      </div>
      <br />
      <div class="keyboard-line">
        <div
          class="keyword"
          v-for="letter in words2"
          v-bind:key="letter"
          :class="keyboardClick(letter)"
        >
          {{ letter }}
        </div>
      </div>
    </div>

    <div class="wrong-letters-container"></div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from 'vuex'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: "HangManGame",
  data() {
    return {
      board_topic: '', // 주제
      board_diff: '', // 난이도
      wrongs: [],
      words: [],
      correct: [],
      selected: "",
      online: false,
      countError: 0,
      life: 3, //목숨
      countCorrect: 0, // 맞은갯수
      enter: "",
      answer: [],
      showend: true,
      variants: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "info",
        "light",
        "dark",
      ],
      headerBgVariant: "info",
      headerTextVariant: "dark",
      bodyBgVariant: "light",
      bodyTextVariant: "dark",
      footerBgVariant: "light",
      footerTextVariant: "dark",
      words1: [
        "ㄱ",
        "ㄴ",
        "ㄷ",
        "ㄹ",
        "ㅁ",
        "ㅂ",
        "ㅅ",
        "ㅇ",
        "ㅈ",
        "ㅊ",
        "ㅋ",
        "ㅌ",
        "ㅍ",
        "ㅎ",
      ],
      words2: ["ㅏ", "ㅑ", "ㅓ", "ㅕ", "ㅗ", "ㅛ", "ㅜ", "ㅠ", "ㅣ", "ㅡ"],
      words3: [],
      usedLetters: [],
      score: 0,
      bestScore: 0,
      rank: 0,
      gameIsOver: false, // 게임오버 체크
    };
  },
  props: {
    topic: Object, // router params 받기
    diff: Object,
  },
  methods: {
    listener(letter) { // 입력을 받아서 정답과 비교하여 분류
      var answer = document.getElementById("answer");
      var wrongAnswer = document.getElementById("wrongAnswer");
      if (this.online) {
        this.usedLetters.push(letter);
        if (this.selected.includes(letter)) {
          this.correct.push(letter);
          this.updateCorrect(letter);
          answer.play();
        } else {
          if (!this.wrongs.includes(letter)) {
            this.wrongs.push(letter);

            this.updateWrongs();
            wrongAnswer.play();
          }
        }
      }
    },
    checkFormValidity() { //유효성 검증
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    goMain() { //라우팅
      this.$router.push({ name: "HangManMain" });
    },
    resetModal() { // 리셋
      this.name = "";
      this.nameState = null;
    },
    handleOk(bvModalEvt) { //모달 이벤트 막기
      bvModalEvt.preventDefault();
      this.handleSubmit();
    },
    handleSubmit() { // 유효성 통과가안되면 분기처리
      if (!this.checkFormValidity()) {
        return;
      }
      this.submittedNames.push(this.name);
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
    startGame() { // 게임스타트 함수
      this.online = true;
      this.selected = this.words[Math.floor(Math.random() * this.words.length)];
      this.correct = [];
      this.wrongs = [];
      this.score = 0;
      this.usedLetters = [];

      var option = document.getElementById("options");
      if (option.style.display === "none") {
        option.style.display = "block";
      }
    },
    keyboardClick(letter) { //정답체크
      if (this.wrongs.includes(letter)) {
        return {
          wrongAnswer: true,
        };
      } else if (this.usedLetters.includes(letter)) {
        return {
          answer: true,
        };
      }
    },
    resetGame: function () { // 게임 재시작 시 데이터 리셋
      this.gameIsOver = false;
      this.selected = this.words[Math.floor(Math.random() * this.words.length)];
      this.countError = 0;
      this.correct = [];
      this.wrongs = [];
      this.score = 0;
    },
    gameOver() { // 게임오버시 상태 변경
      this.gameIsOver = true;
    },

    updateWrongs() { // 틀린문자 처리
      this.countError++;
      this.$emit("lifeLoss");
      if (this.countError === this.life) {
        var gameOver = document.getElementById("gameOver");
        gameOver.play();
        // 데이터 처리하는 함수
        // Vuex에 데이터를 보낼때는 오브젝트 형으로 보낼것을 권장 !!!
        this.$store.dispatch('userStore/setScore', { selectGame: 3, score:this.score})
        setTimeout(this.gameOver, 1000);
        this.usedLetters = [];
      }
    },
    updateCorrect(letter) { // 정답문자 처리
      let aux = 0;

      for (let i = 0; i < this.selected.length; i++) {
        if (this.selected[i] === letter) {
          var flag = false;
          for (let j = 0; j < this.answer.length; j++) {
            if (this.answer[j] === letter) {
              flag = true;
              break;
            }
          }
          if (flag == false) {
            aux++;
          }
        }
      }

      if (flag == false) {
        this.answer.push(letter);
      }
      this.countCorrect += aux;
      if (this.countCorrect === this.selected.length) {
        this.score += 100;
        this.$emit("scoreChange", 100); // 정답시 100점 추가
        this.online = false;
        var nextstage = document.getElementById("nextstage");
        if (nextstage.style.display === "none") {
          nextstage.style.display = "block";
        }
      }
    },
    nextWord() { // 한판끝나고 새판시 새로 단어 받기
      this.selected = this.words[Math.floor(Math.random() * this.words.length)];
      this.$emit("answers", false);
      this.correct = [];
      this.wrongs = [];
      this.online = true;
      this.countCorrect = 0;
      this.answer = [];
      this.usedLetters = [];
      var nextstage = document.getElementById("nextstage");
      if (nextstage.style.display === "block") {
        nextstage.style.display = "none";
      }
    },
    getWords: function () {
      // 단어를 받아오는 axios
      const localURL =
        SERVER_URL + "/games/hangman/" + this.topic.value;
      axios
        .get(localURL)
        .then((res) => {
          res.data.forEach((element) => {
            this.words.push(element.word);
          });
        })
        .then(() => {
          this.resetGame;
          this.startGame();
        })
        .catch(() => {
        });
    },
  },
  created() { // 게임을 위한 초기 값 셋팅
    this.life = this.diff.value;
    this.board_topic = this.$route.params.topic.text;
    this.board_diff = this.$route.params.diff.text;
    this.getWords();
  },
  computed: { // 유저 정보 추적
    ...mapState('userStore', ['accounts', 'hangman'])
  },
};
</script>

<style scoped>
.game-container {
  padding: 20px 30px;
  position: relative;
  margin: auto;
}
#message {
  display: block;
  text-align: center;
  position: relative;
  font-size: 50px;
  top: 40%;
  z-index: 10;
  color: rgba(0, 0, 0, 0.6);
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  text-shadow: 2px 2px 3px purple;
}
#messagewin {
  display: block;
  text-align: center;
  position: relative;
  font-size: 50px;
  top: 40%;
  z-index: 10;
  color: rgba(0, 0, 0, 0.6);
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  text-shadow: 2px 2px 3px purple;
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
.board {
  position: absolute;
  top: 50vh;
  left: 59%;
  height: 20vh;
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
  border-radius: 20%;
  background: #e5d2bd;
}
.answer {
  width: 40px;
  margin: 3px;
  height: 2.625rem;
  color: white;
  border-radius: 20%;
  background: #e5d2bd;
  border: solid #69c995 2px;
}
.wrongAnswer {
  width: 40px;
  height: 2.625rem;
  margin: 3px;
  color: white;
  border-radius: 20%;
  background: #e5d2bd;
  border: solid #f4775c 2px;
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