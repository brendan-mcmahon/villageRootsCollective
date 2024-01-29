export function Squares(props) {
//   const height = `calc(80cqw / ${props.melodyLength})`;
  const gridTemplateColumns = `repeat(${props.melodyLength}, 1fr`;
  const gridTemplateRows = `repeat(6, 1fr)`;

  const isCurrentSquare = (i) => {
    return props.cursor.index === i;
  };

  const squareClass = (i) => {
    let _class = "square";
    const row = props.guesses[Math.floor(i / props.melodyLength)];
    const guess = row[i % props.melodyLength];
    if (guess) {
      if (isCurrentSquare(i)) _class += " current";
      if (guess.status) _class += ` ${guess.status}`;
    }

    return _class;
  };

  return (
    <div
      id="squares"
      className="squares"
      style={{
        gridTemplateColumns,
        gridTemplateRows,
      }}
    >
      {props.guesses.flat().map((guess, i) => (
        <div
          key={i}
          className={squareClass(i)}
          style={{
            // height: height,
            fontSize: "2rem",
          }}
        >
          <span className="guess">{guess?.note?.slice(0, -1)}</span>
        </div>
      ))}
    </div>
  );
}
