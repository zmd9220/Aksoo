import GiyeogGesture from "./Giyeog";
import NieunGesture from "./Nieun";
import DigeudGesture from "./Digeud";
import LieulGesture from "./Lieul";
import MieumGesture from "./Mieum";
import BieubGesture from "./Bieub";
import SiosGesture from "./Sios";
import IeungGesture from "./Ieung";
import JieujGesture from "./Jieuj";
import ChieuchGesture from "./Chieuch";
import KieukGesture from "./Kieuk";
import TieutGesture from "./Tieut";
import PieupGesture from "./Pieup";
import AhGesture from "./Ah";
import YaGesture from "./Ya";

import { Gestures, GestureEstimator } from "fingerpose";

// Initialise the estimator
const GE = new GestureEstimator([
  // 자음
  Gestures.ThumbsUpGesture, // 히읗
  GiyeogGesture, 
  NieunGesture,
  DigeudGesture,
  LieulGesture,
  MieumGesture,
  BieubGesture,
  SiosGesture,
  IeungGesture,
  JieujGesture,
  ChieuchGesture,
  KieukGesture,
  TieutGesture,
  PieupGesture,

  // 모음
  AhGesture,
  YaGesture,
  Gestures.VictoryGesture, // 야
]);

const CustomGestures = {
  // 자음
  GiyeogGesture,
  NieunGesture,
  DigeudGesture,
  LieulGesture,
  MieumGesture,
  BieubGesture,
  SiosGesture,
  IeungGesture,
  JieujGesture,
  ChieuchGesture,
  KieukGesture,
  TieutGesture,
  PieupGesture,

  //모음
  AhGesture,
  YaGesture,

};

export { CustomGestures, GE };
