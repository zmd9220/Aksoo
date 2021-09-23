import {
Finger,
FingerCurl,
FingerDirection,
GestureDescription,
} from "fingerpose";

const U = new GestureDescription("U");

// Thumb
U.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.2);
U.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
U.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);

// Index
U.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
U.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.8);
U.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);
U.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.8);
U.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 0.8);

// Remaining fingers
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
U.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

// Assign additional weight to the index finger
U.setWeight(Finger.Index, 2.0);

export default U;
    