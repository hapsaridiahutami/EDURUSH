(function buildBank() {
  "use strict";

  const bank = [];
  let n = 0;

  function push(item) {
    n += 1;
    bank.push({
      id: "q" + n,
      explanation: item.explanation || "",
      ...item
    });
  }

  function pack(jenjang, mapel, items) {
    (items.mcq || []).forEach(function (q) {
      push({
        jenjang: jenjang,
        mapel: mapel,
        tipe: "mcq",
        question: q[0],
        options: q[1],
        answer: q[2],
        explanation: q[3] || ""
      });
    });

    (items.tf || []).forEach(function (q) {
      push({
        jenjang: jenjang,
        mapel: mapel,
        tipe: "true_false",
        question: q[0],
        answer: q[1],
        explanation: q[2] || ""
      });
    });

    (items.pair || []).forEach(function (q) {
      push({
        jenjang: jenjang,
        mapel: mapel,
        tipe: "pair",
        term: q[0],
        def: q[1]
      });
    });

    (items.order || []).forEach(function (q) {
      push({
        jenjang: jenjang,
        mapel: mapel,
        tipe: "order",
        question: q[0],
        items: q[1],
        explanation: q[2] || ""
      });
    });
  }

  // =========================================================
  // SD MATEMATIKA
  // =========================================================

  pack("sd", "matematika", {
    mcq: [
      ["8 + 7 = ?", ["14", "15", "16", "17"], "15", ""],
      ["12 − 5 = ?", ["5", "6", "7", "8"], "7", ""],
      ["4 × 5 = ?", ["15", "20", "25", "30"], "20", ""],
      ["18 : 3 = ?", ["5", "6", "7", "8"], "6", ""],
      ["Pecahan yang sama dengan 1/2 adalah…", ["1/3", "2/4", "3/5", "4/6"], "2/4", ""],
      ["Bilangan genap adalah…", ["7", "8", "9", "11"], "8", ""],
      ["100 − 45 = ?", ["45", "50", "55", "65"], "55", ""],
      ["Sudut siku-siku besarnya…", ["45°", "60°", "90°", "180°"], "90°", ""],
      ["9 + 9 = ?", ["16", "17", "18", "19"], "18", ""],
      ["3 × 7 = ?", ["18", "20", "21", "24"], "21", ""],
      ["Setengah dari 16 adalah…", ["6", "7", "8", "9"], "8", ""],
      ["Kelipatan 5 yang ada di pilihan adalah…", ["12", "13", "15", "17"], "15", ""]
    ],

    tf: [
      ["0 adalah bilangan genap.", true, ""],
      ["Segitiga punya 4 sisi.", false, ""],
      ["10 lebih besar dari 7.", true, ""],
      ["Hasil 6 × 0 adalah 6.", false, ""],
      ["Persegi punya sisi yang sama panjang.", true, ""],
      ["1 meter = 10 cm.", false, ""],
      ["Angka 13 adalah bilangan ganjil.", true, ""],
      ["2 + 2 = 5.", false, ""],
      ["Lingkaran tidak punya sudut.", true, ""],
      ["25 adalah kelipatan 5.", true, ""],
      ["Pecahan 3/3 sama dengan 0.", false, ""],
      ["Jam 3 membentuk sudut siku-siku.", true, ""]
    ],

    pair: [
      ["Tambah", "Operasi menggabungkan bilangan"],
      ["Kurang", "Operasi mencari selisih"],
      ["Kali", "Penjumlahan berulang"],
      ["Bagi", "Membagi menjadi bagian sama"],
      ["Persegi", "Bangun 4 sisi sama"],
      ["Segitiga", "Bangun 3 sisi"],
      ["Genap", "Habis dibagi 2"],
      ["Ganjil", "Tidak habis dibagi 2"],
      ["Meter", "Satuan panjang"],
      ["Kilogram", "Satuan massa"],
      ["Sudut", "Besaran putaran dua garis"],
      ["Pecahan", "Bagian dari keseluruhan"]
    ],

    order: [
      ["Urutkan dari kecil ke besar", ["3", "8", "12", "20"], ""],
      ["Langkah menghitung 2 + 3 × 4", ["Lihat perkalian", "3 × 4 = 12", "2 + 12", "Hasil 14"], ""],
      ["Urutan pecahan dari kecil ke besar", ["1/5", "1/4", "1/3", "1/2"], ""],
      ["Langkah mengukur panjang pensil", ["Siapkan penggaris", "Tempel ujung pensil di 0", "Baca angka ujung", "Tulis dalam cm"], ""],
      ["Urutan bilangan genap", ["2", "4", "6", "8"], ""],
      ["Langkah soal cerita belanja", ["Baca soal", "Tulis yang diketahui", "Pilih operasi", "Hitung hasil"], ""],
      ["Urutan waktu", ["Pagi", "Siang", "Sore", "Malam"], ""],
      ["Dari satuan kecil ke besar", ["cm", "dm", "m", "km"], ""],
      ["Langkah menggambar persegi", ["Buat titik", "Tarik sisi sama", "Buat sudut 90°", "Tutup bangun"], ""],
      ["Urutan 5, 10, 15…", ["5", "10", "15", "20"], ""],
      ["Langkah membandingkan 34 dan 43", ["Lihat puluhan", "3 < 4", "Jadi 34 lebih kecil", "34 < 43"], ""],
      ["Urutan hari sekolah awal minggu", ["Senin", "Selasa", "Rabu", "Kamis"], ""]
    ]
  });

  // =========================================================
  // SMP MATEMATIKA
  // =========================================================

  pack("smp", "matematika", {
    mcq: [
      ["Hasil 3x = 12 adalah…", ["3", "4", "5", "6"], "4", ""],
      ["Akar kuadrat 49 adalah…", ["6", "7", "8", "9"], "7", ""],
      ["2³ = …", ["4", "6", "8", "9"], "8", ""],
      ["FPB dari 12 dan 18 adalah…", ["3", "6", "9", "12"], "6", ""],
      ["Keliling persegi dengan sisi 9 cm adalah…", ["18 cm", "27 cm", "36 cm", "81 cm"], "36 cm", ""],
      ["0,25 sama dengan…", ["1/2", "1/3", "1/4", "1/5"], "1/4", ""],
      ["Jumlah sudut dalam segitiga adalah…", ["90°", "180°", "270°", "360°"], "180°", ""],
      ["{1,2,3} ∩ {2,3,4} = …", ["{1,4}", "{2,3}", "{1,2}", "{3,4}"], "{2,3}", ""],
      ["Gradien y = 2x + 1 adalah…", ["1", "2", "3", "4"], "2", ""],
      ["Luas lingkaran adalah…", ["2πr", "πr²", "r²", "πd"], "πr²", ""],
      ["(−3) + 8 = …", ["3", "4", "5", "6"], "5", ""],
      ["Perbandingan 2 : 4 disederhanakan menjadi…", ["1 : 2", "2 : 1", "1 : 4", "4 : 2"], "1 : 2", ""]
    ],

    tf: [
      ["Bilangan prima hanya punya dua faktor: 1 dan dirinya.", true, ""],
      ["0 adalah bilangan prima.", false, ""],
      ["A² − B² = (A − B)(A + B).", true, ""],
      ["Semua persegi panjang adalah persegi.", false, ""],
      ["π kira-kira 3,14.", true, ""],
      ["(−2) × (−3) menghasilkan bilangan negatif.", false, ""],
      ["Median data terurut ada di tengah.", true, ""],
      ["Volume kubus = sisi².", false, ""],
      ["Garis sejajar tidak pernah berpotongan.", true, ""],
      ["1 adalah bilangan prima.", false, ""],
      ["Persamaan linear grafiknya berupa garis lurus.", true, ""],
      ["KPK 4 dan 6 adalah 12.", true, ""]
    ],

    pair: [
      ["Variabel", "Lambang bilangan yang belum diketahui"],
      ["Koefisien", "Angka di depan variabel"],
      ["Teorema Pythagoras", "a² + b² = c² pada segitiga siku-siku"],
      ["Mean", "Rata-rata data"],
      ["Himpunan", "Kumpulan objek yang terdefinisi"],
      ["Fungsi", "Relasi yang tiap domain punya satu kodomain"],
      ["Gradien", "Kemiringan garis"],
      ["Pangkat", "Perkalian berulang bilangan yang sama"],
      ["Akar", "Kebalikan pangkat"],
      ["Peluang", "Ukuran kemungkinan kejadian"],
      ["Kongruen", "Bangun sama bentuk dan ukuran"],
      ["Skala", "Perbandingan peta dengan sebenarnya"]
    ],

    order: [
      ["Menyelesaikan 2x + 4 = 10", ["Kurangi 4", "2x = 6", "Bagi 2", "x = 3"], ""],
      ["Urutan operasi hitung", ["Kurung", "Pangkat", "Kali-bagi", "Tambah-kurang"], ""],
      ["Mencari sisi miring dengan Pythagoras", ["Identifikasi siku-siku", "Kuadratkan dua sisi", "Jumlahkan", "Akar kuadrat"], ""],
      ["Membuat grafik y = x + 1", ["Buat tabel titik", "Plot titik", "Hubungkan garis", "Beri panah sumbu"], ""],
      ["Menyederhanakan pecahan", ["Cari FPB", "Bagi pembilang", "Bagi penyebut", "Tulis hasil"], ""],
      ["Statistika ringkas", ["Urutkan data", "Cari mean", "Cari median", "Cari modus"], ""],
      ["Menghitung luas trapesium", ["Jumlah sisi sejajar", "Kali tinggi", "Bagi 2", "Tulis satuan"], ""],
      ["Urutan bilangan kecil ke besar", ["−2", "0", "3", "5"], ""],
      ["Pemfaktoran x² + 5x + 6", ["Cari dua angka jumlah 5", "Hasil kali 6 → 2 dan 3", "(x + 2)(x + 3)", "Cek kali silang"], ""],
      ["Mengukur sudut busur", ["Titik pusat di vertex", "Lengan di sisi", "Baca skala", "Tulis derajat"], ""],
      ["Perbandingan senilai", ["Tulis rasio", "Samakan satuan", "Kalikan silang", "Selesaikan"], ""],
      ["Soal cerita aljabar", ["Misalkan variabel", "Bentuk persamaan", "Selesaikan", "Cek ke soal"], ""]
    ]
  });

  // =========================================================
  // SMA MATEMATIKA
  // =========================================================

  pack("sma", "matematika", {
    mcq: [
      ["Turunan x² adalah…", ["x", "2x", "x²", "2"], "2x", ""],
      ["sin 90° = …", ["0", "1/2", "1", "−1"], "1", ""],
      ["log 100 basis 10 = …", ["1", "2", "10", "100"], "2", ""],
      ["lim x→0 sin x/x = …", ["0", "1", "∞", "−1"], "1", ""],
      ["Determinan matriks identitas adalah…", ["0", "1", "2", "−1"], "1", ""],
      ["∫ 2x dx = …", ["x + C", "x² + C", "2x² + C", "x³ + C"], "x² + C", ""],
      ["Barisan 2, 4, 8, 16 merupakan…", ["aritmetika", "geometri", "harmonik", "konstan"], "geometri", ""],
      ["i² = …", ["1", "0", "−1", "i"], "−1", ""],
      ["Peluang mendapat angka 6 pada dadu adalah…", ["1/2", "1/3", "1/6", "1/12"], "1/6", ""],
      ["Panjang vektor i + j adalah…", ["1", "√2", "2", "4"], "√2", ""],
      ["cos 0° = …", ["0", "1", "−1", "1/2"], "1", ""],
      ["Jika diskriminan D > 0, persamaan kuadrat memiliki…", ["tidak ada akar", "satu akar", "dua akar real", "tiga akar"], "dua akar real", ""]
    ],

    tf: [
      ["Fungsi eksponen selalu positif untuk basis > 0 dan ≠ 1.", true, ""],
      ["Turunan konstanta adalah 1.", false, ""],
      ["Matriks 2×3 bisa dikalikan dengan matriks 3×2.", true, ""],
      ["sin²x + cos²x = 1.", true, ""],
      ["Limit tak hingga berarti pasti tidak punya asimtot.", false, ""],
      ["Integral merupakan anti-turunan.", true, ""],
      ["Semua fungsi kontinu pasti terdiferensialkan.", false, ""],
      ["e⁰ = 1.", true, ""],
      ["Peluang 0 berarti kejadian mustahil.", true, ""],
      ["Vektor nol mempunyai arah yang unik.", false, ""],
      ["ln e = 1.", true, ""],
      ["Deret geometri dengan |r| < 1 konvergen.", true, ""]
    ],

    pair: [
      ["Turunan", "Laju perubahan instan"],
      ["Integral", "Luas di bawah kurva / anti-turunan"],
      ["Limit", "Nilai yang didekati fungsi"],
      ["Matriks", "Susunan bilangan segi empat"],
      ["Vektor", "Besaran yang punya arah"],
      ["Peluang bersyarat", "Peluang A jika B terjadi"],
      ["Asimtot", "Garis yang didekati grafik"],
      ["Eksponen", "Pangkat"],
      ["Logaritma", "Kebalikan eksponen"],
      ["Diskriminan", "Penentu jenis akar kuadrat"],
      ["Domain", "Daerah asal fungsi"],
      ["Range", "Daerah hasil fungsi"]
    ],

    order: [
      ["Turunan perkalian uv", ["Identifikasi u dan v", "Turunkan u dan v", "Gunakan rumus u'v + uv'", "Sederhanakan"], ""],
      ["Menyelesaikan persamaan kuadrat", ["Tentukan a, b, c", "Hitung diskriminan", "Gunakan rumus kuadrat", "Tentukan akar"], ""],
      ["Uji kekonvergenan rasio", ["Tentukan suku", "Cari rasio", "Hitung nilai mutlak rasio", "Bandingkan dengan 1"], ""],
      ["Integrasi tentu", ["Tentukan fungsi", "Cari anti-turunan", "Substitusi batas atas", "Kurangi dengan batas bawah"], ""],
      ["Perkalian matriks 2×2", ["Cek ukuran", "Kalikan baris dengan kolom", "Jumlahkan hasil", "Susun matriks"], ""],
      ["Limit substitusi", ["Tulis fungsi", "Substitusi nilai", "Sederhanakan", "Tulis limit"], ""],
      ["Grafik sin x", ["Tentukan periode", "Tentukan titik penting", "Plot titik", "Hubungkan kurva"], ""],
      ["Peluang total dua kejadian saling lepas", ["Identifikasi kejadian", "Hitung peluang pertama", "Hitung peluang kedua", "Jumlahkan"], ""],
      ["Vektor resultan 2D", ["Tulis komponen", "Jumlahkan komponen x", "Jumlahkan komponen y", "Cari besar resultan"], ""],
      ["Log change of base", ["Tulis logaritma", "Pilih basis baru", "Bagi log pembilang", "Bagi dengan log penyebut"], ""],
      ["Uji turunan kedua", ["Cari turunan pertama", "Cari turunan kedua", "Substitusi titik kritis", "Tentukan jenis ekstrem"], ""],
      ["Induksi matematika", ["Buktikan basis", "Asumsikan n = k", "Buktikan n = k + 1", "Simpulkan"], ""]
    ]
  });

  // =========================================================
  // SD IPA
  // =========================================================

  pack("sd", "ipa", {
    mcq: [
      ["Bagian tumbuhan yang menyerap air adalah…", ["daun", "batang", "akar", "bunga"], "akar", ""],
      ["Makhluk hidup membutuhkan udara untuk…", ["tidur", "bernapas", "bermain", "melompat"], "bernapas", ""],
      ["Matahari adalah…", ["planet", "bintang", "satelit", "komet"], "bintang", ""],
      ["Air yang membeku menjadi…", ["uap", "es", "embun", "awan"], "es", ""],
      ["Hewan pemakan tumbuhan disebut…", ["karnivora", "herbivora", "omnivora", "insektivora"], "herbivora", ""],
      ["Organ untuk mendengar adalah…", ["mata", "hidung", "telinga", "kulit"], "telinga", ""],
      ["Magnet dapat menarik benda yang terbuat dari…", ["kayu", "plastik", "besi", "kertas"], "besi", ""],
      ["Siang dan malam terjadi karena…", ["revolusi bumi", "rotasi bumi", "gerhana", "awan"], "rotasi bumi", ""],
      ["Organ untuk bernapas adalah…", ["jantung", "paru-paru", "lambung", "ginjal"], "paru-paru", ""],
      ["Proses tumbuhan membuat makanan disebut…", ["respirasi", "fotosintesis", "evaporasi", "pencernaan"], "fotosintesis", ""],
      ["Sumber energi utama bagi bumi adalah…", ["bulan", "matahari", "angin", "tanah"], "matahari", ""],
      ["Keringat membantu tubuh…", ["memanas", "mendingin", "mengeras", "membesar"], "mendingin", ""]
    ],

    tf: [
      ["Ikan bernapas dengan insang.", true, ""],
      ["Batu adalah makhluk hidup.", false, ""],
      ["Air bisa berubah wujud.", true, ""],
      ["Kita dapat melihat karena adanya cahaya.", true, ""],
      ["Semua burung bisa terbang.", false, ""],
      ["Tulang memberi bentuk dan menopang tubuh.", true, ""],
      ["Pelangi dapat terjadi karena pembiasan cahaya.", true, ""],
      ["Garam membuat air laut menjadi tawar.", false, ""],
      ["Tanah, air, dan udara termasuk benda mati.", true, ""],
      ["Jantung memompa darah.", true, ""],
      ["Es lebih panas daripada uap mendidih.", false, ""],
      ["Kupu-kupu mengalami daur hidup.", true, ""]
    ],

    pair: [
      ["Akar", "Menyerap air dan mineral"],
      ["Daun", "Tempat utama fotosintesis"],
      ["Jantung", "Memompa darah"],
      ["Paru-paru", "Tempat pertukaran gas"],
      ["Matahari", "Sumber energi utama"],
      ["Magnet", "Menarik benda tertentu seperti besi"],
      ["Rotasi", "Perputaran bumi pada porosnya"],
      ["Evaporasi", "Perubahan cair menjadi gas"],
      ["Kondensasi", "Perubahan gas menjadi cair"],
      ["Herbivora", "Hewan pemakan tumbuhan"],
      ["Habitat", "Tempat hidup makhluk hidup"],
      ["Fotosintesis", "Proses tumbuhan membuat makanan"]
    ],

    order: [
      ["Proses pertumbuhan tumbuhan", ["Biji", "Berkecambah", "Tumbuh", "Berbunga"], ""],
      ["Daur hidup kupu-kupu", ["Telur", "Larva", "Pupa", "Kupu-kupu"], ""],
      ["Proses air menjadi uap", ["Air menerima panas", "Air menghangat", "Air menguap", "Menjadi uap"], ""],
      ["Cara sederhana menjaga kesehatan", ["Makan bergizi", "Minum cukup", "Berolahraga", "Istirahat cukup"], ""],
      ["Urutan rantai makanan sederhana", ["Rumput", "Belalang", "Katak", "Ular"], ""],
      ["Proses terjadinya hujan", ["Penguapan", "Kondensasi", "Awan terbentuk", "Hujan turun"], ""],
      ["Cara menggunakan termometer", ["Siapkan termometer", "Letakkan pada objek", "Tunggu pembacaan", "Baca suhu"], ""],
      ["Pertumbuhan manusia", ["Bayi", "Anak-anak", "Remaja", "Dewasa"], ""],
      ["Percobaan bayangan", ["Siapkan sumber cahaya", "Letakkan benda", "Arahkan cahaya", "Amati bayangan"], ""],
      ["Daur air", ["Evaporasi", "Kondensasi", "Presipitasi", "Air kembali"], ""],
      ["Cara merawat tanaman", ["Siapkan tanaman", "Siram secukupnya", "Berikan cahaya", "Rawat rutin"], ""],
      ["Pengelompokan hewan", ["Amati ciri", "Bandingkan", "Kelompokkan", "Beri nama kelompok"], ""]
    ]
  });

  // =========================================================
  // SMP IPA
  // =========================================================

  pack("smp", "ipa", {
    mcq: [
      ["Satuan gaya SI adalah…", ["joule", "newton", "watt", "pascal"], "newton", ""],
      ["Fotosintesis berlangsung di organel…", ["mitokondria", "ribosom", "kloroplas", "nukleus"], "kloroplas", ""],
      ["Hukum Newton I dikenal sebagai hukum…", ["aksi-reaksi", "inersia", "gravitasi", "energi"], "inersia", ""],
      ["Larutan asam memiliki pH…", ["< 7", "= 7", "> 7", "14"], "< 7", ""],
      ["Sel hewan tidak memiliki…", ["membran sel", "inti", "dinding sel", "sitoplasma"], "dinding sel", ""],
      ["Bunyi merambat paling cepat melalui…", ["gas", "cair", "padat", "ruang hampa"], "padat", ""],
      ["Unsur kimia ditandai dengan…", ["nomor halaman", "lambang unsur", "warna", "ukuran"], "lambang unsur", ""],
      ["Fotosintesis menghasilkan…", ["glukosa dan oksigen", "air dan nitrogen", "garam dan air", "karbon saja"], "glukosa dan oksigen", ""],
      ["Contoh listrik statis adalah…", ["lampu menyala", "rambut menempel pada sisir", "kipas berputar", "radio berbunyi"], "rambut menempel pada sisir", ""],
      ["Organ ekskresi yang menyaring darah adalah…", ["jantung", "ginjal", "paru-paru", "lambung"], "ginjal", ""],
      ["Perubahan kimia menghasilkan…", ["zat baru", "bentuk saja", "ukuran saja", "warna saja"], "zat baru", ""],
      ["Planet terdekat dengan Matahari adalah…", ["Venus", "Bumi", "Merkurius", "Mars"], "Merkurius", ""]
    ],

    tf: [
      ["Massa dan berat adalah besaran yang sama.", false, ""],
      ["DNA terdapat di inti sel eukariotik.", true, ""],
      ["Oksigen mendukung pembakaran.", true, ""],
      ["Cahaya merupakan gelombang elektromagnetik.", true, ""],
      ["Semua logam berwujud cair.", false, ""],
      ["Respirasi sel menghasilkan energi.", true, ""],
      ["Kutub magnet sejenis tarik-menarik.", false, ""],
      ["Air murni memiliki pH sekitar 7.", true, ""],
      ["Virus dapat hidup mandiri tanpa sel inang.", false, ""],
      ["Tekanan = gaya / luas.", true, ""],
      ["Tumbuhan tidak memiliki hormon.", false, ""],
      ["Gerak parabola dipengaruhi gravitasi.", true, ""]
    ],

    pair: [
      ["Newton", "Satuan gaya"],
      ["Kloroplas", "Tempat fotosintesis"],
      ["Inersia", "Kecenderungan mempertahankan keadaan gerak"],
      ["pH", "Ukuran keasaman"],
      ["DNA", "Materi genetik"],
      ["Ginjal", "Organ ekskresi"],
      ["Tekanan", "Gaya per satuan luas"],
      ["Respirasi", "Proses menghasilkan energi"],
      ["Virus", "Membutuhkan sel inang untuk bereplikasi"],
      ["Gelombang elektromagnetik", "Dapat merambat tanpa medium"],
      ["Merkurius", "Planet terdekat Matahari"],
      ["Fotosintesis", "Pembentukan makanan menggunakan cahaya"]
    ],

    order: [
      ["Proses fotosintesis", ["Cahaya diterima", "Air diserap", "Karbon dioksida masuk", "Glukosa dan oksigen terbentuk"], ""],
      ["Menghitung tekanan", ["Tentukan gaya", "Tentukan luas", "Gunakan P = F/A", "Tulis satuan"], ""],
      ["Percobaan listrik statis", ["Siapkan sisir", "Gosok dengan rambut", "Dekatkan ke benda ringan", "Amati tarikannya"], ""],
      ["Siklus air", ["Evaporasi", "Kondensasi", "Presipitasi", "Aliran kembali"], ""],
      ["Metode ilmiah", ["Observasi", "Rumusan masalah", "Eksperimen", "Kesimpulan"], ""],
      ["Cara mengukur massa", ["Siapkan neraca", "Nolkan alat", "Letakkan benda", "Baca hasil"], ""],
      ["Perubahan wujud", ["Padat", "Mencair", "Cair", "Menguap"], ""],
      ["Rantai makanan", ["Produsen", "Konsumen I", "Konsumen II", "Predator"], ""],
      ["Gerak parabola", ["Benda diberi kecepatan", "Benda bergerak maju", "Gravitasi menarik ke bawah", "Lintasan melengkung"], ""],
      ["Pembentukan bayangan", ["Cahaya mengenai benda", "Cahaya dipantulkan/dibiaskan", "Masuk ke mata", "Otak memproses"], ""],
      ["Urutan organisasi kehidupan", ["Sel", "Jaringan", "Organ", "Sistem organ"], ""],
      ["Proses ekskresi ginjal", ["Darah masuk", "Filtrasi", "Reabsorpsi", "Urine terbentuk"], ""]
    ]
  });

  // =========================================================
  // SMA IPA
  // =========================================================

  pack("sma", "ipa", {
    mcq: [
      ["12 g C-12 kira-kira sama dengan…", ["0,5 mol", "1 mol", "2 mol", "12 mol"], "1 mol", ""],
      ["Enzim merupakan…", ["hormon", "katalis biologis", "vitamin", "mineral"], "katalis biologis", ""],
      ["Hukum kekekalan energi berkaitan dengan…", ["termodinamika I", "Newton I", "Ohm", "Faraday"], "termodinamika I", ""],
      ["Ikatan kovalen terjadi karena…", ["pemakaian bersama elektron", "transfer proton", "kehilangan neutron", "gaya gravitasi"], "pemakaian bersama elektron", ""],
      ["Mitokondria sering disebut…", ["pusat kontrol", "pembangkit energi sel", "dinding sel", "alat gerak"], "pembangkit energi sel", ""],
      ["Bunyi merupakan gelombang…", ["elektromagnetik transversal", "mekanik longitudinal", "cahaya", "statis"], "mekanik longitudinal", ""],
      ["Kode genetik dibaca dalam kelompok…", ["1 basa", "2 basa", "3 basa", "4 basa"], "3 basa", ""],
      ["Rumus usaha mekanik adalah…", ["W = Fs cos θ", "W = F/s", "W = m/a", "W = IR"], "W = Fs cos θ", ""],
      ["Larutan buffer berfungsi menjaga…", ["suhu", "pH relatif stabil", "massa", "tekanan"], "pH relatif stabil", ""],
      ["Seleksi alam dikaitkan dengan teori…", ["Darwin", "Newton", "Einstein", "Mendel saja"], "Darwin", ""],
      ["Kapasitor berfungsi menyimpan…", ["cahaya", "muatan/energi listrik", "massa", "suara"], "muatan/energi listrik", ""],
      ["Reaksi redoks melibatkan…", ["oksidasi dan reduksi", "hanya pembakaran", "hanya pelarutan", "fotosintesis saja"], "oksidasi dan reduksi", ""]
    ],

    tf: [
      ["Entalpi pembentukan unsur dalam keadaan standar adalah 0.", true, ""],
      ["Cahaya memiliki sifat dualisme gelombang-partikel.", true, ""],
      ["Semua reaksi eksoterm menaikkan entalpi sistem.", false, ""],
      ["Meiosis menghasilkan sel haploid.", true, ""],
      ["Hukum Ohm adalah V = IR.", true, ""],
      ["Enzim dapat mengalami denaturasi pada suhu tinggi.", true, ""],
      ["Neutron bermuatan negatif.", false, ""],
      ["Hukum Hardy-Weinberg berlaku pada populasi ideal tertentu.", true, ""],
      ["Hukum Faraday berkaitan dengan perubahan fluks.", true, ""],
      ["Ikatan hidrogen lebih kuat daripada ikatan ion.", false, ""],
      ["ATP sering disebut mata uang energi sel.", true, ""],
      ["Dalam relativitas khusus, kecepatan cahaya di vakum konstan.", true, ""]
    ],

    pair: [
      ["Enzim", "Katalis biologis"],
      ["Termodinamika", "Ilmu tentang energi dan perubahan energi"],
      ["Kovalen", "Ikatan dengan pemakaian elektron bersama"],
      ["Mitokondria", "Penghasil energi sel"],
      ["Kodon", "Tiga basa penyusun kode genetik"],
      ["Buffer", "Menjaga pH relatif stabil"],
      ["Redoks", "Oksidasi dan reduksi"],
      ["Kapasitor", "Menyimpan muatan listrik"],
      ["Meiosis", "Pembelahan menghasilkan sel haploid"],
      ["Hardy-Weinberg", "Model keseimbangan frekuensi alel"],
      ["Fluks magnet", "Ukuran medan magnet yang menembus permukaan"],
      ["ATP", "Pembawa energi sel"]
    ],

    order: [
      ["Proses kerja enzim", ["Substrat mendekati enzim", "Membentuk kompleks enzim-substrat", "Reaksi berlangsung", "Produk dilepas"], ""],
      ["Urutan reaksi redoks", ["Identifikasi oksidasi", "Identifikasi reduksi", "Tentukan elektron", "Setarakan reaksi"], ""],
      ["Percobaan hukum Ohm", ["Siapkan rangkaian", "Ukur tegangan", "Ukur arus", "Bandingkan V dan I"], ""],
      ["Sintesis protein", ["DNA ditranskripsi", "mRNA terbentuk", "mRNA menuju ribosom", "Protein disintesis"], ""],
      ["Proses meiosis", ["Replikasi DNA", "Pembelahan pertama", "Pembelahan kedua", "Sel haploid terbentuk"], ""],
      ["Perhitungan usaha", ["Tentukan gaya", "Tentukan perpindahan", "Tentukan sudut", "Gunakan W = Fs cos θ"], ""],
      ["Cara kerja kapasitor", ["Hubungkan sumber", "Muatan terkumpul", "Energi tersimpan", "Lepaskan melalui rangkaian"], ""],
      ["Seleksi alam", ["Ada variasi", "Terjadi persaingan", "Individu tertentu lebih bertahan", "Sifat diwariskan"], ""],
      ["Menentukan pH buffer", ["Identifikasi asam-basa", "Tentukan konsentrasi", "Gunakan persamaan buffer", "Hitung pH"], ""],
      ["Siklus energi sel", ["Nutrien masuk", "Glikolisis", "Siklus Krebs", "ATP dihasilkan"], ""],
      ["Percobaan fluks magnet", ["Siapkan kumparan", "Ukur medan", "Ubah fluks", "Amati induksi"], ""],
      ["Keseimbangan Hardy-Weinberg", ["Tentukan alel", "Tentukan frekuensi", "Gunakan persamaan", "Evaluasi keseimbangan"], ""]
    ]
  });

  // =========================================================
  // SD BAHASA INDONESIA
  // =========================================================

  pack("sd", "bindo", {
    mcq: [
      ["Lawan kata besar adalah…", ["kecil", "tinggi", "panjang", "lebar"], "kecil", ""],
      ["Kalimat tanya diakhiri dengan tanda…", [".", ",", "?", "!"], "?", ""],
      ["Subjek dalam kalimat 'Ibu memasak nasi' adalah…", ["Ibu", "memasak", "nasi", "memasak nasi"], "Ibu", ""],
      ["Sinonim kata pintar adalah…", ["malas", "cerdas", "lambat", "lemah"], "cerdas", ""],
      ["Huruf pertama nama orang ditulis dengan huruf…", ["kecil", "kapital", "miring", "tebal"], "kapital", ""],
      ["Puisi empat baris dengan rima abab disebut…", ["cerpen", "pantun", "novel", "drama"], "pantun", ""],
      ["Predikat dalam kalimat 'Ani bermain' adalah…", ["Ani", "bermain", "kalimat", "tidak ada"], "bermain", ""],
      ["Sapaan yang tepat kepada guru adalah…", ["Hei", "Ibu/Bapak", "Kamu", "Bro"], "Ibu/Bapak", ""],
      ["Cerita tentang hewan yang memiliki amanat disebut…", ["fabel", "berita", "iklan", "surat"], "fabel", ""],
      ["Kata berimbuhan me- + baca menjadi…", ["membaca", "dibaca", "bacaan", "terbaca"], "membaca", ""],
      ["Kalimat perintah adalah…", ["Tutup pintu itu!", "Siapa namamu?", "Saya makan.", "Hari ini cerah."], "Tutup pintu itu!", ""],
      ["Antonim kata panas adalah…", ["hangat", "dingin", "terik", "cerah"], "dingin", ""]
    ],

    tf: [
      ["Kalimat tanya menggunakan tanda tanya.", true, ""],
      ["Nama orang ditulis dengan huruf kecil di awal.", false, ""],
      ["Pantun biasanya memiliki sampiran dan isi.", true, ""],
      ["Fabel adalah cerita tentang hewan.", true, ""],
      ["Kalimat perintah selalu berupa pertanyaan.", false, ""],
      ["Sinonim berarti persamaan makna.", true, ""],
      ["Antonim berarti lawan makna.", true, ""],
      ["Kata 'membaca' merupakan kata kerja.", true, ""],
      ["Cerita tidak boleh memiliki amanat.", false, ""],
      ["Subjek adalah pelaku atau pokok pembicaraan.", true, ""],
      ["Tanda seru dapat digunakan dalam kalimat perintah.", true, ""],
      ["Semua puisi harus memiliki empat baris.", false, ""]
    ],

    pair: [
      ["Sinonim", "Persamaan makna"],
      ["Antonim", "Lawan makna"],
      ["Subjek", "Pokok atau pelaku dalam kalimat"],
      ["Predikat", "Bagian yang menerangkan subjek"],
      ["Pantun", "Puisi lama dengan sampiran dan isi"],
      ["Fabel", "Cerita tentang hewan"],
      ["Amanat", "Pesan yang disampaikan"],
      ["Kata kerja", "Kata yang menunjukkan tindakan"],
      ["Kalimat tanya", "Kalimat yang meminta jawaban"],
      ["Kalimat perintah", "Kalimat yang meminta tindakan"],
      ["Huruf kapital", "Huruf besar"],
      ["Paragraf", "Kumpulan kalimat yang membahas satu gagasan"]
    ],

    order: [
      ["Menulis cerita sederhana", ["Tentukan tema", "Buat tokoh", "Susun kejadian", "Tulis cerita"], ""],
      ["Membuat pantun", ["Tentukan tema", "Buat sampiran", "Buat isi", "Cek rima"], ""],
      ["Menentukan ide pokok", ["Baca paragraf", "Cari gagasan utama", "Bedakan detail", "Tentukan ide pokok"], ""],
      ["Menulis kalimat efektif", ["Tentukan maksud", "Susun subjek", "Susun predikat", "Periksa kalimat"], ""],
      ["Membaca cerita", ["Baca judul", "Baca isi", "Cari tokoh", "Cari amanat"], ""],
      ["Menulis surat sederhana", ["Tulis tujuan", "Tulis salam", "Tulis isi", "Tulis penutup"], ""],
      ["Membuat ringkasan", ["Baca teks", "Catat ide penting", "Buang detail", "Tulis ringkasan"], ""],
      ["Mencari kata sulit", ["Baca teks", "Tandai kata", "Cari arti", "Gunakan dalam kalimat"], ""],
      ["Menyusun kalimat", ["Pilih subjek", "Pilih predikat", "Tambahkan objek", "Baca ulang"], ""],
      ["Membuat fabel", ["Pilih hewan", "Buat masalah", "Buat penyelesaian", "Tulis amanat"], ""],
      ["Membaca puisi", ["Baca judul", "Baca larik", "Perhatikan rima", "Pahami makna"], ""],
      ["Menulis paragraf", ["Pilih gagasan", "Tulis kalimat utama", "Tambahkan kalimat penjelas", "Periksa"], ""]
    ]
  });

  // =========================================================
  // SMP BAHASA INDONESIA
  // =========================================================

  pack("smp", "bindo", {
    mcq: [
      ["Teks prosedur bertujuan untuk…", ["menghibur saja", "menjelaskan langkah", "membuat puisi", "menceritakan sejarah"], "menjelaskan langkah", ""],
      ["Kalimat efektif harus…", ["panjang", "hemat dan jelas", "berulang", "sulit dipahami"], "hemat dan jelas", ""],
      ["Majas hiperbola berarti…", ["perbandingan biasa", "berlebihan", "pengulangan", "pertentangan"], "berlebihan", ""],
      ["Ide pokok paragraf deduktif biasanya berada…", ["di awal", "di tengah", "di akhir", "di judul saja"], "di awal", ""],
      ["Teks eksposisi bertujuan…", ["memaparkan informasi", "menghibur", "menakut-nakuti", "menjual barang"], "memaparkan informasi", ""],
      ["Konjungsi yang menunjukkan sebab adalah…", ["tetapi", "karena", "dan", "atau"], "karena", ""],
      ["Salah satu contoh puisi lama adalah…", ["pantun", "novel", "editorial", "berita"], "pantun", ""],
      ["Latar mencakup…", ["waktu dan tempat", "tokoh saja", "amanat saja", "judul"], "waktu dan tempat", ""],
      ["Kalimat langsung biasanya menggunakan…", ["tanda petik", "tanda kurung saja", "tanda titik dua saja", "garis bawah"], "tanda petik", ""],
      ["Sinopsis adalah…", ["ringkasan isi", "judul buku", "kritik saja", "daftar tokoh"], "ringkasan isi", ""],
      ["Teks persuasi bertujuan…", ["membujuk", "menghitung", "mengukur", "menggambar"], "membujuk", ""],
      ["Anastrof adalah…", ["urutan kata yang tidak biasa", "pengulangan bunyi", "perbandingan", "cerita lucu"], "urutan kata yang tidak biasa", ""]
    ],

    tf: [
      ["Laporan hasil observasi harus objektif.", true, ""],
      ["Puisi bebas tidak boleh menggunakan majas.", false, ""],
      ["Kohesi berkaitan dengan bentuk keterkaitan teks.", true, ""],
      ["Koherensi berkaitan dengan hubungan makna.", true, ""],
      ["Semua opini merupakan fakta.", false, ""],
      ["Drama dapat berupa naskah dengan dialog.", true, ""],
      ["Imbuhan ter- dapat bermakna paling.", true, ""],
      ["Surat dinas adalah chat pribadi.", false, ""],
      ["Paragraf induktif menyimpulkan gagasan di akhir.", true, ""],
      ["EYD tidak mengatur penggunaan huruf kapital.", false, ""],
      ["Metafora dapat digunakan tanpa kata seperti atau bagai.", true, ""],
      ["Anekdot selalu serius tanpa humor.", false, ""]
    ],

    pair: [
      ["Tesis", "Pernyataan pendapat di eksposisi/argumentasi"],
      ["Argumentasi", "Alasan pendukung"],
      ["Deskripsi", "Penggambaran objek"],
      ["Narasi", "Penceritaan peristiwa"],
      ["Majas", "Gaya bahasa kias"],
      ["Konjungsi", "Kata penghubung"],
      ["Watak", "Sifat tokoh"],
      ["Alur", "Jalan cerita"],
      ["Sudut pandang", "Cara penceritaan"],
      ["Referensi", "Sumber rujukan"],
      ["Implisit", "Tersirat"],
      ["Eksplisit", "Tersurat"]
    ],

    order: [
      ["Menulis teks prosedur", ["Tentukan tujuan", "Siapkan alat/bahan", "Tulis langkah", "Periksa urutan"], ""],
      ["Struktur teks eksposisi", ["Tesis", "Rangkaian argumen", "Penegasan ulang", "Selesai"], ""],
      ["Meringkas cerpen", ["Baca utuh", "Catat tokoh dan alur", "Buang detail", "Tulis sinopsis"], ""],
      ["Menelaah pantun", ["Hitung baris", "Cek rima", "Pisah sampiran-isi", "Maknai"], ""],
      ["Membuat kalimat efektif", ["Buang kata berlebih", "Pastikan S-P", "Cek logika", "Baca keras"], ""],
      ["Membuat laporan observasi", ["Tentukan objek", "Kumpulkan data", "Tulis deskripsi", "Simpulkan"], ""],
      ["Berdebat", ["Buka posisi", "Sampaikan data", "Sanggah", "Simpulan"], ""],
      ["Menulis puisi bebas", ["Tentukan tema", "Pilih diksi", "Susun larik", "Edit rima/irama"], ""],
      ["Membaca kritis", ["Preview", "Tanya isi", "Tandai klaim", "Evaluasi"], ""],
      ["Membuat surat resmi", ["Kepala surat", "Hal", "Isi", "Tanda tangan"], ""],
      ["Menentukan unsur intrinsik", ["Tema", "Tokoh", "Latar", "Amanat"], ""],
      ["Membuat teks persuasi", ["Pengenalan isu", "Rangkaian argumen", "Ajakan", "Penutup"], ""]
    ]
  });

  // =========================================================
  // SMA BAHASA INDONESIA
  // =========================================================

  pack("sma", "bindo", {
    mcq: [
      ["Teks editorial mewakili…", ["iklan produk", "sikap redaksi", "chat pembaca", "resep"], "sikap redaksi", ""],
      ["Validitas argumen merujuk pada…", ["jumlah emoji", "kelogisan alasan", "font", "volume suara"], "kelogisan alasan", ""],
      ["Intertekstual berarti…", ["tanpa rujukan", "hubungan antarteks", "hanya ejaan", "hanya tipografi"], "hubungan antarteks", ""],
      ["Kalimat aktif transitif punya…", ["tanpa objek", "objek", "hanya keterangan", "hanya majas"], "objek", ""],
      ["Kritik sastra menilai karya secara…", ["asal bully", "objektif berdasar kaidah", "hanya like", "spam"], "objektif berdasar kaidah", ""],
      ["Homonim adalah kata…", ["tulisan/bunyi sama, makna beda", "makna sama", "lawan kata", "singkatan"], "tulisan/bunyi sama, makna beda", ""],
      ["Teks proposal berisi…", ["curhat", "rencana kegiatan/penelitian", "pantun wajib", "resep kue"], "rencana kegiatan/penelitian", ""],
      ["Implikatur percakapan adalah…", ["makna tersurat kamus saja", "maksud tersirat", "kesalahan ketik", "intipasi"], "maksud tersirat", ""],
      ["Paralogisme adalah…", ["penalaran sesat", "ejaan baku", "rima", "dialog"], "penalaran sesat", ""],
      ["Register bahasa merujuk…", ["variasi sesuai konteks", "hanya dialek desa", "angka statistik", "watermark"], "variasi sesuai konteks", ""],
      ["Novel sejarah memadukan…", ["fakta historis dan fiksi", "hanya data BPS", "kode program", "resep"], "fakta historis dan fiksi", ""],
      ["Kohesi leksikal contohnya…", ["pengulangan kata", "lagunya", "margin kertas", "DPI gambar"], "pengulangan kata", ""]
    ],

    tf: [
      ["Fakta dan opini harus dibedakan saat membaca opini publik.", true, ""],
      ["Semua teks akademik boleh tanpa sitasi.", false, ""],
      ["Ironi menyampaikan makna berlawanan dengan literal.", true, ""],
      ["Pidato persuasif mengabaikan audiens.", false, ""],
      ["Semantik mempelajari makna.", true, ""],
      ["Pragmatik mempelajari makna dalam konteks pemakaian.", true, ""],
      ["Plagiarisme sah jika font diganti.", false, ""],
      ["Teks negosiasi punya tawaran dan kesepakatan.", true, ""],
      ["Stilistika mengkaji gaya bahasa.", true, ""],
      ["Kalimat ambiguitas hanya punya satu tafsir.", false, ""],
      ["Resensi memuat kelebihan-kekurangan karya.", true, ""],
      ["Diskusi ilmiah menolak data.", false, ""]
    ],

    pair: [
      ["Wacana", "Satuan bahasa terlengkap di atas kalimat"],
      ["Konotasi", "Makna kias/emosional"],
      ["Denotasi", "Makna harfiah"],
      ["Hegemoni teks", "Kuasa wacana mendominasi makna"],
      ["Sitasi", "Pengakuan sumber"],
      ["Tesis argumentatif", "Klaim yang dibela"],
      ["Fallacy", "Kesalahan nalar"],
      ["Diksi", "Pilihan kata"],
      ["Tipografi wacana", "Tata huruf yang memengaruhi baca"],
      ["Polisemi", "Satu kata banyak makna terkait"],
      ["Code switching", "Alih kode bahasa"],
      ["Resensi", "Ulasan karya"]
    ],

    order: [
      ["Menulis esai argumentatif", ["Klaim", "Bukti", "Jaminan nalar", "Sanggahan-simpulan"], ""],
      ["Membaca kritis editorial", ["Identifikasi isu", "Temukan klaim", "Cek bukti", "Nilai bias"], ""],
      ["Penelitian bahasa mini", ["Masalah", "Data", "Analisis", "Simpulan"], ""],
      ["Teks negosiasi", ["Orientasi", "Tawaran", "Persetujuan", "Penutup"], ""],
      ["Sitasi parafrase", ["Baca sumber", "Tulis ulang", "Jaga makna", "Cantum sumber"], ""],
      ["Analisis cerpen", ["Intrinsik", "Ekstrinsik", "Gaya", "Simpulan kritis"], ""],
      ["Debat konstruktif", ["Definisi mosi", "Argumen inti", "Rebuttal", "Right of reply"], ""],
      ["Menyusun proposal", ["Latar", "Tujuan", "Metode", "Anggaran/jadwal"], ""],
      ["Revisi naskah", ["Makro struktur", "Paragraf", "Kalimat", "Ejaan"], ""],
      ["Semiotika ringkas", ["Tanda", "Penanda", "Petanda", "Makna budaya"], ""],
      ["Wawancara berita", ["Riset", "Tanya", "Konfirmasi", "Tulis berita"], ""],
      ["Presentasi ilmiah", ["Hook", "Kerangka", "Data visual", "Q&A"], ""]
    ]
  });

  // =========================================================
  // SD BAHASA INGGRIS
  // =========================================================

  pack("sd", "binggris", {
    mcq: [
      ["'I ___ a student.'", ["is", "am", "are", "be"], "am", "I am."],
      ["Opposite of hot?", ["warm", "cold", "sun", "fire"], "cold", ""],
      ["A cat is an…", ["insect", "animal", "plant", "car"], "animal", ""],
      ["She ___ happy.", ["am", "is", "are", "be"], "is", ""],
      ["Color of the sky on a clear day?", ["green", "blue", "black", "pink"], "blue", ""],
      ["They ___ my friends.", ["is", "am", "are", "be"], "are", ""],
      ["We eat breakfast in the…", ["night", "morning", "midnight", "year"], "morning", ""],
      ["Thank you. —", ["Bye", "You're welcome", "Stop", "No"], "You're welcome", ""],
      ["Plural of book?", ["bookes", "books", "bookies", "book"], "books", ""],
      ["How old are you? asks about…", ["color", "age", "food", "pet"], "age", ""],
      ["Apple is a…", ["drink", "fruit", "animal", "color"], "fruit", ""],
      ["Good night is used…", ["in morning", "before sleep", "at lunch only", "in math class only"], "before sleep", ""]
    ],

    tf: [
      ["I are a boy.", false, "I am."],
      ["Red is a color.", true, ""],
      ["Dog is fruit.", false, ""],
      ["We is a plural pronoun.", true, ""],
      ["He go is correct present simple.", false, "He goes."],
      ["Please makes a request polite.", true, ""],
      ["Sunday is a weekday in many school timetables.", false, "Sunday is weekend in many countries."],
      ["Yes, I do can answer 'Do you like rice?'", true, ""],
      ["An is used before vowel sounds.", true, ""],
      ["Cats means more than one cat.", true, ""],
      ["I can fly like a bird always for people.", false, ""],
      ["Hello is a greeting.", true, ""]
    ],

    pair: [
      ["Hello", "Sapaan"],
      ["Goodbye", "Perpisahan"],
      ["Please", "Permintaan sopan"],
      ["Sorry", "Permintaan maaf"],
      ["Family", "Keluarga"],
      ["School", "Sekolah"],
      ["Hungry", "Lapar"],
      ["Thirsty", "Haus"],
      ["Big", "Besar"],
      ["Small", "Kecil"],
      ["Run", "Berlari"],
      ["Sleep", "Tidur"]
    ],

    order: [
      ["Menulis teks prosedur", ["Judul", "Tujuan", "Langkah berurutan", "Penutup"], ""],
      ["Struktur teks eksposisi", ["Tesis", "Rangkaian argumen", "Penegasan ulang"], "Tiga bagian inti; ulangi jika perlu."],
      ["Meringkas cerpen", ["Baca utuh", "Catat tokoh-alur", "Buang detail", "Tulis sinopsis"], ""],
      ["Menelaah pantun", ["Hitung baris", "Cek rima", "Pisah sampiran-isi", "Maknai"], ""],
      ["Kalimat efektif", ["Buang pleoname", "Pastikan S-P", "Cek logika", "Baca keras"], ""],
      ["Teks laporan observasi", ["Definisi umum", "Deskripsi bagian", "Manfaat/simpulan"], ""],
      ["Berdebat", ["Buka posisi", "Data", "Sanggah", "Simpulan"], ""],
      ["Menulis puisi bebas", ["Tentukan tema", "Pilih diksi", "Susun larik", "Edit rima/irama"], ""],
      ["Membaca kritis", ["Preview", "Tanya isi", "Tandai klaim", "Evaluasi"], ""],
      ["Surat resmi", ["Kepala surat", "Hal", "Isi", "Tanda tangan"], ""],
      ["Unsur intrinsik", ["Tema", "Tokoh", "Latar", "Amanat"], ""],
      ["Teks persuasi", ["Pengenalan isu", "Rangkaian argumen", "Ajakan"], ""]
    ]
  });

  // =========================================================
  // SMP BAHASA INGGRIS
  // =========================================================

  pack("smp", "binggris", {
    mcq: [
      ["Choose the correct sentence.", ["She are happy", "She is happy", "She am happy", "She be happy"], "She is happy", ""],
      ["Past tense of go is…", ["goed", "went", "gone", "goes"], "went", ""],
      ["Beautiful is an example of…", ["noun", "verb", "adjective", "adverb"], "adjective", ""],
      ["They ___ football every Sunday.", ["plays", "play", "playing", "played"], "play", ""],
      ["Opposite of expensive is…", ["cheap", "large", "small", "high"], "cheap", ""],
      ["Because is used to show…", ["time", "reason", "place", "person"], "reason", ""],
      ["Recount text tells about…", ["future plans", "past events", "recipes", "rules"], "past events", ""],
      ["Can you help me? is a…", ["greeting", "request", "farewell", "apology"], "request", ""],
      ["My mother ___ cooking now.", ["is", "are", "am", "be"], "is", ""],
      ["Comparative form of tall is…", ["tallest", "taller", "more tall", "talling"], "taller", ""],
      ["Yesterday refers to…", ["present", "past", "future", "habit"], "past", ""],
      ["Procedure text tells us…", ["how to do something", "a person's opinion", "a past event", "a fairy tale"], "how to do something", ""]
    ],

    tf: [
      ["She is my friend.", true, ""],
      ["Went is the past form of go.", true, ""],
      ["Beautiful is a verb.", false, "Beautiful is an adjective."],
      ["They plays football.", false, "They play football."],
      ["Cheap is the opposite of expensive.", true, ""],
      ["Because can introduce a reason.", true, ""],
      ["Recount usually tells past events.", true, ""],
      ["Can you help me? can be a request.", true, ""],
      ["I are happy is correct.", false, "I am happy."],
      ["Taller is a comparative adjective.", true, ""],
      ["Tomorrow refers to the past.", false, "Tomorrow refers to the future."],
      ["Procedure text explains steps.", true, ""]
    ],

    pair: [
      ["Noun", "Kata benda"],
      ["Verb", "Kata kerja"],
      ["Adjective", "Kata sifat"],
      ["Adverb", "Kata keterangan"],
      ["Recount", "Cerita tentang pengalaman masa lalu"],
      ["Procedure", "Langkah-langkah melakukan sesuatu"],
      ["Request", "Permintaan"],
      ["Apology", "Permintaan maaf"],
      ["Greeting", "Sapaan"],
      ["Farewell", "Perpisahan"],
      ["Cheap", "Murah"],
      ["Expensive", "Mahal"]
    ],

    order: [
      ["Writing a recount", ["Choose event", "Write orientation", "Tell events", "Write conclusion"], ""],
      ["Making tea", ["Boil water", "Prepare cup", "Add tea", "Pour water"], ""],
      ["Writing a procedure", ["Title", "Goal", "Materials", "Steps"], ""],
      ["Giving an apology", ["Say sorry", "Explain briefly", "Take responsibility", "Promise to improve"], ""],
      ["Reading a text", ["Read title", "Read text", "Find main idea", "Answer questions"], ""],
      ["Writing a paragraph", ["Choose topic", "Make main idea", "Add details", "Check grammar"], ""],
      ["Asking for help", ["Greet", "Ask politely", "Explain problem", "Say thank you"], ""],
      ["Daily routine", ["Wake up", "Take a shower", "Have breakfast", "Go to school"], ""],
      ["Describing a person", ["Introduce person", "Describe appearance", "Describe personality", "Give opinion"], ""],
      ["Story sequence", ["Beginning", "Problem", "Solution", "Ending"], ""],
      ["Learning vocabulary", ["Find new word", "Check meaning", "Make sentence", "Practice"], ""],
      ["Writing an email", ["Greeting", "Main message", "Closing", "Name"], ""]
    ]
  });

  // =========================================================
  // SMA BAHASA INGGRIS
  // =========================================================

  pack("sma", "binggris", {
    mcq: [
      ["Had I known, I ___ helped.", ["will", "would have", "am", "was"], "would have", "Inversion type 3."],
      ["A hortatory exposition aims to…", ["tell a fairy tale", "persuade readers to do something", "list ingredients only", "describe a room only"], "persuade readers to do something", ""],
      ["Neither answers ___ correct.", ["are always", "is", "were being", "be"], "is", "Neither + singular."],
      ["Collocation: make a…", ["homework", "decision", "research", "advice"], "decision", ""],
      ["Coherence in writing means…", ["pretty fonts", "logical flow of ideas", "word count", "double spacing"], "logical flow of ideas", ""],
      ["She suggested that he ___ on time.", ["be", "is being", "were been", "to be gone"], "be", "Subjunctive."],
      ["Analytical exposition consists of thesis, arguments, and…", ["reiteration", "orientation", "resolution", "ingredients"], "reiteration", ""],
      ["In spite of is closest in meaning to…", ["because", "despite", "before", "unless"], "despite", ""],
      ["A clause that cannot stand alone is a…", ["main clause", "dependent clause", "noun", "phrase"], "dependent clause", ""],
      ["An example of hedging is…", ["It is definitely true", "It might suggest…", "Everyone knows", "This proves everything"], "It might suggest…", ""],
      ["Whom is used as the…", ["subject", "object of verb/preposition", "adjective", "adverb"], "object of verb/preposition", ""],
      ["To scan a text means to…", ["read every word", "search specific info quickly", "memorize the text", "translate everything"], "search specific info quickly", ""]
    ],

    tf: [
      ["Mixed conditionals combine different time references.", true, ""],
      ["A thesis statement should be vague.", false, ""],
      ["Nominalization is common in academic English.", true, ""],
      ["Less is used with uncountable nouns.", true, ""],
      ["All phrasal verbs have literal meanings.", false, ""],
      ["Cause-effect connectors include therefore.", true, ""],
      ["Skimming means reading for gist.", true, ""],
      ["Subject-verb agreement never changes with quantity phrases.", false, ""],
      ["Discussion text presents more than one viewpoint.", true, ""],
      ["Citation is optional in academic essays.", false, ""],
      ["Inversion can occur after negative adverbials.", true, ""],
      ["Advice is countable as 'an advice'.", false, "Advice is uncountable; say 'a piece of advice'."]
    ],

    pair: [
      ["Thesis", "Main claim of an essay"],
      ["Hedging", "Softening a claim"],
      ["Cohesion", "Linking devices across sentences"],
      ["Inference", "Reading between the lines"],
      ["Idiom", "Non-literal fixed phrase"],
      ["Register", "Formality level"],
      ["Skimming", "Reading for general idea"],
      ["Scanning", "Looking for specific details"],
      ["Paraphrase", "Same meaning, new wording"],
      ["Fallacy", "Flawed reasoning"],
      ["Modal perfect", "could/should/would have + V3"],
      ["Exposition", "Argumentative explanation"]
    ],

    order: [
      ["Essay body paragraph", ["Topic sentence", "Evidence", "Explanation", "Link"], ""],
      ["Analytical exposition", ["Thesis", "Arguments", "Reiteration"], ""],
      ["Research reading", ["Preview abstract", "Skim headings", "Read claims", "Evaluate sources"], ""],
      ["Causative have", ["I", "had", "the tech", "fix it"], ""],
      ["Contrast then result", ["Although tired", "she studied", "therefore", "she passed"], ""],
      ["Reported question", ["She asked", "if", "I", "was ready"], ""],
      ["Summary writing", ["Identify main points", "Drop examples", "Combine", "Cite if needed"], ""],
      ["Discussion text", ["Issue", "Point", "Counterpoint", "Conclusion"], ""],
      ["Inversion emphasis", ["Never", "have I", "seen", "it"], ""],
      ["Listening lecture notes", ["Gist", "Key terms", "Examples", "Questions"], ""],
      ["Hedged claim", ["The data", "appear to", "suggest", "a trend"], ""],
      ["Job application email", ["Subject line", "Hook + role", "Proof", "Call to action"], ""]
    ]
  });

  // =========================================================
  // SELESAI
  // =========================================================

  window.EDURUSH_BANK = bank;

})();