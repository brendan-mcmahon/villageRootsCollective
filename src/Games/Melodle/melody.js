const currentDate = new Date().toISOString().split("T")[0];

const beethovenFifth = {
  tempo: 88,
  accidentals: "flat",
  notes: [
    { pitch: "G4",  duration: "8n" },
    { pitch: "G4",  duration: "8n" },
    { pitch: "G4",  duration: "8n" },
    { pitch: "Eb4", duration: "2n" },
    { pitch: "F4",  duration: "8n" },
    { pitch: "F4",  duration: "8n" },
    { pitch: "F4",  duration: "8n" },
    { pitch: "D4",  duration: "2n" },
  ],
};

const imperialMarch = {
  tempo: 120,
  accidentals: "flat",
  notes: [
    { pitch: "A3",  duration: "4n" },
    { pitch: "A3",  duration: "4n" },
    { pitch: "A3",  duration: "4n" },
    { pitch: "F3", duration: "8n." },
    { pitch: "C4",  duration: "16n" },
    { pitch: "A3",  duration: "4n" },
    { pitch: "F3", duration: "8n." },
    { pitch: "C4",  duration: "16n" },
    { pitch: "A3",  duration: "2n" },
  ],
};

const heyJude = {
    tempo: 90,
    accidentals: "flat",
    notes : [
        { pitch: "C5", duration: "4n" },
        { pitch: "A4", duration: "2n" },
        { pitch: null, duration: "8n" },
        { pitch: "A4", duration: "8n" },
        { pitch: "C5", duration: "8n" },
        { pitch: "D5", duration: "8n" },
        { pitch: "G4", duration: "2n" }
    ]
}

const melodies = {
  "2024-01-28": beethovenFifth,
  "2024-01-29": imperialMarch,
  "2024-01-30": heyJude

};

export const keys = ["C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4", "B4"];

export const melody = melodies[currentDate];
