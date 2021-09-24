import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
  } from "fingerpose";
  
  const Ui = new GestureDescription("Ui");
  
  // Thumb
  Ui.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.2);
  Ui.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
  Ui.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
  
  // Index
  Ui.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
  Ui.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);
  
  // Pinky
  Ui.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
  Ui.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 1.0);

  // Remaining fingers
  for (let finger of [Finger.Middle, Finger.Ring]) {
  Ui.addCurl(finger, FingerCurl.FullCurl, 1.0);
  Ui.addDirection(finger, FingerDirection.DiagonalUpRight, 0.5);
  Ui.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
  }
  
  // Assign additional weight to the index finger
  Ui.setWeight(Finger.Index, 2.0);
  Ui.setWeight(Finger.Pinky, 2.0);
  export default Ui;
    