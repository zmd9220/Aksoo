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
              src="@/assets/acid_rain.png"
              alt="산성비 소개"
            />
          </div>
          <p data-v-3adcea5a="" class="ta_c">
            빠르고 날쌔게~ 떨어지는 산성비를 피하자!
          </p>
          <div data-v-3adcea5a="" class="main-play-game">
            <a data-v-3adcea5a="" title="산성비 게임 시작하기"
              ><img
                data-v-3adcea5a=""
                src="@/assets/button_play_game.png"
                alt="산성비 게임 시작하기"
            /></a>
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
              src="/images/main/tt04.png"
              alt="행맨 소개"
            />
          </div>
          <p data-v-3adcea5a="" class="ta_c">행맨의 달인에 도전해 보세요!</p>
          <div data-v-3adcea5a="" class="main-play-game">
            <a data-v-3adcea5a="" title="행맨 게임 시작하기"
              ><img
                data-v-3adcea5a=""
                src="@/assets/button_play_game.png"
                alt="행맨 게임 시작하기"
            /></a>
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
              src="/images/main/tt06.png"
              alt="카드 뒤집기 소개"
            />
          </div>
          <p data-v-3adcea5a="" class="ta_c">
            카드를 뒤집을 역전의 용사, 누구인가?
          </p>
          <div data-v-3adcea5a="" class="main-play-game">
            <a data-v-3adcea5a="" title="카드 뒤집기 게임 시작하기"
              ><img
                data-v-3adcea5a=""
                src="@/assets/button_play_game.png"
                alt="카드 뒤집기 게임 시작하기"
            /></a>
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

.section-game {
  position: absolute;
  left: 5%;
  top: 20%;
}

.title-text {
  font-family: BinggraeSamanco-Bold;
  font-size: 5vw;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
}

.title-script {
  font-family: GowunDodum-Regular;
  font-size: 1.75vw;
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
</style>