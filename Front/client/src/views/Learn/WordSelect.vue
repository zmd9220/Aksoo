<template>
  <div>
    <div class="main">
      <div class="title">
        <h2 style="font-weight: bold">무엇을 배우고 싶으세요?</h2>
      </div>
      <div class="contents">
        학습하실 단계를 선택해주세요.
      </div>
      <div class="bt">
        <div>
          <button class="gonext" @click="setlevel('con')">자음</button>
          <button class="gonext" @click="setlevel('vow')">모음</button>
          <button class="gonext" @click="setlevel('word')">단어</button>
          <button class="gonext" @click="setlevel('bookmark')" >즐겨찾기</button>
          <button class="goback" @click="handSelect()">&lt;- 이전</button>
          <button class="gonext" @click="goNextLevel()">다음 -></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "handSelect",
  data: function () {
    return {
      level: '',
    }
  },
  methods: {
    setlevel: function (word) {
      this.level = word
    },
    handSelect: function () {
      this.$router.push("/Select").catch(() => {});
    },
    goNextLevel: function () {
      if (this.level === '') {
        alert('단계를 선택해주세요')
      } else {
        // this.$router.push("/Learn/Learning" + '_' + this.level).catch(() => {});
        this.$router.push({name: 'Learning', params: {select: this.level}}).catch(() => {})
      }
    }
  },
};
</script>

<style scoped>
.main {
  margin-top: 10%;
  margin-left: 20%;
  margin-right: 20%;
  float: center;
}
.bt {
  margin: 0% 25%;
  float: center;
}
.gonext {
  margin: 2%;
  background-color: white;
  text-align: center;
  font-weight: bold;
  color: #725ae1;
  border-radius: 5%;
  width: 96%;
  height: 50px;
  border-color: #725ae1;
  border-width: 1px;
}

.goback {
  margin: 2%;
  background-color: white;
  text-align: center;
  font-weight: bold;
  color: #725ae1;
  border-radius: 5%;
  width: 96%;
  height: 50px;
  border-color: #725ae1;
  border-width: 1px;
}
</style>