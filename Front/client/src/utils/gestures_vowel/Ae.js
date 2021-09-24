import {
Finger,
FingerCurl,
FingerDirection,
GestureDescription,
} from "fingerpose";

const Ae = new GestureDescription("Ae");

// Index
Ae.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
Ae.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
Ae.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.5);
// Ae.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.5);

// Pinkey
Ae.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
Ae.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
Ae.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.5);

// Remaining fingers
Ae.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
// Ae.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
Ae.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
Ae.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);

Ae.setWeight(Finger.Middle, 2.0);

export default Ae;
  