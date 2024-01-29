const currentDate = new Date().toISOString().split("T")[0];

const beethovenFifth = {
  tempo: 100,
  accidentals: "flat",
  notes: [
    { pitch: "G4", duration: "8n" },
    { pitch: "G4", duration: "8n" },
    { pitch: "G4", duration: "8n" },
    { pitch: "Eb4", duration: "2n" },
    { pitch: null, duration: "4n" },
    { pitch: "F4", duration: "8n" },
    { pitch: "F4", duration: "8n" },
    { pitch: "F4", duration: "8n" },
    { pitch: "D4", duration: "2n" },
  ],
};

const imperialMarch = {
  tempo: 120,
  accidentals: "flat",
  notes: [
    { pitch: "A3", duration: "4n" },
    { pitch: "A3", duration: "4n" },
    { pitch: "A3", duration: "4n" },
    { pitch: "F3", duration: "8n." },
    { pitch: "C4", duration: "16n" },
    { pitch: "A3", duration: "4n" },
    { pitch: "F3", duration: "8n." },
    { pitch: "C4", duration: "16n" },
    { pitch: "A3", duration: "2n" },
  ],
};

const heyJude = {
  tempo: 90,
  accidentals: "flat",
  notes: [
    { pitch: "C4", duration: "4n" },
    { pitch: "A3", duration: "2n" },
    { pitch: null, duration: "8n" },
    { pitch: "A3", duration: "8n" },
    { pitch: "C4", duration: "8n" },
    { pitch: "D4", duration: "8n" },
    { pitch: "G3", duration: "2n" },
  ],
};

const furElise = {
  tempo: 70,
  accidentals: "sharp",
  notes: [
    { pitch: "E5", duration: "16n" },
    { pitch: "D#5", duration: "16n" },
    { pitch: "E5", duration: "16n" },
    { pitch: "D#5", duration: "16n" },
    { pitch: "E5", duration: "16n" },
    { pitch: "B4", duration: "16n" },
    { pitch: "D5", duration: "16n" },
    { pitch: "C5", duration: "16n" },
    { pitch: "A4", duration: "4n" },
  ],
};

const smokeOnTheWater = {
  tempo: 115,
  accidentals: "flat",
  notes: [
    { pitch: "G2", duration: "4n" },
    { pitch: "Bb2", duration: "4n" },
    { pitch: "C3", duration: "4n." },
    { pitch: "G2", duration: "4n" },
    { pitch: "Bb2", duration: "4n" },
    { pitch: "Db3", duration: "8n" },
    { pitch: "C3", duration: "2n" },
  ],
};

const somewhereOverTheRainbow = {
  tempo: 110,
  accidentals: "sharp",
  notes: [
    { pitch: "G4", duration: "2n" },
    { pitch: "G5", duration: "2n" },
    { pitch: "F#5", duration: "4n" },
    { pitch: "D5", duration: "8n" },
    { pitch: "E5", duration: "8n" },
    { pitch: "F#5", duration: "4n" },
    { pitch: "G5", duration: "4n" },
  ],
};

const blueDanube = {
  tempo: 180,
  accidentals: "flat",
  notes: [
    { pitch: "C4", duration: "4n" },
    { pitch: "C4", duration: "4n" },
    { pitch: "E4", duration: "4n" },
    { pitch: "G4", duration: "4n" },
    { pitch: "G4", duration: "4n" },
    { pitch: null, duration: "4n" },
    { pitch: "G5", duration: "4n" },
    { pitch: "G5", duration: "4n" },
    { pitch: null, duration: "4n" },
    { pitch: "E5", duration: "4n" },
    { pitch: "E5", duration: "4n" },
  ],
};

const swanLake = {
  tempo: 110,
  accidentals: "sharp",
  notes: [
    { pitch: "F#5", duration: "2n" },
    { pitch: "B4", duration: "8n" },
    { pitch: "C#5", duration: "8n" },
    { pitch: "D5", duration: "8n" },
    { pitch: "E5", duration: "8n" },
    { pitch: "F#5", duration: "4n." },
    { pitch: "D5", duration: "8n" },
    { pitch: "F#5", duration: "2n" },
  ],
};

const inTheHallOfTheMountainKing = {
  tempo: 120,
  accidentals: "flat",
  notes: [
    { pitch: "A3", duration: "8n" },
    { pitch: "B3", duration: "8n" },
    { pitch: "C4", duration: "8n" },
    { pitch: "D4", duration: "8n" },
    { pitch: "E4", duration: "8n" },
    { pitch: "C4", duration: "8n" },
    { pitch: "E4", duration: "4n" },
  ],
};

const iCantGetNoSatisfaction = {
  tempo: 132,
  accidentals: "sharp",
  notes: [
    { pitch: "A4", duration: "8n" },
    { pitch: null, duration: "8n" },
    { pitch: "A4", duration: "4n" },
    { pitch: null, duration: "8n" },
    { pitch: "A4", duration: "8n" },
    { pitch: "B4", duration: "8n" },
    { pitch: "C5", duration: "2n" },
    { pitch: "C5", duration: "8n" },
    { pitch: "C5", duration: "8n" },
    { pitch: "B4", duration: "4n" },
  ],
};

const rideOfTheValkyries = {
  tempo: 150,
  accidentals: "sharp",
  notes: [
    { pitch: "B3", duration: "8n" },
    { pitch: "E4", duration: "8n." },
    { pitch: "B3", duration: "16n" },
    { pitch: "E4", duration: "8n" },
    { pitch: "G4", duration: "4n." },
    { pitch: "E4", duration: "4n." },
  ],
};

const stairwayToHeaven = {
  tempo: 80,
  accidentals: "sharp",
  notes: [
    { pitch: "A3", duration: "8n" },
    { pitch: "C4", duration: "8n" },
    { pitch: "E4", duration: "8n" },
    { pitch: "A4", duration: "8n" },
    { pitch: "B4", duration: "8n" },
    { pitch: "E4", duration: "8n" },
    { pitch: "C4", duration: "8n" },
    { pitch: "B4", duration: "8n" },
    { pitch: "C5", duration: "8n" },
  ],
};

const sevenNationArmy = {
  tempo: 123,
  accidentals: "sharp",
  notes: [
    { pitch: "E3", duration: "4n." },
    { pitch: "E3", duration: "8n" },
    { pitch: "G3", duration: "8n" },
    { pitch: null, duration: "16n" },
    { pitch: "E3", duration: "8n" },
    { pitch: null, duration: "16n" },
    { pitch: "D3", duration: "16n" },
    { pitch: null, duration: "16n" },
    { pitch: "C3", duration: "2n" },
    { pitch: "B2", duration: "2n" },
  ],
};

const toccataAndFugue = {
  tempo: 58,
  accidentals: "sharp",
  notes: [
    { pitch: "A5", duration: "32n" },
    { pitch: "G5", duration: "32n" },
    { pitch: "A5", duration: "8n." },
    { pitch: null, duration: "8n" },
    { pitch: "G5", duration: "32n" },
    { pitch: "F5", duration: "32n" },
    { pitch: "E5", duration: "32n" },
    { pitch: "D5", duration: "32n" },
    { pitch: "C#5", duration: "8n." },
    { pitch: "D5", duration: "8n" },
  ],
};

const danceOfTheSugarPlumFairy = {
  tempo: 108,
  accidentals: "sharp",
  notes: [
    { pitch: "C5", duration: "16n" },
    { pitch: null, duration: "16n" },
    { pitch: "A4", duration: "16n" },
    { pitch: null, duration: "16n" },
    { pitch: "C5", duration: "16n" },
    { pitch: null, duration: "8n." },
    { pitch: "B4", duration: "16n" },
    { pitch: null, duration: "8n." },
    { pitch: "G#4", duration: "16n" },
    { pitch: null, duration: "8n." },
    { pitch: "A4", duration: "16n" },
    { pitch: null, duration: "8n." },
    { pitch: "G4", duration: "8n" },
    { pitch: "G4", duration: "8n" },
    { pitch: "G4", duration: "4n" },
  ],
};

const crazyInLove = {
  tempo: 100,
  accidentals: "flat",
  notes: [
    { pitch: "D4", duration: "4n." },
    { pitch: null, duration: "8n" },
    { pitch: "D4", duration: "16n" },
    { pitch: "E4", duration: "8n" },
    { pitch: "F4", duration: "8n" },
    { pitch: "G4", duration: "16n" },
    { pitch: "F4", duration: "8n" },
    { pitch: "D4", duration: "2n" },
  ],
};

const uptownFunk = {
  tempo: 115,
  accidentals: "flat",
  notes: [
    { pitch: "D3", duration: "4n" },
    { pitch: null, duration: "4n" },
    { pitch: null, duration: "4n" },
    { pitch: null, duration: "8n" },
    { pitch: "D3", duration: "8n" },
    { pitch: "G3", duration: "8n." },
    { pitch: "F3", duration: "16n" },
    { pitch: null, duration: "8n" },
    { pitch: "D3", duration: "8n" },
    { pitch: "G3", duration: "8n." },
    { pitch: "F3", duration: "16n" },
    { pitch: null, duration: "8n" },
    { pitch: "C3", duration: "8n" },
    { pitch: "D3", duration: "4n" },
  ],
};

const badRomance = {
  tempo: 120,
  accidentals: "flat",
  notes: [
    { pitch: "A3", duration: "4n" },
    { pitch: "A3", duration: "4n" },
    { pitch: "E4", duration: "8n" },
    { pitch: "E4", duration: "8n" },
    { pitch: "F4", duration: "8n" },
    { pitch: "E4", duration: "8n" },
  ],
};

const blindingLights = {
  tempo: 171,
  accidentals: "flat",
  notes: [
    { pitch: "F4", duration: "2n" },
    { pitch: "F4", duration: "4n." },
    { pitch: "Eb4", duration: "8n" },
    { pitch: "F4", duration: "8n" },
    { pitch: "G4", duration: "4n" },
    { pitch: "C4", duration: "4n" },
    { pitch: "Eb4", duration: "4n." },
  ],
};

const kids = {
  tempo: 123,
  accidentals: "sharp",
  notes: [
    { pitch: "A4", duration: "8n." },
    { pitch: null, duration: "16n" },
    { pitch: "B4", duration: "8n." },
    { pitch: null, duration: "16n" },
    { pitch: "C#5", duration: "8n." },
    { pitch: null, duration: "16n" },
    { pitch: "E5", duration: "8n." },
    { pitch: null, duration: "16n" },
    { pitch: "F#5", duration: "4n" },
    { pitch: "G#5", duration: "8n" },
    { pitch: "F#5", duration: "8n" },
    { pitch: null, duration: "8n" },
    { pitch: "E5", duration: "8n" },
    { pitch: null, duration: "8n" },
    { pitch: "C#5", duration: "2n" },
  ],
};

const iWantItThatWay = {
  tempo: 99,
  accidentals: "sharp",
  notes: [
    { pitch: "F#3", duration: "8n" },
    { pitch: "A3", duration: "2n" },
    { pitch: null, duration: "4n" },
    { pitch: "C#4", duration: "4n" },
    { pitch: "F#3", duration: "4n." },
    { pitch: "E3", duration: "4n." },
    { pitch: "F#3", duration: "8n" },
    { pitch: "A3", duration: "4n." }
  ],
};

const uCantTouchThis = {
  tempo: 130,
  accidentals: "sharp",
  notes: [
    { pitch: "D3", duration: "4n" },
    { pitch: "C3", duration: "8n" },
    { pitch: "B2", duration: "8n" },
    { pitch: "A2", duration: "8n" },
    { pitch: null, duration: "4n" },
    { pitch: "E2", duration: "8n" },
    { pitch: "G2", duration: "8n" },
    { pitch: null, duration: "4n" },
    { pitch: "B2", duration: "8n" },
    { pitch: "A2", duration: "8n" },
  ],
};

const enterSandman = {
  tempo: 123,
  accidentals: "flat",
  notes: [
    { pitch: "E2", duration: "4n" },
    { pitch: "E3", duration: "8n" },
    { pitch: "G3", duration: "8n" },
    { pitch: "Bb2", duration: "8n" },
    { pitch: "A2", duration: "4n" },
  ],
};

const myHeartWillGoOn = {
  tempo: 90,
  accidentals: "sharp",
  notes: [
    { pitch: "E4", duration: "8n" },
    { pitch: "F#4", duration: "8n" },
    { pitch: "G#4", duration: "4n + 4n." },
    { pitch: "F#4", duration: "8n" },
    { pitch: "E4", duration: "8n" },
    { pitch: "F#4", duration: "8n." },
    { pitch: "B4", duration: "4n" },
  ],
};

export const melodies = {
  "2024-01-29": imperialMarch,
  "2024-01-30": sevenNationArmy,
  "2024-01-31": kids,
  "2024-02-01": iCantGetNoSatisfaction,
  "2024-02-02": toccataAndFugue,
  "2024-02-03": blueDanube,
  "2024-02-04": blindingLights,
  "2024-02-05": uCantTouchThis,
  "2024-02-06": crazyInLove,
  "2024-02-07": rideOfTheValkyries,
  "2024-02-08": enterSandman,
  "2024-02-09": beethovenFifth,
  "2024-02-10": smokeOnTheWater,
  "2024-02-11": furElise,
  "2024-02-12": badRomance,
  "2024-02-13": inTheHallOfTheMountainKing,
  "2024-02-14": myHeartWillGoOn,
  "2024-02-15": somewhereOverTheRainbow,
  "2024-02-16": danceOfTheSugarPlumFairy,
  "2024-02-17": uptownFunk,
  "2024-02-18": stairwayToHeaven,
  "2024-02-19": heyJude,
  "2024-02-20": iWantItThatWay,
  "2024-02-21": swanLake,
};

export const keys = ["C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4", "B4"];

export const melody = melodies[currentDate];
