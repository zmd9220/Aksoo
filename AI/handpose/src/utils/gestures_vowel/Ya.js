import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const Ya = new GestureDescription("Ya");

// Index
Ya.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
Ya.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
Ya.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.5);
Ya.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.5);

// Middle
Ya.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
Ya.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
// Ya.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.5);
// Ya.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.5);

// Remaining fingers
Ya.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
Ya.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
Ya.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);


export default Ya;
