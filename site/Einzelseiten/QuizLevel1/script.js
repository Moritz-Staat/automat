let shuffledQuestions = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;
let inactivityTimeout, blurTimeout;
let isBlurred = false;

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

const imageCache = new Map();

async function fetchImage(imageId) {
    if (imageCache.has(imageId)) {
        return imageCache.get(imageId);
    }
    try {
        const response = await fetch(`http://10.1.10.204:8100/api/collections/bilder/records/${imageId}`);
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
    console.time("fetchQuestions");
    try {
        const response = await fetch('http://10.1.10.204:8100/api/collections/automat/records?filter=schwierigkeit="leicht"');
        if (!response.ok) throw new Error(`Failed to fetch questions: ${response.status}`);
        const { items } = await response.json();
        const questions = await Promise.all(
            items.map(async ({ frage, bildid, antwort1, antwort2, antwort3, antwort4 }) => {
                const image = bildid ? await fetchImage(bildid) : null;
                const answers = [
                    { text: antwort1, correct: true },
                    { text: antwort2, correct: false },
                    { text: antwort3, correct: false },
                    { text: antwort4, correct: false },
                ].sort(() => Math.random() - 0.5);
                return {
                    question: frage,
                    image: image?.fragenbild
                        ? `http://10.1.10.204:8100/api/files/bilder/${bildid}/${image.fragenbild}`
                        : null,
                    answers,
                };
            })
        );
        console.timeEnd("fetchQuestions");
        return questions;
    } catch (error) {
        console.error("Error fetching questions:", error);
        console.timeEnd("fetchQuestions");
        return [];
    }
}

function showQuestion({ question, answers, image }) {
    const questionText = document.getElementById('question-text');
    const answerButtonsElement = document.getElementById('answer-buttons');
    const questionImage = document.getElementById('question-image');

    questionText.textContent = question;

    const fragment = document.createDocumentFragment();
    answers.forEach(({ text, correct }) => {
        const button = document.createElement('button');
        button.textContent = text;
        button.classList.add('btn');
        button.onclick = () => {
            selectAnswer(button, correct);
            resetInactivityTimer();
        };
        fragment.appendChild(button);
    });
    answerButtonsElement.replaceChildren(fragment);

    if (image) {
        questionImage.src = image;
        questionImage.style.display = 'block';
    } else {
        questionImage.style.display = 'none';
    }

    updateProgressBar();
}

function selectAnswer(button, isCorrect) {
    const buttons = document.querySelectorAll('#answer-buttons .btn');
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.style.backgroundColor =
            btn === button
                ? isCorrect
                    ? 'green'
                    : 'red'
                : btn.textContent === getCorrectAnswerText()
                    ? 'lightgreen'
                    : '';
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

function getCorrectAnswerText() {
    return shuffledQuestions[currentQuestionIndex]?.answers.find(a => a.correct)?.text || '';
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

    // Redirect to the parent page when the button is clicked
    document.getElementById('result-button').addEventListener('click', () => {
        window.top.location.href = '../../Automat.html'; // Redirect parent window
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
    document.addEventListener('click', debounce(resetInactivityTimer, 300));
}

// Helper: Debounce function to limit rapid-fire events
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
