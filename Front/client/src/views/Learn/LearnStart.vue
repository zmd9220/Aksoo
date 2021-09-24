<template>
  <div>
    <div class="main">
      <div class="title">
        <h2 style="font-weight: bold">학습하기</h2>
      </div>
      <div class="contents">
        수어의 첫 걸음은 지문자부터!
        <br>
        지문자를 처음 접하는 사용자도 누구나 쉽고 재미있게 익힐 수 있습니다.
        <br>
        자음연습, 모음연습, 단어연습을 통해서 단계별로 실력을 향상시켜보세요.
      </div>
      <div>
        <button class="gonext" @click="handSelect">시작하기 -></button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "LearnStartPage",
  methods: {
    handSelect: function () {
      this.$router.push("/Select").catch(() => {});
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
.gonext {
  background-color: #725ae1;
  text-align: center;
  font-weight: bold;
  color: white;
  border-radius: 5%;
  width: 40%;
  height: 50px;
  border: white;
}
</style>