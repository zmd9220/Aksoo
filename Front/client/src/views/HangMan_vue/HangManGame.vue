<template>
  <div>
    <audio id="answer" src="@/assets/music/answer/Correct 1.mp3"></audio>
    <audio
      id="wrongAnswer"
      src="@/assets/music/wrongAnswer/Error 2.mp3"
    ></audio>
    <!-- <b-button @click="show = true" variant="primary">게임 시작하기</b-button> -->

    <!-- <b-modal
      v-model="show"
      title="주제와 난이도를 선택해주세요"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-bg-variant="footerBgVariant"
      :footer-text-variant="footerTextVariant"
      :difficulty="Difficulty"
      :topic="Topic"
    >
      <b-container fluid>
        <b-row>
          <b-col cols="3">주제</b-col>
          <b-col cols="6">
            <b-form-select v-model="Topic" :options="topic"></b-form-select>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="3">난이도</b-col>
          <b-col>
            <b-form-select v-model="Difficulty" :options="difficulty">
            </b-form-select>
          </b-col>
        </b-row>
      </b-container> -->

    <!-- <template #modal-footer>
        <div class="w-100">
          <b-button
            variant="primary"
            size="sm"
            class="float-right"
            @click="[(show = false), startGame()]"
          >
            GO!
          </b-button>
        </div>
      </template>
    </b-modal> -->

    <!-- <div id="message" class="hidden" style="display: none; background-color: grey; opacity: 90%;">
      Game Over!
      <hr />

      <div class="game-result">
        <p>Score: {{ score }}</p>
        <p>Your Highest Score:</p>
        <p>Ranking:</p>
      </div>

      <button class="btn btn-danger pull-right" id="reset" v-on:click="goMain">
        <span class="glyphicon glyphicon-flash" id="reset"></span>
        ReStart
      </button>
      <button class="btn btn-success pull-right" id="reset">
        <span class="glyphicon glyphicon-flash" id="reset"></span>
        명예의 전당
      </button>
    </div> -->

    <div v-if="gameIsOver">
      <b-modal  v-model="showend"  class="modal-border" size="sm"
       id="bv-modal-example" hide-footer hide-header no-close-on-backdrop>
        <b-button class="mt-3 modal-close-btn" block @click="$bvModal.hide('bv-modal-example')">
              <span class="close-btn-txt">닫기</span></b-button>
        <p class="game-over-text">GAME OVER</p>
        <div class="modal-cardFont">Score</div>
        <div class="modal-score">{{score}}</div>
        <div class="row">
          <div class="column">
            <div class="modal-rank-cardFont">Rank</div>
            <span>
              <div class="modal-rank-score">
                <img src="@/assets/trophy.png" alt="trophy" class="rank-img">43
              </div>
            </span> 
            <b-button class="mt-3 modal-restart-btn" block @click="resetGame">
              <span class="restart-btn-txt">다시하기</span></b-button>
          </div>
          <div class="column">
            <div class="modal-hscore-cardFont">Best score</div>
            <span>
              <div class="modal-hscore-score">
                <img src="@/assets/best-badge.png" alt="best-badge" class="best-score-img">2500</div>
            </span>
            <b-button class="mt-3 modal-halloffame-btn" block >
              <span class="halloffame-btn-txt">명예의전당</span></b-button>
          </div>
        </div>
      </b-modal>
    </div>

    <div class="game-container">
      <div class="topic-difficulty" id="options">
        <div class="topic">
          {{ this.$route.params.topic.text }}
        </div>
        <div class="difficulty">
          {{ this.$route.params.diff.text }}
        </div>
      </div>
    </div>

    <div class="letter-container">
      <div v-for="(letter, index) in selected" :key="index">
        <!-- <div class="letter">
          <div v-if="correct.includes(letter)">
            {{ letter }}
          </div>  
        </div> -->
        <div class="letter" v-if="correct.includes(letter)">
          {{ letter }}
        </div>
        <div class="letter-blank" v-else></div>
      </div>
    </div>
    <br />
    <!-- <br/> -->
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
      <!-- <br />
      <div class="keyboard-line">
        <div
          class="keyword"
          v-for="letter in words3"
          v-bind:key="letter"
          :class="keyboardClick(letter)"
        >
          {{ letter }}
        </div>
      </div> -->
    </div>

    <div class="wrong-letters-container"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HangManGame",
  data() {
    return {
      wrongs: [],
      words: [],
      correct: [],
      selected: "",
      online: false,
      countError: 0,
      life: 3,
      countCorrect: 0,
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
      gameIsOver: false,
    };
  },
  props: {
    topic: Object,
    diff: Object,
  },
  methods: {
    listener(letter) {
      var answer = document.getElementById("answer");
      var wrongAnswer = document.getElementById("wrongAnswer");
      // if (!this.online) {
      //   this.startGame();
      // }
      // this.usedLetters.includes(letter);
      if (this.online) {
        this.usedLetters.push(letter);
        //Include letter
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
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    goMain() {
      this.$router.push({ name: "HangManMain" });
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
    startGame() {
      // this.resetKeyboard();
      // document.addEventListener("keydown", this.listener);
      //Initial game
      this.online = true;
      //Select word
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
    toggleText: function () {
      this.gameIsOver = true;
      var text = document.getElementById("message");
      if (text.style.display === "none") {
        text.style.display = "block";
      } else {
        text.style.display = "none";
      }
      // var textwin = document.getElementById("messagewin");
      // if (textwin.style.display === "none") {
      //   textwin.style.display = "block";
      // } else {
      //   textwin.style.display = "none";
      // }
    },
    keyboardClick(letter) {
      if (this.wrongs.includes(letter)) {
        return {
          // answer: true,
          wrongAnswer: true,
        };
      } else if (this.usedLetters.includes(letter)) {
        return {
          answer: true,
        };
      }

      // let flag = false;
      // for (let i = 0; i < this.wrongs.size; i++) {
      //   if (letter === this.wrongs[i]) {
      //     flag = true;
      //     break;
      //   }
      // }
      // if (this.usedLetters.includes(letter) && !flag) {
      //   return {
      //     // answer: true,
      //     wrongAnswer: true,
      //   };
      // } else if (this.usedLetters.includes(letter) && flag) {
      //   return {
      //     answer: true,
      //   };
      // }

      //wrongs
      // console.log(letter);
      // if (this.usedLetters.includes(letter)) {
      //   // console.log(1);
      //   return {
      //     pressed: true,
      //   };
      // }
    },
    resetGame: function () {
      // document.querySelector("keyword").classList.remove("pressed");
      // this.togglerestart();
      // this.online = true;
      //Select word
      this.gameIsOver = false;
      this.selected = this.words[Math.floor(Math.random() * this.words.length)];
      // message.classList.add("hidden"); // add
      // resetButton.classList.add("disabled");

      this.countError = 0;
      this.correct = [];
      this.wrongs = [];
      this.score = 0;

      // var boxes = document.querySelectorAll("#quiz");
      // for (var i = 0; i < boxes.length; i++) {
      //   boxes[i].remove();
      // }
      // console.log(1);
      // this.endGame();
      // console.log(2);
      // this.startGame();
      // console.log(3);
    },
    updateWrongs() {
      this.countError++;
      this.$emit("lifeLoss");
      if (this.countError === this.life) {
        // this.toggleText();
        this.gameIsOver=true;
        // this.online = false;
        // var modal = document.getElementById("gameovermodal");
        // if (this.gameover === false) {
        //   this.gameover = true;
        // }
        // this.showModal;
        this.usedLetters = [];
        // alert("You lost :( ");
        // this.resetGame();
        // document.removeEventListener("keydown", this.listener);
      }
    },
    updateCorrect(letter) {
      let aux = 0;

      //count letter in array
      for (let i = 0; i < this.selected.length; i++) {
        if (this.selected[i] === letter) {
          var flag = false;
          for (let j = 0; j < this.answer.length; j++) {
            // console.log(this.answer[j]);
            if (this.answer[j] === letter) {
              flag = true;
              break;
            }
          }
          if (flag == false) {
            // console.log(aux);
            aux++;
            // flag = true;
          }
        }
      }

      if (flag == false) {
        this.answer.push(letter);
      }
      // console.log(aux);
      this.countCorrect += aux;
      // console.log(this.countCorrect);

      if (this.countCorrect === this.selected.length) {
        this.score += 10;
        this.$emit("scoreChange", 10);

        // alert("정답입니다 :) ");
        // setTimeout(function(){ alert("Hello").close }, 3000);

        this.online = false;
        var nextstage = document.getElementById("nextstage");
        if (nextstage.style.display === "none") {
          nextstage.style.display = "block";
        }
        //Select word
        // this.selected =
        //   this.words[Math.floor(Math.random() * this.words.length)];

        // this.countError = 0;
        // this.correct = [];
        // this.wrongs = [];
        // this.countCorrect = 0;
        // this.answer = [];
        // this.usedLetters = [];

        // this.startGame()
        // document.removeEventListener("keydown", this.listener);
      }
    },
    nextWord() {
      this.selected = this.words[Math.floor(Math.random() * this.words.length)];
      // message.classList.add("hidden"); // add
      // resetButton.classList.add("disabled");
      this.$emit("answers", false);

      this.countError = 0;
      this.correct = [];
      this.wrongs = [];
      this.online = true;
      // this.aux = 0
      this.countCorrect = 0;
      this.answer = [];
      this.usedLetters = [];
      var nextstage = document.getElementById("nextstage");
      if (nextstage.style.display === "block") {
        nextstage.style.display = "none";
      }
    },
    // showModal() {
    // let element = this.$refs.gameovermodal.$el
    // element.modal('show')
    // },
    // resetKeyboard() {
    //   console.log(1);
    //   for (let i = 0; i < this.words1.length; i++) {
    //     console.log(this.words1[i]);
    //     // if (this.usedLetters.includes(this.words1[i])) {
    //     console.log(5);
    //     return {
    //       pressed: false,
    //     };
    //     // }
    //   }
    //   console.log(3);
    // },
    getWords: function () {
      // 상품정보를 받아오는 axios
      const localURL =
        "http://127.0.0.1:8000/games/hangman/" + this.topic.value;
      axios
        .get(localURL)
        .then((res) => {
          // for (var key1 in res.data){
          //   console.log(key1);
          // }
          res.data.forEach((element) => {
            this.words.push(element.word);
          });
        })
        .then(() => {
          this.resetGame;
          this.startGame();
        })
        .catch(() => {
          // console.log(err)
        });
    },
  },
  created() {
    // document.onkeydown = (evt) => {
    //   evt = evt || window.event;
    //   this.listener(evt);
    // };
    this.life = this.diff.value;
    this.getWords();
  },
  mounted() {},
  destroyed() {
    // console.log(1);
    // document.removeEventListener("keydown", this.listener);
  },
};
</script>

<style scoped>
.game-container {
  padding: 20px 30px;
  position: relative;
  margin: auto;
  /* height: 300px;
  width: 450px; */
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
  box-shadow: 0.00rem 0.38vh 0.56rem 0 rgba(0, 0, 0, 0.3);
  object-fit: contain;
  border-radius: 2.00rem;
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
  text-shadow: 0.00rem 0.38rem 0.56rem rgba(0, 0, 0, 0.3);
  text-align: center;
  color: #1e3663;
}

.modal-cardFont {
  color: #b59e7a;
  font-size: 5vh;
  font-family: 'SDSamliphopangche_Basic';
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
  font-family: 'SDSamliphopangche_Basic';
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
  font-family: 'SDSamliphopangche_Basic';
  margin-bottom: 0;  
  padding: 0;
  margin-top: 1.5vh;
}

.modal-rank-score {
  position: relative;
  left: 20%;
  width: 50%;
  height:5vh;
  background-color: #e5d2bd;
  margin-bottom: 0;
  margin-top: 0.5%;
  margin-left: 3vh;
  margin-right: 3vh;
  border-radius: 30px;
  border: solid 4px #b49f7b;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
  color: #957457;
  font-family: 'SDSamliphopangche_Basic';
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
  font-family: 'SDSamliphopangche_Basic';
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
  font-family: 'SDSamliphopangche_Basic';
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
  box-shadow: 0.00rem 0.38vh 0.56rem 0 rgba(0, 0, 0, 0.3);
  object-fit: contain;
  border-radius: 2.00rem;
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
  box-shadow: 0.00rem 0.38vh 0.56rem 0 rgba(0, 0, 0, 0.3);
  object-fit: contain;
  border-radius: 2.00rem;
}

.halloffame-btn-txt {
  font-family: SDSamliphopangche_Basic;
  font-size: 3.5vh;
}

</style>