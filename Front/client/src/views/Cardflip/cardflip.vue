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
      :card="card" 
      class="flip-container"
      @click="clickCard(card)"
      >
        <div v-if="card.isMatched"></div>
        <div class="card flipped front" v-else-if="card.isFlipped">
            <div class="card" v-if="card.image">
              <img class="cardImage" :src="require(`@/assets/cardflip/${card.image}`)"/>
            </div>
            <div class="letter" v-else>
              {{card.letter}}
            </div>
            <!-- <div class="letter">
              {{card.letter}}
            </div> -->
        </div>
        <div class="card back" v-else><img class="cardImage"  src="@/assets/cardflip/back.png" /></div>
      </div>
    </div>
    <div class="info-panel">
      <dir class="score">Score: {{score}}</dir>
      <div class="time">{{seconds}}</div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'App',
  data() {
    return {
      show: true,
      score: 0,
      cards1: [
        //자음
        { letter: 'ㄱ', isFlipped: false, isMatched: false },
        { letter: 'ㄴ', isFlipped: false, isMatched: false },
        { letter: 'ㄷ', isFlipped: false, isMatched: false },
        { letter: 'ㄹ', isFlipped: false, isMatched: false },
        { letter: 'ㅁ', isFlipped: false, isMatched: false },
        { letter: 'ㅂ', isFlipped: false, isMatched: false },
        { letter: 'ㅅ', isFlipped: false, isMatched: false },
        { letter: 'ㅇ', isFlipped: false, isMatched: false },
        { letter: 'ㅈ', isFlipped: false, isMatched: false },
        { letter: 'ㅊ', isFlipped: false, isMatched: false },
        { letter: 'ㅋ', isFlipped: false, isMatched: false },
        { letter: 'ㅌ', isFlipped: false, isMatched: false },
        { letter: 'ㅍ', isFlipped: false, isMatched: false },
        { letter: 'ㅎ', isFlipped: false, isMatched: false },
        // 모음
        // { letter: 'ㅏ', isFlipped: false, isMatched: false },
        // { letter: 'ㅑ', isFlipped: false, isMatched: false },
        // { letter: 'ㅓ', isFlipped: false, isMatched: false },
        // { letter: 'ㅕ', isFlipped: false, isMatched: false },
        // { letter: 'ㅗ', isFlipped: false, isMatched: false },
        // { letter: 'ㅛ', isFlipped: false, isMatched: false },
        // { letter: 'ㅜ', isFlipped: false, isMatched: false },
        // { letter: 'ㅠ', isFlipped: false, isMatched: false },
        // { letter: 'ㅡ', isFlipped: false, isMatched: false },
        // { letter: 'ㅣ', isFlipped: false, isMatched: false },
      ],
      cards2: [
        { letter: 'ㄱ', isFlipped: false, isMatched: false, image: 'ㄱ.png'},
        { letter: 'ㄴ', isFlipped: false, isMatched: false, image: 'ㄴ.png'},
        { letter: 'ㄷ', isFlipped: false, isMatched: false, image: 'ㄷ.png'},
        { letter: 'ㄹ', isFlipped: false, isMatched: false, image: 'ㄹ.png'},
        { letter: 'ㅁ', isFlipped: false, isMatched: false, image: 'ㅁ.png' },
        { letter: 'ㅂ', isFlipped: false, isMatched: false, image: 'ㅂ.png' },
        { letter: 'ㅅ', isFlipped: false, isMatched: false, image: 'ㅅ.png' },
        { letter: 'ㅇ', isFlipped: false, isMatched: false, image: 'ㅇ.png' },
        { letter: 'ㅈ', isFlipped: false, isMatched: false, image: 'ㅈ.png' },
        { letter: 'ㅊ', isFlipped: false, isMatched: false, image: 'ㅊ.png' },
        { letter: 'ㅋ', isFlipped: false, isMatched: false, image: 'ㅋ.png' },
        { letter: 'ㅌ', isFlipped: false, isMatched: false, image: 'ㅌ.png' },
        { letter: 'ㅍ', isFlipped: false, isMatched: false, image: 'ㅍ.png' },
        { letter: 'ㅎ', isFlipped: false, isMatched: false, image: 'ㅎ.png' },
        // 모음
        // { letter: 'ㅏ', isFlipped: false, isMatched: false, image: 'ㅏ.png' },
        // { letter: 'ㅑ', isFlipped: false, isMatched: false, image: 'ㅑ.png' },
        // { letter: 'ㅓ', isFlipped: false, isMatched: false, image: 'ㅓ.png' },
        // { letter: 'ㅕ', isFlipped: false, isMatched: false, image: 'ㅕ.png' },
        // { letter: 'ㅗ', isFlipped: false, isMatched: false, image: 'ㅗ.png' },
        // { letter: 'ㅛ', isFlipped: false, isMatched: false, image: 'ㅛ.png' },
        // { letter: 'ㅜ', isFlipped: false, isMatched: false, image: 'ㅜ.png' },
        // { letter: 'ㅠ', isFlipped: false, isMatched: false, image: 'ㅠ.png' },
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
      // On first load shuffle cards for a new game
      this.shuffleCards()
  },
  methods: {
    startGame(){
      // When game starts, start the timer process
      this.clockTick()
      this.timer = setInterval(this.clockTick, 1000)
    },
    resetGame(){
      // when reset button is clicked, reset variables and reshuffle the cards
      this.totalTime = {
          seconds: 99
        }
      this.totalMatches = 0
      this.score = 0
      this.gameIsOver = false
      this.timer = null
      this.shuffleCards()
    },
    clockTick(){
      this.totalTime.seconds--;
      if(this.totalTime.seconds === 0){
        clearInterval(this.timer)
        this.gameIsOver = true;
        return
          }
    },
    shuffleCards() {
      // Clear game deck
      this.gameCards = []
      // Create 2 sets of each of the 12 unique cards
      let cards1 = _.cloneDeep(this.cards1)
      let cards2 = _.cloneDeep(this.cards2)
      // Load the game deck with both sets of cards and randomize them
      this.gameCards = _.shuffle(this.gameCards.concat(cards1, cards2))
    },
    clickCard(card){
      // If game is not running, start it
      if(!this.timer){
        this.startGame()
      }
      if (card.isMatched || card.isFlipped || this.flippedCards.length === 2)
        return
      // If the current card is not flipped then flip it
      if(!card.isFlipped) {
        card.isFlipped = true
        // If there are less than 2 flipped cards, add this card
        if(this.flippedCards.length < 2) {
          this.flippedCards.push(card)
        }
        // If there are 2 flipped cards, see if they match
        if(this.flippedCards.length === 2){
          this.matchCards()
        }
      }
    },
    matchCards() {
        // If the cards match, increment the match count, set the cards as matched and reset the flipprd cards
        if(this.flippedCards[0].letter === this.flippedCards[1].letter) {
          this.totalMatches++
          // Delay so player can see match before cards are removed
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
        // If not a match, set the cards to not flipped and reset the flipped cards
        else {   
          // Delay is a bit longer on a non-match       
          setTimeout(()=> {
            this.flippedCards.forEach(card => card.isFlipped = false)
            this.flippedCards = []
          }, 800)
        }
        // If we have 12 matches, end the game
        if(this.totalTime.seconds === 10){
          clearInterval(this.timer)
          this.gameIsOver = true
        }
    }
  },
  computed:{
    seconds(){
        // If single digit, display leading 0
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
  height: 90vh;
  margin: 5vh;
}

.cardFlip .info-panel{
  flex:15%;
  border-radius: 20px;
  margin: 2vh;
}

.cardFlip .info-panel .score{
  width: 100%;
  height: 10%;
  background-color: #f4f1eb;
  margin-bottom: 1.5vh;
  border-radius: 30px;
  border: solid 4px #a4a4a3;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
  color: #917052;
  font-family: 'SDSamliphopangche_Basic';
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cardFlip .info-panel .time{
  width: 100%;
  height: 25%;
  background-color: #f4f1eb;
  margin-bottom: 1.5vh;
  border-radius: 40px;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
  font-family: 'SDSamliphopangche_Basic';
  font-size: 10rem;
}


.cardFlip .game-board {
  background-color: #f4f1eb;
  flex:85%;
  border-radius: 20px;
  margin: 2vh;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);

  display: grid;
  /*  카드 개수 조정 */
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;  
  grid-template-rows: 1fr 1fr 1fr 1fr ;
  column-gap: 1vh;
  row-gap: 1vh;
}

.card {
  width: 200px;
  height: 170px;
  cursor: pointer;
  
}

.cardImage {
  width: 100%; 
  height: 100%;
}


.card .letter {
  text-align: center;
  font-size: 120px;
  margin: auto;
}


.flip-container {
  perspective: 1000;
}

.front {
  backface-visibility: hidden;
  transition: 0.6s;
  transform-style: preserve-3d;
  top: 0;
  left: 0;
  width: 100%;
}

.back {
  border: 0px;
  transform: rotateY(-180deg);
  position: absolute;
}

.flip-container.flipped .back {
  transform: rotateY(0deg);
}
.flip-container.flipped .front {
  transform: rotateY(180deg);
}

</style>
