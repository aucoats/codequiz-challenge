var quizArea = document.querySelector("#quiz-area");
var startButton = document.querySelector("#start");
var viewHighscores = document.querySelector("#view-high-scores");
var time = 75;
var interval;

var quizQuestions = [
    {
        question: "Which HTML element holds our Javascript?",
        answers: {
            1: "<scripting>",
            2: "<script>",
            3: "<js>",
            4: "<javascript>",
        },
    },
    {
        question: "How would we select a <p> element with an ID of 'hello'?",
        answers: {
            1: "document.getElementByName('p')",
            2: "p.getID('name')",
            3: "document.getPbyId('hello')",
            4: "document.getElementById('hello')",
        },
    },
    {
        question: "How would you write 'Hello World' in an alert box?",
        answers: {
            1: "msg('Hello World');",
            2: "alert('Hello World');",
            3: "popup('Hello World');",
            4: "function () { msg('Hello World') };",
        },
    },
    {
        question: "The DOM allows Javascript to interact with HTMl as an _____.",
        answers: {
            1: "object",
            2: "array",
            3: "script",
            4: "function",
        },
    }
]

var playerNames = []
var pastScores = []


function quizInterval() {
    interval = setInterval(function() {
        
    document.getElementById('timer').textContent = "Time: " + time;
    time--;
    if (time === 0) {
        // clearInterval(interval);
        document.getElementById('timer').textContent = 'Done.';
        alert("You have no time left.");
        enterHighscores();
    }   
}, 1000);
}

function clearArea() {
    quizArea.innerHTML = "";
}

function startQuiz() {
    
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
    

    qOption1.setAttribute("onclick", "answerCheckOne()");
    qOption2.setAttribute("onclick", "answerCheckOne()");
    qOption3.setAttribute("onclick", "answerCheckOne()");
    qOption4.setAttribute("onclick", "answerCheckOne()");
    

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

function nextQuestion() {
    
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

    qOption1.setAttribute("onclick", "answerCheckTwo()");
    qOption2.setAttribute("onclick", "answerCheckTwo()");
    qOption3.setAttribute("onclick", "answerCheckTwo()");
    qOption4.setAttribute("onclick", "answerCheckTwo()");
    

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

    qOption1.setAttribute("onclick", "answerCheckThree()");
    qOption2.setAttribute("onclick", "answerCheckThree()");
    qOption3.setAttribute("onclick", "answerCheckThree()");
    qOption4.setAttribute("onclick", "answerCheckThree()");
    

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

    qOption1.setAttribute("onclick", "answerCheckFour()");
    qOption2.setAttribute("onclick", "answerCheckFour()");
    qOption3.setAttribute("onclick", "answerCheckFour()");
    qOption4.setAttribute("onclick", "answerCheckFour()");
    

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

function answerCheckOne() {
    if (event.target.getAttribute("data-valid") == "incorrect") {
        
        time = time - 10;

        var checkAlert = document.createElement("h3");
        checkAlert.textContent = "Wrong!"
        checkAlert.className = "alert"
        quizArea.appendChild(checkAlert);
    } else {
        var alert = document.createElement("h3");
        alert.textContent = "Correct!"
        alert.className = "alert"
        quizArea.appendChild(alert);
    };
    nextQuestion();
}

function answerCheckTwo() {
    if (event.target.getAttribute("data-valid") == "incorrect") {
        time = time - 10;

        var alert = document.createElement("h3");
        alert.textContent = "Wrong!"
        alert.className = "alert"
        quizArea.appendChild(alert);
    } else {
        var alert = document.createElement("h3");
        alert.textContent = "Correct!"
        alert.className = "alert"
        quizArea.appendChild(alert);
    };
    thirdQuestion();
}

function answerCheckThree() {
    if (event.target.getAttribute("data-valid") == "incorrect") {
        time = time - 10;
        var alert = document.createElement("h3");
        alert.textContent = "Wrong!"
        alert.className = "alert"
        quizArea.appendChild(alert);
    } else {
        var alert = document.createElement("h3");
        alert.textContent = "Correct!"
        alert.className = "alert"
        quizArea.appendChild(alert);
    };
    lastQuestion(); 
}

function answerCheckFour() {
    if (event.target.getAttribute("data-valid") == "incorrect") {
        time = time - 10;
        var alert = document.createElement("h3");
        alert.textContent = "Wrong!"
        alert.className = "alert"
        quizArea.appendChild(alert);
    } else {
        var alert = document.createElement("h3");
        alert.textContent = "Correct!"
        alert.className = "alert"
        quizArea.appendChild(alert);
    };
    clearInterval(interval);
    enterHighscores(interval);
}

function enterHighscores(interval) {
    clearInterval(interval);
    document.querySelector("#timer").textContent = "Done!"
    clearArea();
    var score = time;

    var timeScore = document.createElement("h2");
    timeScore.id = "high-score-alert"
    timeScore.textContent = "Your score is " + score + ". Enter initials below to save your score";
    quizArea.appendChild(timeScore);

    var nameInput = document.createElement("input");
    nameInput.placeholder = "Enter initials here."
    nameInput.id = "name-input"
    nameInput.className = "name-input"
    quizArea.appendChild(nameInput);

    var saveScore = document.createElement("button");
    saveScore.className = "submit-button"
    saveScore.id = "save-button"
    saveScore.textContent = "Save your score!"
    saveScore.setAttribute("type", "submit");
    saveScore.setAttribute("onclick", "dataHandler()");
    quizArea.appendChild(saveScore);
}

function savePlayer() {
    
    if (!localStorage.getItem("playerNames") && !localStorage.getItem("pastScores")) {
        var playerNames = [];
        var pastScores = [];
    } else 
    {
        var pastScores = localStorage.getItem("pastScores");
        var playerNames = localStorage.getItem("playerNames");

        playerNames = JSON.parse(playerNames);
        pastScores = JSON.parse(pastScores);
    }
    
    var score = time;

    nameInput = document.querySelector("#name-input");
    var initials = nameInput.value;

    playerNames.push(initials);
    pastScores.push(score);

    console.log(playerNames);
    console.log(pastScores);

    localStorage.setItem("playerNames", JSON.stringify(playerNames));
    localStorage.setItem("pastScores", JSON.stringify(pastScores));
}

function loadPlayers() {
    clearInterval(interval);
    clearArea();
    var scoreTitle = document.createElement("h2");
    scoreTitle.textContent = "High scores!"
    quizArea.appendChild(scoreTitle);

    var playerList = document.createElement("ul");
    playerList.className = "player-list"
    quizArea.appendChild(playerList);

    var playerNames = localStorage.getItem("playerNames");
    var pastScores = localStorage.getItem("pastScores");

    playerNames = JSON.parse(playerNames);
    pastScores = JSON.parse(pastScores);

    for (var i = 0; i < playerNames.length; i++) {
        createList(playerNames[i]); 
      }

   function createList() {
        var playerItem = document.createElement("li")
        playerItem.className = "player-list-item";
        playerItem.textContent = playerNames[i] + " - " + pastScores[i];  
        playerList.appendChild(playerItem);
        
   }

   var reloadButton = document.createElement("button");
   reloadButton.className = "reload-button"
   reloadButton.textContent = "Go Back"
   reloadButton.setAttribute("onclick", "goBack()")

   quizArea.appendChild(reloadButton);
   
}

function dataHandler() { 
    savePlayer();
    loadPlayers();
}

function goBack() {
    window.location.reload();
}

function startHandler() {
    quizInterval();
    startQuiz();
}


viewHighscores.addEventListener("click", loadPlayers);
startButton.addEventListener("click", startHandler);


