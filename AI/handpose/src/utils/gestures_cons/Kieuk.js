import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const kieuk = new GestureDescription("kieuk");
// Thumb
kieuk.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
kieuk.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);
kieuk.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 0.5);
kieuk.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 0.5);


// Middle
kieuk.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
kieuk.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);
kieuk.addDirection(Finger.Middle, FingerDirection.DiagonalDownLeft, 0.5);
kieuk.addDirection(Finger.Middle, FingerDirection.DiagonalDownRight, 0.5);


// Remaining fingers
kieuk.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
kieuk.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
kieuk.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);


export default kieuk;
