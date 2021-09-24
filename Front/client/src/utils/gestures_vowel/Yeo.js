import {
Finger,
FingerCurl,
FingerDirection,
GestureDescription,
} from "fingerpose";

const Yeo = new GestureDescription("Yeo");

// Thumb
Yeo.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
Yeo.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);


// Index
Yeo.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
// Yeo.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);
// Yeo.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);

// Middle
Yeo.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);

// Remaining fingers
for (let finger of [Finger.Ring, Finger.Pinky]) {
Yeo.addCurl(finger, FingerCurl.FullCurl, 1.0);
Yeo.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
Yeo.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
}

// // Assign additional weight to the index finger
// Yeo.setWeight(Finger.Index, 2.0);

export default Yeo;
              