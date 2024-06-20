function scrollToCenter(element) {
  element?.scrollIntoView({ behavior: "smooth", block: "center" });
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
  scrollToCenter(errorMessage);
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
    if (parseInt(task1Input.value) === 28) {
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

  // const musicButton = document.getElementsByClassName("musicButton");
  // musicButton.style.backgroundColor = "#ffbf9d";

  const audio = document.getElementById(audioId);

  if (currentAudio && currentAudio != audio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  if (audio.paused) {
    audio.play().catch((error) => console.error("Error playing audio:", error));
  } else {
    audio.pause();
  }

  currentAudio = audio;
}

const dropdown = document.getElementById("dropdown");
const checkSongBtn = document.getElementById("checkSongButton");
const songAnswerForm = document.getElementById("songAnswerForm");

songAnswerForm?.addEventListener("submit", function (e) {
  e.preventDefault();
});

scrollToCenter(dropdown);

checkSongBtn?.addEventListener("click", () => {
  const selectedValue = dropdown.value;
  const correctValue = "option2";

  if (selectedValue === correctValue) {
    songAnswerForm.style.display = "none";
    showHidden();
  } else {
    showError();
  }
});

// TASK 4

let checkedButtons = [];

function choosePhotoMainz(event, buttonId) {
  event.preventDefault();

  const mainzButton = document.getElementById(buttonId);

  // for (let i = 0; i < checkedButtons.length; i++) {
  // if (checkedButtons[i] === buttonId) {
  const index = checkedButtons.indexOf(buttonId);
  if (index > -1) {
    checkedButtons.splice(index, 1);
    mainzButton.style.borderColor = "white";
  } else {
    checkedButtons.push(buttonId);
    mainzButton.style.borderColor = "yellow";
  }
}

const checkMainzButton = document.getElementById("checkMainzButton");

checkMainzButton?.addEventListener("click", () => {
  checkedButtons.forEach(function (checkedBtn) {
    console.log(checkedBtn);
  });

  if (checkedButtons.length === 3) {
    let correct = 0;
    checkedButtons.forEach(function (checkedBtn) {
      if (
        checkedBtn === "btnWo1" ||
        checkedBtn === "btnWo2" ||
        checkedBtn === "btnWo3"
      ) {
        correct++;
      } else showError();
    });

    if (correct === 3) {
      checkMainzButton.style.display = "none";
      showHidden();
    } else showError();
  } else showError();
});
