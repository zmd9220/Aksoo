 import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const bieub = new GestureDescription("bieub");

// Index
bieub.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
bieub.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
bieub.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.5);
bieub.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.5);

// Middle
bieub.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
bieub.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
bieub.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.5);
bieub.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.5);

// Ring
bieub.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
bieub.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
bieub.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.5);
bieub.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.5);

// Pinky
bieub.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
bieub.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
bieub.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.5);
bieub.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.5);


// Remaining fingers
bieub.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);


export default bieub;
