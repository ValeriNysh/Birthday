// TASK 1

const task1Input = document.getElementById("task1Input").value;
if (parseInt(task1Input) != null) {
}

const answerForm = document.getElementById("answerForm");

answerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  checkNumber();
});

function checkNumber() {
  const task1Input = document.getElementById("task1Input").value;
  const errorMessage = document.getElementById("errorMessage");
  const hiddenPart = document.getElementById("hidden");

  if (parseInt(task1Input) === 28) {
    hiddenPart.style.display = "flex";
    errorMessage.style.display = "none";
    answerForm.style.display = "none";
  } else {
    errorMessage.style.display = "flex";
  }
}

// TASK 2

function checkAnswer(buttonId) {
  const btnWrong1 = document.getElementById("btnWrong1");
  const btnWrong2 = document.getElementById("btnWrong2");
  const btnWrong3 = document.getElementById("btnWrong3");
  const btnCorrect = document.getElementById("btnCorrect");

  if (
    buttonId === "btnWrong1" ||
    buttonId === "btnWrong2" ||
    buttonId === "buttonWrong3"
  ) {
    // document.getElementById(buttonId).style.
    errorMessage.style.display = "flex";
  } else {
    errorMessage.style.display = "none";
  }
}
