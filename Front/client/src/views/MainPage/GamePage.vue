<template>
  <div class="main">
    <audio
      autoplay
      id="gameStart"
      src="@/assets/music/pageMove/Jump High.mp3"
    ></audio>
    <p class="title">
      <span class="title-text">게임하기 </span>
      <span class="title-script">어쩌구 저쩌구 게임을 경험해 보세요!</span>
    </p>
    <div data-v-3adcea5a="" class="section-game">
      <div
        data-v-3adcea5a=""
        class="ss01 is-aniamte-fade animated fadeIn"
        style="animation-delay: 0.5s"
      >
        <img data-v-3adcea5a="" src="/images/main/section02_txt01.png" alt="" />
      </div>
      <div data-v-3adcea5a="" class="hoem-game-char">
        <div
          data-v-3adcea5a=""
          class="ss02 is-animated__single animated rollIn"
          style="animation-delay: 1.7s"
        >
          <img data-v-3adcea5a="" src="/images/main/tt07.png" alt="" />
        </div>
        <div
          data-v-3adcea5a=""
          class="ss03 is-aniamte-fade animated fadeIn"
          style="animation-delay: 0.8s"
        >
          <img data-v-3adcea5a="" src="/images/main/tt03.png" alt="" />
        </div>
      </div>
      <div data-v-3adcea5a="" class="home-game-group">
        <div
          data-v-3adcea5a=""
          class="ss04 is-animated mm_box animated fadeInUpBig"
          style="animation-delay: 0.3s"
        >
          <div data-v-3adcea5a="" class="mgi_thum">
            <img
              data-v-3adcea5a=""
              src="@/assets/acid-rain-cover.png"
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
          <div>
            <b-button to="acid_rain/acid_rain/" class="start-game-btn">
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
              src="@/assets/acid-rain-cover.png"
              alt="행맨 소개"
            />
          </div>
          <p class="game-title">"단어를 맞춰 늑대에서 도망치자!"</p>
          <span data-v-3adcea5a="" class="game-content">
            뒤에 늑대가 쫓아온다고요?
          </span>
          <p class="game-content">
            단어를 맞춰 짹짹이가 도망가게 해주세요!
          </p>         
          <div>
            <b-button to="acid_rain/acid_rain/" class="start-game-btn">
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
              src="@/assets/acid-rain-cover.png"
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
          <div>
            <b-button to="acid_rain/acid_rain/" class="start-game-btn">
              <span class="start-game-btn-text">게임 시작하기</span> 
            </b-button>
          </div>
        </div>
      </div>
    </div>
    <img src="@/assets/grass.png" alt="grass" class="grass" />
    <img src="@/assets/gosm.png" alt="gosm" class="gosm" />
  </div>
</template>

<script>
</script>

<style scoped>
.title {
  position: absolute;
  left: 10%;
  top: 15%;
}

.title-text {
  font-family: BinggraeSamanco-Bold;
  font-size: 3.75vw;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
}

.title-script {
  font-family: GowunDodum-Regular;
  font-size: 1vw;
}

.mgi_thum img[data-v-3adcea5a] {
  /* position: absolute; */
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
  overflow: hidden;
  max-width: 365px;
  margin: 0 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: #fff;
  -webkit-box-shadow: 0 5px 5px rgb(68 68 68 / 40%);
  box-shadow: 0 5px 5px rgb(68 68 68 / 40%);
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
  z-index: -1;
}

.gosm {
  position: absolute;
  left: 70%;
  top: 85%;
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

.start-game-btn {
 position: relative;
 background-color: #fe6e27;
 width: 70%;
 margin-bottom: 10%;
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