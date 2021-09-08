<template>
  <div>
    <title>The Game Formerly Known as Typing</title>
    <!-- <script src="js/game.js"></script> -->
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet">
    <!-- <link href="css/style.css" rel="stylesheet"> -->

    <div class="container">
      <div class="header">

        <button class="btn btn-success pull-right" id="start"><span class="glyphicon glyphicon-play"></span> Start</button>
        <button class="btn btn-danger pull-right disabled" id="reset"><span class="glyphicon glyphicon-flash"></span> Reset</button>
        <h3 class="text-muted">The Game Formerly Known as Typing</h3>
        <hr>

      </div>

      <div class="panel panel-default">
        <div class="panel-body">
          <div id="box"><span id="message" class="hidden">Game Over!</span></div>
        </div>
        <div class="panel-footer"><strong>Score: <span id="score">0</span></strong></div>
      </div>

      <hr>

      <footer>

        <samp class="text-muted">> anil.computer/typing</samp>
      </footer>
      <a href="https://github.com/bridgpal/typing"><img style="position: absolute; top: 0; left: 0; border: 0; width: 149px; height: 149px;" src="http://aral.github.com/fork-me-on-github-retina-ribbons/left-white@2x.png" alt="Fork me on GitHub"></a>
    </div>
  </div>

</template>

<script>

var placeLetterInterval = 500;
var placeLetterTimer, moveLettersTimer;
var startButton, resetButton;
var box, message, score;

export default {
  name: 'acid_rain',
  data: function () {
    return {
    placeLetterInterval: 500,
    placeLetterTimer: null, moveLettersTimer: null,
    startButton: null, resetButton: null,
    box: null, message: null, score: null,
    }
  },
  methods: {
    placeLetter: function() {
        var letter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
        var newLetter = document.createElement("div");
        newLetter.innerHTML = letter;
        newLetter.className = letter;

        newLetter.style.top = Math.random() * 300 + "px";
        newLetter.style.right = 1000 - (Math.random() * 500) + "px";

        box.appendChild(newLetter);
    },

    moveLetters: function() {
        var boxes = document.querySelectorAll("#box > div");
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].style.right = parseInt(boxes[i].style.right) - 10 + "px";
            if (parseInt(boxes[i].style.right) <= -10) {
                endGame();
            }
        }
    },

      endGame: function() {
          clearInterval(moveLettersTimer);
          clearInterval(placeLetterTimer);
          document.removeEventListener('keydown', keyboardInput);
          message.classList.remove("hidden");
          resetButton.classList.remove("disabled")
      },
      
    decreaseLetterSpeed: function(score) {
        if (parseInt(score.innerHTML) % 20 === 0) {
            clearInterval(placeLetterTimer);
            placeLetterInterval = placeLetterInterval * 1.1
            placeLetterTimer = setInterval(placeLetter, placeLetterInterval)
        }
    },



    resetGame: function() {
        message.classList.add("hidden");
        resetButton.classList.add("disabled")
        score.innerHTML = 0;

        var boxes = document.querySelectorAll("#box > div");
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].remove();
        }

        startGame();
    },

    keyboardInput: function() {
        if (event.keyCode === 27) {
            return endGame();
        };

        var key = String.fromCharCode(event.keyCode).toLowerCase();
        var boxes = document.getElementsByClassName(key);

        if (boxes[0]) {
            boxes[0].remove();
            score.innerHTML = parseInt(score.innerHTML) + 1;
            decreaseLetterSpeed(score);
        } else {
            score.innerHTML = parseInt(score.innerHTML) - 1;
        }

    },

    startGame: function() {
        placeLetterTimer = setInterval(placeLetter, placeLetterInterval);
        moveLettersTimer = setInterval(moveLetters, 100);
        document.addEventListener('keydown', keyboardInput);
        startButton.classList.add("disabled");
    },

    // document.addEventListener("DOMContentLoaded", function(event) {
    //     console.log("OH HAI THERE!");

    //     message = document.getElementById('message');
    //     box = document.getElementById('box');
    //     score = document.getElementById("score");

    //     startButton = document.getElementById('start')
    //     startButton.onclick = startGame;

    //     resetButton = document.getElementById('reset')
    //     resetButton.onclick = resetGame;
    // })
  },
  created: function() {
    
    message = document.getElementById('message');
    box = document.getElementById('box');
    score = document.getElementById("score");

    startButton = document.getElementById('start')
    startButton.onclick = startGame;

    resetButton = document.getElementById('reset')
    resetButton.onclick = resetGame;
  }
}
</script>


<style scoped>
#box
{
  margin:auto;
  height:400px;
  background:grey;
  overflow:hidden;
  position:relative;
  font-family:"Georgia";
  font-size:50px;
  color:#fff;
}

#box > div
{
  display:inline-block;
  position:absolute;
  width:50px;
  text-align:center;
  transition-property:right;
  transition-duration:100ms;
  transition-timing-function:linear;
  transition-delay:0;
}

#message
{
  display:block;
  text-align:center;
  position:relative;
  font-size:125px;
  top:50%;
  z-index:0;
  color:rgba(0,0,0,0.6);
  -webkit-transform:translateY(-50%);
  -ms-transform:translateY(-50%);
  transform:translateY(-50%);
  text-shadow:2px 2px 3px rgba(255,255,255,0.1)
}

.panel
{
  max-width:1000px;
  margin:auto;
}

.panel-body
{
  padding:0;
}

.btn {
  margin-left: 10px;
}

.container {
  max-width: 1000px;
}
</style>