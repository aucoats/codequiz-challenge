var quizArea = document.querySelector("#quiz-area");
var startButton = document.querySelector("#start");



var startQuiz = function() {
    var qText = document.createElement("h2");
    qText.className = "question";
    qText.textContent = "TEST"

    quizArea.appendChild(qText);
    
}

startButton.addEventListener("click", startQuiz());