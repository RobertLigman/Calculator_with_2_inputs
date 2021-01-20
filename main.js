const firstInput = document.querySelector("[data-label=first-input]");
const secondInput = document.querySelector("[data-label=second-input]");
const btn = document.querySelector("[data-label=calculate]");

const output = document.querySelector("[data-label=output]");
const calculate = () => {
  const calculationType = [
    ...document.querySelectorAll("[name=calculation-type]"),
  ];
  const calcType = calculationType.find((item) => item.checked === true);
  switch (calcType.value) {
    case "add":
      output.textContent = +firstInput.value + +secondInput.value;
      break;
    case "substract":
      output.textContent = +firstInput.value - +secondInput.value;
      break;
    case "multiple":
      output.textContent = +firstInput.value * +secondInput.value;
      break;
    case "divide":
      output.textContent = +firstInput.value / +secondInput.value;
      break;
  }
};
btn.addEventListener("click", calculate);
