<template>
  <div id="app">
    <div class="info-panel">
      <div>Game Time: {{seconds}}</div>
      <dir>Score: {{score}}</dir>
    </div>

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
        <div class="card matched" v-if="card.isMatched"></div>
        <div class="card flipped front" v-else-if="card.isFlipped">
            <!-- <div class="letter" v-if="card.image">
              <img width="100" :src="require(`@/assets/images/${card.image}`)"/>
            </div>
            <div class="letter" v-else>
              {{card.letter}}
            </div> -->
            <div class="letter">
              {{card.letter}}
            </div>
        </div>
        <div class="card back" v-else></div>
      </div>
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
        { letter: 'ㄱ', isFlipped: false, isMatched: false },
        { letter: 'ㄴ', isFlipped: false, isMatched: false },
        { letter: 'ㄷ', isFlipped: false, isMatched: false },
        { letter: 'ㄹ', isFlipped: false, isMatched: false },
      ],
      cards2: [
        { letter: 'ㄱ', isFlipped: false, isMatched: false, image: 'a.jpg'},
        { letter: 'ㄴ', isFlipped: false, isMatched: false, image: 'b.jpg'},
        { letter: 'ㄷ', isFlipped: false, isMatched: false, image: 'c.jpg'},
        { letter: 'ㄹ', isFlipped: false, isMatched: false, image: 'd.jpg'},
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

<style >
body {
  font-size: 24px;
}

.info-panel{
  width: 1000px;
  margin: 20px auto 10px;
      text-align: center;
}

.info-panel {
  display: grid;  
  grid-template-columns: 1fr 1fr 1fr;
}


.game-board {
  margin: 10px auto;
  padding: 20px;
  width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
}

.card {
  width: 146px;
  height: 146px;
  border: 2px solid;
  cursor: pointer;
}

.card .flipped .matched {
    background-color: #fabf67;
    cursor: default;
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

/* .back {
  backface-visibility: hidden;
  transition: 0.6s;
  transform-style: preserve-3d;
  top: 0;
  left: 0;
  width: 100%;
} */
.back {
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
