<template>
  <div class="hangman-row">
    <div class="game-container">
      <div>
        <b-button size="sm" class="mb-2" @click="goWordSelect()">
          <b-icon icon="arrow90deg-left" aria-hidden="true"></b-icon>
        </b-button>
      </div>
      <p class="letters" v-if="select==='word'">
        <button v-for="(word, index) in words[0].word" :key="word" @click="[no=index%2, setAlphabet(word)]">
          {{ word }}
        </button>
      </p>
      <p class="letters" v-else>
        <button v-for="(word, index) in words" :key="word" @click="[no=index, setAlphabet(word.mean)]">
          {{ word.mean }}
        </button>
      </p>
      <b-button>즐겨찾기 추가 {{ selectAlphabet }}</b-button>
      <img v-bind:src="require(`${imgSrclist[no]}`)" width="500rem">
    </div>

    <!-- 카메라 -->
    <div class="right-status-column">
      <div v-if="mode_letter" class="game-mode-cons" @click="modeChange">자음</div>
      <div v-else class="game-mode-vowel" @click="modeChange">모음</div>
      <div class="letter">
          <div class="selected-letter">{{ letter }}</div>
          <div class="selected-confidence">정확도 : {{ confidence }}</div>
      </div>
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
        ref="camera"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Camera from "@/components/Camera0.vue";
import Loading from "@/components/Loading.vue";

export default {
  data: function () {
    return {
      imgSrclist: ['./letters/ㄱ.jpg', './letters/ㄴ.jpg', './letters/ㄷ.jpg', './letters/ㄹ.jpg', './letters/ㅁ.jpg', './letters/ㅂ.jpg'],
      no: 0,
      select: this.$route.params.select,
      selectAlphabet: String,
      words: Object,
      mode_letter: 0,
      letter: 'ㅏ',
      confidence: '90%',
      modelLoaded: false,
      minimizeCamera: false,
    }
  },
  components: {
    Camera, 
    Loading,
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
      url: "http://127.0.0.1:8000/learn/getWords/" + this.select
    }).then ((res) => {
      console.log(res)
      console.log(res.data)
      this.words = res.data
      if (this.select === 'word') {
        this.setAlphabet(this.words[0].word[0])
      } else {
        this.setAlphabet(this.words.mean[0])
      }
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style scoped>
.box {
  display: flex;
}

.letters {
  font-weight: bold;
  font-size: 1.5em;
}

.hangman-row {
    display: flex;
    width: 100%;
    height: 90vh;
    margin: 5vh;
}

.game-container {
    background-color: #f4f1eb;
    flex:70%;
    border-radius: 20px;
    margin: 2vh;
    box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
}

.right-status-column {
    flex:30%;
    border-radius: 20px;
    margin: 2vh;
}

.game-mode-cons {
    width: 100%;
    height: 10%;
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
    height: 10%;
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
    width: 100%;
    height: 7%;
    background-color: #f4f1eb;
    margin-bottom: 1.5vh;
    border-radius: 20px;
    box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
    display: flex;
    justify-content: space-around;
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

.camera {
    width: 100%;
    height: 41%;
    background-color: #f4f1eb;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
}

</style>