<template>
  <div id="app">
    <div class="info-panel">
      <div>Moves: {{totalMoves}}</div>
      <div>Matches: {{totalMatches}}</div>
      <div>Game Time: {{minutes}}:{{seconds}}</div>
    </div>
    <div class="play-again" v-if="gameIsOver">
      <button class="btn" @click="resetGame">Play Again?</button>
    </div>
    <div class="game-board">
      <div v-for="(card, index) in gameCards" :key="`card-${index}`" :card="card" @click="clickCard(card)">
        <div class="card matched" v-if="card.isMatched"></div>
        <div class="card flipped" v-else-if="card.isFlipped">
            <div class="letter">
                {{card.letter}}
            </div>
        </div>
        <div class="card" v-else></div>
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
        cards: [
          { letter: 'A', isFlipped: false, isMatched: false },
          { letter: 'B', isFlipped: false, isMatched: false },
          { letter: 'C', isFlipped: false, isMatched: false },
          { letter: 'D', isFlipped: false, isMatched: false },
          { letter: 'E', isFlipped: false, isMatched: false },
          { letter: 'F', isFlipped: false, isMatched: false },
          { letter: 'G', isFlipped: false, isMatched: false },
          { letter: 'H', isFlipped: false, isMatched: false },
          { letter: 'I', isFlipped: false, isMatched: false },
          { letter: 'J', isFlipped: false, isMatched: false },
          { letter: 'K', isFlipped: false, isMatched: false },
          { letter: 'L', isFlipped: false, isMatched: false },
        ],
        gameCards: [],
        flippedCards: [],
        totalMoves: 0,
        totalMatches: 0,
        totalTime: {
          minutes: 0,
          seconds: 0
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
          minutes: 0,
          seconds: 0
        }
      this.totalMoves = 0
      this.totalMatches = 0
      this.gameIsOver = false
      this.timer = null
      this.shuffleCards()
    },
    clockTick(){
      // Until we reach 59 seconds, increment seconds and exit
      if(this.totalTime.seconds !== 59){
            this.totalTime.seconds++;
            return
          }
      
      // Once we're at 59 seconds, increase minutes and reset seconds to 0
      this.totalTime.minutes++;
      this.totalTime.seconds = 0;
    },
    shuffleCards() {
      // Clear game deck
      this.gameCards = []
      // Create 2 sets of each of the 12 unique cards
      let cards1 = _.cloneDeep(this.cards)
      let cards2 = _.cloneDeep(this.cards)
      // Load the game deck with both sets of cards and randomize them
      this.gameCards = _.shuffle(this.gameCards.concat(cards1, cards2))
    },
    clickCard(card){
      // If game is not running, start it
      if(!this.timer){
        this.startGame()
      }
      // If the current card is not flipped then flip it
      if(!card.isFlipped) {
        card.isFlipped = true
        // Increment move count
        this.totalMoves++
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
        if(this.totalMatches === 12){
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
    minutes(){
        // If single digit, display leading 0
        if(this.totalTime.minutes < 10){
            return `0${this.totalTime.minutes}`
        }
        return this.totalTime.minutes;
    }
  }
}
</script>

<style lang="scss">
body {
  font-size: 24px;
}

.info-panel, .play-again {
  width: 1000px;
  margin: 20px auto 10px;
      text-align: center;
}

.info-panel {
  display: grid;  
  grid-template-columns: 1fr 1fr 1fr;
}

.btn {
  background-color: blue;
  border: 1px solid navy;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
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

  .card {
    background-color: blue;
    width: 146px;
    height: 146px;
    border: 2px solid;
    cursor: pointer;

      &.flipped, &.matched {
          background-color: white;
          cursor: default;
      }

      &.matched {
          border-color: white;
      }

      .letter {
          text-align: center;
          font-size: 120px;
          margin: auto;
      }
  }
}

</style>
