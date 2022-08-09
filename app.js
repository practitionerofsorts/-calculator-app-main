const numbers = document.querySelectorAll(".number");
const ioDisplay = document.querySelector(".currentDisplay");
const resetDisplay = document.querySelector(".reset");
const Delete = document.querySelector(".delete");
const toggleBtn = document.querySelectorAll(".toggle-btn");
const toggleSliderCase = document.querySelector(".toggle-slider-case");
const cssFile = document.querySelector("#cssfile");

// the toggle section

toggleBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    changeTheme(btn.innerText);
  });
});
function changeTheme(i) {
  if (i == 1) {
    cssFile.setAttribute("href", "default-theme1.css");
  } else {
    cssFile.setAttribute("href", `theme${i}.css`);
  }
}
// toggle section ends

// calculator
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    const numberValue = number.innerText;
    ioDisplay.innerHTML += numberValue;
  });
});
resetDisplay.addEventListener("click", () => {
  ioDisplay.innerHTML = null;
});

Delete.addEventListener("click", () => {
  const lengthOfDisplay = ioDisplay.value.length;
  const lastIndex = ioDisplay.value[lengthOfDisplay - 1];

  console.log(lastIndex);
});
