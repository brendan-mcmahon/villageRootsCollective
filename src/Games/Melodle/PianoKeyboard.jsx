import { melody } from "./melody";
import { Key } from "./Key";
import { getRange } from "./keyboard";

export function PianoKeyboard(props) {
    const range = getRange(melody.notes.filter((n) => n.pitch !== null).map((n) => n.pitch));

    const getKeyboard = () => {
        let columnStart = 1;
        return range.notes.map((n, i) => {
            const width = i === 0 ? n.firstPositionWidth : n.width;
            let columnEnd = columnStart + width;
            const noteName = melody.accidentals === "flat" ? n.enharmonic ?? n.name : n.name;

            var key = (
                <Key
                    key={noteName}
                    noteName={noteName}
                    columnStart={columnStart}
                    columnEnd={columnEnd}
                    keyPress={props.onKeyPress} />
            );

            columnStart += width - n.overlap;
            return key;
        });
    };

    return (
        <div
            className="piano"
            style={{
                gridTemplateColumns: range.gridTemplateColumns,
            }}
        >
            {getKeyboard()}
        </div>
    );
}
