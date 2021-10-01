<template>
  <div>
    <div class="my-profile">
      <img src="@/assets/croc.png" alt="profile_picture" class="profile-pic">
      <div class="">
        <div style="height:2vh"></div>
        <h3>{{nickname}}</h3>
        <div class="tier-wrapper">
          <img src="@/assets/dot-bl.png" alt="tier-picture" class="tier-pic" style="width: 1.5rem;margin-right:0.5rem">
          {{tier}}
        </div>
        <div class="user-box-wrapper">
          <div style="margin-right: 5vw;">
            {{friend_num}}
            <h5>친구</h5>
          </div>
          <div style="margin-right: 5vw;">
            {{max_rank}}
            <h5>최고 랭킹</h5>
          </div>
          <div>
            {{sum_score}}
            <h5>누적 점수</h5>
          </div>
        </div>
        <div class="edit-button">EDIT</div>
      </div>
    </div>
    <div class="recode-wrapper">

      <div class="play-record">
        <h2>플레이기록</h2>
        <div class="game-recode">
          <img src="@/assets/acidStart.png" alt="acidrain_picture" class="acidrain-pic">
          <div style="display:flex; width:100%;justify-content: space-between;">
            <div>
              <h4>산성비</h4>
              <div class="user-recode-wrapper">
                <h5>현재 랭킹 {{acid_rain.rank}}위</h5>
                <h5>최고 점수 {{acid_rain.max_score}}P</h5>
              </div>
            </div>
            <div>
              <div>PLAY</div>
              <div>명예의전당</div>
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="flip-card">
        <div class="game-recode">
          <img src="@/assets/acidStart.png" alt="acidrain_picture" class="acidrain-pic">
          <h4>카드 뒤집기</h4>
          <h5>현재 랭킹 {{flip_card.rank}}위</h5>
          <h5>최고 점수 {{flip_card.max_score}}P</h5>
          <div>PLAY</div>
          <div>명예의전당</div>
        </div>
        </div>
        <div class="line"></div>
        <div class="word-guess">
        <div class="game-recode">
          <img src="@/assets/acidStart.png" alt="acidrain_picture" class="acidrain-pic">
          <h4>단어 맞추기</h4>
          <h5>현재 랭킹 {{word_guess.rank}}위</h5>
          <h5>최고 점수 {{word_guess.max_score}}P</h5>
          <div>PLAY</div>
          <div>명예의전당</div>
        </div>
        </div>
        <div class="line"></div>
      </div>
      <div class="friends-list">
        <h2>친구 목록</h2> {{friend_num}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Profile",
  data() {
    return {
      nickname: '비비디바비디부',
      tier: 'Platinum',
      friend_num: '8',
      max_rank: '15',
      sum_score: '3800',
      acid_rain: {
        rank: 10,
        max_score: 1500,
      },
      flip_card: {
        rank: 11,
        max_score: 1300,
      },
      word_guess: {
        rank: 13,
        max_score: 1600,
      },
    }
  }
};
</script>
<style scoped>
.my-profile{
  background-color: #F4F1EB;
  width: 100%;
  height: 35vh;
  display: flex;
  /* margin-left:4rem; */
  /* justify-content: center; */
  align-items: center;
  /* flex-direction: column;
  align-items: flex-start; */
}
.my-profile .profile-pic{
  background-color: yellow;
  height: 25vh;
  width: 25vh;
  margin-left:20vw;
  /* border: 3px solid gold; */
  border-radius: 100%;
}
.my-profile h3{
  font-weight: bold;
  margin-left: 2vw;
}
.my-profile .tier-wrapper{
  display: flex;
  margin-left: 2.5vw;
  color:gray;
}
.my-profile .user-box-wrapper{
  display: flex;
  margin-left: 2.5vw;
  /* color:gray; */
  font-weight: 500;
  font-size: 4vh;
  /* margin-right: 200vw; */
}
.my-profile .user-box-wrapper h5{
  color: gray;
  font-size: 1.8vh;
  font-weight: bold;
}
.my-profile .edit-button {
  background-color: #957457;
  width: 4.5vw;
  height: 3vh;
  color: #fff;
  font-weight: 100;
  font-size: 15px;
  border-radius: 20px;
  text-align: center;
  margin-left: 2vw;
  margin-top: 1vh;
}
.recode-wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.recode-wrapper .play-record{
  width: 70%;
  height: 60vh;
  margin-top: 8vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.recode-wrapper .play-record .game-recode{
  display: flex;
  width: 100%;
  /* justify-content: space-between; */
}
.recode-wrapper .play-record .game-recode .user-recode-wrapper{
  display: flex;
  /* font-size: 10vh; */
}
.recode-wrapper .play-record .game-recode .user-recode-wrapper h5{
  /* display: flex; */
  font-size: 2vh;
}
h2 {
  margin-bottom: 3vh;
}

.line {
  width: 100%;
  height: 3px;
  margin-top: 2vh;
  margin-bottom: 2vh;
  background-color: #F4F1EB;
}
.recode-wrapper .play-record .acidrain-pic{
  width: 15vh;
  height: 13vh;
  border-radius: 10px;
}
.recode-wrapper .friends-list{
  width: 70%;
  height: 40vh;
  margin-top: 8vh;
  background-color: gray;
  display: flex;
}
</style>