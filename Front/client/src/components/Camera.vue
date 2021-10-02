<template>
  <div class="camera-wrapper">
    <!-- <button @click="modeChange">모드변경</button> -->
    <!-- <button @click="handChange">오른손왼손</button> -->

    <div class="camera card">
      <!-- <div class="camera__most-recent" v-show="mostRecent.name.length > 0">
        <p class="cam-subtitle">
          {{ mostRecent.name }}
        </p>

        <p class="cam-subtitle">
          {{ mostRecent.confidence }}
        </p>
      </div> -->

      <web-cam
        class="web-cam"
        ref="webcam"
        :height="height"
        :width="width"
        :device-id="deviceId"
        @started="loadHandpose"
        @error="onError"
        @notsupported="onNotsupported"
        @cameras="onCameras"
        @camera-change="onCameraChange"
      />
      <canvas ref="canvas" :height="height" :width="width" />
    </div>
  </div>
</template>

<script>
import { WebCam } from "vue-web-cam";

import { GestureEventBus } from "../main";

import "@tensorflow/tfjs-backend-webgl";
import * as handpose from "@tensorflow-models/handpose";
import { Gestures } from "fingerpose";
import { CustomGestures_vowel, GE_vowel } from "../utils/gestures_vowel";
import { CustomGestures_cons, GE_cons } from "../utils/gestures_cons";
import { drawHandMesh } from "../utils/handmesh";

export default {
  name: "Camera",

  components: {
    WebCam,
  },

  data() {
    return {
      ctx: null,
      height: 480,
      width: 640,

      camera: null,
      deviceId: null,
      devices: [],

      test: "",

      minConfidence: 8,
      mode: 0, // 0:모음, 1:자음
      last: "*",
      count: 0,
      detection: {
        name: "",
        confidence: 0,
        hand: 0, // 0:손등, 1:손바닥
        hand2: 0, // 0:정면, 1:손날
      },
    };
  },

  mounted() {
    this.ctx = this.$refs.canvas.getContext("2d");
  },

  computed: {
    mostRecent() {
      let name = "";
      if (this.mode === 0) {
        // 모음
        switch (this.detection.name) {
          case CustomGestures_vowel.AhGesture.name:
            if (this.detection.hand === 0) {
              if (this.use_left_hand === 0) {
                name = "ㅏ";
              } else {
                name = "ㅗ";
              }
            } else {
              if (this.use_left_hand === 0) {
                name = "ㅗ";
              } else {
                name = "ㅏ";
              }
            }
            break;
          case CustomGestures_vowel.YaGesture.name:
            if (this.detection.hand === 0) {
              if (this.use_left_hand === 0) {
                name = "ㅑ";
              } else {
                name = "ㅛ";
              }
            } else {
              if (this.use_left_hand === 0) {
                name = "ㅛ";
              } else {
                name = "ㅑ";
              }
            }
            break;
          case CustomGestures_vowel.AeGesture.name:
            name = "ㅐ";
            break;
          case CustomGestures_vowel.YaeGesture.name:
            name = "ㅒ";
            break;
          case CustomGestures_vowel.IGesture.name:
            name = "ㅣ";
            break;
          case CustomGestures_vowel.EuGesture.name:
            name = "ㅡ";
            break;
          case CustomGestures_vowel.UGesture.name:
            name = "ㅜ";
            break;
          case CustomGestures_vowel.YuGesture.name:
            name = "ㅠ";
            break;
          case CustomGestures_vowel.EoGesture.name:
            // name = "ㅓ";
            if (this.detection.hand2 === 1) {
              name = "ㅓ";
            }
            break;
          case CustomGestures_vowel.YeoGesture.name:
            // name = "ㅕ";
            if (this.detection.hand2 === 1) {
              name = "ㅕ";
            }
            break;
          case CustomGestures_vowel.EGesture.name:
            // name = "ㅔ";
            if (this.detection.hand2 === 1) {
              name = "ㅔ";
            }
            break;
          case CustomGestures_vowel.YeGesture.name:
            name = "ㅖ";
            // if (this.detection.hand2 === 1){
            // name = "ㅖ";
            // }
            break;

          default:
            break;
        }
      } else {
        // 자음
        switch (this.detection.name) {
          case CustomGestures_cons.GiyeogGesture.name:
            name = "ㄱ";
            break;
          case CustomGestures_cons.NieunGesture.name:
            name = "ㄴ";
            break;
          case CustomGestures_cons.DigeudGesture.name:
            name = "ㄷ";
            break;
          case CustomGestures_cons.LieulGesture.name:
            name = "ㄹ";
            break;
          case CustomGestures_cons.MieumGesture.name:
            name = "ㅁ";
            break;
          case CustomGestures_cons.BieubGesture.name:
            name = "ㅂ";
            break;
          case CustomGestures_cons.SiosGesture.name:
            name = "ㅅ";
            break;
          case CustomGestures_cons.IeungGesture.name:
            name = "ㅇ";
            break;
          case CustomGestures_cons.JieujGesture.name:
            name = "ㅈ";
            break;
          case CustomGestures_cons.ChieuchGesture.name:
            name = "ㅊ";
            break;
          case CustomGestures_cons.KieukGesture.name:
            name = "ㅋ";
            break;
          case CustomGestures_cons.TieutGesture.name:
            name = "ㅌ";
            break;
          case CustomGestures_cons.PieupGesture.name:
            name = "ㅍ";
            break;
          case Gestures.ThumbsUpGesture.name:
            name = "ㅎ";
            break;

          default:
            break;
        }
      }

      return {
        name,
        confidence: `${Math.floor((this.detection.confidence ?? 0) * 10)}%`,
      };
    },
  },

  watch: {
    camera(id) {
      this.deviceId = id;
    },

    devices() {
      // Once we have a list of devices, select the first one
      const first = this.devices[0];

      if (first) {
        this.camera = first.deviceId;
        this.deviceId = first.deviceId;
      }
    },
  },

  methods: {
    async loadHandpose() {
      // Load the Handpose model
      const model = await handpose.load();
      await this.detect(model);

      this.$emit("on-loaded");
    },

    async detect(model) {
      const videoEl = this.$refs.webcam?.$el;

      if (videoEl && videoEl.readyState === 4) {
        // Make detections from the webcam
        const hand = await model.estimateHands(videoEl);

        if (hand.length > 0) {
          let estimation = "";
          if (this.mode === 0) {
            estimation = GE_vowel.estimate(
              hand[0].landmarks,
              this.minConfidence
            );
          } else {
            estimation = GE_cons.estimate(
              hand[0].landmarks,
              this.minConfidence
            );
          }

          if (estimation.gestures.length > 0) {
            // Get the gesture with the largest confidence & emit it in an event
            const confidences = estimation.gestures.map((g) => g.confidence);
            const largest = confidences.indexOf(Math.max(...confidences));

            this.detection = estimation.gestures[largest];

            GestureEventBus.$emit("on-detection", estimation.gestures[largest]);
          }
        }

        // Draw hand mesh
        this.ctx.clearRect(0, 0, this.width, this.height);
        drawHandMesh(hand, this.ctx);

        const a = hand[0]; // hand landmark를 가져오기 위한 전체 dict
        if (a !== undefined) {
          const x_diff =
            Math.abs(a.landmarks[5][0] - a.landmarks[9][0]) +
            Math.abs(a.landmarks[9][0] - a.landmarks[13][0]) +
            Math.abs(a.landmarks[13][0] - a.landmarks[17][0]);
          const y_diff =
            Math.abs(a.landmarks[5][1] - a.landmarks[9][1]) +
            Math.abs(a.landmarks[9][1] - a.landmarks[13][1]) +
            Math.abs(a.landmarks[13][1] - a.landmarks[17][1]);
          // console.log(a.landmarks)
          if (a.landmarks[1][0] > a.landmarks[0][0]) {
            // console.log('앞')
            this.detection.hand = 0;
          } else {
            // console.log('뒤')
            this.detection.hand = 1;
          }
          if (x_diff > y_diff) {
            this.detection.hand2 = 0;
          } else {
            this.detection.hand2 = 1;
          }
        }
        if (this.last !== this.mostRecent.name) {
          // console.log("단어변화");
          this.last = this.mostRecent.name;
          this.count = 0;
        } else {
          // console.log(this.count);
          this.count++;
          if (this.count > 150) {
            // console.log("단어입력");
            // console.log(this.last);
            this.last = "*";
            this.count = 0;
          }
        }
        this.$emit("word", this.mostRecent.name, this.mostRecent.confidence);
        // Continue detection loop
        requestAnimationFrame(() => this.detect(model));
      }
    },

    onError() {
      this.$emit("on-loaded");

      this.showErrorDialog({
        message: "Sorry, but we are not able to access your webcam.",
      });
    },

    onNotsupported() {
      this.$emit("on-loaded");

      this.showErrorDialog({
        message: "Sorry, but your browser does not appear to be supported.",
        onConfirm: () => this.$router.go(-1),
      });
    },

    onCameras(cameras) {
      this.devices = cameras;
    },

    onCameraChange(deviceId) {
      this.deviceId = deviceId;
      this.camera = deviceId;
    },
    modeChange() {
      this.mode = 1 - this.mode;
    },
  },
};
</script>

<style scoped>
.camera {
  border-radius: 30px;
  transform: scale(-1, 1);

  /* position: fixed; */
  bottom: 0;
  right: 0;

  width: calc(640px * 0.6);
  height: calc(480px * 0.6);
}

.camera__most-recent {
  transform: scale(-1, 1);

  position: relative;
  top: 0;
  left: 0;

  text-align: left;
  padding: 0.5rem 0.85rem;
  z-index: 11;

  display: flex;
  justify-content: space-between;

  background-color: rgba(255, 255, 255, 0.25);
}
p {
  color: white;
}
canvas,
video {
  height: 100%;
  width: 100%;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 10;
}

.web-cam {
  filter: brightness(25%);
  border-radius: 30px;
}
</style>
