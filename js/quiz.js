/* =========================================================
   EDURUSH — QUIZ RUSH
   ========================================================= */


/* =========================================================
   SETTINGS
   ========================================================= */

const MAX_TIME = 20;
const MAX_LIVES = 3;


/* =========================================================
   SOAL
   ========================================================= */

const quizQuestions = [

  /* =====================================================
     1. PENJUMLAHAN
     ===================================================== */

  {
    type: "operation",

    tag: "⚡ HITUNG CEPAT",

    visual: `
      <div class="math-visual-equation">
        <strong>4</strong>
        <span>+</span>
        <strong>2</strong>
        <span>=</span>
        <b>?</b>
      </div>
    `,

    label: "PENJUMLAHAN",

    question:
      "Berapakah hasil dari 4 + 2?",

    options: [
      "5",
      "6",
      "7",
      "8"
    ],

    answer: "6",

    correctFeedback:
      "4 + 2 berarti menggabungkan 4 dengan 2. Jadi hasilnya 6.",

    wrongFeedback:
      "Coba hitung mulai dari 4, lalu tambah 2. Urutannya 5, lalu 6."
  },


  /* =====================================================
     2. PENGURANGAN
     ===================================================== */

  {
    type: "operation",

    tag: "🎯 HITUNG CEPAT",

    visual: `
      <div class="math-visual-equation">
        <strong>15</strong>
        <span>−</span>
        <strong>6</strong>
        <span>=</span>
        <b>?</b>
      </div>
    `,

    label: "PENGURANGAN",

    question:
      "Berapakah hasil dari 15 − 6?",

    options: [
      "7",
      "8",
      "9",
      "10"
    ],

    answer: "9",

    correctFeedback:
      "15 dikurangi 6. Dari 15 mundur 6 langkah: 14, 13, 12, 11, 10, 9.",

    wrongFeedback:
      "Coba hitung mundur dari 15 sebanyak 6 langkah sampai mendapatkan hasilnya."
  },


  /* =====================================================
     3. PERKALIAN
     ===================================================== */

  {
    type: "operation",

    tag: "🔥 TANTANGAN",

    visual: `
      <div class="math-visual-equation">
        <strong>4</strong>
        <span>×</span>
        <strong>3</strong>
        <span>=</span>
        <b>?</b>
      </div>
    `,

    label: "PERKALIAN",

    question:
      "Berapakah hasil dari 4 × 3?",

    options: [
      "10",
      "11",
      "12",
      "13"
    ],

    answer: "12",

    correctFeedback:
      "4 × 3 artinya 4 kelompok yang masing-masing berisi 3. Jadi 3 + 3 + 3 + 3 = 12.",

    wrongFeedback:
      "Ingat, 4 × 3 sama dengan menjumlahkan angka 3 sebanyak 4 kali."
  },


  /* =====================================================
     4. PEMBAGIAN
     ===================================================== */

  {
    type: "operation",

    tag: "⚡ HITUNG CEPAT",

    visual: `
      <div class="math-visual-equation">
        <strong>12</strong>
        <span>÷</span>
        <strong>3</strong>
        <span>=</span>
        <b>?</b>
      </div>
    `,

    label: "PEMBAGIAN",

    question:
      "Berapakah hasil dari 12 ÷ 3?",

    options: [
      "3",
      "4",
      "5",
      "6"
    ],

    answer: "4",

    correctFeedback:
      "12 ÷ 3 berarti 12 dibagi menjadi 3 kelompok yang sama. Setiap kelompok berisi 4.",

    wrongFeedback:
      "Coba pikirkan: angka berapa yang jika dikalikan 3 hasilnya 12?"
  }

];


/* =========================================================
   STATE
   ========================================================= */

let currentQuestion = 0;

let xp = 0;
let streak = 0;
let bestStreak = 0;

let correctAnswers = 0;
let wrongAnswers = 0;

let lives = MAX_LIVES;

let timer = MAX_TIME;

let timerInterval = null;

let answered = false;

let soundEnabled = true;

let audioContext = null;


/* =========================================================
   ELEMENT
   ========================================================= */

const startScreen =
  document.getElementById("rush-start");

const gameScreen =
  document.getElementById("rush-game");

const resultScreen =
  document.getElementById("rush-result");


const startButton =
  document.getElementById("start-button");

const retryButton =
  document.getElementById("retry-button");


const questionNumber =
  document.getElementById("question-number");

const questionTotal =
  document.getElementById("question-total");

const progressFill =
  document.getElementById("progress-fill");


const streakElement =
  document.getElementById("streak");

const xpElement =
  document.getElementById("xp");


const lifeDisplay =
  document.getElementById("life-display");


const timerElement =
  document.getElementById("timer");

const timerProgress =
  document.getElementById("timer-progress");

const timerCircle =
  document.getElementById("timer-circle");


const challengeType =
  document.getElementById("challenge-type");

const challengeVisual =
  document.getElementById("challenge-visual");


const questionLabel =
  document.getElementById("question-label");

const questionText =
  document.getElementById("question-text");


const answerGrid =
  document.getElementById("answer-grid");


const feedback =
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


const soundToggle =
  document.getElementById("sound-toggle");


const finalXP =
  document.getElementById("final-xp");

const finalCorrect =
  document.getElementById("final-correct");

const finalWrong =
  document.getElementById("final-wrong");

const finalStreak =
  document.getElementById("final-streak");


/* =========================================================
   INITIAL
   ========================================================= */

questionTotal.textContent =
  quizQuestions.length;

gameScreen.style.display =
  "none";

resultScreen.classList.remove(
  "show"
);

updateStats();


/* =========================================================
   START
   ========================================================= */

startButton.addEventListener(
  "click",
  startGame
);


function startGame() {

  currentQuestion = 0;

  xp = 0;

  streak = 0;

  bestStreak = 0;

  correctAnswers = 0;

  wrongAnswers = 0;

  lives = MAX_LIVES;

  questionTotal.textContent =
    quizQuestions.length;

  startScreen.style.display =
    "none";

  resultScreen.classList.remove(
    "show"
  );

  gameScreen.style.display =
    "block";

  updateStats();

  loadQuestion();

  playClick();
}


/* =========================================================
   LOAD QUESTION
   ========================================================= */

function loadQuestion() {

  clearInterval(
    timerInterval
  );

  answered = false;

  const question =
    quizQuestions[currentQuestion];


  questionNumber.textContent =
    String(currentQuestion + 1)
      .padStart(2, "0");


  progressFill.style.width =
    `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;


  challengeType.textContent =
    question.tag;

  challengeVisual.innerHTML =
    question.visual;

  questionLabel.textContent =
    question.label;

  questionText.textContent =
    question.question;


  feedback.classList.remove(
    "show"
  );


  nextButton.disabled = true;


  if (
    currentQuestion ===
    quizQuestions.length - 1
  ) {

    nextText.textContent =
      "Lihat Hasil";

  } else {

    nextText.textContent =
      "Tantangan Berikutnya";

  }


  createAnswerButtons(
    question
  );


  startTimer();

}


/* =========================================================
   CREATE ANSWERS
   ========================================================= */

function createAnswerButtons(question) {

  answerGrid.innerHTML = "";

  question.options.forEach(
    (option, index) => {

      const button =
        document.createElement("button");

      button.type =
        "button";

      button.textContent =
        option;

      button.dataset.answer =
        option;

      button.addEventListener(
        "click",
        () => {

          chooseAnswer(
            option,
            button
          );

        }
      );


      answerGrid.appendChild(
        button
      );


      button.animate(
        [
          {
            opacity: 0,
            transform:
              "translateY(10px)"
          },

          {
            opacity: 1,
            transform:
              "translateY(0)"
          }
        ],
        {
          duration: 250,
          delay: index * 60,
          fill: "both"
        }
      );

    }
  );

}


/* =========================================================
   CHOOSE ANSWER
   ========================================================= */

function chooseAnswer(
  selectedAnswer,
  selectedButton
) {

  if (answered) return;

  answered = true;

  clearInterval(
    timerInterval
  );


  const question =
    quizQuestions[currentQuestion];


  const buttons =
    answerGrid.querySelectorAll(
      "button"
    );


  buttons.forEach(
    button => {

      button.disabled = true;

    }
  );


  if (
    selectedAnswer ===
    question.answer
  ) {

    selectedButton.classList.add(
      "correct"
    );

    showCorrect(
      question
    );

  } else {

    selectedButton.classList.add(
      "wrong"
    );

    buttons.forEach(
      button => {

        if (
          button.dataset.answer ===
          question.answer
        ) {

          button.classList.add(
            "correct"
          );

        }

      }
    );

    showWrong(
      question
    );

  }


  nextButton.disabled = false;

}


/* =========================================================
   CORRECT
   ========================================================= */

function showCorrect(question) {

  correctAnswers++;

  streak++;


  if (
    streak >
    bestStreak
  ) {

    bestStreak =
      streak;

  }


  const bonus =
    Math.min(
      (streak - 1) * 2,
      10
    );


  const gainedXP =
    10 + bonus;


  xp += gainedXP;


  playCorrect();


  feedback.classList.add(
    "show"
  );


  feedbackIcon.textContent =
    "✓";

  feedbackTitle.textContent =
    streak >= 3
      ? "🔥 Streak mantap!"
      : "Mantap!";


  feedbackText.textContent =
    `${question.correctFeedback} +${gainedXP} XP`;


  updateStats();


  xpElement.animate(
    [
      {
        transform:
          "scale(1)"
      },

      {
        transform:
          "scale(1.35)"
      },

      {
        transform:
          "scale(1)"
      }
    ],
    {
      duration: 400
    }
  );

}


/* =========================================================
   WRONG
   ========================================================= */

function showWrong(question) {

  wrongAnswers++;

  streak = 0;

  lives--;


  if (
    lives < 0
  ) {

    lives = 0;

  }


  playWrong();


  feedback.classList.add(
    "show"
  );


  feedbackIcon.textContent =
    "!";

  feedbackTitle.textContent =
    "Belum tepat";


  feedbackText.textContent =
    `${question.wrongFeedback} Jawaban yang benar: ${question.answer}.`;


  updateStats();


  const card =
    document.querySelector(
      ".game-card"
    );


  if (card) {

    card.animate(
      [
        {
          transform:
            "translateX(0)"
        },

        {
          transform:
            "translateX(-6px)"
        },

        {
          transform:
            "translateX(6px)"
        },

        {
          transform:
            "translateX(0)"
        }
      ],
      {
        duration: 300
      }
    );

  }

}


/* =========================================================
   STATS
   ========================================================= */

function updateStats() {

  xpElement.textContent =
    xp;

  streakElement.textContent =
    streak;


  lifeDisplay.innerHTML =
    "♥".repeat(lives) +
    `<span class="lost-lives">${
      "♡".repeat(
        MAX_LIVES - lives
      )
    }</span>`;

}


/* =========================================================
   TIMER
   ========================================================= */

function startTimer() {

  timer =
    MAX_TIME;

  updateTimer();


  timerInterval =
    setInterval(
      () => {

        timer--;

        updateTimer();


        if (
          timer <= 5 &&
          timer > 0
        ) {

          playTick();

        }


        if (
          timer <= 0
        ) {

          clearInterval(
            timerInterval
          );

          timeUp();

        }

      },
      1000
    );

}


/* =========================================================
   UPDATE TIMER
   ========================================================= */

function updateTimer() {

  timerElement.textContent =
    timer;


  const circumference =
    132;


  const offset =
    circumference -
    (
      timer /
      MAX_TIME
    ) *
    circumference;


  timerProgress.style.strokeDashoffset =
    offset;


  if (
    timer <= 5
  ) {

    timerElement.style.color =
      "var(--orange)";

  } else {

    timerElement.style.color =
      "var(--green-dark)";

  }

}


/* =========================================================
   TIME UP
   ========================================================= */

function timeUp() {

  if (answered) return;

  answered = true;

  wrongAnswers++;

  streak = 0;


  playWrong();


  const question =
    quizQuestions[currentQuestion];


  const buttons =
    answerGrid.querySelectorAll(
      "button"
    );


  buttons.forEach(
    button => {

      button.disabled = true;


      if (
        button.dataset.answer ===
        question.answer
      ) {

        button.classList.add(
          "correct"
        );

      }

    }
  );


  feedback.classList.add(
    "show"
  );


  feedbackIcon.textContent =
    "⏱";

  feedbackTitle.textContent =
    "Waktunya habis!";


  feedbackText.textContent =
    `${question.correctFeedback} Jawaban yang benar: ${question.answer}.`;


  updateStats();


  nextButton.disabled = false;

}


/* =========================================================
   NEXT BUTTON
   ========================================================= */

nextButton.addEventListener(
  "click",
  goToNext
);


function goToNext() {

  if (!answered) return;


  playClick();


  if (
    currentQuestion <
    quizQuestions.length - 1
  ) {

    currentQuestion++;

    loadQuestion();

  } else {

    finishGame();

  }

}


/* =========================================================
   FINISH
   ========================================================= */

function finishGame() {

  clearInterval(
    timerInterval
  );


  currentQuestion =
    quizQuestions.length;


  gameScreen.style.display =
    "none";


  resultScreen.classList.add(
    "show"
  );


  finalXP.textContent =
    xp;

  finalCorrect.textContent =
    correctAnswers;

  finalWrong.textContent =
    wrongAnswers;

  finalStreak.textContent =
    bestStreak;


  playFinish();


  localStorage.setItem(
    "edurush_last_quiz",
    JSON.stringify({
      xp,
      correct:
        correctAnswers,
      wrong:
        wrongAnswers,
      streak:
        bestStreak,
      date:
        new Date().toISOString()
    })
  );


  resultScreen.scrollIntoView({
    behavior:
      "smooth"
  });

}


/* =========================================================
   RETRY
   ========================================================= */

retryButton.addEventListener(
  "click",
  startGame
);


/* =========================================================
   SOUND
   ========================================================= */

function getAudio() {

  if (!audioContext) {

    const AudioContext =
      window.AudioContext ||
      window.webkitAudioContext;


    if (AudioContext) {

      audioContext =
        new AudioContext();

    }

  }

  return audioContext;

}


function tone(
  frequency,
  duration,
  type = "sine",
  volume = 0.05
) {

  if (!soundEnabled) return;


  const ctx =
    getAudio();


  if (!ctx) return;


  if (
    ctx.state ===
    "suspended"
  ) {

    ctx.resume();

  }


  const oscillator =
    ctx.createOscillator();

  const gain =
    ctx.createGain();


  oscillator.type =
    type;

  oscillator.frequency.value =
    frequency;


  gain.gain.setValueAtTime(
    volume,
    ctx.currentTime
  );


  gain.gain.exponentialRampToValueAtTime(
    0.001,
    ctx.currentTime +
    duration
  );


  oscillator.connect(
    gain
  );

  gain.connect(
    ctx.destination
  );


  oscillator.start();


  oscillator.stop(
    ctx.currentTime +
    duration
  );

}


function playClick() {

  tone(
    520,
    0.07,
    "sine",
    0.04
  );

}


function playCorrect() {

  tone(
    660,
    0.1,
    "sine",
    0.06
  );


  setTimeout(
    () => {

      tone(
        880,
        0.15,
        "sine",
        0.06
      );

    },
    90
  );

}


function playWrong() {

  tone(
    180,
    0.18,
    "sawtooth",
    0.045
  );

}


function playTick() {

  tone(
    430,
    0.05,
    "square",
    0.025
  );

}


function playFinish() {

  tone(
    523,
    0.12,
    "sine",
    0.06
  );


  setTimeout(
    () => {

      tone(
        659,
        0.12,
        "sine",
        0.06
      );

    },
    120
  );


  setTimeout(
    () => {

      tone(
        784,
        0.2,
        "sine",
        0.07
      );

    },
    240
  );

}


/* =========================================================
   SOUND TOGGLE
   ========================================================= */

soundToggle.addEventListener(
  "click",
  () => {

    soundEnabled =
      !soundEnabled;


    soundToggle.textContent =
      soundEnabled
        ? "🔊"
        : "🔇";


    soundToggle.setAttribute(
      "aria-label",
      soundEnabled
        ? "Matikan suara"
        : "Nyalakan suara"
    );


    if (
      soundEnabled
    ) {

      playClick();

    }

  }
);