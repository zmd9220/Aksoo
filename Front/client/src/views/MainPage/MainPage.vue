<template>
  <div style="overflow: hidden">
    <!-- 배경음악 -->
    <audio
      loop
      id="gameBgm"
      src="@/assets/music/bgm/keys-of-moon-white-petals.mp3"
    ></audio>
    <audio
      autoplay
      id="gameStart"
      src="@/assets/music/pageMove/Jump High.mp3"
    ></audio>
    <!-- 배경 이미지 -->
    <div class="background-img">
      <img src="@/assets/shape-1.png" alt="yellowcloud1" class="shape-1" />
      <img src="@/assets/shape-2-main.png" alt="yellowcloud2" class="shape-2" />

      <img src="@/assets/dot-bl.png" alt="bluedot" class="bluedot" />
      <img src="@/assets/dot-gr.png" alt="greendot" class="greendot" />
      <img src="@/assets/dot-rd.png" alt="reddot" class="reddot" />
      <img src="@/assets/dot-yl.png" alt="yellowdot" class="yellowdot" />

      <div class="letters">
        <img src="@/assets/eung-yl.png" alt="eung" class="eung" />
        <img src="@/assets/chieut-bl.png" alt="chieut" class="chieut" />
        <img src="@/assets/hieuh-rd.png" alt="hieuh" class="hieuh" />
        <img src="@/assets/lieul-yl.png" alt="lieul" class="lieul" />
        <img src="@/assets/pieup-gr.png" alt="pieup" class="pieup" />
      </div>

      <img src="@/assets/croc.png" alt="croc" class="croc" />
    </div>

    <!-- 환영글 -->
    <div class="welcomewords">
      <p>아직 준비가 되지 않은 당신 옆에</p>
      <p>악수가 함께 하겠습니다</p>
    </div>

    <br />

    <!-- 서비스 소개 -->
    <div class="servicewords">
      <p>수어의 첫 걸음은 지문자부터!</p>
      <p>
        지문자를 처음 접하는 사용자는 누구나 쉽고 재미있게 익힐 수 있습니다.
      </p>
      <p>자음연습, 모음연습, 단어연습을 통해 단계별로 실력을 향상시켜보세요.</p>
    </div>

    <br />

    <div>
      <!-- 학습하기로 이동 -->
      <b-button to="Start" class="start">
        <span class="start-text"> 시작하기 -> </span>
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  // 페이지 입장 시 음악 재생
  mounted() {
    var gameBgm = document.getElementById("gameBgm");
    gameBgm.volume = 0.2;
    gameBgm.play();
  },
};
</script>

<style scoped>
.shape-1 {
  position: absolute;
  top: 10%;
  left: 0%;
  width: 40%;
  object-fit: fill;
  background-color: #fff3d9;
  z-index: -1;
}

.shape-2 {
  position: absolute;
  top: 40%;
  left: 65%;
  width: 30%;
  object-fit: fill;
  background-color: #fff3d9;
  z-index: -1;
}

.bluedot {
  position: absolute;
  top: 37.5%;
  left: 8%;
  z-index: 2;
  width: 1.5%;
}

.greendot {
  position: absolute;
  top: 87.5%;
  left: 30%;
  z-index: 2;
  width: 1.5%;
}

.reddot {
  position: absolute;
  top: 27.5%;
  left: 50%;
  z-index: 2;
  width: 2.5%;
}

.yellowdot {
  position: absolute;
  top: 90%;
  left: 75%;
  z-index: 2;
  width: 2%;
}

.eung {
  position: absolute;
  top: 70%;
  left: 50%;
  z-index: 2;
  width: 5%;
  overflow: hidden;
  transition-duration: 10s;
  transition-property: transform;
}

.chieut {
  position: absolute;
  top: 30%;
  left: 57.5%;
  z-index: 2;
  width: 6%;
  overflow: hidden;
  transition-duration: 10s;
  transition-property: transform;
}

.hieuh {
  position: absolute;
  top: 45%;
  left: 67.5%;
  z-index: 2;
  width: 7%;
  overflow: hidden;
  transition-duration: 10s;
  transition-property: transform;
}

.lieul {
  position: absolute;
  top: 25%;
  left: 85%;
  z-index: 2;
  width: 6%;
  overflow: hidden;
  transition-duration: 10s;
  transition-property: transform;
}

.pieup {
  position: absolute;
  top: 80%;
  left: 85%;
  z-index: 2;
  width: 5%;
  overflow: hidden;
  transition-duration: 7s;
  transition-property: transform;
}

.chieut:hover {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}

.eung:hover {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}

.lieul:hover {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}

.hieuh:hover {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}

.pieup:hover {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}

.croc {
  position: absolute;
  top: 42.5%;
  left: 57.5%;
  z-index: 1;
  width: 25%;
  overflow: hidden;
  transition-duration: 10s;
  transition-property: transform;

  animation-name: croc;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-fill-mode: backwards;
}

@keyframes croc {
  0% {
    transform: rotate(0deg);
  -webkit-transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
  }
}

.welcomewords {
  position: relative;
  width: 40vw;
  height: 7.625rem;
  margin: 6% 1% 3.938% 10.25%;
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

.servicewords {
  position: relative;
  width: 42.5vw;
  height: 10rem;
  margin: 0% 3% 10% 10.25%;
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
  left: 12.5%;
  top: 80%;
  object-fit: contain;
  background-color: #f5785d;
  border-style: none;
  border-radius: 30px;
  font-family: BinggraeSamanco;
  font-size: 4vh;
  z-index: 2;
  padding: 0%;
}

.start-text {
  color: white;
  vertical-align: middle;
  
}
</style>