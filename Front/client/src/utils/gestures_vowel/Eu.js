import {
Finger,
FingerCurl,
FingerDirection,
GestureDescription,
} from "fingerpose";

const Eu = new GestureDescription("Eu");

// Thumb
Eu.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.2);
Eu.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
Eu.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);

// Index
Eu.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
Eu.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

// Remaining fingers
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
Eu.addCurl(finger, FingerCurl.FullCurl, 1.0);
Eu.addDirection(finger, FingerDirection.DiagonalUpRight, 0.5);
Eu.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
}

// Assign additional weight to the index finger
Eu.setWeight(Finger.Index, 2.0);

export default Eu;
  