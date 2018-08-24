What a fantastic library dude!  I’m documenting my notes here so I can come back and help once I have the presentation 100%.  Don’t wait for me if you want to fix any of this.
*Notes:*
* isStarted/isCameraFront -> could become simply `started` and `cameraFront`
* Setting height to 80% on RNVCameraView passes the prop down to make the camera 80% of the containing view.  To shrink to 80% I had to wrap the whole view at 100% inside of a view at 80%.
* Friendly message when permission fails, rather than crash
