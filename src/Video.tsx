import "./styles.css";
import React, { useMemo, useState } from "react";
import { VideoJsPlayerOptions } from "video.js";
import { VideoPlayer } from "./VideoPlayer";
import { PlayerState } from "./PlayerState";
import { v4 as uuid } from "uuid";

function Video() {

    const [videoState, setVideoState] = useState<PlayerState>();
    // const [showVid, setShowVid] = useState(true);
    // const [url, setUrl] = useState(
    //   "//cdn-media.outthink.io/2c1bf929-fa79-4703-96cc-d111d890835d/Remote Working 2_ITVO.ism/manifest(format=mpd-time-csf)",
    // );
    const ur = localStorage.getItem('url')
    const [uid, setUid] = React.useState(uuid());
    const [url, setUrl] = React.useState<any>(null)
    const [showVid, setShowVid] = React.useState<any>(null)
    const sourceAndTrackOptions: Pick<
        VideoJsPlayerOptions,
        "sources" | "tracks"
    > = useMemo(

        () => (

            {
                sources: [
                    {
                        src:
                            "https://test-videos.co.uk/vids/bigbuckbunny/webm/vp8/360/Big_Buck_Bunny_360_10s_1MB.webm",

                    }

                ],
                tracks: [

                ],
            }),
        [],
    );
    const videoJsBaseOptions: Omit<
        VideoJsPlayerOptions,
        "sources" | "tracks"
    > = useMemo(() => {
        const opts: Omit<VideoJsPlayerOptions, "sources" | "tracks"> = {
            preload: "auto",
            autoplay: true,
            controls: true,
            responsive: true,
            fluid: true,
            //defaultVolume: 0,
            controlBar: {
                pictureInPictureToggle: false,
            },
            muted: false,
        };
        return opts;
    }, []);

    const videoJsOptions: VideoJsPlayerOptions = useMemo(
        () => ({
            ...videoJsBaseOptions,
            ...sourceAndTrackOptions,
        }),
        [videoJsBaseOptions, sourceAndTrackOptions, uid],
    );

    // const playStateChanged = useCallback(
    //   (state: PlayerState): void => setVideoState(state),
    //   [],
    // );
    const [captionLanguage, setCaptionLanguage] = useState<string>();
    return (
        <div className="App">
            <h1>VideoJS Test</h1>
            <div style={{ maxWidth: "700px" }}>
                <VideoPlayer
                    options={videoJsOptions}
                    onPlayerStateChanged={(state: PlayerState): void =>
                        setVideoState(state)
                    }
                    onCaptionLanguageChanged={(lang) => setCaptionLanguage(lang)}
                    captionLanguage={captionLanguage}
                />
            </div>

            <button type="button" onClick={() => setUid(uuid())}>
                reset options
            </button>
            <button
                type="button"
                onClick={() => {
                    return setCaptionLanguage(
                        captionLanguage === "en"
                            ? undefined
                            : captionLanguage === "no"
                                ? "en"
                                : "no",
                    );
                }}
            >
                toggle lang
            </button>
            <button
                type="button"
                onClick={() =>
                    setUrl(
                        url.startsWith("https")
                            ? "//cdn-media.outthink.io/77979f46-1a1e-4313-ac73-168f145bf101/Breach Response 2.ism/manifest(format=mpd-time-csf)"
                            : "https://cdn-media.outthink.io/77979f46-1a1e-4313-ac73-168f145bf101/Breach Response 2.ism/manifest(format=mpd-time-csf)",
                    )
                }
            >
                toggle
            </button>
            <button
                type="button"
                onClick={() => {
                    setShowVid(!showVid);
                }}
            >
                {showVid ? "hide" : "show"}
            </button>
            <pre>{JSON.stringify(videoState, null, 2)}</pre>
        </div>
    )
}

export default Video