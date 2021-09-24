 import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const nieun = new GestureDescription("nieun");

// Thumb
nieun.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.2);
nieun.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
nieun.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);

// Index
nieun.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
nieun.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

// Remaining fingers
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  nieun.addCurl(finger, FingerCurl.FullCurl, 1.0);
  nieun.addDirection(finger, FingerDirection.DiagonalUpRight, 0.5);
  nieun.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
}

// Assign additional weight to the index finger
nieun.setWeight(Finger.Index, 2.0);

export default nieun;
