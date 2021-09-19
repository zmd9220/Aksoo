 import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const mieum = new GestureDescription("mieum");

// Index
mieum.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
mieum.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
mieum.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.5);
mieum.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.5);

// Middle
mieum.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
mieum.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
mieum.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.5);
mieum.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.5);


// Remaining fingers
mieum.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
mieum.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
mieum.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);



export default mieum;
