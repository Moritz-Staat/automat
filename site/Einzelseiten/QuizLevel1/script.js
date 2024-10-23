let shuffledQuestions = [];
let currentQuestionIndex, correctAnswers;
let inactivityTimeout, blurTimeout; // Variablen für das Blur
let isBlurred = false; // Variable, um den Blur-Status zu tracken

document.addEventListener('DOMContentLoaded', () => {
    startGame();
    resetInactivityTimer(); // Timer bei Spielstart initialisieren
    setupInactivityListeners(); // Event-Listener für Inaktivität setzen
});

async function startGame() {
    shuffledQuestions = await fetchQuestions(); // Fragen von der Datenbank abrufen
    shuffledQuestions = shuffledQuestions.sort(() => Math.random() - 0.5).slice(0, 5); // Fragen mischen und auswählen
    currentQuestionIndex = 0;
    correctAnswers = 0;
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

async function fetchQuestions() {
    const response = await fetch('http://127.0.0.1:8090/api/collections/automat/records');
    const data = await response.json();
    return data.items.map(item => {
        const imageUrl = item.bildid ? `http://127.0.0.1:8090/api/collections/bilder/${item.bildid}` : null;
        return {
            question: item.frage,
            image: imageUrl, // Bild-URL zuweisen
            answers: [
                { text: item.antwort1, correct: true },
                { text: item.antwort2, correct: false },
                { text: item.antwort3, correct: false },
                { text: item.antwort4, correct: false }
            ]
        };
    });
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
        button.addEventListener('click', () => {
            selectAnswer(button, answer.correct);
            resetInactivityTimer(); // Timer nach Benutzerinteraktion zurücksetzen
        });
        answerButtonsElement.appendChild(button);
    });

    updateProgressBar();
}

function selectAnswer(button, correct) {
    const answerButtons = document.querySelectorAll('#answer-buttons .btn');
    answerButtons.forEach(btn => {
        btn.disabled = true;
        if (btn.innerText === button.innerText) {
            btn.style.backgroundColor = correct ? 'green' : 'red';
        } else if (btn.innerText === getCorrectAnswerText()) {
            btn.style.backgroundColor = 'lightgreen';
        }
    });

    if (correct) correctAnswers++;

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < shuffledQuestions.length) {
            showQuestion(shuffledQuestions[currentQuestionIndex]);
        } else {
            showResults();
        }
    }, 1500);
}

function getCorrectAnswerText() {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const correctAnswer = currentQuestion.answers.find(answer => answer.correct);
    return correctAnswer ? correctAnswer.text : '';
}

function showResults() {
    const questionContainer = document.getElementById('question-container');
    const answerButtonsElement = document.getElementById('answer-buttons');
    const questionImage = document.getElementById('question-image');
    const questionText = document.getElementById('question-text');

    questionContainer.innerHTML = '';
    answerButtonsElement.innerHTML = '';

    const score = (correctAnswers / shuffledQuestions.length) * 100;
    questionText.innerText = `Dein Ergebnis: ${correctAnswers} von ${shuffledQuestions.length} (${score}%)`;

    let imageUrl, buttonText, buttonOnClick, resultText;

    if (correctAnswers === 5) {
        imageUrl = 'LOGO.svg';
        resultText = "Alles richtig, viel Spaß mit deinem Preis!";
        buttonText = 'Preis abholen';
        buttonOnClick = () => {
            window.parent.postMessage('prizeCollected', '*');
        };
    } else {
        imageUrl = 'LOGO.svg';
        resultText = "Da musst du wohl nochmal üben, versuchs nochmal!";
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
    const progressText = document.getElementById('progress-text');
    const currentQuestionNumber = currentQuestionIndex + 1;
    const totalQuestions = shuffledQuestions.length;
    const progressPercentage = (currentQuestionNumber / totalQuestions) * 100;

    progressBar.style.width = `${progressPercentage}%`;
    progressText.innerText = `${currentQuestionNumber}/${totalQuestions}`;
}

// Funktion zum Blurren der Seite
function blurPage() {
    document.body.classList.add('blur');
    document.getElementById('blur-overlay').style.display = 'flex'; // Overlay sichtbar machen
    isBlurred = true;
}

// Funktion zum Zurücksetzen des Inaktivitäts-Timers
function resetInactivityTimer() {
    clearTimeout(inactivityTimeout); // Vorherigen Timeout löschen
    clearTimeout(blurTimeout); // Blur Timeout ebenfalls löschen

    if (isBlurred) {
        document.body.classList.remove('blur'); // Entferne den Blur-Effekt
        document.getElementById('blur-overlay').style.display = 'none'; // Overlay verstecken
        isBlurred = false;
    }

    // Blurre die Seite nach 20 Sekunden Inaktivität
    blurTimeout = setTimeout(blurPage, 20000);

    // Leitet nach 30 Sekunden im Hauptfenster auf Automat.html weiter
    inactivityTimeout = setTimeout(() => {
        window.top.location.href = '../../Automat.html';
    }, 30000);
}

// Setzt Event-Listener für **Mausklick-Aktivität**
function setupInactivityListeners() {
    document.addEventListener('click', resetInactivityTimer); // Nur Maus-Klicks
}
