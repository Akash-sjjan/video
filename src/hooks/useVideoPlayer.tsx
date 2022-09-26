import moment from "moment";
import { useState, useEffect } from "react";

const useVideoPlayer = (videoElement: any) => {
  const [playerState, setPlayerState] = useState({
    isPlaying: true,
    progress: 0,
    speed: 1,
    isMuted: false,
    currentTime: "",
    totalTime: "",
  });

  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
  };

  useEffect(() => {
    playerState.isPlaying ? videoElement.current.play() : videoElement.current.pause();
  }, [playerState.isPlaying, videoElement]);

  const handleOnTimeUpdate = () => {
    const progress = (videoElement.current.currentTime / videoElement.current.duration) * 100;
    setPlayerState({
      ...playerState,
      progress,
    });
    // videoElement.current.volume = 0.5
    // console.log(videoElement.current.seek)
    const currC = parseInt(videoElement.current.currentTime);
    const curr = moment.utc(currC * 1000).format("mm:ss");
    const endC = parseInt(videoElement.current.duration);
    const end = moment.utc(endC * 1000).format("mm:ss");
    setPlayerState({
      ...playerState,
      currentTime: curr,
      totalTime: end,
    });
    // console.log(playerState.currentTime);
    // console.log(playerState.totalTime);

    // console.log('progress', progress, 'currentTime', videoElement.current.currentTime, 'duration', videoElement.current.duration, 'remaining', videoElement.current.duration - videoElement.current.currentTime, 'volume', videoElement.current.volume)
  };

  const handleVideoProgress = (event: any) => {
    const manualChange = Number(event.target.value);
    videoElement.current.currentTime = 53;
    // (videoElement.current.duration / 100) * manualChange;
    setPlayerState({
      ...playerState,
      progress: 53,
    });
    console.log(event.target.value);
  };
  const toggleFullscreen = () => {
    if (videoElement.current) {
      videoElement.current.webkitEnterFullscreen();
    }
  };
  const handleVideoSpeed = (event: any) => {
    const speed = Number(event.target.value);
    videoElement.current.playbackRate = speed;
    setPlayerState({
      ...playerState,
      speed,
    });
  };

  const toggleMute = () => {
    setPlayerState({
      ...playerState,
      isMuted: !playerState.isMuted,
    });
  };

  const scrub = (e: any) => {
    setPlayerState({
      ...playerState,
      isPlaying: false,
    });
    console.log("Trig", e.nativeEvent.offsetX);
    console.log("duration", videoElement.current.duration);
    console.log("currentTime", videoElement.current.currentTime);
    const per = (e.nativeEvent.offsetX * 100) / 1250;

    const scrubTime = (e.nativeEvent.offsetX / videoElement.current.currentTime) * videoElement.current.duration;

    setPlayerState({
      ...playerState,
      progress: per,
    });

    console.log(scrubTime);
    console.log("Percentage", per);
    const set = (per * videoElement.current.duration) / 100;
    videoElement.current.currentTime = set;
    console.log(set);
  };

  useEffect(() => {
    playerState.isMuted ? (videoElement.current.muted = true) : (videoElement.current.muted = false);
  }, [playerState.isMuted, videoElement]);

  return {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
    scrub,
    toggleFullscreen,
  };
};

export default useVideoPlayer;
