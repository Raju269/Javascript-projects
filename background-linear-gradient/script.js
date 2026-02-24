const parent = document.getElementById("parent");

const gradients = [
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

parent.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const color1 = e.target.style.backgroundColor;

    const randomColor = gradients[Math.floor(Math.random() * gradients.length)];

    document.body.style.background = `linear-gradient(to right, ${color1}, ${randomColor})`;
  }
});
