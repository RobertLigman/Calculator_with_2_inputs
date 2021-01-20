const firstInput = document.querySelector("[data-label=first-input]");
const secondInput = document.querySelector("[data-label=second-input]");
const btn = document.querySelector("[data-label=calculate]");
const calculationType = document.querySelector("[data-label=calculation-type]");
const output = document.querySelector("[data-label=output]");
const calculate = () => {
  output.textContent = +firstInput.value + +secondInput.value;
};
btn.addEventListener("click", calculate);
