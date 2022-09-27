//Create start button
var startButton = document.querySelector(".start-btn");
var startScreen = document.querySelector(".start");
var Q = 0;
var count = 59;
var interval;
var score = 0;
var timeLeft;
var highScores = JSON.parse(localStorage.getItem("highScores"))||[]

var questions = [
    {
        text: "Q1. What city wouuld you be in if you were standing on the Spanish Steps?",
        choices: ["Mexico City", "Madrid", "Rome", "Barcelona"],
        correct: "Rome"
    },
    {
        text: "Q2. What is the most common surname in the United States?",
        choices: ["Smith", "Johnson", "Williams", "Anderson"],
        correct: "Smith"
    },
    {
        text: "Q3. What company was originally named 'Cadabra?'",
        choices: ["Google", "Walmart", "Amazon", "eBay"],
        correct: "Amazon"
    },
    {
        text: "Q4. Which U.S. state is Area 51 in?",
        choices: ["New Mexico", "Nevada", "Colorado", "Wyoming"],
        correct: "Nevada"
    },
    {
        text: "Q5. Which president is on the $2 bill?",
        choices: ["Thomas Jefferson", "Alexander Hamilton", "James Madison", "John Adams"],
        correct: "Thomas Jefferson"
    }

]
function countDown() {
    document.getElementById("count").innerHTML = count;
    count--;
    if (count < 0) {
        count = 0
        document.getElementById("count").innerHTML = count
    };
}
function startGame() {
  
    startScreen.classList.add("hide")
    console.log(startScreen)
   


    interval = setInterval(countDown, 1000);
    document.querySelector(".quiz").classList.remove("hide")

    buildQuestionCard()
}
function buildQuestionCard() {
    var currentQuestion = questions[Q];
    var questionText = document.getElementById("question-text")
    questionText.textContent = currentQuestion.text;
    document.querySelector(".button-box").innerHTML = ""
    currentQuestion.choices.forEach(function (choice) {
        var button = document.createElement("button")
        button.textContent = choice;
        button.setAttribute("value", choice)
        button.onclick = evaluateAnswer


        document.querySelector(".button-box").append(button)
    })
}
function evaluateAnswer() {
    if (this.value !== questions[Q].correct) {
        
        count -= 10
        document.getElementById("count").innerHTML = count;
        
    }
    else {
        score++
    }
    Q++
    if (Q === questions.length) {
        endGame()
        
    }
    else {
        buildQuestionCard()
    }
}
function endGame(){
document.querySelector(".end").classList.remove("hide");
document.querySelector(".quiz").classList.add("hide");
 timeLeft = count;
clearInterval(interval);
document.getElementById("count").innerHTML="";
alert("You're out of time!");



}
function submitScore(){
    //get initials and score
   var initials = document.getElementById("initials").value;
   var scoreObject = {
    initials:initials,
    totalScore: timeLeft*score
   }
   highScores.push(scoreObject)
   localStorage.setItem("highScores", JSON.stringify(highScores))
}

startButton.addEventListener("click", startGame)
