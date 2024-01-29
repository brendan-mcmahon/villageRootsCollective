import { playMelody } from "./playMelody";

export function PlayButton(props) {
    return (
        <button id="playButton" className="btn-icon" onClick={() => playMelody(props.synth, props.melody)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="-2 -2 28 28">
                <path
                    stroke="none"
                    fillRule="evenodd"
                    d="M 0 12 A 12 12 0 1 0 24 12 A 12 12 0 1 0 0 12 Z M 10 8 L 10 16 L 16 12 L 10 8 Z" />
            </svg>
        </button>
    );
}
