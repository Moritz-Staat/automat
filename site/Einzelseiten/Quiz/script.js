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
        image: "everest.jpg"
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

    // Fortschrittsanzeige aktualisieren
    updateProgressBar();
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
        showResults();
    }
}

function showResults() {
    const questionContainer = document.getElementById('question-container');
    const answerButtonsElement = document.getElementById('answer-buttons');
    const questionImage = document.getElementById('question-image');
    const nextButton = document.getElementById('next-button');
    const questionText = document.getElementById('question-text');

    questionContainer.innerHTML = '';
    answerButtonsElement.innerHTML = '';
    nextButton.style.display = 'none';

    const score = (correctAnswers / shuffledQuestions.length) * 100;
    questionText.innerText = `Dein Ergebnis: ${correctAnswers} von ${shuffledQuestions.length} (${score}%)`;

    let imageUrl, buttonText, buttonOnClick, resultText;

    if (correctAnswers >= 9) {
        imageUrl = 'traumjob.jpg';
        resultText = "WOW, vielleicht solltest du dich als Trainer bewerben!";
        buttonText = 'Preis abholen';
        buttonOnClick = () => {
            window.parent.postMessage('prizeCollected', '*');
        };
    } else if (correctAnswers >= 7) {
        imageUrl = 'traumjob.jpg';
        resultText = "Du scheinst dein Zeug zu können, wie wäre es mit einer Stelle bei uns?";
        buttonText = 'Preis abholen';
        buttonOnClick = () => {
            window.parent.postMessage('prizeCollected', '*');
        };
    } else if (correctAnswers >= 4) {
        imageUrl = 'traumjob.jpg';
        resultText = "Schon nicht schlecht, wie wärs mit einer Auffrischung deines Wissens?";
        buttonText = 'Zurück zum Start';
        buttonOnClick = () => {
            window.parent.postMessage('quizFailed', '*');
        };
    } else {
        imageUrl = 'traumjob.jpg';
        resultText = "Da musst du wohl nochmal zu unseren Schulungen";
        buttonText = 'Zurück zum Start';
        buttonOnClick = () => {
            window.parent.postMessage('quizFailed', '*');
        };
    }

    if (imageUrl) {
        const resultImage = document.createElement('img');
        resultImage.src = imageUrl;
        resultImage.id = 'result-image';
        questionContainer.appendChild(resultImage);
    }

    const resultTextElement = document.createElement('div');
    resultTextElement.id = 'result-text';
    resultTextElement.innerText = resultText;
    questionContainer.appendChild(resultTextElement);

    const resultButton = document.createElement('button');
    resultButton.innerText = buttonText;
    resultButton.classList.add('btn');
    resultButton.addEventListener('click', buttonOnClick);
    questionContainer.appendChild(resultButton);
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

function doPost(param, url) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url + "?param=" + param, true);
    xhr.send();
}
