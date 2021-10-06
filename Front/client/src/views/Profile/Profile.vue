<template>
  <div>
    <audio
      autoplay
      id="gameStart"
      src="@/assets/music/bgm/the-cutest-bunny.mp3"
    ></audio>
    <div class="my-profile">
      <img :src='"@/assets/Profile/prf-" + profile_name[profile%7] +".png"' alt="profile_picture" class="profile-pic" />
      <div class="">
        <div style="height: 2vh"></div>
        <h3>{{ nickname }}</h3>
        <div class="tier-wrapper">
          <img v-if="tier == 5" src="@/assets/Ranking/brz.png" alt="tier-picture" class="tier-pic" style="width: 1.5rem; margin-right: 0.5rem"/>
          <img v-if="tier == 4" src="@/assets/Ranking/slv.png" alt="tier-picture" class="tier-pic" style="width: 1.5rem; margin-right: 0.5rem"/>
          <img v-if="tier == 3" src="@/assets/Ranking/gld.png" alt="tier-picture" class="tier-pic" style="width: 1.5rem; margin-right: 0.5rem"/>
          <img v-if="tier == 2" src="@/assets/Ranking/pltn.png" alt="tier-picture" class="tier-pic" style="width: 1.5rem; margin-right: 0.5rem"/>
          <img v-if="tier == 1" src="@/assets/Ranking/dmd.png" alt="tier-picture" class="tier-pic" style="width: 1.5rem; margin-right: 0.5rem"/>
          {{tier_num_to_str[tier]}}
        </div>
        <div class="user-box-wrapper">
          <div style="margin-right: 5vw">
            {{ friend_num }}
            <h5>친구</h5>
          </div>
          <div style="margin-right: 5vw">
            {{ max_rank }}
            <h5>최고 랭킹</h5>
          </div>
          <div>
            {{ sum_score }}
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
          <img
            src="@/assets/acidrain-cover.png"
            alt="acidrain_picture"
            class="acidrain-pic"
          />
          <div
            style="display: flex; width: 100%; justify-content: space-between"
          >
            <div
              style="
                display: flex;
                flex-direction: column;
                justify-content: space-around;
              "
            >
              <h4>산성비</h4>
              <div class="user-recode-wrapper">
                <h5>
                  현재 랭킹
                  <span style="color: #957457">{{ acid_rain.rank }}위</span>
                </h5>
                <h5>
                  최고 점수
                  <span style="color: #957457">{{ acid_rain.max_score }}P</span>
                </h5>
              </div>
            </div>
            <div
              style="
                display: flex;
                flex-direction: column;
                justify-content: space-between;
              "
            >
              <div style="height: 1.8vh"></div>
              <div class="play-button">PLAY</div>
              <div
                style="
                  text-align: end;
                  color: #957457;
                  font-weight: 500;
                  font-size: 1.8vh;
                "
                @click="
                  $router.push({ name: 'RankingMain', params: { whatgame: 0 } })
                "
              >
                명예의전당
              </div>
            </div>
          </div>
        </div>

        <div class="line"></div>

        <div class="game-recode">
          <img
            src="@/assets/cardflip-cover.png"
            alt="acidrain_picture"
            class="acidrain-pic"
          />
          <div
            style="display: flex; width: 100%; justify-content: space-between"
          >
            <div
              style="
                display: flex;
                flex-direction: column;
                justify-content: space-around;
              "
            >
              <h4>카드 뒤집기</h4>
              <div class="user-recode-wrapper">
                <h5>
                  현재 랭킹
                  <span style="color: #957457">{{ flip_card.rank }}위</span>
                </h5>
                <h5>
                  최고 점수
                  <span style="color: #957457">{{ flip_card.max_score }}P</span>
                </h5>
              </div>
            </div>
            <div
              style="
                display: flex;
                flex-direction: column;
                justify-content: space-between;
              "
            >
              <div style="height: 1.8vh"></div>
              <div class="play-button">PLAY</div>
              <div
                style="
                  text-align: end;
                  color: #957457;
                  font-weight: 500;
                  font-size: 1.8vh;
                "
                @click="
                  $router.push({ name: 'RankingMain', params: { whatgame: 1 } })
                "
              >
                명예의전당
              </div>
            </div>
          </div>
        </div>

        <div class="line"></div>

        <div class="game-recode">
          <img
            src="@/assets/hangman-cover.png"
            alt="acidrain_picture"
            class="acidrain-pic"
          />
          <div
            style="display: flex; width: 100%; justify-content: space-between"
          >
            <div
              style="
                display: flex;
                flex-direction: column;
                justify-content: space-around;
              "
            >
              <h4>단어 맞추기</h4>
              <div class="user-recode-wrapper">
                <h5>
                  현재 랭킹
                  <span style="color: #957457">{{ word_guess.rank }}위</span>
                </h5>
                <h5>
                  최고 점수
                  <span style="color: #957457"
                    >{{ word_guess.max_score }}P</span
                  >
                </h5>
              </div>
            </div>
            <div
              style="
                display: flex;
                flex-direction: column;
                justify-content: space-between;
              "
            >
              <div style="height: 1.8vh"></div>
              <div class="play-button">PLAY</div>
              <div
                style="
                  text-align: end;
                  color: #957457;
                  font-weight: 500;
                  font-size: 1.8vh;
                "
                @click="
                  $router.push({ name: 'RankingMain', params: { whatgame: 2 } })
                "
              >
                명예의전당
              </div>
            </div>
          </div>
        </div>

        <div class="line"></div>
      </div>
      <div class="friends-list">
        <div style="display: flex">
          <h2 style="margin-top: 1.3vh">친구 목록</h2>
          <div style="font-size: 5vh; margin-left: 2vw; color: #957457">
            {{ friend_num }}
          </div>
        </div>
        <div class="friend-profile-list">
          <div class="friend-profile" v-for="item in friend_num" :key="item">
            <img
              :src='"@/assets/Profile/prf-" + profile_name[friend_recode.profile%7] +".png"'
              alt="profile_picture"
              class="profile-pic"
            />
            <div
              style="display: flex; width: 100%; justify-content: space-between"
            >
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  justify-content: space-around;
                "
              >
                <div style="display: flex">
                  <!-- <img
                    src="@/assets/dot-gr.png"
                    alt="tier-picture"
                    class="tier-pic"
                    style="margin-right: 0.5rem"
                  /> -->
                  <div style="display: flex; align-items:center">
                    <img v-if="friend_recode.tier == 5" src="@/assets/Ranking/brz.png" alt="tier-picture" class="tier-pic" style="width: 2vw; height:70%; margin-right: 0.5rem"/>
                    <img v-if="friend_recode.tier == 4" src="@/assets/Ranking/slv.png" alt="tier-picture" class="tier-pic" style="width: 2vw; height:70%; margin-right: 0.5rem"/>
                    <img v-if="friend_recode.tier == 3" src="@/assets/Ranking/gld.png" alt="tier-picture" class="tier-pic" style="width: 2vw; height:70%; margin-right: 0.5rem"/>
                    <img v-if="friend_recode.tier == 2" src="@/assets/Ranking/pltn.png" alt="tier-picture" class="tier-pic" style="width: 2vw; height:70%; margin-right: 0.5rem"/>
                    <img v-if="friend_recode.tier == 1" src="@/assets/Ranking/dmd.png" alt="tier-picture" class="tier-pic" style="width: 2vw; height:70%; margin-right: 0.5rem"/>
                  </div>
                  <h4>{{ friend_recode.username }}</h4>
                </div>
                <div class="user-recode-wrapper">
                  <h5 style="color: gray">
                    최고 점수
                    <span style="color: #957457"
                      >{{ friend_recode.max_score }}P</span
                    >
                  </h5>
                </div>
              </div>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                "
              >
                <div class="delete-button"><span>삭제</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Profile",
  data() {
    return {
      tier_num_to_str: [0, 'Diamond', 'Platinum', 'Gold', 'Silver', 'Bronze'],
      profile_name: ['bird', 'cml', 'croc', 'ele', 'gsm', 'hippo', 'shark'],
      profile: 3,
      nickname: "비비디바비디부",
      tier: 2,
      friend_num: 8,
      max_rank: "10",
      sum_score: "4400",
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
      friend_recode: {
        profile: 5,
        username: "김펭수",
        tier:4,
        max_score: "1500",
      },
    };
  },
};
</script>
<style scoped>
* {
  text-align: start;
}
.my-profile {
  background-color: #f4f1eb;
  width: 100%;
  height: 35vh;
  display: flex;
  align-items: center;
}
.my-profile .profile-pic {
  background-color: #FEF8E2;
  height: 25vh;
  width: 25vh;
  margin-left: 25vw;
  border-radius: 100%;
}
.my-profile h3 {
  font-weight: bold;
  margin-left: 2vw;
}
.my-profile .tier-wrapper {
  margin-left: 2.5vw;
  display: flex; 
  height:100%; 
  align-items: center; 
  color: gray; 
  width:15%
}
.my-profile .user-box-wrapper {
  display: flex;
  margin-left: 2.5vw;
  font-weight: 500;
  font-size: 4vh;
}
.my-profile .user-box-wrapper h5 {
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
.recode-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.recode-wrapper .play-record {
  width: 60%;
  height: 60vh;
  margin-top: 8vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.recode-wrapper .play-record .game-recode {
  display: flex;
  width: 100%;
}
.recode-wrapper .play-record .game-recode h4 {
  margin-left: 1.5vw;
}
.recode-wrapper .play-record .game-recode .user-recode-wrapper {
  margin-left: 1.5vw;
  display: flex;
}
.recode-wrapper .play-record .game-recode .user-recode-wrapper h5 {
  font-size: 2vh;
  margin-right: 2vw;
}
.recode-wrapper .play-record .game-recode .play-button {
  text-align: center;
  color: #957457;
  font-size: 3vh;
  background-color: #e5d2bd;
  height: 5vh;
  width: 10vw;
  border-radius: 4vh;
}
h2 {
  margin-bottom: 3vh;
  color: black;
}

.line {
  width: 100%;
  height: 3px;
  margin-top: 2vh;
  margin-bottom: 2vh;
  background-color: #f4f1eb;
}
.recode-wrapper .play-record .acidrain-pic {
  width: 15vh;
  height: 13vh;
  border-radius: 10px;
}
.recode-wrapper .friends-list {
  width: 60%;
  height: 40vh;
  margin-top: 8vh;
}
.recode-wrapper .friends-list .friend-profile-list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}
.recode-wrapper .friends-list .friend-profile-list .friend-profile {
  display: flex;
  width: 48%;
  height: 13vh;
  background-color: #f4f1eb;
  margin: 0vh 0.5vw 2.5vh 0.5vw;
  border-radius: 3vh;
}
.recode-wrapper
  .friends-list
  .friend-profile-list
  .friend-profile
  .profile-pic {
  background-color: #FEF8E2;
  height: 10vh;
  width: 10vh;
  margin-left: 1vw;
  margin-top: 1.5vh;
  margin-right: 1vw;
  border-radius: 100%;
}
.recode-wrapper .friends-list .friend-profile-list .friend-profile h4 {
  margin-top: 1.5vh;
  font-size: 2.5vh;
  font-weight: bold;
}
.recode-wrapper .friends-list .friend-profile-list .friend-profile h5 {
  /* margin-top: 1.5vh; */
  font-size: 2vh;
}
.delete-button {
  text-align: center;
  color: #957457;
  font-size: 2vh;
  color: gray;
  background-color: #e5d2bd;
  height: 4vh;
  width: 5vw;
  vertical-align: middle;
  border-radius: 4vh;
  margin-right: 1.5vw;
  display: inline-block;
  line-height: 4vh;
}
</style>