 import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const digeud = new GestureDescription("digeud");

// Index
digeud.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
digeud.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

// Middle
digeud.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
digeud.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);


// Remaining fingers
for (let finger of [Finger.Thumb, Finger.Ring, Finger.Pinky]) {
  digeud.addCurl(finger, FingerCurl.FullCurl, 1.0);
}



export default digeud;
