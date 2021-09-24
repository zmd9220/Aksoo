import {
Finger,
FingerCurl,
FingerDirection,
GestureDescription,
} from "fingerpose";

const yo = new GestureDescription("yo");

// Index
yo.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
yo.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.9);
yo.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.7);


// Middle
yo.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
yo.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.9);
yo.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.7);

// Remaining fingers
yo.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
yo.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.7);
yo.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
yo.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);


export default yo;
  
  