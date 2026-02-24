const quotes = [
  "Push yourself, because no one else is going to do it for you.",
  "Success starts with self-discipline.",
  "Dream big. Start small. Act now.",
  "Consistency beats motivation.",
  "Your only limit is your mindset.",
  "Code. Debug. Repeat.",
  "Small progress is still progress.",
  "Stay hungry. Stay foolish.",
  "Discipline creates freedom.",
  "Don’t stop until you’re proud.",
  "Focus on growth, not perfection.",
  "Great things take time.",
  "Make it happen.",
  "Hard work compounds over time.",
  "Learn something new every day.",
  "Be better than yesterday.",
  "Action cures fear.",
  "Stay patient and trust your journey.",
  "Winners never quit.",
  "Build skills, not excuses.",
  "Your future is created by what you do today.",
  "Fall seven times, stand up eight.",
  "Turn pain into power.",
  "Think like a developer, solve like an engineer.",
  "Keep coding, keep growing.",
];
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
const button = document.querySelector("button");
const quote = document.querySelector("h1");

button.addEventListener("click", () => {
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const colorIndex = Math.floor(Math.random() * colors.length);

  quote.textContent = quotes[quoteIndex];
  document.body.style.backgroundColor = colors[colorIndex];
});
