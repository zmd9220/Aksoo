<template>
  <div class="main">
    <!-- 오디오 (버튼 클릭, BGM) -->
    <audio
      autoplay
      id="gameStart"
      src="@/assets/music/pageMove/Jump High.mp3"
    ></audio>
    <audio id="click" src="@/assets/music/answer/Correct 2.mp3"></audio>

    <div class="background-img">
      <img src="@/assets/cloud.png" class="cloud" />
      <img src="@/assets/Learn/LearnStart/shape-2.svg" class="Shape-2" />
    </div>
    <div class="hangman-main">
      <div class="hangman-desc">
        <h1>산성비</h1>
        <h2>지문자를 산성비 게임으로 익혀 보세요!</h2>
      </div>
      <div class="hangman-main-box">
        <div class="hangman-thumbnail-box">
          <img src="@/assets/acidrain-cover.png" class="acidImg" />
        </div>
        <div class="hangman-select-box">
          <div class="hangman-select-box-title">테마를 선택하세요</div>
          <div
            class="hangman-start"
            v-bind:class="{ white: !clicked, blue: clicked }"
            v-on:click="
              [con(), (clicked = !clicked), (clickedCon = false), click()]
            "
          >
            자음
          </div>
          <div
            class="hangman-start"
            v-bind:class="{ white: !clickedCon, blue: clickedCon }"
            v-on:click="
              [col(), (clickedCon = !clickedCon), (clicked = false), click()]
            "
          >
            모음
          </div>
          <div class="hangman-start-button" @click="gotoAcidRain">
            게임시작!
          </div>
          <audio
            id="gameStart"
            src="@/assets/music/pageMove/Jump High.mp3"
          ></audio>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: 0,
      consonant: "자모음",
      clicked: false,
      clickedCon: false,
    };
  },
  name: "HangManMain",
  components: {},
  methods: {
    // 버튼 클릭 효과음
    click() {
      var click = document.getElementById("click");
      click.play();
    },
    // 자음 선택
    con() {
      this.consonant = "자음"; 
      this.mode = 1;
    },
    // 모음 선택
    col() {
      this.consonant = "모음"; 
      this.mode = 0;
    },
    // 선택된 자모음을 산성비 게임으로 전달
    gotoAcidRain() {
      if (this.consonant === "자모음") {
        alert("자-모음을 선택해주세요");
      } else {
        this.$router.push({
          name: "AcidRainPage",
          params: { consonant: this.consonant, mode: this.mode },
        });
      }
    },
  },
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
  /* font-weight: bold; */
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
  width: 102%;
  height: 100%;
  object-fit: fill;
  border-radius: 20px;
}
.hangman-start {
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
.hangman-start:active {
  position: relative;
  box-shadow: 0rem 0.15rem 0.12rem 0rem rgba(0, 0, 0, 0.3);
  top: 2px;
}
.hangman-start:hover {
  position: relative;
  box-shadow: 0rem 0.15rem 0.12rem 0rem rgba(0, 0, 0, 0.3);
  top: 2px;
  background-color: #957457;
  color: #e5d2bd;
}
.white {
  background-color: #e5d2bd;
  color: #937356;
  border: solid 0.19rem #957252 !important;
}
.blue {
  background-color: #937356;
  color: #e5d2bd;
  border: solid 0.19rem #e5d2bd !important;
}
</style>