<template>
  <div>
    <div class="loading-screen">
      <svg class="loading-svg" viewBox="0 0 121.46 13.54">
        <pathb
          id="segL"
          class="loading-seg"
          d="M11,9.82v2.93H2.66V.82H6.32v9Z"
          transform="translate(0 0.02)"
          fill="#520ca1"
        />
        <path
          id="segO"
          class="loading-seg"
          d="M25.05,13.3A5.4,5.4,0,0,1,21,11.63a6.19,6.19,0,0,1-1.59-4.46,6.48,6.48,0,0,1,1.52-4.42A5.28,5.28,0,0,1,25.08,1a5.34,5.34,0,0,1,4.06,1.64A6.06,6.06,0,0,1,30.71,7a6.44,6.44,0,0,1-1.58,4.55A5.3,5.3,0,0,1,25.05,13.3Zm0-2.71a1.38,1.38,0,0,0,1.33-.81,7.34,7.34,0,0,0,.41-3c0-2.07-.56-3.11-1.67-3.11S23.3,4.9,23.3,7.26,23.88,10.59,25,10.59Z"
          transform="translate(0 0.02)"
          fill="#520ca1"
        />
        <path
          id="segA"
          class="loading-seg"
          d="M44.65,12.71,44,10.36H40.78l-.71,2.35h-3L40.78.79h3.86l3.74,11.92Zm-3.25-5h1.93l-1-3.46Z"
          transform="translate(0 0.02)"
          fill="#520ca1"
        />
        <path
          id="segD"
          class="loading-seg"
          d="M56.1,12.73V.81h4.61a5.52,5.52,0,0,1,4.5,1.78A6.2,6.2,0,0,1,66.7,6.71a6,6,0,0,1-1.6,4.35,5.51,5.51,0,0,1-4.16,1.67ZM59.76,10h1a1.85,1.85,0,0,0,1.54-.89,4.1,4.1,0,0,0,.62-2.4,4.33,4.33,0,0,0-.55-2.24,1.77,1.77,0,0,0-1.61-1h-1Z"
          transform="translate(0 0.02)"
          fill="#520ca1"
        />
        <path
          id="segI"
          class="loading-seg"
          d="M80.55.79V12.71H76.89V.79Z"
          transform="translate(0 0.02)"
          fill="#520ca1"
        />
        <path
          id="segN"
          class="loading-seg"
          d="M101.81,13.3h-3L95.56,8a21.29,21.29,0,0,1-1.27-2.46,7.92,7.92,0,0,1,.29,1.95V13.3h-3V1.37h3.46l2.78,4.37A17.88,17.88,0,0,1,99.11,8a17,17,0,0,1-.28-3.13V1.37h3Z"
          transform="translate(0 0.02)"
          fill="#520ca1"
        />
        <path
          id="segG"
          class="loading-seg"
          d="M119,6.43v6.68h-1.8a6.54,6.54,0,0,0-.48-1.25,3.88,3.88,0,0,1-3.28,1.44,4.93,4.93,0,0,1-3.79-1.61,6.21,6.21,0,0,1-1.49-4.37,7,7,0,0,1,1.44-4.49A5.1,5.1,0,0,1,113.91,1a5.2,5.2,0,0,1,3.43,1.08A5.11,5.11,0,0,1,119,5.16l-3.55.35c-.18-1.24-.72-1.86-1.63-1.86-1.2,0-1.8,1.15-1.8,3.43a4.48,4.48,0,0,0,.57,2.73,1.8,1.8,0,0,0,1.4.66,1.67,1.67,0,0,0,1.13-.41,1.4,1.4,0,0,0,.48-1.1h-2V6.43Z"
          transform="translate(0 0.02)"
          fill="#520ca1"
        />
        <rect
          id="covL"
          class="loading-cover"
          y="0.02"
          width="13.52"
          height="13.52"
          rx="1.09"
          fill="#e6d439"
        />
        <rect
          id="covO"
          class="loading-cover"
          x="17.99"
          y="0.02"
          width="13.52"
          height="13.52"
          rx="1.09"
          fill="#e6d439"
        />
        <rect
          id="covA"
          class="loading-cover"
          x="35.98"
          width="13.52"
          height="13.52"
          rx="1.09"
          fill="#e6d439"
        />
        <rect
          id="covD"
          class="loading-cover"
          x="53.97"
          y="0.02"
          width="13.52"
          height="13.52"
          rx="1.09"
          fill="#e6d439"
        />
        <rect
          id="covI"
          class="loading-cover"
          x="71.96"
          y="0.02"
          width="13.52"
          height="13.52"
          rx="1.09"
          fill="#e6d439"
        />
        <rect
          id="covN"
          class="loading-cover"
          x="89.95"
          y="0.02"
          width="13.52"
          height="13.52"
          rx="1.09"
          fill="#e6d439"
        />
        <rect
          id="covG"
          class="loading-cover"
          x="107.94"
          y="0.02"
          width="13.52"
          height="13.52"
          rx="1.09"
          fill="#e6d439"
        />
      </svg>
    </div>
    <section class="modal">
      <div class="modal-content drop-down">
        <div class="menu-container">
          <button class="menu-button start-game">Play!</button>
          <div class="category-list">
            <button class="menu-button category-button">Category</button>
            <ul class="list closed-list">
              <li>Food</li>
              <li>Sports</li>
              <li>Instruments</li>
              <li>Pokemons</li>
              <li>Software</li>
              <li>Sciences</li>
              <li>Planets</li>
              <li>Countries</li>
              <li>Animals</li>
              <li>Superheroes</li>
            </ul>
          </div>
          <div class="difficulty-list">
            <button class="menu-button difficulty-button">Difficulty</button>
            <ul class="list closed-list">
              <li>Easy</li>
              <li>Medium</li>
              <li>Hard</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <main class="main-content blur-in">
      <nav class="nav-bar">
        <div class="home-container">
          <button class="home-button"></button>
          <button class="sound-button"></button>
        </div>
        <div class="category"><span>FOOD</span><span>medium</span></div>
        <div class="score-container">
          <div class="guesses-left"><span>5/5</span></div>
          <div class="score"><span>0</span></div>
          <div class="best-score"><span>0</span></div>
        </div>
      </nav>
      <section class="bg-container" id="scene">
        <div class="mountains" data-depth="0.06"></div>
        <div class="city" data-depth="0.1"></div>
        <div class="hill-middle" data-depth="0.2"></div>
        <div class="hill-left" data-depth="0.3"></div>
        <div class="hill-right" data-depth="0.6">
          <div class="gallows-container">
            <canvas></canvas>
          </div>
        </div>
      </section>
      <footer>
        <ul class="word-container"></ul>
        <div class="alpha-container"></div>
      </footer>
      <svg id="nextIcon" class="next-icon" viewBox="0 0 185.23 338.95">
        <g class="small" opacity="0.25">
          <polygon
            points="83.99 303.05 21.7 303.05 101.23 172.18 21.02 35.9 83.99 35.9 167.62 169.47 83.99 303.05"
          />
        </g>
        <g class="big">
          <polygon
            points="84.21 338.95 0 338.95 100.8 172.18 0 0 84.21 0 185.23 169.47 84.21 338.95"
          />
        </g>
      </svg>
    </main>
    <section class="gameover-modal">
      <div class="gameover-box">
        <div class="gameover-content">
          <h1 class="text">GAME OVER</h1>
          <div class="gameover-data">
            <div class="score-cont">
              <span>Score:</span>
              <span class="score">0</span>
            </div>
            <div class="best-score-cont">
              <span>Best score:</span>
              <span class="best-score">0</span>
            </div>
          </div>
          <div class="buttons">
            <button class="main-menu"></button>
            <button class="play-again"></button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import loader from "./scripts/loader.js";
import rope from "./scripts/rope.js";
// import main from "./scripts/main.js";
import preloadjs from "https://code.createjs.com/1.0.0/preloadjs.min.js";
import gsap from "https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js";
import parallax from "https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js";

const scene = document.querySelector("#scene");
const parallaxInstance = new this.Parallax(scene);
const alphaContainer = document.querySelector(".alpha-container");
const wordContainer = document.querySelector(".word-container");
const modal = document.querySelector(".modal");
const menuBox = document.querySelector(".modal-content");
const mainContent = document.querySelector(".main-content");
const body = document.querySelector("body");
const guessesSpan = document.querySelector(".guesses-left span");
const scoreSpan = document.querySelector(".score span");
const bestScoreSpan = document.querySelector(".best-score span");
const diffSpan = document.querySelector(".category span:nth-child(2)");
const catSpan = document.querySelector(".category span");
const wordUrl = "https://api.datamuse.com/words?rel_trg=";
const pokeUrl = "https://pokeapi.co/api/v2/pokemon/?limit=200";
let words = [];
let data = undefined;
let current = 0;
let wordArray;
let hidden = {};
let nextButton;
let guesses = 5;
let score = 0;
let bestScore = 0;
let category = "food";
let queryParam = category;
let diffValues = {
  easy: 0.4,
  medium: 0.7,
  hard: 1.3,
};
let difficulty = "medium";
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const updateCurrent = () => {
  current = Math.floor(Math.random() * words.length);
};
const getRandomWord = () => {
  if (words.length > 0) {
    let currentWord = words[current].toUpperCase().split("");
    words.splice(current, 1);
    return currentWord;
  } else {
    // Handle empty words
  }
};
const reduceGuesses = () => {
  if (guesses > 0) guesses--;
  guessesSpan.innerText = `${guesses}/5`;
};
const resetGuesses = () => {
  guesses = 5;
  guessesSpan.innerText = `${guesses}/5`;
};
const increaseScore = (val) => {
  score += val;
  scoreSpan.innerText = score;
};
const resetScore = () => {
  score = 0;
  scoreSpan.innerText = score;
};
const updateBestScore = () => {
  if (score > bestScore) {
    bestScore = score;
    bestScoreSpan.innerText = bestScore;
  }
};
// const 추가
const mobileAndTabletCheck = () => {
  let check = false;
  ((a) => {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};
const disableAllButtons = () => {
  let buttons = document.querySelectorAll("main button");
  buttons.forEach((button) => {
    if (!button.classList.contains("sound-button")) button.disabled = true;
  });
};
const enableAllButtons = () => {
  let buttons = document.querySelectorAll("main button");
  buttons.forEach((button) => {
    if (
      !button.classList.contains("next-button") &&
      !button.classList.contains("sound-button")
    )
      button.disabled = false;
  });
};
// Creating alphabet buttons...
alphabet.forEach((letter) => {
  let button = document.createElement("button");
  button.className = "letter";
  button.id = `${letter}`;
  button.value = letter;
  button.innerText = letter;
  button.addEventListener("click", () => disable(button));
  button.addEventListener("click", () => {
    if (!mobileAndTabletCheck()) {
      if (nextButton?.disabled) checkAnswer(button.innerText);
    } else {
      if (!document.querySelector("body").classList.contains("swipe"))
        checkAnswer(button.innerText);
    }
  });
  alphaContainer.append(button);
});
const alphaButtons = document.querySelectorAll("button.letter");
const fadeOut = {
  keyframes: [
    {
      transform: "translateX(0)",
      opacity: 1,
    },
    {
      transform: "translateX(-20%)",
      opacity: 0,
    },
  ],
  opts: {
    fill: "forwards",
    duration: 300,
  },
};
const fadeIn = {
  keyframes: [
    {
      transform: "translateX(20%)",
      opacity: 0,
    },
    {
      transform: "translateX(0)",
      opacity: 1,
    },
  ],
  opts: {
    fill: "forwards",
    duration: 300,
  },
};
const appear = {
  keyframes: [
    {
      opacity: 0,
    },
    {
      opacity: 1,
    },
  ],
  opts: {
    duration: 300,
    fill: "forwards",
    easing: "linear",
    delay: 500,
  },
};
const disappear = {
  keyframes: [
    {
      opacity: 1,
    },
    {
      opacity: 0,
    },
  ],
  opts: {
    duration: 300,
    fill: "forwards",
    easing: "linear",
  },
};
let xDown = null;
let yDown = null;
let swipped = false;
const handleTouchStart = (e) => {
  xDown = e.touches[0].clientX;
  yDown = e.touches[0].clientY;
};
const handleTouchMove = (e) => {
  if (!xDown || !yDown) return;
  let xUp = e.touches[0].clientX;
  let yUp = e.touches[0].clientY;
  let xDiff = xDown - xUp;
  let yDiff = yDown - yUp;
  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      swipped = true;
    }
  }
};
const handleTouchEnd = () => {
  if (!swipped) return;
  document.querySelector("body").classList.toggle("swipe");
  wordContainer.animate(fadeOut.keyframes, fadeOut.opts);
  setTimeout(() => nextWord(true), 300);
  resetGuesses();
  this.resetCanvas();
  document.removeEventListener("touchstart", handleTouchStart);
  document.removeEventListener("touchmove", handleTouchMove);
  document.removeEventListener("touchend", handleTouchEnd);
  xDown = null;
  yDown = null;
  swipped = false;
};
const disable = (button) => {
  if (!button.disabled) button.disabled = true;
};
const toggleNextButton = () => {
  if (nextButton && nextButton.disabled) {
    nextButton.disabled = false;
    nextButton.style.visibility = "visible";
    nextButton.animate(appear.keyframes, appear.opts);
  } else if (nextButton) {
    nextButton.animate(disappear.keyframes, disappear.opts);
    nextButton.disabled = true;
    nextButton.style.visibility = "hidden";
  }
};
const svg = document.querySelector("#nextIcon");
let startScene = gsap.timeline({
  defaults: { duration: 2 },
  onComplete: () => {
    parallaxInstance.enable();
  },
});
let nextButtonTl = gsap.timeline({ repeat: -1, yoyo: true });
nextButtonTl.to(svg, { x: 20, duration: 0.5, ease: "none" });
nextButtonTl.pause().progress(0);
const CreateNextButton = () => {
  if (!nextButton) {
    nextButton = document.createElement("button");
    nextButton.className = "next-button";
    nextButton.append(svg);
    nextButton.addEventListener("pointerenter", () => {
      nextButtonTl.pause();
      gsap.timeline().to(svg, { x: 0, duration: 0.15 });
    });
    nextButton.addEventListener("pointerleave", () => {
      nextButtonTl.progress(0).play();
    });
    nextButton.addEventListener("click", () => {
      resetGuesses();
      this.resetCanvas();
      wordContainer.animate(fadeOut.keyframes, fadeOut.opts);
      setTimeout(nextWord, 300);
      toggleNextButton();
    });
    toggleNextButton();
  }
  nextButtonTl.play();
  wordContainer.append(nextButton);
};

const checkAnswer = (value) => {
  let keys = Object.keys(hidden).filter((k) => hidden[k] === value);
  if (keys.length !== 0) {
    keys.forEach((k) => {
      let span = document.querySelector(`#id-${k}`);
      let cover = document.querySelector(`#cover-${k}`);
      span.innerText = hidden[k];
      delete hidden[k];
      span.style.visibility = "visible";
      cover.style.transform = "scaleY(0)";
      if (this.allowAudio) this.correctAudio.play();
      increaseScore(10);
      updateBestScore();
      if (Object.keys(hidden).length === 0 && hidden.constructor === Object) {
        let boxes = document.querySelectorAll("li.letter");
        boxes.forEach((box) => {
          if (!box.classList.contains("hyphen"))
            box.style.border = "2px solid #37b666";
        });
        wordContainer.animate(
          [
            {
              transform: "scale(1)",
            },
            {
              transform: "scale(1.06)",
            },
          ],
          {
            duration: 250,
            iterations: 2,
            direction: "alternate",
          }
        );
        if (this.allowAudio) this.winAudio.play();
        updateCurrent();
        if (mobileAndTabletCheck()) {
          document.querySelector("body").classList.toggle("swipe");
          document.addEventListener("touchstart", handleTouchStart, false);
          document.addEventListener("touchmove", handleTouchMove, false);
          document.addEventListener("touchend", handleTouchEnd, false);
        } else {
          toggleNextButton();
        }
      }
    });
  } else {
    let button = document.getElementById(value);
    button.style.border = "1px solid red";
    if (this.allowAudio) {
      this.wrongAudio.volume = 0.2;
      this.wrongAudio.play();
    }
    reduceGuesses();
    this.pullUp();
    if (guesses === 0) {
      // Game over!
      disableAllButtons();
      this.loseAudio.volume = 0.2;
      if (this.allowAudio) this.loseAudio.play();
      setTimeout(() => {
        let modal = document.querySelector(".gameover-modal");
        gsap.set(".gameover-box", { scale: 1.6 });
        gsap.set(modal, { opacity: 0 });
        gsap
          .timeline({ defaults: { duration: 0.25, ease: "none" } })
          .to(modal, { visibility: "visible" })
          .to(modal, { opacity: 1 })
          .to(".gameover-box", { scale: 1, opacity: 1 }, "<");
        parallaxInstance.disable();
      }, 2000);
      document.querySelector(".gameover-data .score").innerText = score;
      document.querySelector(".gameover-data .best-score").innerText =
        bestScore;
    }
  }
};
const hideLetters = (wordArray) => {
  let maxHidden = Math.floor(wordArray.length * diffValues[difficulty]);
  for (let i = 0; i < maxHidden; i++) {
    let ran = Math.floor(Math.random() * wordArray.length);
    if (wordArray[ran] !== "" && wordArray[ran] !== " ") {
      hidden[ran] = wordArray[ran];
      wordArray[ran] = "";
    }
  }
};
const clearPrevWord = (all) => {
  alphaButtons.forEach((button) => {
    button.disabled = false;
    button.style.border = "none";
  });
  if (all && wordContainer.firstChild) {
    // For mobile...
    while (wordContainer.firstChild) {
      wordContainer.removeChild(wordContainer.lastChild);
    }
    return;
  }
  if (wordContainer.firstChild) {
    while (wordContainer.firstChild.className !== "next-button") {
      wordContainer.removeChild(wordContainer.firstChild);
    }
  }
};
const createLetterElements = (wordArray) => {
  wordArray.forEach((letter, i) => {
    let box = document.createElement("li");
    let cover = document.createElement("div");
    let span = document.createElement("span");
    box.className = "letter";
    cover.className = "cover";
    span.innerText = letter;
    span.id = "id-" + i;
    cover.id = "cover-" + i;
    if (letter === "") {
      cover.style.visibility = "visible";
      span.style.visibility = "collapse";
    }
    if (letter === " ") {
      span.style.borderBottom = "4px solid white";
      box.classList.add("hyphen");
      box.border = "none";
      box.style.backgroundColor = "rgba(0,0,0,0)";
      box.style.boxShadow = "none";
    }
    box.append(span);
    box.append(cover);
    wordContainer.append(box);
  });
  if (!mobileAndTabletCheck()) CreateNextButton();
};
const nextWord = (all) => {
  // wordArray = words[current].toUpperCase().split("");
  wordArray = getRandomWord();
  clearPrevWord(all);
  hideLetters(wordArray);
  createLetterElements(wordArray);
  wordContainer.animate(fadeIn.keyframes, fadeIn.opts);
};
let alpha = document.querySelector(".alpha-container");
let word = document.querySelector(".word-container");
let right = document.querySelector(".hill-right");
let mid = document.querySelector(".hill-middle");
let left = document.querySelector(".hill-left");
let mountains = document.querySelector(".mountains");
let city = document.querySelector(".city");
const setupScene = () => {
  parallaxInstance.disable();
  alpha.style.opacity = 0;
  word.style.opacity = 0;
  alpha.classList.toggle("sliding-up");
  word.classList.toggle("sliding-up");
  alpha.classList.toggle("paused");
  word.classList.toggle("paused");
  gsap.set(right, { scale: 1.4, y: "5%" });
  gsap.set(left, { scale: 1.4, y: "5%" });
  if (mobileAndTabletCheck()) {
    gsap.set(mid, { y: "5%" });
  } else {
    gsap.set(mid, { y: "-6%" });
  }
  gsap.set(mountains, { scale: 1.05, y: "10%" });
  gsap.set(city, { scale: 1.1, y: "5%" });
  startScene
    .to(mountains, { scale: 1, y: 0 }, 0)
    .to(city, { scale: 1, y: 0 }, "<+0.3")
    .to(right, { scale: 1, y: 0 }, 0)
    .to(left, { scale: 1, y: 0 }, "<")
    .to(mid, { y: 0 }, "<");
  startScene.pause().progress(0);
  this.stopAnimate();
};
setupScene();
const animateScene = () => {
  if (startScene.paused()) {
    this.animateRope();
    startScene.play();
    alpha.classList.toggle("paused");
    word.classList.toggle("paused");
  }
};
const showMenu = () => {
  modal.style.visibility = "visible";
  modal.style.opacity = 1;
  menuBox.classList.toggle("expand");
  menuBox.classList.toggle("drop-down");
  mainContent.classList.toggle("blur-out");
  mainContent.classList.toggle("blur-in");
};
const closeMenu = () => {
  menuBox.classList.toggle("drop-down");
  menuBox.classList.toggle("expand");
  mainContent.classList.toggle("blur-in");
  mainContent.classList.toggle("blur-out");
  modal.style.opacity = 0;
  setTimeout(() => {
    modal.style.visibility = "collapse";
  }, 600);
};
const fetchData = (endpoint) => {
  return fetch(endpoint)
    .then(
      (response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request failed!");
      },
      (networkError) => {
        console.log(networkError);
      }
    )
    .then((jsonResponse) => {
      return new Promise((resolve) => {
        resolve(jsonResponse);
      });
    });
};
const fillData = (jsonResponse, cat) => {
  if (cat === "pokemons") {
    jsonResponse["results"].forEach((poke) => {
      words.push(poke.name);
    });
  } else {
    jsonResponse.forEach((obj) => {
      words.push(obj.word);
    });
  }
  sessionStorage.setItem("currentData", JSON.stringify(words));
};
const setupGame = () => {
  clearPrevWord(true);
  updateCurrent();
  resetGuesses();
  resetScore();
  this.resetCanvas();
  wordArray = getRandomWord();
  hidden = {};
  nextButton = undefined;
};
const startGame = () => {
  setupGame();
  hideLetters(wordArray);
  createLetterElements(wordArray);
  closeMenu();
  animateScene();
  enableAllButtons();
};
const toggleMenuList = (name) => {
  let list = document.querySelector(`.${name}-list .list`);
  list.classList.toggle("closed-list");
  list.classList.toggle("opened-list");
};
let catButton = document.querySelector(".category-button");
let diffButton = document.querySelector(".difficulty-button");
let playButton = document.querySelector(".start-game");
document.querySelector(".start-game").addEventListener("click", () => {
  catButton.disabled = true;
  diffButton.disabled = true;
  playButton.disabled = true;
  playButton.classList.toggle("loading");
  if (queryParam !== category || words.length === 0) {
    words.length = 0;
    queryParam = category;
    let endpoint = `${wordUrl}${queryParam}`;
    if (category === "pokemons") {
      fetchData(pokeUrl).then((jsonResponse) => {
        playButton.classList.toggle("loading");
        fillData(jsonResponse, "pokemons");
        startGame();
      });
    } else {
      fetchData(endpoint).then((jsonResponse) => {
        playButton.classList.toggle("loading");
        fillData(jsonResponse);
        startGame();
      });
    }
  } else {
    playButton.classList.toggle("loading");
    words.length = 0;
    words = JSON.parse(sessionStorage.getItem("currentData"));
    startGame();
  }
});
catButton.addEventListener("click", () => {
  toggleMenuList("category");
});
catButton.addEventListener("focusout", () => {
  let catList = catButton.nextElementSibling;
  if (catList.classList.contains("opened-list")) {
    toggleMenuList("category");
  }
});
diffButton.addEventListener("click", () => {
  toggleMenuList("difficulty");
});
diffButton.addEventListener("focusout", () => {
  let diffList = diffButton.nextElementSibling;
  if (diffList.classList.contains("opened-list")) {
    toggleMenuList("difficulty");
  }
});
document.querySelector(".home-button").addEventListener("click", () => {
  nextButtonTl.pause().progress(0);
  catButton.disabled = false;
  diffButton.disabled = false;
  playButton.disabled = false;
  showMenu();
});
let soundButton = document.querySelector(".sound-button");
soundButton.addEventListener("click", () => {
  soundButton.classList.toggle("disabled");
  this.allowAudio = !this.allowAudio;
});
let catItems = document.querySelectorAll(".category-list li");
let diffItems = document.querySelectorAll(".difficulty-list li");
catItems.forEach((li) => {
  li.addEventListener("mousedown", () => {
    catButton.innerText = li.innerText;
    catSpan.innerText = li.innerText.toUpperCase();
    category = li.innerText.toLowerCase();
  });
});
diffItems.forEach((li) => {
  li.addEventListener("mousedown", () => {
    diffButton.innerText = li.innerText;
    diffSpan.innerText = li.innerText;
    difficulty = li.innerText.toLowerCase();
  });
});
document
  .querySelector(".gameover-box .main-menu")
  .addEventListener("click", () => {
    gsap
      .to(".gameover-box", {
        duration: 0.25,
        scale: 1.6,
        opacity: 0,
        ease: "none",
      })
      .then(() => {
        nextButtonTl.pause().progress(0);
        catButton.disabled = false;
        diffButton.disabled = false;
        playButton.disabled = false;
        showMenu();
        setTimeout(() => {
          document.querySelector(".gameover-modal").style.visibility =
            "collapse";
          parallaxInstance.enable();
        }, 600);
      });
  });
document
  .querySelector(".gameover-box .play-again")
  .addEventListener("click", () => {
    gsap
      .to(".gameover-box", {
        duration: 0.25,
        scale: 1.6,
        opacity: 0,
        ease: "none",
      })
      .then(() => {
        document.querySelector(".gameover-modal").style.visibility = "collapse";
        words.length = 0;
        words = JSON.parse(sessionStorage.getItem("currentData"));
        setupGame();
        hideLetters(wordArray);
        createLetterElements(wordArray);
        enableAllButtons();
        parallaxInstance.enable();
      });
  });
</script>

<!--
<script
			defer
			src="https://code.createjs.com/1.0.0/preloadjs.min.js"
		></script>
		<script
			defer
			src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js"
		></script>
		<script defer src="@/views/HangMan/scripts/loader.js"></script>
		<script
			defer
			src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"
		></script>
		<script defer src="@/views/HangMan/scripts/rope.js"></script>
		<script defer src="@/views/HangMan/scripts/main.js"></script>
-->


<style scoped>
</style>