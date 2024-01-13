const synth = new Tone.Synth().toDestination();

const melodies = {
  "2024-01-13": ["C4", "D4", "E4", "G4", "F4"],
  "2024-01-14": ["A4", "G4", "D4", "E4", "C4"],
  "2024-01-15": ["F4", "G4", "A4", "D4", "C4"],
  "2024-01-16": ["A4", "G4", "D4", "E4", "C4"],
  "2024-01-17": ["C4", "D4", "E4", "G4", "F4"],
  "2024-01-18": ["A4", "G4", "D4", "E4", "C4"],
  "2024-01-19": ["Ef", "E4", "F4", "G4", "G4"],
  "2024-01-20": ["B4", "A4", "G4", "A4", "B4"],
  "2024-01-21": ["C4", "C4", "G4", "G4", "A4"],
  "2024-01-22": ["G4", "G4", "A4", "G4", "C5"],
  "2024-01-23": ["C4", "D4", "E4", "G4", "F4"],
};

const currentDate = new Date().toISOString().split("T")[0];
let melodyIndex = Object.keys(melodies).indexOf(currentDate);

if (melodyIndex === -1) {
  melodyIndex = 0;
}

function playMelody() {
  const melodyKeys = Object.keys(melodies);
  const melody = melodies[melodyKeys[melodyIndex]];
  let noteIndex = 0;

  Tone.Transport.cancel();

  Tone.Transport.scheduleRepeat((time) => {
    if (noteIndex < melody.length) {
      let note = melody[noteIndex];
      synth.triggerAttackRelease(note, "8n", time);
      noteIndex++;
    } else {
      Tone.Transport.cancel();
    }
  }, "4n");
}
document.getElementById("playButton").addEventListener("click", () => {
  melodyIndex = Math.floor(Math.random() * Object.keys(melodies).length);
  Tone.Transport.start();
  playMelody();
});

const guesses = [
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
];

let currentRow = 0;
let currentCol = 0;

const keys = ["C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4", "B4"];

keys.forEach((note) =>
  document.getElementById(note).addEventListener("click", () => {
    if (currentCol !== 5) {
      synth.triggerAttackRelease(note, "8n");
      guesses[currentRow][currentCol] = note;
      console.log(guesses[currentRow]);

      const row = document.getElementById(`row-${currentRow + 1}`);

      const cell = row.children[currentCol];
      cell.innerHTML = note.substring(0, note.length - 1);
      currentCol++;
    }

    checkSubmitButton();
  })
);

document.getElementById("submit").addEventListener("click", () => {
  const guess = guesses[currentRow];
  const currentDate = new Date().toISOString().split("T")[0];
  const melodyKeys = Object.keys(melodies);
  const melody = melodies[melodyKeys[melodyIndex]];
  let correct = true;

  console.log(guess);
  console.log(melody);
  if (guess.join("") === melody.join("")) {
    const row = document.getElementById(`row-${currentRow + 1}`);
    const cells = row.children;
    for (let i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = "#62c497";
    }
  }

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === melody[i]) {
      const row = document.getElementById(`row-${currentRow + 1}`);
      const cell = row.children[i];
      cell.style.backgroundColor = "#62c497";
    } else if (melody.includes(guess[i])) {
      const row = document.getElementById(`row-${currentRow + 1}`);
      const cell = row.children[i];
      cell.style.backgroundColor = "#fed45f";
      correct = false;
    } else if (!melody.includes(guess[i])) {
      correct = false;
    }
  }
  if (correct) {
    alert("You win!");
  } else {
    if (currentCol === 5) {
      currentRow++;
      currentCol = 0;
      if (currentRow === 6) {
        currentRow = 0;
      }
    }
  }

  checkSubmitButton();
});

document.getElementById("delete").addEventListener("click", () => {
  if (currentCol > 0) {
    currentCol--;
    guesses[currentRow][currentCol] = null;
    const row = document.getElementById(`row-${currentRow + 1}`);
    const cell = row.children[currentCol];
    cell.innerHTML = "";
  }

  checkSubmitButton();
});

function checkSubmitButton() {
  const row = guesses[currentRow];
  const submitButton = document.getElementById("submit");
  if (row.includes(null)) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
}

checkSubmitButton();
