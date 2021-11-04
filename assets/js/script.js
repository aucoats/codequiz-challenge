/* start quiz, 
    start timer,
        reduce time by 10s on an incorrect answer
    populate quiz, 
        click button to advance quiz
        */


        // use jquery? 

var quizArea = document.querySelector("#quiz-area");
var startButton = document.querySelector("#start");
var time = 75;


// global "turns" variable for iterating through questions and then populates on next click?

var quizQuestions = [
    {
        question: "Test",
        answers: {
            1: "test",
            2: "test",
            3: "test",
            4: "test",
        },
        correctAnswer: "2"
    },
    {
        question: "Tes2t",
        answers: {
            1: "test",
            2: "test",
            3: "test",
            4: "test",
        },
        correctAnswer: "4"
    },
    {
        question: "Tes3t",
        answers: {
            1: "test",
            2: "test",
            3: "test",
            4: "test",
        },
        correctAnswer: "2"
    },
    {
        question: "Tes4t",
        answers: {
            1: "test",
            2: "test",
            3: "test",
            4: "test",
        },
        correctAnswer: "1"
    }
]

// function answerCheck(event) {
//     clearArea();
//     startQuiz();
// }
// function pointHandler() {

// }

// function viewScores() {
    // quizArea.innerHTML = "";
// };

function clearArea() {
    quizArea.innerHTML = "";
}

var interval = setInterval(function() {
        
    document.getElementById('timer').textContent = time;
    time--;
    if (time === 0) {
        clearInterval(interval);
        document.getElementById('timer').textContent = 'Done';
        alert("You have no time left.");
        enterHighscores();
    }   
}, 1000);

function startQuiz(event) {
    
    clearArea();
    
    var qText = document.createElement("h2");
    qText.className = "question";
    qText.textContent = quizQuestions[0].question;
    
    var answerList = document.createElement("div")
    answerList.className ="answer-list"

    var qOption1 = document.createElement("button");
    var qOption2 = document.createElement("button");
    var qOption3 = document.createElement("button");
    var qOption4 = document.createElement("button");

    qOption1.className = "answer"
    qOption2.className = "answer"
    qOption3.className = "answer"
    qOption4.className = "answer"

    qOption1.id = "answer-button"
    qOption2.id = "answer-button"
    qOption3.id = "answer-button"
    qOption4.id = "answer-button"

    qOption1.setAttribute("data-valid", "incorrect")
    qOption2.setAttribute("data-valid", "correct")
    qOption3.setAttribute("data-valid", "incorrect")
    qOption4.setAttribute("data-valid", "incorrect")
    

    qOption1.setAttribute("onclick", "nextQuestion()");
    qOption2.setAttribute("onclick", "nextQuestion()");
    qOption3.setAttribute("onclick", "nextQuestion()");
    qOption4.setAttribute("onclick", "nextQuestion()");
    

    qOption1.textContent = quizQuestions[0].answers[1];
    qOption2.textContent = quizQuestions[0].answers[2];
    qOption3.textContent = quizQuestions[0].answers[3];
    qOption4.textContent = quizQuestions[0].answers[4];

    quizArea.appendChild(qText);
    quizArea.appendChild(answerList);
    
    answerList.appendChild(qOption1);
    answerList.appendChild(qOption2);
    answerList.appendChild(qOption3);
    answerList.appendChild(qOption4);


    quizQuestions.shift();

    // var answerButton = document.getElementById("#answer-button");
    // answerButton.onclick = function() {console.log("please")};
    // function {
    //     if (event.target.getAttribute("data-valid") = "correct") {

    //     }

    // })
    
    // var answerCheck = document.querySelector("button").onclick;
    // console.log(answerCheck);

     // if (iterations = 0) {
    //     qOption1.setAttribute("data-valid", "incorrect")
    //     qOption2.setAttribute("data-valid", "correct")
    //     qOption3.setAttribute("data-valid", "incorrect")
    //     qOption4.setAttribute("data-valid", "incorrect")
    // } else if (iterations = 1) {
    //     qOption1.setAttribute("data-valid", "incorrect")
    //     qOption2.setAttribute("data-valid", "incorrect")
    //     qOption3.setAttribute("data-valid", "incorrect")
    //     qOption4.setAttribute("data-valid", "correct")
    // } else if (iterations = 2) {
    //     qOption1.setAttribute("data-valid", "incorrect")
    //     qOption2.setAttribute("data-valid", "correct")
    //     qOption3.setAttribute("data-valid", "incorrect")
    //     qOption4.setAttribute("data-valid", "incorrect")
    // } else if (iterations = 4) {
    //     qOption1.setAttribute("data-valid", "correct")
    //     qOption2.setAttribute("data-valid", "incorrect")
    //     qOption3.setAttribute("data-valid", "incorrect")
    //     qOption4.setAttribute("data-valid", "incorrect")
    // }

}

function nextQuestion(event) {
    
    clearArea();
    
    var qText = document.createElement("h2");
    qText.className = "question";
    qText.textContent = quizQuestions[0].question;
    
    var answerList = document.createElement("div")
    answerList.className ="answer-list"

    var qOption1 = document.createElement("button");
    var qOption2 = document.createElement("button");
    var qOption3 = document.createElement("button");
    var qOption4 = document.createElement("button");

    qOption1.className = "answer"
    qOption2.className = "answer"
    qOption3.className = "answer"
    qOption4.className = "answer"

    qOption1.id = "answer-button"
    qOption2.id = "answer-button"
    qOption3.id = "answer-button"
    qOption4.id = "answer-button"

    qOption1.setAttribute("data-valid", "incorrect")
    qOption2.setAttribute("data-valid", "incorrect")
    qOption3.setAttribute("data-valid", "incorrect")
    qOption4.setAttribute("data-valid", "correct")

    qOption1.setAttribute("onclick", "thirdQuestion()");
    qOption2.setAttribute("onclick", "thirdQuestion()");
    qOption3.setAttribute("onclick", "thirdQuestion()");
    qOption4.setAttribute("onclick", "thirdQuestion()");
    

    qOption1.textContent = quizQuestions[0].answers[1];
    qOption2.textContent = quizQuestions[0].answers[2];
    qOption3.textContent = quizQuestions[0].answers[3];
    qOption4.textContent = quizQuestions[0].answers[4];

    quizArea.appendChild(qText);
    quizArea.appendChild(answerList);
    
    answerList.appendChild(qOption1);
    answerList.appendChild(qOption2);
    answerList.appendChild(qOption3);
    answerList.appendChild(qOption4);


    quizQuestions.shift();
}

function thirdQuestion() {

    clearArea();
    
    var qText = document.createElement("h2");
    qText.className = "question";
    qText.textContent = quizQuestions[0].question;
    
    var answerList = document.createElement("div")
    answerList.className ="answer-list"

    var qOption1 = document.createElement("button");
    var qOption2 = document.createElement("button");
    var qOption3 = document.createElement("button");
    var qOption4 = document.createElement("button");

    qOption1.className = "answer"
    qOption2.className = "answer"
    qOption3.className = "answer"
    qOption4.className = "answer"

    qOption1.id = "answer-button"
    qOption2.id = "answer-button"
    qOption3.id = "answer-button"
    qOption4.id = "answer-button"

    qOption1.setAttribute("data-valid", "incorrect")
    qOption2.setAttribute("data-valid", "correct")
    qOption3.setAttribute("data-valid", "incorrect")
    qOption4.setAttribute("data-valid", "incorrect")

    qOption1.setAttribute("onclick", "lastQuestion()");
    qOption2.setAttribute("onclick", "lastQuestion()");
    qOption3.setAttribute("onclick", "lastQuestion()");
    qOption4.setAttribute("onclick", "lastQuestion()");
    

    qOption1.textContent = quizQuestions[0].answers[1];
    qOption2.textContent = quizQuestions[0].answers[2];
    qOption3.textContent = quizQuestions[0].answers[3];
    qOption4.textContent = quizQuestions[0].answers[4];

    quizArea.appendChild(qText);
    quizArea.appendChild(answerList);
    
    answerList.appendChild(qOption1);
    answerList.appendChild(qOption2);
    answerList.appendChild(qOption3);
    answerList.appendChild(qOption4);


    quizQuestions.shift();

}

function lastQuestion() {
    clearArea();
    
    var qText = document.createElement("h2");
    qText.className = "question";
    qText.textContent = quizQuestions[0].question;
    
    var answerList = document.createElement("div")
    answerList.className ="answer-list"

    var qOption1 = document.createElement("button");
    var qOption2 = document.createElement("button");
    var qOption3 = document.createElement("button");
    var qOption4 = document.createElement("button");

    qOption1.className = "answer"
    qOption2.className = "answer"
    qOption3.className = "answer"
    qOption4.className = "answer"

    qOption1.id = "answer-button"
    qOption2.id = "answer-button"
    qOption3.id = "answer-button"
    qOption4.id = "answer-button"

    qOption1.setAttribute("data-valid", "correct")
    qOption2.setAttribute("data-valid", "incorrect")
    qOption3.setAttribute("data-valid", "incorrect")
    qOption4.setAttribute("data-valid", "incorrect")

    qOption1.setAttribute("onclick", "enterHighscores()");
    qOption2.setAttribute("onclick", "enterHighscores()");
    qOption3.setAttribute("onclick", "enterHighscores()");
    qOption4.setAttribute("onclick", "enterHighscores()");
    

    qOption1.textContent = quizQuestions[0].answers[1];
    qOption2.textContent = quizQuestions[0].answers[2];
    qOption3.textContent = quizQuestions[0].answers[3];
    qOption4.textContent = quizQuestions[0].answers[4];

    quizArea.appendChild(qText);
    quizArea.appendChild(answerList);
    
    answerList.appendChild(qOption1);
    answerList.appendChild(qOption2);
    answerList.appendChild(qOption3);
    answerList.appendChild(qOption4);


    quizQuestions.shift();
}

function enterHighscores() {
    clearArea();
    

    var timeScore = document.createElement("h2");
    timeScore.textContent = "Your score is " + time + ". Enter initials below to save your score";
    quizArea.appendChild(timeScore);

    var nameInput = document.createElement("input");
    nameInput.textContent = "Enter initials."
    quizArea.appendChild(nameInput);
}


startButton.addEventListener("click", startQuiz);


// event.target?

    // var qHandler = (function() {
    //     var i = 0;

    //     return function() {

    //     }
    // })
    // for (i = 0; i < quizQuestions.length; i++) {
    //     console.log(quizQuestions[i].question);
    //     qText.textContent = quizQuestions[i].question;

    //     var answerList = document.createElement("div")
    //     answerList.className ="answer-list"

    //     qOption1.textContent = quizQuestions[i].answers[1];
    //     qOption2.textContent = quizQuestions[i].answers[2];
    //     qOption3.textContent = quizQuestions[i].answers[3];
    //     qOption4.textContent = quizQuestions[i].answers[4];
        

    // }
