import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
  } from "fingerpose";
  
  const Wi = new GestureDescription("Wi");
  
  // Thumb
  Wi.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.2);
  Wi.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
  Wi.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
  
  // Index
  Wi.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
  Wi.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.8);
  Wi.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);
  Wi.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.8);
  Wi.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 0.8);
  
  // Pinky
  Wi.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
  Wi.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.8);
  Wi.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 1.0);
  Wi.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 0.8);
  Wi.addDirection(Finger.Pinky, FingerDirection.DiagonalDownLeft, 0.8);

  // Remaining fingers
  for (let finger of [Finger.Middle, Finger.Ring]) {
  Wi.addCurl(finger, FingerCurl.FullCurl, 1.0);
  }
  
  // Assign additional weight to the index finger
  Wi.setWeight(Finger.Index, 2.0);
  
  export default Wi;
      