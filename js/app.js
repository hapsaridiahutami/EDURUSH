
/* =========================================================
   MOBILE MENU
   ========================================================= */

const mobileMenuButton =
  document.getElementById("mobileMenuButton");

const mobileMenu =
  document.getElementById("mobileMenu");


if (mobileMenuButton && mobileMenu) {

  mobileMenuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

    const isOpen =
      mobileMenu.classList.contains("active");

    mobileMenuButton.textContent =
      isOpen ? "✕" : "☰";

  });


  /* Tutup menu setelah memilih navigasi */

  const mobileLinks =
    mobileMenu.querySelectorAll("a");

  mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

      mobileMenu.classList.remove("active");

      mobileMenuButton.textContent = "☰";

    });

  });

}


/* =========================================================
   LOCAL STORAGE
   ========================================================= */

const EduRush = {

  /* Menyimpan pilihan setup */

  saveSetup(focus) {

    localStorage.setItem(
      "edurush_jenjang",
      "sd"
    );

    localStorage.setItem(
      "edurush_focus",
      focus
    );

    localStorage.setItem(
      "edurush_mapel",
      focus
    );

  },


  /* Mengambil fokus belajar */

  getFocus() {

    return localStorage.getItem(
      "edurush_focus"
    );

  },


  /* Menghapus data belajar */

  resetProgress() {

    localStorage.removeItem(
      "edurush_focus"
    );

    localStorage.removeItem(
      "edurush_mapel"
    );

    localStorage.removeItem(
      "edurush_jenjang"
    );

  }

};


/* =========================================================
   BUAT EDU RUSH GLOBAL
   ========================================================= */

window.EduRush = EduRush;


/* =========================================================
   CONSOLE
   ========================================================= */

console.log(
  "EduRush berhasil dijalankan."
);
