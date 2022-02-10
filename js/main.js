document.addEventListener("keydown", playSound);

function playSound(event) {
  const sounds = document.querySelectorAll("audio");
  for (let i = 0; i < sounds.length; i++) {
    sounds[i].load();
  }
  switch (event.key) {
    case "1":
      document.getElementById("audio-clap").play();
      break;

    case "2":
      document.getElementById("audio-hihat").play();
      break;

    case "3":
      document.getElementById("audio-kick").play();

      break;

    case "4":
      document.getElementById("audio-openhat").play();
      break;

    case "5":
      document.getElementById("audio-ride").play();
      break;

    case "6":
      document.getElementById("audio-snare").play();
      break;

    case "7":
      document.getElementById("audio-tink").play();

      break;

    case "8":
      document.getElementById("audio-tom").play();
      break;
  }
}
