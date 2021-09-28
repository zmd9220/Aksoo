<template>
  <div class="hangman-main">
    <div class="hangman-desc">
      <h1>행맨</h1>
      <h2>어쩌구 저쩌구 행맨 게임을 경험해 보세요!</h2>
    </div>
    <div class="hangman-main-box">
      <div class="hangman-thumbnail-box"></div>
      <div class="hangman-select-box">
        <div class="hangman-select-box-title">어쩌구를 선택하세요</div>
        <div class="hangman-topic">
          <select class="selectBox" v-model="topic">
          <option disabled selected style="text-align:center">주제</option>
          <option v-for="option in topic_options" v-bind:value="option.text" :key="option" style="text-align:center">
            {{ option.text }}
          </option>
          </select>
        </div>
        <div class="hangman-diff">
          <select class="selectBox" v-model="diff">
          <option disabled selected style="text-align:center">난이도</option>
          <option v-for="option in diff_options" v-bind:value="option.text" :key="option" style="text-align:center">
            {{ option.text }}
          </option>
          </select>
        </div>
        <div class="hangman-start-button" @click="gotoHangManPage">게임시작!</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
          topic: '주제',
          diff: '난이도',
          topic_options: [
            { text: 'FOOD', value: 0 },
            { text: 'ANIMAL', value: 1 },
            { text: 'SPORT', value: 2 }
          ],
          diff_options: [
            { text: 'EASY', value: 0 },
            { text: 'MIDDLE', value: 1 },
            { text: 'HARD', value: 2 }
          ],
        }
    },
    name: "HangManMain",
    components: {
    },
    methods: {
      gotoHangManPage() {
        if (this.topic === '주제'){
          alert('주제를 선택해주세요')
        } else if (this.diff === '난이도') {
          alert('난이도를 선택해주세요')
        } else {
          this.$router.push({ name: 'HangManPage', params: { topic: this.topic, diff: this.diff}})
        }

        // // 이름을 가지는 라우트
        // router.push({ name: 'user', params: { userId: 123 }})
      }
    },
};
</script>

<style scoped>
.hangman-main .hangman-desc{
  display: flex;
  margin-top: 10vh;
  margin-bottom: 10vh;
} 

.hangman-main .hangman-desc h1{
  margin: 0 5vh 0 10vh;
  font-size: 3.75rem;
  /* font-weight: bold; */
  font-family: BinggraeSamanco-Bold;
  
} 

.hangman-main .hangman-desc h2{
  font-family: GowunDodum-Regular;
  font-size: 1.125rem;
  margin: 3vh 5vh 0 10vh;
} 

.hangman-main .hangman-main-box{
  display: flex;
  background-color: #F4F1EB;
  height: 50vh;
  width: 60%;
  margin: auto;
  border-radius: 20px;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
}

.hangman-main .hangman-main-box .hangman-thumbnail-box{
  background-color: rgb(158, 157, 157);
  width: 50%;
  height: 80%;
  margin: auto;
  border-radius: 20px;
}
.hangman-main .hangman-main-box .hangman-select-box{
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
  /* background-color: #E5D2BD; */
  border-radius: 20px;
  font-family: 'SDSamliphopangche_Basic';
  font-size: 2rem;
  color: #B59E7A;
}

.hangman-main .hangman-main-box .hangman-select-box .hangman-topic {
  width: 100%;
  height: 20%;
  background-color: #E5D2BD;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
  border-radius: 40px;
  display: inline-block;
  overflow: hidden;
  border: 3px solid #957457;
  font-family: 'SDSamliphopangche_Basic';
  font-size: 2rem;
  color: #957457;
}

.hangman-main .hangman-main-box .hangman-select-box .hangman-topic .selectBox {
  border: 0px;
  outline: none;
  background-color: #E5D2BD;
  color: #957457;
  width: 100%;
}

.hangman-main .hangman-main-box .hangman-select-box .hangman-diff {
  width: 100%;
  height: 20%;
  background-color: #E5D2BD;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
  border-radius: 40px;
  display: inline-block;
  overflow: hidden;
  border: 3px solid #957457;
  font-family: 'SDSamliphopangche_Basic';
  font-size: 2rem;
  color: #957457;
}

.hangman-main .hangman-main-box .hangman-select-box .hangman-diff .selectBox {
  border: 0px;
  outline: none;
  background-color: #E5D2BD;
  color: #957457;
  width: 100%;
}

.hangman-main .hangman-main-box .hangman-select-box .hangman-start-button {
  width: 100%;
  height: 20%;
  background-color: #957457;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
  border-radius: 40px;    
  cursor: pointer;
  border: 3px solid #E5D2BD;
  font-family: 'SDSamliphopangche_Basic';
  font-size: 2rem;
  color: #E5D2BD;
}
</style>