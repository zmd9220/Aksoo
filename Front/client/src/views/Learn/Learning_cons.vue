<template>
  <div>
    <div class="box">
      <b-button size="sm" class="mb-2">
        <b-icon icon="arrow90deg-left" aria-hidden="true"></b-icon>
      </b-button>
    </div>  
    <p class="letters">
      <button v-on:click="no=0"> ㄱ</button>
      <button v-on:click="no=1"> ㄴ</button>
      <button v-on:click="no=0"> ㄷ</button>
      <button v-on:click="no=1"> ㄹ</button>
      <button v-on:click="no=0"> ㅁ</button>
      <button v-on:click="no=1"> ㅂ</button>
      <button v-on:click="no=0"> ㅅ</button>
      <button v-on:click="no=1"> ㅇ</button>
      <button v-on:click="no=0"> ㅈ</button>
      <button v-on:click="no=1"> ㅊ</button>
      <button v-on:click="no=0"> ㅋ</button>
      <button v-on:click="no=1"> ㅌ</button>
      <button v-on:click="no=0"> ㅍ</button>
      <button v-on:click="no=1"> ㅎ</button>
      <button v-on:click="no=0"> ㄲ</button>
      <button v-on:click="no=1"> ㄸ</button>
      <button v-on:click="no=0"> ㅃ</button>
      <button v-on:click="no=1"> ㅉ</button>
    </p>
    <img v-bind:src="require(`${imgSrclist[no]}`)" width="500rem">
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      imgSrclist: ['./fingerspelling_kor.jpg', './fingerspelling_kor_cons.jpg'],
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