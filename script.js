const converter = document.querySelector("#converter");
const result = document.querySelector(".result");
const convBtn = document.querySelector(".conv");
const resetBtn = document.querySelector(".reset");
const changeBtn = document.querySelector(".change");
const one = document.querySelector(".one");
const two = document.querySelector(".two");

let fahrenheit;
let celsius;

const swap = () => {
  if (one.textContent === "°C") {
    one.textContent = "°F";
    two.textContent = "°C";
    result.textContent = "";
  } else {
    one.textContent = "°C";
    two.textContent = "°F";
    result.textContent = "";
  }
};

const fahrToCel = () => {
  fahrenheit = converter.value * 1.8 + 32;
  result.textContent = ` ${converter.value}°C to ${fahrenheit.toFixed(2)}°F`;
  converter.value = "";
};

const celToFahr = () => {
  celsius = (converter.value - 32) / 1.8;
  result.textContent = ` ${converter.value}°F to ${celsius.toFixed(2)}°C`;
  converter.value = "";
};

const ceoversion = () => {
  if (converter.value !== "") {
    if (one.textContent === "°C") {
      fahrToCel();
    } else {
      celToFahr();
    }
  } else {
    result.textContent = " Musisz podać jakąś wartość";
  }
};

const reset = () => {
  converter.value = "";
  result.textContent = "";
};

changeBtn.addEventListener("click", swap);
convBtn.addEventListener("click", ceoversion);
resetBtn.addEventListener("click", reset);
