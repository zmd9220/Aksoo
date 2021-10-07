# AI



### 설치

```
npm i --save fingerpose
```

##### 사용 라이브러리 버전

```js
  "dependencies": {
    "@tensorflow-models/handpose": "0.0.7",
    "@tensorflow/tfjs": "^3.9.0",
    "core-js": "^3.6.5",
    "fingerpose": "0.0.2",
    "vue": "^2.6.11",
    "vue-router": "^3.5.2",
    "vue-web-cam": "^1.9.0"
  },
```

### 관련 코드 설명

handpose 와 fingerpose 라이브러리 사용

```
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/handpose"></script>
<script src="fingerpose.js" type="text/javascript"></script>
```



아래 샘플 동작을 통해 잘 설치되었는지 확인 가능

```
// add "✌🏻" and "👍" as sample gestures
const GE = new fp.GestureEstimator([
    fp.Gestures.VictoryGesture,
    fp.Gestures.ThumbsUpGesture
]);
```



handpose의 랜드마크를 설정할 수 있음

```
const model = await handpose.load();
const predictions = await model.estimateHands(video, true);
```



나만의 fingerpose 정의 가능

| Finger | Name          |
| ------ | ------------- |
| 0      | Finger.Thumb  |
| 1      | Finger.Index  |
| 2      | Finger.Middle |
| 3      | Finger.Ring   |
| 4      | Finger.Pinky  |

| Curl | Name                |
| ---- | ------------------- |
| 0    | FingerCurl.NoCurl   |
| 1    | FingerCurl.HalfCurl |
| 2    | FingerCurl.FullCurl |

아래 사진은 이해를 돕기위한 사진이다.

| [![enter image description here](https://github.com/andypotato/fingerpose/raw/master/assets/nocurl.jpg)](https://github.com/andypotato/fingerpose/raw/master/assets/nocurl.jpg) | [![enter image description here](https://github.com/andypotato/fingerpose/raw/master/assets/halfcurl.jpg)](https://github.com/andypotato/fingerpose/raw/master/assets/halfcurl.jpg) | [![enter image description here](https://github.com/andypotato/fingerpose/raw/master/assets/fullcurl.jpg)](https://github.com/andypotato/fingerpose/raw/master/assets/fullcurl.jpg) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| No curl                                                      | Half curl                                                    | Full curl                                                    |

| Direction | Name                  |
| --------- | --------------------- |
| 0         | Vertical Up 👆         |
| 1         | Vertical Down 👇       |
| 2         | Horizontal Left 👈     |
| 3         | Horizontal Right 👉    |
| 4         | Diagonal Up Right ↗️   |
| 5         | Diagonal Up Left ↖️    |
| 6         | Diagonal Down Right ↘️ |
| 7         | Diagonal Down Left ↙️  |

#### 엄지가 아래를 향하게 하는 손동작 예시 👎

새로운 동작 object를 생성한다:

```
const thumbsDownGesture = new fp.GestureDescription('thumbs_down');
```

엄지가 아래를 향하게 하는 손동작 코드:

엄지손가락이 위로 뻗은 정확도(confidence ) 1.0으로 넣어주고 대각선 방향으로는 0.5의 정확도를 설정해 주었다.

```
thumbsDownGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalDown, 1.0);
thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownLeft, 0.5);
thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownRight, 0.5);
```

나머지 손가락이 모두 굽혀져 있는 상태라는 것을 정확도 1.0으로 설정

```
// do this for all other fingers
thumbsDownGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
thumbsDownGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
thumbsDownGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
thumbsDownGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);
```







#### components/Camera.vue

```vue
data() {
    return {
      ......
      mode: 0, // 0:모음, 1:자음
      last: "*",
      count: 0, // 정의한 손동작이 인식되었을 때 카운팅
      detection: {
        confidence: 0, // 정확도
        hand: 0, // 0:손등, 1:손바닥  카메라가 손등을 찍는지 손바닥을 찍는지 확인
        hand2: 0, // 0:정면, 1:손날
      ......
      },
    };
```

```
computed: {
    mostRecent() {
      let name = "";
      if (this.mode === 0) {
        // 모음
        switch (this.detection.name) {
          case CustomGestures_vowel.AhGesture.name:  
          // 정의한 손동작 js 불러와서 어떤 동작이라고 표시할 것인지 정의하기
            if (this.detection.hand === 0) { // 카메라에 손등이 보이는 정의 동작이면 "ㅏ"
              name = "ㅏ";
            } else {
              name = "ㅗ";
            }
            break;
          case CustomGestures_vowel.YaGesture.name:
            if (this.detection.hand === 0) {
              name = "ㅑ";
            } else {
              name = "ㅛ";
            }
            break;
  ......

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
   ......

          default:
            break;
        }
      }
```

```js
  methods: {
    async loadHandpose() {
      // 핸드포즈 모델 불러오기
      const model = await handpose.load();
      await this.detect(model);

      this.$emit("on-loaded");
    },

    async detect(model) {
      const videoEl = this.$refs.webcam?.$el;

      if (videoEl && videoEl.readyState === 4) {
        // 웹캠을 통해 디텍션 하기
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
            // 신뢰도가 큰 제스쳐들을 가져와서 emit 발생시키기
            const confidences = estimation.gestures.map((g) => g.confidence);
            const largest = confidences.indexOf(Math.max(...confidences));

            this.detection = estimation.gestures[largest];

            GestureEventBus.$emit("on-detection", estimation.gestures[largest]);
          }
        }

        // mesh 그리기
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

          if (a.landmarks[1][0] > a.landmarks[0][0]) {
            this.detection.hand = 0;
          } else {
            this.detection.hand = 1;
          }
          if (x_diff > y_diff) {
            this.detection.hand2 = 0;
          } else {
            this.detection.hand2 = 1;
          }
        }
        if (this.last !== this.mostRecent.name) {
          console.log("단어변화");
          this.last = this.mostRecent.name;
          this.count = 0;
        } else {
          console.log(this.count);
          this.count++;
          if (this.count > 150) {
            console.log("단어입력");
            console.log(this.last);
            this.last = "*";
            this.count = 0;
          }
        }
        // 루프를 통해 계속 디텍션 하기.
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
```





