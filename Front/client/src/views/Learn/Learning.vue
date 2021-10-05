<template>
  <div>
    <div class="background-img">     
      <img src="@/assets/cloud.png" class="cloud">
      <img src="@/assets/Learn/LearnStart/shape-2.svg" class="Shape-2">
    </div>
    <div class="bar">
      <p class="letters" v-if="select==='word'">
        <span> 
          <b-button size="sm" class="goback" @click="goWordSelect()">&lt;- 이전</b-button>
        </span>
        <span class="btn-letters">
          <button class="letter-btn" v-for="(word, index) in words[0].word" :key="word" @click="[no=index%2, setAlphabet(word)]">
            {{ word }}
          </button>
        </span>
      </p>
      <p class="letters" v-else>
        <span>
          <b-button size="sm" class="goback" @click="goWordSelect()">&lt;- 이전</b-button>
        </span>
        <span class="btn-letters">
          <button class="letter-btn" v-for="(word, index) in words" :key="word" @click="[no=index, setAlphabet(word.mean)]">
            {{ word.mean }}
          </button>
        </span>
      </p>
    </div>
    <div class="hangman-row">
      <div class="game-container">
        <!-- <b-button>즐겨찾기 추가 {{ selectAlphabet }}</b-button> -->
        <!-- <img v-bind:src="require(`${imgSrclist[no]}`)" width="500rem"> -->
        <img class="cardimg" v-bind:src="require(`@/assets/Learn/Letters/${selectAlphabet}.png`)" width="500rem">
        <!-- <img v-bind:src=imgSrclist width="500rem"> -->
      </div>

      <!-- 카메라 -->
      <div class="right-status-column">
        <!-- <div v-if="mode_letter" class="game-mode-cons" @click="modeChange">자음</div>
        <div v-else class="game-mode-vowel" @click="modeChange">모음</div> -->
        <div class="letter">
            <div class="selected-letter">{{ letter }}</div>
            <div class="selected-confidence">정확도 : {{ confidence }}</div>
        </div>
        <div class="camera1">
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
          ref="camera"
          />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios';
import Camera from "@/components/CameraLearn.vue";
import Loading from "@/components/Loading.vue";
import Footer from "@/views/MainPage/Footer.vue";


export default {
  data: function () {
    return {
      select: this.$route.params.select,
      // imgSrclist: ['./fingerspelling_kor_cons.jpg', './fingerspelling_kor_vowels_1.jpg'],
      // imgSrclist: require('@/assets/letters/'+'ㄱ'+'.jpg'),
      no: 0,
      selectAlphabet: String,
      words: Object,
      mode_letter: this.$route.params.mode_letter,
      letter: 'ㅏ',
      confidence: '90%',
      modelLoaded: false,
      minimizeCamera: false,
    }
  },
  components: {
    Camera, 
    Loading,
    Footer,
  },
  methods: {
    cameraData: function(payload1, payload2) {
      this.letter = payload1;
      this.confidence = payload2;
    },
    modeChange: function() {
      this.mode_letter = 1 - this.mode_letter;
      this.$refs.camera.modeChange();
    },
    input: function(letter) {
      this.$refs.game.listener(letter);
    },
    changePicture() {
      // this.no = (this.no)%(this.imgSrclist.length);
    },
    goWordSelect() {
      this.$router.push("/wordSelect").catch(() => {});
    },
    setAlphabet (alphabet) {
      this.selectAlphabet = alphabet
    },
    setBookmark (alphabet) {
      axios({
        method: 'POST',
        url: "http://127.0.0.1:8000/learn/setBookmark/",
        data: {
          alphabet: alphabet,
        },
      }).then ((res) => {
        console.log(res)
      }).catch ((error => {
        console.log(error)
      }))
    }
  },
  mounted: function () {
    axios({
      method: 'GET',
      url: "http://127.0.0.1:8000/learn/getWords/" + this.$route.params.select
    }).then ((res) => {
      console.log(res)
      console.log(res.data)
      this.words = res.data
      if (this.select === 'word') {
        this.setAlphabet(this.words[0].word[0])
      } else {
        this.setAlphabet(this.words[0].mean)
      }
    }).catch((error) => {
      console.log(error)
    })
  }
}
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
  font-family: 'BinggraeSamanco';
  font-size: 1.7rem;
  margin-right: 10%;
  margin-left: 0%;
}

.box {
  display: flex;
}

.letters {
  width: 80%;
  font-family: 'BinggraeSamanco-bold';
  font-size: 2.3rem;
  text-align: left;
  margin-left: 6.5%;

}

.letter-btn {
  background-color: white;
  color: rgba(128, 128, 128, 0.733);
  border: none
}

.btn-letters {
  margin-left: 12%;
  margin-right: 12%;
}

.hangman-row {
    display: flex;
    width: 80%;
    height: 50vh;
    margin: 5vh;
    margin-left: 9%;
}

.game-container {
    background-color: #f4f1eb;
    flex:50%;
    border-radius: 20px;
    margin-right: 5%;
    box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
    border: solid 0.4vh #917052;
}

.cardimg {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}

.right-status-column {
    flex:50%;
    border-radius: 20px;
    /* margin: 2vh; */
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
    font-family: 'SDSamliphopangche_Basic';
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
    font-family: 'SDSamliphopangche_Basic';
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
    height: 5%;
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
    font-size: 1.5rem;
    color: #957457;
    font-family: 'SDSamliphopangche_Basic';
    /* margin-left: 20%; */
    display: flex;
    justify-content: center;
    align-items: center;
}

.letter .selected-confidence {
    font-size: 1.5rem;
    color: #b59e7a;
    font-family: 'SDSamliphopangche_Basic';
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