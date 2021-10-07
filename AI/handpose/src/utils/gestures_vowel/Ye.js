import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const Ye = new GestureDescription("Ye");

// Thumb
Ye.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
Ye.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
// Ye.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 0.5);
// Ye.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 0.5);


// Index
Ye.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
// Ye.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
Ye.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);

// Middle
Ye.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
// Ye.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);


// Remaining fingers
Ye.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
Ye.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);
Ye.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);

Ye.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
// Ye.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 1.0);


// // Assign additional weight to the index finger
// Ye.setWeight(Finger.Ring, 2.0);
// Ye.setWeight(Finger.Pinky, 2.0);

export default Ye;

