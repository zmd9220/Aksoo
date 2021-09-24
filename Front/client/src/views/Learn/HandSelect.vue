<template>
  <div>
    <div class="main">
      <div class="title">
        <h2 style="font-weight: bold">오른손잡이인가요, 왼손잡이인가요?</h2>
      </div>
      <div class="contents">
        지문자 학습에 사용할 손을 골라주세요.
      </div>
      <div class="bt">
        <div>
          <button class="gonext" @click="wordSelect()">Left</button>
          <button class="gonext" @click="wordSelect()">Right</button>
        </div>
        <div>
          <button class="goback" @click="startSelect()">뒤로 가기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "handSelect",
  methods: {
    wordSelect: function () {
      this.$router.push("/wordSelect").catch(() => {});
    },
    startSelect: function () {
      this.$router.push("/Start").catch(() => {});
    },
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
.title {
  float: center;
}
.contents {
  margin: 5% 15%;
  text-align: center;
}
.bt {
  margin: 0% 25%;
  float: center;
}
.gonext {
  margin: 5% 2%;
  background-color: #725ae1;
  text-align: center;
  font-weight: bold;
  color: white;
  border-radius: 5%;
  width: 46%;
  height: 50px;
  border: white;
}

.goback {
  /* margin: 2%; */
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