import {
    Finger,
    FingerCurl,
    FingerDirection,
    GestureDescription,
  } from "fingerpose";
  
  const Change = new GestureDescription("Change");
  
//   // Index
  Change.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);

  
//   // Middle
//   Change.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);

  
//   // Ring
//   Change.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);

  
//   // Pinky
//   Change.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
 
  
  // Remaining fingers
  Change.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
  Change.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);
  Change.setWeight(Finger.Thumb, 2.0);

  export default Change;