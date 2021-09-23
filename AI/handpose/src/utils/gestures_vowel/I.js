import {
Finger,
FingerCurl,
FingerDirection,
GestureDescription,
} from "fingerpose";

const I = new GestureDescription("I");

// Index
I.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
I.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
I.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.5);
I.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.5);

// Remaining fingers
I.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
I.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
I.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
I.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
I.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);


export default I;
  