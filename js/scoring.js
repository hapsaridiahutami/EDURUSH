function createScoreState() {
  return {
    score: 0,
    streak: 0,
    correct: 0,
    wrong: 0,
    answered: 0,
    bestStreak: 0,
  };
}
function applyAnswer(state, isCorrect) {
  if (isCorrect) {
    state.streak += 1;
    if (state.streak > state.bestStreak) state.bestStreak = state.streak;
    const bonus = Math.min((state.streak - 1) * 2, 10);
    state.score += 10 + bonus;
    state.correct += 1;
  } else {
    state.streak = 0;
    state.wrong += 1;
  }
  state.answered += 1;
  return state;
}
function finishSession({ gameId, gameName, total, state, setup }) {
  window.EduRush.saveResult({
    gameId,
    gameName,
    jenjang: setup.jenjang,
    mapel: setup.mapel,
    score: state.score,
    correct: state.correct,
    wrong: state.wrong,
    total,
    bestStreak: state.bestStreak,
  });
  window.location.href = "result.html";
}
window.EduRushScoring = {
  createScoreState,
  applyAnswer,
  finishSession,
};