function scrollToCenter(element) {
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
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
    if (parseInt(task1Input?.value) === 28) {
      answerForm.style.display = "none";
      showHidden();
    } else {
      showError();
    }
  }
});

// TASK 2 and 4

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

// TASK 3 and particulary TASK 6

let currentAudio = null;

function playMusic(event, audioId) {
  event.preventDefault();

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

  if (selectedValue === "option2") {
    songAnswerForm.style.display = "none";
    showHidden();
  } else {
    showError();
  }
});

// TASK 5

let checkedButtons = [];

function choosePhotoMainz(event, buttonId) {
  event.preventDefault();

  const mainzButton = document.getElementById(buttonId);

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

// TASK 6

const checkNoMainzButton = document.getElementById("checkNoMainzButton");

checkNoMainzButton?.addEventListener("click", () => {
  const selValFr = document.getElementById("Frankfurt").value;
  const selVaAb = document.getElementById("Aschaffenburg").value;
  const selValMn = document.getElementById("Mannheim").value;
  const selValHd = document.getElementById("Heidelberg").value;
  const selValPr = document.getElementById("Paris").value;

  if (
    selValFr === "Frankfurt" &&
    selVaAb === "Aschaffenburg" &&
    selValMn === "Mannheim" &&
    selValHd === "Heidelberg" &&
    selValPr === "Paris"
  ) {
    checkNoMainzButton.style.display = "none";
    showHidden();
  } else showError();
});

// TASK 7

const checkBtn = document.getElementById("checkFlugzeugButton");

checkBtn?.addEventListener("click", () => {
  const input1 = document.getElementById("task7-1");
  const input2 = document.getElementById("task7-2");
  const input3 = document.getElementById("task7-3");

  if (
    input1.value.toUpperCase() === "APRIL" &&
    (input2.value.toUpperCase() === "ICE CREAM" ||
      input2.value.toUpperCase() === "ICECREAM" ||
      input2.value.toUpperCase() === "ICE-CREAM" ||
      input2.value.toUpperCase() === "ICE" ||
      input2.value.toUpperCase() === "EIS") &&
    input3.value
  ) {
    checkBtn.style.display = "none";
    showHidden();
  } else showError();
});
