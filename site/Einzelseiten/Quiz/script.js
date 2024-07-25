const questions = [
    {
        question: "Was ist die Hauptstadt von Frankreich?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Rom", correct: false }
        ],
        image: null
    },
    {
        question: "Welcher Planet ist der größte in unserem Sonnensystem?",
        answers: [
            { text: "Erde", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Mars", correct: false },
            { text: "Venus", correct: false }
        ],
        image: null
    },
    {
        question: "Was ist die chemische Formel für Wasser?",
        answers: [
            { text: "CO2", correct: false },
            { text: "H2O", correct: true },
            { text: "O2", correct: false },
            { text: "H2SO4", correct: false }
        ],
        image: null
    },
    // Füge weitere 47 Fragen hier hinzu ...
    {
        question: "Welcher Fluss fließt durch Paris?",
        answers: [
            { text: "Thames", correct: false },
            { text: "Seine", correct: true },
            { text: "Donau", correct: false },
            { text: "Rhein", correct: false }
        ],
        image: null
    },
    {
        question: "Was ist das größte Säugetier der Welt?",
        answers: [
            { text: "Elefant", correct: false },
            { text: "Blauwal", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Nashorn", correct: false }
        ],
        image: null
    },
    {
        question: "Was ist die Währung von Japan?",
        answers: [
            { text: "Yen", correct: true },
            { text: "Won", correct: false },
            { text: "Baht", correct: false },
            { text: "Rupiah", correct: false }
        ],
        image: null
    },
    {
        question: "Welcher Berg ist der höchste der Welt?",
        answers: [
            { text: "K2", correct: false },
            { text: "Mount Everest", correct: true },
            { text: "Kangchenjunga", correct: false },
            { text: "Lhotse", correct: false }
        ],
        image: "images/everest.jpg"
    }
];

let shuffledQuestions, currentQuestionIndex, correctAnswers;

document.addEventListener('DOMContentLoaded', () => {
    startGame();
});

function startGame() {
    shuffledQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 10);
    currentQuestionIndex = 0;
    correctAnswers = 0;
    document.getElementById('next-button').style.display = 'none';
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    const questionText = document.getElementById('question-text');
    const answerButtonsElement = document.getElementById('answer-buttons');
    const questionImage = document.getElementById('question-image');

    questionText.innerText = question.question;
    answerButtonsElement.innerHTML = '';

    if (question.image) {
        questionImage.src = question.image;
        questionImage.style.display = 'block';
    } else {
        questionImage.style.display = 'none';
    }

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(button, answer.correct));
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(button, correct) {
    const answerButtons = document.querySelectorAll('#answer-buttons .btn');
    answerButtons.forEach(btn => {
        btn.disabled = true;
        if (btn.innerText === button.innerText) {
            btn.style.backgroundColor = correct ? 'green' : 'red';
        }
    });
    if (correct) correctAnswers++;
    document.getElementById('next-button').style.display = 'block';
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
        document.getElementById('next-button').style.display = 'none';
    } else {
        if (correctAnswers / shuffledQuestions.length >= 0.8) {
            doPost('1', 'http://192.168.0.120/Register');
            alert('Glückwunsch! Sie haben das Quiz bestanden und das Relais wurde ausgelöst.');
        } else {
            alert('Quiz beendet. Leider haben Sie nicht genug richtige Antworten gegeben.');
        }
    }
}

function doPost(param, url) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url + "?param=" + param, true);
    xhr.send();
}
