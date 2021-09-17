 import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const lieul = new GestureDescription("lieul");

// Index
lieul.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
lieul.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

// Middle
lieul.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
lieul.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);

// Ring
lieul.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
lieul.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);



// Remaining fingers
lieul.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
lieul.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);



export default lieul;
