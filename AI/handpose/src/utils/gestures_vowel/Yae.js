import {
Finger,
FingerCurl,
FingerDirection,
GestureDescription,
} from "fingerpose";

const Yae = new GestureDescription("Yae");

// Index
Yae.addCurl(Finger.Index, FingerCurl.NoCurl, 0.8);
// Yae.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.5);
// Yae.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.5);

// Middle
Yae.addCurl(Finger.Middle, FingerCurl.NoCurl, 0.8);
// Yae.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

// Pinkey
Yae.addCurl(Finger.Pinky, FingerCurl.NoCurl, 0.8);
// Yae.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.5);
Yae.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

// Remaining fingers
Yae.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.8);
// Yae.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.8);
Yae.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);

Yae.setWeight(Finger.Ring, 2.0);
Yae.setWeight(Finger.Pinky, 2.0);

export default Yae;
    