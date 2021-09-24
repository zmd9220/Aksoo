import {
Finger,
FingerCurl,
FingerDirection,
GestureDescription,
} from "fingerpose";

const O = new GestureDescription("O");

// Index
O.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
O.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
O.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.5);
O.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.5);

// Remaining fingers
O.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
O.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.7);
O.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
O.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
O.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);


export default O;
  