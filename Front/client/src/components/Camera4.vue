<template>
  <div class="camera card">
    <div class="camera__most-recent" v-show="mostRecent.name.length > 0">
      <p class="cam-subtitle">
        {{ mostRecent.name }}
      </p>

      <p class="cam-subtitle">
        {{ mostRecent.confidence }}
      </p>
    </div>

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
</template>

<script>
import { WebCam } from "vue-web-cam";

import { GestureEventBus } from "../main";

import "@tensorflow/tfjs-backend-webgl";
import * as handpose from "@tensorflow-models/handpose";
import { Gestures } from "fingerpose";
import { CustomGestures, GE } from "../utils/gestures";
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

      minConfidence: 8,
      detection: {
        name: "",
        confidence: 0,
      },
    };
  },

  mounted() {
    this.ctx = this.$refs.canvas.getContext("2d");
  },

  computed: {
    mostRecent() {
      let name = "";

      switch (this.detection.name) {
        // 모음
        case CustomGestures.AhGesture.name:
          name = "아";
          break;
        case CustomGestures.YaGesture.name:
          name = "야";
          break;
        case CustomGestures.AeGesture.name:
          name = "애";
          break;
        case CustomGestures.YaeGesture.name:
          name = "얘";
          break;
        // case CustomGestures.oGesture.name:
        //   name = "오";
        //   break;
        case CustomGestures.IGesture.name:
          name = "이";
          break;




        case Gestures.VictoryGesture.name:
          name = "";
          break;
        
        default:
          break;
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
          const estimation = GE.estimate(hand[0].landmarks, this.minConfidence);

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
  },
};
</script>

<style scoped>
.camera {
  transform: scale(-1, 1);

  position: fixed;
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

    background-color: rgba(255, 255, 255, 0.25)
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
}
</style>
