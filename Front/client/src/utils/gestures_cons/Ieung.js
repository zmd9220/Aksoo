 import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const ieung = new GestureDescription("ieung");
// Middle
ieung.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
ieung.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
ieung.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.5);
ieung.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.5);

// Ring
ieung.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
ieung.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
ieung.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.5);
ieung.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.5);

// Pinky
ieung.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
ieung.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
ieung.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.5);
ieung.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.5);


// Remaining fingers
ieung.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
ieung.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
ieung.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);


export default ieung;
