import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Video from "./Video";
import ReactVideoJS from "./ReactVideoJS";
import Trigger from "./Trigger";
import LiveWebinar from "./LiveWebinar";

const url = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
const urll = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/Video" element={<Video />}></Route>
        <Route path="/ReactVideoJS" element={<ReactVideoJS url={urll} />}></Route>
        <Route path="/Trigger" element={<Trigger />}></Route>
        <Route path="/LiveWebinar" element={<LiveWebinar />}></Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
