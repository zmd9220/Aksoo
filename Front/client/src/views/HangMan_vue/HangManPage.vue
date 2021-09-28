<template>
    <div class="hangman-row">
        <div class="game-container">
            <HangManGame ref="game" @lifeLoss="lifeLoss" @scoreChange="scoreChange"
            />
        </div>
        <div class="right-status-column">
            <div class="nickname">{{nickname}} 님</div>
            <div class="game-status">
                <div class="game-status-li li-start">
                    <div>
                        Life 
                    </div>
                    <div>
                        <span v-for="idx in life" :key="idx">
                            <img src="./heart.png" style="width: 40px" /> 
                        </span>
                    </div>
                </div>
                <div class="game-status-li">
                    <div>
                        Score 
                    </div>
                    <div class="game-status-box">
                        <span>
                        {{score}}
                        </span>
                    </div>
                </div>
                <div class="game-status-li li-end">
                    <div>
                        Best Score 
                    </div>
                    <div class="game-status-box">
                        {{best_score}}
                    </div>
                </div>
        </div>
            <div v-if="mode_letter" class="game-mode-cons" @click="modeChange">자음</div>
            <div v-else class="game-mode-vowel" @click="modeChange">모음</div>
            <div class="letter">
                <div class="selected-letter">{{ letter }}</div>
                <div class="selected-confidence">정확도 : {{ confidence }}</div>
            </div>
            <div class="camera">
                <template v-if="!modelLoaded">
                    <!-- <img src="./croc.png" style="width: 80px" />  -->
                    <loading message="👋 Loading hand detection model..." />
                </template>
                <camera
                v-show="modelLoaded && !minimizeCamera"
                @on-loaded="modelLoaded = true"
                @on-minimize="minimizeCamera = true"
                @word="cameraData"
                @modeChange="modeChange"
                @input="input"
                ref="camera"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Camera from "@/components/Camera0.vue";
import Loading from "@/components/Loading.vue";
import HangManGame from "./HangManGame.vue";

export default {
    data() {
        return {
            nickname: '김재민',
            life: 6,
            score: 0,
            best_score: 0,
            mode_letter: 0,
            letter: 'ㅏ',
            confidence: '90%',
            modelLoaded: false,
            minimizeCamera: false,
        }
    },
    name: "HangManPage",
    components: {
        Camera,
        Loading,
        HangManGame,
    },
    methods: {
        cameraData: function(payload1, payload2) {
            this.letter = payload1;
            this.confidence = payload2;
        },
        modeChange: function() {
            this.mode_letter = 1 - this.mode_letter;
            this.$refs.camera.modeChange();
        },
        input: function(letter) {
            this.$refs.game.listener(letter);
        },
        lifeLoss: function() {
            this.life--;
        },
        scoreChange: function(payload) {
            this.score = this.score + payload;
        },
    },
};
</script>

<style scoped>

.hangman-row {
    display: flex;
    width: 100%;
    height: 90vh;
    margin: 5vh;
}

.hangman-row .game-container {
    background-color: #f4f1eb;
    flex:70%;
    border-radius: 20px;
    margin: 2vh;
    box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
}

.hangman-row .right-status-column {
    flex:30%;
    border-radius: 20px;
    margin: 2vh;
}
.hangman-row .right-status-column .nickname {
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

.hangman-row .right-status-column .game-status {
    width: 100%;
    height: 25%;
    background-color: #f4f1eb;
    margin-bottom: 1.5vh;
    border-radius: 40px;
    box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
    font-family: 'SDSamliphopangche_Basic';
    font-size: 2rem;
    /* display: row;
    justify-content: space-around; */
}

.hangman-row .right-status-column .game-status .game-status-li {
    display: flex;
    justify-content: space-between;
    margin-left: 2rem;
    margin-right: 2rem;
}

.hangman-row .right-status-column .game-status .li-start {
    margin-top: 1rem;

}
.hangman-row .right-status-column .game-status .li-end {

    margin-bottom: 1rem;
}

.hangman-row .right-status-column .game-status-box {
    width: 10rem;
    height: 2.5rem;
    background-color: #E5D2BD;
    box-shadow: 4px 4px 5px rgba(128, 128, 128, 0.733);
    border-radius: 15px;
    border: 3px solid #957457;
    font-family: 'SDSamliphopangche_Basic';
    /* font-size: 1rem; */
    color: #957457;
    display: flex;
    justify-content: center;
    align-self: center;
    line-height: 2.5rem;
    text-align: center;
}

.hangman-row .right-status-column .game-mode-cons {
    width: 100%;
    height: 10%;
    background-color: #f4f1eb;
    margin-bottom: 1.5vh;
    border-radius: 30px;
    box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
    border: solid 4px #fe6f28;
    color: #917052;
    font-family: 'SDSamliphopangche_Basic';
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hangman-row .right-status-column .game-mode-vowel {
    width: 100%;
    height: 10%;
    background-color: #f4f1eb;
    margin-bottom: 1.5vh;
    border-radius: 30px;
    box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
    border: solid 4px #86c7f4;
    color: #917052;
    font-family: 'SDSamliphopangche_Basic';
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hangman-row .right-status-column .letter {
    width: 100%;
    height: 7%;
    background-color: #f4f1eb;
    margin-bottom: 1.5vh;
    border-radius: 20px;
    box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
    display: flex;
    justify-content: space-around;
}

.hangman-row .right-status-column .letter .selected-letter {
    font-size: 1.5rem;
    color: #957457;
    font-family: 'SDSamliphopangche_Basic';
    /* margin-left: 20%; */
    display: flex;
    justify-content: center;
    align-items: center;
}

.hangman-row .right-status-column .letter .selected-confidence {
    font-size: 1.5rem;
    color: #b59e7a;
    font-family: 'SDSamliphopangche_Basic';
    /* margin-right: 20%; */
    display: flex;
    justify-content: center;
    align-items: center;
}

.hangman-row .right-status-column .camera {
    width: 100%;
    height: 41%;
    background-color: #f4f1eb;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.733);
}

</style>