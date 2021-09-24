<template>
  <div>
    <div class="background-img">
      <img src="@/assets/shape-1.png" alt="yellowcloud1" class="shape-1">
      <img src="@/assets/dot-bl.png" alt="bluedot" class="bluedot">
      <img src="@/assets/dot-gr.png" alt="greendot" class="greendot">
      <img src="@/assets/dot-rd.png" alt="reddot" class="reddot">
      <img src="@/assets/dot-yl.png" alt="yellowdot" class="yellowdot">
    </div>
    
    <div class="welcomewords">
      <p>아직 준비가 되지 않은 당신 옆에</p>
      <p>악수가 함께 하겠습니다</p>
    </div>

    <br>

    <div class="servicewords">
      <p>수어의 첫 걸음은 지문자부터!</p>
      <p>지문자를 처음 접하는 사용자는 누구나 쉽고 재미있게 익힐 수 있습니다.</p>
      <p>자음연습, 모음연습, 단어연습을 통해 단계별로 실력을 향상시켜보세요.</p>
    </div>

    <br>

    <div>
      <b-button to="Start" class="start">
        <span class="start-text"> 시작하기 -> </span>
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

.shape-1 {
  position: absolute;
  top: 10%;
  left: 0%;
  width: 40%;
  /* margin: 2.313rem 80.688rem 15rem 0; */
  /* padding: 28.875rem 29.938rem 6.375rem 8rem; */
  object-fit: fill;
  background-color: #fff3d9;
  z-index: -1;
}

.bluedot {
  position: absolute;
  top: 37.5%;
  left: 8%;
  z-index: 2;
}

.greendot {
  position: absolute;
  top: 87.5%;
  left: 30%;
  z-index: 2;
}

.reddot {
  position: absolute;
  top: 20%;
  left: 50%;
  z-index: 2;
}

.yellowdot {
  position: absolute;
  top: 90%;
  left: 85%;
  z-index: 2;
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
  position: relative;
  width: 12.563rem;
  height: 4.063rem;
  margin: 0.125% 16.75% 5.313% 12.25%;
  object-fit: contain;
  background-color: #f5785d;
  border-style: none;
  border-radius: 30px;
  font-family: BinggraeSamanco;
  font-size: 1.75rem;
  z-index: 2;
}

.start-text {
  color: white;
  vertical-align: middle;
}
</style>