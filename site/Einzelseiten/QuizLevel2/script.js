let shuffledQuestions = [];
let currentQuestionIndex, correctAnswers;
let inactivityTimeout, blurTimeout;
let isBlurred = false;
let quizStartTime;

document.addEventListener('DOMContentLoaded', () => {
    startGame();
    resetInactivityTimer();
    setupInactivityListeners();
});

async function startGame() {
    shuffledQuestions = await fetchQuestions();
    shuffledQuestions = shuffledQuestions.sort(() => Math.random() - 0.5).slice(0, 5);
    currentQuestionIndex = 0;
    correctAnswers = 0;
    quizStartTime = new Date();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

const imageCache = {};

async function fetchImage(imageId) {
    if (imageCache[imageId]) {
        return imageCache[imageId]; // Aus Cache zurückgeben
    }
    try {
        const imageResponse = await fetch(`http://10.1.10.204:8100/api/collections/bilder/records/${imageId}`);
        if (!imageResponse.ok) {
            throw new Error(`Image fetch failed with status ${imageResponse.status}`);
        }
        const imageData = await imageResponse.json();
        imageCache[imageId] = imageData; // In den Cache speichern
        return imageData;
    } catch (error) {
        console.error(`Error fetching image ${imageId}:`, error);
        return null; // Alternative Rückgabe bei Fehler
    }
}

async function fetchQuestions() {
    console.time("fetchQuestions"); // Startzeit messen
    try {
        const response = await fetch('http://10.1.10.204:8100/api/collections/automat/records?filter=schwierigkeit="mittel"');
        if (!response.ok) {
            throw new Error(`Questions fetch failed with status ${response.status}`);
        }
        const data = await response.json();

        const questions = await Promise.all(data.items.map(async item => {
            let imageUrl = null;

            // Bild laden mit Cache-Unterstützung
            if (item.bildid) {
                const imageData = await fetchImage(item.bildid);
                imageUrl = imageData?.fragenbild
                    ? `http://10.1.10.204:8100/api/files/bilder/${item.bildid}/${imageData.fragenbild}`
                    : null;
            }

            // Antworten in einem Array speichern und nach dem Erstellen mischen
            const answers = [
                { text: item.antwort1, correct: true },
                { text: item.antwort2, correct: false },
                { text: item.antwort3, correct: false },
                { text: item.antwort4, correct: false }
            ].sort(() => Math.random() - 0.5); // Antworten mischen

            return {
                question: item.frage,
                image: imageUrl,
                answers: answers // gemischte Antworten
            };
        }));

        console.timeEnd("fetchQuestions"); // Endzeit messen
        return questions;
    } catch (error) {
        console.error("Error fetching questions:", error);
        return []; // Alternative Rückgabe bei Fehler
    }
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
        button.disabled = false; // Buttons aktivieren
        button.addEventListener('click', () => {
            selectAnswer(button, answer.correct);
            resetInactivityTimer();
        });
        answerButtonsElement.appendChild(button);
    });

    updateProgressBar();
}

function selectAnswer(button, correct) {
    const answerButtons = document.querySelectorAll('#answer-buttons .btn');
    answerButtons.forEach(btn => {
        btn.disabled = true; // Alle Buttons deaktivieren, damit keine doppelte Auswahl möglich ist
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

    if (correctAnswers === shuffledQuestions.length) {
        imageUrl = 'LOGO.svg';
        resultText = "Alles richtig, viel Spaß mit deinem Preis!";
        buttonText = 'Preis abholen';
        buttonOnClick = () => {
            window.parent.postMessage('prizeCollected', '*');
            window.parent.location.href = '../../Automat.html';
        };
    } else {
        imageUrl = 'LOGO.svg';
        resultText = "Da musst du wohl nochmal üben, versuchs nochmal!";
        buttonText = 'Zurück zum Start';
        buttonOnClick = () => {
            window.parent.postMessage('quizFailed', '*');
            window.parent.location.href = '../../Automat.html';
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

function blurPage() {
    document.body.classList.add('blur');
    document.getElementById('blur-overlay').style.display = 'flex';
    isBlurred = true;
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimeout);
    clearTimeout(blurTimeout);

    if (isBlurred) {
        document.body.classList.remove('blur');
        document.getElementById('blur-overlay').style.display = 'none';
        isBlurred = false;
    }

    blurTimeout = setTimeout(blurPage, 20000);
    inactivityTimeout = setTimeout(() => {
        window.top.location.href = '../../Automat.html';
    }, 30000);
}

function setupInactivityListeners() {
    document.addEventListener('click', resetInactivityTimer);
}
