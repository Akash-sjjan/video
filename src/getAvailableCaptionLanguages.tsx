import { VideoJsPlayer } from "video.js";

export function getAvailableCaptionLanguages(player: VideoJsPlayer) {
    const textTracks = player.textTracks();
    const captions = Array.from(textTracks).filter(
        (tr) => tr.kind === "captions",
    );
    const availableLanguages = captions.map(({ language, label, mode }) => ({
        language,
        label,
        mode: mode as string,
    }));
    return availableLanguages;
}
