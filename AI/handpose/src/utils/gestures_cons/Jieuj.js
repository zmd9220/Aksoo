import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const jieuj = new GestureDescription("jieuj");
// Thumb
jieuj.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
jieuj.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);
jieuj.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 0.5);
jieuj.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 0.5);


// Index
jieuj.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
jieuj.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);
jieuj.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 0.5);
jieuj.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.5);

// Middle
jieuj.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
jieuj.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);
jieuj.addDirection(Finger.Middle, FingerDirection.DiagonalDownLeft, 0.5);
jieuj.addDirection(Finger.Middle, FingerDirection.DiagonalDownRight, 0.5);


// Remaining fingers
jieuj.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
jieuj.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);


export default jieuj;
