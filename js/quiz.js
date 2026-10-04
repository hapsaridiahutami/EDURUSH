document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     MATERI
  ===================================================== */

  const params = new URLSearchParams(window.location.search);

  const materi =
    params.get("materi") ||
    document.body.dataset.materi ||
    "operasi";


  /* =====================================================
     HELPER VISUAL
  ===================================================== */

  function dots(count, className = "") {
    return Array.from(
      { length: count },
      () => `<span class="visual-dot ${className}"></span>`
    ).join("");
  }

  function tensBlocks(count) {
    return Array.from(
      { length: count },
      () => `<span class="ten-block"></span>`
    ).join("");
  }

  function onesBlocks(count) {
    return Array.from(
      { length: count },
      () => `<span class="one-block"></span>`
    ).join("");
  }

  function multiplicationArray(rows, cols) {
    let html = "";

    for (let i = 0; i < rows * cols; i++) {
      html += `<span></span>`;
    }

    return `
      <div
        class="array-grid"
        style="--cols:${cols}"
        aria-label="${rows} baris dan ${cols} kolom"
      >
        ${html}
      </div>
    `;
  }


  /* =====================================================
     VISUAL OPERASI HITUNG
  ===================================================== */

  function additionVisual() {
    return `
      <div class="operation-visual">

        <div class="number-card">
          <strong>24</strong>

          <div class="place-label">
            2 puluhan + 4 satuan
          </div>

          <div class="block-row">
            <div class="ten-group">
              ${tensBlocks(2)}
            </div>

            <div class="ones-group">
              ${onesBlocks(4)}
            </div>
          </div>
        </div>

        <div class="big-operator plus">+</div>

        <div class="number-card">
          <strong>15</strong>

          <div class="place-label">
            1 puluhan + 5 satuan
          </div>

          <div class="block-row">
            <div class="ten-group">
              ${tensBlocks(1)}
            </div>

            <div class="ones-group">
              ${onesBlocks(5)}
            </div>
          </div>
        </div>

        <div class="visual-question">
          <span>=</span>
          <strong>?</strong>
        </div>

      </div>
    `;
  }


  function subtractionVisual() {
    return `
      <div class="operation-visual subtraction-visual">

        <div class="number-card">
          <strong>56</strong>

          <div class="place-label">
            jumlah awal
          </div>

          <div class="block-row">
            <div class="ten-group">
              ${tensBlocks(5)}
            </div>

            <div class="ones-group">
              ${onesBlocks(6)}
            </div>
          </div>
        </div>

        <div class="big-operator minus">−</div>

        <div class="number-card remove-card">
          <strong>28</strong>

          <div class="place-label">
            yang dikurangi
          </div>

          <div class="mini-remove">
            ${dots(8, "remove-dot")}
          </div>
        </div>

        <div class="visual-question">
          <span>=</span>
          <strong>?</strong>
        </div>

      </div>
    `;
  }


  function multiplicationVisual() {
    return `
      <div class="multiplication-visual">

        <div class="array-title">
          <strong>7 kelompok</strong>

          <span>×</span>

          <strong>8 tiap kelompok</strong>
        </div>

        ${multiplicationArray(7, 8)}

        <div class="array-equation">
          <span>7</span>
          <b>×</b>
          <span>8</span>
          <b>=</b>
          <strong>?</strong>
        </div>

      </div>
    `;
  }


  function divisionVisual() {
    return `
      <div class="division-visual">

        <div class="division-total">
          <strong>72</strong>
          <span>benda</span>
        </div>

        <div class="division-arrow">
          <span>dibagi rata menjadi</span>
          <strong>9 kelompok</strong>
        </div>

        <div class="division-groups">

          ${Array.from(
            { length: 9 },
            (_, index) => `
              <div class="division-group">

                <small>Kelompok ${index + 1}</small>

                <div class="group-dots">
                  ${dots(8)}
                </div>

                <strong>?</strong>

              </div>
            `
          ).join("")}

        </div>

        <div class="division-equation">
          72 ÷ 9 = <strong>?</strong>
        </div>

      </div>
    `;
  }


  /* =====================================================
     VISUAL PECAHAN
  ===================================================== */

  function fractionPie(parts, filled) {

    const degrees = 360 / parts;
    const stops = [];

    for (let i = 0; i < parts; i++) {

      const start = i * degrees;
      const end = (i + 1) * degrees;

      const color =
        i < filled
          ? "var(--green)"
          : "#e8eee9";

      stops.push(
        `${color} ${start}deg ${end}deg`
      );
    }

    return `
      <div
        class="fraction-pie"
        style="background: conic-gradient(${stops.join(",")})"
      >
        <div class="pie-inner"></div>
      </div>
    `;
  }


  function halfVisual() {
    return `
      <div class="fraction-board">

        <div class="fraction-card">

          ${fractionPie(2, 1)}

          <strong>1/2</strong>

          <span>1 dari 2 bagian</span>

        </div>

        <div class="fraction-meaning">

          <span>1</span>
          <i>bagian diwarnai</i>
          <span>dari</span>
          <strong>2</strong>
          <i>bagian sama besar</i>

        </div>

      </div>
    `;
  }


  function compareFractionVisual() {
    return `
      <div class="fraction-compare">

        <div class="fraction-card">

          ${fractionPie(4, 1)}

          <strong>1/4</strong>

          <span>1 dari 4 bagian</span>

        </div>

        <div class="compare-symbol">?</div>

        <div class="fraction-card">

          ${fractionPie(2, 1)}

          <strong>1/2</strong>

          <span>1 dari 2 bagian</span>

        </div>

      </div>
    `;
  }


  function addFractionVisual() {
    return `
      <div class="fraction-add">

        <div class="fraction-card small">
          ${fractionPie(4, 1)}
          <strong>1/4</strong>
        </div>

        <div class="fraction-operator">+</div>

        <div class="fraction-card small">
          ${fractionPie(4, 1)}
          <strong>1/4</strong>
        </div>

        <div class="fraction-operator">=</div>

        <div class="fraction-result">?</div>

      </div>
    `;
  }


  function threeQuarterVisual() {
    return `
      <div class="fraction-board">

        <div class="fraction-card">

          ${fractionPie(4, 3)}

          <strong>3/4</strong>

          <span>3 dari 4 bagian</span>

        </div>

        <div class="fraction-meaning">

          <span>3</span>
          <i>bagian diwarnai</i>
          <span>dari</span>
          <strong>4</strong>
          <i>bagian sama besar</i>

        </div>

      </div>
    `;
  }


  /* =====================================================
     VISUAL BANGUN DATAR
  ===================================================== */

  function squareVisual() {
    return `
      <div class="shape-stage">

        <div class="shape-card">

          <svg
            class="shape-svg"
            viewBox="0 0 240 190"
            role="img"
            aria-label="Persegi dengan empat sisi sama panjang"
          >

            <rect
              x="65"
              y="25"
              width="110"
              height="110"
              rx="5"
              class="svg-square"
            />

            <text x="120" y="18" text-anchor="middle">
              4 sisi
            </text>

            <text x="120" y="160" text-anchor="middle">
              sama panjang
            </text>

          </svg>

          <strong>PERSEGI</strong>

        </div>

      </div>
    `;
  }


  function circleVisual() {
    return `
      <div class="shape-stage">

        <div class="shape-card">

          <svg
            class="shape-svg"
            viewBox="0 0 240 190"
            role="img"
            aria-label="Lingkaran tanpa sudut"
          >

            <circle
              cx="120"
              cy="85"
              r="60"
              class="svg-circle"
            />

            <text x="120" y="170" text-anchor="middle">
              0 sudut
            </text>

          </svg>

          <strong>LINGKARAN</strong>

        </div>

      </div>
    `;
  }


  function triangleVisual() {
    return `
      <div class="shape-stage">

        <div class="shape-card">

          <svg
            class="shape-svg"
            viewBox="0 0 240 190"
            role="img"
            aria-label="Segitiga dengan tiga sisi"
          >

            <polygon
              points="120,20 55,140 185,140"
              class="svg-triangle"
            />

            <text x="120" y="165" text-anchor="middle">
              3 sisi
            </text>

          </svg>

          <strong>SEGITIGA</strong>

        </div>

      </div>
    `;
  }


  function rectangleVisual() {
    return `
      <div class="shape-stage">

        <div class="shape-card">

          <svg
            class="shape-svg"
            viewBox="0 0 240 190"
            role="img"
            aria-label="Persegi panjang dengan empat sisi"
          >

            <rect
              x="40"
              y="50"
              width="160"
              height="75"
              rx="5"
              class="svg-rectangle"
            />

            <text x="120" y="155" text-anchor="middle">
              4 sisi
            </text>

          </svg>

          <strong>PERSEGI PANJANG</strong>

        </div>

      </div>
    `;
  }


  /* =====================================================
     SOAL QUIZ
  ===================================================== */

  const questionSets = {

    /* ================= OPERASI ================= */

    operasi: [

      {
        question: "Berapakah hasil dari 24 + 15?",
        answers: ["39", "38", "40", "41"],
        correct: 0,
        type: "➕ PENJUMLAHAN",
        helper: "Gabungkan puluhan dan satuan.",
        visual: additionVisual()
      },

      {
        question: "Berapakah hasil dari 56 − 28?",
        answers: ["26", "28", "30", "32"],
        correct: 1,
        type: "➖ PENGURANGAN",
        helper: "Kurangkan bagian yang diambil dari jumlah awal.",
        visual: subtractionVisual()
      },

      {
        question: "Berapakah hasil dari 7 × 8?",
        answers: ["48", "54", "56", "64"],
        correct: 2,
        type: "✖️ PERKALIAN",
        helper: "Hitung 7 kelompok dengan 8 benda tiap kelompok.",
        visual: multiplicationVisual()
      },

      {
        question: "Berapakah hasil dari 72 ÷ 9?",
        answers: ["6", "7", "8", "9"],
        correct: 2,
        type: "➗ PEMBAGIAN",
        helper: "Bagikan 72 benda secara rata ke 9 kelompok.",
        visual: divisionVisual()
      }

    ],


    /* ================= PECAHAN ================= */

    pecahan: [

      {
        question: "Pecahan yang menunjukkan setengah adalah ...",
        answers: ["1/2", "1/3", "1/4", "2/3"],
        correct: 0,
        type: "🍕 MENGENAL PECAHAN",
        helper: "Lihat 1 bagian dari 2 bagian yang sama besar.",
        visual: halfVisual()
      },

      {
        question: "Pecahan manakah yang lebih besar?",
        answers: ["1/4", "1/2", "1/3", "1/5"],
        correct: 1,
        type: "🍕 MEMBANDINGKAN PECAHAN",
        helper: "Bandingkan bagian yang diwarnai.",
        visual: compareFractionVisual()
      },

      {
        question: "Berapakah hasil dari 1/4 + 1/4?",
        answers: ["1/2", "1/3", "2/3", "1"],
        correct: 0,
        type: "➕ PENJUMLAHAN PECAHAN",
        helper: "Gabungkan dua bagian seperempat.",
        visual: addFractionVisual()
      },

      {
        question: "Pecahan 3/4 dibaca ...",
        answers: [
          "Tiga per empat",
          "Empat per tiga",
          "Tiga per tiga",
          "Satu per empat"
        ],
        correct: 0,
        type: "🍕 MEMBACA PECAHAN",
        helper: "Ada 3 bagian dari 4 bagian yang sama besar.",
        visual: threeQuarterVisual()
      }

    ],


    /* ================= BANGUN DATAR ================= */

    bangun: [

      {
        question: "Bangun datar yang memiliki 4 sisi sama panjang adalah ...",
        answers: [
          "Persegi",
          "Segitiga",
          "Lingkaran",
          "Persegi panjang"
        ],
        correct: 0,
        type: "▣ PERSEGI",
        helper: "Perhatikan jumlah sisi dan panjang sisinya.",
        visual: squareVisual()
      },

      {
        question: "Bangun datar yang tidak memiliki sudut adalah ...",
        answers: [
          "Persegi",
          "Segitiga",
          "Lingkaran",
          "Persegi panjang"
        ],
        correct: 2,
        type: "○ LINGKARAN",
        helper: "Cari bentuk yang tidak mempunyai titik sudut.",
        visual: circleVisual()
      },

      {
        question: "Bangun datar yang memiliki 3 sisi adalah ...",
        answers: [
          "Lingkaran",
          "Segitiga",
          "Persegi",
          "Persegi panjang"
        ],
        correct: 1,
        type: "△ SEGITIGA",
        helper: "Hitung jumlah sisi pada gambar.",
        visual: triangleVisual()
      },

      {
        question: "Persegi panjang memiliki ... sisi.",
        answers: ["2", "3", "4", "5"],
        correct: 2,
        type: "▭ PERSEGI PANJANG",
        helper: "Hitung semua sisi pada bentuk.",
        visual: rectangleVisual()
      }

    ]

  };


  /* =====================================================
     SETUP
  ===================================================== */

  const questions =
    questionSets[materi] ||
    questionSets.operasi;

  const MAX_TIME = 20;
  const MAX_LIVES = 3;

  let currentQuestion = 0;
  let lives = MAX_LIVES;
  let xp = 0;
  let streak = 0;
  let bestStreak = 0;
  let correct = 0;
  let wrong = 0;
  let timeLeft = MAX_TIME;
  let timer = null;
  let answered = false;


  /* =====================================================
     ELEMENT
  ===================================================== */

  const quizStart =
    document.getElementById("quiz-start");

  const rushGame =
    document.getElementById("rush-game");

  const rushResult =
    document.getElementById("rush-result");

  const startButton =
    document.getElementById("start-button");

  const retryButton =
    document.getElementById("retry-button");

  const questionNumber =
    document.getElementById("question-number");

  const questionTotal =
    document.getElementById("question-total");

  const startTotal =
    document.getElementById("start-total");

  const lifeDisplay =
    document.getElementById("life-display");

  const streakDisplay =
    document.getElementById("streak");

  const xpDisplay =
    document.getElementById("xp");

  const progressFill =
    document.getElementById("progress-fill");

  const progressBar =
    document.querySelector(".rush-progress");

  const timerDisplay =
    document.getElementById("timer");

  const timerProgress =
    document.getElementById("timer-progress");

  const timerCircle =
    document.getElementById("timer-circle");

  const challengeType =
    document.getElementById("challenge-type");

  const visualHelper =
    document.getElementById("visual-helper");

  const challengeVisual =
    document.getElementById("challenge-visual");

  const questionText =
    document.getElementById("question-text");

  const answerGrid =
    document.getElementById("answer-grid");

  const answerFeedback =
    document.getElementById("answer-feedback");

  const feedbackIcon =
    document.getElementById("feedback-icon");

  const feedbackTitle =
    document.getElementById("feedback-title");

  const feedbackText =
    document.getElementById("feedback-text");

  const nextButton =
    document.getElementById("next-button");

  const nextText =
    document.getElementById("next-text");

  const finalXp =
    document.getElementById("final-xp");

  const finalCorrect =
    document.getElementById("final-correct");

  const finalWrong =
    document.getElementById("final-wrong");

  const finalStreak =
    document.getElementById("final-streak");


  /* =====================================================
     JUMLAH SOAL
  ===================================================== */

  questionTotal.textContent =
    String(questions.length).padStart(2, "0");

  startTotal.textContent =
    String(questions.length).padStart(2, "0");


  /* =====================================================
     UPDATE NYAWA
  ===================================================== */

  function updateLives() {

    const heartCount =
      "♥".repeat(lives) +
      "♡".repeat(MAX_LIVES - lives);

    lifeDisplay.textContent =
      `${heartCount} ${lives} nyawa`;

    lifeDisplay.setAttribute(
      "aria-label",
      `${lives} dari ${MAX_LIVES} nyawa tersisa`
    );
  }


  /* =====================================================
     UPDATE STATISTIK
  ===================================================== */

  function updateStats() {

    streakDisplay.textContent =
      streak;

    xpDisplay.textContent =
      xp;

    updateLives();
  }


  /* =====================================================
     TIMER
  ===================================================== */

  function updateTimerVisual() {

    timerDisplay.textContent =
      timeLeft;

    const percentage =
      Math.max(
        0,
        timeLeft / MAX_TIME
      );

    const circumference = 132;

    const offset =
      circumference *
      (1 - percentage);

    timerProgress.style.strokeDashoffset =
      offset;

    if (timeLeft <= 5) {

      timerCircle.classList.add(
        "timer-danger"
      );

    } else {

      timerCircle.classList.remove(
        "timer-danger"
      );

    }
  }


  function startTimer() {

    clearInterval(timer);

    timer =
      setInterval(() => {

        timeLeft--;

        updateTimerVisual();

        if (timeLeft <= 0) {

          clearInterval(timer);

          handleTimeout();

        }

      }, 1000);
  }


  /* =====================================================
     MULAI QUIZ
  ===================================================== */

  function startQuiz() {

    clearInterval(timer);

    currentQuestion = 0;
    lives = MAX_LIVES;
    xp = 0;
    streak = 0;
    bestStreak = 0;
    correct = 0;
    wrong = 0;

    quizStart.style.display = "none";
    rushResult.style.display = "none";
    rushGame.style.display = "block";

    updateStats();

    showQuestion();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  /* =====================================================
     TAMPILKAN SOAL
  ===================================================== */

  function showQuestion() {

    clearInterval(timer);

    answered = false;
    timeLeft = MAX_TIME;

    const question =
      questions[currentQuestion];


    questionNumber.textContent =
      String(currentQuestion + 1)
        .padStart(2, "0");


    questionText.textContent =
      question.question;


    challengeType.textContent =
      question.type;


    visualHelper.textContent =
      `👀 ${question.helper}`;


    challengeVisual.innerHTML =
      question.visual;


    answerGrid.innerHTML =
      "";


    answerFeedback.style.display =
      "none";


    answerFeedback.classList.remove(
      "feedback-correct",
      "feedback-wrong"
    );


    nextButton.style.display =
      "none";


    const progress =
      ((currentQuestion + 1) /
        questions.length) * 100;


    progressFill.style.width =
      `${progress}%`;


    progressBar.setAttribute(
      "aria-valuenow",
      Math.round(progress)
    );


    updateTimerVisual();


    question.answers.forEach(
      (answer, index) => {

        const button =
          document.createElement("button");

        button.type =
          "button";

        button.className =
          "answer-button";

        button.textContent =
          `${String.fromCharCode(65 + index)}. ${answer}`;

        button.setAttribute(
          "aria-label",
          `Pilihan ${String.fromCharCode(65 + index)}: ${answer}`
        );

        button.addEventListener(
          "click",
          () => {
            checkAnswer(
              index,
              button
            );
          }
        );

        answerGrid.appendChild(
          button
        );

      }
    );


    startTimer();
  }


  /* =====================================================
     CEK JAWABAN
  ===================================================== */

  function checkAnswer(
    selectedIndex,
    selectedButton
  ) {

    if (answered) return;

    answered = true;

    clearInterval(timer);

    const question =
      questions[currentQuestion];

    const buttons =
      document.querySelectorAll(
        ".answer-button"
      );


    buttons.forEach(button => {
      button.disabled = true;
    });


    /* BENAR */

    if (
      selectedIndex ===
      question.correct
    ) {

      selectedButton.classList.add(
        "correct"
      );

      correct++;

      streak++;


      if (
        streak > bestStreak
      ) {
        bestStreak = streak;
      }


      const baseXP = 10;


      const speedBonus =
        timeLeft >= 15
          ? 5
          : 0;


      const streakBonus =
        Math.min(
          streak * 2,
          10
        );


      const gainedXP =
        baseXP +
        speedBonus +
        streakBonus;


      xp += gainedXP;


      showFeedback(
        "✓",
        "Jawaban benar!",
        `Kamu mendapat +${gainedXP} XP. Streak: ${streak}.`,
        "correct"
      );

    }


    /* SALAH */

    else {

      selectedButton.classList.add(
        "wrong"
      );


      if (
        buttons[question.correct]
      ) {

        buttons[
          question.correct
        ].classList.add(
          "correct"
        );

      }


      wrong++;


      lives =
        Math.max(
          0,
          lives - 1
        );


      streak = 0;


      showFeedback(
        "✕",
        "Belum tepat.",
        `Jawaban yang benar adalah "${question.answers[question.correct]}".`,
        "wrong"
      );

    }


    updateStats();

    prepareNextButton();
  }


  /* =====================================================
     WAKTU HABIS
  ===================================================== */

  function handleTimeout() {

    if (answered) return;

    answered = true;

    const question =
      questions[currentQuestion];


    wrong++;

    lives =
      Math.max(
        0,
        lives - 1
      );

    streak = 0;


    const buttons =
      document.querySelectorAll(
        ".answer-button"
      );


    buttons.forEach(button => {
      button.disabled = true;
    });


    if (
      buttons[question.correct]
    ) {

      buttons[
        question.correct
      ].classList.add(
        "correct"
      );

    }


    showFeedback(
      "!",
      "Waktu habis.",
      `Jawaban yang benar adalah "${question.answers[question.correct]}".`,
      "wrong"
    );


    updateStats();

    prepareNextButton();
  }


  /* =====================================================
     FEEDBACK
  ===================================================== */

  function showFeedback(
    icon,
    title,
    text,
    type
  ) {

    feedbackIcon.textContent =
      icon;

    feedbackTitle.textContent =
      title;

    feedbackText.textContent =
      text;


    answerFeedback.classList.remove(
      "feedback-correct",
      "feedback-wrong"
    );


    answerFeedback.classList.add(
      type === "correct"
        ? "feedback-correct"
        : "feedback-wrong"
    );


    answerFeedback.style.display =
      "flex";
  }


  /* =====================================================
     TOMBOL SELANJUTNYA
  ===================================================== */

  function prepareNextButton() {

    nextButton.style.display =
      "flex";


    if (
      currentQuestion ===
      questions.length - 1
    ) {

      nextText.textContent =
        "Lihat Hasil";

    } else {

      nextText.textContent =
        "Soal Berikutnya";

    }
  }


  /* =====================================================
     SOAL BERIKUTNYA
  ===================================================== */

  function nextQuestion() {

    if (!answered) return;


    if (
      currentQuestion <
      questions.length - 1
    ) {

      currentQuestion++;

      showQuestion();

    } else {

      finishQuiz();

    }
  }


  /* =====================================================
     HASIL
  ===================================================== */

  function finishQuiz() {

    clearInterval(timer);

    rushGame.style.display =
      "none";

    rushResult.style.display =
      "flex";


    finalXp.textContent =
      xp;

    finalCorrect.textContent =
      correct;

    finalWrong.textContent =
      wrong;

    finalStreak.textContent =
      bestStreak;


    const storageKey =
      `edurush_quiz_${materi}`;


    localStorage.setItem(
      storageKey,
      JSON.stringify({
        xp,
        correct,
        wrong,
        bestStreak,
        totalQuestions:
          questions.length,
        date:
          new Date().toISOString()
      })
    );


    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  /* =====================================================
     EVENT
  ===================================================== */

  startButton.addEventListener(
    "click",
    startQuiz
  );

  retryButton.addEventListener(
    "click",
    startQuiz
  );

  nextButton.addEventListener(
    "click",
    nextQuestion
  );

});