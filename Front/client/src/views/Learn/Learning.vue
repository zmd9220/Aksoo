<template>
  <div>
    <!-- BGM -->
    <audio
    autoplay
      loop
      id="gameBgm"
      src="@/assets/music/bgm/modify_optimistic-upbeat.mp3"
    ></audio>
    <div class="background-img">
      <audio id="answer" src="@/assets/music/answer/pop.mp3"></audio>
      <img src="@/assets/cloud.png" class="cloud" />
      <img src="@/assets/Learn/LearnStart/shape-2.svg" class="Shape-2" />
    </div>
    <!-- 자음/모음 navbar -->
    <div class="bar">
      <p class="letters" v-if="select === 'word'">
        <span>
          <b-button size="sm" class="goback" @click="goWordSelect()"
            >&lt;- 이전</b-button
          >
        </span>
        <span class="btn-letters">
          <button
            class="letter-btn"
            v-for="(word, index) in words[0].word"
            :key="word"
            @click="[(no = index % 2), setAlphabet(word)]"
            v-bind:style="[selectAlphabet==word? {'color':'#F4775C'}:{'color':'rgba(128, 128, 128, 0.733)'}]"
          >
            {{ word }}
          </button>
        </span>
      </p>
      <p class="letters" v-else>
        <span>
          <b-button size="sm" class="goback" @click="goWordSelect()"
            >&lt;- 이전</b-button
          >
        </span>
        <span class="btn-letters">
          <button
            class="letter-btn"
            v-for="(word, index) in words"
            :key="word"
            @click="[(no = index), setAlphabet(word.mean)]"
            v-bind:style="[selectAlphabet==word.mean? {'color':'#F4775C'}:{'color':'rgba(128, 128, 128, 0.733)'}]"
          >
            {{ word.mean }}
          </button>
        </span>
      </p>
    </div>
    <!-- 자음/모음/ 이미지 -->
    <div class="hangman-row">
      <div class="game-container">
        <img
          class="cardimg"
          v-bind:src="require(`@/assets/Learn/Letters/${selectAlphabet}.png`)"
          width="500rem"
        />
      </div>

      <!-- 카메라 -->
      <div class="right-status-column">
        <div class="letter">
          <div class="selected-letter">{{ letter }}</div>
          <div class="selected-confidence">정확도 : {{ confidence }}</div>
        </div>
        <div class="camera1">
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
            ref="camera"
          />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Camera from "@/components/CameraLearn.vue";
import Loading from "@/components/Loading.vue";
import Footer from "@/views/MainPage/Footer.vue";

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  data: function () {
    return {
      select: this.$route.params.select,
      no: 0,
      selectAlphabet: String,
      words: Object,
      mode_letter: this.$route.params.mode_letter,
      letter: "ㅏ",
      confidence: "90%",
      modelLoaded: false,
      minimizeCamera: false,
      consCompletedBox: [0,0,0,0,0,0,0,0,0,0,0,0,0,0], // 자음 동작 잘 했는지 확인
      vowCompletedBox: [0,0,0,0,0,0,0,0,0,0], // 모음 동작 잘 했는지 확인
    };
  },
  components: {
    Camera,
    Loading,
    Footer,
  },
  created: function () {
    axios({
      method: "GET",
      url: SERVER_URL + "/learn/getWords/" + this.$route.params.select,
    })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        this.words = res.data;
        if (this.select === "word") {
          this.setAlphabet(this.words[0].word[0]);
        } else {
          this.setAlphabet(this.words[0].mean);
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
    consLearn: function (letter) { // 자음 동작 바르게 인식시키면 다음 문자로 전환
      const consInventory = [
        {name: 'ㄱ', value: 0},
        {name: 'ㄴ', value: 1},
        {name: 'ㄷ', value: 2},
        {name: 'ㄹ', value: 3},
        {name: 'ㅁ', value: 4},
        {name: 'ㅂ', value: 5},
        {name: 'ㅅ', value: 6},
        {name: 'ㅇ', value: 7},
        {name: 'ㅈ', value: 8},
        {name: 'ㅊ', value: 9},
        {name: 'ㅋ', value: 10},
        {name: 'ㅌ', value: 11},
        {name: 'ㅍ', value: 12},
        {name: 'ㅎ', value: 13},
      ];
      const consResult = consInventory.find( ({ name }) => name === letter ); //  손가락 인식 되었을 때 객체값
      const Sum = this.consCompletedBox.reduce(function add(sum, currValue) {
          return sum + currValue;
        }, 0);
      if(Sum === 14){
        alert('축하드립니다!!') 
        setTimeout(() => {
            this.$router.push({name:'LearnWordPage'});
        }, 500);
      }else{
        for (let index = 0; index < consInventory.length; index++) {
          const element = consInventory[index].name;
          if(element === consResult.name && this.selectAlphabet === consResult.name){
            if(this.consCompletedBox[consResult.value] === 0){
              this.consCompletedBox[consResult.value]++; 
              var answer = document.getElementById("answer");
              answer.play();
            }
            this.selectAlphabet = consInventory[index+1].name
            break
          }
        }
      }
    },
    vowLearn: function (letter) { // 모음 동작 바르게 인식시키면 다음 문자로 전환
      const vowInventory = [
        {name: 'ㅏ', value: 0},
        {name: 'ㅑ', value: 1},
        {name: 'ㅓ', value: 2},
        {name: 'ㅕ', value: 3},
        {name: 'ㅗ', value: 4},
        {name: 'ㅛ', value: 5},
        {name: 'ㅜ', value: 6},
        {name: 'ㅠ', value: 7},
        {name: 'ㅡ', value: 8},
        {name: 'ㅣ', value: 9},
      ];
      const vowResult = vowInventory.find( ({ name }) => name === letter ); //  손가락 인식 되었을 때 객체값
      // console.log(this.selectAlphabet)
      const Sum = this.consCompletedBox.reduce(function add(sum, currValue) {
          return sum + currValue;
        }, 0);
      if(Sum === 10){
        alert('축하드립니다!!')
        setTimeout(() => {
            this.$router.push({name:'LearnWordPage'});
        }, 500);
      }else{
        for (let index = 0; index < vowInventory.length; index++) {
          const element = vowInventory[index].name;
          if(element === vowResult.name && this.selectAlphabet === vowResult.name){
            if(this.consCompletedBox[vowResult.value] === 0){
              this.consCompletedBox[vowResult.value]++; 
              var answer = document.getElementById("answer");
              answer.play();
            }
            this.selectAlphabet = vowInventory[index+1].name
            break
          }
        }
      }
    },
    input: function (letter) {  // 카메라 통해서 인식한 값
      if(this.mode_letter === 1){
        this.consLearn(letter)
      }else{
        this.vowLearn(letter)
      }
    },
    goWordSelect() {
      this.$router.push("/wordSelect").catch(() => {});
    },
    setAlphabet(alphabet) {
      this.selectAlphabet = alphabet;
    },
  },
 mounted() {
    var gameBgm = document.getElementById("gameBgm");
    gameBgm.volume = 0.5;
    gameBgm.play();
  },
};
</script>

<style scoped>
.bar {
  margin: 3%;
}

.goback {
  background-color: white;
  text-align: center;
  color: rgba(128, 128, 128, 0.733);
  width: 10%;
  height: 0.7%;
  border-color: rgba(223, 216, 216, 0.959);
  border-width: 0.25vh;
  border-radius: 40px;
  font-family: "BinggraeSamanco";
  font-size: 1.7rem;
  margin-right: 10%;
  margin-left: 0%;
}

.box {
  display: flex;
}

.letters {
  width: 80%;
  font-family: "BinggraeSamanco-bold";
  font-size: 2.3rem;
  text-align: left;
  margin-left: 15%;
}

.letter-btn {
  background-color: white;
  color: rgba(128, 128, 128, 0.733);
  border: none;
}

.btn-letters {
  margin-left: 12%;
  margin-right: 12%;
}

.hangman-row {
  display: flex;
  width: 70%;
  height: 50vh;
  margin: 5vh;
  margin-left: 18%;
}

.game-container {
  background-color: #f4f1eb;
  flex: 50%;
  border-radius: 20px;
  margin-right: 5%;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
  border: solid 0.4vh #917052;
  width: 65%;
}

.cardimg {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}

.right-status-column {
  flex: 50%;
  border-radius: 20px;
  margin: 0%;
}

.game-mode-cons {
  width: 100%;
  height: 5%;
  background-color: #f4f1eb;
  margin-bottom: 1.5vh;
  border-radius: 30px;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
  border: solid 4px #fe6f28;
  color: #917052;
  font-family: "SDSamliphopangche_Basic";
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.game-mode-vowel {
  width: 100%;
  height: 5%;
  background-color: #f4f1eb;
  margin-bottom: 1.5vh;
  border-radius: 30px;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
  border: solid 4px #86c7f4;
  color: #917052;
  font-family: "SDSamliphopangche_Basic";
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.letter {
  position: absolute;
  top: 25%;
  right: 16%;
  width: 30%;
  height: 7%;
  background-color: #f4f1eb;
  border-radius: 20px;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
  display: flex;
  justify-content: space-around;
  z-index: 1500;
  /* margin-left: 10%; */
  border: solid 0.4vh #917052;
}

.letter .selected-letter {
  font-size: 2rem;
  color: #957457;
  font-family: "SDSamliphopangche_Basic";
  /* margin-left: 20%; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.letter .selected-confidence {
  font-size: 2rem;
  color: #b59e7a;
  font-family: "SDSamliphopangche_Basic";
  /* margin-right: 20%; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.camera1 {
  width: 94%;
  height: 100%;
  background-color: #f4f1eb;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
  margin-left: 0%;
  margin-right: 0%;
  margin-top: 0%;
  padding-top: 0%;
  z-index: -1;
}

img.cloud {
  position: absolute;
  z-index: -1;
  width: 90%;
  height: 27%;
  left: 5%;
  top: 25%;
}

img.Shape-2 {
  position: absolute;
  z-index: 0;
  width: 100%;
  left: 0%;
  top: 87.5%;
  height: 12.5%;
}
</style>