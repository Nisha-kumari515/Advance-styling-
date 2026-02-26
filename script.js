

const quizData = [
  {
    question: "Which language runs in the browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: ["Colorful Style Sheet", "Cascading Style Sheets", "Creative Styling System", "Computer Style Sheet"],
    answer: "Cascading Style Sheets"
  }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const progress = document.querySelector(".progress");
const scoreEl = document.getElementById("score");

function loadQuiz() {
  let q = quizData[current];
  questionEl.innerText = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    let btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(option);
    optionsEl.appendChild(btn);
  });

  progress.style.width = ((current) / quizData.length) * 100 + "%";
}

function checkAnswer(selected) {
  if (selected === quizData[current].answer) {
    score++;
  }
}

nextBtn.addEventListener("click", () => {
  current++;
  if (current < quizData.length) {
    loadQuiz();
  } else {
    questionEl.innerText = "Quiz Completed!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    scoreEl.innerText = "Your Score: " + score;
    progress.style.width = "100%";
  }
});

loadQuiz();




const images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1018/600/400"
];

let imgIndex = 0;
const carouselImg = document.getElementById("carousel-img");

function showImage() {
  carouselImg.style.opacity = 0;
  setTimeout(() => {
    carouselImg.src = images[imgIndex];
    carouselImg.style.opacity = 1;
  }, 300);
}

function nextImage() {
  imgIndex = (imgIndex + 1) % images.length;
  showImage();
}

function prevImage() {
  imgIndex = (imgIndex - 1 + images.length) % images.length;
  showImage();
}

setInterval(nextImage, 4000);



function getJoke() {
  const jokeEl = document.getElementById("joke");
  const loader = document.getElementById("loader");

  loader.style.display = "block";
  jokeEl.innerText = "";

  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      loader.style.display = "none";
      jokeEl.innerText = data.setup + " - " + data.punchline;
    })
    .catch(() => {
      loader.style.display = "none";
      jokeEl.innerText = "Failed to fetch joke.";
    });
}