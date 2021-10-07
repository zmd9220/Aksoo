<template>
  <div class="ranking-page-wrapper">
    <!-- 오디오 (BGM) -->
      <audio
      autoplay
            loop
            id="gameBgm"
            src="@/assets/music/bgm/modify_happy_ukulele.mp3"
        ></audio>

    <div v-if="what == 0">
      {{ what }}
    </div>

    <img src="@/assets/Ranking/land2.png" alt="land" class="land-img" />
    <img src="@/assets/Ranking/cloud.png" alt="cloud" class="cloud-img" />
    <img src="@/assets/Ranking/cloud.png" alt="cloud" class="cloud-img-2" />

    <!-- 펫말 -->
    <img
      src="@/assets/Ranking/acidrain.png"
      v-if="whatgame != 1"
      @click="[(whatgame = 1), (what_start = 1), getRank()]"
      alt="acidrain"
      class="acidrain-img"
    />
    <img
      src="@/assets/Ranking/acidrain_selected.png"
      v-if="whatgame == 1"
      alt="acidrain"
      class="acidrain-img"
    />

    <img
      src="@/assets/Ranking/cardflip.png"
      v-if="whatgame != 2"
      @click="[(whatgame = 2), (what_start = 1), getRank()]"
      alt="cardflip"
      class="cardflip-img"
    />
    <img
      src="@/assets/Ranking/cardflip_selected.png"
      v-if="whatgame == 2"
      alt="cardflip"
      class="cardflip-img"
    />

    <img
      src="@/assets/Ranking/wordguess.png"
      v-if="whatgame != 3"
      @click="[(whatgame = 3), (what_start = 1), getRank()]"
      alt="wordguess"
      class="wordguess-img"
    />
    <img
      src="@/assets/Ranking/wordguess_selected.png"
      v-if="whatgame == 3"
      alt="wordguess"
      class="wordguess-img"
    />

    <!-- 단상 -->
    <img src="@/assets/Ranking/podium.png" alt="podium" class="podium-img">
        <div class="first-score" v-bind:style="[Rank[0].profile%7 == 1? {'top':'49%'}: {'top':'45%'}]">
            <div style="display:table-cell; vertical-align:bottom">
                
                    {{Rank[0].nickname}}
                <img :src='"@/assets/Ranking/Animal/" + profile_name[Rank[0].profile%7] +".png"' alt="first" style="max-width:100%; max-height:100%;">
            </div>
        </div>
        <div class="second-score" v-bind:style="[Rank[1].profile%7 == 1? {'top':'61%'}: {'top':'57%'}]">
            <div style="display:table-cell; vertical-align:bottom">
                <div>{{Rank[1].nickname}}</div>
                <img :src='"@/assets/Ranking/Animal/" + profile_name[Rank[1].profile%7] +".png"' alt="second" style="max-width:100%; max-height:100%">
            </div>
        </div>
        <div class="third-score" v-bind:style="[Rank[2].profile%7 == 1? {'top':'64%'}: {'top':'60%'}]">
            <div style="display:table-cell; vertical-align:bottom">
                <div>{{Rank[2].nickname}}</div>
                <img :src='"@/assets/Ranking/Animal/" + profile_name[Rank[2].profile%7] +".png"' alt="third" style="max-width:100%; max-height:100%">
            </div>
        </div>
        <!-- Top 10 리스트 -->
    <div v-if="what_start === 0">
      <ranking-list class="ranking-list" :Rank="Rank" />
      <img src="@/assets/Learn/LearnStart/shape-2.svg" class="Shape-2" />
    </div>
    <div v-else-if="whatgame === 3">
      <ranking-list class="ranking-list" :Rank="Rank3" />
      <img src="@/assets/Learn/LearnStart/shape-2.svg" class="Shape-2" />
    </div>
    <div v-else-if="whatgame === 2">
      <ranking-list class="ranking-list" :Rank="Rank2" />
      <img src="@/assets/Learn/LearnStart/shape-2.svg" class="Shape-2" />
    </div>
    <div v-else>
      <ranking-list class="ranking-list" :Rank="Rank1" />
      <img src="@/assets/Learn/LearnStart/shape-2.svg" class="Shape-2" />
    </div>

  </div>
</template>
<script>
import RankingList from "@/views/Ranking/RankingList.vue";
import Vue from "vue";
import VueConfetti from "vue-confetti";
Vue.use(VueConfetti);
import axios from "axios";

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: "RankingMain",
  components: {
    RankingList,
  },
  props: {
    whatgame: Number,
  },
  data() {
    return {
      what_start: 0,
      // whatgame: 3,
      profile_name: ["bird", "cml", "croc", "ele", "gsm", "hippo", "shark"],
      test: [],
      Rank1: [],
      Rank2: [],
      Rank3: [],
      what: 0,
      Rank: [
      ],
    };
  },

  methods: {
    getRank1: function () {
      // 상품정보를 받아오는 axios
      const localURL = SERVER_URL + "/games/ranking/1";
      axios({
        method: "get",
        url: localURL,
        // header: {
        //   Authorization: "Bearer " + localStorage.getItem("jwt"),
        // },
      })

        .then((res) => {
          this.test = res.data.response;
          for (var key in this.test) {
            var profile = this.test[key].user;
            var nickname = this.test[key].nickname;
            var tier = this.test[key].tier;
            var max_score = this.test[key].score;
            this.Rank1[key - 1] = {
              profile: profile,
              rank: parseInt(key),
              nickname: nickname,
              tier: tier,
              max_score: max_score,
            };
          }
        })
        .catch(() => {
        });
    },
    getRank2: function () {
      // 상품정보를 받아오는 axios
      const localURL = SERVER_URL + "/games/ranking/2";
      axios({
        method: "get",
        url: localURL,
        // header: {
        //   Authorization: "Bearer " + localStorage.getItem("jwt"),
        // },
      })
        .then((res) => {
          this.test = res.data.response;
          for (var key in this.test) {
            var profile = this.test[key].user;
            var nickname = this.test[key].nickname;
            var tier = this.test[key].tier;
            var max_score = this.test[key].score;
            this.Rank2[key - 1] = {
              profile: profile,
              rank: parseInt(key),
              nickname: nickname,
              tier: tier,
              max_score: max_score,
            };
          }
        })
        .catch(() => {
        });
    },
    getRank3: async function () {
      try {
        // 상품정보를 받아오는 axios
        const localURL =
          SERVER_URL + "/games/ranking/3";
        const res = await axios({
          method: "get",
          url: localURL,
        });
        this.test = res.data.response;
        for (var key in this.test) {
          var profile = this.test[key].user;
          var nickname = this.test[key].nickname;
          var tier = this.test[key].tier;
          var max_score = this.test[key].score;
          this.Rank3[key - 1] = {
            profile: profile,
            rank: parseInt(key),
            nickname: nickname,
            tier: tier,
            max_score: max_score,
          };
          this.what = this.whatgame;
        }
      } catch (err) {
        console.log(err.response);
      }
    },
    getRank: async function () {
      try {
        // 상품정보를 받아오는 axios
        const localURL =
          SERVER_URL + "/games/ranking/" + this.whatgame;
        const res = await axios({
          method: "get",
          url: localURL,
        });
        this.test = res.data.response;
        for (var key in this.test) {
          var profile = this.test[key].user;
          var nickname = this.test[key].nickname;
          var tier = this.test[key].tier;
          var max_score = this.test[key].score;
          this.Rank[key - 1] = {
            profile: profile,
            rank: parseInt(key),
            nickname: nickname,
            tier: tier,
            max_score: max_score,
          };
          this.what = Math.random();
        }
        // console.log(this.Rank[0].profile);
      } catch (err) {
        console.log(err.response);
      }
    },
  },

  created: function () {
      // axios 데이터 가져오기 (단상)
    this.getRank();
      // axios 데이터 가져오기 (리스트)
    this.getRank3();
    this.getRank2();
    this.getRank1();
    // 위에서 떨어지는 효과
    this.$confetti.start();
    this.$confetti.update({
      particles: [
        {
          type: "rect",
          dropRate: 8,
          size: 5,
        },
      ],
    });
    setTimeout(() => {
      this.$confetti.stop();
    }, 5000);
    // this.getRank();
  },
  mounted() {
    window.scrollTo(0, 0);

  },

  destroyed() {
    this.$confetti.stop();
  },
};
</script>
<style scoped>
.ranking-page-wrapper {
  background-image: linear-gradient(to bottom, #e2f1f9, #f6f8fc);
  width: 100%;
  height: 235vh;
}
.ranking-page-wrapper .land-img {
  width: 100%;
  height: 100%;
}
.ranking-page-wrapper .cloud-img {
  position: absolute;
  top: 10%;
  left: 15%;
  height: 30%;
  width: 20%;
}
.ranking-page-wrapper .cloud-img-2 {
  position: absolute;
  top: 30%;
  right: 15%;
  height: 30%;
  width: 20%;
}
.ranking-page-wrapper .acidrain-img {
  position: absolute;
  top: 80%;
  left: 10%;
  height: 20%;
  width: 8%;
}
.ranking-page-wrapper .cardflip-img {
  position: absolute;
  top: 80%;
  right: 15%;
  height: 20%;
  width: 8%;
}
.ranking-page-wrapper .wordguess-img {
  position: absolute;
  top: 75%;
  right: 5%;
  height: 20%;
  width: 8%;
}
.ranking-page-wrapper .podium-img {
  position: absolute;
  top: 55%;
  right: 30%;
  height: 60%;
  width: 40%;
}
.ranking-page-wrapper .first-score {
  position: absolute;
  display: table;
  /* top:45%; */
  right: 45%;
  height: 23%;
  width: 10%;
  z-index: 10;
  font-weight: bold;
  /* background-color: gray; */
  animation-name: first;
  animation-duration: 6s;
}
@keyframes first {
  0% {
    opacity: 0;
  }
  66% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.ranking-page-wrapper .second-score {
  position: absolute;
  display: table;
  /* top:57%; */
  left: 34%;
  height: 23%;
  width: 10%;
  z-index: 10;
  font-weight: bold;
  animation-name: second;
  animation-duration: 5s;
}
@keyframes second {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.ranking-page-wrapper .third-score {
  position: absolute;
  display: table;
  /* top:60%; */
  right: 34%;
  height: 23%;
  width: 10%;
  z-index: 10;
  font-weight: bold;
  /* opacity: 0; */
  animation-name: third;
  animation-duration: 4s;
}
@keyframes third {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.ranking-page-wrapper .ranking-list {
  position: absolute;
  width: 60%;
  top: 110%;
  left: 20%;
  height: 75%;
  z-index: 10;
}
.Shape-2 {
  position: absolute;
  z-index: 0;
  width: 100%;
  left: 0%;
  top: 235vh;
  height: 12.5%;
}
</style>
