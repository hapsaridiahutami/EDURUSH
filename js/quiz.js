
document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     PENGATURAN QUIZ
  ========================= */

  const MAX_TIME = 20;
  const MAX_LIVES = 3;

  const params = new URLSearchParams(window.location.search);

  const materi =
    params.get("materi") ||
    document.body.dataset.materi ||
    "operasi";


  /* =========================
     ELEMEN HTML
  ========================= */

  const startScreen = document.getElementById("quiz-start");
  const gameScreen = document.getElementById("rush-game");
  const resultScreen = document.getElementById("rush-result");

  const startButton = document.getElementById("start-button");
  const retryButton = document.getElementById("retry-button");

  const startDescription = document.getElementById("start-description");
  const startTotal = document.getElementById("start-total");

  const questionNumber = document.getElementById("question-number");
  const questionTotal = document.getElementById("question-total");
  const questionText = document.getElementById("question-text");
  const questionLabel = document.getElementById("question-label");

  const challengeType = document.getElementById("challenge-type");
  const visualHelper = document.getElementById("visual-helper");
  const challengeVisual = document.getElementById("challenge-visual");

  const answerGrid = document.getElementById("answer-grid");

  const answerFeedback = document.getElementById("answer-feedback");
  const feedbackIcon = document.getElementById("feedback-icon");
  const feedbackTitle = document.getElementById("feedback-title");
  const feedbackText = document.getElementById("feedback-text");

  const nextButton = document.getElementById("next-button");
  const nextText = document.getElementById("next-text");

  const timerElement = document.getElementById("timer");
  const timerCircle = document.getElementById("timer-circle");
  const timerProgress = document.getElementById("timer-progress");

  const progressFill = document.getElementById("progress-fill");

  const lifeDisplay = document.getElementById("life-display");
  const streakElement = document.getElementById("streak");
  const xpElement = document.getElementById("xp");

  const finalXP = document.getElementById("final-xp");
  const finalCorrect = document.getElementById("final-correct");
  const finalWrong = document.getElementById("final-wrong");
  const finalStreak = document.getElementById("final-streak");


  /* =========================
     VISUAL PECAHAN
  ========================= */

  function fractionPie(parts, filled) {

    const filledPercent = (filled / parts) * 100;

    return `
      <div
        class="fraction-pie"
        style="
          background:
            conic-gradient(
              var(--green) 0% ${filledPercent}%,
              var(--yellow-soft) ${filledPercent}% 100%
            );
        "
        aria-hidden="true"
      >
        <div class="pie-inner"></div>
      </div>
    `;
  }


  function threeQuarterVisual() {

    return `
      <div class="fraction-board">

        <div class="fraction-card">

          ${fractionPie(4, 3)}

        </div>

      </div>
    `;
  }


  function halfVisual() {

    return `
      <div class="fraction-board">

        <div class="fraction-card">

          ${fractionPie(2, 1)}

        </div>

      </div>
    `;
  }


  function compareFractionVisual() {

    return `
      <div class="fraction-compare">

        <div class="fraction-card small">
          ${fractionPie(4, 1)}
        </div>

        <div class="compare-symbol">
          ?
        </div>

        <div class="fraction-card small">
          ${fractionPie(2, 1)}
        </div>

      </div>
    `;
  }


  function addFractionVisual() {

    return `
      <div class="fraction-add">

        <div class="fraction-card small">
          ${fractionPie(4, 1)}
        </div>

        <div class="fraction-operator">
          +
        </div>

        <div class="fraction-card small">
          ${fractionPie(4, 1)}
        </div>

        <div class="fraction-operator">
          =
        </div>

        <div class="fraction-result">
          ?
        </div>

      </div>
    `;
  }


  /* =========================
     VISUAL BANGUN DATAR
  ========================= */

  function shapeVisual(shape) {

    let shapeSVG = "";

    if (shape === "square") {

      shapeSVG = `
        <rect
          x="55"
          y="20"
          width="130"
          height="130"
          rx="5"
          class="svg-square"
        />
      `;

    } else if (shape === "circle") {

      shapeSVG = `
        <circle
          cx="120"
          cy="90"
          r="68"
          class="svg-circle"
        />
      `;

    } else if (shape === "triangle") {

      shapeSVG = `
        <polygon
          points="120,20 48,150 192,150"
          class="svg-triangle"
        />
      `;

    } else if (shape === "rectangle") {

      shapeSVG = `
        <rect
          x="35"
          y="48"
          width="170"
          height="88"
          rx="5"
          class="svg-rectangle"
        />
      `;
    }

    return `
      <div class="shape-stage">

        <div class="shape-card">

          <svg
            class="shape-svg"
            viewBox="0 0 240 190"
            aria-hidden="true"
          >
            ${shapeSVG}
          </svg>

        </div>

      </div>
    `;
  }


  /* =========================
     VISUAL OPERASI
  ========================= */

  function additionVisual() {

    return `
      <div class="operation-visual">

        <div class="number-card">
          <strong>24</strong>
          <span class="place-label">jumlah pertama</span>

          <div class="block-row">
            <div class="ten-group">
              ${Array.from(
                { length: 2 },
                () => `<span class="ten-block"></span>`
              ).join("")}
            </div>

            <div class="ones-group">
              ${Array.from(
                { length: 4 },
                () => `<span class="one-block"></span>`
              ).join("")}
            </div>
          </div>
        </div>

        <div class="big-operator">
          +
        </div>

        <div class="number-card">
          <strong>15</strong>
          <span class="place-label">jumlah kedua</span>

          <div class="block-row">
            <div class="ten-group">
              ${Array.from(
                { length: 1 },
                () => `<span class="ten-block"></span>`
              ).join("")}
            </div>

            <div class="ones-group">
              ${Array.from(
                { length: 5 },
                () => `<span class="one-block"></span>`
              ).join("")}
            </div>
          </div>
        </div>

        <div class="visual-question">
          =
          <strong>?</strong>
        </div>

      </div>
    `;
  }


  function subtractionVisual() {

    return `
      <div class="operation-visual">

        <div class="number-card">
          <strong>56</strong>
          <span class="place-label">jumlah awal</span>

          <div class="block-row">
            <div class="ten-group">
              ${Array.from(
                { length: 5 },
                () => `<span class="ten-block"></span>`
              ).join("")}
            </div>

            <div class="ones-group">
              ${Array.from(
                { length: 6 },
                () => `<span class="one-block"></span>`
              ).join("")}
            </div>
          </div>
        </div>

        <div class="big-operator minus">
          −
        </div>

        <div class="number-card remove-card">
          <strong>28</strong>
          <span class="place-label">yang diambil</span>

          <div class="mini-remove">
            ${Array.from(
              { length: 8 },
              () => `<span class="remove-dot"></span>`
            ).join("")}
          </div>
        </div>

        <div class="visual-question">
          =
          <strong>?</strong>
        </div>

      </div>
    `;
  }


  function multiplicationVisual() {

    return `
      <div class="multiplication-visual">

        <div class="array-title">
          <span>7</span>
          kelompok dengan
          <span>8</span>
          benda
        </div>

        <div
          class="array-grid"
          style="--cols: 8;"
        >
          ${Array.from(
            { length: 56 },
            () => `<span></span>`
          ).join("")}
        </div>

        <div class="array-equation">
          7 × 8 =
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
          dibagi rata menjadi
          <strong>9 kelompok</strong>
        </div>

        <div class="division-groups">

          ${Array.from(
            { length: 9 },
            (_, groupIndex) => `
              <div class="division-group">

                <small>Kelompok ${groupIndex + 1}</small>

                <div class="group-dots">

                  ${Array.from(
                    { length: 8 },
                    () => `
                      <span class="visual-dot"></span>
                    `
                  ).join("")}

                </div>

                <strong>?</strong>

              </div>
            `
          ).join("")}

        </div>

        <div class="division-equation">
          72 ÷ 9 =
          <strong>?</strong>
        </div>

      </div>
    `;
  }


  /* =========================
     SOAL QUIZ
  ========================= */

  const questionSets = {

    /* =====================
       OPERASI HITUNG
    ===================== */

    operasi: [

      {
        question: "Berapakah hasil dari 24 + 15?",

        answers: [
          "39",
          "38",
          "40",
          "41"
        ],

        correct: 0,

        type: "➕ PENJUMLAHAN",

        helper:
          "Gabungkan jumlah pertama dan jumlah kedua.",

        visual: additionVisual()
      },


      {
        question: "Berapakah hasil dari 56 − 28?",

        answers: [
          "26",
          "28",
          "30",
          "32"
        ],

        correct: 1,

        type: "➖ PENGURANGAN",

        helper:
          "Kurangkan bagian yang diambil dari jumlah awal.",

        visual: subtractionVisual()
      },


      {
        question: "Berapakah hasil dari 7 × 8?",

        answers: [
          "48",
          "54",
          "56",
          "64"
        ],

        correct: 2,

        type: "✖️ PERKALIAN",

        helper:
          "Hitung jumlah seluruh benda pada kelompok.",

        visual: multiplicationVisual()
      },


      {
        question: "Berapakah hasil dari 72 ÷ 9?",

        answers: [
          "6",
          "7",
          "8",
          "9"
        ],

        correct: 2,

        type: "➗ PEMBAGIAN",

        helper:
          "Perhatikan jumlah benda pada setiap kelompok.",

        visual: divisionVisual()
      }

    ],


    /* =====================
       PECAHAN
    ===================== */

    pecahan: [

      {
        question:
          "Pecahan yang menunjukkan bagian berwarna pada gambar adalah ...",

        answers: [
          "3/4",
          "2/4",
          "1/4",
          "4/4"
        ],

        correct: 0,

        type: "🍕 AMATI BAGIAN",

        helper:
          "Hitung bagian yang berwarna dan jumlah seluruh bagian.",

        visual: threeQuarterVisual()
      },


      {
        question:
          "Pada gambar, lingkaran dibagi menjadi berapa bagian yang sama besar?",

        answers: [
          "2 bagian",
          "3 bagian",
          "4 bagian",
          "5 bagian"
        ],

        correct: 0,

        type: "🍕 HITUNG BAGIAN",

        helper:
          "Perhatikan jumlah bagian yang dibentuk oleh garis pembagi.",

        visual: halfVisual()
      },


      {
        question:
          "Bagian berwarna yang lebih banyak terdapat pada gambar ...",

        answers: [
          "Kiri",
          "Kanan",
          "Sama banyak",
          "Tidak dapat ditentukan"
        ],

        correct: 1,

        type: "🍕 BANDINGKAN",

        helper:
          "Bandingkan banyaknya bagian berwarna pada kedua gambar.",

        visual: compareFractionVisual()
      },


      {
        question:
          "Berapakah hasil dari 1/4 + 1/4?",

        answers: [
          "1/2",
          "1/3",
          "2/3",
          "1"
        ],

        correct: 0,

        type: "➕ JUMLAHKAN PECAHAN",

        helper:
          "Gabungkan dua bagian yang masing-masing bernilai seperempat.",

        visual: addFractionVisual()
      }

    ],


    /* =====================
       BANGUN DATAR
    ===================== */

    bangun: [

      {
        question:
          "Bangun datar yang memiliki 4 sisi sama panjang adalah ...",

        answers: [
          "Persegi",
          "Persegi panjang",
          "Segitiga",
          "Lingkaran"
        ],

        correct: 0,

        type: "▣ AMATI BENTUK",

        helper:
          "Perhatikan bentuk dan panjang setiap sisinya.",

        visual: `
          <div class="shape-stage">

            <div class="shape-card">

              <svg
                class="shape-svg"
                viewBox="0 0 240 190"
                aria-hidden="true"
              >

                <rect
                  x="55"
                  y="20"
                  width="130"
                  height="130"
                  rx="5"
                  class="svg-square"
                />

              </svg>

            </div>

          </div>
        `
      },


      {
        question:
          "Bangun datar yang tidak memiliki titik sudut adalah ...",

        answers: [
          "Lingkaran",
          "Persegi",
          "Segitiga",
          "Persegi panjang"
        ],

        correct: 0,

        type: "○ PERHATIKAN BENTUK",

        helper:
          "Cari bentuk yang tidak mempunyai titik sudut.",

        visual: `
          <div class="shape-stage">

            <div class="shape-card">

              <svg
                class="shape-svg"
                viewBox="0 0 240 190"
                aria-hidden="true"
              >

                <circle
                  cx="120"
                  cy="90"
                  r="68"
                  class="svg-circle"
                />

              </svg>

            </div>

          </div>
        `
      },


      {
        question:
          "Berapa jumlah sisi pada bangun datar yang terlihat?",

        answers: [
          "2 sisi",
          "3 sisi",
          "4 sisi",
          "5 sisi"
        ],

        correct: 1,

        type: "△ HITUNG SISI",

        helper:
          "Hitung semua sisi pada gambar.",

        visual: `
          <div class="shape-stage">

            <div class="shape-card">

              <svg
                class="shape-svg"
                viewBox="0 0 240 190"
                aria-hidden="true"
              >

                <polygon
                  points="120,20 48,150 192,150"
                  class="svg-triangle"
                />

              </svg>

            </div>

          </div>
        `
      },


      {
        question:
          "Berapa jumlah sisi pada bangun datar yang terlihat?",

        answers: [
          "2 sisi",
          "3 sisi",
          "4 sisi",
          "5 sisi"
        ],

        correct: 2,

        type: "▭ HITUNG SISI",

        helper:
          "Hitung semua sisi pada gambar.",

        visual: `
          <div class="shape-stage">

            <div class="shape-card">

              <svg
                class="shape-svg"
                viewBox="0 0 240 190"
                aria-hidden="true"
              >

                <rect
                  x="35"
                  y="48"
                  width="170"
                  height="88"
                  rx="5"
                  class="svg-rectangle"
                />

              </svg>

            </div>

          </div>
        `
      }

    ]

  };


  /* =========================
     PILIH SOAL
  ========================= */

  let questions =
    questionSets[materi] || questionSets.operasi;

  let currentQuestion = 0;
  let timeLeft = MAX_TIME;
  let lives = MAX_LIVES;

  let xp = 0;
  let streak = 0;
  let bestStreak = 0;

  let correctCount = 0;
  let wrongCount = 0;

  let timerInterval = null;
  let answered = false;


  /* =========================
     NAMA MATERI
  ========================= */

  const materialNames = {
    operasi: "Operasi Hitung",
    pecahan: "Pecahan",
    bangun: "Bangun Datar"
  };


  if (startDescription) {

    startDescription.textContent =
      `Jawab soal ${materialNames[materi] || "matematika"} dengan membaca soal dan memperhatikan visual yang tersedia.`;
  }


  if (startTotal) {

    startTotal.textContent =
      String(questions.length).padStart(2, "0");
  }


  if (questionTotal) {

    questionTotal.textContent =
      String(questions.length).padStart(2, "0");
  }


  /* =========================
     TIMER CIRCLE
  ========================= */

  const timerRadius = 21;

  const timerCircumference =
    2 * Math.PI * timerRadius;


  if (timerProgress) {

    timerProgress.style.strokeDasharray =
      `${timerCircumference}`;

    timerProgress.style.strokeDashoffset =
      "0";
  }


  function updateTimerVisual() {

    if (timerElement) {

      timerElement.textContent =
        timeLeft;
    }


    if (timerProgress) {

      const progress =
        timeLeft / MAX_TIME;

      const offset =
        timerCircumference *
        (1 - progress);

      timerProgress.style.strokeDashoffset =
        offset;
    }


    if (timerCircle) {

      timerCircle.classList.remove(
        "timer-warning",
        "timer-danger"
      );

      if (timeLeft <= 5) {

        timerCircle.classList.add(
          "timer-danger"
        );

      } else if (timeLeft <= 10) {

        timerCircle.classList.add(
          "timer-warning"
        );
      }
    }
  }


  /* =========================
     TIMER
  ========================= */

  function startTimer() {

    clearInterval(timerInterval);

    timeLeft = MAX_TIME;

    updateTimerVisual();

    timerInterval = setInterval(() => {

      if (answered) return;

      timeLeft--;

      updateTimerVisual();

      if (timeLeft <= 0) {

        clearInterval(timerInterval);

        handleTimeout();
      }

    }, 1000);
  }


  function stopTimer() {

    clearInterval(timerInterval);

    timerInterval = null;
  }


  /* =========================
     NYAWA
  ========================= */

  function updateLives() {

    if (!lifeDisplay) return;

    lifeDisplay.textContent =
      `${lives} nyawa`;

    lifeDisplay.classList.remove(
      "life-warning",
      "life-danger"
    );

    if (lives === 1) {

      lifeDisplay.classList.add(
        "life-danger"
      );

    } else if (lives === 2) {

      lifeDisplay.classList.add(
        "life-warning"
      );
    }
  }


  /* =========================
     XP & STREAK
  ========================= */

  function updateStats() {

    if (xpElement) {

      xpElement.textContent =
        xp;
    }

    if (streakElement) {

      streakElement.textContent =
        streak;
    }

    updateLives();
  }


  /* =========================
     PROGRESS
  ========================= */

  function updateProgress() {

    if (!progressFill) return;

    const progress =
      (currentQuestion / questions.length) * 100;

    progressFill.style.width =
      `${progress}%`;
  }


  /* =========================
     TAMPILKAN SOAL
  ========================= */

  function loadQuestion() {

    if (currentQuestion >= questions.length) {

      finishQuiz();

      return;
    }

    answered = false;

    const question =
      questions[currentQuestion];


    if (questionNumber) {

      questionNumber.textContent =
        String(currentQuestion + 1).padStart(2, "0");
    }


    if (questionTotal) {

      questionTotal.textContent =
        String(questions.length).padStart(2, "0");
    }


    if (questionLabel) {

      questionLabel.textContent =
        "PERTANYAAN";
    }


    if (questionText) {

      questionText.textContent =
        question.question;
    }


    if (challengeType) {

      challengeType.textContent =
        question.type;
    }


    if (visualHelper) {

      visualHelper.textContent =
        question.helper;
    }


    if (challengeVisual) {

      challengeVisual.innerHTML =
        question.visual;

      /* Memicu ulang animasi visual */
      challengeVisual.style.animation = "none";

      requestAnimationFrame(() => {

        challengeVisual.style.animation =
          "";

      });
    }


    /* =========================
       JAWABAN
    ========================= */

    if (answerGrid) {

      answerGrid.innerHTML = "";

      question.answers.forEach(
        (answer, index) => {

          const button =
            document.createElement("button");

          button.type = "button";

          button.className =
            "answer-button";

          button.dataset.index =
            index;

          /*
             Huruf A/B/C/D dibuat
             oleh ::before di CSS.
          */

          button.innerHTML = `
            <span class="answer-text">
              ${answer}
            </span>
          `;

          button.addEventListener(
            "click",
            () => selectAnswer(index)
          );

          answerGrid.appendChild(button);
        }
      );
    }


    /* =========================
       RESET FEEDBACK
    ========================= */

    if (answerFeedback) {

      answerFeedback.classList.remove(
        "show",
        "feedback-correct",
        "feedback-wrong",
        "correct",
        "wrong"
      );

      answerFeedback.style.display =
        "none";
    }


    if (nextButton) {

      nextButton.classList.remove(
        "show"
      );

      nextButton.style.display =
        "none";
    }


    if (nextText) {

      nextText.textContent =
        currentQuestion === questions.length - 1
          ? "Lihat Hasil"
          : "Soal Berikutnya";
    }


    updateProgress();

    updateStats();

    startTimer();
  }


  /* =========================
     PILIH JAWABAN
  ========================= */

  function selectAnswer(selectedIndex) {

    if (answered) return;

    answered = true;

    stopTimer();

    const question =
      questions[currentQuestion];

    const isCorrect =
      selectedIndex === question.correct;


    const buttons =
      answerGrid
        ? answerGrid.querySelectorAll(".answer-button")
        : [];


    buttons.forEach((button, index) => {

      button.disabled = true;

      if (index === question.correct) {

        button.classList.add(
          "correct"
        );
      }

      if (
        index === selectedIndex &&
        index !== question.correct
      ) {

        button.classList.add(
          "wrong"
        );
      }
    });


    if (isCorrect) {

      handleCorrect();

    } else {

      handleWrong();
    }


    showFeedback(
      isCorrect,
      selectedIndex,
      question.correct
    );
  }


  /* =========================
     BENAR
  ========================= */

  function handleCorrect() {

    correctCount++;

    streak++;

    if (streak > bestStreak) {

      bestStreak =
        streak;
    }


    const gainedXP =
      10 + Math.min(
        streak * 2,
        10
      );

    xp += gainedXP;

    updateStats();
  }


  /* =========================
     SALAH
  ========================= */

  function handleWrong() {

    wrongCount++;

    lives--;

    streak = 0;

    if (lives < 0) {

      lives = 0;
    }

    updateStats();
  }


  /* =========================
     WAKTU HABIS
  ========================= */

  function handleTimeout() {

    if (answered) return;

    answered = true;

    wrongCount++;

    lives--;

    streak = 0;

    if (lives < 0) {

      lives = 0;
    }


    const question =
      questions[currentQuestion];


    const buttons =
      answerGrid
        ? answerGrid.querySelectorAll(".answer-button")
        : [];


    buttons.forEach(
      (button, index) => {

        button.disabled = true;

        if (index === question.correct) {

          button.classList.add(
            "correct"
          );
        }
      }
    );


    updateStats();


    if (answerFeedback) {

      answerFeedback.classList.remove(
        "feedback-correct",
        "feedback-wrong"
      );

      answerFeedback.classList.add(
        "show",
        "feedback-wrong"
      );

      answerFeedback.style.display =
        "flex";
    }


    if (feedbackIcon) {

      feedbackIcon.textContent =
        "!";
    }


    if (feedbackTitle) {

      feedbackTitle.textContent =
        "Waktu habis!";
    }


    if (feedbackText) {

      feedbackText.textContent =
        `Jawaban yang benar: ${question.answers[question.correct]}`;
    }


    showNextButton();
  }


  /* =========================
     FEEDBACK
  ========================= */

  function showFeedback(
    isCorrect,
    selectedIndex,
    correctIndex
  ) {

    if (!answerFeedback) return;


    answerFeedback.classList.remove(
      "correct",
      "wrong",
      "feedback-correct",
      "feedback-wrong"
    );


    answerFeedback.classList.add(
      "show",
      isCorrect
        ? "feedback-correct"
        : "feedback-wrong"
    );


    answerFeedback.style.display =
      "flex";


    if (feedbackIcon) {

      feedbackIcon.textContent =
        isCorrect
          ? "✓"
          : "×";
    }


    if (feedbackTitle) {

      feedbackTitle.textContent =
        isCorrect
          ? "Mantap!"
          : "Belum tepat";
    }


    if (feedbackText) {

      if (isCorrect) {

        feedbackText.textContent =
          "Jawabanmu benar. Lanjut ke tantangan berikutnya!";

      } else {

        const question =
          questions[currentQuestion];

        feedbackText.textContent =
          `Jawaban yang benar adalah ${question.answers[correctIndex]}.`;
      }
    }


    showNextButton();
  }


  /* =========================
     TOMBOL BERIKUTNYA
  ========================= */

  function showNextButton() {

    if (!nextButton) return;

    nextButton.classList.add(
      "show"
    );

    nextButton.style.display =
      "flex";
  }


  function nextQuestion() {

    currentQuestion++;

    if (
      lives <= 0 ||
      currentQuestion >= questions.length
    ) {

      finishQuiz();

      return;
    }


    loadQuestion();
  }


  if (nextButton) {

    nextButton.addEventListener(
      "click",
      nextQuestion
    );
  }


  /* =========================
     MULAI QUIZ
  ========================= */

  function startQuiz() {

    currentQuestion = 0;

    timeLeft = MAX_TIME;

    lives = MAX_LIVES;

    xp = 0;

    streak = 0;

    bestStreak = 0;

    correctCount = 0;

    wrongCount = 0;

    answered = false;


    if (startScreen) {

      startScreen.classList.add(
        "hide"
      );

      startScreen.style.display =
        "none";
    }


    if (resultScreen) {

      resultScreen.classList.remove(
        "show"
      );

      resultScreen.style.display =
        "none";
    }


    if (gameScreen) {

      gameScreen.classList.add(
        "show"
      );

      gameScreen.style.display =
        "block";
    }


    updateStats();

    loadQuestion();
  }


  if (startButton) {

    startButton.addEventListener(
      "click",
      startQuiz
    );
  }


  /* =========================
     HASIL QUIZ
  ========================= */

  function finishQuiz() {

    stopTimer();

    answered = true;


    if (gameScreen) {

      gameScreen.classList.remove(
        "show"
      );

      gameScreen.style.display =
        "none";
    }


    if (resultScreen) {

      resultScreen.classList.add(
        "show"
      );

      resultScreen.style.display =
        "flex";
    }


    if (finalXP) {

      finalXP.textContent =
        xp;
    }


    if (finalCorrect) {

      finalCorrect.textContent =
        correctCount;
    }


    if (finalWrong) {

      finalWrong.textContent =
        wrongCount;
    }


    if (finalStreak) {

      finalStreak.textContent =
        bestStreak;
    }


    localStorage.setItem(
      "edurush_last_quiz",
      JSON.stringify({
        materi: materi,
        xp: xp,
        correct: correctCount,
        wrong: wrongCount,
        bestStreak: bestStreak
      })
    );
  }


  /* =========================
     MAIN LAGI
  ========================= */

  if (retryButton) {

    retryButton.addEventListener(
      "click",
      startQuiz
    );
  }


  /* =========================
     KONDISI AWAL
  ========================= */

  if (startScreen) {

    startScreen.classList.remove(
      "hide"
    );

    startScreen.style.display =
      "flex";
  }


  if (gameScreen) {

    gameScreen.classList.remove(
      "show"
    );

    gameScreen.style.display =
      "none";
  }


  if (resultScreen) {

    resultScreen.classList.remove(
      "show"
    );

    resultScreen.style.display =
      "none";
  }


  updateLives();

});
