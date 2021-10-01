<template>
  <div id="app" class="cardFlip">
    <!-- gameover 모달 -->
    <div v-if="gameIsOver">
      <b-modal  v-model="show"  class="modal-border" size="sm"
       id="bv-modal-example" hide-footer hide-header no-close-on-backdrop>
        <b-button class="mt-3 modal-close-btn" block @click="$bvModal.hide('bv-modal-example')">
              <span class="close-btn-txt">닫기</span></b-button>
        <p class="game-over-text">GAME OVER</p>
        <div class="modal-cardFont">Score</div>
        <div class="modal-score">{{score}}</div>
        <div class="row">
          <div class="column">
            <div class="modal-rank-cardFont">Rank</div>
            <span>
              <div class="modal-rank-score">
                <img src="@/assets/trophy.png" alt="trophy" class="rank-img">43
              </div>
            </span> 
            <b-button class="mt-3 modal-restart-btn" block @click="resetGame">
              <span class="restart-btn-txt">다시하기</span></b-button>
          </div>
          <div class="column">
            <div class="modal-hscore-cardFont">Best score</div>
            <span>
              <div class="modal-hscore-score">
                <img src="@/assets/best-badge.png" alt="best-badge" class="best-score-img">2500</div>
            </span>
            <b-button class="mt-3 modal-halloffame-btn" block >
              <span class="halloffame-btn-txt">명예의전당</span></b-button>
          </div>
        </div>
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
        <dir class="score">하 (4X3)</dir>
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
  name: 'CardflipEasy',
  data() {
    return {
      show: true,
      score: 0,
      cards1: [
        //자음
        { letter: 'ㄱ', isFlipped: false, isMatched: false, image1: 'ㄱ.png'},
        { letter: 'ㄴ', isFlipped: false, isMatched: false, image1: 'ㄴ.png'},
        { letter: 'ㄷ', isFlipped: false, isMatched: false, image1: 'ㄷ.png'},
        // { letter: 'ㄹ', isFlipped: false, isMatched: false, image1: 'ㄹ.png'},
        // { letter: 'ㅁ', isFlipped: false, isMatched: false, image1: 'ㅁ.png' },
        // { letter: 'ㅂ', isFlipped: false, isMatched: false, image1: 'ㅂ.png' },
        // { letter: 'ㅅ', isFlipped: false, isMatched: false, image1: 'ㅅ.png' },
        // { letter: 'ㅇ', isFlipped: false, isMatched: false, image1: 'ㅇ.png' },
        // { letter: 'ㅈ', isFlipped: false, isMatched: false, image1: 'ㅈ.png' },
        // { letter: 'ㅊ', isFlipped: false, isMatched: false, image1: 'ㅊ.png' },
        // { letter: 'ㅋ', isFlipped: false, isMatched: false, image1: 'ㅋ.png' },
        // { letter: 'ㅌ', isFlipped: false, isMatched: false, image1: 'ㅌ.png' },
        // { letter: 'ㅍ', isFlipped: false, isMatched: false, image1: 'ㅍ.png' },
        // { letter: 'ㅎ', isFlipped: false, isMatched: false, image1: 'ㅎ.png' },
        // 모음
        { letter: 'ㅏ', isFlipped: false, isMatched: false, image1: 'ㅏ.png' },
        { letter: 'ㅑ', isFlipped: false, isMatched: false, image1: 'ㅑ.png' },
        { letter: 'ㅓ', isFlipped: false, isMatched: false, image1: 'ㅓ.png' },
        // { letter: 'ㅕ', isFlipped: false, isMatched: false, image1: 'ㅕ.png' },
        // { letter: 'ㅗ', isFlipped: false, isMatched: false, image1: 'ㅗ.png' },
        // { letter: 'ㅛ', isFlipped: false, isMatched: false, image1: 'ㅛ.png' },
        // { letter: 'ㅜ', isFlipped: false, isMatched: false, image1: 'ㅜ.png' },
        // { letter: 'ㅠ', isFlipped: false, isMatched: false, image1: 'ㅠ.png' },
        // { letter: 'ㅡ', isFlipped: false, isMatched: false, image1: 'ㅡ.png' },
        // { letter: 'ㅣ', isFlipped: false, isMatched: false, image1: 'ㅣ.png' },
      ],
      cards2: [
        { letter: 'ㄱ', isFlipped: false, isMatched: false, image: 'ㄱ.png'},
        { letter: 'ㄴ', isFlipped: false, isMatched: false, image: 'ㄴ.png'},
        { letter: 'ㄷ', isFlipped: false, isMatched: false, image: 'ㄷ.png'},
        // { letter: 'ㄹ', isFlipped: false, isMatched: false, image: 'ㄹ.png'},
        // { letter: 'ㅁ', isFlipped: false, isMatched: false, image: 'ㅁ.png' },
        // { letter: 'ㅂ', isFlipped: false, isMatched: false, image: 'ㅂ.png' },
        // { letter: 'ㅅ', isFlipped: false, isMatched: false, image: 'ㅅ.png' },
        // { letter: 'ㅇ', isFlipped: false, isMatched: false, image: 'ㅇ.png' },
        // { letter: 'ㅈ', isFlipped: false, isMatched: false, image: 'ㅈ.png' },
        // { letter: 'ㅊ', isFlipped: false, isMatched: false, image: 'ㅊ.png' },
        // { letter: 'ㅋ', isFlipped: false, isMatched: false, image: 'ㅋ.png' },
        // { letter: 'ㅌ', isFlipped: false, isMatched: false, image: 'ㅌ.png' },
        // { letter: 'ㅍ', isFlipped: false, isMatched: false, image: 'ㅍ.png' },
        // { letter: 'ㅎ', isFlipped: false, isMatched: false, image: 'ㅎ.png' },
        // 모음
        { letter: 'ㅏ', isFlipped: false, isMatched: false, image: 'ㅏ.png' },
        { letter: 'ㅑ', isFlipped: false, isMatched: false, image: 'ㅑ.png' },
        { letter: 'ㅓ', isFlipped: false, isMatched: false, image: 'ㅓ.png' },
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
      gameIsOver: false,
      clock: false,
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
  grid-template-columns: 1fr 1fr 1fr 1fr ;  
  grid-template-rows: 1fr 1fr 1fr ;
  column-gap: 1vh;
  row-gap: 1vh;
}


.flip-container {
  perspective: 300;
  width: 33vh;
  height: 28vh;
}

.relative {
  position: relative;
}

.front,
.back {
  backface-visibility: hidden;
  transition: 0.6s;
  transform-style: preserve-3d;
  width: 33vh;
  height: 28vh;
  cursor: pointer;
  position: absolute;
}

.flip-container .front {
  width: 33vh;
  height: 28vh;
  transform: rotateY(-180deg);
}

.flip-container.flipped .front {
  width: 33vh;
  height: 28vh;
  transform: rotateY(0deg);
}
.flip-container.flipped .back {
  width: 33vh;
  height: 28vh;
  transform: rotateY(180deg);
}

/* game-over modal */


.modal-close-btn {
  position: absolute;
  width: 15%;
  height: 15%;
  left: 80%;
  border: none;
  background-color: grey;
  box-shadow: 0.00rem 0.38vh 0.56rem 0 rgba(0, 0, 0, 0.3);
  object-fit: contain;
  border-radius: 2.00rem;
}

.close-btn-txt {
  font-family: SDSamliphopangche_Basic;
  font-size: 3.5vh;
}

.game-over-text {
  font-family: SDSamliphopangche_Basic;
  font-size: 6vh;
  margin-bottom: 3%;
  font-weight: bolder;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.63;
  letter-spacing: normal;
  text-shadow: 0.00rem 0.38rem 0.56rem rgba(0, 0, 0, 0.3);
  text-align: center;
  color: #1e3663;
}

.modal-cardFont {
  color: #b59e7a;
  font-size: 5vh;
  font-family: 'SDSamliphopangche_Basic';
  margin-bottom: 0;  
  padding: 0;
  margin-top: 1.5vh;
}

.modal-score {
  position: relative;
  left: 27.5%;
  width: 40%;
  height: 6vh;
  background-color: #e5d2bd;
  margin-bottom: 0;
  margin-top: 1%;
  margin-left: 3vh;
  margin-right: 3vh;
  border-radius: 30px;
  border: solid 4px #b49f7b;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
  color: #957457;
  font-family: 'SDSamliphopangche_Basic';
  font-size: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}

.rank-img {
  position: absolute;
  left: -11.5%;
  width: 25%;
}

.modal-rank-cardFont {
  color: #b59e7a;
  font-size: 4vh;
  font-family: 'SDSamliphopangche_Basic';
  margin-bottom: 0;  
  padding: 0;
  margin-top: 1.5vh;
}

.modal-rank-score {
  position: relative;
  left: 20%;
  width: 50%;
  height:5vh;
  background-color: #e5d2bd;
  margin-bottom: 0;
  margin-top: 0.5%;
  margin-left: 3vh;
  margin-right: 3vh;
  border-radius: 30px;
  border: solid 4px #b49f7b;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
  color: #957457;
  font-family: 'SDSamliphopangche_Basic';
  font-size: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}

.best-score-img {
  position: absolute;
  left: -10%;
  width: 25%;
}

.modal-hscore-cardFont {
  color: #b59e7a;
  font-size: 4vh;
  font-family: 'SDSamliphopangche_Basic';
  margin-bottom: 0;  
  padding: 0;
  margin-top: 1.5vh;
}

.modal-hscore-score {
  position: relative;
  left: 20%;
  width: 50%;
  height: 5vh;
  background-color: #e5d2bd;
  margin-bottom: 0;
  margin-top: 0.5%;
  margin-left: 3vh;
  margin-right: 3vh;
  border-radius: 30px;
  border: solid 4px #b49f7b;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
  color: #957457;
  font-family: 'SDSamliphopangche_Basic';
  font-size: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}


.row {
  display: flex;
}

.column {
  flex: 50%;
}

.modal-restart-btn {
  width: 40%;
  height: 40%;
  /* border: solid 0.5vh #76300b; */
  border: none;
  background-color: #fe6e27;
  box-shadow: 0.00rem 0.38vh 0.56rem 0 rgba(0, 0, 0, 0.3);
  object-fit: contain;
  border-radius: 2.00rem;
}

.modal-restart-btn {
  width: 40%;
  height: 40%;
  /* border: solid 0.5vh #76300b; */
  border: none;
  background-color: #fe6e27;
  box-shadow: 0.00rem 0.38vh 0.56rem 0 rgba(0, 0, 0, 0.3);
  object-fit: contain;
  border-radius: 2.00rem;
}

.restart-btn-txt {
  font-family: SDSamliphopangche_Basic;
  font-size: 3.5vh;
}


.modal-halloffame-btn {
  width: 40%;
  height: 40%;
  /* border: solid 0.5vh #76300b; */
  border: none;
  background-color: #68bbf7;
  box-shadow: 0.00rem 0.38vh 0.56rem 0 rgba(0, 0, 0, 0.3);
  object-fit: contain;
  border-radius: 2.00rem;
}

.halloffame-btn-txt {
  font-family: SDSamliphopangche_Basic;
  font-size: 3.5vh;
}
</style>
