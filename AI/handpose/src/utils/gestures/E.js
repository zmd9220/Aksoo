import {
Finger,
FingerCurl,
FingerDirection,
GestureDescription,
} from "fingerpose";

const E = new GestureDescription("E");

// Thumb
E.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
E.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);


// Index
E.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
// E.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);
// E.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);

// Pinky
E.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

// Remaining fingers
for (let finger of [Finger.Middle, Finger.Ring]) {
E.addCurl(finger, FingerCurl.FullCurl, 1.0);
E.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
E.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
}

// // Assign additional weight to the index finger
// E.setWeight(Finger.Index, 2.0);

export default E;
        