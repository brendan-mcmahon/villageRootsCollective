import * as Tone from 'tone';

export function playMelody(synth, melody) {
  Tone.Transport.bpm.value = melody.tempo;
    
  Tone.Transport.start();
  let noteIndex = 0;
    
  Tone.Transport.cancel();

  function playNextNote() {
    if (noteIndex < melody.notes.length) {
      let note = melody.notes[noteIndex];
      
      let duration = parseDuration(note);

      synth.triggerAttackRelease(note.pitch, duration);
      noteIndex++;
      setTimeout(playNextNote, Tone.Time(duration).toMilliseconds());
    } else {
      Tone.Transport.cancel();
    }
  }

  playNextNote();
}
function parseDuration(note) {
  let durationInSeconds = 0;
  if (note.duration.includes("+")) {
    const durations = note.duration.split("+");
    durations.forEach(dur => {
      durationInSeconds += Tone.Time(dur).toSeconds();
    });
  } else {
    durationInSeconds = Tone.Time(note.duration).toSeconds();
  }

  return durationInSeconds + "i"; // 'i' indicates 'in seconds'
}

