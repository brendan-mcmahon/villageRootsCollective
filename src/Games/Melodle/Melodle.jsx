import { useState, useEffect } from "react";
import "./Melodle.scss";
import { melody } from "./melody";
import * as Tone from "tone";
import useCursor from "./useCursor";
import { Squares } from "./Squares";
import { PlayButton } from "./PlayButton";
import { DeleteButton } from "./DeleteButton";
import { PianoKeyboard } from "./PianoKeyboard";
import MelodleSettings from "./MelodleSettings";
import { getScores, save } from "./storage";

const allowedAttempts = 6;

const justDate = (date) => {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
};

const copyGuesses = (arr) => {
  return arr.map((row) => row.map((item) => ({ ...item })));
};

const Melodle = () => {
  const melodyLength = melody.notes.filter((n) => !!n.pitch).length;
  const cursor = useCursor(allowedAttempts, melodyLength);
  const [showSettingsModal, setShowSettingsModal] = useState(true);
  const [settings, setSettings] = useState({ difficulty: "easy" });
  const [guesses, setGuesses] = useState(
    Array.from({ length: allowedAttempts }, () =>
      Array.from({ length: melodyLength }, () => ({ note: null, status: "undetermined" }))
    )
  );
  const [gameOverStatus, setGameOverStatus] = useState(null);
  const synth = new Tone.Synth().toDestination();
  const readyToSubmit = gameOverStatus === null && guesses[cursor.row].every((guess) => guess?.note !== null);

  useEffect(() => {
    const scores = getScores();
    const today = justDate(new Date());
    const todaysScore = scores.filter((s) => s.date === today)[0];

    if (todaysScore) {
      setShowSettingsModal(false);
      setGuesses(copyGuesses(todaysScore.guesses));
      setGameOverStatus(todaysScore.gameOverStatus);
    }
  }, []);

  const onKeyPress = (note) => {
    if (readyToSubmit || gameOverStatus !== null) return;

    synth.triggerAttackRelease(note, "8n");

    const newGuesses = [...guesses];
    newGuesses[cursor.row][cursor.column] = { note, status: "undetermined" };
    setGuesses(newGuesses);
    cursor.nextColumn();
  };

  const onDelete = () => {
    if (gameOverStatus !== null) return;

    if (cursor.column === 0) return;

    const newGuesses = [...guesses];
    if (cursor.column === melodyLength - 1 && guesses[cursor.row][cursor.column]?.note !== null) {
      newGuesses[cursor.row][cursor.column] = { note: null, status: "undetermined" };
    } else {
      newGuesses[cursor.row][cursor.column - 1] = { note: null, status: "undetermined" };
      cursor.previousColumn();
    }
    setGuesses(newGuesses);
    return;
  };

  const onSubmit = () => {
    const newGuesses = copyGuesses(guesses);

    const realMelody = melody.notes.filter((n) => !!n.pitch).map((n) => n.pitch);

    newGuesses[cursor.row].forEach((guess, i) => {
      if (guess.note === realMelody[i]) {
        guess.status = "correct";
      } else if (realMelody.includes(guess.note)) {
        guess.status = "wrongPosition";
      } else {
        guess.status = "incorrect";
      }
    });

    setGuesses(newGuesses);

    if (newGuesses[cursor.row].every((guess) => guess.status === "correct")) {
      setGameOverStatus("You win!");
      save({
        date: justDate(new Date()),
        difficulty: settings.difficulty,
        guesses: newGuesses,
        melody,
        gameOverStatus: "You win!",
      });
    } else {
      if (cursor.row === allowedAttempts - 1) {
        setGameOverStatus("You lose!");
        save({ difficulty: settings.difficulty, guesses: newGuesses, melody, gameOverStatus: "You lose!" });
      } else {
        cursor.nextRow();
      }
    }
  };

  return (
    <div id="melodle" className="game-container-container">
      <MelodleSettings
        show={showSettingsModal}
        close={() => setShowSettingsModal(false)}
        settings={settings}
        setSettings={setSettings}
      />
      <div className="game-container">
        <header>
          <h1>Melodle</h1>
          {gameOverStatus && <h2>{gameOverStatus}</h2>}
          <PlayButton synth={synth} />
        </header>

        <Squares guesses={guesses} melodyLength={melodyLength} cursor={cursor} readyToSubmit={readyToSubmit} />

        <PianoKeyboard onKeyPress={onKeyPress} />

        <div className="buttons">
          {settings.difficulty === "easy" ? <DeleteButton onDelete={onDelete} /> : <div></div>}
          <button disabled={!readyToSubmit} id="submit" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Melodle;
