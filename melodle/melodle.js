import { melodyForToday, solfegeLabels } from path.resolve(__dirname, "../melody.js");
import { colors } from path.resolve(__dirname, "../../styles.js");
import { save, getScores } from path.resolve(__dirname, "./storage.js");

const currentDate = new Date().toISOString().split("T")[0];

const synth = new Tone.Synth().toDestination();

let keyLabelType = "letters";

const guesses = [
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
];

const scoreArray = getScores();
var todaysScore = scoreArray.find((score) => score.date === currentDate);

if (todaysScore) {
  todaysScore.gameState.forEach((row, rowIndex) => {
    row.forEach((note, colIndex) => {
      if (note) {
        guesses[rowIndex][colIndex] = note;
        const row = document.getElementById(`row-${rowIndex + 1}`);
        const cell = row.children[colIndex];
        cell.innerHTML =
          keyLabelType === "letters" ? note.substring(0, note.length - 1) : solfegeLabels[keys.indexOf(note)];
      }
    });
  });
}

// settingsDialog.showModal();

// settingsDialog.addEventListener("close", function () {
//   var selectedMode = settingsDialog.querySelector('input[name="gameMode"]:checked').value;
//   var selectedLabels = settingsDialog.querySelector('input[name="labels"]:checked').value;

//   if (selectedMode === "hard") {
//     var deleteButton = document.getElementById("delete");
//     deleteButton.style.visibility = "hidden";
//   }

//   if (selectedLabels === "solfege") {
//     var pianoKeys = document.getElementsByClassName("key");
//     keyLabelType = "solfege";

//     for (var i = 0; i < pianoKeys.length; i++) {
//       pianoKeys[i].innerHTML = solfegeLabels[i];
//     }
//   }
// });

function playMelody() {
  Tone.Transport.start();
  let noteIndex = 0;

  Tone.Transport.cancel();

  Tone.Transport.scheduleRepeat((time) => {
    if (noteIndex < melodyForToday.length) {
      let note = melodyForToday[noteIndex];
      synth.triggerAttackRelease(note, "8n", time);
      noteIndex++;
    } else {
      Tone.Transport.cancel();
    }
  }, "4n");
}

document.onClick("playButton", () => playMelody());

let currentRow = 0;
let currentCol = 0;

const keys = ["C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4", "B4"];

keys.forEach((note) =>
  document.getElementById(note).addEventListener("click", () => {
    if (currentCol !== 5) {
      synth.triggerAttackRelease(note, "8n");
      guesses[currentRow][currentCol] = note;

      const row = document.getElementById(`row-${currentRow + 1}`);

      const cell = row.children[currentCol];
      const span = cell.querySelector("span"); // Get the <span> element inside the cell
      span.innerHTML =
        keyLabelType === "letters" ? note.substring(0, note.length - 1) : solfegeLabels[keys.indexOf(note)];
      currentCol++;
    }

    setSubmitButtonDisabled();
  })
);

document.getElementById("submit").addEventListener("click", () => {
  const guess = guesses[currentRow];
  let correct = true;

  if (guess.join("") === melodyForToday.join("")) {
    const row = document.getElementById(`row-${currentRow + 1}`);
    const cells = row.children;
    for (let i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = colors.green;
    }
  }

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === melodyForToday[i]) {
      const row = document.getElementById(`row-${currentRow + 1}`);
      const cell = row.children[i];
      cell.style.backgroundColor = colors.green;
    } else if (melodyForToday.includes(guess[i])) {
      const row = document.getElementById(`row-${currentRow + 1}`);
      const cell = row.children[i];
      cell.style.backgroundColor = colors.yellow;
      correct = false;
    } else if (!melodyForToday.includes(guess[i])) {
      correct = false;

      const key = document.getElementById(guess[i]);
      key.style.backgroundColor = colors.grey;
      key.style.color = colors.darkGrey;
      key.disabled = true;
    }
  }
  if (correct) {
    const gameOverDialog = document.getElementById("game-over-dialog");
    gameOverDialog.appendChild(document.createTextNode("You win!"));
    gameOverDialog.showModal();
    save(currentDate, currentRow, guesses);
  } else {
    if (currentCol === 5) {
      currentRow++;
      currentCol = 0;
      if (currentRow === 6) {
        currentRow = 0;
      }
    }
  }

  setSubmitButtonDisabled();
});

document.getElementById("delete").addEventListener("click", () => {
  if (currentCol > 0) {
    currentCol--;
    guesses[currentRow][currentCol] = null;
    const row = document.getElementById(`row-${currentRow + 1}`);
    const cell = row.children[currentCol];
    cell.innerHTML = "";
  }

  setSubmitButtonDisabled();
});

function setSubmitButtonDisabled() {
  const row = guesses[currentRow];
  const submitButton = document.getElementById("submit");
  if (row.includes(null)) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
}

setSubmitButtonDisabled();
