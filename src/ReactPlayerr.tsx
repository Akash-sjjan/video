import React, { useState } from "react";
import ReactPlayer from "react-player";

function ReactPlayerr({ url }: any) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <video src={url} autoPlay style={{ width: "105%" }} />
      {/* <ReactPlayer url={url} playing={true} controls={true} loop={true} muted={true} playsinline={true} onReady={onLoadedData} /> */}
    </div>
  );
}

export default ReactPlayerr;
