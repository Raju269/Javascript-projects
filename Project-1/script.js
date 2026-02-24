const Thought = [
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
]; // behid is a array 
const backgroundColor = [
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
]
// behid its work as array 

// main code start here 
const button = document.querySelector('button'); // create a variable to used the d
const virtual = document.querySelector('h1'); // create a vaiable to used 

// function 
button.addEventListener('click',()=>{
    const imagine = Math.floor(Math.random()*Thought.length);
    const colorchange = Math.floor(Math.random()*backgroundColor.length);

    virtual.textContent = Thought[imagine];
    document.body.style.background = backgroundColor[colorchange];

});

