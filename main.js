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
