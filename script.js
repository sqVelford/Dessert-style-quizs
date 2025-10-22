const questions = [
  {
    question: "How do you spend your weekend?",
    answers: [
      { text: "Relaxing at home", type: "Cheesecake" },
      { text: "Exploring new cafés", type: "Macaron" },
      { text: "Doing something adventurous", type: "Brownie" },
      { text: "Catching up with friends", type: "Cupcake" },
    ],
  },
  {
    question: "Pick a drink to go with your dessert:",
    answers: [
      { text: "Coffee", type: "Brownie" },
      { text: "Tea", type: "Cheesecake" },
      { text: "Juice", type: "Cupcake" },
      { text: "Sparkling water", type: "Macaron" },
    ],
  },
  {
    question: "Choose your ideal vacation:",
    answers: [
      { text: "Paris", type: "Macaron" },
      { text: "Tokyo", type: "Cupcake" },
      { text: "Bali", type: "Brownie" },
      { text: "Switzerland", type: "Cheesecake" },
    ],
  },
];

let current = 0;
let scores = { Cheesecake: 0, Macaron: 0, Brownie: 0, Cupcake: 0 };

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

function showQuestion() {
  const q = questions[current];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  q.answers.forEach((a) => {
    const btn = document.createElement("button");
    btn.textContent = a.text;
    btn.onclick = () => selectAnswer(a.type);
    answersEl.appendChild(btn);
  });
}
function selectAnswer(type) {
  scores[type]++;
  nextBtn.style.display = "block";
}
nextBtn.onclick = () => {
  current++;
  nextBtn.style.display = "none";
  if (current < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
};
function showResult() {
  document.getElementById("quiz").style.display = "none";
  resultEl.classList.remove("hidden");
  const top = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );
  resultEl.textContent = `You're most like a ${top}! 🍮`;
}
showQuestion();
