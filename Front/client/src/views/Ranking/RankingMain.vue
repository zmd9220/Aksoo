<template>
  <div class="ranking-page-wrapper">
    <audio autoplay id="gameStart" src="@/assets/music/ranking.mp3"></audio>
    <img src="@/assets/Ranking/land2.png" alt="land" class="land-img" />
    <img src="@/assets/Ranking/cloud.png" alt="cloud" class="cloud-img" />
    <img src="@/assets/Ranking/cloud.png" alt="cloud" class="cloud-img-2" />

    <img
      src="@/assets/Ranking/acidrain.png"
      v-if="what_game != 0"
      @click="what_game = 0"
      alt="acidrain"
      class="acidrain-img"
    />
    <img
      src="@/assets/Ranking/acidrain_selected.png"
      v-if="what_game == 0"
      alt="acidrain"
      class="acidrain-img"
    />

    <img
      src="@/assets/Ranking/cardflip.png"
      v-if="what_game != 1"
      @click="what_game = 1"
      alt="cardflip"
      class="cardflip-img"
    />
    <img
      src="@/assets/Ranking/cardflip_selected.png"
      v-if="what_game == 1"
      alt="cardflip"
      class="cardflip-img"
    />

    <img
      src="@/assets/Ranking/wordguess.png"
      v-if="what_game != 2"
      @click="what_game = 2"
      alt="wordguess"
      class="wordguess-img"
    />
    <img
      src="@/assets/Ranking/wordguess_selected.png"
      v-if="what_game == 2"
      alt="wordguess"
      class="wordguess-img"
    />

    <!-- <img src="@/assets/Ranking/podium1.png" alt="podium" class="podium-img"> -->
    <img src="@/assets/Ranking/podium.png" alt="podium" class="podium-img" />
    <div class="first-score">
      <div style="display: table-cell; vertical-align: bottom">
        <!-- <div style="height:5vh;"> -->
        <!-- <div style="display: flex; height:100%; align-items: center; font-weight: bold; color: gray;">
                        <img v-if="Rank[0].tier =='Bronze'" src="@/assets/Ranking/brz.png" alt="tier_picture" style="height:40%; margin-right:1vw;">
                        <img v-if="Rank[0].tier =='Silver'" src="@/assets/Ranking/slv.png" alt="tier_picture" style="height:40%; margin-right:1vw;">
                        <img v-if="Rank[0].tier =='Gold'" src="@/assets/Ranking/gld.png" alt="tier_picture" style="height:40%; margin-right:1vw;">
                        <img v-if="Rank[0].tier =='Platinum'" src="@/assets/Ranking/pltn.png" alt="tier_picture" style="height:40%; margin-right:1vw;">
                        <img v-if="Rank[0].tier =='Diamond'" src="@/assets/Ranking/dmd.png" alt="tier_picture" style="height:40%; margin-right:1vw;">
                        {{Rank[0].tier}}
                    </div> -->
        {{ Rank[0].nickname }}
        <!-- </div> -->
        <img
          src="@/assets/Ranking/croc.png"
          alt="first"
          style="max-width: 100%; max-height: 100%"
        />
      </div>
    </div>
    <div class="second-score">
      <div style="display: table-cell; vertical-align: bottom">
        <div>{{ Rank[1].nickname }}</div>
        <img
          src="@/assets/Ranking/gosm.png"
          alt="second"
          style="max-width: 100%; max-height: 100%"
        />
      </div>
    </div>
    <div class="third-score">
      <div style="display: table-cell; vertical-align: bottom">
        <div>{{ Rank[2].nickname }}</div>
        <img
          src="@/assets/Ranking/shark.png"
          alt="third"
          style="max-width: 100%; max-height: 100%"
        />
      </div>
    </div>

    <ranking-list class="ranking-list" :Rank="Rank" />
  </div>
</template>
<script>
import RankingList from "@/views/Ranking/RankingList.vue";

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
      what_game: 0,
      Rank: [
        {
          rank: 1,
          nickname: "펭수는행복해1",
          tier: "Diamond",
          max_score: 1700,
        },
        {
          rank: 2,
          nickname: "펭수는행복해2",
          tier: "Diamond",
          max_score: 1600,
        },
        {
          rank: 3,
          nickname: "펭수는행복해3",
          tier: "Diamond",
          max_score: 1550,
        },
        {
          rank: 4,
          nickname: "펭수는행복해4",
          tier: "Diamond",
          max_score: 1500,
        },
        {
          rank: 5,
          nickname: "펭수는행복해5",
          tier: "Platinum",
          max_score: 1300,
        },
        {
          rank: 6,
          nickname: "펭수는행복해6",
          tier: "Gold",
          max_score: 1200,
        },
        {
          rank: 7,
          nickname: "펭수는행복해7",
          tier: "Silver",
          max_score: 1140,
        },
        {
          rank: 8,
          nickname: "펭수는행복해8",
          tier: "Bronze",
          max_score: 1120,
        },
        {
          rank: 9,
          nickname: "펭수는행복해9",
          tier: "Bronze",
          max_score: 1100,
        },
        {
          rank: 10,
          nickname: "펭수는행복해10",
          tier: "Bronze",
          max_score: 1050,
        },
      ],
    };
  },
  created: function () {
    if (this.whatgame != undefined) {
      this.what_game = this.whatgame;
    }
  },
};
</script>
<style scoped>
.ranking-page-wrapper {
  background-image: linear-gradient(to bottom, #e2f1f9, #f6f8fc);
  width: 100%;
  height: 180vh;
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
  top: 60%;
  left: 10%;
  height: 20%;
  width: 8%;
}
.ranking-page-wrapper .cardflip-img {
  position: absolute;
  top: 60%;
  right: 15%;
  height: 20%;
  width: 8%;
}
.ranking-page-wrapper .wordguess-img {
  position: absolute;
  top: 55%;
  right: 5%;
  height: 23%;
  width: 10%;
}
.ranking-page-wrapper .podium-img {
  position: absolute;
  top: 35%;
  right: 30%;
  height: 60%;
  width: 40%;
}
.ranking-page-wrapper .first-score {
  position: absolute;
  display: table;
  top: 25%;
  right: 45%;
  height: 23%;
  width: 10%;
  z-index: 10;
  font-weight: bold;
}
.ranking-page-wrapper .second-score {
  position: absolute;
  display: table;
  top: 37%;
  left: 34%;
  height: 23%;
  width: 10%;
  z-index: 10;
  font-weight: bold;
}
.ranking-page-wrapper .third-score {
  position: absolute;
  display: table;
  top: 40%;
  right: 34%;
  height: 23%;
  width: 10%;
  z-index: 10;
  font-weight: bold;
}
.ranking-page-wrapper .ranking-list {
  position: absolute;
  width: 60%;
  top: 100%;
  left: 20%;
  height: 75%;
}
</style>