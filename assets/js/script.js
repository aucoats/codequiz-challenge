var quizArea = document.querySelector("#quiz-area");
var startButton = document.querySelector("#start");

// var questions = [
//     test1, 
//     test2,
//     test3,
//     test4
// ];

// var answers = [
//     [ test-1-1, test-1-2, test-1-3, test-1-4], 
//     [ test-2-1, test-2-2, test-2-3, test-2-4], 
//     [ test-3-1, test-3-2, test-3-3, test-3-4], 
//     [ test-4-1, test-4-2, test-4-3, test-4-4],   
// ]

function clearArea() {
    quizArea.innerHTML = "";

}

function startQuiz(event) {
    clearArea();
    console.log("should have cleared");
    var qText = document.createElement("h2");
    qText.className = "question";
    qText.textContent = "TEST"

    var qOption1 = document.createElement("button");
    var qOption2 = document.createElement("button");

    quizArea.appendChild(qText);
    
}

startButton.addEventListener("click", startQuiz);