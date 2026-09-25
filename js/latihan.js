/* =========================================================
   EDURUSH — LATIHAN
   ========================================================= */

const params = new URLSearchParams(window.location.search);
const materi = params.get("materi") || "operasi";


/* =========================================================
   DATA LATIHAN
   ========================================================= */

const latihanData = {

  operasi: {
    title: "Latihan Operasi Hitung",
    description: "Coba selesaikan soal sederhana tentang operasi hitung.",
    quizLink: "quiz.html?materi=operasi",

    questions: [

      {
        visual: `
          <div class="math-expression">
            <span>7</span>
            <span class="operator">+</span>
            <span>5</span>
          </div>
        `,
        question: "Berapakah hasil dari 7 + 5?",
        options: ["10", "11", "12", "13"],
        answer: "12",
        feedback: "7 ditambah 5 sama dengan 12."
      },

      {
        visual: `
          <div class="math-expression">
            <span>15</span>
            <span class="operator">−</span>
            <span>6</span>
          </div>
        `,
        question: "Berapakah hasil dari 15 − 6?",
        options: ["8", "9", "10", "11"],
        answer: "9",
        feedback: "15 dikurangi 6 sama dengan 9."
      },

      {
        visual: `
          <div class="math-expression">
            <span>4</span>
            <span class="operator">×</span>
            <span>3</span>
          </div>
        `,
        question: "Berapakah hasil dari 4 × 3?",
        options: ["7", "10", "12", "14"],
        answer: "12",
        feedback: "4 dikali 3 sama dengan 12."
      }

    ]
  },


  pecahan: {
    title: "Latihan Pecahan",
    description: "Coba kenali bagian dan nilai pecahan melalui soal sederhana.",
    quizLink: "quiz.html?materi=pecahan",

    questions: [

      {
        visual: `
          <div class="fraction-visual">
            <div class="fraction-circle"></div>
            <div class="fraction-text">1/4</div>
          </div>
        `,
        question: "Pecahan 1/4 menunjukkan satu bagian dari berapa bagian yang sama besar?",
        options: ["2 bagian", "3 bagian", "4 bagian", "5 bagian"],
        answer: "4 bagian",
        feedback: "Angka 4 sebagai penyebut menunjukkan keseluruhan dibagi menjadi 4 bagian yang sama besar."
      },

      {
        visual: `
          <div class="fraction-visual">
            <div class="fraction-circle"></div>
            <div class="fraction-text">1/2</div>
          </div>
        `,
        question: "Pada pecahan 1/2, angka 1 disebut apa?",
        options: ["Penyebut", "Pembilang", "Hasil", "Keseluruhan"],
        answer: "Pembilang",
        feedback: "Angka yang berada di atas pada pecahan disebut pembilang."
      },

      {
        visual: `
          <div class="fraction-visual">
            <div class="fraction-circle"></div>
            <div class="fraction-text">3/4</div>
          </div>
        `,
        question: "Pada pecahan 3/4, angka 4 disebut apa?",
        options: ["Pembilang", "Penyebut", "Hasil", "Bagian"],
        answer: "Penyebut",
        feedback: "Angka yang berada di bawah pada pecahan disebut penyebut."
      }

    ]
  },


  bangun: {
    title: "Latihan Bangun Datar",
    description: "Kenali bentuk dan ciri-ciri bangun datar.",
    quizLink: "quiz.html?materi=bangun",

    questions: [

      {
        visual: `
          <div class="shape-visual">
            <div class="shape-square"></div>
          </div>
        `,
        question: "Bangun datar apakah yang memiliki 4 sisi sama panjang?",
        options: [
          "Segitiga",
          "Persegi",
          "Lingkaran",
          "Persegi Panjang"
        ],
        answer: "Persegi",
        feedback: "Persegi memiliki 4 sisi yang sama panjang."
      },

      {
        visual: `
          <div class="shape-visual">
            <div class="shape-triangle"></div>
          </div>
        `,
        question: "Bangun datar apakah yang memiliki 3 sisi?",
        options: [
          "Persegi",
          "Lingkaran",
          "Segitiga",
          "Persegi Panjang"
        ],
        answer: "Segitiga",
        feedback: "Segitiga memiliki 3 sisi."
      },

      {
        visual: `
          <div class="shape-visual">
            <div class="shape-circle"></div>
          </div>
        `,
        question: "Bangun datar manakah yang tidak memiliki sudut?",
        options: [
          "Persegi",
          "Segitiga",
          "Persegi Panjang",
          "Lingkaran"
        ],
        answer: "Lingkaran",
        feedback: "Lingkaran tidak memiliki sudut."
      }

    ]
  }

};


/* =========================================================
   AMBIL DATA
   ========================================================= */

const data = latihanData[materi] || latihanData.operasi;

let currentQuestion = 0;
let answered = false;


/* =========================================================
   ELEMENT
   ========================================================= */

const practiceTitle =
  document.getElementById("practice-title");

const practiceDescription =
  document.getElementById("practice-description");

const practiceNumber =
  document.getElementById("practice-number");

const practiceTotal =
  document.getElementById("practice-total");

const practiceVisual =
  document.getElementById("practice-visual");

const practiceQuestion =
  document.getElementById("practice-question");

const practiceOptions =
  document.getElementById("practice-options");

const practiceFeedback =
  document.getElementById("practice-feedback");

const feedbackIcon =
  document.getElementById("feedback-icon");

const feedbackText =
  document.getElementById("feedback-text");

const nextButton =
  document.getElementById("next-button");

const practiceFinish =
  document.getElementById("practice-finish");

const finishText =
  document.getElementById("finish-text");

const quizButton =
  document.getElementById("quiz-button");


/* =========================================================
   HEADER
   ========================================================= */

practiceTitle.textContent = data.title;
practiceDescription.textContent = data.description;

practiceTotal.textContent = `/ ${String(data.questions.length).padStart(2, "0")}`;

quizButton.href = data.quizLink;


/* =========================================================
   RENDER SOAL
   ========================================================= */

function renderQuestion() {

  const question = data.questions[currentQuestion];

  answered = false;

  practiceNumber.textContent =
    String(currentQuestion + 1).padStart(2, "0");

  practiceVisual.innerHTML = question.visual;

  practiceQuestion.textContent =
    question.question;

  practiceOptions.innerHTML = "";

  practiceFeedback.classList.remove("show");
  practiceFeedback.classList.remove("wrong");

  feedbackText.textContent = "";

  nextButton.disabled = true;

  if (currentQuestion === data.questions.length - 1) {
    nextButton.innerHTML = `
      Selesai Latihan
      <span>→</span>
    `;
  } else {
    nextButton.innerHTML = `
      Soal Berikutnya
      <span>→</span>
    `;
  }


  question.options.forEach(option => {

    const button = document.createElement("button");

    button.type = "button";
    button.className = "practice-option";
    button.textContent = option;

    button.addEventListener("click", () => {
      checkAnswer(button, option, question);
    });

    practiceOptions.appendChild(button);

  });

}


/* =========================================================
   CEK JAWABAN
   ========================================================= */

function checkAnswer(button, selected, question) {

  if (answered) return;

  answered = true;

  const buttons =
    document.querySelectorAll(".practice-option");

  buttons.forEach(btn => {
    btn.disabled = true;
  });


  if (selected === question.answer) {

    button.classList.add("correct");

    feedbackIcon.textContent = "✓";

    feedbackText.textContent =
      question.feedback;

    practiceFeedback.classList.add("show");

  } else {

    button.classList.add("wrong");

    feedbackIcon.textContent = "!";

    feedbackText.textContent =
      `Jawaban yang tepat adalah ${question.answer}. ${question.feedback}`;

    practiceFeedback.classList.add("show");
    practiceFeedback.classList.add("wrong");

  }

  nextButton.disabled = false;
}


/* =========================================================
   NEXT
   ========================================================= */

nextButton.addEventListener("click", () => {

  if (!answered) return;

  if (currentQuestion < data.questions.length - 1) {

    currentQuestion++;

    renderQuestion();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  } else {

    finishPractice();

  }

});


/* =========================================================
   FINISH
   ========================================================= */

function finishPractice() {

  document.querySelector(".practice-section").style.display = "none";

  practiceFinish.classList.add("show");

  finishText.textContent =
    `Kamu sudah menyelesaikan latihan ${data.title.replace("Latihan ", "")}. Sekarang waktunya menguji pemahamanmu lewat kuis.`;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   MULAI
   ========================================================= */

renderQuestion();