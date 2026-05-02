let count = document.querySelector("#count");
let increaseBtn = document.querySelector("#increaseBtn");
let decreaseBtn = document.querySelector("#decreaseBtn");
let resetBtn = document.querySelector("#resetBtn");

let number = 0;

function updateUI() {
  count.textContent = number;

  count.classList.remove("animate");
  void count.offsetWidth;
  count.classList.add("animate");

  if (number > 0) {
    count.style.color = "green";
  } else {
    count.style.color = "black";
  }
}

increaseBtn.addEventListener("click", function () {
  number++;
  updateUI();
});

decreaseBtn.addEventListener("click", function () {
  if (number > 0) {
    number--;
    updateUI();
  }
});

resetBtn.addEventListener("click", function () {
  number = 0;
  updateUI();
});
