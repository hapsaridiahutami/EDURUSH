function startMatch({ questions, setup, game, board, hud, stage }) {
  const state = EduRushScoring.createScoreState();
  document.getElementById("timer-wrap").classList.add("hidden");
  const pairs = questions.slice(0, game.limit || 6);
  const total = pairs.length;
  let selected = null;
  let busy = false;
let matched = 0;
  const cards = EduRush.shuffle([
    ...pairs.map((p, i) => ({ id: `t-${i}`, pair: i, text: p.term, kind: "term" })),
    ...pairs.map((p, i) => ({ id: `d-${i}`, pair: i, text: p.def, kind: "def" })),
  ]);
  hud(state, 0, total);
  board.innerHTML = `
    <p class="question">Pasangkan. Avatar nge-react tiap combo.</p>
    <div class="match-grid"></div>
    <p class="feedback">Klik dua kartu yang nyambung.</p>
  `;
  const grid = board.querySelector(".match-grid");
  const nodes = {};
  cards.forEach((card) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "match-card";
    btn.textContent = card.text;
    btn.setAttribute("aria-label", card.text);
    btn.addEventListener("click", () => onClick(card, btn));
    grid.appendChild(btn);
    nodes[card.id] = btn;
  });
  function doneIfFinished() {
    if (matched >= total) {
      EduRushAvatar.setAvatarMood(stage, "win");
      setTimeout(() => {
        EduRushScoring.finishSession({
          gameId: game.id,
          gameName: game.name,
          total,
          state,
          setup,
        });
      }, 700);
    }
  }
  function onClick(card, btn) {
    if (busy || btn.classList.contains("matched")) return;
    if (selected && selected.id === card.id) {
      btn.classList.remove("selected");
      selected = null;
      return;
    }
    btn.classList.add("selected");
    if (!selected) {
      selected = card;
      return;
    }
    busy = true;
    const first = selected;
    const firstBtn = nodes[first.id];
    const ok = first.pair === card.pair && first.kind !== card.kind;
    EduRushScoring.applyAnswer(state, ok);
    EduRushAvatar.setAvatarMood(stage, ok ? "win" : "lose");
    if (ok) {
      firstBtn.classList.add("correct", "matched");
      btn.classList.add("correct", "matched");
      matched += 1;
      hud(state, matched, total);
      selected = null;
      busy = false;
      doneIfFinished();
    } else {
      hud(state, matched, total);
      firstBtn.classList.add("wrong");
      btn.classList.add("wrong");
      board.querySelector(".feedback").textContent = "Belum nyambung.";
      setTimeout(() => {
        firstBtn.classList.remove("wrong", "selected");
        btn.classList.remove("wrong", "selected");
        selected = null;
        busy = false;
        EduRushAvatar.setAvatarMood(stage, "idle");
      }, 650);
    }
  }
window.startMatch = startMatch;
