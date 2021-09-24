<template>
  <div>
    <div class="box">
      <b-button size="sm" class="mb-2" @click="goWordSelect()">
        <b-icon icon="arrow90deg-left" aria-hidden="true"></b-icon>
      </b-button>
    </div>
    <ul>
      <li v-for="word in words[0].word" :key="word">
        {{ word }}
      </li>
    </ul>
    <p class="letters">
      
      <button v-on:click="no=0"> ㅂ</button>
      <button v-on:click="no=1"> ㅏ</button>
      <button v-on:click="no=0"> ㄴ</button>
      <button v-on:click="no=1"> ㅏ</button>
      <button v-on:click="no=0"> ㄴ</button>
      <button v-on:click="no=1"> ㅏ</button>
    </p>
    <img v-bind:src="require(`${imgSrclist[no]}`)" width="500rem">
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
  },
  mounted: function () {
    axios({
      method: 'GET',
      url: "http://127.0.0.1:8000/learn/getWords/" + this.select
    }).then ((res) => {
      console.log(res)
      console.log(res.data)
      this.words = res.data
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