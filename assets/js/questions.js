const questionTitle = document.querySelector("#question-title")

const questions = [
    {
    question: "What does CSS stand for?",
    correctAnswer: "Cascading Style Sheet",
    incorrectAnswer: ["Cascading Syntax Sheet", "Conditional Syntax Script", "Continual System Script"]
},
{
    question: "Which of the following are a HTML framework?",
    correctAnswer: "Tailwind",
    incorrectAnswer: ["Bootlace", "Javascript", "C#"]
},
{
    question: "Which three are the most commonly used together for web-development?",
    correctAnswer: "HTML, CSS & JavaScript",
    incorrectAnswer: ["Java, C++ & HTML ", "Bootstrap, Java, and CSS", "HTML, CSS & Java"]
},
{
    question: "What is an 'if' statement?",
    correctAnswer: "A conditional statement",
    incorrectAnswer: ["An iterative statement", "A switch case", "A method"]
},
{
    question: "What Git command is used to define a change?",
    correctAnswer: "git commit",
    incorrectAnswer: ["git add", "git clone", "git push"]
}]


function getQuestion(num){
    
    return questions[num].question;
}
