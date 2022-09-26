import { CaptionLanguage } from "./CaptionLanguage";
export interface PlayerState {
    currentTime: number;
    canPlayThrough: boolean;
    seeking: boolean;
    playing: boolean;
    aboutToPlay: boolean;
    paused: boolean;
    stalled: boolean;
    waiting: boolean;
    ready: boolean;
    ended: boolean;
    captionLanguages: CaptionLanguage[];
}
