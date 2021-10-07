<template>
  <div class="main">
    <!-- 효과음 -->
    <audio
      autoplay
      id="gameStart"
      src="@/assets/music/pageMove/Jump High.mp3"
    ></audio>
    <div class="background-img">
      <img src="@/assets/cloud.png" class="cloud" />
      <img src="@/assets/Learn/LearnStart/shape-2.svg" class="Shape-2" />
    </div>
    <div class="hangman-main">
      <div class="hangman-desc">
        <h1>단어 맞추기</h1>
        <h2>지문자를 단어 맞추기 게임으로 익혀 보세요!</h2>
      </div>
      <div class="hangman-main-box">
        <div class="hangman-thumbnail-box">
          <img src="@/assets/hangman-cover.png" class="acidImg" />
        </div>
        <div class="hangman-select-box">
          <div class="hangman-select-box-title">테마를 선택하세요</div>
          <!-- 주제 선택창 -->
          <div class="hangman-topic">
            <select class="selectBox" v-model="topic">
              <option disabled selected style="text-align: center">주제</option>
              <option
                v-for="option in topic_options"
                v-bind:value="option"
                :key="option"
                style="text-align: center"
              >
                {{ option.text }}
              </option>
            </select>
          </div>
          <!-- 난이도 선택창 -->
          <div class="hangman-diff">
            <select class="selectBox" v-model="diff">
              <option disabled selected style="text-align: center">
                난이도
              </option>
              <option
                v-for="option in diff_options"
                v-bind:value="option"
                :key="option"
                style="text-align: center"
              >
                {{ option.text }}
              </option>
            </select>
          </div>
          <div class="hangman-start-button" @click="gotoHangManPage">
            게임시작!
          </div>
          <audio
            id="gameStart"
            src="@/assets/music/pageMove/Jump High.mp3"
          ></audio>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/views/MainPage/Footer.vue";

export default {
  data() {
    return {
      topic: "주제",
      diff: "난이도",
      topic_options: [
        { text: "FRUIT", value: 1 }, // value를 설정하여 같이 넘겨줌으로서 주제선택 가능
        { text: "ANIMAL", value: 2 },
      ],
      diff_options: [
        { text: "EASY", value: 5 },
        { text: "MIDDLE", value: 4 },
        { text: "HARD", value: 3 },
      ],
    };
  },
  name: "HangManMain",
  components: {
    Footer,
  },
  methods: {
    gotoHangManPage() {
      var audio = document.getElementById("gameStart");

      if (this.topic === "주제") { // 미선택시 진행불가
        alert("주제를 선택해주세요");
      } else if (this.diff === "난이도") {
        alert("난이도를 선택해주세요");
      } else { // 모든요소 선택시 게임 입장
        audio.play();
        this.$router.push({
          name: "HangManPage",
          params: { topic: this.topic, diff: this.diff },
        });
      }
    },
  },
  updated: {},
};
</script>

<style scoped>
.hangman-main .hangman-desc {
  display: flex;
  margin-top: 5vh;
  margin-bottom: 5vh;
}
.hangman-main .hangman-desc h1 {
  margin: 0 5vh 0 10vh;
  font-size: 3.75rem;
  font-family: BinggraeSamanco-Bold;
}
.hangman-main .hangman-desc h2 {
  font-family: GowunDodum-Regular;
  font-size: 1.125rem;
  margin: 3vh 5vh 0 0;
}
.hangman-main .hangman-main-box {
  display: flex;
  background-color: #f4f1eb;
  height: 50vh;
  width: 60%;
  margin: auto;
  border-radius: 20px;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
}
.hangman-main .hangman-main-box .hangman-thumbnail-box {
  background-color: rgb(158, 157, 157);
  width: 50%;
  height: 80%;
  margin: auto;
  border-radius: 20px;
}
.hangman-main .hangman-main-box .hangman-select-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70%;
  width: 30%;
  margin: auto;
}
.hangman-main .hangman-main-box .hangman-select-box .hangman-select-box-title {
  width: 100%;
  height: 20%;
  border-radius: 20px;
  font-family: "SDSamliphopangche_Basic";
  font-size: 2rem;
  color: #b59e7a;
}
.hangman-main .hangman-main-box .hangman-select-box .hangman-topic {
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
.hangman-main .hangman-main-box .hangman-select-box .hangman-topic .selectBox {
  border: 0px;
  outline: none;
  background-color: #e5d2bd;
  color: #957457;
  width: 100%;
}
.hangman-main .hangman-main-box .hangman-select-box .hangman-diff {
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
.hangman-main .hangman-main-box .hangman-select-box .hangman-diff .selectBox {
  border: 0px;
  outline: none;
  background-color: #e5d2bd;
  color: #957457;
  width: 100%;
}
.hangman-main .hangman-main-box .hangman-select-box .hangman-start-button {
  width: 100%;
  height: 7vh;
  line-height: 7vh;
  vertical-align: middle;
  display: inline-block;
  font-size: 2.5rem;
  background-color: #957457;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
  border-radius: 40px;
  cursor: pointer;
  border: 3px solid #e5d2bd;
  font-family: "SDSamliphopangche_Basic";
  color: #e5d2bd;
}
.hangman-start-button:active {
  position: relative;
  box-shadow: 0rem 0.15rem 0.12rem 0rem rgba(0, 0, 0, 0.3);
  top: 2px;
}
.hangman-start-button:hover {
  position: relative;
  box-shadow: 0rem 0.15rem 0.12rem 0rem rgba(0, 0, 0, 0.3);
  top: 2px;
  background-color: #e5d2bd;
  color: #957457;
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