let score = 0;
let currentQuestion = 0;

const questionsArray = [
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: ["*", "&", "$", "="],
        answer: "="
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["<js>", "<javascript>", "<scripting>", "<script>"],
        answer: "<script>"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js?'",
        answers: ["<script href='xxx.js>", "<script src='xxx.js'>", "<script='xxx.jx;>", "<script name='xxx.js'>"],
        answer: "<script src='xxx.js'>"
    },
    {
        question: "Commonly used data types DO NOT include:",
        answers: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: ["onclick", "onchange", "onmouseover", "onmouseclick"],
        answer: "onclick"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: ["if i == 5 then", "if i = 5 then", "if(i == 5)", "if i = 5"],
        answer: "if(i == 5)"
    },
    {
        question: "How do you create a function in JavaScript",
        answers: ["function = myFunction()", "function myFunction()", "function:myFunction()", "createMyFunction()"],
        answer: "function myFunction()"
    },
    {
        question: "How do you call a function named myFunction?",
        answers: ["call myFunction()", "call function myFunction()", "myFunction()", "call myFunction"],
        answer: "myFunctions()"
    },
    {
        question: "To see if two variables are equal in an if / else statement you would use ____.",
        answers: ["=", "==", "'equals'", "!="],
        answer: "=="
    },
    {
        question: "The first index of an array is ____.",
        answers: ["0", "1", "8", "any"],
        answer: "0"
    },
    {
        question: "How do you add a comment in a JavaScript?",
        answers: ["//This is a comment", "<!--This is a comment-->", "'This is a comment", "* This is a comment *"],
        answer: "//This is a comment"
    },
];

let timer;
let timeLeft = 0;
function start() {
    timeLeft = 120;
    document.getElementById('timeLeft').innerHTML = timeLeft;
    timer = setInterval(function() {
        timeLeft--;
        document.getElementById('timeLeft').innerHTML = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
    next();
}
const startBtn = document.querySelector('#quizStart');
startBtn.addEventListener('click', startGame)
function startGame(){
    const welcomeScreen = document.querySelector('#welcome-page');
    welcomeScreen.classList.add('hide');
    const gameDiv = document.querySelector('#quiz');
    gameDiv.classList.remove('hide');
    renderQuestion(questionsArray[currentQuestion]);
}
console.log('Welcome to the JavaScript quiz! Previous high score was: ', localStorage.getItem('quizHighScore'));
function renderQuestion(question){
    if(!question){
        endQuiz();
    }
    const scoreBoardElement = document.querySelector('#score');
    scoreBoardElement.textContent = score;
    const questionElement = document.querySelector('#question');
    questionElement.textContent = question.text;
    document.querySelector('#answers').innerHTML = '';
    question.answers.forEach(handleAnswer)
    function handleAnswer(answer){
        const listElement = document.createElement('li');
        listElement.textContent = answer;
        document.querySelector('#answers').appendChild(listElement);
        listElement.addEventListener('click', handleClick)
        function handleClick(event){
            const userChoice = event.target.textContent;
            const correctChoice = question.answers[question.answer];
            currentQuestion++;
            if(userChoice === correctChoice){
                score = score + 20;
                alert('Correct!');
                localStorage.setItem('quizHighScore', score);
                renderQuestion(questionArray[currentQuestion]);
            } else {
                alert('Incorrect!');
                timeLeft -= 15;
                console.log('Oh no! You lost! High score is: ',
                localStorage.getItem('quizHighScore'));
                renderQuestion(questionsArray[currentQuestion]);
            }
        }
    };
}
function endQuiz(){
    clearInterval(timer);
    const gameDiv = document.querySelector('#quiz');
    gameDiv.classList.add('hide');
    alert(`Game over!`);
}