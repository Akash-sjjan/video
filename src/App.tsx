import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigation = useNavigate()

  return (
    <div className="App">
      <button onClick={() => {
        localStorage.setItem('url', 'https://test-videos.co.uk/vids/bigbuckbunny/webm/vp8/360/Big_Buck_Bunny_360_10s_1MB.webm');
        localStorage.setItem('urll', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4');
        navigation('/Trigger')
      }}>Link</button>
    </div>
  );
}

export default App;

// import React, { useRef } from 'react'
// import "./App.css";
// import useVideoPlayer from "./hooks/useVideoPlayer";

// function App() {
//   const videoElement = useRef(null);
//   const {
//     playerState,
//     togglePlay,
//     handleOnTimeUpdate,
//     handleVideoProgress,
//     handleVideoSpeed,
//     toggleMute,
//   } = useVideoPlayer(videoElement);
//   return (
//     <div className="container">
//       <div className="video-wrapper">
//         <video
//           src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
//           ref={videoElement}
//           onTimeUpdate={handleOnTimeUpdate}
//           autoPlay
//         />
//         <div className="controls">
//           <div className="actions">
//             <button onClick={togglePlay}>
//               {!playerState.isPlaying ? (
//                 <i className="bx bx-play"></i>
//               ) : (
//                 <i className="bx bx-pause"></i>
//               )}
//             </button>
//           </div>
//           <input
//             type="range"
//             min="0"
//             max="100"
//             value={playerState.progress}
//             onChange={(e) => handleVideoProgress(e)}
//           />
//           <select
//             className="velocity"
//             value={playerState.speed}
//             onChange={(e) => handleVideoSpeed(e)}
//           >
//             <option value="0.50">0.50x</option>
//             <option value="1">1x</option>
//             <option value="1.25">1.25x</option>
//             <option value="2">2x</option>
//           </select>
//           <button className="mute-btn" onClick={toggleMute}>
//             {!playerState.isMuted ? (
//               <i className="bx bxs-volume-full"></i>
//             ) : (
//               <i className="bx bxs-volume-mute"></i>
//             )}
//           </button>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default App
