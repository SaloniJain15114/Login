const questions = [
    {
    question: "How do you declear a Javascript variable?",
options: ["variable x;", "var x;", "v x;", "declear x;"],
      correct: 1  // var x; is the correct answer
    },
    {
      question: "Which property is used to change the background color in CSS?",
options: ["background-color", "color", "bgcolor", "background"],
      correct: 0 // background-color is the correct answer
    },
    {
      question: "Which HTML tag is used to create a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<hyperlink>"],
      correct: 1 // <a> is the correct answer
    },
    {
      question: "Which CSS property controls the text size?",
      options: ["font-size", "text-size", "size", "font-size"],
      correct: 0 // font-size is the correct answer
    },
    {
        question: "Which tag is used to display an image in HTNML?",
        options: ["<image>", "<img>", "<pic>", "<src>"],
        correct: 1 // <img> is the correct answer
      }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const nextButton = document.getElementById("next");
  const skipButton = document.getElementById("skip");
  const marksElement = document.getElementById("marks");
  const thankElement=document.getElementById("thank");
  const playAgainButton = document.getElementById("play-again");
  const playAgainContainer = document.getElementById("play-again-container");
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
  
    currentQuestion.options.forEach((option, index) => {
      const li = document.createElement("li");
      li.textContent = option;
      li.setAttribute("data-index", index);
      li.onclick = () => checkAnswer(index);
      optionsElement.appendChild(li);
    });
    // Trigger reanimation for each new question and options
  setTimeout(() => {
    questionElement.style.animation = "fadeInUp 0.8s ease-in-out forwards";
    const optionItems = optionsElement.querySelectorAll("li");
    optionItems.forEach((option, index) => {
      option.style.animation = `fadeInUp 0.5s ease-in-out forwards ${index * 0.1}s`;
    });
  }, 100); // Delay to ensure smooth animation on page load

  }
  
  function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const optionElements = optionsElement.querySelectorAll("li");
  
    if (selectedIndex === currentQuestion.correct) {
      score++;
      optionElements[selectedIndex].style.backgroundColor = "green";
    } else {
      optionElements[selectedIndex].style.backgroundColor = "red";
    }
  
    optionElements.forEach((li, index) => {
      if (index === currentQuestion.correct) {
        li.style.backgroundColor = "green"; // Mark correct option in green
      }
      li.onclick = null; // Disable further clicks on options
    });
  
    updateMarks();
    nextButton.disabled = false;
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
      nextButton.disabled = true;
    } else {
        showPlayAgain();
    }
  }
  
  function skipQuestion() {
    nextQuestion(); // Simply skip to the next question
  }
  
  function updateMarks() {
    marksElement.textContent = score;
  }
  function showPlayAgain() {
    nextButton.disabled = true;
    skipButton.disabled = true;
    playAgainContainer.style.animation = "fadeInUp 0.8s ease-in-out forwards"; 
    playAgainContainer.style.display = "block"; // Show Play Again button
  }
  
  function playAgain() {
    score = 0;
    currentQuestionIndex = 0;
    playAgainContainer.style.display = "none"; // Hide Play Again button
    nextButton.disabled = true;
    skipButton.disabled = false;
    loadQuestion();
    updateMarks();
  }
 
  
  loadQuestion();
  nextButton.disabled = true; // Disable Next button initially

