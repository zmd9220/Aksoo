import AhGesture from "./Ah";
import YaGesture from "./Ya";
// import OGesture from "./O";
import AeGesture from "./Ae";
import YaeGesture from "./Yae";
import IGesture from "./I";
import EuGesture from "./Eu";
import UGesture from "./U";
import YuGesture from "./Yu";
import EoGesture from "./Eo";
import YeoGesture from "./Yeo";
// import EGesture from "./E";

// import YeGesture from "./Ye";
// import YoGesture from "./Yo";
// import ChangeGesture from "./Change";

import { Gestures, GestureEstimator } from "fingerpose";

// Initialise the estimator
const GE_vowel = new GestureEstimator([
  // 모음
  AhGesture,
  YaGesture,
  Gestures.VictoryGesture, // 야
  // OGesture, // ㅗ
  AeGesture, // ㅐ
  YaeGesture, // ㅒ
  IGesture, // ㅣ
  EuGesture, // ㅡ
  UGesture, // ㅜ
  YuGesture, // ㅠ
  EoGesture, // ㅓ
  YeoGesture, // ㅕ
  // EGesture, // ㅔ
  // // ChangeGesture,
  // YeGesture, // ㅖ
  // YoGesture, // ㅛ
])


const CustomGestures_vowel = {
  //모음
  AhGesture,
  YaGesture,
  // OGesture,
  AeGesture,
  YaeGesture, 
  IGesture,
  EuGesture,
  UGesture,
  YuGesture,
  EoGesture,
  YeoGesture,
  // EGesture,
  // // ChangeGesture,
  // YeGesture,
  // YoGesture,
};

export { CustomGestures_vowel, GE_vowel };
