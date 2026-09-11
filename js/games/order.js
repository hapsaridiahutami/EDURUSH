function startOrder({ questions, setup, game, board, hud, stage }) {
  const state = EduRushScoring.createScoreState();
  let index = 0;
  document.getElementById("timer-wrap").classList.add("hidden");function sameOrder(a, b) {
    return a.length === b.length && a.every((v, i) => v === b[i]);
  }
  function render() {
    const item = questions[index];
    const pool = EduRush.shuffle([...item.items]);
    const built = [];
    hud(state, index, questions.length);
    EduRushAvatar.setAvatarMood(stage, "idle");
    board.innerHTML = `
      <p class="question">${item.question}</p>
      <p>Ketuk potongan. Avatar nge-stack urutanmu.</p>
      <div class="order-built" data-built aria-label="Urutan yang disusun"></div>
      <div class="order-pool" data-pool></div>
      <div class="btn-row">
        <button type="button" class="btn btn-ghost" data-undo>Reset</button>
        <button type="button" class="btn btn-primary" data-check disabled>Cek urutan</button>
      </div>
      <p class="feedback"></p>
    `;
const poolEl = board.querySelector("[data-pool]");
    const builtEl = board.querySelector("[data-built]");
    const checkBtn = board.querySelector("[data-check]");
    const undoBtn = board.querySelector("[data-undo]");
    function refreshBuilt() {
      builtEl.innerHTML = "";
      built.forEach((text, i) => {
        const mark = document.createElement("span");
        mark.className = "chip";
        mark.textContent = `${i + 1}. ${text}`;
        builtEl.appendChild(mark);
      });
      checkBtn.disabled = built.length !== item.items.length;
      if (built.length) EduRushAvatar.setAvatarMood(stage, "jump");
    }
    pool.forEach((text) => {
const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip";
      btn.textContent = text;
      btn.addEventListener("click", () => {
        if (btn.disabled) return;
        btn.disabled = true;
        built.push(text);
        refreshBuilt();
      });
      poolEl.appendChild(btn);
    });
    undoBtn.addEventListener("click", () => render());
    checkBtn.addEventListener("click", () => {
      const ok = sameOrder(built, item.items);
      EduRushScoring.applyAnswer(state, ok);
      EduRushAvatar.setAvatarMood(stage, ok ? "win" : "lose");
      board.querySelector(".feedback").textContent = ok
        ? "Urutan rapi. Lock in."
        : `Ketuker. Yang bener: ${item.items.join(" → ")}. ${item.explanation || ""}`;
      checkBtn.disabled = true;
      undoBtn.disabled = true;
      hud(state, index + 1, questions.length);
      setTimeout(() => {
        index += 1;
        if (index >= questions.length) {
          EduRushScoring.finishSession({
            gameId: game.id,
            gameName: game.name,
            total: questions.length,
            state,
            setup,
          });
        } else {
          render();
        }
      }, 1100);
    });
  }
  render();
}
window.startOrder = startOrder;
