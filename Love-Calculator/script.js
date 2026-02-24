const form = document.querySelector("form");
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
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const Men = document.getElementById("Men");
  const Women = document.getElementById("Women");
  const colorIndex = Math.floor(Math.random() * colors.length);

  const l1 = Men.value.length;
  const l2 = Men.value.length;

  document.body.style.backgroundColor = colors[colorIndex];
  const result = Math.pow(l1 + l2, 3) % 101;
  document.querySelector("h2").textContent = `Result : ${result} %`;
  form.reset();
});
