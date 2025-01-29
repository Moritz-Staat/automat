let shuffledQuestions = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;
let inactivityTimeout, blurTimeout;
let isBlurred = false;

const BACKEND_URL = 'http://10.1.10.204:8100/api/collections/automat/records?filter=schwierigkeit="mittel"';
const IMAGE_BASE_URL = 'http://10.1.10.204:8100/api/files/bilder/';
const IMAGE_FETCH_URL = 'http://10.1.10.204:8100/api/collections/bilder/records/';

const imageCache = new Map();

document.addEventListener('DOMContentLoaded', () => {
    startGame();
    resetInactivityTimer();
    setupInactivityListeners();
});

async function startGame() {
    try {
        const questions = await fetchQuestions();
        shuffledQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 5);
        currentQuestionIndex = 0;
        correctAnswers = 0;
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    } catch (error) {
        console.error("Error starting game:", error);
    }
}

async function fetchImage(imageId) {
    if (imageCache.has(imageId)) {
        return imageCache.get(imageId);
    }
    try {
        const response = await fetch(`${IMAGE_FETCH_URL}${imageId}`);
        if (!response.ok) throw new Error(`Failed to fetch image: ${response.status}`);
        const imageData = await response.json();
        imageCache.set(imageId, imageData);
        return imageData;
    } catch (error) {
        console.error(`Error fetching image ${imageId}:`, error);
        return null;
    }
}

async function fetchQuestions() {
    try {
        const response = await fetch(BACKEND_URL);
        if (!response.ok) throw new Error(`Failed to fetch questions: ${response.status}`);
        const { items } = await response.json();
        return await Promise.all(
            items.map(async ({ frage, bildid, antwort1, antwort2, antwort3, antwort4 }) => {
                const image = bildid ? await fetchImage(bildid) : null;
                const answers = [
                    { text: antwort1, correct: true },
                    { text: antwort2, correct: false },
                    { text: antwort3, correct: false },
                    { text: antwort4, correct: false }
                ].sort(() => Math.random() - 0.5);
                return {
                    question: frage,
                    image: image?.fragenbild ? `${IMAGE_BASE_URL}${bildid}/${image.fragenbild}` : null,
                    answers,
                };
            })
        );
    } catch (error) {
        console.error("Error fetching questions:", error);
        return [];
    }
}

function showQuestion({ question, answers, image }) {
    const questionText = document.getElementById('question-text');
    const answerButtonsElement = document.getElementById('answer-buttons');
    const questionImage = document.getElementById('question-image');

    questionText.textContent = question;
    answerButtonsElement.innerHTML = '';

    answers.forEach(({ text, correct }) => {
        const button = document.createElement('button');
        button.textContent = text;
        button.classList.add('btn');
        button.onclick = () => {
            selectAnswer(button, correct);
            resetInactivityTimer();
        };
        answerButtonsElement.appendChild(button);
    });

    if (image) {
        questionImage.src = image;
        questionImage.style.display = 'block';
    } else {
        questionImage.style.display = 'none';
    }

    updateProgressBar();
}

function selectAnswer(button, isCorrect) {
    document.querySelectorAll('#answer-buttons .btn').forEach(btn => {
        btn.disabled = true;
        btn.style.backgroundColor = btn === button ? (isCorrect ? 'green' : 'red') : '';
    });

    if (isCorrect) correctAnswers++;

    setTimeout(() => {
        if (++currentQuestionIndex < shuffledQuestions.length) {
            showQuestion(shuffledQuestions[currentQuestionIndex]);
        } else {
            showResults();
        }
    }, 1500);
}

function showResults() {
    const container = document.getElementById('question-container');
    const score = ((correctAnswers / shuffledQuestions.length) * 100).toFixed(2);

    container.innerHTML = `
        <img id="result-image" src="LOGO.svg" alt="Result Image">
        <div id="result-text">${correctAnswers === shuffledQuestions.length
        ? "Alles richtig, viel Spaß mit deinem Preis!"
        : "Da musst du wohl nochmal üben, versuchs nochmal!"}</div>
        <button class="btn" id="result-button">
            ${correctAnswers === shuffledQuestions.length ? 'Preis abholen' : 'Zurück zum Start'}
        </button>`;

    document.getElementById('result-button').addEventListener('click', () => {
        window.parent.postMessage(correctAnswers === shuffledQuestions.length ? 'prizeCollected' : 'quizFailed', '*');
    });
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const progress = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;

    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${currentQuestionIndex + 1}/${shuffledQuestions.length}`;
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
    document.addEventListener('click', () => resetInactivityTimer());
}