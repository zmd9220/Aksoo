 import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const sios = new GestureDescription("sios");

// Index
sios.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
sios.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);
sios.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 0.5);
sios.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.5);

// Middle
sios.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
sios.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);
sios.addDirection(Finger.Middle, FingerDirection.DiagonalDownLeft, 0.5);
sios.addDirection(Finger.Middle, FingerDirection.DiagonalDownRight, 0.5);


// Remaining fingers
sios.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
sios.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
sios.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);


export default sios;
