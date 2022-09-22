//Create start button
var startButton = document.querySelector(".start-btn");
var startScreen = document.querySelector(".start")
var Q = 0


// var interval = setInterval(function() {
//     document.getElementById("count").innerHTML=count;
//     count--;
//     if (count === 0){
//         clearInterval(interval);
//         alert("You're out of time!");
//     }
// }, 1000);
var questions = [
    {
        text: "Question 1",
        choices: ["a1", "a2", "a3", "a4"],
        correct: "a1"
    },
    {
        text: "Question 2",
        choices: ["a1", "a2", "a3", "a4"],
        correct: "a1"
    },
    {
        text: "Question 3",
        choices: ["a1", "a2", "a3", "a4"],
        correct: "a1"
    },
    {
        text: "Question 4",
        choices: ["a1", "a2", "a3", "a4"],
        correct: "a1"
    },
    {
        text: "Question 5",
        choices: ["a1", "a2", "a3", "a4"],
        correct: "a1"
    }

]
//Create start game function
function startGame() {
    //hide start button
    startScreen.classList.add("hide")
    //Shoq quiz container
    document.querySelector(".quiz").classList.remove("hide")
    var count = 60;
    var interval = setInterval(function() {
    document.getElementById("count").innerHTML=count;
    count--;
    if (count === 0){
        clearInterval(interval);
        alert("You're out of time!");
    }
}, 1000);
    //Start timer(skip for now)
    //Display first question
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
        //if wrong,reduce time

    }
    else {
        //If correct, add to score
    }
    Q++
    buildQuestionCard()
}

//Create question array
//Display first question
//Add multiple choice buttons
//Find out what button they clicked
//Check and see if it matches correct answer
//If wrong, reduce time
//If correct, add to score
//When out of questions, end game

startButton.addEventListener("click", startGame)
startButton.addEventListener("click", count)