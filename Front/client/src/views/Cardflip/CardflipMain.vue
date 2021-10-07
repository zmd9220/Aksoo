<template>
  <div>
    <audio
      autoplay
      id="gameStart"
      src="@/assets/music/pageMove/Jump High.mp3"
    ></audio>

    <div class="background-img">
      <img src="@/assets/cloud.png" class="cloud" />
      <img src="@/assets/Learn/LearnStart/shape-2.svg" class="Shape-2" />
    </div>
    <div class="cardflip-main">
      <div class="cardflip-desc">
        <h1>카드뒤집기</h1>
        <h2>지문자를 카드뒤집기 게임으로 익혀보세요!</h2>
      </div>
      <div class="cardflip-main-box">
        <div class="cardflip-thumbnail-box">
          <img src="@/assets/cardflip-cover.png" class="acidImg" />
        </div>
        <div class="cardflip-select-box">
          <div class="cardflip-select-box-title">난이도를 선택하세요</div>
          <div class="cardflip-start-button text-align:center" @click="gotoHard">
            상 (6X5)
          </div>
          <div
            class="cardflip-start-button text-align:center"
            @click="gotoMiddle"
          >
            중 (5X4)
          </div>
          <div class="cardflip-start-button" @click="gotoEasy">하 (4X3)</div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/views/MainPage/Footer.vue";

export default {
  name: "CardfilpMain",
  components: {
    Footer,
  },
  methods: {
    gotoHard() {
      this.$router.push({ name: "CardflipHard" });  // 선택한 난이도의 게임 페이지로 넘어가기
    },
    gotoMiddle() {
      this.$router.push({ name: "CardflipMiddle" });
    },
    gotoEasy() {
      this.$router.push({ name: "CardflipEasy" });
    },
  },
};
</script>

<style scoped>
.cardflip-main .cardflip-desc {
  display: flex;
  margin-top: 5vh;
  margin-bottom: 5vh;
}

.cardflip-main .cardflip-desc h1 {
  margin: 0 5vh 0 10vh;
  font-size: 3.75rem;
  /* font-weight: bold; */
  font-family: BinggraeSamanco-Bold;
}

.cardflip-main .cardflip-desc h2 {
  font-family: GowunDodum-Regular;
  font-size: 1.125rem;
  margin: 3vh 5vh 0 0;
}

.cardflip-main .cardflip-main-box {
  display: flex;
  background-color: #f4f1eb;
  height: 50vh;
  width: 60%;
  margin: auto;
  border-radius: 20px;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
}

.cardflip-main .cardflip-main-box .cardflip-thumbnail-box {
  background-color: rgb(158, 157, 157);
  width: 50%;
  height: 80%;
  margin: auto;
  border-radius: 20px;
}
.cardflip-main .cardflip-main-box .cardflip-select-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70%;
  width: 30%;
  margin: auto;
}

.cardflip-main .cardflip-main-box .cardflip-select-box .cardflip-select-box-title {
  width: 100%;
  height: 20%;
  border-radius: 20px;
  font-family: "SDSamliphopangche_Basic";
  font-size: 2rem;
  color: #b59e7a;
}

.cardflip-main .cardflip-main-box .cardflip-select-box .cardflip-topic {
  width: 100%;
  height: 20%;
  background-color: #e5d2bd;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
  border-radius: 40px;
  display: inline-block;
  overflow: hidden;
  border: 3px solid #957457;
  font-family: "SDSamliphopangche_Basic";
  font-size: 2rem;
  color: #957457;
  cursor: pointer;
}

.cardflip-main .cardflip-main-box .cardflip-select-box .cardflip-diff {
  width: 100%;
  height: 20%;
  background-color: #e5d2bd;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
  border-radius: 40px;
  display: inline-block;
  overflow: hidden;
  border: 3px solid #957457;
  font-family: "SDSamliphopangche_Basic";
  font-size: 2rem;
  color: #957457;
  cursor: pointer;
}

.cardflip-main .cardflip-main-box .cardflip-select-box .cardflip-start-button {
  width: 100%;
  height: 7vh;
  line-height: 7vh;
  vertical-align: middle;
  display: inline-block;
  font-size: 2.5rem;
  background-color: #e5d2bd;
  box-shadow: 5px 5px 5px rgb(128 128 128 / 73%);
  border-radius: 40px;
  overflow: hidden;
  border: 3px solid #957457;
  font-family: "SDSamliphopangche_Basic";
  color: #957457;
  cursor: pointer;
}
.cardflip-start-button:active {
  position: relative;
  box-shadow: 0rem 0.15rem 0.12rem 0rem rgba(0, 0, 0, 0.3);
  top: 2px;
}
.cardflip-start-button:hover {
  position: relative;
  box-shadow: 0rem 0.15rem 0.12rem 0rem rgba(0, 0, 0, 0.3);
  top: 2px;
  background-color: #957457;
  color: #e5d2bd;
}

.cloud {
  position: absolute;
  top: 25%;
  width: 80%;
  left: 10%;
  z-index: -3;
  overflow: hidden;
  transition-duration: 7s;
  transition-property: transform;
}

img.Shape-2 {
  position: absolute;
  z-index: 0;
  width: 100%;
  left: 0%;
  top: 87.5%;
  height: 12.5%;
}

.acidImg {
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 20px;
}
</style>