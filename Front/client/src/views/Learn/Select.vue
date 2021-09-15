<template>
  <div>
    <div class="main">
      <div class="title">
        <h2 style="font-weight: bold">Are you left or right handed?</h2>
      </div>
      <div class="contents">
        내애애애애애애애애애애애애애애애애애애애애애애애요요요요오요오오요오요옹오오오오오옹요오오오오오오오용
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
  data: function () {},
  methods: {
    wordSelect: function () {
      this.$router.push("/wordSelect");
    },
    startSelect: function () {
      this.$router.push("/Start");
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