let questions = [
    "What is the largest ocean on Earth?",
    "How many continents are there?",
    "What is the chemical symbol for water?",
    "Which planet is known as the closest to the Sun?",
    "Who painted the Mona Lisa?"
];

let answers = [
    "pacific",
    "7",
    "h2o",
    "mercury",
    "da vinci" 
];

let score = 0;

for (let i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i]);

    if (userAnswer) {
        userAnswer = userAnswer.toLowerCase().trim();
    } else {
        userAnswer = ""; 
    }

    if (userAnswer.includes(answers[i])) {
        alert("Correct!");
        score++;
    } else {
        alert("Wrong! Correct answer: " + answers[i]);
    }
}

alert("Final Score: " + score + " / " + questions.length);