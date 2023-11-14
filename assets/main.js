document.addEventListener("DOMContentLoaded", function () {
  let counter = 1; // Startnummer
  const umwickelnDiv = document.querySelector(".umwickeln");

  document
    .getElementById("createButton")
    .addEventListener("click", function () {
      const newElement = document.createElement("div");
      newElement.classList.add("rechteck");
      newElement.textContent = counter;
      umwickelnDiv.appendChild(newElement);
      counter++;
    });
});

//Aufgabe 2
document.addEventListener("DOMContentLoaded", function () {
  const colorButton = document.getElementById("colorButton");

  colorButton.addEventListener("click", function () {
    changeBackgroundColor();
  });

  function changeBackgroundColor() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
  }

  function getRandomColor() {
    const randomColorValue = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColorValue;
  }
});
