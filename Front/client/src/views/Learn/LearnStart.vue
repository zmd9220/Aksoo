<template>
  <div>
    <div class="background-img">
      <!-- <img src="@/assets/Learn/LearnStart/yl-f.svg" class="yl-g">
      <img src="@/assets/Learn/LearnStart/rd-g.svg" class="rd-g">
      <img src="@/assets/Learn/LearnStart/yl-d.svg" class="yl-d">
      <img src="@/assets/Learn/LearnStart/rd-t.svg" class="rd-t">
      <img src="@/assets/Learn/LearnStart/bl.svg" class="bl">
      <img src="@/assets/Learn/LearnStart/gr.svg" class="gr"> -->
      <img src="@/assets/Learn/LearnStart/yl-d.png" srcset="@/assets/Learn/LearnStart/yl-d@2x.png 2x, @/assets/Learn/LearnStart/yl-d@3x.png 3x" class="yl-d">
      <img src="@/assets/Learn/LearnStart/yl-f.png" srcset="@/assets/Learn/LearnStart/yl-f@2x.png 2x, @/assets/Learn/LearnStart/yl-f@3x.png 3x" class="yl-f">
      <img src="@/assets/Learn/LearnStart/rd-g.png" srcset="@/assets/Learn/LearnStart/rd-g@2x.png 2x, @/assets/Learn/LearnStart/rd-g@3x.png 3x" class="rd-g">
      <img src="@/assets/Learn/LearnStart/rd-t.png" srcset="@/assets/Learn/LearnStart/rd-t@2x.png 2x, @/assets/Learn/LearnStart/rd-t@3x.png 3x" class="rd-t">
      <img src="@/assets/Learn/LearnStart/bl.png" srcset="@/assets/Learn/LearnStart/bl@2x.png 2x, @/assets/Learn/LearnStart/bl@3x.png 3x" class="bl">
      <img src="@/assets/Learn/LearnStart/gr.png" srcset="@/assets/Learn/LearnStart/gr@2x.png 2x, @/assets/Learn/LearnStart/gr@3x.png 3x" class="gr">
      <img src="@/assets/Learn/LearnStart/shape-2.svg" class="Shape-2">
    </div>
    <div class="main">
      <span class="title">
        학습하기
      </span>
      <span class="main-text">
        수어의 첫 걸음은 지문자부터!
      지문자를 처음 접하는 사용자도 누구나 쉽고 재미있게 익힐 수 있습니다.
      자음연습, 모음연습, 단어연습을 통해서 단계별로 실력을 향상시켜보세요
      </span>
      <div>
        <button class="start" @click="handSelect">
          <span class="start-text">
            시작하기 ->
          </span>
          </button>
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
  width: 9.563rem;
  height: 3.313rem;
  margin: 2.5rem 5.813rem 1.25rem 9.625rem;
  object-fit: contain;
  font-family: BinggraeSamanco;
  font-size: 3.75rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.67;
  letter-spacing: normal;
  text-align: center;
  color: #000;
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

img.rd-g {
  width: 3.75rem;
  height: 4.938rem;
  margin: 0 18.688rem 2.5rem 0.625rem;
  object-fit: contain;
}

img.yl-f {
  width: 4.438rem;
  height: 3.875rem;
  margin: 1.25rem 9.625rem 4.5rem 0;
  object-fit: contain;
}
img.Shape-2 {
  width: 119.938rem;
  height: 8.25rem;
  margin: 8.188rem 0 0;
  object-fit: contain;
}

img.yl-d {
  width: 4.5rem;
  height: 5.875rem;
  margin: 4.813rem 0 1.313rem 10.688rem;
  object-fit: contain;
}

img.rd-t {
  width: 2.625rem;
  height: 3.875rem;
  margin: 0.625rem 3.188rem 1.938rem 9.375rem;
  object-fit: contain;
}

img.bl {
  width: 4.188rem;
  height: 4.75rem;
  margin: 3.25rem 9.375rem 1.75rem 26.938rem;
  object-fit: contain;
}

img.gr {
  width: 4.063rem;
  height: 4.5rem;
  margin: 2.063rem 26.938rem 0 4rem;
  object-fit: contain;
}

/* 텍스트 */

.main-text {
  width: 33.5rem;
  height: 5.063rem;
  margin: 1.75rem 4rem 0.625rem 9.938rem;
  object-fit: contain;
  font-family: GowunDodum-Regular;
  /* font-family: GowunDodum; */
  font-size: 1.125rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.78;
  letter-spacing: normal;
  text-align: left;
  color: #000;
}

.start {
  width: 14.188rem;
  height: 4.313rem;
  margin: 1.938rem 0.625rem 0.313rem 10.188rem;
  padding: 1.188rem 2.688rem 1.188rem 2.563rem;
  object-fit: contain;
  border-radius: 35.3px;
  background-color: hsl(10, 88%, 66%);
}

.start-text {
  width: 8.938rem;
  height: 1.938rem;
  object-fit: contain;
  font-family: BinggraeSamanco;
  font-size: 2.5rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
}
</style>