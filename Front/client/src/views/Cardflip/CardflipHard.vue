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
            <div class="card" v-else>
              <img class="cardImage" :src="require(`@/assets/cardflip/letter/${card.image1}`)"/>
            </div>
            <!-- <div class="letter">
              {{card.letter}}
            </div> -->
        </div>
        <div class="card back" v-else><img class="cardBackImage"  src="@/assets/cardflip/back.png" /></div>
      </div>
    </div>
    <div class="info-panel">
      <div class="name-panel">
        <div>하태린 님</div>
      </div>
      <div class="info-color">
        <dir class="cardFont">Difficulty</dir>
        <dir class="score">상 (6X5)</dir>
        <dir class="cardFont">Score</dir>
        <dir class="score">{{score}}</dir>
        <dir class="cardFont">Best score</dir>
        <dir class="score">2500</dir>
        <dir class="cardFont">Time</dir>
        <div class="time">{{seconds}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'CardflipHard',
  data() {
    return {
      show: true,
      score: 0,
      cards1: [
        //자음
        { letter: 'ㄱ', isFlipped: false, isMatched: false, image1: 'ㄱ.png'},
        { letter: 'ㄴ', isFlipped: false, isMatched: false, image1: 'ㄴ.png'},
        { letter: 'ㄷ', isFlipped: false, isMatched: false, image1: 'ㄷ.png'},
        { letter: 'ㄹ', isFlipped: false, isMatched: false, image1: 'ㄹ.png'},
        { letter: 'ㅁ', isFlipped: false, isMatched: false, image1: 'ㅁ.png' },
        { letter: 'ㅂ', isFlipped: false, isMatched: false, image1: 'ㅂ.png' },
        { letter: 'ㅅ', isFlipped: false, isMatched: false, image1: 'ㅅ.png' },
        { letter: 'ㅇ', isFlipped: false, isMatched: false, image1: 'ㅇ.png' },
        { letter: 'ㅈ', isFlipped: false, isMatched: false, image1: 'ㅈ.png' },
        { letter: 'ㅊ', isFlipped: false, isMatched: false, image1: 'ㅊ.png' },
        { letter: 'ㅋ', isFlipped: false, isMatched: false, image1: 'ㅋ.png' },
        { letter: 'ㅌ', isFlipped: false, isMatched: false, image1: 'ㅌ.png' },
        { letter: 'ㅍ', isFlipped: false, isMatched: false, image1: 'ㅍ.png' },
        { letter: 'ㅎ', isFlipped: false, isMatched: false, image1: 'ㅎ.png' },
        // 모음
        // { letter: 'ㅏ', isFlipped: false, isMatched: false, image1: 'ㅏ.png' },
        // { letter: 'ㅑ', isFlipped: false, isMatched: false, image1: 'ㅑ.png' },
        // { letter: 'ㅓ', isFlipped: false, isMatched: false, image1: 'ㅓ.png' },
        // { letter: 'ㅕ', isFlipped: false, isMatched: false, image1: 'ㅕ.png' },
        // { letter: 'ㅗ', isFlipped: false, isMatched: false, image1: 'ㅗ.png' },
        // { letter: 'ㅛ', isFlipped: false, isMatched: false, image1: 'ㅛ.png' },
        // { letter: 'ㅜ', isFlipped: false, isMatched: false, image1: 'ㅜ.png' },
        // { letter: 'ㅠ', isFlipped: false, isMatched: false, image1: 'ㅠ.png' },
        // { letter: 'ㅡ', isFlipped: false, isMatched: false, image1: 'ㅡ.png' },
        { letter: 'ㅣ', isFlipped: false, isMatched: false, image1: 'ㅣ.png' },
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
        { letter: 'ㅣ', isFlipped: false, isMatched: false, image: 'ㅣ.png' },
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
  height: 100vh;
  margin: 5vh;
}

.cardFlip .info-panel{
  /* background-color: #f4f1eb;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733); */
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


.cardFlip .game-board {
  flex:85%;
  margin: 2vh;
  display: grid;
  /*  카드 개수 조정 */
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr ;  
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 1vh;
  row-gap: 1vh;
}

.card {
  width: 20vh;
  height: 15vh;
  cursor: pointer;
  border-radius: 20px;
}

.card .cardBackImage {
  width: 102%; 
  height: 100%;
}

.card .cardImage {
  width: 100%; 
  height: 100%;
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


.flip-container {
  perspective: 1000;
}

.card .front {
  backface-visibility: hidden;
  transition: 0.6s;
  transform-style: preserve-3d;
  top: 0;
  left: 0;
  right: 0;
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
