const startBtn = document.querySelector("#start")
const questionsBox = document.querySelector("#questions")
const startScrn = document.querySelector("#start-screen")
const checkBtn = document.querySelector("#check")
const resultBtn = document.querySelector("#results")
const nextBtn = document.querySelector("#next")
const endBox = document.querySelector("#end-screen")

let options = [
option1 = document.querySelector("#option1"),
option2 = document.querySelector("#option2"),
option3 = document.querySelector("#option3"),
option4 = document.querySelector("#option4")
]

let round = 0

let correctBtn

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

startBtn.addEventListener("click", function() {
    
    startScrn.setAttribute("class", "container-fluid py-5 hide")
    questionsBox.setAttribute("class", "container-fluid py-5 start")
    mapQA() 
    round++
    console.log(round)
});

function mapQA(){
    var order = []
    questionTitle.textContent = `Question ${round + 1}: ` + getQuestion(round)  
    options[getRandomInt(3)].setAttribute("value", questions[getRandomInt(round)].correctAnswer)
    
}

function checkAns()
{

}

checkBtn.addEventListener("click", function() {
    checkBtn.setAttribute("class", "btn btn-primary btn-lg hide")
    checkAns()
    nextBtn.setAttribute("class", "btn col-3 btn-primary btn-lg start")
});

nextBtn.addEventListener("click", function() {
    if(round < questions.length){  
        mapQA() 
        checkBtn.setAttribute("class", "btn btn-primary btn-lg hide")
        resultBtn.setAttribute("class", "btn col-3 btn-primary btn-lg start")  
        round++
        console.log(round)
    }
});
resultBtn.addEventListener("click", function(){
    
    endBox.setAttribute("class", "container-fluid py-5 start")
    questionsBox.setAttribute("class", "container-fluid py-5 hide")
})


