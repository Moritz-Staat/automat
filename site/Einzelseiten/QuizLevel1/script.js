const questions = [
            {
            question: "Welchen Signalbegriff kann jedes Hauptsignal anzeigen?",
            answers: [
                { text: "Triebfahrzeug einschalten", correct: false },
                { text: "Halt", correct: true },
                { text: "Pause", correct: false },
                { text: "links abbiegen", correct: false }
            ],
            image: "Hp0_Licht.svg"
        },
        {
            question: "Wer kann eine ferngestellte Weiche bedienen?",
            answers: [
                { text: "Fahrdienstleiter", correct: true },
                { text: "Bezirksleiter", correct: false },
                { text: "Triebfahrzeugführer", correct: false },
                { text: "Zugbegleiter", correct: false }
            ],
            image: "SunsetTracksCrop.jpg"
        },
        {
            question: "Was bedeutet die Abkürzung LST?",
            answers: [
                { text: "Leichte, saubere Tätigkeiten", correct: false },
                { text: "Leit- und Sicherungstechnik", correct: true },
                { text: "Lesen-Sehen-Tasten", correct: false },
                { text: "Lampenstromteilung", correct: false }
            ],
            image: "Nahverkehrszüge_Frankfurt.jpg"
        },
        {
            question: "Welche Bedingung muss erfüllt sein, damit ein Abschnitt der mit Achszählern ausgestattet ist beim Fahrdienstleiter wieder als frei gemeldet wird?",
            answers: [
                { text: "Das Nachbargleis muss frei von Fahrzeugen sein", correct: false },
                { text: "Der Fahrdienstleiter muss durch hinsehen das Freisein des Abschnitts überprüfen und die Freimelde-Taste drücken", correct: false },
                { text: "Die Summe der eingezählten und ausgezählten Achsen muss bei 1 liegen", correct: false },
                { text: "Es müssen gleich viele Achsen ausgezählt worden sein, wie vorher eingezählt wurden", correct: true }
            ],
            image: "Achszähler.jpg"
        },
        {
            question: "Was muss der Triebfahrzeugführer an einer Pfeiftafel (eine rechteckige weiße Tafel mit schwarzem „P“) machen?",
            answers: [
                { text: "Die Leitstelle anrufen und sich \"pfeifend\" ankündigen", correct: false },
                { text: "Den Radiosender wechseln", correct: false },
                { text: "Mit dem Zug pfeifen, um sich vor unbeschrankten Bahnübergängen den Straßenverkehrsteilnehmern anzukündigen", correct: true },
                { text: "Kurz pfeifen, damit die Lok weiß, dass er noch da ist", correct: false }
            ],
            image: "2560px-Pfeiftafel.svg.png"
        },
        {
            question: "Was ist die älteste Stellwerksbauform?",
            answers: [
                { text: "Elektronisches Stellwerk", correct: false },
                { text: "Mechanisches Stellwerk", correct: true },
                { text: "Digitales Stellwerk", correct: false },
                { text: "Relaisstellwerk", correct: false }
            ],
            image: "Mechanisches_Stellwerk_Bahnhof_Fridingen_(2018).jpg"
        },
        {
            question: "Wieso gibt es Weichenheizungen?",
            answers: [
                { text: "Damit der Zug die Wärme für die Fahrgäste abgreifen kann", correct: false },
                { text: "Damit eine Weiche trotz Schnee und Eis umgestellt werden kann", correct: true },
                { text: "Damit sich das Metall der Weiche nicht zusammenzieht und es einen Schienenbruch gibt", correct: false },
                { text: "Damit die Personen, die an der Weiche arbeiten, sich im Winter die Hände wärmen können", correct: false }
            ],
            image: "Doppelkreuzungsweichen_im_Rbf_München_Nord.jpg"
        },
        {
            question: "Wie ist die Sicherheitsphilosophie bei der DB?",
            answers: [
                { text: "Hauptsache schnell", correct: false },
                { text: "Hauptsache sicher (Fail Safe)", correct: true },
                { text: "Hauptsache langsam", correct: false },
                { text: "Hauptsache leise", correct: false }
            ],
            image: "Nahverkehrszüge_Frankfurt.jpg"
        },
        {
            question: "Welche Aufgabe hat ein Abnahmeprüfer?",
            answers: [
                { text: "Die gesunde Ernährung der Mitarbeitenden zu kontrollieren", correct: false },
                { text: "Bei Neu- oder Umbauten zu prüfen, ob die Anlage nach der freigegebenen Planung unter Einhaltung der Richtlinien gebaut wurde", correct: true },
                { text: "Die Planprüfung durchzuführen", correct: false },
                { text: "Die komplizierten Bauteile anschließen", correct: false }
            ],
            image: "Baustelle_S-Bahn_Schönhauser_Allee,_Berlin_(7047921593).jpg"
        },
        {
            question: "Was kennzeichnet ein Andreaskreuz?",
            answers: [
                { text: "Das Fahrzeug welches von rechts kommt hat Vorfahrt", correct: false },
                { text: "Der Straßenverkehr hat auf Bahnübergängen grundsätzlich Vorrang vor dem Eisenbahnverkehr", correct: false },
                { text: "Das Fahrzeug welches von links kommt hat Vorfahrt", correct: false },
                { text: "Der Eisenbahnverkehr hat auf Bahnübergängen grundsätzlich Vorrang vor dem Straßenverkehr", correct: true }
            ],
            image: "Bahnübergang-de.jpg"
        },
        {
            question: "Wofür steht die Abkürzung LZB im Bereich der LST?",
            answers: [
                { text: "Linienförmige Zugbeeinflussung", correct: true },
                { text: "Leider zu betrunken", correct: false },
                { text: "Leitzentrale-Bus", correct: false },
                { text: "Lieder zur Beruhigung", correct: false }
            ],
            image: "ICE_4,_Führerstand_(2).jpg"
        },
        {
            question: "Warum nennt man den Technisch Berechtigten auch \"4.2er\"?",
            answers: [
                { text: "Weil er die sogenannte \"4.2er-Ausbildung\" (4 Wochen Theorie, 2 Wochen Praxis) gemacht hat", correct: false },
                { text: "Weil er bei 4 Stunden-Schichten meist 2 Stunden schläft", correct: false },
                { text: "Weil er unter dem Absatz 4.2 in der Betra benannt ist", correct: true },
                { text: "Weil es bei jeder Baumaßnahme mindesten 4 Technisch Berechtigte geben muss, wovon 2 anwesend sein müssen", correct: false }
            ],
            image: "Baustelle_S-Bahn_Schönhauser_Allee,_Berlin_(7047921593).jpg"
        },
        {
            question: "Was bedeutet es wenn bei einem Formsignal ein Signalflügel waagerecht nach rechts zeigt?",
            answers: [
                { text: "Hp 0 - Halt", correct: true },
                { text: "Hp 1 - Fahrt", correct: false },
                { text: "Hp 2 - Langsamfahrt", correct: false },
                { text: "Vr 2 - Langsamfahrt erwarten", correct: false }
            ],
            image: "Formsignale.jpg"
        },
        {
            question: "Welche Art der Gleisfreimeldung gibt es?",
            answers: [
                { text: "Horizontale-Gleisfreimeldung", correct: false },
                { text: "Vertikale-Gleisfreimeldung", correct: false },
                { text: "Punktförmige Gleisfreimeldung", correct: true },
                { text: "Kurvenförmige-Gleisfreimeldung", correct: false }
            ],
            image: "Achszähler.jpg"
        },
        {
            question: "Wie heißt ein großer Hersteller im Bereich der Leit- und Sicherungstechnik?",
            answers: [
                { text: "Milwaukee", correct: false },
                { text: "Siemens", correct: true },
                { text: "Schmidt", correct: false },
                { text: "Leitz", correct: false }
            ],
            image: "146_271_Köln_Hauptbahnhof_2015-12-17-02.jpg"
        },
        {
            question: "Wofür wird Eisenbahnsignalkabel verwendet?",
            answers: [
                { text: "Zum Verkabeln für Hauselektronik", correct: false },
                { text: "Zum Steuern von SPS-Systemen", correct: false },
                { text: "Zum Empfangen von TV-Programmen", correct: false },
                { text: "Zum Verkabeln von LST-Anlagen", correct: true }
            ],
            image: "Kabel.jpg"
        },
        {
            question: "Wofür steht die Abkürzung PZB im Bereich der LST?",
            answers: [
                { text: "Problemzone-Berlin", correct: false },
                { text: "Punktförmige Zugbeeinflussung", correct: true },
                { text: "Probe-Zug-Bereich", correct: false },
                { text: "Praktischer Zugbetrieb", correct: false }
            ],
            image: "J39_816_Bf_Sandersleben_(Anh),_von_Güsten.jpg"
        },
        {
            question: "Wofür steht die Abkürzung H/V im Bereich der LST?",
            answers: [
                { text: "Hauptverein", correct: false },
                { text: "Haupt-/ Vorsignal-System", correct: true },
                { text: "Haus-/ Vorgarten", correct: false },
                { text: "Hauptverein", correct: false }
            ],
            image: "Formsignale.jpg"
        },
        {
            question: "Das Zusammenspiel welcher beiden Komponenten sorgt für die Sicherheit im Bahnbetrieb?",
            answers: [
                { text: "Mensch und Roboter", correct: false },
                { text: "Roboter und KI", correct: false },
                { text: "Mensch und Technik", correct: true },
                { text: "Maus und Tastatur", correct: false }
            ],
            image: "Spurplan_60_Stellwerk_im_Bahnhof_Steinhausen.jpg"
        },
        {
            question: "Was ist ein Relais?",
            answers: [
                { text: "Ein Relais ist ein Schalter, der nicht von Hand, sondern mithilfe eines Elektromagneten aktiviert wird.", correct: true },
                { text: "Ein Verschluss zum Verschließen von Weichen", correct: false },
                { text: "Eine Bahnanlage der freien Strecke", correct: false },
                { text: "Eine Lehranlage im Bereich Berlin", correct: false }
            ],
            image: "Siemens_K50_Relais.jpg"
        },
        {
            question: "Wofür steht W&S Technik GmbH?",
            answers: [
                { text: "Wind & Solar Technik GmbH", correct: false },
                { text: "Weichen- und Signaltechnik GmbH", correct: true },
                { text: "Wind und Starkstrom Technik GmbH", correct: false },
                { text: "Wasser & Sonar Technik GmbH", correct: false }
            ],
            image: "WuS_Logo_L.jpg"
        },
        {
            question: "Wann wurde die Firma W&S Technik gegründet?",
            answers: [
                { text: "2017", correct: false },
                { text: "2010", correct: false },
                { text: "1995", correct: false },
                { text: "2007", correct: true }
            ],
            image: "WuS_Logo_L.jpg"
        },
        {
            question: "Bei welchem Licht darf ein Zug nicht fahren?",
            answers: [
                { text: "gelb", correct: false },
                { text: "rot", correct: true },
                { text: "grün", correct: false },
                { text: "blau", correct: false }
            ],
            image: "Hp0_Licht.svg"
        },
        {
            question: "Wofür gibt es Stellwerke?",
            answers: [
                { text: "Pausenraum", correct: false },
                { text: "Bahnbetrieb durchführen", correct: true },
                { text: "Freunde treffen", correct: false },
                { text: "Organisieren von Arbeitsstreiks", correct: false }
            ],
            image: "Mechanisches_Stellwerk_Bahnhof_Fridingen_(2018).jpg"
        },
        {
            question: "Wie heißt der Signalbegriff bei dem Züge nicht fahren dürfen?",
            answers: [
                { text: "Hp 8", correct: false },
                { text: "Hp 1", correct: false },
                { text: "Hp 0", correct: true },
                { text: "Hp 7", correct: false }
            ],
            image: "Hp0_Licht.svg"
        },
        {
            question: "Wie heißt der Signalbegriff bei dem Züge fahren dürfen?",
            answers: [
                { text: "Hp 1", correct: true },
                { text: "Hp 0", correct: false },
                { text: "Hp 4", correct: false },
                { text: "Hp 12", correct: false }
            ],
            image: "Zwischensignal_FFM-Hoechst_Schnee.jpg"
        },
        {
            question: "Wofür wird eine Weiche benötigt?",
            answers: [
                { text: "Zum Drehen des Zuges", correct: false },
                { text: "Zum Anheben des Zuges", correct: false },
                { text: "Um in ein anderes Gleis zu wechseln", correct: true },
                { text: "Um ein Zug entgleisen zu lassen", correct: false }
            ],
            image: "SunsetTracksCrop.jpg"
        },
        {
            question: "Auf welcher Messe befinden Sie sich gerade?",
            answers: [
                { text: "AnnoTrins", correct: false },
                { text: "InnoTrans", correct: true },
                { text: "Zug und Bahn-Messe", correct: false },
                { text: "Modellbahnmesse", correct: false }
            ],
            image: "Nahverkehrszüge_Frankfurt.jpg"
        },
        {
            question: "Wie viele Abteilungen hat die Firma W&S Technik?",
            answers: [
                { text: "17", correct: false },
                { text: "5", correct: true },
                { text: "2", correct: false },
                { text: "3", correct: false }
            ],
            image: "WuS_Logo_L.jpg"
        },
        {
            question: "Welche Spannung hat die Oberleitung bei der Bahn?",
            answers: [
                { text: "10 kV", correct: false },
                { text: "220 kV", correct: false },
                { text: "15.000 V", correct: true },
                { text: "10 kV", correct: false }
            ],
            image: "SunsetTracksCrop.jpg"
        },
        {
            question: "Auf wieviel Schienen fährt ein Zug?",
            answers: [
                { text: "1", correct: false },
                { text: "4", correct: false },
                { text: "2", correct: true },
                { text: "8", correct: false }
            ],
            image: "Nahverkehrszüge_Frankfurt.jpg"
        },
        {
            question: "Wann war die letzte InnoTrans?",
            answers: [
                { text: "vor 2 Jahren", correct: true },
                { text: "vor 4 Jahren", correct: false },
                { text: "vor 3 Jahren", correct: false },
                { text: "Das ist die erste InnoTrans", correct: false }
            ],
            image: "Doppelkreuzungsweichen_im_Rbf_München_Nord.jpg"
        },
        {
            question: "Wo findet die InnoTrans statt?",
            answers: [
                { text: "Frankfurt", correct: false },
                { text: "Berlin", correct: true },
                { text: "Stuttgart", correct: false },
                { text: "Castrop-Rauxel", correct: false }
            ],
            image: "Doppelkreuzungsweichen_im_Rbf_München_Nord.jpg"
        },
        {
            question: "Was ist die InnoTrans?",
            answers: [
                { text: "kulinarische Messe", correct: false },
                { text: "Fitnessmesse", correct: false },
                { text: "Fußballmesse", correct: false },
                { text: "Internationale Fachmesse für Verkehrstechnik", correct: true }
            ],
            image: "146_271_Köln_Hauptbahnhof_2015-12-17-02.jpg"
        },
        {
            question: "Wieviele Triebfahrzeugführer fahren i.d.R. ein Zug?",
            answers: [
                { text: "1", correct: true },
                { text: "4", correct: false },
                { text: "1,5", correct: false },
                { text: "6", correct: false }
            ],
            image: "ICE_4,_Führerstand_(2).jpg"
        },
        {
            question: "Ist es gefährlich auf einen Zug zu klettern?",
            answers: [
                { text: "JA, AUF JEDEN FALL", correct: true },
                { text: "Ach quatsch, da passiert nie was", correct: false },
                { text: "Nein, das ist eine neue Sportart", correct: false },
                { text: "vielleicht", correct: false }
            ],
            image: "SunsetTracksCrop.jpg"
        },
        {
            question: "Wofür steht die Abkürzung Fdl?",
            answers: [
                { text: "Fahrdienstleiter", correct: true },
                { text: "Fahrdrahtlenker", correct: false },
                { text: "Freie-Deutsche-Linkspartei", correct: false },
                { text: "Fahr-Doch-Langsamer", correct: false }
            ],
            image: "Spurplan_60_Stellwerk_im_Bahnhof_Steinhausen.jpg"
        },
        {
            question: "Wofür steht die Abkürzung ETCS?",
            answers: [
                { text: "European Telecommunication System", correct: false },
                { text: "European Train Control System", correct: true },
                { text: "Eisenbahntechnik Controll-System", correct: false },
                { text: "Einfaches Training für Communication-Skills", correct: false }
            ],
            image: "X_72633-34_ETCS_(European_Train_Control_System)A.jpg"
        },
        {
            question: "Wann wurde die Deutsche Bahn privatisiert?",
            answers: [
                { text: "2001", correct: false },
                { text: "1945", correct: false },
                { text: "1994", correct: true },
                { text: "1890", correct: false }
            ],
            image: "Nahverkehrszüge_Frankfurt.jpg"
        },
        {
            question: "In welche Abteilungen teilt sich die W&S Technik GmbH auf?",
            answers: [
                { text: "Technik / Consulting / Services / LWL", correct: true },
                { text: "Bahn / See", correct: false },
                { text: "Schotter / Schiene / Schwelle / Kleineisen", correct: false },
                { text: "Holz / Stein", correct: false }
            ],
            image: "WuS_Logo_L.jpg"
        },
        {
            question: "Welche Arbeiten im Bereich der LST übernimmt die Firma W&S Technik GmbH?",
            answers: [
                { text: "Nur Arbeiten an Weichen", correct: false },
                { text: "Nur Arbeiten an Signalen", correct: false },
                { text: "Nur Arbeiten an Stellwerken", correct: false },
                { text: "Alles, was der Bereich LST zu bieten hat!", correct: true }
            ],
            image: "WuS_Logo_L.jpg"
        },
        {
            question: "Wofür steht die Abkürzung DKW?",
            answers: [
                { text: "Doppelkraftwagen", correct: false },
                { text: "Direkte Kammrelaiswicklung", correct: false },
                { text: "Doppelte Kohlewagen", correct: false },
                { text: "Doppelte Kreuzungsweiche", correct: true }
            ],
            image: "Doppelkreuzungsweichen_im_Rbf_München_Nord.jpg"
        },
        {
            question: "Was bedeutet ein Geschwindigkeitsanzeiger mit der Kennziffer '10'?",
            answers: [
                { text: "Maximal 10 km/h zugelassen", correct: false },
                { text: "Maximal 100 km/h zugelassen", correct: true },
                { text: "Mindestgeschwindigkeit von 10 km/h ist einzuhalten", correct: false },
                { text: "Mit 10 km/h erwartet einem eine 'grüne Welle'", correct: false }
            ],
            image: "Zwischensignal_FFM-Hoechst_Schnee.jpg"
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
