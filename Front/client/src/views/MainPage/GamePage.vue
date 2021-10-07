<template>
  <div class="main">
    <!-- 배경음악 -->
    <audio
      autoplay
      id="gameStart"
      src="@/assets/music/pageMove/Jump High.mp3"
    ></audio>
    <!-- 게임하기 화면 구성하기 -->
    <div class="contents">
      <div class="title">
        <h1 class="title-text">게임하기 </h1>
        <h2 class="title-script">다양한 지문자 게임을 경험해 보세요!</h2>
      </div>
      <div data-v-3adcea5a="" class="section-game">
        <div data-v-3adcea5a="" class="home-game-group">
          <div
            data-v-3adcea5a=""
            class="ss04 is-animated mm_box animated fadeInUpBig"
            style="animation-delay: 0.3s"
          >
            <div data-v-3adcea5a="" class="mgi_thum">
              <img
                data-v-3adcea5a=""
                src="@/assets/acidrain-cover.png"
                alt="산성비 소개"
              />
            </div>
            <p class="game-title">"빗방울이 내리기 전에 타격!"</p>
            <span data-v-3adcea5a="" class="game-content">
              하늘에서 독성의 비가 내린다?
            </span>
            <p class="game-content">
              도치를 위해 빠르게 산성비를 제거해주세요!
            </p>
            <div class="btn-position">
              <b-button @click="gotoAcidrain" to="acid_rain/acid_rain/" class="start-game-btn">
                <span class="start-game-btn-text">게임 시작하기</span> 
              </b-button>
            </div>
          </div>
          <div
            data-v-3adcea5a=""
            class="ss05 is-animated mm_box animated fadeInUpBig"
            style="animation-delay: 0.6s"
          >
            <div data-v-3adcea5a="" class="mgi_thum">
              <img
                data-v-3adcea5a=""
                src="@/assets/hangman-cover.png"
                alt="행맨 소개"
              />
            </div>
            <p class="game-title">"단어를 맞춰 늑대한테 도망치자!"</p>
            <span data-v-3adcea5a="" class="game-content">
              뒤에 늑대가 쫓아온다고요?
            </span>
            <p class="game-content">
              단어를 맞춰 짹짹이가 도망가게 해주세요!
            </p>         
            <div class="btn-position">
              <b-button @click="gotoHangman" to="acid_rain/acid_rain/" class="start-game-btn">
                <span class="start-game-btn-text">게임 시작하기</span> 
              </b-button>
            </div>
          </div>
          <div
            data-v-3adcea5a=""
            class="ss06 is-animated mm_box animated fadeInUpBig"
            style="animation-delay: 0.9s"
          >
            <div data-v-3adcea5a="" class="mgi_thum">
              <img
                data-v-3adcea5a=""
                src="@/assets/cardflip-cover.png"
                alt="카드 뒤집기 소개"
              />
            </div>
            <p class="game-title">"카드의 짝을 찾아주자!"</p>
            <span data-v-3adcea5a="" class="game-content">
              뒤집고 뒤집어 승부를 뒤집는 영웅은 누구?
            </span>
            <p class="game-content">
              완벽한 전략으로 모든 카드를 뒤집어봐요!
            </p>
            <div class="btn-position">
              <b-button @click="gotoCardfilp" to="acid_rain/acid_rain/" class="start-game-btn">
                <span class="start-game-btn-text">게임 시작하기</span> 
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 배경 화면 이미지 -->
    <img src="@/assets/grass.png" alt="grass" class="grass" />
    <img src="@/assets/gosm.png" alt="gosm" class="gosm" />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/views/MainPage/Footer.vue";

export default {
  name: "GamePage",
  components: {
    Footer,
  },
  methods: {
    // 각 게임으로의 router 함수 정의
    gotoAcidrain() {
      this.$router.push({ name: "AcidRainMain" });
    },
    gotoCardfilp() {
      this.$router.push({ name: "CardflipMain" });
    },
    gotoHangman() {
      this.$router.push({ name: "HangManMain" });
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
  margin-top: 5vh;
  margin-bottom: 5vh;
}

.title h1{
  margin: 0 5vh 0 10vh;
  font-size: 3.75rem;
  font-family: BinggraeSamanco-Bold;
}

.title h2 {
  font-family: GowunDodum-Regular;
  font-size: 1.125rem;
  margin: 3vh 5vh 0 0;
}

.mgi_thum img[data-v-3adcea5a] {
  top: 0;
  left: 0;
  width: 100%;
}
.home-game-group[data-v-3adcea5a] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 0 30px;
}

.mm_box[data-v-3adcea5a] {
  border-radius: 15px;
  border: 5px solid #fff;
   max-width: 500px;
  margin: 0 20px;
  background: #fff;
  -webkit-box-shadow: 0 5px 5px rgb(68 68 68 / 40%);
  box-shadow: 0 5px 5px rgb(68 68 68 / 40%);
  height: 50%;

  overflow: hidden;
 
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  word-break: keep-all;
  -webkit-box-flex: 1;
  -ms-flex: 1 0 1%;
  flex: 1 0 1%;
  
}

.grass {
  position: absolute;
  left: 0%;
  top: 87.5%;
  width: 100%;
  height: 12.5%;
  z-index: -1;
}

.gosm {
  position: absolute;
  left: 70%;
  top: 85.5%;
  width: 10%;
  z-index: -1;
}

.game-title {
  font-family: BinggraeSamanco;
  font-size: 3.5vh;
  font-weight: bold;
  margin-top: 3%;
}

.game-content {
  font-family: GowunDodum-Regular;
  font-size: 2vh;
}

.btn-position {
  width: 100%;
}

.start-game-btn {
 background-color: #fe6e27;
 width: 70%;
 border: none;
 border-radius: 20px;
 box-shadow: 0.00rem 0.31rem 0.25rem 0.00rem rgba(0, 0, 0, 0.35);
}

.start-game-btn-text {
  font-family: SDSamliphopangche_Basic;
  font-size: 2.5vh;
  color: white;
}
</style>