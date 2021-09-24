import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const tieut = new GestureDescription("tieut");

// Index
tieut.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
tieut.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);


// Middle
tieut.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
tieut.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);
tieut.addDirection(Finger.Middle, FingerDirection.DiagonalDownRight, 0.5);

// Ring
tieut.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
tieut.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);
tieut.addDirection(Finger.Ring, FingerDirection.DiagonalDownRight, 0.5);


// Remaining fingers
for (let finger of [Finger.Thumb, Finger.Pinky]) {
  tieut.addCurl(finger, FingerCurl.FullCurl, 1.0);
}



export default tieut;
