import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const chieuch = new GestureDescription("chieuch");
// Thumb
chieuch.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
chieuch.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);
chieuch.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 0.5);
chieuch.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 0.5);


// Index
chieuch.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
chieuch.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);
chieuch.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 0.5);
chieuch.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.5);

// Middle
chieuch.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
chieuch.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);
chieuch.addDirection(Finger.Middle, FingerDirection.DiagonalDownLeft, 0.5);
chieuch.addDirection(Finger.Middle, FingerDirection.DiagonalDownRight, 0.5);

// Ring
chieuch.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
chieuch.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1.0);
chieuch.addDirection(Finger.Ring, FingerDirection.DiagonalDownLeft, 0.5);
chieuch.addDirection(Finger.Ring, FingerDirection.DiagonalDownRight, 0.5);

// Remaining fingers
chieuch.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);


export default chieuch;
