//set 1
let current1 = 0;

const set1 = document.querySelectorAll(".set1");
document.getElementById("prevBtn1").addEventListener("click", prev1);
document.getElementById("nextBtn1").addEventListener("click", next1);

function showSet1(index) {
  set1.forEach(set1 => set1.classList.remove("active"));
  set1[index].classList.add("active");
}

function next1() {
  if (current1 < set1.length - 1) {
    current1++;
    showSet1(current1);
  }
}

function prev1() {
  if (current1 > 0) {
    current1--;
    showSet1(current1);
  }
}

// IMPORTANT: start with only first card visible
showSet1(current1);




//set 2:
let current2 = 0;

const set2 = document.querySelectorAll(".set2");
document.getElementById("prevBtn2").addEventListener("click", prev2);
document.getElementById("nextBtn2").addEventListener("click", next2);

function showSet2(index) {
  set2.forEach(set2 => set2.classList.remove("active"));
  set2[index].classList.add("active");
}

function next2() {
  if (current2 < set2.length - 1) {
    current2++;
    showSet2(current2);
  }
}

function prev2() {
  if (current2 > 0) {
    current2--;
    showSet2(current2);
  }
}

// IMPORTANT: start with only first card visible
showSet2(current2);




//set 3:
let current3 = 0;

const set3 = document.querySelectorAll(".set3");
document.getElementById("prevBtn3").addEventListener("click", prev3);
document.getElementById("nextBtn3").addEventListener("click", next3);

function showSet3(index) {
  set3.forEach(set3 => set3.classList.remove("active"));
  set3[index].classList.add("active");
}

function next3() {
  if (current3 < set3.length - 1) {
    current3++;
    showSet3(current3);
  }
}

function prev3() {
  if (current3 > 0) {
    current3--;
    showSet3(current3);
  }
}

// IMPORTANT: start with only first card visible
showSet3(current3);











const questions = document.querySelectorAll(".question");
let currentQuestion = 0;

function showQuestion(index) {
  questions.forEach(question => {
    question.classList.remove("active");
  });

  questions[index].classList.add("active");

  const progressFill =
    document.getElementById("progressFill");

  progressFill.style.width =
    `${((index + 1) / questions.length) * 100}%`;

  const submitBtn =
    document.getElementById("submitBtn");

  if (index === questions.length - 1) {
    submitBtn.style.display = "inline-block";
  } else {
    submitBtn.style.display = "none";
  }
}

function nextQuestion() {
  const current = questions[currentQuestion];
  
  console.log(current);

  let selected;

  if (currentQuestion === 0) {
      selected = document.querySelector(
          'input[name="q1"]:checked'
      );
  }
  else if (currentQuestion === 1) {
      selected = document.querySelector(
          'input[name="q2"]:checked'
      );
  }

  if (!selected) {
    alert("Please select an answer first.");
    return;
  }
  
  
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion(currentQuestion);
  }
}










document.getElementById("quizForm").addEventListener("submit", function(event) {
  status = document.getElementById("status");
  
  
  event.preventDefault();

  const q1 = document.querySelector(
    'input[name="q1"]:checked'
  );

  const q2 = document.querySelector(
    'input[name="q2"]:checked'
  );

  const q3 = document.querySelector(
    'input[name="q3"]:checked'
  );

  if (!q1 || !q2 || !q3) {
    document.getElementById("result").textContent = "Please answer all questions.";
    return;
  }

  let score = 0;

  if (q1.value === "8") {
    score++;
  }

  if (q2.value === "5") {
    score++;
  }

  if (q3.value === "1") {
    score++;
  }

  if (score === 3) {
    status = "Astronaut status! Your knowledge is truly out of this world!"
  } else if (score === 2) {
    status = "Orbiting Greatness! You know your planets, missing just one cosmic detail!"
  } else if (score === 1) {
    status = "Stargazer! You caught a glimpse of it, but you are beginning your journey!"
  } else {
    status = "Lost in Space! You got caught in a black hole, but you can always try again!"
  }

  document.getElementById("result").textContent = `You got ${score}/3 correct!`;
  document.getElementById("status").textContent = status;
});

showQuestion(0);