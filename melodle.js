const synth = new Tone.Synth().toDestination()
const colors = {
  green: '#0E9634',
  yellow: '#fed45f',
  grey: '#d3d3d3',
  darkGrey: '#818181',
}

const melodies = {
  '2024-01-13': ['C4', 'D4', 'E4', 'G4', 'F4'],
  '2024-01-14': ['A4', 'G4', 'D4', 'E4', 'C4'],
  '2024-01-15': ['F4', 'G4', 'A4', 'D4', 'C4'],
  '2024-01-16': ['A4', 'G4', 'D4', 'E4', 'C4'],
  '2024-01-17': ['C4', 'D4', 'E4', 'G4', 'F4'],
  '2024-01-18': ['A4', 'G4', 'D4', 'E4', 'C4'],
  '2024-01-19': ['Ef', 'E4', 'F4', 'G4', 'G4'],
  '2024-01-20': ['B4', 'A4', 'G4', 'A4', 'B4'],
  '2024-01-21': ['C4', 'C4', 'G4', 'G4', 'A4'],
  '2024-01-22': ['G4', 'G4', 'A4', 'G4', 'C5'],
  '2024-01-23': ['C4', 'D4', 'E4', 'G4', 'F4'],
}
const currentDate = new Date().toISOString().split('T')[0]

const melodyForToday = melodies[currentDate]
let keyLabelType = 'letters'
const solfegeLabels = [
  'Do',
  'Di',
  'Re',
  'Ri',
  'Mi',
  'Fa',
  'Fi',
  'Sol',
  'Si',
  'La',
  'Li',
  'Ti',
]

var dialog = document.getElementById('melodle-settings-dialog')

// get the score array from local storage
// check to see if any of the scores are for today
// if so, load all of the guesses into the guesses array and disable the submit button

var scoreArray = localStorage.getItem('melodle-score')
  ? JSON.parse(localStorage.getItem('melodle-score'))
  : []

const guesses = [
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
]

var todaysScore = scoreArray.find((score) => score.date === currentDate)

if (todaysScore) {
  todaysScore.gameState.forEach((row, rowIndex) => {
    row.forEach((note, colIndex) => {
      if (note) {
        guesses[rowIndex][colIndex] = note
        const row = document.getElementById(`row-${rowIndex + 1}`)
        const cell = row.children[colIndex]
        cell.innerHTML =
          keyLabelType === 'letters'
            ? note.substring(0, note.length - 1)
            : solfegeLabels[keys.indexOf(note)]
      }
    })
  })
}

dialog.showModal()

dialog.addEventListener('close', function () {
  var selectedMode = dialog.querySelector('input[name="gameMode"]:checked')
    .value
  var selectedLabels = dialog.querySelector('input[name="labels"]:checked')
    .value

  console.log(selectedLabels)

  if (selectedMode === 'hard') {
    var deleteButton = document.getElementById('delete')
    deleteButton.style.visibility = 'hidden'
  }

  if (selectedLabels === 'numbers') {
    var pianoKeys = document.getElementsByClassName('key')
    var numberLabels = [
      'I',
      'ii',
      'II',
      'iii',
      'III',
      'IV',
      'v',
      'V',
      'iv',
      'IV',
      'vii',
      'VII',
    ]
    for (var i = 0; i < pianoKeys.length; i++) {
      pianoKeys[i].innerHTML = numberLabels[i]
    }
  }

  if (selectedLabels === 'solfege') {
    var pianoKeys = document.getElementsByClassName('key')
    keyLabelType = 'solfege'

    for (var i = 0; i < pianoKeys.length; i++) {
      pianoKeys[i].innerHTML = solfegeLabels[i]
    }
  }
})

function playMelody() {
  let noteIndex = 0

  Tone.Transport.cancel()

  Tone.Transport.scheduleRepeat((time) => {
    if (noteIndex < melodyForToday.length) {
      let note = melodyForToday[noteIndex]
      synth.triggerAttackRelease(note, '8n', time)
      noteIndex++
    } else {
      Tone.Transport.cancel()
    }
  }, '4n')
}
document.getElementById('playButton').addEventListener('click', () => {
  Tone.Transport.start()
  playMelody()
})

let currentRow = 0
let currentCol = 0

const keys = [
  'C4',
  'Db4',
  'D4',
  'Eb4',
  'E4',
  'F4',
  'Gb4',
  'G4',
  'Ab4',
  'A4',
  'Bb4',
  'B4',
]

keys.forEach((note) =>
  document.getElementById(note).addEventListener('click', () => {
    if (currentCol !== 5) {
      synth.triggerAttackRelease(note, '8n')
      guesses[currentRow][currentCol] = note

      const row = document.getElementById(`row-${currentRow + 1}`)

      const cell = row.children[currentCol]
      cell.innerHTML =
        keyLabelType === 'letters'
          ? note.substring(0, note.length - 1)
          : solfegeLabels[keys.indexOf(note)]
      currentCol++
    }

    checkSubmitButton()
  }),
)

document.getElementById('submit').addEventListener('click', () => {
  const guess = guesses[currentRow]
  let correct = true

  if (guess.join('') === melodyForToday.join('')) {
    const row = document.getElementById(`row-${currentRow + 1}`)
    const cells = row.children
    for (let i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = colors.green
    }
  }

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === melodyForToday[i]) {
      const row = document.getElementById(`row-${currentRow + 1}`)
      const cell = row.children[i]
      cell.style.backgroundColor = colors.green
    } else if (melodyForToday.includes(guess[i])) {
      const row = document.getElementById(`row-${currentRow + 1}`)
      const cell = row.children[i]
      cell.style.backgroundColor = colors.yellow
      correct = false
    } else if (!melodyForToday.includes(guess[i])) {
      correct = false

      const key = document.getElementById(guess[i])
      key.style.backgroundColor = colors.grey
      key.style.color = colors.darkGrey
      key.disabled = true
    }
  }
  if (correct) {
    const gameOverDialog = document.getElementById('game-over-dialog')
    gameOverDialog.appendChild(document.createTextNode('You win!'))
    gameOverDialog.showModal()
    const scoreArray = localStorage.getItem('melodle-score')
      ? JSON.parse(localStorage.getItem('melodle-score'))
      : []
    scoreArray.push({
      date: currentDate,
      score: 6 - currentRow,
      gameState: guesses,
    })
    localStorage.setItem('melodle-score', JSON.stringify(scoreArray))
  } else {
    if (currentCol === 5) {
      currentRow++
      currentCol = 0
      if (currentRow === 6) {
        currentRow = 0
      }
    }
  }

  checkSubmitButton()
})

document.getElementById('delete').addEventListener('click', () => {
  if (currentCol > 0) {
    currentCol--
    guesses[currentRow][currentCol] = null
    const row = document.getElementById(`row-${currentRow + 1}`)
    const cell = row.children[currentCol]
    cell.innerHTML = ''
  }

  checkSubmitButton()
})

function checkSubmitButton() {
  const row = guesses[currentRow]
  const submitButton = document.getElementById('submit')
  if (row.includes(null)) {
    submitButton.disabled = true
  } else {
    submitButton.disabled = false
  }
}

checkSubmitButton()
