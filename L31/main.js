const audio = document.getElementById('audio');
const btn = document.getElementById('activarSonido');

btn.addEventListener('click', () => {
  if (navigator.vibrate) {
    navigator.vibrate(200);
  }
  audio.currentTime = 0;
  audio.play().catch(err => {
    console.error("Error al reproducir audio:", err);
  });
});
