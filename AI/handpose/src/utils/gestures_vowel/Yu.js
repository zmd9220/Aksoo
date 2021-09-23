import {
    Finger,
    FingerCurl,
    FingerDirection,
    GestureDescription,
    } from "fingerpose";
    
    const Yu = new GestureDescription("Yu");
    
    // Thumb
    Yu.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.2);
    Yu.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
    Yu.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
    
    // Index
    Yu.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
    Yu.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.8);
    Yu.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);
    Yu.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.8);
    Yu.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 0.8);

    // Middle
    Yu.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
    Yu.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.8);
    Yu.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);
    Yu.addDirection(Finger.Middle, FingerDirection.DiagonalDownRight, 0.8);
    Yu.addDirection(Finger.Middle, FingerDirection.DiagonalDownLeft, 0.8);    
    
    // Remaining fingers
    for (let finger of [Finger.Ring, Finger.Pinky]) {
    Yu.addCurl(finger, FingerCurl.FullCurl, 1.0);
    }
    
    // Assign additional weight to the index finger
    // Yu.setWeight(Finger.Index, 2.0);
    
    export default Yu;
        