import React, { useRef } from "react";
import "./video.css";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

import useVideoPlayer from "./hooks/useVideoPlayer";
import { fullscreen, play, volumeIcon } from "./assets";

const video = "";
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  prog: {
    // backgroundColor: 'red'

    "&.MuiLinearProgress-root": {
      height: "3px",
    },
    "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: "#ff0000",
    },
  },
});

const ReactVideoJS = ({ url }: any) => {
  const classes = useStyles();

  const videoElement = useRef(null);
  // const [url, setUrl] = React.useState<any>(null)
  // React.useEffect(() => {
  //     localStorage.getItem('url')
  // })
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
    scrub,
    toggleFullscreen,
  } = useVideoPlayer(videoElement);

  const [isMouseDown, setIsMouseDown] = React.useState<boolean>(false);

  const startMouseDown = (e: any) => {
    setIsMouseDown(true);
  };

  const endMouseDown = (e: any) => {
    setIsMouseDown(false);
  };

  return (
    <div className="container">
      <div className="video-wrapper">
        <video
          src={url}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
          onLoad={(e) => {
            console.log("onLoad", e);
          }}
          onCanPlay={(e) => {
            console.log("canPlay", e);
          }}
          onError={(e) => {
            console.log("onError", e);
          }}
          // onProgress={(e) => { console.log("buffer", e.target.buffered) }}
          // onLoadedData={(e) => { console.log("seek", e) }}
        >
          <script>var video = document.currentScript.parentElement; video.volume = 0.1;</script>
        </video>
        <div className="controls">
          <div style={{ width: "100%", flex: 10 }}>
            <button
              style={{ width: "100%", height: "100%", background: "transparent", borderWidth: "0px" }}
              onClick={togglePlay}
            ></button>
          </div>

          {/* <input
                        type="range"
                        min="0"
                        max="100"
                        value={playerState.progress}
                        onChange={(e) => handleVideoProgress(e)}
                    />
                    <input
                        type="range"
                        className="prog"
                        min="0"
                        max="1"
                        value={playerState.progress}
                    // onChange={console.log( value) }
                    // onRateChange
                    /> */}
          <div
            style={{
              width: "auto",
              flex: 1,
              height: "100%",
              paddingLeft: "1vw",
              paddingRight: "1vw",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
              }}
            >
              <LinearProgress
                className={classes.prog}
                variant="determinate"
                value={playerState.progress}
                onChange={(e: any) => {
                  console.log("MMPROG");
                }}
              />

              <div
                style={{
                  width: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  background: "transparent",
                }}
                className="progress"
                onMouseDown={startMouseDown}
                onMouseUp={endMouseDown}
                onMouseLeave={endMouseDown}
                onMouseMove={(e) => isMouseDown && scrub(e)}
                onClick={scrub}
              >
                <div
                  className="progress__filled"
                  style={{ flexBasis: playerState.progress, height: "3px", background: "transparent" }}
                ></div>
              </div>
            </div>
            <div
              className="control-btn-c"
              style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: "1vw" }}
            >
              <div
                className="control-left-c"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "0px",
                  }}
                  onClick={togglePlay}
                >
                  {!playerState.isPlaying ? (
                    <img src={volumeIcon} alt="" style={{ width: "1.3vw" }} />
                  ) : (
                    <img src={play} alt="" style={{ width: "1.3vw" }} />
                  )}
                </button>
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "0px",
                  }}
                  className="control-mute-btn"
                  onClick={toggleMute}
                >
                  {!playerState.isMuted ? (
                    <img src={volumeIcon} alt="" style={{ width: "1.3vw" }} />
                  ) : (
                    <img src={play} alt="" style={{ width: "1.3vw" }} />
                  )}
                </button>
                <p>{playerState.currentTime}</p>
                <p>{playerState.totalTime}</p>
              </div>
              <div
                className="control-right-c"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <select className="velocity" value={playerState.speed} onChange={(e) => handleVideoSpeed(e)}>
                  <option value="0.50">0.50x</option>
                  <option value="0.25">0.25x</option>
                  <option value="1">1x</option>
                  <option value="1.25">1.25x</option>
                  <option value="2">2x</option>
                </select>
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "0px",
                  }}
                  onClick={toggleFullscreen}
                >
                  <img src={fullscreen} alt="" style={{ width: "1.3vw" }} />
                </button>
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "0px",
                  }}
                  onClick={toggleFullscreen}
                >
                  <img src={fullscreen} alt="" style={{ width: "1.3vw" }} />
                </button>
              </div>
            </div>
          </div>
          {/* <div
                        className="progress__filled"
                        style={{ 'flexBasis': playerState.progress, height: '3px', background: 'red' }}
                    ></div> */}
          {/* <progress value={playerState.progress} /> */}
        </div>
      </div>
    </div>
  );
};

export default ReactVideoJS;
