window.addEventListener('keydown', play);

function play(e) {
  //   console.log(e.keyCode); //keyCode -> gives the code of the specific key
  const audio = document.querySelector(`audio[data-key = '${e.keyCode}']`);
  if (!audio) return; //If we don't have no audio..just stop

  audio.currentTime = 0; //playing over and over again;
  audio.play();

  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
