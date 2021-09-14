/**
 * This file defines a pointing-to-the-right gesture (👉).
 */
 import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const digeud = new GestureDescription("digeud");

// Middle
digeud.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
digeud.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);

// Index
digeud.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
digeud.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);


// Remaining fingers
for (let finger of [Finger.Thumb, Finger.Ring, Finger.Pinky]) {
  digeud.addCurl(finger, FingerCurl.FullCurl, 1.0);
  digeud.addDirection(finger, FingerDirection.DiagonalUpRight, 0.5);
  digeud.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
}

// Assign additional weight to the index finger
digeud.setWeight(Finger.Index, 2.0);
digeud.setWeight(Finger.Middle, 2.0);

export default digeud;
