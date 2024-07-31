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
    },
    {
        question: "Welches Element hat das chemische Symbol 'Au'?",
        answers: [
            { text: "Silber", correct: false },
            { text: "Gold", correct: true },
            { text: "Kupfer", correct: false },
            { text: "Eisen", correct: false }
        ],
        image: null
    },
    {
        question: "Welches Jahr endete der Zweite Weltkrieg?",
        answers: [
            { text: "1943", correct: false },
            { text: "1944", correct: false },
            { text: "1945", correct: true },
            { text: "1946", correct: false }
        ],
        image: null
    },
    {
        question: "Wie heißt der Autor von 'Die Reise zum Mittelpunkt der Erde'?",
        answers: [
            { text: "Jules Verne", correct: true },
            { text: "H.G. Wells", correct: false },
            { text: "Mark Twain", correct: false },
            { text: "Isaac Asimov", correct: false }
        ],
        image: null
    },
    {
        question: "Welches Land hat die meisten Nachbarländer?",
        answers: [
            { text: "Russland", correct: false },
            { text: "China", correct: true },
            { text: "USA", correct: false },
            { text: "Brasilien", correct: false }
        ],
        image: null
    },
    {
        question: "Welcher Planet ist bekannt für seine Ringe?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Saturn", correct: true },
            { text: "Uranus", correct: false },
            { text: "Neptun", correct: false }
        ],
        image: null
    },
    {
        question: "Welches Tier ist das Symbol von Australien?",
        answers: [
            { text: "Koala", correct: false },
            { text: "Känguru", correct: true },
            { text: "Wombat", correct: false },
            { text: "Emu", correct: false }
        ],
        image: null
    },
    {
        question: "Was ist die Hauptstadt von Kanada?",
        answers: [
            { text: "Toronto", correct: false },
            { text: "Vancouver", correct: false },
            { text: "Montreal", correct: false },
            { text: "Ottawa", correct: true }
        ],
        image: null
    },
    {
        question: "Wie viele Kontinente gibt es auf der Erde?",
        answers: [
            { text: "5", correct: false },
            { text: "6", correct: false },
            { text: "7", correct: true },
            { text: "8", correct: false }
        ],
        image: null
    },
    {
        question: "Welches Land hat die größte Bevölkerung?",
        answers: [
            { text: "Indien", correct: false },
            { text: "USA", correct: false },
            { text: "China", correct: true },
            { text: "Brasilien", correct: false }
        ],
        image: null
    },
    {
        question: "Welcher Künstler malte die Mona Lisa?",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Claude Monet", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Pablo Picasso", correct: false }
        ],
        image: null
    },
    {
        question: "In welchem Jahr wurde die Berliner Mauer gebaut?",
        answers: [
            { text: "1959", correct: false },
            { text: "1961", correct: true },
            { text: "1963", correct: false },
            { text: "1965", correct: false }
        ],
        image: null
    },
    {
        question: "Was ist die Hauptsprache in Brasilien?",
        answers: [
            { text: "Spanisch", correct: false },
            { text: "Portugiesisch", correct: true },
            { text: "Französisch", correct: false },
            { text: "Englisch", correct: false }
        ],
        image: null
    },
    {
        question: "Wie heißt der größte Ozean der Welt?",
        answers: [
            { text: "Atlantischer Ozean", correct: false },
            { text: "Indischer Ozean", correct: false },
            { text: "Arktischer Ozean", correct: false },
            { text: "Pazifischer Ozean", correct: true }
        ],
        image: null
    },
    {
        question: "Wer entdeckte Amerika?",
        answers: [
            { text: "Ferdinand Magellan", correct: false },
            { text: "Christoph Kolumbus", correct: true },
            { text: "Vasco da Gama", correct: false },
            { text: "Hernán Cortés", correct: false }
        ],
        image: null
    },
    {
        question: "Welches ist das am häufigsten vorkommende Gas in der Erdatmosphäre?",
        answers: [
            { text: "Sauerstoff", correct: false },
            { text: "Stickstoff", correct: true },
            { text: "Kohlendioxid", correct: false },
            { text: "Argon", correct: false }
        ],
        image: null
    },
    {
        question: "Wie heißt der berühmte Detektiv von Arthur Conan Doyle?",
        answers: [
            { text: "Hercule Poirot", correct: false },
            { text: "Sherlock Holmes", correct: true },
            { text: "Philip Marlowe", correct: false },
            { text: "Sam Spade", correct: false }
        ],
        image: null
    },
    {
        question: "Welche Farbe hat der Himmel normalerweise bei klarem Wetter?",
        answers: [
            { text: "Rot", correct: false },
            { text: "Blau", correct: true },
            { text: "Grün", correct: false },
            { text: "Gelb", correct: false }
        ],
        image: null
    },
    {
        question: "Was ist die Hauptzutat in Guacamole?",
        answers: [
            { text: "Tomaten", correct: false },
            { text: "Avocado", correct: true },
            { text: "Paprika", correct: false },
            { text: "Zwiebeln", correct: false }
        ],
        image: null
    },
    {
        question: "Wie viele Bundesländer hat Deutschland?",
        answers: [
            { text: "14", correct: false },
            { text: "16", correct: true },
            { text: "12", correct: false },
            { text: "10", correct: false }
        ],
        image: null
    },
    {
        question: "Welcher Sänger ist bekannt als 'The King of Pop'?",
        answers: [
            { text: "Elvis Presley", correct: false },
            { text: "Michael Jackson", correct: true },
            { text: "Prince", correct: false },
            { text: "Freddie Mercury", correct: false }
        ],
        image: null
    },
    {
        question: "Was ist der Hauptbestandteil von Stahl?",
        answers: [
            { text: "Kohlenstoff", correct: true },
            { text: "Silizium", correct: false },
            { text: "Aluminium", correct: false },
            { text: "Eisen", correct: false }
        ],
        image: null
    },
    {
        question: "Wie nennt man das wissenschaftliche Studium von Pflanzen?",
        answers: [
            { text: "Zoologie", correct: false },
            { text: "Botanik", correct: true },
            { text: "Astronomie", correct: false },
            { text: "Geologie", correct: false }
        ],
        image: null
    },
    {
        question: "Welcher Kontinent ist der kleinste?",
        answers: [
            { text: "Afrika", correct: false },
            { text: "Asien", correct: false },
            { text: "Europa", correct: true },
            { text: "Ozeanien", correct: false }
        ],
        image: null
    },
    {
        question: "Wer schrieb 'Der alte Mann und das Meer'?",
        answers: [
            { text: "Ernest Hemingway", correct: true },
            { text: "John Steinbeck", correct: false },
            { text: "F. Scott Fitzgerald", correct: false },
            { text: "William Faulkner", correct: false }
        ],
        image: null
    },
    {
        question: "Welcher Planet ist der vierte von der Sonne?",
        answers: [
            { text: "Merkur", correct: false },
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false }
        ],
        image: null
    },
    {
        question: "Welches Land hat die größte Insel der Welt?",
        answers: [
            { text: "Kanada", correct: false },
            { text: "Grönland", correct: true },
            { text: "Australien", correct: false },
            { text: "Neuseeland", correct: false }
        ],
        image: null
    },
    {
        question: "Wer malte das berühmte Werk 'Die letzte Abendmahl'?",
        answers: [
            { text: "Raphael", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Michelangelo", correct: false },
            { text: "Titian", correct: false }
        ],
        image: null
    },
    {
        question: "Wie viele Tasten hat ein Standard-Klavier?",
        answers: [
            { text: "76", correct: false },
            { text: "88", correct: true },
            { text: "92", correct: false },
            { text: "84", correct: false }
        ],
        image: null
    },
    {
        question: "Welches chemische Element hat das Symbol 'Na'?",
        answers: [
            { text: "Neon", correct: false },
            { text: "Natrium", correct: true },
            { text: "Nickel", correct: false },
            { text: "Nobelium", correct: false }
        ],
        image: null
    },
    {
        question: "Welcher Körperteil ist für das Hören verantwortlich?",
        answers: [
            { text: "Auge", correct: false },
            { text: "Nase", correct: false },
            { text: "Ohr", correct: true },
            { text: "Mund", correct: false }
        ],
        image: null
    },
    {
        question: "Wie heißt der höchste Wasserfall der Welt?",
        answers: [
            { text: "Niagarafälle", correct: false },
            { text: "Victoriafälle", correct: false },
            { text: "Angel Falls", correct: true },
            { text: "Iguazú-Fälle", correct: false }
        ],
        image: null
    },
    {
        question: "Welche Farbe entsteht durch Mischen von Blau und Gelb?",
        answers: [
            { text: "Grün", correct: true },
            { text: "Orange", correct: false },
            { text: "Lila", correct: false },
            { text: "Braun", correct: false }
        ],
        image: null
    },
    {
        question: "Wie viele Beine hat ein Insekt?",
        answers: [
            { text: "6", correct: true },
            { text: "8", correct: false },
            { text: "4", correct: false },
            { text: "10", correct: false }
        ],
        image: null
    },
    {
        question: "Was ist der Name des größten lebenden Landraubtieres?",
        answers: [
            { text: "Löwe", correct: false },
            { text: "Tiger", correct: false },
            { text: "Bär", correct: true },
            { text: "Wolf", correct: false }
        ],
        image: null
    },
    {
        question: "Welcher Stern ist der nächste zur Erde?",
        answers: [
            { text: "Sirius", correct: false },
            { text: "Alpha Centauri", correct: false },
            { text: "Proxima Centauri", correct: true },
            { text: "Betelgeuse", correct: false }
        ],
        image: null
    },
    {
        question: "In welchem Land befindet sich die Pyramide von Gizeh?",
        answers: [
            { text: "Ägypten", correct: true },
            { text: "Mexiko", correct: false },
            { text: "China", correct: false },
            { text: "Peru", correct: false }
        ],
        image: null
    },
    {
        question: "Wie heißt der längste Fluss der Welt?",
        answers: [
            { text: "Amazonas", correct: true },
            { text: "Nil", correct: false },
            { text: "Jangtse", correct: false },
            { text: "Mississippi", correct: false }
        ],
        image: null
    },
    {
        question: "Welche Substanz verleiht den Pflanzen ihre grüne Farbe?",
        answers: [
            { text: "Karotin", correct: false },
            { text: "Chlorophyll", correct: true },
            { text: "Anthocyanin", correct: false },
            { text: "Xanthophyll", correct: false }
        ],
        image: null
    },
    {
        question: "Was ist die größte Stadt der Welt nach Bevölkerung?",
        answers: [
            { text: "New York", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Shanghai", correct: false },
            { text: "Delhi", correct: false }
        ],
        image: null
    },
    {
        question: "Welches Land ist bekannt für die Herstellung von Uhren?",
        answers: [
            { text: "Schweiz", correct: true },
            { text: "Italien", correct: false },
            { text: "Japan", correct: false },
            { text: "Frankreich", correct: false }
        ],
        image: null
    },
    {
        question: "Wie viele Planeten hat unser Sonnensystem?",
        answers: [
            { text: "8", correct: true },
            { text: "9", correct: false },
            { text: "7", correct: false },
            { text: "10", correct: false }
        ],
        image: null
    },
    {
        question: "Welche Pflanze ist für ihre heilenden Eigenschaften bekannt und wird oft bei Sonnenbrand verwendet?",
        answers: [
            { text: "Aloe Vera", correct: true },
            { text: "Kamille", correct: false },
            { text: "Lavendel", correct: false },
            { text: "Pfefferminze", correct: false }
        ],
        image: null
    },
    {
        question: "Welcher Wissenschaftler formulierte die Relativitätstheorie?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Niels Bohr", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Galileo Galilei", correct: false }
        ],
        image: null
    },
    {
        question: "Was ist die kleinste Einheit des Lebens?",
        answers: [
            { text: "Organ", correct: false },
            { text: "Zelle", correct: true },
            { text: "Gewebe", correct: false },
            { text: "Organismus", correct: false }
        ],
        image: null
    },
    {
        question: "Welcher Planeten ist für seine extreme Neigung der Rotationsachse bekannt?",
        answers: [
            { text: "Jupiter", correct: false },
            { text: "Uranus", correct: true },
            { text: "Saturn", correct: false },
            { text: "Neptun", correct: false }
        ],
        image: null
    },
    {
        question: "Wie nennt man die Bewegung der Erde um die Sonne?",
        answers: [
            { text: "Rotation", correct: false },
            { text: "Revolution", correct: true },
            { text: "Translation", correct: false },
            { text: "Pendeln", correct: false }
        ],
        image: null
    },
    {
        question: "Welche Farbe hat der Blutfleck eines Asters?",
        answers: [
            { text: "Blau", correct: false },
            { text: "Rot", correct: true },
            { text: "Grün", correct: false },
            { text: "Gelb", correct: false }
        ],
        image: null
    },
    {
        question: "Wer ist der berühmte Physiker, der die Gesetze der Bewegung formulierte?",
        answers: [
            { text: "Galileo Galilei", correct: false },
            { text: "Isaac Newton", correct: true },
            { text: "Albert Einstein", correct: false },
            { text: "Niels Bohr", correct: false }
        ],
        image: null
    },
    {
        question: "Welcher Kontinent hat die meisten Länder?",
        answers: [
            { text: "Afrika", correct: true },
            { text: "Asien", correct: false },
            { text: "Europa", correct: false },
            { text: "Südamerika", correct: false }
        ],
        image: null
    },
    {
        question: "Wie heißt der berühmte griechische Philosoph, der die Schule der Akademie gründete?",
        answers: [
            { text: "Aristoteles", correct: false },
            { text: "Platon", correct: true },
            { text: "Sokrates", correct: false },
            { text: "Pythagoras", correct: false }
        ],
        image: null
    },
    {
        question: "Welches Mineral ist der Hauptbestandteil von Quarz?",
        answers: [
            { text: "Feldspat", correct: false },
            { text: "Bauxit", correct: false },
            { text: "Siliziumdioxid", correct: true },
            { text: "Gips", correct: false }
        ],
        image: null
    },
    {
        question: "Wie nennt man die Zeit, in der ein Jahr in der Wissenschaft gemessen wird?",
        answers: [
            { text: "Kalenderjahr", correct: false },
            { text: "Sonnenjahr", correct: true },
            { text: "Lichtjahr", correct: false },
            { text: "Schaltjahr", correct: false }
        ],
        image: null
    },
    {
        question: "Welches chemische Element hat die Ordnungszahl 1?",
        answers: [
            { text: "Helium", correct: false },
            { text: "Wasserstoff", correct: true },
            { text: "Lithium", correct: false },
            { text: "Kohlenstoff", correct: false }
        ],
        image: null
    },
    {
        question: "Was ist der Name der Hauptfigur in der 'Harry Potter'-Serie?",
        answers: [
            { text: "Hermione Granger", correct: false },
            { text: "Ron Weasley", correct: false },
            { text: "Harry Potter", correct: true },
            { text: "Albus Dumbledore", correct: false }
        ],
        image: null
    },
    {
        question: "Welcher Vogel kann rückwärts fliegen?",
        answers: [
            { text: "Adler", correct: false },
            { text: "Schwan", correct: false },
            { text: "Kolibri", correct: true },
            { text: "Kranich", correct: false }
        ],
        image: null
    },
    {
        question: "Wie nennt man die Wissenschaft des Studiums der Insekten?",
        answers: [
            { text: "Entomologie", correct: true },
            { text: "Ornithologie", correct: false },
            { text: "Herpetologie", correct: false },
            { text: "Ichthyologie", correct: false }
        ],
        image: null
    },
    {
        question: "In welchem Jahr wurde die erste Mondlandung durchgeführt?",
        answers: [
            { text: "1965", correct: false },
            { text: "1967", correct: false },
            { text: "1969", correct: true },
            { text: "1971", correct: false }
        ],
        image: null
    },
    {
        question: "Was ist die Hauptstadt von Australien?",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Melbourne", correct: false },
            { text: "Canberra", correct: true },
            { text: "Brisbane", correct: false }
        ],
        image: null
    },
    {
        question: "Welches Land ist bekannt für seine Fjorde?",
        answers: [
            { text: "Norwegen", correct: true },
            { text: "Schweden", correct: false },
            { text: "Island", correct: false },
            { text: "Schweiz", correct: false }
        ],
        image: null
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
        buttonText = 'Zurück zum Start';
        buttonOnClick = () => {
            window.parent.postMessage('quizFailed', '*');
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
