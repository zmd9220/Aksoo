import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const pieup = new GestureDescription("pieup");

// Thumb
pieup.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
pieup.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
pieup.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.5);
pieup.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 0.5);

// Index
pieup.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
pieup.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
pieup.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.5);
pieup.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.5);

// Middle
pieup.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
pieup.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
pieup.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.5);
pieup.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.5);

// Ring
pieup.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
pieup.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
pieup.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.5);
pieup.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.5);

// Pinky
pieup.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);
pieup.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
pieup.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.5);
pieup.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.5);




export default pieup;
