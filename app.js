const numbers = document.querySelectorAll(".number");
const ioDisplay = document.querySelector("#ioDisplay");
const resetDisplay = document.querySelector(".reset");
const Delete = document.querySelector(".delete");

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    // alert("nice");
    const numberValue = number.innerText;
    ioDisplay.value += numberValue;
  });
});
resetDisplay.addEventListener("click", () => {
  ioDisplay.value = null;
});

Delete.addEventListener("click", () => {
  const lengthOfDisplay = ioDisplay.value.length;
  const lastIndex = ioDisplay.value[lengthOfDisplay - 1];

  console.log(lastIndex);
});
