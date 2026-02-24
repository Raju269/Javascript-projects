const colors = [
  "#ff6b6b",
  "#6c5ce7",
  "#00b894",
  "#fdcb6e",
  "#0984e3",
  "#e84393",
  "#2d3436",
  "#ff9f43",
  "#10ac84",
  "#341f97",
];
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const income = document.querySelector("#Income");
  const amount = parseInt(income.value);
    
const colorIndex = Math.floor(Math.random() * colors.length);  
  const result = document.querySelector("h2");
  let totalTax = 0;
  if (amount < 1200000) {
    totalTax = 0;
  } else if ((amount) => 1600000) {
    totalTax = (amount - 1200000) * 0.15;
  } else if ((amount) => 2000000) {
    totalTax = (amount - 1600000) * 0.15;
  } else if ((amount) => 2400000) {
    totalTax = (amount - 1600000) * 0.25 + 60000 + 80000;
  } else {
    totalTax = (amount - 2400000) * 0.3 + 60000 + 80000 + 100000;
  }
    document.body.style.backgroundColor = colors[colorIndex];

  result.textContent = `Total Tax : ${totalTax}`;
  form.reset();
});
