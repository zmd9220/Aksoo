 import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const giyeog = new GestureDescription("giyeog");

// Thumb
giyeog.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.2);
giyeog.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
giyeog.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);

// Index
giyeog.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
giyeog.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);
giyeog.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 0.5);
giyeog.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.5);

// Remaining fingers
giyeog.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
giyeog.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
giyeog.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

// Assign additional weight to the index finger
giyeog.setWeight(Finger.Index, 2.0);

export default giyeog;
