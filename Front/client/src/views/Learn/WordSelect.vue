<template>
  <div>
    <div class="main">
      <div class="bt">
        <div>
          <button class="gonext">자음</button>
          <button class="gonext">모음</button>
          <button class="gonext" @click="level">단어</button>
          <button class="gonext">즐겨찾기</button>
          <button class="goback" @click="handSelect">뒤로 가기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "handSelect",
  data: function () {},
  methods: {
    level: function () {
      this.$router.push("/Learn/level");
    },
    handSelect: function () {
      this.$router.push("/Learn/Select");
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