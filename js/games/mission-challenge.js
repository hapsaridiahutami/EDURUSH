
document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // ELEMENT
  // =========================

  const startBtn = document.getElementById("startBtn");
  const startOverlay = document.getElementById("startOverlay");

  const finishOverlay = document.getElementById("finishOverlay");
  const finalXP = document.getElementById("finalXP");

  const xpEl = document.getElementById("xp");
  const missionCountEl = document.getElementById("missionCount");

  const missionNumberEl = document.getElementById("missionNumber");
  const missionTitleEl = document.getElementById("missionTitle");

  const progressTextEl = document.getElementById("progressText");
  const progressFillEl = document.getElementById("progressFill");

  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");

  const player = document.getElementById("player");

  const checkpoints = [
    document.querySelector('[data-cp="0"]'),
    document.querySelector('[data-cp="1"]'),
    document.querySelector('[data-cp="2"]'),
    document.querySelector('[data-cp="3"]'),
    document.querySelector('[data-cp="4"]')
  ];


  // =========================
  // DATA MISSION
  // =========================

  const missions = [
    "Temukan Jalan Keluar",
    "Lewati Zona Hutan",
    "Cari Jalan Rahasia",
    "Taklukkan Area Tinggi",
    "Capai Finish"
  ];


  // =========================
  // SOAL SMP
  // =========================

  const questions = [
    {
      question: "Berapakah hasil dari 12 × 8?",
      answers: [
        "86",
        "96",
        "108",
        "88"
      ],
      correct: 1
    },

    {
      question: "Planet yang dikenal sebagai Planet Merah adalah...",
      answers: [
        "Venus",
        "Mars",
        "Jupiter",
        "Saturnus"
      ],
      correct: 1
    },

    {
      question: "Hasil dari 144 ÷ 12 adalah...",
      answers: [
        "10",
        "11",
        "12",
        "14"
      ],
      correct: 2
    },

    {
      question: "Organ yang berfungsi memompa darah ke seluruh tubuh adalah...",
      answers: [
        "Paru-paru",
        "Jantung",
        "Ginjal",
        "Lambung"
      ],
      correct: 1
    },

    {
      question: "Perubahan wujud dari cair menjadi gas disebut...",
      answers: [
        "Membeku",
        "Mencair",
        "Menguap",
        "Mengembun"
      ],
      correct: 2
    }
  ];


  // =========================
  // POSISI PLAYER
  // =========================

  const playerPositions = [
    {
      left: "12%",
      bottom: "35%"
    },
    {
      left: "29%",
      bottom: "49%"
    },
    {
      left: "45%",
      bottom: "42%"
    },
    {
      left: "60%",
      bottom: "53%"
    },
    {
      left: "77%",
      bottom: "39%"
    }
  ];


  // =========================
  // GAME STATE
  // =========================

  let currentMission = 0;
  let xp = 0;
  let locked = false;


  // =========================
  // PLAYER
  // =========================

  function movePlayer(index) {

    if (!player) return;

    const position = playerPositions[index];

    if (!position) return;

    player.style.left = position.left;
    player.style.bottom = position.bottom;

    player.classList.remove("player-jump");

    void player.offsetWidth;

    player.classList.add("player-jump");
  }


  // =========================
  // CHECKPOINT
  // =========================

  function updateCheckpoints() {

    checkpoints.forEach(function (checkpoint, index) {

      if (!checkpoint) return;

      checkpoint.classList.remove("active");
      checkpoint.classList.remove("done");

      if (index < currentMission) {
        checkpoint.classList.add("done");
      }

      if (index === currentMission) {
        checkpoint.classList.add("active");
      }

    });
  }


  // =========================
  // UPDATE HUD
  // =========================

  function updateHUD() {

    if (xpEl) {
      xpEl.textContent = xp;
    }

    if (missionCountEl) {
      missionCountEl.textContent = currentMission;
    }

    if (missionNumberEl) {
      missionNumberEl.textContent =
        String(currentMission + 1).padStart(2, "0");
    }

    if (missionTitleEl) {
      missionTitleEl.textContent =
        missions[currentMission] || "Mission Challenge";
    }

    if (progressTextEl) {
      progressTextEl.textContent =
        currentMission + " / 5";
    }

    if (progressFillEl) {
      progressFillEl.style.width =
        ((currentMission / 5) * 100) + "%";
    }
  }


  // =========================
  // TAMPILKAN SOAL
  // =========================

  function showQuestion() {

    const data = questions[currentMission];

    if (!data) {
      finishGame();
      return;
    }

    locked = false;

    questionEl.textContent = data.question;

    answersEl.innerHTML = "";

    data.answers.forEach(function (answer, index) {

      const button = document.createElement("button");

      button.type = "button";
      button.className = "answer";
      button.textContent = answer;

      button.addEventListener("click", function () {

        checkAnswer(index, button);

      });

      answersEl.appendChild(button);

    });
  }


  // =========================
  // CEK JAWABAN
  // =========================

  function checkAnswer(index, button) {

    if (locked) return;

    locked = true;

    const data = questions[currentMission];

    if (index === data.correct) {

      // BENAR
      button.classList.add("correct");

      xp += 100;

      updateHUD();

      setTimeout(function () {

        currentMission++;

        if (currentMission >= questions.length) {

          finishGame();

          return;
        }

        movePlayer(currentMission);

        updateCheckpoints();

        updateHUD();

        showQuestion();

      }, 700);

    } else {

      // SALAH
      button.classList.add("wrong");

      setTimeout(function () {

        button.classList.remove("wrong");

        locked = false;

      }, 700);

    }
  }


  // =========================
  // MULAI MISI
  // =========================

  function startMission() {

    console.log("Mission Challenge dimulai!");

    currentMission = 0;
    xp = 0;
    locked = false;

    // Hilangkan layar awal
    if (startOverlay) {
      startOverlay.style.display = "none";
    }

    // Sembunyikan finish
    if (finishOverlay) {
      finishOverlay.style.display = "none";
    }

    movePlayer(0);

    updateCheckpoints();

    updateHUD();

    showQuestion();
  }


  // =========================
  // SELESAI
  // =========================

  function finishGame() {

    xp += 100;

    if (xpEl) {
      xpEl.textContent = xp;
    }

    if (finalXP) {
      finalXP.textContent = xp;
    }

    if (finishOverlay) {
      finishOverlay.style.display = "grid";
    }

    try {

      localStorage.setItem(
        "edurush_mission_result",
        JSON.stringify({
          xp: xp,
          missions: 5
        })
      );

    } catch (error) {

      console.log("Hasil tidak dapat disimpan.");

    }
  }


  // =========================
  // TOMBOL MULAI
  // =========================

  if (startBtn) {

    startBtn.addEventListener(
      "click",
      startMission
    );

  } else {

    console.error(
      "ERROR: tombol #startBtn tidak ditemukan."
    );

  }


  // =========================
  // KONDISI AWAL
  // =========================

  movePlayer(0);

  updateCheckpoints();

  updateHUD();

  console.log(
    "Mission Challenge siap dimainkan."
  );

});
