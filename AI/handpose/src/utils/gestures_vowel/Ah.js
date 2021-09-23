import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const Ah = new GestureDescription("Ah");

// Index
Ah.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
Ah.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
Ah.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.5);
Ah.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.5);

// Remaining fingers
Ah.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
Ah.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.7);
Ah.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
Ah.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
Ah.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);


export default Ah;
