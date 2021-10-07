<template>
  <div>
    <audio
      autoplay
      id="gameStart"
      src="@/assets/music/pageMove/Jump High.mp3"
    ></audio>
    <div class="background-img">
      <img
        src="@/assets/Learn/LearnStart/rd-g.png"
        srcset="
          @/assets/Learn/LearnStart/rd-g@2x.png 2x,
          @/assets/Learn/LearnStart/rd-g@3x.png 3x
        "
        class="rd-g"
      />
      <img
        src="@/assets/Learn/LearnStart/yl-d.png"
        srcset="
          @/assets/Learn/LearnStart/yl-d@2x.png 2x,
          @/assets/Learn/LearnStart/yl-d@3x.png 3x
        "
        class="yl-d"
      />
      <img
        src="@/assets/Learn/LearnStart/yl-f.png"
        srcset="
          @/assets/Learn/LearnStart/yl-f@2x.png 2x,
          @/assets/Learn/LearnStart/yl-f@3x.png 3x
        "
        class="yl-f"
      />
      <img
        src="@/assets/Learn/LearnStart/rd-t.png"
        srcset="
          @/assets/Learn/LearnStart/rd-t@2x.png 2x,
          @/assets/Learn/LearnStart/rd-t@3x.png 3x
        "
        class="rd-t"
      />
      <img
        src="@/assets/Learn/LearnStart/bl.png"
        srcset="
          @/assets/Learn/LearnStart/bl@2x.png 2x,
          @/assets/Learn/LearnStart/bl@3x.png 3x
        "
        class="bl"
      />
      <img
        src="@/assets/Learn/LearnStart/gr.png"
        srcset="
          @/assets/Learn/LearnStart/gr@2x.png 2x,
          @/assets/Learn/LearnStart/gr@3x.png 3x
        "
        class="gr"
      />
      <img src="@/assets/Learn/LearnStart/shape-2.svg" class="Shape-2" />
      <img src="@/assets/layer-2.png" class="layer-2" />
      <img src="@/assets/camel-ele.png" class="camel-ele" />
    </div>
    <div class="main">
      <div class="title">
        <p>학습하기</p>
      </div>
      <br />
      <div class="main-text">
        <p>수어의 첫 걸음은 지문자부터!</p>
        <p>
          지문자를 처음 접하는 사용자도 누구나 쉽고 재미있게 익힐 수 있습니다.
        </p>
        <p>
          자음연습, 모음연습, 단어연습을 통해서 단계별로 실력을 향상시켜보세요
        </p>
      </div>
      <div>
        <button class="start" @click="handSelect">
          <span class="start-text"> 시작하기 -> </span>
        </button>
      </div>
    </div>
    <Footer />
  </div>
</template>


<script>
import Footer from "@/views/MainPage/Footer.vue";

export default {
  name: "LearnStartPage",
  methods: {
    handSelect: function () {
      this.$router.push("/WordSelect").catch(() => {});
    },
  },
  components: {
    Footer,
  },
};
</script>


<style scoped>
.title {
  position: absolute;
  width: 40vw;
  height: 7.625rem;
  margin: 6% 1% 3.938% 15.25%;
  object-fit: contain;
  font-family: BinggraeSamanco;
  font-size: 3.75vw;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #000;
  z-index: 2;
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

/* 이미지들 */

.layer-2 {
  position: absolute;
  z-index: -1;
  left: 0%;
  top: 10%;
  width: 100%;
  height: 90%;
}

img.Shape-2 {
  position: absolute;
  z-index: 0;
  width: 100%;
  left: 0%;
  top: 87.5%;
  height: 12.5%;
}

.camel-ele {
  position: absolute;
  left: 60%;
  top: 55%;
  width: 22.5%;
  z-index: 2;
  overflow: hidden;
  transition-duration: 10s;
  transition-property: transform;
}

.camel-ele:hover {
  transform: rotate(13deg);
  -webkit-transform: rotate(13deg);
}

.rd-g {
  position: absolute;
  top: 25%;
  left: 35%;
  z-index: 2;
  overflow: hidden;
  transition-duration: 7s;
  transition-property: transform;
}

.yl-f {
  position: absolute;
  top: 35%;
  left: 5%;
  z-index: 2;
  overflow: hidden;
  transition-duration: 7s;
  transition-property: transform;
}

.yl-d {
  position: absolute;
  top: 30%;
  left: 85%;
  z-index: 2;
  overflow: hidden;
  transition-duration: 7s;
  transition-property: transform;
}

.rd-t {
  position: absolute;
  top: 60%;
  left: 85%;
  z-index: 2;
  overflow: hidden;
  transition-duration: 7s;
  transition-property: transform;
}

.bl {
  position: absolute;
  top: 42.5%;
  left: 72.5%;
  z-index: 2;
  overflow: hidden;
  transition-duration: 7s;
  transition-property: transform;
}

.gr {
  position: absolute;
  top: 70%;
  left: 50%;
  z-index: 2;
  overflow: hidden;
  transition-duration: 7s;
  transition-property: transform;
}

.rd-g:hover {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}

.yl-d:hover {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}

.yl-f:hover {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}

.rd-t:hover {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}

.bl:hover {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}

.gr:hover {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}

/* 텍스트 */

.main-text {
  position: relative;
  width: 42.5vw;
  height: 10rem;
  margin: 15% 3% 0% 15.25%;
  object-fit: contain;
  font-family: GowunDodum-Regular;
  font-size: 1.25vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.78;
  letter-spacing: normal;
  text-align: left;
  color: #000;
  z-index: 2;
}

.start {
  position: absolute;
  width: 12.563rem;
  height: 4.063rem;
  left: 16%;
  top: 70%;
  object-fit: contain;
  background-color: #f5785d;
  border-style: none;
  border-radius: 30px;
  font-family: BinggraeSamanco;
  font-size: 4vh;
  z-index: 2;
}

.start-text {
  color: white;
  vertical-align: middle;
}
</style>