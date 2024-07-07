const firstDiv = document.getElementById(`firstDiv`);

const onHover = function () {
  firstDiv.style.backgroundColor = `purple`;
};

const offHover = function () {
  firstDiv.style.backgroundColor = ``;
};

const cards = document.querySelectorAll(`.card`);

cards.forEach((card) => {
  const randomText = Math.random().toString(36).substring(5);
  card.textContent = randomText;
  card.style.color = `red`;
});

const firstCard = document.querySelector(`.card`);

if (firstCard) {
  const spanElement = document.createElement(`span`);
  spanElement.textContent = `Hello from span!`;
  spanElement.style.backgroundColor = `green`;
  firstCard.appendChild(spanElement);
}

const button = document.createElement(`button`);
button.textContent = `Click Me`;

firstDiv.parentNode.insertBefore(button, firstDiv);
button.classList.add(`style-button`);

const toggleBtn = document.getElementById("toggleBtn");
const toggleParagraph = document.getElementById("toggleParagraph");

toggleBtn.textContent = `Click`;
toggleParagraph.textContent = `hello`;

toggleBtn.addEventListener("click", function () {
  if (toggleParagraph.style.display === "none") {
    toggleParagraph.style.display = "block";
  } else {
    toggleParagraph.style.display = "none";
  }
});
