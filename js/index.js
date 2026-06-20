const title = document.querySelector('.title')
const text = `Gua ada sesuatu buat lu, pencet yang nyala di bawah`.split('')

// Kita hapus baris title.style... yang tadi, biar CSS yang handle
for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}</span>`
  } else {
    // Kalau spasi, kasih lebar biar ada jarak kata
    title.innerHTML += `<span style='width: 0.5rem'></span>`
  }
}

// Animasinya tetap jalan
const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3;
  element.style.animationDelay = `${randomDelay}s`;
});