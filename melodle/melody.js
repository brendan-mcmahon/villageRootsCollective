const currentDate = new Date().toISOString().split("T")[0];
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

export const solfegeLabels = ["Do", "Di", "Re", "Ri", "Mi", "Fa", "Fi", "Sol", "Si", "La", "Li", "Ti"];

export const melodyForToday = melodies[currentDate];
