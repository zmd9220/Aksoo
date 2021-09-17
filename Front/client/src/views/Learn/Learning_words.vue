<template>
  <div>
    <div class="box">
      <b-button size="sm" class="mb-2">
        <b-icon icon="arrow90deg-left" aria-hidden="true"></b-icon>
      </b-button>
    </div>  
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
export default {
  data: function () {
    return {
      imgSrclist: ['./fingerspelling_kor_cons.jpg', './fingerspelling_kor_vowels_1.jpg'],
      no: 0,
    }
  },
  methods: {
    changePicture() {
      // this.no = (this.no)%(this.imgSrclist.length);
    }
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