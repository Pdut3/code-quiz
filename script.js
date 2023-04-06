let StartBtn = document.getElementById("start");
let startMenu = document.getElementById("startMenu");
let timer = document.getElementById("timer");
let quizSection = document.getElementById("quizSection");
let queston = document.getElementById("question");
let answerA = document.getElementById("answerA");
let answerB = document.getElementById("answerB");
let answerC = document.getElementById("answerC");
let answerD = document.getElementById("answerD");
let initialsForm = document.getElementById("initialsForm");
let scoreSection = document.getElementById("scoreSection");
let intials = document.getElementById("initials");
let endMenu = document.getElementById("endMenu");
// 1. create array for questions
var questions = [
    {
        q: "Who has the most Masters victories?",
        a: "A) Tiger Woods",
        b: "B) Jack Nicklaus",
        c: "C) Arnold Palmer",
        d: "D) Gary Player",
        answer: "b",
    },
    {
        q: "When did Tiger Woods last win the Masters?",
        a: "A) 2019",
        b: "B) 2015",
        c: "C) 2022",
        d: "D) 2010",
        answer: "a",
    },
    {
        q: "Who is the youngest player to win the Masters?",
        a: "A) Jordan Speith",
        b: "B) Jack Nicklaus",
        c: "C) Tiger Woods",
        d: "D) Seve Ballesteros",
        answer: "c",
    },
];

score = 0;
timerCount = 30;
questionCount = 0;
let storedUsers;

function renderPageLoad(){
    quizSection.style.display = "none";  
    endMenu.style.display = "none";
    if (JSON.parse(localStorage.getItem("highscores")) === null) {
        storedUsers = [];
    } else {
        JSON.parse(localStorage.getItem("highscores"));
    }
    console.log(storedUsers);
}

function runQuiz() {
    if(questionCount === 3 || timerCount <= 0) {
        return endQuiz();
    }
    timer.textContent = "Time: " + timerCount;
    question.textContent = questions[questionCount].q;
    answerA.textContent = questions[questionCount].a;
    answerB.textContent = questions[questionCount].b;
    answerC.textContent = questions[questionCount].c;
    answerD.textContent = questions[questionCount].d;
}

renderPageLoad();
// 2. start button to begin quiz
StartBtn.addEventListener("click", function () {
    startTimer();
    startMenu.style.display = "none";
    quizSection.style.display = "block";
    endMenu.style.display = "none";
    runQuiz();
});
// 3. create a timer and start quiz

function startTimer () {
   let countdown = setInterval( function () {
        timerCount--;
        timer.textContent = "Time: " + timerCount;
        if(timerCount <= 0) {
            clearInterval(countdown);
            endQuiz();
        }
    }, 1000);
}
// 4. display first question w/ 4 choices

// 5. manage user descison
function manageSelectionA () {
    if (questions[questionCount].answer === "a") {
        questionCount++;
        score+= 10;
        console.log("correct");
    } else {
        console.log("wrong");
        timerCount-= 5;
        questionCount++;
    }
    runQuiz();
}
function manageSelectionB () {
    if (questions[questionCount].answer === "b") {
        questionCount++;
        score+= 10;
        console.log("correct");
    } else {
        console.log("wrong");
        timerCount-= 5;
        questionCount++;
    }
    runQuiz();
}function manageSelectionC () {
    if (questions[questionCount].answer === "c") {
        questionCount++;
        score+= 10;
        console.log("correct");
    } else {
        console.log("wrong");
        timerCount-= 5;
        questionCount++;
    }
    runQuiz();
}
function manageSelectionD () {
    if (questions[questionCount].answer === "d") {
        questionCount++;
        score+= 10;
        console.log("correct");
    } else {
        console.log("wrong");
        timerCount-= 5;
        questionCount++;
    }
    runQuiz();
}

answerA.addEventListener("click", manageSelectionA);
answerB.addEventListener("click", manageSelectionB);
answerC.addEventListener("click", manageSelectionC);
answerD.addEventListener("click", manageSelectionD);
// adjust time if incorrect
// adjust score is correct
// display next question

// 6. when finished, end quiz and provide input for users intials 
function endQuiz (){
   quizSection.style.display = "none";
   endMenu.style.display = "flex";
   console.log(score);
}

function saveScore(e) {
e.preventDefault()
newScore = {
    user: initials.value,
    userScore: score,
};
storedUsers.push(newScore);
localStorage.setItem("highscores", JSON.stringify(storedUsers));
window.location.href = "highscores.html";
}
initialsForm.addEventListener("submit", saveScore);
// 7. save highscore in local storage

// 8. display highscore, redirect to highscores page