// Array of questions, options, and the correct answer
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Who is the author of 'Harry Potter'?",
        options: ["J.K. Rowling", "J.R.R. Tolkien", "George R.R. Martin", "Stephen King"],
        answer: "J.K. Rowling"
    },
     {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Mars", "Saturn"],
        answer: "Jupiter"
    },

    {
        question: "What is the largest mammal in the world?",
        options: ["elephant", "blue whale", "giraffe", "great white shark"],
        answer: "blue whale"
    },
     {
        question: "What is the chemical symbol for gold?",
        options: ["pb", "ag", "fe", "au"],
        answer: "au"
    },
     {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: "2"
    },
{
        question: "which country is known as the land of the raising sun?",
        options: ["china", "japan", "thailand", "South korea"],
        answer: "japan"
    },
     {
        question: "what is the largest organ in the human body?",
        options: ["heart", "skin", "liver", "brain"],
        answer: "skin"
    },
{
        question: "in which year did the titanic sink?",
        options: ["1905", "1920", "1912", "1935"],
        answer: "1912"
    },



     {
        question: "What year did the first man land on the moon?",
        options: ["1965", "1980", "1971", "1969"],
        answer: "1969"
    }
];

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');


function loadQuiz() {
    const quizHTML = quizData.map((item, index) => {
        return `
            <div class="quiz-item">
                <h3>${index + 1}. ${item.question}</h3>
                ${item.options.map(option => `
                    <label>
                        <input type="radio" name="question${index}" value="${option}">
                        ${option}
                    </label>
                `).join('')}
            </div>
        `;
    }).join('');

    quizContainer.innerHTML = quizHTML;
}

function calculateScore() {
    let score = 0;

    quizData.forEach((item, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === item.answer) {
            score++;
        }
    });

    return score;
}
submitButton.addEventListener('click', function() {
    const score = calculateScore();
    resultContainer.textContent = `Your score is ${score} out of ${quizData.length}.`;
});

loadQuiz();