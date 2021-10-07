import {
Finger,
FingerCurl,
FingerDirection,
GestureDescription,
} from "fingerpose";

const Eo = new GestureDescription("Eo");

// Thumb
Eo.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
Eo.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);


// Index
Eo.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
// Eo.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);
// Eo.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);

// Remaining fingers
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
Eo.addCurl(finger, FingerCurl.FullCurl, 1.0);
Eo.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
Eo.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
}

// // Assign additional weight to the index finger
// Eo.setWeight(Finger.Index, 2.0);

export default Eo;
      