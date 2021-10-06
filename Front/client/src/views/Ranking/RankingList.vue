<template>
    <div class="ranking-list-wrapper">
        <ranking-list-item v-for="item in Rank" :key="item.rank" :item="item" :Rank="Rank"/>        
    </div>
</template>
<script>
import RankingListItem from '@/views/Ranking/RankingListItem.vue'

export default {
    name: "RankingList",
    components: {
        RankingListItem,
    },
    props: {
        Rank: Array,
    },
    data() {
        return {
        }
    },
};
</script>
<style scoped>
.ranking-list-wrapper{
    width: 100%;
    height: 100%;
}

.line {
  width: 100%;
  height: 3px;
  margin-top: 2vh;
  margin-bottom: 2vh;
  background-color: #F4F1EB;
}

</style>