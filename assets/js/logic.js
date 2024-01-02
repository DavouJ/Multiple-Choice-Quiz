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
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}

startBtn.addEventListener("click", function() {
    
    startScrn.setAttribute("class", "container-fluid py-5 hide")
    questionsBox.setAttribute("class", "container-fluid py-5 start")
    mapQA() 
    round++
    console.log(round)
});

function mapQA(){
    var order = [0,1,2,3]
    shuffle(order)

    questionTitle.textContent = `Question ${round + 1}: ` + questions[round].question
    console.log(order)
    options[order[0]].setAttribute("value", questions[round].correctAnswer)
    options[order[1]].setAttribute("value", questions[round].incorrectAnswer[0])
    options[order[2]].setAttribute("value", questions[round].incorrectAnswer[1])
    options[order[3]].setAttribute("value", questions[round].incorrectAnswer[2])
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
        checkBtn.setAttribute("class", "btn btn-primary btn-lg start")
        nextBtn.setAttribute("class", "btn col-3 btn-primary btn-lg hide")  
        round++
        console.log(round)
    }
});
resultBtn.addEventListener("click", function(){
    
    endBox.setAttribute("class", "container-fluid py-5 start")
    questionsBox.setAttribute("class", "container-fluid py-5 hide")
})


