import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const ah = new GestureDescription("ah");

// Index
ah.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
ah.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
ah.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.5);
ah.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.5);

// Remaining fingers
ah.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
ah.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
ah.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
ah.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
ah.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);


export default ah;
