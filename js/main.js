onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    // 🎵 1. LOGIKA PUTAR LAGU (Dipasang di Window biar super sensitif)
    const music = document.getElementById('bg-music');
    
    function mainkanLagu() {
      if (music) {
        music.play().catch(e => console.log("Menunggu interaksi pertama user untuk memutar musik..."));
      }
    }

    // Coba putar langsung di awal (jika diizinkan sistem browser)
    mainkanLagu();

    // Cadangan mati: Begitu user ketuk/klik layar di MANA SAJA, musik langsung ON
    window.addEventListener('click', mainkanLagu, { once: true });
    window.addEventListener('touchstart', mainkanLagu, { once: true });

    // 📝 2. LOGIKA KETIK TEKS JUDUL
    const titles = ('HAPPY BIRTHDAY\nBUNGA KUSUMA DEWI').split('')
    const titleElement = document.getElementById('title'); 
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        if (titles[index] === '\n') {
          titleElement.innerHTML += '<br>';
        } else if (titles[index] === ' ') {
          titleElement.innerHTML += '&nbsp;';
        } else {
          titleElement.innerHTML += titles[index];
        }
        index++;
        setTimeout(appendTitle, 300); // Kecepatan ketikan teks (300ms)
      } else {
        // 📸 3. LOGIKA MUNCULIN FOTO (Jalan otomatis setelah teks selesai diketik)
        setTimeout(() => {
          const photoBox = document.getElementById('photo-box');
          if (photoBox) {
            photoBox.classList.add('show');
          }
        }, 600); // Jeda 0.6 detik setelah nama beres diketik biar smooth
      }
    }
    // Tambahin ini di baris paling bawah main.js lo
    function startSubtitle() {
      const text = "selamat happy birth day ay, semoga makin cantik, sabar, dan sukses terus. Walaupun dunia ini jelek tapi bunga tetep cantik.".split('');
      const subElement = document.getElementById('subtitle');
      let i = 0;

      function type() {
        if (i < text.length) {
          subElement.innerHTML += text[i];
          i++;
          setTimeout(type, 70); // Kecepatan ngetik (80ms)
        }
      }
      type();
    }

// Panggil fungsi ini tepat setelah fungsi appendTitle selesai (atau panggil pas onload)
// Kalau mau muncul barengan sama judul, panggil di sini:
// startSubtitle();

    appendTitle();
    startSubtitle();
    clearTimeout(c);
  }, 1000);
};