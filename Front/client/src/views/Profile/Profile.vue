<template>
  <div>
    <!-- profile페이지 음악 -->
    <audio
      autoplay
      id="gameStart"
      src="@/assets/music/bgm/modify-cutest-bunny.mp3"
    ></audio>
    <!-- 개인 프로필 -->
    <div class="my-profile">
      <!-- 프로필사진, 프로필사진은 id값으로 결정된다. -->
      <img :src='"@/assets/Profile/prf-" + profile_name[`${this.accounts.userId}`%7] +".png"' alt="profile_picture" class="profile-pic" />
      <div class="">
        <div style="height: 2vh"></div>
        <h3>{{ this.accounts.nickname }}</h3>
        <div class="tier-wrapper">
          <!-- tier그림변경을 위한 분기처리 -->
          <img v-if="this.accounts.tier == 5" src="@/assets/Ranking/brz.png" alt="tier-picture" class="tier-pic" style="width: 1.5rem; margin-right: 0.5rem"/>
          <img v-if="this.accounts.tier == 4" src="@/assets/Ranking/slv.png" alt="tier-picture" class="tier-pic" style="width: 1.5rem; margin-right: 0.5rem"/>
          <img v-if="this.accounts.tier == 3" src="@/assets/Ranking/gld.png" alt="tier-picture" class="tier-pic" style="width: 1.5rem; margin-right: 0.5rem"/>
          <img v-if="this.accounts.tier == 2" src="@/assets/Ranking/pltn.png" alt="tier-picture" class="tier-pic" style="width: 1.5rem; margin-right: 0.5rem"/>
          <img v-if="this.accounts.tier == 1" src="@/assets/Ranking/dmd.png" alt="tier-picture" class="tier-pic" style="width: 1.5rem; margin-right: 0.5rem"/>
          {{tier_num_to_str[this.accounts.tier]}}
        </div>
        <div class="user-box-wrapper">
          <div style="margin-right: 5vw">
            {{ userData.userDetail.followData.followingCnt }}
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
      </div>
    </div>
    <!-- 플레이기록 -->
    <!-- 산성비 -->
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
                  <span style="color: #957457">{{ userData.acidRain.rank }}위</span>
                </h5>
                <h5>
                  최고 점수
                  <span style="color: #957457">{{ userData.acidRain.score }}P</span>
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
              <div class="play-button" @click="$router.push({ name: 'AcidRainMain' });" style="cursor: pointer">PLAY</div>
              <!-- 라우터에 어떤게임인지를 담아 그 게임의 랭킹보여주기 -->
              <div
                style="
                  text-align: end;
                  color: #957457;
                  font-weight: 500;
                  font-size: 1.8vh;
                  cursor: pointer
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
        <!-- 카드 뒤집기 -->
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
                  <span style="color: #957457">{{ userData.cardMatching.rank }}위</span>
                </h5>
                <h5>
                  최고 점수
                  <span style="color: #957457">{{ userData.cardMatching.score }}P</span>
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
              <div class="play-button" @click="$router.push({ name: 'CardflipMain' });" style="cursor: pointer">PLAY</div>
              <!-- 라우터에 어떤게임인지를 담아 그 게임의 랭킹보여주기 -->
              <div
                style="
                  text-align: end;
                  color: #957457;
                  font-weight: 500;
                  font-size: 1.8vh;
                  cursor: pointer
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
        <!-- 단어맞추기 -->
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
                  <span style="color: #957457">{{ userData.hangman.rank }}위</span>
                </h5>
                <h5>
                  최고 점수
                  <span style="color: #957457"
                    >{{ userData.hangman.score }}P</span
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
              <div class="play-button" @click="$router.push({ name: 'HangManMain' });" style="cursor: pointer">PLAY</div>
              <!-- 라우터에 어떤게임인지를 담아 그 게임의 랭킹보여주기 -->
              <div
                style="
                  text-align: end;
                  color: #957457;
                  font-weight: 500;
                  font-size: 1.8vh;
                  cursor: pointer
                "
                @click="
                  $router.push({ name: 'RankingMain', params: { whatgame: 3 } })
                "
              >
                명예의전당
              </div>
            </div>
          </div>
        </div>

        <div class="line"></div>
      </div>
      <!-- 친구목록 -->
      <div class="friends-list">
        <div style="display: flex">
          <h2 style="margin-top: 1.3vh">친구 목록</h2>
          <div style="font-size: 5vh; margin-left: 2vw; color: #957457">
            {{ userData.userDetail.followData.followingCnt }}
          </div>
        </div>
        <div class="friend-profile-list"> 
          <div class="friend-profile" v-for="item in userData.userDetail.followData.followingData" :key="item">
            <!-- 프로필사진, 프로필사진은 id값으로 결정된다. -->
            <img
              :src='"@/assets/Profile/prf-" + profile_name[item.id%7] +".png"'
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
                  <div style="display: flex; align-items:center">
                    <!-- tier그림변경을 위한 분기처리 -->
                    <img v-if="item.tier == 5" src="@/assets/Ranking/brz.png" alt="tier-picture" class="tier-pic" style="width: 2vw; height:70%; margin-right: 0.5rem"/>
                    <img v-if="item.tier == 4" src="@/assets/Ranking/slv.png" alt="tier-picture" class="tier-pic" style="width: 2vw; height:70%; margin-right: 0.5rem"/>
                    <img v-if="item.tier == 3" src="@/assets/Ranking/gld.png" alt="tier-picture" class="tier-pic" style="width: 2vw; height:70%; margin-right: 0.5rem"/>
                    <img v-if="item.tier == 2" src="@/assets/Ranking/pltn.png" alt="tier-picture" class="tier-pic" style="width: 2vw; height:70%; margin-right: 0.5rem"/>
                    <img v-if="item.tier == 1" src="@/assets/Ranking/dmd.png" alt="tier-picture" class="tier-pic" style="width: 2vw; height:70%; margin-right: 0.5rem"/>
                  </div>
                  <h4>{{ item.nickname }}</h4>
                </div>
                <div class="user-recode-wrapper">
                  <h5 style="color: gray">
                    누적 점수
                    <span style="color: #957457"
                      >{{ item.total_score }}P</span
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
                <div class="delete-button" @click="deletefollow(item.id)" style="cursor: pointer"><span>삭제</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import axios from "axios";
const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: "Profile",
  data() {
    return {
      userData: null,
      tier_num_to_str: [0, 'Diamond', 'Platinum', 'Gold', 'Silver', 'Bronze'], //티어 string으로 변경용 데이터
      profile_name: ['bird', 'cml', 'croc', 'ele', 'gsm', 'hippo', 'shark'], // id num값을 프로필 동물에 대응하기 위한 데이터
      profile: 3,
      nickname: "비비디바비디부",
      tier: 2,
      friend_num: 8, // 친구목록 숫자
      max_rank: "10",
      sum_score: "4400",
      acid_rain: {  //산성비
        rank: 10,
        max_score: 1500,
      },
      flip_card: {  //카드뒤집기
        rank: 11,
        max_score: 1300,
      },
      word_guess: {  //단어맞추기
        rank: 13,
        max_score: 1600,
      },
      friend_recode: {  //친구
        profile: 5,
        username: "김펭수",
        tier:4,
        max_score: "1500",
      },
    };
  },
  methods: {
    MaxRankPoint() { // 누적점수계산 함수
      var ranks = [this.acid_rain.rank, this.flip_card.rank, this.word_guess.rank]
      var null_rank_count = ranks.filter(x => x==0).length
      var filtered = ranks.filter(x => x!=0)

      if (null_rank_count > 1) {
        this.max_rank = this.acid_rain.rank + this.flip_card.rank + this.word_guess.rank
      } else {
        this.max_rank = Math.min.apply(Math, filtered)
      }

      this.sum_score = this.acid_rain.max_score + this.flip_card.max_score + this.word_guess.max_score
    },
    deletefollow(id) { //친구삭제기능
      axios ({
        method: 'post',
        url: SERVER_URL + '/accounts/follow/' + id + '/',
        headers: {
          "Authorization": `Bearer ${this.accessToken}`
        },
      }).then((res) => {
        console.log(res)
        window.location.reload()
      }).catch(err => {
        console.log(err)
      })
    }
  },
  computed: { // 계정에관한정보를 computed에 등록하여 갱신때마다 바로 확인가능하게한다.
    ...mapState('userStore', ['accounts', 'accessToken'])
  },
  mounted: function () { //프로필페이지에 쓰이는 데이터 axios요청
    axios ({
        method: 'get',
        url: SERVER_URL + '/accounts/' + this.accounts.userId,
        headers: {
          "Authorization": `Bearer ${this.accessToken}`
        },
      }).then((res) => {
        console.log(res)
        this.userData = res.data.userData
        this.acid_rain.rank = this.userData.acidRain.rank
        this.acid_rain.max_score = this.userData.acidRain.score
        this.flip_card.rank = this.userData.cardMatching.rank
        this.flip_card.max_score = this.userData.cardMatching.score
        this.word_guess.rank = this.userData.hangman.rank
        this.word_guess.max_score = this.userData.hangman.score
        this.MaxRankPoint()
      }).catch(err => {
        console.log(err)
      })
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