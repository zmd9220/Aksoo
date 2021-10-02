<template>
  <div>
    <div class="main">
      <div>
        <div>
          <h1 class="title">학습하기</h1>
        </div>
        <div class="contents">
          학습하실 단계를 선택해주세요.
        </div>
      </div>
      <div class="bt">
        <b-button class="goword" @click="setlevel('con')">자음</b-button>
        <b-button class="goword" @click="setlevel('vow')">모음</b-button>
        <b-button class="goword" @click="setlevel('word')">단어</b-button>
        <!-- <b-button class="gonext" @click="setlevel('bookmark')" >즐겨찾기</b-button> -->
        <b-button class="goback" @click="handSelect()">&lt;- 이전</b-button>
        <b-button class="gonext" @click="goNextLevel()">다음 -></b-button>
      </div>
    </div>
    <div class="background-img">     
      <img src="@/assets/cloud.png" class="cloud">
      <img src="@/assets/Learn/LearnStart/shape-2.svg" class="Shape-2">
    </div>
  </div>
</template>

<script>
export default {
  name: "handSelect",
  data: function () {
    return {
      level: '',
      num: '',
    }
  },
  methods: {
    setlevel: function (word) {
      this.level = word
      if (this.level === 'con'){
        this.num = 1
      }else if(this.level === 'vow'){
        this.num = 0
      }else {
        this.num = 0 
      }
    },
    handSelect: function () {
      this.$router.push("/Select").catch(() => {});
    },
    goNextLevel: function () {
      if (this.level === '') {
        alert('단계를 선택해주세요')
      } else {
        // this.$router.push("/Learn/Learning" + '_' + this.level).catch(() => {});
        this.$router.push({name: 'Learning', params: {select: this.level,  mode_letter: this.num}}).catch(() => {})
      }
    }
  },
};
</script>

<style scoped>
.main {
  z-index: 1;
  margin-top: 10%;
  margin-left: 20%;
  margin-right: 20%;
  float: center;
}
.bt {
  margin: 0% 25%;
  float: center;
  z-index: 2;
}

.title {
  font-size: 3vh;
  font-family: 'BinggraeSamanco-bold';
  position: absolute;
  left: 48%;
  top: 18%;
}

.contents {
  font-size: 2vh;
  font-family: 'GowunDodum-Regular';
  position: absolute;
  left: 44%;
  top: 22%;
}

.goword {
  vertical-align: top;
  z-index: 2;
  margin: 2%;
  background-color: white;
  text-align: center;
  color: rgba(128, 128, 128, 0.733);
  width: 65%;
  height: 5%;
  border-color: rgba(223, 216, 216, 0.959);
  border-width: 0.25vh;
  border-radius: 40px;
  font-family: 'BinggraeSamanco';
  font-size: 2rem;
}

.gonext {
  margin: 2%;
  margin-top: 10%;
  background-color: #69C995;
  text-align: center;
  color: rgb(255, 255, 255);
  width: 30%;
  height: 5%;
  border-color: #69C995;
  border-width: 0.25vh;
  border-radius: 40px;
  font-family: 'BinggraeSamanco';
  font-size: 2rem;
}

.goback {
  margin: 2%;
  margin-top: 10%;
  background-color: white;
  text-align: center;
  color: rgba(128, 128, 128, 0.733);
  width: 30%;
  height: 5%;
  border-color: rgba(223, 216, 216, 0.959);
  border-width: 0.25vh;
  border-radius: 40px;
  font-family: 'BinggraeSamanco';
  font-size: 2rem;
}

/* background */

img.cloud {
  position: absolute;
  z-index: -1;
  width: 90%;
  height: 27%;
  left: 5%;
  top: 30%;
}

img.Shape-2 {
  position: absolute;
  z-index: 0;
  width: 100%;
  left: 0%;
  top: 87.5%;
  height: 12.5%;
  }

</style>