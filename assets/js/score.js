const clearLi = document.querySelector("#clear")

//console.log(scores)

let scores = JSON.parse(localStorage.getItem("scores")) || []
scores.push(scoreInfo);



localStorage.setItem("scores", JSON.stringify(scores))
// const li = document.createElement("li");
// li.textContent = scores[i];
// console.log("test")
// highscores.appendChild(li);

console.log(scores)

window.location.href = "highscores.html"

const li = document.createElement("li");
li.textContent = "test";
console.log("test")
highscores.appendChild(li);

clearLi.addEventListener("click", function(){
    scores.length = 0
    console.log(scores)
})
