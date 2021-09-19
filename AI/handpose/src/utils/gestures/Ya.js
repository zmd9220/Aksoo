import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const ya = new GestureDescription("ya");

// Index
ya.addCurl(Finger.Index, FingerCurl.NoCurl, 0.5);
ya.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
ya.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.5);
ya.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.5);

// Middle
ya.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
ya.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
ya.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.5);
ya.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.5);

// Remaining fingers
ya.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
ya.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
ya.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);


export default ya;
