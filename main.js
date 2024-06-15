function scrollToCenter(element) {
  // const hiddenPart = document.getElementById("hidden");
  // if (hiddenPart && hiddenPart.style.display === "flex")
  element.scrollIntoView({ behavior: "smooth", block: "center" });
}

function showHidden() {
  const errorMessage = document.getElementById("errorMessage");
  const hiddenPart = document.getElementById("hidden");
  errorMessage.style.display = "none";
  hiddenPart.style.display = "flex";
  scrollToCenter(hiddenPart);
}

function showError() {
  const errorMessage = document.getElementById("errorMessage");
  const hiddenPart = document.getElementById("hidden");
  errorMessage.style.display = "flex";
  hiddenPart.style.display = "none";
  scrollToCenter(hiddenPart);
}

// TASK 1

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("task1Input")) {
    const task1Input = document.getElementById("task1Input").value;
  }
  const answerForm = document.getElementById("answerForm");

  answerForm?.addEventListener("submit", function (e) {
    e.preventDefault();
    checkNumber();
  });

  function checkNumber() {
    const inputValue = task1Input.value;

    if (parseInt(inputValue) === 28) {
      answerForm.style.display = "none";
      showHidden();
    } else {
      showError();
    }
  }
});

// TASK 2

function checkAnswer(event, buttonId) {
  event.preventDefault();

  const btnWrong1 = document.getElementById("btnWrong1");
  const btnWrong2 = document.getElementById("btnWrong2");
  const btnWrong3 = document.getElementById("btnWrong3");
  const btnCorrect = document.getElementById("btnCorrect");

  if (buttonId === btnCorrect) {
    showHidden();
  } else if (
    buttonId === btnWrong1 ||
    buttonId === btnWrong2 ||
    buttonId === btnWrong3
  ) {
    showError();
  }
}

// TASK 3
let currentAudio = null;

function playMusic(event, audioId) {
  event.preventDefault();

  const audio = document.getElementById(audioId);

  if (currentAudio && currentAudio != audio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  if (audio.paused) {
    console.log("Playing audio");
    audio.play().catch((error) => console.error("Error playing audio:", error));
  } else {
    console.log("Pausing audio");
    audio.pause();
  }

  currentAudio = audio;
}

const dropdown = document.getElementById("dropdown");
const checkSongBtn = document.getElementById("checkSongButton");

checkSongBtn.addEventListener("click", () => {
  const selectedValue = dropdown.value;
  const correctValue = "option2";

  if (selectedValue === correctValue) {
    showHidden();
  } else {
    showError();
  }
});
