import * as Tone from 'tone';

export function playMelody(synth, melody) {
    Tone.Transport.bpm.value = melody.tempo; // Set the tempo
      
    Tone.Transport.start();
    let noteIndex = 0;
      
    Tone.Transport.cancel();
  
    function playNextNote() {
      if (noteIndex < melody.notes.length) {
        let note = melody.notes[noteIndex];
        synth.triggerAttackRelease(note.pitch, note.duration);
        noteIndex++;
        setTimeout(playNextNote, Tone.Time(note.duration).toMilliseconds());
      } else {
        Tone.Transport.cancel();
      }
    }
  
    playNextNote();
  }
  