<template>
  <div>
    <!-- <img src="@/assets/shape-1.png" alt="yellowcloud" class="shape-1"> -->
    
    <div class="welcomewords">
      <p>아직 준비가 되지 않은 당신 옆에
      악수가 함께 하겠습니다</p>
    </div>

    <br>

    <div class="servicewords">
      <p>수어의 첫 걸음은 지문자부터</p>
      <p>지문자를 처음 접하는 사용자는 누구나 쉽고 재미있게 익힐 수 있습니다.</p>
      <p>자음연습, 모음연습, 단어연습을 통해서 단계별로 실력을 향상시켜보세요.</p>
    </div>

    <br>

    <button class="start">
      시작하기 ->
    </button>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

/* .shape-1 {
  width: 39.313rem;
  height: 36.813rem;
  margin: 2.313rem 80.688rem 15rem 0;
  padding: 28.875rem 29.938rem 6.375rem 8rem;
  object-fit: contain;
  background-color: #fff3d9;
} */

.welcomewords {
  width: 36rem;
  height: 7.625rem;
  margin: 11.625rem 1.375rem 3.938rem 15.25rem;
  object-fit: contain;
  font-family: BinggraeSamanco;
  font-size: 3.75rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #000;
}

.servicewords {
  width: 34rem;
  height: 5.063rem;
  margin: 1.938rem 3.063rem 1rem 15.125rem;
  object-fit: contain;
  font-family: GowunDodum-Regular;
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
  width: 12.563rem;
  height: 4.063rem;
  margin: 0.125rem 16.75rem 5.313rem 16.25rem;
  object-fit: contain;
  color: white;
  background-color: #f5785d;
  border-style: none;
  border-radius: 30px;
  font-family: BinggraeSamanco;
  font-size: 1.75rem;
}
</style>