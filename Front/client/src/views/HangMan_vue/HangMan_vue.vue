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

    <template #modal-footer>
      <div class="w-100">
        <b-button
          variant="primary"
          size="sm"
          class="float-right"
          @click="show=false"
          v-on:click="startGame"
        >
          GO!
        </b-button>
      </div>
    </template>
  </b-modal>

    <div id="message" class="hidden" style="display: none ; background-color: grey ; opacity: 85% ;" >
      Game Over!
      <hr>
      
      <div class="game-result">
        <p>Score: </p>
        <p>Your Highest Score: </p>
        <p>Ranking: </p>
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

    <div class="game-container" >
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
    </div>

    <div class="wrong-letters-container">
      <p>Wrongs:</p>
      <div id="wrong-letters" v-for="(wrong, index) in wrongs" :key="index">
        {{ wrong }},
      </div>

      <p>hart:</p>
      <div>{{ 6 - countError }},</div>
    </div>

    <div class="topic-difficulty" id="options" style="display: none">
      <!-- <p v-show="`${difficulty}` === '하'"> {{ difficulty }}</p> -->
      <p>Difficulty : {{ difficulty }}, Topic : {{ topic }}</p>
    </div>

    <!-- <div id="message" class="hidden" style="display: none"> -->
    <div id="message" class="hidden">
      <button
        class="btn btn-danger pull-right"
        id="reset"
        v-on:click="resetGame"
      >
        <span class="glyphicon glyphicon-flash" id="reset"></span>
        ReStart
      </button>
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
    };
  },
  methods: {
    listener() {
      if (!this.online) {
        this.startGame();
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
      var letter;

      for (var i = 0; i < chosung_index.length; i++) {
        // console.log(decodeURI(chosung_index[i]));
        if (key == eng_keyboard[i]) {
          letter = chosung_index[i];
        }
      }

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
          document.removeEventListener("keydown", this.listener);
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
      document.addEventListener("keydown", this.listener);
      //Initial game
      this.online = true;
      //Select word
      this.selected = this.words[Math.floor(Math.random() * this.words.length)];
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
    },
    resetGame: function () {
      // this.togglerestart();
      this.online = true;
      //Select word
      this.selected = this.words[Math.floor(Math.random() * this.words.length)];
      // message.classList.add("hidden"); // add
      // resetButton.classList.add("disabled");

      this.countError = 0
      this.correct = []
      this.wrongs = []
      this.toggleText();
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
        alert("You won :) ");
        document.removeEventListener("keydown", this.listener);
      }
    },
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
  height: 350px;
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
</style>