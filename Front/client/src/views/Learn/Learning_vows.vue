<template>
  <div>
    <div class="box">
      <b-button size="sm" class="mb-2">
        <b-icon icon="arrow90deg-left" aria-hidden="true"></b-icon>
      </b-button>
    </div>  
    <p class="letters">
      <button v-on:click="no=0"> ㅏ</button>
      <button v-on:click="no=1"> ㅑ</button>
      <button v-on:click="no=0"> ㅓ</button>
      <button v-on:click="no=1"> ㅕ</button>
      <button v-on:click="no=0"> ㅗ</button>
      <button v-on:click="no=1"> ㅛ</button>
      <button v-on:click="no=0"> ㅜ</button>
      <button v-on:click="no=1"> ㅠ</button>
      <button v-on:click="no=0"> ㅡ</button>
      <button v-on:click="no=1"> ㅣ</button>
      <button v-on:click="no=0"> ㅔ</button>
      <button v-on:click="no=1"> ㅖ</button>
      <button v-on:click="no=0"> ㅐ</button>
      <button v-on:click="no=1"> ㅡ</button>
      <button v-on:click="no=0"> ㅢ</button>
      <button v-on:click="no=1"> ㅚ</button>
      <button v-on:click="no=0"> ㅟ</button>
    </p>
    <img v-bind:src="require(`${imgSrclist[no]}`)" width="500rem">
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      imgSrclist: ['./fingerspelling_kor_vowels.jpg', './fingerspelling_kor_vowels_1.jpg'],
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