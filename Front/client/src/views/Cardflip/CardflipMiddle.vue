<template>
  <div id="app" class="cardFlip">
    <!-- gameover 모달 -->
    <div v-if="gameIsOver" >
      <b-modal v-model="show" id="bv-modal-example" hide-footer no-close-on-backdrop>
        <p>game over</p>
        <p>Score: {{score}}</p>
        <b-button class="mt-3" block @click="resetGame">다시하기</b-button>
        <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">닫기</b-button>
      </b-modal>
    </div>
    <div class="game-board">
      <div v-for="(card, index) in gameCards" 
      :key="`card-${index}`" 
      :class="{ flipped: card.isFlipped, 'opacity-25': card.isMatched }"
      class="flip-container"
      @click="clickCard(card)"
      >
        <div class="relative">
          <div class="front" v-if="card.image">
            <img class="cardImage" :src="require(`@/assets/cardflip/${card.image}`)"/>
          </div>
          <div class="front" v-else>
            <img class="cardImage" :src="require(`@/assets/cardflip/letter/${card.image1}`)"/>
          </div>
          <div class="back"><img class="cardBackImage"  src="@/assets/cardflip/back.png" /></div>
        </div>
      </div>
    </div>
    <div class="info-panel">
      <div class="name-panel">
        <div>하태린 님</div>
      </div>
      <div class="info-color">
        <dir class="cardFont">Difficulty</dir>
        <dir class="score">중 (5X4)</dir>
        <dir class="cardFont">Score</dir>
        <dir class="score">{{score}}</dir>
        <dir class="cardFont">Best score</dir>
        <dir class="score">2500</dir>
        <dir class="cardFont">Time</dir>
        <div>
          <div id="check_btn" class="last-time" v-if="this.clock">
            <div class="clock-font">{{seconds}}</div>
          </div>
          <div class="time" v-else >{{seconds}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'CardflipMiddel',
  data() {
    return {
      show: true,
      score: 0,
      cards1: [
        //자음
        // { letter: 'ㄱ', isFlipped: false, isMatched: false, image1: 'ㄱ.png'},
        // { letter: 'ㄴ', isFlipped: false, isMatched: false, image1: 'ㄴ.png'},
        // { letter: 'ㄷ', isFlipped: false, isMatched: false, image1: 'ㄷ.png'},
        // { letter: 'ㄹ', isFlipped: false, isMatched: false, image1: 'ㄹ.png'},
        // { letter: 'ㅁ', isFlipped: false, isMatched: false, image1: 'ㅁ.png' },
        { letter: 'ㅂ', isFlipped: false, isMatched: false, image1: 'ㅂ.png' },
        { letter: 'ㅅ', isFlipped: false, isMatched: false, image1: 'ㅅ.png' },
        { letter: 'ㅇ', isFlipped: false, isMatched: false, image1: 'ㅇ.png' },
        { letter: 'ㅈ', isFlipped: false, isMatched: false, image1: 'ㅈ.png' },
        { letter: 'ㅊ', isFlipped: false, isMatched: false, image1: 'ㅊ.png' },
        // { letter: 'ㅋ', isFlipped: false, isMatched: false, image1: 'ㅋ.png' },
        // { letter: 'ㅌ', isFlipped: false, isMatched: false, image1: 'ㅌ.png' },
        // { letter: 'ㅍ', isFlipped: false, isMatched: false, image1: 'ㅍ.png' },
        // { letter: 'ㅎ', isFlipped: false, isMatched: false, image1: 'ㅎ.png' },
        // 모음
        // { letter: 'ㅏ', isFlipped: false, isMatched: false, image1: 'ㅏ.png' },
        // { letter: 'ㅑ', isFlipped: false, isMatched: false, image1: 'ㅑ.png' },
        // { letter: 'ㅓ', isFlipped: false, isMatched: false, image1: 'ㅓ.png' },
        { letter: 'ㅕ', isFlipped: false, isMatched: false, image1: 'ㅕ.png' },
        { letter: 'ㅗ', isFlipped: false, isMatched: false, image1: 'ㅗ.png' },
        { letter: 'ㅛ', isFlipped: false, isMatched: false, image1: 'ㅛ.png' },
        { letter: 'ㅜ', isFlipped: false, isMatched: false, image1: 'ㅜ.png' },
        { letter: 'ㅠ', isFlipped: false, isMatched: false, image1: 'ㅠ.png' },
        // { letter: 'ㅡ', isFlipped: false, isMatched: false, image1: 'ㅡ.png' },
        // { letter: 'ㅣ', isFlipped: false, isMatched: false, image1: 'ㅣ.png' },
      ],
      cards2: [
        // { letter: 'ㄱ', isFlipped: false, isMatched: false, image: 'ㄱ.png'},
        // { letter: 'ㄴ', isFlipped: false, isMatched: false, image: 'ㄴ.png'},
        // { letter: 'ㄷ', isFlipped: false, isMatched: false, image: 'ㄷ.png'},
        // { letter: 'ㄹ', isFlipped: false, isMatched: false, image: 'ㄹ.png'},
        // { letter: 'ㅁ', isFlipped: false, isMatched: false, image: 'ㅁ.png' },
        { letter: 'ㅂ', isFlipped: false, isMatched: false, image: 'ㅂ.png' },
        { letter: 'ㅅ', isFlipped: false, isMatched: false, image: 'ㅅ.png' },
        { letter: 'ㅇ', isFlipped: false, isMatched: false, image: 'ㅇ.png' },
        { letter: 'ㅈ', isFlipped: false, isMatched: false, image: 'ㅈ.png' },
        { letter: 'ㅊ', isFlipped: false, isMatched: false, image: 'ㅊ.png' },
        // { letter: 'ㅋ', isFlipped: false, isMatched: false, image: 'ㅋ.png' },
        // { letter: 'ㅌ', isFlipped: false, isMatched: false, image: 'ㅌ.png' },
        // { letter: 'ㅍ', isFlipped: false, isMatched: false, image: 'ㅍ.png' },
        // { letter: 'ㅎ', isFlipped: false, isMatched: false, image: 'ㅎ.png' },
        // 모음
        // { letter: 'ㅏ', isFlipped: false, isMatched: false, image: 'ㅏ.png' },
        // { letter: 'ㅑ', isFlipped: false, isMatched: false, image: 'ㅑ.png' },
        // { letter: 'ㅓ', isFlipped: false, isMatched: false, image: 'ㅓ.png' },
        { letter: 'ㅕ', isFlipped: false, isMatched: false, image: 'ㅕ.png' },
        { letter: 'ㅗ', isFlipped: false, isMatched: false, image: 'ㅗ.png' },
        { letter: 'ㅛ', isFlipped: false, isMatched: false, image: 'ㅛ.png' },
        { letter: 'ㅜ', isFlipped: false, isMatched: false, image: 'ㅜ.png' },
        { letter: 'ㅠ', isFlipped: false, isMatched: false, image: 'ㅠ.png' },
        // { letter: 'ㅡ', isFlipped: false, isMatched: false, image: 'ㅡ.png' },
        // { letter: 'ㅣ', isFlipped: false, isMatched: false, image: 'ㅣ.png' },
      ],      
      gameCards: [],
      flippedCards: [],
      totalMatches: 0,
      totalTime: {
        seconds: 99
      },
      timer: null,
      gameIsOver: false
    }
  },
  created() {
      // 새로운 게임 시작시 카드 섞어주기
      this.shuffleCards()
  },
  methods: {
    startGame(){
     // 카드 클릭하면 시간이 지나면서 게임 시작
      this.clockTick()
      this.timer = setInterval(this.clockTick, 1000)
    },
    resetGame(){
      // 다시 시작하기
      this.totalTime = {
          seconds: 99
        }
      this.totalMatches = 0
      this.score = 0
      this.gameIsOver = false
      this.timer = null
      this.clock = false
      this.shuffleCards()
    },
    clockTick(){
      this.totalTime.seconds--;
      if(this.totalTime.seconds < 10){
        this.clock = true;
      }
      if(this.totalTime.seconds === 0){
        clearInterval(this.timer)
        this.gameIsOver = true;
        return
          }
    },
    shuffleCards() {
      this.gameCards = []
      let cards1 = _.cloneDeep(this.cards1)
      let cards2 = _.cloneDeep(this.cards2)
      this.gameCards = _.shuffle(this.gameCards.concat(cards1, cards2))
    },
    clickCard(card){
      if(!this.timer){
        this.startGame()
      }
      if (card.isMatched || card.isFlipped || this.flippedCards.length === 2)
        return
      if(!card.isFlipped) {
        card.isFlipped = true
        if(this.flippedCards.length < 2) {
          this.flippedCards.push(card)
        }
        if(this.flippedCards.length === 2){
          this.matchCards()
        }
      }
    },
    matchCards() {
        if(this.flippedCards[0].letter === this.flippedCards[1].letter) {
          this.totalMatches++
          setTimeout(()=> {
            this.flippedCards.forEach(card => card.isMatched = true)
            this.flippedCards = []
            if (this.gameCards.every((card) => card.isMatched === true)) {
              clearInterval(this.timer)
              this.gameIsOver = true
              }
                        
            // 점수 산성
            if(this.gameIsOver === true){
            this.score += this.seconds * 100
              }
              else{
                this.score = this.totalMatches * 100
              }  
          }, 400)
        }
        else {   
          setTimeout(()=> {
            this.flippedCards.forEach(card => card.isFlipped = false)
            this.flippedCards = []
          }, 800)
        }
    }
  },
  computed:{
    seconds(){
        if(this.totalTime.seconds < 10){
            return `0${this.totalTime.seconds}`
        }
        return this.totalTime.seconds;
    },
  },
}
</script>

<style scoped>
.cardFlip{
  display: flex;
  width: 100%;
  height: 100vh;
  margin: 5vh;
}

.cardFlip .info-panel{
  flex:15%;
  border-radius: 20px;
  margin: 2vh;
}

.info-color{
  background-color: #f4f1eb;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
  border-radius: 20px;
}


.cardFlip .name-panel{
  width: 100%;
  height: 7%;
  background-color: #f4f1eb;
  margin-bottom: 4vh;
  border-radius: 30px;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
  color: #917052;
  font-family: 'SDSamliphopangche_Basic';
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}


.cardFlip .info-panel .score{
  width: 80%;
  height: 10%;
  background-color: #E5D2BD;
  margin-bottom: 0;
  margin-top: 0;
  margin-left: 3vh;
  margin-right: 3vh;
  border-radius: 30px;
  border: solid 4px #b88b64;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
  color: #917052;
  font-family: 'SDSamliphopangche_Basic';
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}

.cardFlip .info-panel .time{
  width: 80%;
  height: 25%;
  border: solid 4px #b88b64;
  background-color: #917052;;
  color: white;
  margin-bottom: 0;
  margin-top: 0;
  margin-left: 3vh;
  margin-right: 3vh;
  border-radius: 40px;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
  font-family: 'SDSamliphopangche_Basic';
  font-size: 8rem;
}

@keyframes blink-effect {
  50% {
    opacity: 0;
  }
}

.cardFlip .info-panel .last-time .clock-font{
  animation: blink-effect 0.5s step-end infinite;
  color: white;
  font-family: 'SDSamliphopangche_Basic';
  font-size: 8rem;
}

.cardFlip .info-panel .last-time{
  width: 80%;
  height: 25%;
  border: solid 4px #b88b64;
  background-color: #ff0000;;
  margin-bottom: 0;
  margin-top: 0;
  margin-left: 3vh;
  margin-right: 3vh;
  border-radius: 40px;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
}


.cardFlip .game-board {
  flex:85%;
  margin: 2vh;
  display: grid;
  /*  카드 개수 조정 */
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;  
  grid-template-rows: 1fr 1fr 1fr 1fr ;
  column-gap: 1vh;
  row-gap: 1vh;
}

.flip-container {
  perspective: 300;
  width: 27vh;
  height: 20vh;
}

.relative {
  position: relative;
}

.front,
.back {
  backface-visibility: hidden;
  transition: 0.6s;
  transform-style: preserve-3d;
  width: 27vh;
  height: 20vh;
  cursor: pointer;
  position: absolute;
}

.flip-container .front {
  width: 27vh;
  height: 20vh;
  transform: rotateY(-180deg);
}

.flip-container.flipped .front {
  width: 27vh;
  height: 20vh;
  transform: rotateY(0deg);
}
.flip-container.flipped .back {
  width: 27vh;
  height: 20vh;
  transform: rotateY(180deg);
}

.cardBackImage {
  width: 27vh;
  height: 20vh;
  border-radius: 20px;
}

.cardImage {
  width: 27vh;
  height: 20vh;
  border: solid 0.3vh #E5D2BD;
  border-radius: 20px;
}

.cardFont {
  color: #b88b64;
  font-size: 3rem;
  font-family: 'SDSamliphopangche_Basic';
  margin-bottom: 0;  
  padding: 0;
  margin-top: 1.5vh;
}

</style>
