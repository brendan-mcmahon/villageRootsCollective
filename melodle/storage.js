export const getScores = () =>
  localStorage.getItem("melodle-score") ? JSON.parse(localStorage.getItem("melodle-score")) : [];

export const save = (currentDate, currentRow, guesses) => {
  console.log("saving");
  const scoreArray = getScores();
  scoreArray.push({
    date: currentDate,
    score: 6 - currentRow,
    gameState: guesses,
  });
  localStorage.setItem("melodle-score", JSON.stringify(scoreArray));
};
