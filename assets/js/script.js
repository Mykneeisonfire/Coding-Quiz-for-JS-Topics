//questions

const questions = [
    {
        question: "Javascript is an _______ language?",
        choices: ["1. <object-orientedt>", "2. <object-based>", "3. <procedural>", "4. <none of the above>"],
        answer: "1. <object-orientedt>"
    },
    {
        question: "What keyword is used to check whether a given property is valid or not?",
        choices: ["1. in", "2. is in", "3. exists", "4. lies"],
        answer: "1. in"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: "2. other arrays"
    },
    {
        question: "What are variables used for in JavaScript Programs?",
        choices: ["1. storing numbers, dates, or other values", "2. varying randomly", "3. causing high-school algebra flashbacks", "4.  none of the above"],
        answer: "3. alerts"
    },
    {
        question: "To see if two variables are equal in an if / else statement you would use ____.",
        choices: ["1. =", "2. ==", "3. 'equals'", "4. !="],
        answer: "2. =="
    },
    {
        question: "The first index of an array is ____.",
        choices: ["a. 1", "2. 1", "3. 8", "4. any"],
        answer: "1. 0"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        choices: ["1. if i == x then", "2. if i = x then", "3. if(i == x)", "4. if i = x"],
        answer: "3. if(i == x)"
    },
    {
        question: "How do you add a comment in a JavaScript?",
        choices: ["1. //This is a comment", "2. <!--This is a comment-->", "3. 'This is a comment", "4. * This is a comment *"],
        answer: "1. //This is a comment"
    },
]

// variables/elements
var timer = documents.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timeEnd = document.getElementById("timeEnd");
var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");
var questionDiv = document.getElementById("questionDiv");
var questiont = document.getElementById("questiont");
var choice1 = document.getElementById("btn0");
var choice2 = document.getElementById("btn1");
var choice3 = document.getElementById("btn2");
var choice4 = document.getElementById("btn3");

//functions

//Timer
var totalTime = 151;
function newQuiz() {
    questionIndex = 0;
    totalTime = 150;
    timeLeft.textContent = totalTime;
    initialInput.textContent = "";

    startDiv.style.display = "none";
    questionDiv.style.display = "block";
    timer.style.display = "block";
    timesUp.style.display = "none";

    var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length - 1) {
                gameOver();
            }
        }
    },1000);

    showQuiz();
};

//quiz
function showQuiz{
    nextQuestion();
}

function nextQuestion(){
    questiont.textContent = questions[questionIndex].question;
    choice1.textContent = questions[questionIndex].choices[0];
    choice2.textContent = questions[questionIndex].choices[1];
    choice3.textContent = questions[questionIndex].choices[2];
    choice4.textContent = questions[questionIndex].choices[3];
}






startQuizBtn.addEventListener("click", newQuiz);
choice1.addEventListener("click", choose1);
choice2.addEventListener("click", choose2);
choice3.addEventListener("click", choose3);
choice4.addEventListener("click", choose4);




//correct or wrong

//game end

//scoring