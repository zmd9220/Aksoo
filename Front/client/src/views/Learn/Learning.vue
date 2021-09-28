<template>
  <div>
    <div class="box">
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
      <button v-for="(word, index) in words" :key="word" @click="[no=index%2, setAlphabet(word.mean)]">
        {{ word.mean }}
      </button>
    </p>
    <b-button>즐겨찾기 추가 {{ selectAlphabet }}</b-button>
    <img v-bind:src="require(`${imgSrclist[no]}`)" width="500rem">
    <span>카메라 구역</span>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data: function () {
    return {
      imgSrclist: ['./fingerspelling_kor_cons.jpg', './fingerspelling_kor_vowels_1.jpg'],
      no: 0,
      select: this.$route.params.select,
      selectAlphabet: String,
      words: Object,
    }
  },
  methods: {
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
        this.setAlphabet(this.words[0].mean)
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

</style>