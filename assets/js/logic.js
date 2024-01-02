const timer = document.querySelector("#time")
const box = document.querySelector("#box")
const startBtn = document.querySelector("#start")
const questionsBox = document.querySelector("#questions")
const startScrn = document.querySelector("#start-screen")
const finalScore = document.querySelector("#final-score")
const checkBtn = document.querySelector("#check")
const resultBtn = document.querySelector("#results")
const nextBtn = document.querySelector("#next")
const endBox = document.querySelector("#end-screen")
const submit = document.querySelector("#submit")
const highscores = document.querySelector("#highscores");


let scores ;

const playerInput = document.querySelector("#initials")


let options = [
option1 = document.querySelector("#option1"),
option2 = document.querySelector("#option2"),
option3 = document.querySelector("#option3"),
option4 = document.querySelector("#option4")
]

let round = 0
let order = [0,1,2,3]

let correctBtn
let score = 0
let complete = false
let timeLeft = 5;

function countdown() {
    
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    let timeInterval = setInterval(function () {
    
    if (timeLeft > 1) {
        
        timer.textContent = timeLeft + ' seconds remaining';
        
        timeLeft--;
    } else if (timeLeft === 1) {
        
        timer.textContent = timeLeft + ' second remaining';
        timeLeft--;
    } 
    else if(timeLeft === 0){
        
        clearInterval(timeInterval);

        endBox.children[0].textContent = "Times Up!"
        finalScore.textContent = `Your final score is ${score}`
        endBox.setAttribute("class", "container-fluid py-5 start")
        questionsBox.setAttribute("class", "container-fluid py-5 hide")
    }
    else{
        endBox.setAttribute("class", "container-fluid py-5 start")
        questionsBox.setAttribute("class", "container-fluid py-5 hide")
    }
    }, 1000);
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}

function mapQA(){
    box.setAttribute("class", "p-5 m-4 bg-body-secondary rounded-3")
    options[0].setAttribute("class", "btn btn-primary btn-lg m-1 col-4")
    options[1].setAttribute("class", "btn btn-primary btn-lg m-1 col-4")
    options[2].setAttribute("class", "btn btn-primary btn-lg m-1 col-4")
    options[3].setAttribute("class", "btn btn-primary btn-lg m-1 col-4")

    shuffle(order)

    questionTitle.textContent = `Question ${round + 1}: ` + questions[round].question
    
    options[order[0]].setAttribute("value", questions[round].correctAnswer)
    options[order[1]].setAttribute("value", questions[round].incorrectAnswer[0])
    options[order[2]].setAttribute("value", questions[round].incorrectAnswer[1])
    options[order[3]].setAttribute("value", questions[round].incorrectAnswer[2])
    
    options[0].addEventListener("click",  colour1, true);
    options[1].addEventListener("click",  colour2, true);
    options[2].addEventListener("click",  colour3, true);
    options[3].addEventListener("click",  colour4, true);
}


function colour1(){
    
    options[0].setAttribute("class", "btn btn-primary btn-lg m-1 col-4")
    options[1].setAttribute("class", "btn btn-primary btn-lg m-1 col-4")
    options[2].setAttribute("class", "btn btn-primary btn-lg m-1 col-4")
    options[3].setAttribute("class", "btn btn-primary btn-lg m-1 col-4")
    
    options[0].setAttribute("class", "btn btn-secondary btn-lg m-1 col-4")
    checkBtn.setAttribute("class", "btn btn-primary btn-lg start")
};
function colour2(){
    options[0].setAttribute("class", "btn btn-primary btn-lg m-1 col-4")
    options[1].setAttribute("class", "btn btn-primary btn-lg m-1 col-4")
    options[2].setAttribute("class", "btn btn-primary btn-lg m-1 col-4")
    options[3].setAttribute("class", "btn btn-primary btn-lg m-1 col-4")
    
    options[1].setAttribute("class", "btn btn-secondary btn-lg m-1 col-4")
    checkBtn.setAttribute("class", "btn btn-primary btn-lg start")
};
function colour3(){
    options[0].setAttribute("class", "btn btn-primary btn-lg m-1 col-4")
    options[1].setAttribute("class", "btn btn-primary btn-lg m-1 col-4")
    options[2].setAttribute("class", "btn btn-primary btn-lg m-1 col-4")
    options[3].setAttribute("class", "btn btn-primary btn-lg m-1 col-4")
    
    options[2].setAttribute("class", "btn btn-secondary btn-lg m-1 col-4")
    checkBtn.setAttribute("class", "btn btn-primary btn-lg start")
};
function colour4(){
    options[0].setAttribute("class", "btn btn-primary btn-lg m-1 col-4")
    options[1].setAttribute("class", "btn btn-primary btn-lg m-1 col-4")
    options[2].setAttribute("class", "btn btn-primary btn-lg m-1 col-4")
    options[3].setAttribute("class", "btn btn-primary btn-lg m-1 col-4")
    
    options[3].setAttribute("class", "btn btn-secondary btn-lg m-1 col-4")
    checkBtn.setAttribute("class", "btn btn-primary btn-lg start")
};

        startBtn.addEventListener("click", function() {
            
            startScrn.setAttribute("class", "container-fluid py-5 hide")
            questionsBox.setAttribute("class", "container-fluid py-5 start")
            mapQA() 
            countdown()
            round++
            
        });



    checkBtn.addEventListener("click", function() {
        options[0].removeEventListener("click",  colour1, true);
        options[1].removeEventListener("click",  colour2, true);
        options[2].removeEventListener("click",  colour3, true);
        options[3].removeEventListener("click",  colour4, true);
        if(options[order[0]].getAttribute("class") == "btn btn-secondary btn-lg m-1 col-4"){
            
            box.setAttribute( "class", "p-5 m-4 bg-success-subtle rounded-3")
            options[order[0]].setAttribute("class", "btn btn-success btn-lg m-1 col-4")
            questionTitle.textContent = `Correct!`
            score++
        }
        else{
            box.setAttribute( "class", "p-5 m-4 bg-danger-subtle rounded-3")
            options[order[0]].setAttribute("class", "btn btn-danger btn-lg m-1 col-4")
            questionTitle.textContent = `Incorrect!`
            timeLeft = timeLeft - 10
        }
        checkBtn.setAttribute("class", "btn btn-primary btn-lg hide")
        if(round >= questions.length){
            resultBtn.setAttribute("class", "btn col-3 btn-primary btn-lg start")
            nextBtn.setAttribute("class", "btn col-3 btn-primary btn-lg hide")
        }
        else{
            
        
            nextBtn.setAttribute("class", "btn col-3 btn-primary btn-lg start")
        }
    });

    nextBtn.addEventListener("click", function() {
        
        if(round < questions.length){  
            mapQA() 
            checkBtn.setAttribute("class", "btn btn-primary btn-lg start")
            nextBtn.setAttribute("class", "btn col-3 btn-primary btn-lg hide")  
            round++
            
        }
    });
    resultBtn.addEventListener("click", function(){
        timeLeft = -1
        finalScore.textContent = `Your final score is ${score}`
        endBox.setAttribute("class", "container-fluid py-5 start")
        questionsBox.setAttribute("class", "container-fluid py-5 hide")
    });



scoreInfo = submit.addEventListener("click", function(){
    
    if(playerInput === ""){
        finalScore.textContent = `Enter your initials`
    }
    let initials = playerInput.value.trim()

        let scoreInfo = {
            initials: initials,
            score: score
        };

        
        return scoreInfo
    
});


