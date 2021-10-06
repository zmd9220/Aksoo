# AI



### 설치

```
npm i --save fingerpose
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

```
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





