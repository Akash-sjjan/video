import React from "react";
import ReactVideoJS from "./ReactVideoJS";

const url = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

function Trigger() {
  return (
    <div style={{ marginLeft: "17vw", marginRight: "17vw", borderRadius: "10em" }}>
      <ReactVideoJS url={url} />
    </div>
  );
}

export default Trigger;
