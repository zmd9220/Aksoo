// import GiyeogGesture from "./Giyeog";
// import NieunGesture from "./Nieun";
// import DigeudGesture from "./Digeud";
// import LieulGesture from "./Lieul";
// import MieumGesture from "./Mieum";
// import BieubGesture from "./Bieub";
// import SiosGesture from "./Sios";
// import IeungGesture from "./Ieung";
// import JieujGesture from "./Jieuj";
// import ChieuchGesture from "./Chieuch";
// import KieukGesture from "./Kieuk";
// import TieutGesture from "./Tieut";
// import PieupGesture from "./Pieup";
import AhGesture from "./Ah";
import YaGesture from "./Ya";
// import oGesture from "./o";
import AeGesture from "./Ae";
import YaeGesture from "./Yae";
import IGesture from "./I";
import EuGesture from "./Eu";
import UGesture from "./U";
import YuGesture from "./Yu";
import EoGesture from "./Eo";
import YeoGesture from "./Yeo";
import EGesture from "./E";
import YeGesture from "./Ye";

import { Gestures, GestureEstimator } from "fingerpose";

// Initialise the estimator
const GE = new GestureEstimator([
  // 자음
  // Gestures.ThumbsUpGesture, // 히읗
  // GiyeogGesture, 
  // NieunGesture,
  // DigeudGesture,
  // LieulGesture,
  // MieumGesture,
  // BieubGesture,
  // SiosGesture,
  // IeungGesture,
  // JieujGesture,
  // ChieuchGesture,
  // KieukGesture,
  // TieutGesture,
  // PieupGesture,

  // 모음
  AhGesture,
  YaGesture,
  Gestures.VictoryGesture, // 야
  // oGesture, // ㅗ
  AeGesture, // ㅐ
  YaeGesture, // ㅒ
  IGesture, // ㅣ
  EuGesture, // ㅡ
  UGesture, // ㅜ
  YuGesture, // ㅠ
  EoGesture, // ㅓ
  YeoGesture, // ㅕ
  EGesture, // ㅔ
  YeGesture, // ㅖ

])


const CustomGestures = {
  // 자음
  // GiyeogGesture,
  // NieunGesture,
  // DigeudGesture,
  // LieulGesture,
  // MieumGesture,
  // BieubGesture,
  // SiosGesture,
  // IeungGesture,
  // JieujGesture,
  // ChieuchGesture,
  // KieukGesture,
  // TieutGesture,
  // PieupGesture,

  //모음
  AhGesture,
  YaGesture,
  // oGesture,
  AeGesture,
  YaeGesture, 
  IGesture,
  EuGesture,
  UGesture,
  YuGesture,
  EoGesture,
  YeoGesture,
  EGesture,
  YeGesture,
};

export { CustomGestures, GE };
