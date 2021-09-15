<template>
  <div>
    <div class="main">
      <div class="title">
        <h2 style="font-weight: bold">학습하기</h2>
      </div>
      <div class="contents">
        내애애애애애애애애애애애애애애애애애애애애애애애요요요요오요오오요오요옹오오오오오옹요오오오오오오오용
      </div>
      <div>
        <button class="gonext" @click="handSelect">Let's go</button>
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