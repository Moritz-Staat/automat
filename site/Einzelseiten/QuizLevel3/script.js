const questions = [
    {
        question: "Was bedeutet das Rangierfahrtsignal Sh 1?",
        answers: [
            { text: "Fahrt für Rangierfahrten", correct: false },
            { text: "Rangierfahrt erlaubt", correct: false },
            { text: "Fahrverbot aufgehoben", correct: true },
            { text: "Fahrt für Sperrfahrten", correct: false }
        ],
        image: "WuS_Logo_L.jpg"
    },
    {
        question: "Wie wird eine Aktiv-, Passivschaltung bei der GPE 'PZ 80' realisiert?",
        answers: [
            { text: "Durch Umpolen der Versorgungsspannung", correct: false },
            { text: "Diese Schaltung ist erst ab der GPE 90R möglich", correct: false },
            { text: "Durch Ein oder -Ausschalten eines Steuersignals", correct: true },
            { text: "Sowohl durch Umpolen der Versorgungsspannung, als auch durch Ein oder -Ausschalten eines Steuersignals", correct: false }
        ],
        image: "SunsetTracksCrop.jpg"
    },
    {
        question: "Wie hoch ist die restriktive Geschwindigkeit unter einer 1000 Hz-Beeinflussung mit der Zugart 'O'?",
        answers: [
            { text: "45 km/h", correct: true },
            { text: "10 km/h", correct: false },
            { text: "80 km/h", correct: false },
            { text: "85 km/h", correct: false }
        ],
        image: null
    },
    {
        question: "In EOW-Anlagen der neuen Generation ist der Weichenlagemelder zusätzlich mit blauen Signalen ausgerüstet. Was bedeuten die blauen Lichtkreise?",
        answers: [
            { text: "Weiche hat keine Endlage", correct: false },
            { text: "Weiche ist mit zusätzlichen Prüfer ausgestattet", correct: false },
            { text: "Weiche ist aufgefahren", correct: false },
            { text: "Gleisfreimeldung besetzt oder gestört", correct: true }
        ],
        image: "2009_-_EOW_EDOB.jpg"
    },
    {
        question: "Was bedeutet die Kennzahl 600 bei Eisenbahnsignalkabel?",
        answers: [
            { text: "Reduktionsfaktor von etwa 0,35 bei etwa 75 V/km", correct: false },
            { text: "Reduktionsfaktor von etwa 0,15 bei etwa 100 V/km", correct: false },
            { text: "Innenraumkabel", correct: false },
            { text: "Reduktionsfaktor von etwa 0,55 bei etwa 100 V/km", correct: true }
        ],
        image: "Kabel.jpg"
    },
    {
        question: "Wie lang kann ein FTGS 46 Abschnitt mit Hilfe der Kasdakierung maximal sein?",
        answers: [
            { text: "600 m", correct: false },
            { text: "1200 m", correct: true },
            { text: "1500 m", correct: false },
            { text: "700 m", correct: false }
        ],
        image: "J27_099_Bf_Twistesee,_Ausfsig_N1,_N2.jpg"
    },
    {
        question: "Wie groß darf das Klammerkopfspiel am Mittelverschluss sein?",
        answers: [
            { text: "0,5 - 1 mm", correct: false },
            { text: "0,5 - 2 mm", correct: false },
            { text: "1,5 - 2 mm", correct: true },
            { text: "1 - 1,5 mm", correct: false }
        ],
        image: "Doppelkreuzungsweichen_im_Rbf_München_Nord.jpg"
    },
    {
        question: "Welche Durchfahrrille muss an einer 190er Weiche, Schienenform S49 im abzweigenden Strang mindestens vorhanden sein?",
        answers: [
            { text: "58 mm", correct: false },
            { text: "64 mm", correct: true },
            { text: "50 mm", correct: false },
            { text: "62 mm", correct: false }
        ],
        image: "L03_190_Abzw_Anger,_Weiche_02.jpg"
    },
    {
        question: "Wie groß darf das Klammerkopfspiel am Spitzenverschluss sein?",
        answers: [
            { text: "1 - 1,5 mm", correct: false },
            { text: "0,5 - 1 mm", correct: true },
            { text: "0,75 - 1,25 mm", correct: false },
            { text: "0,25 - 0,75 mm", correct: false }
        ],
        image: "SunsetTracksCrop.jpg"
    },
    {
        question: "Mit welcher Sendefrequenz wird ein ZP 43 betrieben?",
        answers: [
            { text: "9,86 kHz", correct: false },
            { text: "4,3 kHz", correct: false },
            { text: "43 kHz", correct: true },
            { text: "430 kHz", correct: false }
        ],
        image: "Achszähler.jpg"
    },
    {
        question: "Welches ist für Neuanlagen ein wichtiges Planungsregelwerk?",
        answers: [
            { text: "819", correct: true },
            { text: "838", correct: false },
            { text: "417", correct: false },
            { text: "967", correct: false }
        ],
        image: "Planausschnitt.jpg"
    },
    {
        question: "Welches Regelwerk ist das wichtigste im Bezug auf Bahnübergänge?",
        answers: [
            { text: "843", correct: false },
            { text: "816", correct: false },
            { text: "815", correct: true },
            { text: "818", correct: false }
        ],
        image: "Bahnübergang-de.jpg"
    },
    {
        question: "Mit wieviel Nm wird der Zungenkloben der Einheitsbeistellvorrichtung angezogen?",
        answers: [
            { text: "250 Nm", correct: false },
            { text: "290 Nm", correct: true },
            { text: "450 Nm", correct: false },
            { text: "100 Nm", correct: false }
        ],
        image: "Baustelle_S-Bahn_Schönhauser_Allee,_Berlin_(7047921593).jpg"
    },
    {
        question: "Welche Bedeutung hat die 8 in dem Regelwerksbezeichnung 892?",
        answers: [
            { text: "Untergruppe", correct: false },
            { text: "Hauptgruppe", correct: true },
            { text: "Modulgruppe", correct: false },
            { text: "Nebengruppe", correct: false }
        ],
        image: "Dülmen,_Börnste,_Eisenbahnlinie_Dortmund-Enschede_--_2015_--_9918.jpg"
    },
    {
        question: "Mit welcher PZB Sicherung werden vorübergehende Langsamfahrstellen Kz 2 gesichert?",
        answers: [
            { text: "1000 Hz ständig wirksam an Lf1", correct: false },
            { text: "GÜ mit 1000 Hz an Lf1", correct: false },
            { text: "1000 Hz ständig wirksam an Lf1 und 150m vor Lf2 500 Hz ständig wirksam", correct: true },
            { text: "GÜ mit 2000 Hz 485m vor Lf2", correct: false }
        ],
        image: "J32_957_Bft_Leipzig_Nord,_Sig_ZS301,_N302.jpg"
    },
    {
        question: "Woran erkennt der Fahrdienstleiter, dass sein Felderblock zum nächsten Bahnhof in Grundstellung ist?",
        answers: [
            { text: "Farbscheibe rot", correct: false },
            { text: "Farbscheibe rot und weiß", correct: false },
            { text: "Farbscheibe weiß", correct: true },
            { text: "Farbscheibe gelb", correct: false }
        ],
        image: "Mechanisches_Stellwerk_Bahnhof_Fridingen_(2018).jpg"
    },
    {
        question: "In welchem Schriftstück wird der Aufbau und die Ansprüche an Eisenbahnsignalkabeln festgehalten?",
        answers: [
            { text: "416 technisches Lastenheft", correct: true },
            { text: "417 technisches Heft", correct: false },
            { text: "418 technisches Lastenheft", correct: false },
            { text: "419 technisches Kabelheft", correct: false }
        ],
        image: "Kabel.jpg"
    },
    {
        question: "Welche besondere Eigenschaft haben PZB-Kabel?",
        answers: [
            { text: "besonders hohe Betriebskapazität", correct: false },
            { text: "besonders geringe Betriebskapazität", correct: true },
            { text: "2,5mm Ader Durchmesser", correct: false },
            { text: "besonders geringe Betriebsinduktivität", correct: false }
        ],
        image: "Kabel.jpg"
    },
    {
        question: "Ab welcher Tiefe dürfen Kabelquerungen unter Gleisen durchgeführt werden?",
        answers: [
            { text: "ab 1,5 m unter SO", correct: false },
            { text: "ab 2 m unter SU", correct: false },
            { text: "ab 2,5 m unter SO", correct: false },
            { text: "ab 1 m unter SU", correct: true }
        ],
        image: "Kabel.jpg"
    },
    {
        question: "Wie ist die optimale Säuredichte bei 20 Grad Celsius bei Bleiakkumulatoren?",
        answers: [
            { text: "1,24", correct: true },
            { text: "1,22", correct: false },
            { text: "1,25", correct: false },
            { text: "1,23", correct: false }
        ],
        image: "Storage_battery_manual.jpg"
    },
    {
        question: "Unter welchem Punkt, in einer Betra, findet man den Anlagenverantwortlichen?",
        answers: [
            { text: "4.1", correct: false },
            { text: "1", correct: false },
            { text: "7", correct: true },
            { text: "2", correct: false }
        ],
        image: "Baustelle_S-Bahn_Schönhauser_Allee,_Berlin_(7047921593).jpg"
    },
    {
        question: "Ab wann müssen Einträge vom Arbeits- und Störungsbuch in den Nachweis der vorübergehenden Änderungen übertragen werden?",
        answers: [
            { text: "ab dem 8. Tag", correct: true },
            { text: "ab dem 3. Tag", correct: false },
            { text: "ab dem 5. Tag", correct: false },
            { text: "ab dem 2. Tag", correct: false }
        ],
        image: "Baustelle_S-Bahn_Schönhauser_Allee,_Berlin_(7047921593).jpg"
    },
    {
        question: "Was bedeutet das abgebildete Symbol im Verschlussplan eines Dr S 2-Stellwerkes?",
        answers: [
            { text: "Überwachter Schutzraum", correct: false },
            { text: "Haltfallverhinderter Abschnitt", correct: true },
            { text: "Abschnitt der beim Einstellen der Fahrstraße und nach Fahrstellung des Signals auf Freisein überwacht wird", correct: false },
            { text: "Bei eingestellter Fahrstraße ist die Erlaubnisabgabe verschlossen", correct: false }
        ],
        image: "Haltfallverhindernd.jpg"
    },
    {
        question: "Welche Sperre ist auf dem Bild abgebildet?",
        answers: [
            { text: "Endsperre", correct: false },
            { text: "Fahrstraßenfestlegesperre", correct: false },
            { text: "Anfangssperre", correct: true },
            { text: "Bahnhofswiederholungssperre", correct: false }
        ],
        image: "anfangssperre.jpg"
    },
    {
        question: "Wie schnell darf ein Triebfahrzeugführer bei Hl 3b fahren?",
        answers: [
            { text: "100 km/h und ab dem nächsten Signal Fahrplangeschwindigkeit", correct: true },
            { text: "40 km/h und ab dem nächsten Signal Fahrplangeschwindigkeit", correct: false },
            { text: "60 km/h und ab dem nächsten Signal Fahrplangeschwindigkeit", correct: false },
            { text: "Fahrplangeschwindigkeit und ab dem nächsten Signal 40 bzw. 60 km/h", correct: false }
        ],
        image: "Hl_3b_Signal.jpg"
    },
    {
        question: "Auf welche Kontaktweglänge wird der DMK mit magnetischen Einsätzen im Regelfall eingestellt?",
        answers: [
            { text: "148 mm", correct: false },
            { text: "160 mm", correct: false },
            { text: "165 mm", correct: true },
            { text: "200 mm", correct: false }
        ],
        image: "Schienenkontakt_Siemens_DMK.jpg"
    },
    {
        question: "Auf welche Kontaktweglänge wird der MK im Regelfall eingestellt?",
        answers: [
            { text: "148 mm", correct: true },
            { text: "160 mm", correct: false },
            { text: "165 mm", correct: false },
            { text: "199 mm", correct: false }
        ],
        image: "Schienenkontakt_Bahnübergang_Bauform_MK_(Magnetschienenkontakt)_in_Vörie.jpg"
    },
    {
        question: "Nach welcher Zeit muss ein Triebfahrzeug, nach einer 1000 Hz-Beeinflussung in der oberen Zugart, die Geschwindigkeit von 85 Km/h erreicht haben?",
        answers: [
            { text: "23 s", correct: true },
            { text: "32 s", correct: false },
            { text: "20 s", correct: false },
            { text: "45 s", correct: false }
        ],
        image: "J32_957_Bft_Leipzig_Nord,_Sig_ZS301,_N302.jpg"
    },
    {
        question: "In welcher Richtlinie finde ich grundsätzlichen und spezifische Informationen über Gleisstromkreise der Firma Siemens?",
        answers: [
            { text: "892.9205 A30", correct: true },
            { text: "892.9206 A12", correct: false },
            { text: "892.9204 A20", correct: false },
            { text: "892.9205 A40", correct: false }
        ],
        image: "146_271_Köln_Hauptbahnhof_2015-12-17-02.jpg"
    },
    {
        question: "Welche Relais sind in Grundstellung in der Motorzählwerksgruppe angezogen?",
        answers: [
            { text: "K1, K2, UZ1, Pk1", correct: false },
            { text: "Ü1, Ü2, Fz1/2, Fm", correct: true },
            { text: "P1, P2, R, Fz 2", correct: false },
            { text: "Ü1, Ü2, R, P1, P2", correct: false }
        ],
        image: "Elektromechanisches_Motorzählwerk_für_Achszähler_von_Siemens.jpg"
    },
    {
        question: "Mit welchen Frequenzen arbeitet die Fernübertragung bei der Motorzählwerksgruppe?",
        answers: [
            { text: "4125 Hz / 625 Hz", correct: true },
            { text: "1250 Hz / 2000 Hz", correct: false },
            { text: "2500 Hz / 5000 Hz", correct: false },
            { text: "1000 Hz / 4000 Hz", correct: false }
        ],
        image: "Elektromechanisches_Motorzählwerk_für_Achszähler_von_Siemens.jpg"
    },
    {
        question: "Mit was für einem Drehmoment wird der DEK 43 an der Schiene befestigt?",
        answers: [
            { text: "60 Nm", correct: false },
            { text: "32 Nm", correct: false },
            { text: "45 Nm", correct: true },
            { text: "35 Nm", correct: false }
        ],
        image: "Achszähler.jpg"
    },
    {
        question: "Bei dem GMP 900 handelt es sich um ein",
        answers: [
            { text: "Messgerät", correct: true },
            { text: "Signalmast", correct: false },
            { text: "Schaltkontakt", correct: false },
            { text: "Weichenantrieb", correct: false }
        ],
        image: "SunsetTracksCrop.jpg"
    },
    {
        question: "Wie lang ist die Messstrecke bei einer La mit der KZ 8 und einer eingestellten Zeit von 1,2 Sekunden bei der PZ 80",
        answers: [
            { text: "31,7 m", correct: false },
            { text: "45 m", correct: false },
            { text: "42,4 m", correct: true },
            { text: "26,5 m", correct: false }
        ],
        image: "J32_957_Bft_Leipzig_Nord,_Sig_ZS301,_N302.jpg"
    },
    {
        question: "Welchen Bohrlochdurchmesser benötige ich zum Anbringen von Schutzerden an der Schiene?",
        answers: [
            { text: "19 mm", correct: true },
            { text: "21 mm", correct: false },
            { text: "13 mm", correct: false },
            { text: "25 mm", correct: false }
        ],
        image: "Zwischensignal_FFM-Hoechst_Schnee.jpg"
    },
    {
        question: "Woran lässt sich eine Betriebserde im Gleis erkennen?",
        answers: [
            { text: "An dem Warnzeichen (Hochspannungspfeil)", correct: true },
            { text: "An dem lauten Geräuschen", correct: false },
            { text: "An dem Geruch nach verbranntem Fleisch", correct: false },
            { text: "An einem bunten Mast", correct: false }
        ],
        image: "Nahverkehrszüge_Frankfurt.jpg"
    },
    {
        question: "Wie nennt sich der Verbinder an der Flügelschiene?",
        answers: [
            { text: "Z-Verbinder", correct: true },
            { text: "Kurzschlussverbinder", correct: false },
            { text: "U-Verbinder", correct: false },
            { text: "Diagonalverbinder", correct: false }
        ],
        image: "146_271_Köln_Hauptbahnhof_2015-12-17-02.jpg"
    },
    {
        question: "Mit welchem Drehmoment werden die Anschlussseile von Gleisstromkreisen an einem GAG befestigt?",
        answers: [
            { text: "20 Nm", correct: true },
            { text: "35 Nm", correct: false },
            { text: "50 Nm", correct: false },
            { text: "65 Nm", correct: false }
        ],
        image: "146_271_Köln_Hauptbahnhof_2015-12-17-02.jpg"
    },
    {
        question: "Welche Schienenhöhe haben wir bei der UIC 60/ 60 E2 Schiene?",
        answers: [
            { text: "162 mm", correct: false },
            { text: "155 mm", correct: false },
            { text: "172 mm", correct: true },
            { text: "185 mm", correct: false }
        ],
        image: "SunsetTracksCrop.jpg"
    },
    {
        question: "Wie wird der Längswasserschutz einem Sternvierer verseiltem Kabel realisiert?",
        answers: [
            { text: "Mit der kapazitätsarmen Füllmasse", correct: false },
            { text: "Mit Quellgarn/ -flies", correct: true },
            { text: "Mittels der Murray-Methode", correct: false },
            { text: "Mittels dickerer Isolierung", correct: false }
        ],
        image: "Kabel.jpg"
    },
    {
        question: "Bei Eisenbahnsignalkabel gibt es die Reduktionsfaktoren:",
        answers: [
            { text: "400 / 500 / 600", correct: true },
            { text: "100/200/300", correct: false },
            { text: "A / B / C", correct: false },
            { text: "01.02.2003", correct: false }
        ],
        image: "Kabel.jpg"
    },
    {
        question: "Bis zu welcher Prüfspannung ist das Tischfeld 2000 in einem SpDrS60 Stellwerk ausgelegt?",
        answers: [
            { text: "20 V", correct: false },
            { text: "2 kV", correct: true },
            { text: "1 kV", correct: false },
            { text: "150 V", correct: false }
        ],
        image: "Spurplan_60_Stellwerk_im_Bahnhof_Steinhausen.jpg"
    },
    {
        question: "Wie viele Relais können maximal in einer Vollgruppe in einem SpDrS60 Stellwerk sein?",
        answers: [
            { text: "20", correct: false },
            { text: "15", correct: false },
            { text: "25", correct: false },
            { text: "35", correct: true }
        ],
        image: "Technik_Relaisstellwerk_Köln_Kf-4038.jpg"
    },
    {
        question: "Bei Signalen schaltet man von Tag und Nachtspannung, wie hoch sind beide Spannungen in einem Dr Sp S60-Stellwerk?",
        answers: [
            { text: "220 V / 145 V", correct: true },
            { text: "230 V / 115 V", correct: false },
            { text: "380 V / 220 V", correct: false },
            { text: "220 V / 60 V", correct: false }
        ],
        image: "146_271_Köln_Hauptbahnhof_2015-12-17-02.jpg"
    },
    {
        question: "Mit welcher Schrittfrequenz werden die Bitmuster in FTGS gesendet?",
        answers: [
            { text: "105,7 Hz", correct: false },
            { text: "117,1 Hz", correct: false },
            { text: "103,5 Hz", correct: true },
            { text: "100 Hz", correct: false }
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
        } else if (btn.innerText === getCorrectAnswerText()) {
            btn.style.backgroundColor = 'lightgreen';
        }
    });

    if (correct) correctAnswers++;

    // Nach 1,5 Sekunden zur nächsten Frage wechseln
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < shuffledQuestions.length) {
            showQuestion(shuffledQuestions[currentQuestionIndex]);
        } else {
            showResults();
        }
    }, 1500); // 1,5 Sekunden
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

    if (correctAnswers >= 9) {
        imageUrl = 'LOGO.svg';
        resultText = "Wow,das war spitze! Vielleicht solltest du dich als Trainer bei uns bewerben!";
        buttonText = 'Preis abholen';
        buttonOnClick = () => {
            window.parent.postMessage('prizeCollected', '*');
        };
    } else if (correctAnswers >= 7) {
        imageUrl = 'LOGO.svg';
        resultText = "Du scheinst dein Zeug zu können! Ein letztes Signal und du wirst zum Profi!";
        buttonText = 'Zurück zum Start';
        buttonOnClick = () => {
            window.parent.postMessage('quizFailed', '*');
        };
    } else if (correctAnswers >= 4) {
        imageUrl = 'LOGO.svg';
        resultText = "Ein paar Weichen musst du wohl noch richtig stellen!";
        buttonText = 'Zurück zum Start';
        buttonOnClick = () => {
            window.parent.postMessage('quizFailed', '*');
        };
    } else {
        imageUrl = 'LOGO.svg';
        resultText = "Das war wohl etwas schwer, better luck next time!";
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
