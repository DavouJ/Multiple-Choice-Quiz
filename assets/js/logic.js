const startBtn = document.querySelector("#start")
const questions = document.querySelector("#questions")
const startScrn = document.querySelector("#start-screen")

start.addEventListener("click", function() {
    startScrn.setAttribute("class", "container-fluid py-5 hide")
    questions.setAttribute("class", "container-fluid py-5 start")
});