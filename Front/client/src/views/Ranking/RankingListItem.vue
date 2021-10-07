<template>
    <div class="ranking-list-item-wrapper">
      <div v-if="what == 100">
      {{ what }}
    </div>

        <div class="ranking-list-item">
            <div class="rank" style="width:3%">
                {{item.rank}}.
            </div>
            <div style="display: flex; height:100%; align-items: center;">
                <img :src='"@/assets/Profile/prf-" + profile_name[item.profile%7] +".png"' alt="profile_picture" class="profile-pic">
            </div>
            <div style="display: flex; height:100%; align-items: center; font-weight: bold; color: black; width:20%">
                {{item.nickname}}
            </div>
            <div></div>
            <div></div>
            <div style="display: flex; height:100%; align-items: center; font-weight: bold; color: gray; width:15%">
                <img v-if="item.tier == 5" src="@/assets/Ranking/brz.png" alt="tier_picture" style="height:40%; margin-right:1vw;">
                <img v-if="item.tier == 4" src="@/assets/Ranking/slv.png" alt="tier_picture" style="height:40%; margin-right:1vw;">
                <img v-if="item.tier == 3" src="@/assets/Ranking/gld.png" alt="tier_picture" style="height:40%; margin-right:1vw;">
                <img v-if="item.tier == 2" src="@/assets/Ranking/pltn.png" alt="tier_picture" style="height:40%; margin-right:1vw;">
                <img v-if="item.tier == 1" src="@/assets/Ranking/dmd.png" alt="tier_picture" style="height:40%; margin-right:1vw;">
                {{tier_num_to_str[item.tier]}}
            </div>
            <div style="display: flex; height:100%; align-items: center; font-weight: bold; color: gray; width:8%">
                {{item.max_score}}P
            </div>
            <div style="display: flex; height:100%; align-items: center;">
                <div class="add-button" @click="follow(item.profile)" style="cursor: pointer">
                    <span v-if="this.isFollow">친구삭제</span>
                    <span v-else>친구신청</span>
                </div>
            </div>
        </div>
        <div class="line"></div>
    </div>
</template>

<script>
import axios from "axios";
import {mapState} from 'vuex'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: "RankingListItem",
  data () {
    return{
        tier_num_to_str:[0, 'Diamond', 'Platinum', 'Gold', 'Silver', 'Bronze'],
        profile_name: ['bird', 'cml', 'croc', 'ele', 'gsm', 'hippo', 'shark'],
        isFollow: false,
        what: 0,
    }
  },
  props: {
    item: Object,
    Rank: Array,
  },
  methods: {
      // follow(id) {
      //   axios ({
      //   method: 'post',
      //   url: SERVER_URL + '/accounts/follow/' + id + '/',
      //   headers: {
      //     "Authorization": `Bearer ${this.accessToken}`
      //   },
      // }).then((res) => {
      //   console.log(res)
      //   // console.log(this.Rank)    
      //   console.log(this.isFollow) 
      //   this.what = 1;
      //   window.location.reload()      
      // }).catch(err => {
      //   console.log(err)
      // }) 
      // }
      follow: async function(id) {
        try {
          await axios ({
          method: 'post',
          url: SERVER_URL + '/accounts/follow/' + id + '/',
          headers: {
            "Authorization": `Bearer ${this.accessToken}`
          },
        })
        this.what = Math.random();
        // window.location.reload()
        } catch (err) {
        console.log(err.response);
        }
      }
  },
  computed: {
    ...mapState('userStore', ['accounts', 'accessToken'])
  },
  updated: function () {
    // axios 데이터 가져오기
    axios ({
        method: 'get',
        url: SERVER_URL + '/accounts/follow/' + this.item.profile + '/',
        headers: {
          "Authorization": `Bearer ${this.accessToken}`
        },
      }).then((res) => {
        console.log(res.data.isFollow)
        this.isFollow = res.data.isFollow
      }).catch(err => {
        console.log(err)
      }) 
  },
  created: function () {
    axios ({
        method: 'get',
        url: SERVER_URL + '/accounts/follow/' + this.item.profile + '/',
        headers: {
          "Authorization": `Bearer ${this.accessToken}`
        },
      }).then((res) => {
        console.log(res.data.isFollow)
        this.isFollow = res.data.isFollow
      }).catch(err => {
        console.log(err)
      }) 
  }
};
</script>
<style scoped>
.ranking-list-item-wrapper {
  width: 100%;
  height: 17%;
}
.ranking-list-item-wrapper .ranking-list-item {
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: space-between;
}
.ranking-list-item-wrapper .ranking-list-item .rank {
  font-size: 3vh;
  color: #957457;
  text-align: center;
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: bold;
}
.ranking-list-item-wrapper .ranking-list-item .profile-pic {
  background-color: #fef8e2;
  height: 7vh;
  width: 7vh;
  border-radius: 100%;
  /* border: 2px solid #EAD9C4; */
}
.ranking-list-item-wrapper .ranking-list-item .add-button{
    text-align: center;
    color: #957457;
    font-size: 2vh;
    background-color: #E5D2BD;
    height: 4vh;
    width: 8vw;
    border-radius: 4vh;
    font-weight: bold;
    display: inline-block;
    line-height: 4vh;
}

.line {
  width: 100%;
  height: 1.5px;
  margin-top: 2vh;
  margin-bottom: 2vh;
  background-color: #ead9c4;
}
</style>