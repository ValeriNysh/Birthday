function scrollToCenter(element) {
  // const hiddenPart = document.getElementById("hidden");
  // if (hiddenPart && hiddenPart.style.display === "flex")
  element.scrollIntoView({ behavior: "smooth", block: "center" });
}

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
    errorMessage.style.display = "none";
    answerForm.style.display = "none";
    hiddenPart.style.display = "flex";
    scrollToCenter(hiddenPart);
  } else {
    errorMessage.style.display = "flex";
    scrollToCenter(errorMessage);
  }
}

// TASK 2

function checkAnswer(event, buttonId) {
  event.preventDefault();

  const btnWrong1 = document.getElementById("btnWrong1");
  const btnWrong2 = document.getElementById("btnWrong2");
  const btnWrong3 = document.getElementById("btnWrong3");
  const btnCorrect = document.getElementById("btnCorrect");
  const hiddenPart = document.getElementById("hidden");

  if (buttonId === btnCorrect) {
    errorMessage.style.display = "none";
    hiddenPart.style.display = "flex";
    scrollToCenter(hiddenPart);
  } else if (
    buttonId === btnWrong1 ||
    buttonId === btnWrong2 ||
    buttonId === btnWrong3
  ) {
    hiddenPart.style.display = "none";
    errorMessage.style.display = "flex";
    scrollToCenter(errorMessage);
  }
}
