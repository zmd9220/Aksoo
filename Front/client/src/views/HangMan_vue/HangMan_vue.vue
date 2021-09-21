<template>
  <div>
    <h1>Hangman game</h1>
    <p>Find the hidden word - Enter a letter</p>
    <b-button @click="show = true" variant="primary">게임 시작하기</b-button>

    <b-modal
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
      </b-container>

      <template #modal-footer>
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
    </b-modal>

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

    <div class="game-container">
      <svg height="250" width="200" class="figure-container">
        <!-- Rod -->
        <line x1="60" y1="20" x2="140" y2="20" />
        <line x1="140" y1="20" x2="140" y2="50" />
        <line x1="60" y1="20" x2="60" y2="230" />
        <line x1="20" y1="230" x2="100" y2="230" />

        <!-- Head -->
        <circle
          cx="140"
          cy="70"
          r="20"
          class="figure-part"
          v-if="this.countError > 0"
        />
        <!-- Body -->
        <line
          x1="140"
          y1="90"
          x2="140"
          y2="150"
          class="figure-part"
          v-if="this.countError > 1"
        />
        <!-- Arms -->
        <line
          x1="140"
          y1="120"
          x2="120"
          y2="100"
          class="figure-part"
          v-if="this.countError > 2"
        />
        <line
          x1="140"
          y1="120"
          x2="160"
          y2="100"
          class="figure-part"
          v-if="this.countError > 3"
        />
        <!-- Legs -->
        <line
          x1="140"
          y1="150"
          x2="120"
          y2="180"
          class="figure-part"
          v-if="this.countError > 4"
        />
        <line
          x1="140"
          y1="150"
          x2="160"
          y2="180"
          class="figure-part"
          v-if="this.countError > 5"
        />
      </svg>
    </div>

    <div class="word-letters-container">
      <div v-for="(letter, index) in selected" :key="index">
        <span class="letter">
          <div v-if="correct.includes(letter)">
            {{ letter }}
          </div>
        </span>
      </div>
      <button
        id="nextstage"
        style="padding: 0; border: none; background: none; display: none"
        v-on:click="nextWord"
        v-
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
      <button
        class="keyword"
        v-for="letter in words1"
        v-bind:key="letter"
        :class="keyboardClick(letter)"
      >
        {{ letter }}
      </button>
      <br />
      <button
        class="keyword"
        v-for="letter in words2"
        v-bind:key="letter"
        :class="keyboardClick(letter)"
      >
        {{ letter }}
      </button>
      <br />
      <button
        class="keyword"
        v-for="letter in words3"
        v-bind:key="letter"
        :class="keyboardClick(letter)"
      >
        {{ letter }}
      </button>
    </div>

    <div class="wrong-letters-container">
      <p>Wrongs:</p>
      <div id="wrong-letters" v-for="(wrong, index) in wrongs" :key="index">
        {{ wrong }},
      </div>

      <p>hart:</p>
      <div>{{ 6 - countError }},</div>

      <p>score:</p>
      <div>{{ score }}</div>
    </div>

    <div class="topic-difficulty" id="options" style="display: none">
      <!-- <p v-show="`${difficulty}` === '하'"> {{ difficulty }}</p> -->
      <p>Difficulty : {{ difficulty }}, Topic : {{ topic }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wrongs: [],
      words: [
        "ㅂㅏㄴㅏㄴㅏ",
        "ㅇㅏㄴㅂㅕㅇㅈㅣㄴ",
        "ㅇㅠㄱㅅㅡㅇㅈㅜㄴ",
        "ㅎㅏㅌㅐㄹㅣㄴ",
      ],
      correct: [],
      selected: "",
      online: false,
      oportunities: 6,
      countError: 0,
      countCorrect: 0,
      enter: "",
      answer: [],
      show: false,
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
      difficulty: ["하", "중", "상"],
      topic: ["음식", "동물", "스포츠"],
      words1: [
        "ㄱ",
        "ㄴ",
        "ㄷ",
        "ㄹ",
        "ㅁ",
        "ㅂ",
        "ㅏ",
        "ㅑ",
        "ㅓ",
        "ㅕ",
        "ㅗ",
        "ㅛ",
        "ㅜ",
        "ㅠ",
      ],
      words2: [
        "ㅅ",
        "ㅇ",
        "ㅈ",
        "ㅊ",
        "ㅋ",
        "ㅌ",
        "ㅍ",
        "ㅣ",
        "ㅐ",
        "ㅒ",
        "ㅔ",
        "ㅖ",
        "ㅚ",
        "ㅟ",
      ],
      words3: [
        "ㅎ",
        "ㄲ",
        "ㄸ",
        "ㅃ",
        "ㅆ",
        "ㅉ",
        "ㅡ",
        "ㅚ",
        "ㅙ",
        "ㅝ",
        "ㅞ",
        "ㅢ",
      ],
      usedLetters: [],
      score: 0,
    };
  },
  methods: {
    listener() {
      if (!this.online) {
        this.startGame();
      }

      var key = String.fromCharCode(event.keyCode).toLowerCase();
      // var boxes = document.getElementsByClassName(key);
      // console.log(key);
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
      var letter;

      for (var i = 0; i < chosung_index.length; i++) {
        // console.log(decodeURI(chosung_index[i]));
        if (key == eng_keyboard[i]) {
          letter = chosung_index[i];
        }
      }

      // this.usedLetters.includes(letter);
      this.usedLetters.push(letter);

      // console.log(letter);
      // document.getElemnetById("ㄱ").color = black;
      // var keybutton = document.getElemnetById("ㄱ");
      // keybutton.classList.add("pressed");

      // window.addEventListener("keydonw", (e) => {
      //   console.log(1);
      //   var keybutton = document.getElemnetById(e.keybutton);
      //   if (keybutton) keybutton.classList.add("pressed");
      // });
      // let button = document.createElement("button");
      // if (letter == button.id) {
      //   console.log("A");
      //   // button.style.color = black;
      // }

      // const letter = evt.key.toLowerCase().trim();

      // this.enter = letter;

      //Include letter
      if (this.selected.includes(letter)) {
        this.correct.push(letter);
        this.updateCorrect(letter);
      } else {
        if (!this.wrongs.includes(letter)) {
          this.wrongs.push(letter);
          this.updateWrongs();
        } else {
          alert("You have already entered that letter");
          // document.removeEventListener("keydown", this.listener);
        }
      }
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
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
      document.addEventListener("keydown", this.listener);
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
      this.online = true;
      //Select word
      this.selected = this.words[Math.floor(Math.random() * this.words.length)];
      // message.classList.add("hidden"); // add
      // resetButton.classList.add("disabled");

      this.countError = 0;
      this.correct = [];
      this.wrongs = [];
      this.toggleText();
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
      if (this.countError === 6) {
        this.toggleText();
        this.usedLetters = [];
        // alert("You lost :( ");
        // this.resetGame();
        document.removeEventListener("keydown", this.listener);
      }
    },
    updateCorrect(letter) {
      let aux = 0;

      //count letter in array
      for (let i = 0; i < this.selected.length; i++) {
        if (this.selected[i] === letter) {
          var flag = false;
          for (let j = 0; j < this.answer.length; j++) {
            console.log(this.answer[j]);
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
      console.log(this.countCorrect);
      if (this.countCorrect === this.selected.length) {
        this.score += 10;
        alert("정답입니다 :) ");
        // this.online = true;
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

      this.countError = 0;
      this.correct = [];
      this.wrongs = [];
      // this.aux = 0
      this.countCorrect = 0;
      this.answer = [];
      this.usedLetters = [];
      var nextstage = document.getElementById("nextstage");
      if (nextstage.style.display === "block") {
        nextstage.style.display = "none";
      }
    },
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
  },
  created() {
    // document.onkeydown = (evt) => {
    //   evt = evt || window.event;
    //   this.listener(evt);
    // };
  },
  destroyed() {
    console.log(1);
    document.removeEventListener("keydown", this.listener);
  },
};
</script>

<style scoped>
.game-container {
  padding: 20px 30px;
  position: relative;
  margin: auto;
  height: 300px;
  width: 450px;
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
.word-letters-container {
  position: absolute;
  top: 50%;
  left: 50%;
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
.letter {
  border-bottom: 3px solid #2980b9;
  display: inline-flex;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  margin: 0 3px;
  height: 50px;
  width: 20px;
}
.keyword {
  width: 40px;
  margin: 3px;
  color: white;
  background: gray;
  border-radius: 20%;
}
.pressed {
  width: 40px;
  margin: 3px;
  color: white;
  /* background: gray; */
  border-radius: 20%;
  background: red;
  /* transform: scale(1, 2); */
}
.answer {
  width: 40px;
  margin: 3px;
  color: white;
  /* background: gray; */
  border-radius: 20%;
  background: blue;
  /* transform: scale(1, 2); */
}
.wrongAnswer {
  width: 40px;
  margin: 3px;
  color: white;
  /* background: gray; */
  border-radius: 20%;
  background: red;
  /* transform: scale(1, 2); */
}
</style>