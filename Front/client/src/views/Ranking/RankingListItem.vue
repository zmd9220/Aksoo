<template>
    <div class="ranking-list-item-wrapper">
        <div class="ranking-list-item">
            <div class="rank" style="width:3%">
                {{item.rank}}.
            </div>
            <div style="display: flex; height:100%; align-items: center;">
                <img src="@/assets/croc.png" alt="profile_picture" class="profile-pic">
            </div>
            <div style="display: flex; height:100%; align-items: center; font-weight: bold; color: black; width:20%">
                {{item.nickname}}
            </div>
            <div></div>
            <div></div>
            <div style="display: flex; height:100%; align-items: center; font-weight: bold; color: gray; width:15%">
                <img v-if="item.tier =='Bronze'" src="@/assets/Ranking/brz.png" alt="tier_picture" style="height:40%; margin-right:1vw;">
                <img v-if="item.tier =='Silver'" src="@/assets/Ranking/slv.png" alt="tier_picture" style="height:40%; margin-right:1vw;">
                <img v-if="item.tier =='Gold'" src="@/assets/Ranking/gld.png" alt="tier_picture" style="height:40%; margin-right:1vw;">
                <img v-if="item.tier =='Platinum'" src="@/assets/Ranking/pltn.png" alt="tier_picture" style="height:40%; margin-right:1vw;">
                <img v-if="item.tier =='Diamond'" src="@/assets/Ranking/dmd.png" alt="tier_picture" style="height:40%; margin-right:1vw;">
                {{item.tier}}
            </div>
            <div style="display: flex; height:100%; align-items: center; font-weight: bold; color: gray; width:8%">
                {{item.max_score}}P
            </div>
            <div style="display: flex; height:100%; align-items: center;">
                <div class="add-button" ><span>친구신청</span></div>
            </div>
        </div>
        <div class="line"></div>
    </div>
</template>
<script>
export default {
  name: "RankingListItem",
  data () {
    return{
    }
  },
  props: {
    item: Object,
  }
}
</script>
<style scoped>
.ranking-list-item-wrapper {
    width: 100%;
    height: 17%;
}
.ranking-list-item-wrapper .ranking-list-item{
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: space-between;
}
.ranking-list-item-wrapper .ranking-list-item .rank{
    font-size: 3vh;
    color: #957457;
    text-align: center;
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: bold;
}
.ranking-list-item-wrapper .ranking-list-item .profile-pic{
    background-color: orange;
    height: 7vh;
    width: 7vh;
    border-radius: 100%;
}
.ranking-list-item-wrapper .ranking-list-item .add-button{
    text-align: center;
    color: #957457;
    font-size: 2vh;
    background-color: #E5D2BD;
    height: 4vh;
    width: 6vw;
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
  background-color: #EAD9C4;
}
</style>