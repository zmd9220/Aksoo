<template>
    <div class="ranking-page-wrapper">
        <!-- <audio
            autoplay
            loop
            id="gameBgm"
            src="@/assets/music/bgm/happy-clappy-ukulele.mp3"
        ></audio> -->
        <img src="@/assets/Ranking/land2.png" alt="land" class="land-img">
        <img src="@/assets/Ranking/cloud.png" alt="cloud" class="cloud-img">
        <img src="@/assets/Ranking/cloud.png" alt="cloud" class="cloud-img-2">

    <div v-if="test1 == 0">
      {{ test1 }}
    </div>
    <img
      src="@/assets/Ranking/acidrain.png"
      v-if="what_game != 1"
      @click="[(what_game = 1), (what_start = 1), getRank()]"
      alt="acidrain"
      class="acidrain-img"
    />
    <img
      src="@/assets/Ranking/acidrain_selected.png"
      v-if="what_game == 1"
      alt="acidrain"
      class="acidrain-img"
    />

    <img
      src="@/assets/Ranking/cardflip.png"
      v-if="what_game != 2"
      @click="[(what_game = 2), (what_start = 1), getRank()]"
      alt="cardflip"
      class="cardflip-img"
    />
    <img
      src="@/assets/Ranking/cardflip_selected.png"
      v-if="what_game == 2"
      alt="cardflip"
      class="cardflip-img"
    />

    <img
      src="@/assets/Ranking/wordguess.png"
      v-if="what_game != 3"
      @click="[(what_game = 3), (what_start = 1), getRank()]"
      alt="wordguess"
      class="wordguess-img"
    />
    <img
      src="@/assets/Ranking/wordguess_selected.png"
      v-if="what_game == 3"
      alt="wordguess"
      class="wordguess-img"
    />

    <!-- <img src="@/assets/Ranking/podium1.png" alt="podium" class="podium-img"> -->
    <img src="@/assets/Ranking/podium.png" alt="podium" class="podium-img" />
    <div
      class="first-score"
      v-bind:style="[
        Rank[0].profile % 7 == 1 ? { top: '49%' } : { top: '45%' },
      ]"
    >
      <div style="display: table-cell; vertical-align: bottom">
        <!-- <div style="height:5vh;"> -->
        <!-- <div style="display: flex; height:100%; align-items: center; font-weight: bold; color: gray;">
                        <img v-if="Rank[0].tier ==5" src="@/assets/Ranking/brz.png" alt="tier_picture" style="height:40%; margin-right:1vw;">
                        <img v-if="Rank[0].tier ==4" src="@/assets/Ranking/slv.png" alt="tier_picture" style="height:40%; margin-right:1vw;">
                        <img v-if="Rank[0].tier ==3" src="@/assets/Ranking/gld.png" alt="tier_picture" style="height:40%; margin-right:1vw;">
                        <img v-if="Rank[0].tier ==2" src="@/assets/Ranking/pltn.png" alt="tier_picture" style="height:40%; margin-right:1vw;">
                        <img v-if="Rank[0].tier ==1" src="@/assets/Ranking/dmd.png" alt="tier_picture" style="height:40%; margin-right:1vw;">
                        {{Rank[0].tier}}
                    </div> -->
        {{ Rank[0].nickname }}
        <!-- </div> -->
        <img
          :src="
            '@/assets/Ranking/Animal/' +
            profile_name[Rank[0].profile % 7] +
            '.png'
          "
          alt="first"
          style="max-width: 100%; max-height: 100%"
        />
      </div>
    </div>
    <div
      class="second-score"
      v-bind:style="[
        Rank[1].profile % 7 == 1 ? { top: '61%' } : { top: '57%' },
      ]"
    >
      <div style="display: table-cell; vertical-align: bottom">
        <div>{{ Rank[1].nickname }}</div>
        <img
          :src="
            '@/assets/Ranking/Animal/' +
            profile_name[Rank[1].profile % 7] +
            '.png'
          "
          alt="second"
          style="max-width: 100%; max-height: 100%"
        />
      </div>
    </div>
    <div
      class="third-score"
      v-bind:style="[
        Rank[2].profile % 7 == 1 ? { top: '64%' } : { top: '60%' },
      ]"
    >
      <div style="display: table-cell; vertical-align: bottom">
        <div>{{ Rank[2].nickname }}</div>
        <img
          :src="
            '@/assets/Ranking/Animal/' +
            profile_name[Rank[2].profile % 7] +
            '.png'
          "
          alt="third"
          style="max-width: 100%; max-height: 100%"
        />
      </div>
    </div>
    <div v-if="what_start === 0">
      <ranking-list class="ranking-list" :Rank="Rank" />
      <img src="@/assets/Learn/LearnStart/shape-2.svg" class="Shape-2" />
    </div>
    <div v-else-if="what_game === 3">
      <ranking-list class="ranking-list" :Rank="Rank3" />
      <img src="@/assets/Learn/LearnStart/shape-2.svg" class="Shape-2" />
    </div>
    <div v-else-if="what_game === 2">
      <ranking-list class="ranking-list" :Rank="Rank2" />
      <img src="@/assets/Learn/LearnStart/shape-2.svg" class="Shape-2" />
    </div>
    <div v-else>
      <ranking-list class="ranking-list" :Rank="Rank1" />
      <img src="@/assets/Learn/LearnStart/shape-2.svg" class="Shape-2" />
    </div>
    <!-- <ranking-list class="ranking-list" :Rank="Rank" />
    <img src="@/assets/Learn/LearnStart/shape-2.svg" class="Shape-2" /> -->

    <!-- <ranking-list class="ranking-list" :Rank="Rank" />
    <img src="@/assets/Learn/LearnStart/shape-2.svg" class="Shape-2" /> -->
  </div>
</template>
<script>
import RankingList from "@/views/Ranking/RankingList.vue";
import Vue from "vue";
import VueConfetti from "vue-confetti";
Vue.use(VueConfetti);
import axios from "axios";
// import { mapState } from "vuex";

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
      what_game: 3,
      profile_name: ["bird", "cml", "croc", "ele", "gsm", "hippo", "shark"],
      test: [],
      Rank1: [],
      Rank2: [],
      Rank3: [],
      test1: 0,
      test2: 0,
      Rank: [
        // {
        //   profile: 0,
        //   rank: 0,
        //   nickname: "",
        //   tier: 0,
        //   max_score: 0,
        // },
        // {
        //   profile: 0,
        //   rank: 0,
        //   nickname: "",
        //   tier: 0,
        //   max_score: 0,
        // },
        // {
        //   profile: 0,
        //   rank: 0,
        //   nickname: "",
        //   tier: 0,
        //   max_score: 0,
        // },
        // {
        //   profile: 100,
        //   rank: 1,
        //   nickname: "펭수는행복해1",
        //   tier: 1,
        //   max_score: 1700,
        // },
        // {
        //   profile: 101,
        //   rank: 2,
        //   nickname: "펭수는행복해2",
        //   tier: 1,
        //   max_score: 1600,
        // },
        // {
        //   profile: 102,
        //   rank: 3,
        //   nickname: "펭수는행복해3",
        //   tier: 1,
        //   max_score: 1550,
        // },
        // {
        //   profile: 103,
        //   rank: 4,
        //   nickname: "펭수는행복해4",
        //   tier: 1,
        //   max_score: 1500,
        // },
        // {
        //   profile: 104,
        //   rank: 5,
        //   nickname: "펭수는행복해5",
        //   tier: 2,
        //   max_score: 1300,
        // },
        // {
        //   profile: 105,
        //   rank: 6,
        //   nickname: "펭수는행복해6",
        //   tier: 3,
        //   max_score: 1200,
        // },
        // {
        //   profile: 106,
        //   rank: 7,
        //   nickname: "펭수는행복해7",
        //   tier: 4,
        //   max_score: 1140,
        // },
        // {
        //   profile: 107,
        //   rank: 8,
        //   nickname: "펭수는행복해8",
        //   tier: 5,
        //   max_score: 1120,
        // },
        // {
        //   profile: 108,
        //   rank: 9,
        //   nickname: "펭수는행복해9",
        //   tier: 5,
        //   max_score: 1100,
        // },
        // {
        //   profile: 109,
        //   rank: 10,
        //   nickname: "펭수는행복해10",
        //   tier: 5,
        //   max_score: 1050,
        // },
      ],
    };
  },

  methods: {
    getRank1: function () {
      // 상품정보를 받아오는 axios
      const localURL = "http://127.0.0.1:8000/games/ranking/1";
      axios({
        method: "get",
        url: localURL,
        // header: {
        //   Authorization: "Bearer " + localStorage.getItem("jwt"),
        // },
      })
        // .get(localURL)
        .then((res) => {
          // for (var key1 in res.data){
          //   console.log(key1);
          // }
          // this.Rank = res.data;
          // console.log(res.data);
          // console.log(res.data.response);
          this.test = res.data.response;
          // const { data } = res;
          for (var key in this.test) {
            // console.log(key);
            // console.log(this.test[key].nickname);
            var profile = this.test[key].user;
            // var rank = 0;
            // rank = key;
            var nickname = this.test[key].nickname;
            var tier = this.test[key].tier;
            var max_score = this.test[key].score;
            // Vue.set(this.Rank, profile, rank, nickname, tier, max_score);
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
          // console.log(err)
        });
    },
    getRank2: function () {
      // 상품정보를 받아오는 axios
      const localURL = "http://127.0.0.1:8000/games/ranking/2";
      axios({
        method: "get",
        url: localURL,
        // header: {
        //   Authorization: "Bearer " + localStorage.getItem("jwt"),
        // },
      })
        // .get(localURL)
        .then((res) => {
          // for (var key1 in res.data){
          //   console.log(key1);
          // }
          // this.Rank = res.data;
          // console.log(res.data);
          // console.log(res.data.response);
          this.test = res.data.response;
          // const { data } = res;
          for (var key in this.test) {
            // console.log(key);
            // console.log(this.test[key].nickname);
            var profile = this.test[key].user;
            // var rank = 0;
            // rank = key;
            var nickname = this.test[key].nickname;
            var tier = this.test[key].tier;
            var max_score = this.test[key].score;
            // Vue.set(this.Rank, profile, rank, nickname, tier, max_score);
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
          // console.log(err)
        });
    },
    getRank3: async function () {
      try {
        // 상품정보를 받아오는 axios
        const localURL =
          "http://127.0.0.1:8000/games/ranking/" + this.what_game;
        const res = await axios({
          method: "get",
          url: localURL,
        });
        this.test = res.data.response;
        // const { data } = res;
        for (var key in this.test) {
          var profile = this.test[key].user;
          // var rank = 0;
          // rank = key;
          var nickname = this.test[key].nickname;
          var tier = this.test[key].tier;
          var max_score = this.test[key].score;
          // Vue.set(this.Rank, profile, rank, nickname, tier, max_score);
          this.Rank3[key - 1] = {
            profile: profile,
            rank: parseInt(key),
            nickname: nickname,
            tier: tier,
            max_score: max_score,
          };
          this.test1 = this.what_game;
        }
        // console.log(this.Rank[0].profile);
      } catch (err) {
        console.log(err.response);
      }
    },
    getRank: async function () {
      try {
        // 상품정보를 받아오는 axios
        const localURL =
          "http://127.0.0.1:8000/games/ranking/" + this.what_game;
        const res = await axios({
          method: "get",
          url: localURL,
        });
        this.test = res.data.response;
        // const { data } = res;
        for (var key in this.test) {
          var profile = this.test[key].user;
          // var rank = 0;
          // rank = key;
          var nickname = this.test[key].nickname;
          var tier = this.test[key].tier;
          var max_score = this.test[key].score;
          // Vue.set(this.Rank, profile, rank, nickname, tier, max_score);
          this.Rank[key - 1] = {
            profile: profile,
            rank: parseInt(key),
            nickname: nickname,
            tier: tier,
            max_score: max_score,
          };
          this.test1 = this.what_game;
        }
        // console.log(this.Rank[0].profile);
      } catch (err) {
        console.log(err.response);
      }
    },
  },
  created: function () {
    this.getRank();
    this.getRank3();
    this.getRank2();
    this.getRank1();
    if (this.whatgame != undefined) {
      this.what_game = this.whatgame;
    }
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
    // this.getRank();
    window.scrollTo(0, 0);
    var gameBgm = document.getElementById("gameBgm");
    gameBgm.volume = 0.3;
    gameBgm.play();
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