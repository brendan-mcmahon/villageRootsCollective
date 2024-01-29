

export function Key(props) {
  const isBlackNote = props.noteName.includes("b") || props.noteName.includes("#");

  return (
    <button
      id={props.noteName}
      className={`key ${isBlackNote ? "black" : "white"}`}
      style={{ gridColumnStart: props.columnStart, gridColumnEnd: props.columnEnd }}
      onClick={() => props.keyPress(props.noteName)}
    >
      {props.noteName.substring(0, props.noteName.length - 1)}
    </button>
  );
}
