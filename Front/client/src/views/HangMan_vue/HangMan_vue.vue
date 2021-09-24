<template>
<div>
    <h1>Hangman game</h1>
    <p>Find the hidden word - Enter a letter</p>
    <div class="game-container" >
     <svg height="250" width="200" class="figure-container">
        <!-- Rod -->
        <line x1="60" y1="20" x2="140" y2="20" />
        <line x1="140" y1="20" x2="140" y2="50" />
        <line x1="60" y1="20" x2="60" y2="230" />
        <line x1="20" y1="230" x2="100" y2="230" />

        <!-- Head -->
        <circle cx="140" cy="70" r="20" class="figure-part" v-if="this.countError>0" />
        <!-- Body -->
        <line x1="140" y1="90" x2="140" y2="150" class="figure-part" v-if="this.countError>1" />
        <!-- Arms -->
        <line x1="140" y1="120" x2="120" y2="100" class="figure-part" v-if="this.countError>2" />
        <line x1="140" y1="120" x2="160" y2="100" class="figure-part" v-if="this.countError>3" />
        <!-- Legs -->
        <line x1="140" y1="150" x2="120" y2="180" class="figure-part" v-if="this.countError>4" />
        <line x1="140" y1="150" x2="160" y2="180" class="figure-part" v-if="this.countError>5" />
      </svg>   
         
    </div>

    <div class="word-letters-container">
      <div v-for="(letter, index) in selected" :key="index">
        
        <span class="letter">
          <div v-if="correct.includes(letter)">
            {{letter}}
          </div>
        </span>

      </div>
    </div>

    <div class="wrong-letters-container">
      <p>Wrongs: </p>
        <div id="wrong-letters" v-for="(wrong,index) in wrongs" :key="index" >
            {{wrong}}, 
        </div>
    </div>
    

  

</div>    
</template>
<script>
export default {
    data(){
        return{
            wrongs:[],
            words:['beer','example','github','programming','party'],
            correct:[],
            selected:'',
            online:false,
            oportunities:6,
            countError:0,
            countCorrect:0,
            enter:'',
        }
    },
    methods:{
        listener(evt){
          if(!this.online){          
            this.startGame()
          }
          const letter = evt.key.toLowerCase().trim();
            
            this.enter=letter;
          
          //Include letter
          if(this.selected.includes(letter)){
            this.correct.push(letter)
            this.updateCorrect(letter);            
            
          }
          else{
            if(!this.wrongs.includes(letter)){
              this.wrongs.push(letter)
              this.updateWrongs()
            }
            else{
              alert('You have already entered that letter')
            }
              
            
          }
            
            
        },
        startGame(){
          //Initial game
          this.online=true
          //Select word          
          this.selected=this.words[Math.floor(Math.random() * this.words.length)];
          
        },
        updateWrongs(){
          
            this.countError++;
          if(this.countError===6){
            alert('You lost :( ')
          }
        },
        updateCorrect(letter){
          let aux=0;
            //count letter in array
            for(let i=0; i<this.selected.length; i++){
                if(this.selected[i]===letter){                  
                  aux++;
                }
            }
            this.countCorrect+=aux;
            
            if(this.countCorrect === this.selected.length){
              alert('You won :) ')
            }
        }
    },
    created() {
    document.onkeydown = evt => {
      evt = evt || window.event;
      
        this.listener(evt);
      
    };
  }
}
</script>

<style scoped>
.game-container {
  padding: 20px 30px;
  position: relative;
  margin: auto;
  height: 350px;
  width: 450px;
}
.figure-container {
  fill: transparent;
  stroke: #fff;
  stroke-width: 4px;
  stroke-linecap: round;
}
.figure-part {
  display: block;
}
.wrong-letters-container {
  position: absolute;
  top: 40%;
  right: 20%;
  display: flex;
  flex-direction: row;
  text-align: right;
}
.wrong-letters-container p {
  margin: 0 0 5px;
  padding: 0px 15px;
}
.wrong-letters-container span {
  font-size: 24px;
}
.word {
  display: flex;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
}
.word-letters-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  text-align: right;
  
}
.word-letters-container p {
  margin: 0 0 5px;
}
.word-letters-container span {
  font-size: 24px;
}
.letter {
  border-bottom: 3px solid #2980b9;
  display: inline-flex;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  margin: 0 3px;
  height: 50px;
  width: 20px;
}
</style>