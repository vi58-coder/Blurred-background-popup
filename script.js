const conEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn");
const popEl = document.querySelector(".popup-container");
const closeEl = document.querySelector(".close-icon");

// Set initial state
conEl.classList.remove("active");
popEl.classList.add("active");

btnEl.addEventListener("click", () => {
  conEl.classList.add("active");
  popEl.classList.remove("active");
});

closeEl.addEventListener("click", () => {
  conEl.classList.remove("active");
  popEl.classList.add("active");
});