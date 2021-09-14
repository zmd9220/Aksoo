// import PointingLeftGesture from "./PointingLeft";
// import PointingRightGesture from "./PointingRight";
import PointingUpwardsGesture from "./PointingUpwards";
import ThumbsDownGesture from "./ThumbsDown";

import GiyeogGesture from "./Giyeog";
import NieunGesture from "./Nieun";
import DigeudGesture from "./Digeud";



import { Gestures, GestureEstimator } from "fingerpose";

// Initialise the estimator
const GE = new GestureEstimator([
  Gestures.VictoryGesture,
  Gestures.ThumbsUpGesture,
  // PointingLeftGesture,
  // PointingRightGesture,
  PointingUpwardsGesture,
  ThumbsDownGesture,

  GiyeogGesture, 
  NieunGesture,
  DigeudGesture,

]);

const CustomGestures = {
  // PointingLeftGesture,
  // PointingRightGesture,
  PointingUpwardsGesture,
  ThumbsDownGesture,

  GiyeogGesture,
  NieunGesture,
  DigeudGesture,


};

export { CustomGestures, GE };
