import PocketBase from 'pocketbase';
import fs from 'fs';

const pb = new PocketBase('http://10.1.10.147:8100');

// Beispiel-Daten für die Bilder (mit lokalen Pfaden)
const bilder = [
    {bildname: "Bild 1", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/1.jpg"},
    {bildname: "Bild 2", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/2.jpg"},
    {bildname: "146_271_Köln_Hauptbahnhof_2015-12-17-02.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/146_271_Köln_Hauptbahnhof_2015-12-17-02.jpg"},
    {bildname: "2009_-_EOW_EDOB.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/2009_-_EOW_EDOB.jpg"},
    {bildname: "2560px-Pfeiftafel.svg.png", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/2560px-Pfeiftafel.svg.png"},
    {bildname: "Achszähler.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/Achszähler.jpg"},
    {bildname: "anfangssperre.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/anfangssperre.jpg"},
    {bildname: "Bahnübergang-de.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/Bahnübergang-de.jpg"},
    {bildname: "Baustelle_S-Bahn_Schönhauser_Allee,_Berlin_(7047921593).jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/Baustelle_S-Bahn_Schönhauser_Allee,_Berlin_(7047921593).jpg"},
    {bildname: "Doppelkreuzungsweichen_im_Rbf_München_Nord.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/Doppelkreuzungsweichen_im_Rbf_München_Nord.jpg"},
    {bildname: "Dülmen,_Börnste,_Eisenbahnlinie_Dortmund-Enschede_--_2015_--_9918.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/Dülmen,_Börnste,_Eisenbahnlinie_Dortmund-Enschede_--_2015_--_9918.jpg"},
    {bildname: "Einfahrt_der_Dreiseenbahn_in_den_Bahnhof_Titisee.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/2.jpg"},{bildname: "Bild 1", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/Einfahrt_der_Dreiseenbahn_in_den_Bahnhof_Titisee.jpg"},
    {bildname: "Elektromechanisches_Motorzählwerk_für_Achszähler_von_Siemens.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/Elektromechanisches_Motorzählwerk_für_Achszähler_von_Siemens.jpg"},
    {bildname: "Elektronisches_Stellwerk_Köln-Betriebsbahnhof-3887.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/Elektronisches_Stellwerk_Köln-Betriebsbahnhof-3887.jpg"},
    {bildname: "Formsignale.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/Formsignale.jpg"},
    {bildname: "GPÜ_Ingolstadt.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/GPÜ_Ingolstadt.jpg"},
    {bildname: "Haltfallverhindernd.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/Haltfallverhindernd.jpg"},
    {bildname: "Hl_3b_Signal.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/Hl_3b_Signal.jpg"},
    {bildname: "Hp0_Licht.svg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/Hp0_Licht.svg"},
    {bildname: "ICE_4,_Führerstand_(2).jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/ICE_4,_Führerstand_(2).jpg"},
    {bildname: "J27_099_Bf_Twistesee,_Ausfsig_N1,_N2.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/J27_099_Bf_Twistesee,_Ausfsig_N1,_N2.jpg"},
    {bildname: "J32_957_Bft_Leipzig_Nord,_Sig_ZS301,_N302.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/J32_957_Bft_Leipzig_Nord,_Sig_ZS301,_N302.jpg"},
    {bildname: "J39_816_Bf_Sandersleben_(Anh),_von_Güsten.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/J39_816_Bf_Sandersleben_(Anh),_von_Güsten.jpg"},
    {bildname: "Kabel.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/Kabel.jpg"},
    {bildname: "Ks_Ks2+Zusatzlicht_(oben).svg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/Ks_Ks2+Zusatzlicht_(oben).svg"},
    {bildname: "Ks_Ks2+Zusatzlicht_(unten).svg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/Ks_Ks2+Zusatzlicht_(unten).svg"},
    {bildname: "Ks-Mehrabschnittssignal.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/Ks-Mehrabschnittssignal.jpg"},
    {bildname: "L03_190_Abzw_Anger,_Weiche_02.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/L03_190_Abzw_Anger,_Weiche_02.jpg"},
    {bildname: "LOGO.svg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/LOGO.svg"},
    {bildname: "Mechanisches_Stellwerk_Bahnhof_Fridingen_(2018).jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/Mechanisches_Stellwerk_Bahnhof_Fridingen_(2018).jpg"},
    {bildname: "Nahverkehrszüge_Frankfurt.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/Nahverkehrszüge_Frankfurt.jpg"},
    {bildname: "Planausschnitt.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/Planausschnitt.jpg"},
    {bildname: "S-Bahn_zwischen_Gesundbrunnen_und_Bornholmer_Straße_Berlin.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/S-Bahn_zwischen_Gesundbrunnen_und_Bornholmer_Straße_Berlin.jpg"},
    {bildname: "Schienenkontakt_Bahnübergang_Bauform_MK_(Magnetschienenkontakt)_in_Vörie.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/Schienenkontakt_Bahnübergang_Bauform_MK_(Magnetschienenkontakt)_in_Vörie.jpg"},
    {bildname: "Schienenkontakt_Siemens_DMK.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/Schienenkontakt_Siemens_DMK.jpg"},
    {bildname: "Siemens_K50_Relais.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/Siemens_K50_Relais.jpg"},
    {bildname: "Spurplan_60_Stellwerk_im_Bahnhof_Steinhausen.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/Spurplan_60_Stellwerk_im_Bahnhof_Steinhausen.jpg"},
    {bildname: "Storage_battery_manual.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/Storage_battery_manual.jpg"},
    {bildname: "SunsetTracksCrop.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/SunsetTracksCrop.jpg"},
    {bildname: "Technik_Relaisstellwerk_Köln_Kf-4038.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/Technik_Relaisstellwerk_Köln_Kf-4038.jpg"},
    {bildname: "Triebfahrzeugführer_IC-Steuerwagen.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/Triebfahrzeugführer_IC-Steuerwagen.jpg"},
    {bildname: "WuS_Logo_L.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/WuS_Logo_L.jpg"},
    {bildname: "X_72633-34_ETCS_(European_Train_Control_System)A.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/X_72633-34_ETCS_(European_Train_Control_System)A.jpg"},
    {bildname: "Zwischensignal_FFM-Hoechst_Schnee.jpg", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/Zwischensignal_FFM-Hoechst_Schnee.jpg"},
];

async function uploadBilder() {
    const bildIdMap = {};
    try {
        for (const bild of bilder) {
            const bildBuffer = fs.readFileSync(bild.bildpath);

            const bildFile = new File([bildBuffer], bild.bildname, {type: 'image/jpeg'});

            const bildRecord = await pb.collection('bilder').create({
                fragenbild: bildFile,
            });

            console.log('Bild erfolgreich hochgeladen:', bildRecord);
            bildIdMap[bild.bildname] = bildRecord.id;
        }
    } catch (error) {
        console.error('Fehler beim Hochladen der Bilder:', error);
    }
    return bildIdMap;
}

const fragenMitAntwortenUndBilder = [
    {
        frage: "Was ist die Hauptstadt von Frankreich?",
        antwort1: "Paris",
        antwort2: "London",
        antwort3: "Berlin",
        antwort4: "Madrid",
        bildname: "Bild 1", // Bildname für direkte Zuordnung
        bildid: null, // Platzhalter für Bild-ID
        schwierigkeit: "mittel"
    },
    {
        frage: "Was ist die Hauptstadt von Deutschland?",
        antwort1: "Berlin",
        antwort2: "Hamburg",
        antwort3: "München",
        antwort4: "Frankfurt",
        bildname: "Bild 2", // Bildname für direkte Zuordnung
        bildid: null, // Platzhalter für Bild-ID
        schwierigkeit: "leicht"
    },
    {
        frage: "Was ist die Hauptstadt von Italien?",
        antwort1: "Rom",
        antwort2: "Mailand",
        antwort3: "Venedig",
        antwort4: "Florenz",
        bildid: null, // Keine bildname-Referenz -> Frage ohne Bild
        schwierigkeit: "leicht"
    },
    {
        frage: "Welchen Signalbegriff kann jedes Hauptsignal anzeigen?",
        antwort1: "Halt",
        antwort2: "Triebfahrzeug einschalten",
        antwort3: "Pause",
        antwort4: "links abbiegen",
        bildname: "Hp0_Licht.svg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Wer kann eine ferngestellte Weiche bedienen?",
        antwort1: "Fahrdienstleiter",
        antwort2: "Bezirksleiter",
        antwort3: "Triebfahrzeugführer",
        antwort4: "Zugbegleiter",
        bildname: "SunsetTracksCrop.jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Was bedeutet die Abkürzung LST?",
        antwort1: "Leit- und Sicherungstechnik",
        antwort2: "Leichte, saubere Tätigkeiten",
        antwort3: "Lesen-Sehen-Tasten",
        antwort4: "Lampenstromteilung",
        bildname: "Nahverkehrszüge_Frankfurt.jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Welche Bedingung muss erfüllt sein, damit ein Abschnitt der mit Achszählern ausgestattet ist beim Fahrdienstleiter wieder als frei gemeldet wird?",
        antwort1: "Es müssen gleich viele Achsen ausgezählt worden sein, wie vorher eingezählt wurden",
        antwort2: "Das Nachbargleis muss frei von Fahrzeugen sein",
        antwort3: "Der Fahrdienstleiter muss durch hinsehen das Freisein des Abschnitts überprüfen und die Freimelde-Taste drücken",
        antwort4: "Die Summe der eingezählten und ausgezählten Achsen muss bei 1 liegen",
        bildname: "Achszähler.jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Was muss der Triebfahrzeugführer an einer Pfeiftafel (eine rechteckige weiße Tafel mit schwarzem „P“) machen?",
        antwort1: "Mit dem Zug pfeifen, um sich vor unbeschrankten Bahnübergängen den Straßenverkehrsteilnehmern anzukündigen",
        antwort2: "Den Radiosender wechseln",
        antwort3: "Kurz pfeifen, damit die Lok weiß, dass er noch da ist",
        antwort4: "Keine Antwort vorhanden",
        bildname: "2560px-Pfeiftafel.svg.png",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Was ist die älteste Stellwerksbauform?",
        antwort1: "Mechanisches Stellwerk",
        antwort2: "Elektronisches Stellwerk",
        antwort3: "Digitales Stellwerk",
        antwort4: "Relaisstellwerk",
        bildname: "Mechanisches_Stellwerk_Bahnhof_Fridingen_(2018).jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Wieso gibt es Weichenheizungen?",
        antwort1: "Damit eine Weiche trotz Schnee und Eis umgestellt werden kann",
        antwort2: "Damit der Zug die Wärme für die Fahrgäste abgreifen kann",
        antwort3: "Damit sich das Metall der Weiche nicht zusammenzieht und es einen Schienenbruch gibt",
        antwort4: "Damit die Personen, die an der Weiche arbeiten, sich im Winter die Hände wärmen können",
        bildname: "Doppelkreuzungsweichen_im_Rbf_München_Nord.jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Wie ist die Sicherheitsphilosophie bei der DB?",
        antwort1: "Hauptsache sicher (Fail Safe)",
        antwort2: "Hauptsache schnell",
        antwort3: "Hauptsache langsam",
        antwort4: "Hauptsache leise",
        bildname: "Nahverkehrszüge_Frankfurt.jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Welche Aufgabe hat ein Abnahmeprüfer?",
        antwort1: "Bei Neu- oder Umbauten zu prüfen, ob die Anlage nach der freigegebenen Planung unter Einhaltung der Richtlinien gebaut wurde",
        antwort2: "Die gesunde Ernährung der Mitarbeitenden zu kontrollieren",
        antwort3: "Die Planprüfung durchzuführen",
        antwort4: "Die komplizierten Bauteile anschließen",
        bildname: "Baustelle_S-Bahn_Schönhauser_Allee,_Berlin_(7047921593).jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Was kennzeichnet ein Andreaskreuz?",
        antwort1: "Der Eisenbahnverkehr hat auf Bahnübergängen grundsätzlich Vorrang vor dem Straßenverkehr",
        antwort2: "Das Fahrzeug welches von rechts kommt hat Vorfahrt",
        antwort3: "Der Straßenverkehr hat auf Bahnübergängen grundsätzlich Vorrang vor dem Eisenbahnverkehr",
        antwort4: "Das Fahrzeug welches von links kommt hat Vorfahrt",
        bildname: "Bahnübergang-de.jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Wofür steht die Abkürzung LZB im Bereich der LST?",
        antwort1: "Linienförmige Zugbeeinflussung",
        antwort2: "Leider zu betrunken",
        antwort3: "Leitzentrale-Bus",
        antwort4: "Lieder zur Beruhigung",
        bildname: "ICE_4,_Führerstand_(2).jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Warum nennt man den Technisch Berechtigten auch \\",
        antwort1: "Weil er unter dem Absatz 4.2 in der Betra benannt ist",
        antwort2: "Weil er bei 4 Stunden-Schichten meist 2 Stunden schläft",
        antwort3: "Weil es bei jeder Baumaßnahme mindesten 4 Technisch Berechtigte geben muss, wovon 2 anwesend sein müssen",
        antwort4: "Keine Antwort vorhanden",
        bildname: "Baustelle_S-Bahn_Schönhauser_Allee,_Berlin_(7047921593).jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Was bedeutet es wenn bei einem Formsignal ein Signalflügel waagerecht nach rechts zeigt?",
        antwort1: "Hp 0 - Halt",
        antwort2: "Hp 1 - Fahrt",
        antwort3: "Hp 2 - Langsamfahrt",
        antwort4: "Vr 2 - Langsamfahrt erwarten",
        bildname: "Formsignale.jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Welche Art der Gleisfreimeldung gibt es?",
        antwort1: "Punktförmige Gleisfreimeldung",
        antwort2: "Horizontale-Gleisfreimeldung",
        antwort3: "Vertikale-Gleisfreimeldung",
        antwort4: "Kurvenförmige-Gleisfreimeldung",
        bildname: "Achszähler.jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Wie heißt ein großer Hersteller im Bereich der Leit- und Sicherungstechnik?",
        antwort1: "Siemens",
        antwort2: "Milwaukee",
        antwort3: "Schmidt",
        antwort4: "Leitz",
        bildname: "146_271_Köln_Hauptbahnhof_2015-12-17-02.jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Wofür wird Eisenbahnsignalkabel verwendet?",
        antwort1: "Zum Verkabeln von LST-Anlagen",
        antwort2: "Zum Verkabeln für Hauselektronik",
        antwort3: "Zum Steuern von SPS-Systemen",
        antwort4: "Zum Empfangen von TV-Programmen",
        bildname: "Kabel.jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Wofür steht die Abkürzung PZB im Bereich der LST?",
        antwort1: "Punktförmige Zugbeeinflussung",
        antwort2: "Problemzone-Berlin",
        antwort3: "Probe-Zug-Bereich",
        antwort4: "Praktischer Zugbetrieb",
        bildname: "J39_816_Bf_Sandersleben_(Anh),_von_Güsten.jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Wofür steht die Abkürzung H/V im Bereich der LST?",
        antwort1: "Haupt-/ Vorsignal-System",
        antwort2: "Hauptverein",
        antwort3: "Haus-/ Vorgarten",
        antwort4: "Hauptverein",
        bildname: "Formsignale.jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Das Zusammenspiel welcher beiden Komponenten sorgt für die Sicherheit im Bahnbetrieb?",
        antwort1: "Mensch und Technik",
        antwort2: "Mensch und Roboter",
        antwort3: "Roboter und KI",
        antwort4: "Maus und Tastatur",
        bildname: "Spurplan_60_Stellwerk_im_Bahnhof_Steinhausen.jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Was ist ein Relais?",
        antwort1: "Ein Relais ist ein Schalter, der nicht von Hand, sondern mithilfe eines Elektromagneten aktiviert wird.",
        antwort2: "Ein Verschluss zum Verschließen von Weichen",
        antwort3: "Eine Bahnanlage der freien Strecke",
        antwort4: "Eine Lehranlage im Bereich Berlin",
        bildname: "Siemens_K50_Relais.jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Wofür steht W&S Technik GmbH?",
        antwort1: "Weichen- und Signaltechnik GmbH",
        antwort2: "Wind & Solar Technik GmbH",
        antwort3: "Wind und Starkstrom Technik GmbH",
        antwort4: "Wasser & Sonar Technik GmbH",
        bildname: "WuS_Logo_L.jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Wann wurde die Firma W&S Technik gegründet?",
        antwort1: "2007",
        antwort2: "2017",
        antwort3: "2010",
        antwort4: "1995",
        bildname: "WuS_Logo_L.jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Bei welchem Licht darf ein Zug nicht fahren?",
        antwort1: "rot",
        antwort2: "gelb",
        antwort3: "grün",
        antwort4: "blau",
        bildname: "Hp0_Licht.svg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Wofür gibt es Stellwerke?",
        antwort1: "Bahnbetrieb durchführen",
        antwort2: "Pausenraum",
        antwort3: "Freunde treffen",
        antwort4: "Organisieren von Arbeitsstreiks",
        bildname: "Mechanisches_Stellwerk_Bahnhof_Fridingen_(2018).jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Wie heißt der Signalbegriff bei dem Züge nicht fahren dürfen?",
        antwort1: "Hp 0",
        antwort2: "Hp 8",
        antwort3: "Hp 1",
        antwort4: "Hp 7",
        bildname: "Hp0_Licht.svg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Wie heißt der Signalbegriff bei dem Züge fahren dürfen?",
        antwort1: "Hp 1",
        antwort2: "Hp 0",
        antwort3: "Hp 4",
        antwort4: "Hp 12",
        bildname: "Zwischensignal_FFM-Hoechst_Schnee.jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Wofür wird eine Weiche benötigt?",
        antwort1: "Um in ein anderes Gleis zu wechseln",
        antwort2: "Zum Drehen des Zuges",
        antwort3: "Zum Anheben des Zuges",
        antwort4: "Um ein Zug entgleisen zu lassen",
        bildname: "SunsetTracksCrop.jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Auf welcher Messe befinden Sie sich gerade?",
        antwort1: "InnoTrans",
        antwort2: "AnnoTrins",
        antwort3: "Zug und Bahn-Messe",
        antwort4: "Modellbahnmesse",
        bildname: "Nahverkehrszüge_Frankfurt.jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Wie viele Abteilungen hat die Firma W&S Technik?",
        antwort1: "5",
        antwort2: "17",
        antwort3: "2",
        antwort4: "3",
        bildname: "WuS_Logo_L.jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Welche Spannung hat die Oberleitung bei der Bahn?",
        antwort1: "15.000 V",
        antwort2: "12 kV",
        antwort3: "220 kV",
        antwort4: "10 kV",
        bildname: "SunsetTracksCrop.jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Auf wieviel Schienen fährt ein Zug?",
        antwort1: "2",
        antwort2: "1",
        antwort3: "4",
        antwort4: "8",
        bildname: "Nahverkehrszüge_Frankfurt.jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Wann war die letzte InnoTrans?",
        antwort1: "vor 2 Jahren",
        antwort2: "vor 4 Jahren",
        antwort3: "vor 3 Jahren",
        antwort4: "Das ist die erste InnoTrans",
        bildname: "Doppelkreuzungsweichen_im_Rbf_München_Nord.jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Wo findet die InnoTrans statt?",
        antwort1: "Berlin",
        antwort2: "Frankfurt",
        antwort3: "Stuttgart",
        antwort4: "Castrop-Rauxel",
        bildname: "Doppelkreuzungsweichen_im_Rbf_München_Nord.jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Was ist die InnoTrans?",
        antwort1: "Internationale Fachmesse für Verkehrstechnik",
        antwort2: "kulinarische Messe",
        antwort3: "Fitnessmesse",
        antwort4: "Fußballmesse",
        bildname: "146_271_Köln_Hauptbahnhof_2015-12-17-02.jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Wieviele Triebfahrzeugführer fahren i.d.R. ein Zug?",
        antwort1: "1",
        antwort2: "4",
        antwort3: "1,5",
        antwort4: "6",
        bildname: "ICE_4,_Führerstand_(2).jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Ist es gefährlich auf einen Zug zu klettern?",
        antwort1: "JA, AUF JEDEN FALL",
        antwort2: "Ach quatsch, da passiert nie was",
        antwort3: "Nein, das ist eine neue Sportart",
        antwort4: "vielleicht",
        bildname: "SunsetTracksCrop.jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Wofür steht die Abkürzung Fdl?",
        antwort1: "Fahrdienstleiter",
        antwort2: "Fahrdrahtlenker",
        antwort3: "Freie-Deutsche-Linkspartei",
        antwort4: "Fahr-Doch-Langsamer",
        bildname: "Spurplan_60_Stellwerk_im_Bahnhof_Steinhausen.jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Wofür steht die Abkürzung ETCS?",
        antwort1: "European Train Control System",
        antwort2: "European Telecommunication System",
        antwort3: "Eisenbahntechnik Controll-System",
        antwort4: "Einfaches Training für Communication-Skills",
        bildname: "X_72633-34_ETCS_(European_Train_Control_System)A.jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Wann wurde die Deutsche Bahn privatisiert?",
        antwort1: "1994",
        antwort2: "2001",
        antwort3: "1945",
        antwort4: "1890",
        bildname: "Nahverkehrszüge_Frankfurt.jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "In welche Abteilungen teilt sich die W&S Technik GmbH auf?",
        antwort1: "Technik / Consulting / Services / LWL",
        antwort2: "Bahn / See",
        antwort3: "Schotter / Schiene / Schwelle / Kleineisen",
        antwort4: "Holz / Stein",
        bildname: "WuS_Logo_L.jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Welche Arbeiten im Bereich der LST übernimmt die Firma W&S Technik GmbH?",
        antwort1: "Alles, was der Bereich LST zu bieten hat!",
        antwort2: "Nur Arbeiten an Weichen",
        antwort3: "Nur Arbeiten an Signalen",
        antwort4: "Nur Arbeiten an Stellwerken",
        bildname: "WuS_Logo_L.jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Wofür steht die Abkürzung DKW?",
        antwort1: "Doppelte Kreuzungsweiche",
        antwort2: "Doppelkraftwagen",
        antwort3: "Direkte Kammrelaiswicklung",
        antwort4: "Doppelte Kohlewagen",
        bildname: "Doppelkreuzungsweichen_im_Rbf_München_Nord.jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Was bedeutet ein Geschwindigkeitsanzeiger mit der Kennziffer '10'?",
        antwort1: "Maximal 100 km/h zugelassen",
        antwort2: "Maximal 10 km/h zugelassen",
        antwort3: "Mindestgeschwindigkeit von 10 km/h ist einzuhalten",
        antwort4: "Mit 10 km/h erwartet einem eine 'grüne Welle'",
        bildname: "Zwischensignal_FFM-Hoechst_Schnee.jpg",
        bildid: "null",
        schwierigkeit: "leicht"
    },
    {
        frage: "Mit welchen Frequenzen arbeitet der Fahrzeugsensor (alt) von Scheidt& Bachmann?",
        antwort1: "80 kHz / 60 kHz",
        antwort2: "45 kHz / 50 kHz",
        antwort3: "50 kHz / 80 kHz",
        antwort4: "30 kHz / 60 kHz",
        bildname: "Bahnübergang-de.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Wie nennt man den Weg, hinter einem Ausfahrsignal, der freigehalten werden muss?",
        antwort1: "Durchrutschweg",
        antwort2: "Gefahrpunktabstand",
        antwort3: "Bremskurvenabstand",
        antwort4: "Anhalteweg",
        bildname: "J27_099_Bf_Twistesee,_Ausfsig_N1,_N2.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Welche der nachfolgenden Antwortmöglichkeiten ist eine Auswerteeinrichtung für Gleisstromkreise?",
        antwort1: "Dreilagen-Motorrelais",
        antwort2: "Motorzählwerksgruppe",
        antwort3: "AzS70",
        antwort4: "AzS350",
        bildname: "146_271_Köln_Hauptbahnhof_2015-12-17-02.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Welche Frequenzen werden bei Gleismagneten verwendet bei einer Streckenausrüstung mit PZB 90?",
        antwort1: "500 Hz, 1000 Hz oder 2000 Hz",
        antwort2: "1000 Hz, 2000 Hz und 3000 Hz",
        antwort3: "2000 Hz, 3000 Hz oder 10.000 Hz",
        antwort4: "500 Hz, 1000 Hz, 2000 und 3000 Hz",
        bildname: "J32_957_Bft_Leipzig_Nord,_Sig_ZS301,_N302.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Aus wie vielen Systemen besteht der Radsensor RSR122, RSR123 oder auch der DEK 43?",
        antwort1: "Aus 2 Systemen",
        antwort2: "Aus 4 Systemen",
        antwort3: "Aus 8 Systemen",
        antwort4: "Aus 1 System",
        bildname: "Achszähler.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Wozu dient der Betriebsartenstecker bei der PZ80?",
        antwort1: "Zum Einstellen der Wirksamkeit der GÜ",
        antwort2: "Zum Einstellen des Schwingkreises",
        antwort3: "Zum Einstellen des Zweiggleisradius",
        antwort4: "Zum Einstellen des Zungenaufschlags",
        bildname: "GPÜ_Ingolstadt.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Welchen Vorteil bietet die Filterbaugruppe der 3. Generation (GFB 03) im Gegensatz zur Filterbaugruppe der 1. Generation (GFB 01) bei der PZ 80?",
        antwort1: "Unempfindlichen gegenüber von Störeinflüssen des ICE 3",
        antwort2: "Damit lässt sich die Prüfzeit anpassen",
        antwort3: "Die Filterbaugruppe 03 ist unempfindlich gegenüber LST-Mitarbeiter",
        antwort4: "Die Filterbaugruppe 03 überwacht die komplette Anlage auf Fehler und Störungen",
        bildname: "GPÜ_Ingolstadt.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Wie wird die Fahrstraßenfestlegung in einem SpDrS 60 Stellwerk dem Fahrdienstleiter angezeigt?",
        antwort1: "Durch einen quadratischen Melder",
        antwort2: "Durch einen runden Melder",
        antwort3: "Durch einen dreieckigen Melder",
        antwort4: "Durch einen ovalen Melder",
        bildname: "Spurplan_60_Stellwerk_im_Bahnhof_Steinhausen.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Erkennt der Fahrdienstleiter in H/V-System bei einem SpDrS 60 Stellwerk an seinen Signalen auf dem Stelltisch, ob das Signal Hp2 zeigt?",
        antwort1: "Nein, natürlich nicht",
        antwort2: "Ja, natürlich",
        antwort3: "Ja, aber nicht bei allen Signalen",
        antwort4: "Nur wenn der Fdl die Funktion anschaltet",
        bildname: "Spurplan_60_Stellwerk_im_Bahnhof_Steinhausen.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Bei einem ZSB 2000 handelt es sich um ein/e",
        antwort1: "Stellwerk",
        antwort2: "Brücke",
        antwort3: "Bahnübergang",
        antwort4: "Signal",
        bildname: "SunsetTracksCrop.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "In welche zwei Arten von Balisen wird Unterschieden?",
        antwort1: "Gesteuerte und ungesteuerte Balisen",
        antwort2: "Grüne und Braune Balisen",
        antwort3: "Linienförmige und Punktförmige Balisen",
        antwort4: "Schnelle und langsame Balisen",
        bildname: "X_72633-34_ETCS_(European_Train_Control_System)A.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "In dem ETCS-System gibt es das sogenannte NTC. Wofür steht diese Abkürzung?",
        antwort1: "National-Train-Control-System",
        antwort2: "National Train-Communication",
        antwort3: "Not too complicated",
        antwort4: "Nothing to complain",
        bildname: "X_72633-34_ETCS_(European_Train_Control_System)A.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Welche Betriebsspannung benötigen Gleismagneten?",
        antwort1: "keine",
        antwort2: "60 V",
        antwort3: "120 V",
        antwort4: "230 V",
        bildname: "J39_816_Bf_Sandersleben_(Anh),_von_Güsten.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Wie groß ist i.d.R. der Bremswegabstand?",
        antwort1: "1000 m",
        antwort2: "1500 m",
        antwort3: "1250 m",
        antwort4: "1700 m",
        bildname: "Formsignale.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Wofür steht die Abkürzung AJ bei Eisenbahnsignalkabel?",
        antwort1: "Für Außenkabel mit Induktionsschutz",
        antwort2: "Für Außenkabel mit innenliegendem Mantel",
        antwort3: "Für Kabel mit einer zusätzlichen Aderjustierung",
        antwort4: "Diese Bezeichnung gibt es bei Eisenbahnsignalkabel nicht!",
        bildname: "Kabel.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Welches Maß darf der Verschlusshub nicht unterschreiten?",
        antwort1: "8 mm",
        antwort2: "9 mm",
        antwort3: "11 mm",
        antwort4: "7 mm",
        bildname: "Doppelweichungskreuzung.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Über welches Maß wird beim CKA15 die Überdeckung ermittelt?",
        antwort1: "Kontrollmaß",
        antwort2: "Funktionsmaß",
        antwort3: "Spaltmaß",
        antwort4: "Dreiecksmaß",
        bildname: "SunsetTracksCrop.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Nennen Sie das Grenzmaß vom Klaffmaß?",
        antwort1: "3 mm",
        antwort2: "4 mm",
        antwort3: "2,5 mm",
        antwort4: "5 mm",
        bildname: "Nahverkehrszüge_Frankfurt.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Was ist ein Bahnübergang nach EBO?",
        antwort1: "höhengleiche Kreuzung…..",
        antwort2: "ebene Kreuzung…..",
        antwort3: "einfache Kreuzung….",
        antwort4: "Zugverkehr kreuzt Straße….",
        bildname: "Bahnübergang-de.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Welcher Gleismagnet wird auf Höhe des Vorsignals montiert?",
        antwort1: "1000 Hz",
        antwort2: "500 Hz",
        antwort3: "2000 Hz",
        antwort4: "10.000 Hz",
        bildname: "Zwischensignal_FFM-Hoechst_Schnee.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Wofür steht die Abkürzung BÜBM?",
        antwort1: "Bahnübergangsbelegmelder",
        antwort2: "Bahnübergangsbesetztmelder",
        antwort3: "Bahnübergangbelegtmacher",
        antwort4: "Bahnbelegtübergangsmelder",
        bildname: "Bahnübergang-de.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Wo wird der Zungenaufschlag an einer Weiche gemessen?",
        antwort1: "Auf Höhe der Verschlussklammerschraube",
        antwort2: "An der Zungenwurzel",
        antwort3: "Genau in der Mitte der Weiche",
        antwort4: "Ein Schwellenfach vor dem Weichenanfang",
        bildname: "Doppelkreuzungsweichen_im_Rbf_München_Nord.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Wofür steht die Abkürzung Betra?",
        antwort1: "Betriebs- und Bauanweisung",
        antwort2: "Betriebs-/ Befehlsanweisung",
        antwort3: "Bahn- und Betriebsanweisung",
        antwort4: "Bund- und Bahnanweisung",
        bildname: "Baustelle_S-Bahn_Schönhauser_Allee,_Berlin_(7047921593).jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Wie schnell fährt ein Zug maximal mit dem Ausrüstungsstandard PZB 90?",
        antwort1: "160 km/h",
        antwort2: "320 km/h",
        antwort3: "100 km/h",
        antwort4: "200 km/h",
        bildname: "146_271_Köln_Hauptbahnhof_2015-12-17-02.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Welches ist keine Vorblockbedingung?",
        antwort1: "Ausfahrsignal sollte in Fahrt gestanden haben",
        antwort2: "Zug muss gefahren sein",
        antwort3: "Ausfahrsignal muss in Fahrt gestanden haben",
        antwort4: "Ausfahrsignal muss wieder in Halt stehen",
        bildname: "Mechanisches_Stellwerk_Bahnhof_Fridingen_(2018).jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Welches ist keine Rückblockbedingung?",
        antwort1: "Vorblock ist eventuell eingegangen",
        antwort2: "Zug muss gefahren sein",
        antwort3: "Einfahrsignal sollte in Fahrt gestanden haben",
        antwort4: "Zug muss mit Zg 2 an der Signalzuschlussstelle vorbeigefahren sein",
        bildname: "Mechanisches_Stellwerk_Bahnhof_Fridingen_(2018).jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Mit welchen Signalen werden vorübergehende Langsamfahrstellen gekennzeichnet?",
        antwort1: "Lf 1, Lf 2, Lf 3",
        antwort2: "Lf 3, Lf 4, Lf 7",
        antwort3: "Lf 6, Lf 7",
        antwort4: "Lf 7, Lf 8, Lf 9",
        bildname: "J32_957_Bft_Leipzig_Nord,_Sig_ZS301,_N302.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Welche Temperatur in Grad Celsius wäre optimal für den Betrieb von Batterien?",
        antwort1: "20 °C ± 5 K",
        antwort2: "15 °C ± 5 K",
        antwort3: "25 °C ± 3 °C",
        antwort4: "30 °C ± 7 °C",
        bildname: "Storage_battery_manual.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "In welche zwei Kategorien lässt sich der unmittelbare Flankenschutz einteilen?",
        antwort1: "direkter und indirekter",
        antwort2: "unmittelbar und mittelbar",
        antwort3: "betrieblicher und technischer",
        antwort4: "zeitlicher und räumlicher",
        bildname: "Nahverkehrszüge_Frankfurt.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "In welchem Abstand stehen Vorsignale zu Hauptsignale?",
        antwort1: "Bremswegabstand",
        antwort2: "2500 m",
        antwort3: "4000 m",
        antwort4: "11000 m",
        bildname: "Zwischensignal_FFM-Hoechst_Schnee.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Mit welchen Signalen werden ständige Langsamfahrstellen gekennzeichnet?",
        antwort1: "Lf 6, Lf 7",
        antwort2: "Lf 1, Lf 2, Lf 3",
        antwort3: "Lf 12, Lf 13",
        antwort4: "gar nicht",
        bildname: "J32_957_Bft_Leipzig_Nord,_Sig_ZS301,_N302.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Welche Angaben sind in einer BETRA unter dem Punkt 4.2 zu finden?",
        antwort1: "technisch Berechtigter",
        antwort2: "Zuständiger Fdl",
        antwort3: "Sperrzeiten",
        antwort4: "Langsamfahrstelle",
        bildname: "L03_190_Abzw_Anger,_Weiche_02.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Welches der folgenden Systeme ist ein Signalsystem der DB InfraGO?",
        antwort1: "Ho-System",
        antwort2: "Ks-System",
        antwort3: "Ko-System",
        antwort4: "K/V-System",
        bildname: "Ks-Mehrabschnittssignal.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Welche Sendefrequenz hat ein ZP D 43 von Siemens?",
        antwort1: "43 kHz",
        antwort2: "9,86 kHz",
        antwort3: "24 kHz",
        antwort4: "6,52 kHz",
        bildname: "Achszähler.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Mit welcher maximalen Geschwindigkeit kann ein Bahnübergang von Zügen befahren werden?",
        antwort1: "160 km/h",
        antwort2: "80 km/h",
        antwort3: "100 km/h",
        antwort4: "250 km/h",
        bildname: "Bahnübergang-de.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Was passiert wenn ein Zug eine 2000 Hz-Beeinflussung durch einen Gleismagneten bekommt?",
        antwort1: "Der Zug wird zwangsgebremst",
        antwort2: "Der Tf muss innerhalb von 23 Sekunden auf 85 km/h herunterbremsen",
        antwort3: "Der Tf muss innerhalb von 153 m auf 45 km/h herunterbremsen",
        antwort4: "Der Tf muss die Wachsamkeitstaste bedienen",
        bildname: "J27_099_Bf_Twistesee,_Ausfsig_N1,_N2.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Was kann ein weißes Zusatzlicht am Vorsignal bedeuten?",
        antwort1: "Um mehr als 5 % verkürzter Bremswegabstand",
        antwort2: "Signal betrieblich abgeschaltet",
        antwort3: "Mastschild fehlt",
        antwort4: "Das Signalsystem ändert sich am nächsten Signal",
        bildname: "Ks_Ks2+Zusatzlicht_(oben).svg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "In welchen 5 Schritten erfolgt das Umstellen einer Weiche?",
        antwort1: "1. Weichenüberwachung abschalten 2. Drehsinn ändern 3. Stellstrom anschalten 4. Bei Erreichen der Endlage Stellstrom abschalten 5. Überwachung wieder einschalten",
        antwort2: "1. Stellstrom anschalten 2. Weichenüberwachung abschalten 3. Drehsinn ändern 4. Überwachung wieder einschalten 5. Stellstrom abschalten",
        antwort3: "1. Weiche abschalten 2. Weiche umkurbeln 3. Weiche in Endlage bringen 4. Weiche zuschalten 5. Fahrdienstleiter anrufen",
        antwort4: "1. Fahrdienstleiter anrufen 2. Small-Talk führen 3. Weiche umstellen lassen 4. Weiche reversieren 5. Gespräch beenden",
        bildname: "Nahverkehrszüge_Frankfurt.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Mit welcher Geschwindigkeit darf eine Weiche, mit einem Zweiggleisradius von 190 m, im abzweigenden Gleis maximal befahren werden?",
        antwort1: "40 km / h",
        antwort2: "60 km / h",
        antwort3: "80 km / h",
        antwort4: "100 km / h",
        bildname: "L03_190_Abzw_Anger,_Weiche_02.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Wie schnell darf ein Zug bei Hp1 + ZS3 '10' fahren?",
        antwort1: "100 km/h",
        antwort2: "10 km/h",
        antwort3: "40 km/h",
        antwort4: "50 km/h",
        bildname: "Zwischensignal_FFM-Hoechst_Schnee.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Was versteht man unter punktförmiger Gleisfreimeldung?",
        antwort1: "Achszähltechnik",
        antwort2: "Gleismagnete",
        antwort3: "Videoüberwachung",
        antwort4: "Blockwärter",
        bildname: "146_271_Köln_Hauptbahnhof_2015-12-17-02.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Was ist die Grundstellung einer Weiche in einem mechanischen Stellwerk?",
        antwort1: "Hauptsächlich benötigte Lage",
        antwort2: "Zur Fahrt nach links",
        antwort3: "Zur Fahrt nach Rechts",
        antwort4: "Gerader Strang",
        bildname: "Mechanisches_Stellwerk_Bahnhof_Fridingen_(2018).jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Was für eine Art Schutz kann eine Flankenschutzweiche bieten?",
        antwort1: "Unmittelbar, direkter Flankenschutz",
        antwort2: "Unmittelbar, indirekter Flankenschutz",
        antwort3: "Mittelbarer Flankenschutz",
        antwort4: "Eigenzwieschutz",
        bildname: "Doppelkreuzungsweichen_im_Rbf_München_Nord.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Wann braucht man eine Gefahrenraumfreimeldung am Bahnübergang?",
        antwort1: "Wenn es sich um eine Bahnübergangssicherungsanlagen mit Vollabschluss handelt",
        antwort2: "Wenn es sich um einen nicht technisch gesicherten Bahnübergang handelt",
        antwort3: "Wenn technisch nicht ausgeschlossen ist, dass Züge auf dem BÜ zum Stehen kommen könnten",
        antwort4: "Wenn Züge planmäßig auf dem BÜ zum Stehen kommen",
        bildname: "Bahnübergang-de.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Darf ein Triebfahrzeugführer wenn er das Ersatzsignal sieht am haltzeigenden Hauptsignal vorbeifahren?",
        antwort1: "Ja",
        antwort2: "Nein",
        antwort3: "Das ist abhängig vom Mastschild",
        antwort4: "Das ist abhängig von der Stellwerkstechnik",
        bildname: "Triebfahrzeugführer_IC-Steuerwagen.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Wie darf eine LST-Fachkraft den Fahrdienstleiter bei der erschwerten Achszählgrundstellung mit einer Motorzählwerksgruppe unterstützen?",
        antwort1: "P1-Relais und/oder P2-Relais andrücken",
        antwort2: "R-Relais andrücken",
        antwort3: "Fm-Relais andrücken",
        antwort4: "Ü1-Relais und/oder Ü2-Relais andrücken",
        bildname: "Elektromechanisches_Motorzählwerk_für_Achszähler_von_Siemens.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Wofür steht die Abkürzung SIMIS C?",
        antwort1: "Sicheres Mikrocomputersystem von Siemens Typ C",
        antwort2: "Serielles Interface Mit Integrierter Sicherheitsebene von Conrad",
        antwort3: "Sicherheit Mischsystem Commercial",
        antwort4: "Signaltechnische Microcontrollersteuerung Version C",
        bildname: "Elektronisches_Stellwerk_Köln-Betriebsbahnhof-3887.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Was gehört zu einer Einfahrzugfahrstraße?",
        antwort1: "Fahrweg, Durchrutschweg, Flankenschutz",
        antwort2: "Fahrweg, Gefahrenpunktabstand, Flankenschutz",
        antwort3: "Zug, Signal, Weiche",
        antwort4: "Fahrweg, Schutzraum, Flankenschutz",
        bildname: "Einfahrt_der_Dreiseenbahn_in_den_Bahnhof_Titisee.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Bevor ich einen DMK (Doppelmagnetschienenkontakt) ausbaue…",
        antwort1: "…… lege ich ein Kurzschlusseisen auf den DMK",
        antwort2: "… grabe ich ein tiefes Loch in den Schotter (ca. 30 cm unter Schwellenunterkante)",
        antwort3: "… baue ich die Anschlussseile ab",
        antwort4: "… prüfe ich die Kontaktweglänge und notiere diese",
        bildname: "Schienenkontakt_Siemens_DMK.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Wenn ich einen 2000 Hz-Gleismagneten kurzschließe…",
        antwort1: "… ist dieser dauerhaft unwirksam",
        antwort2: "… ist dieser dauerhaft wirksam",
        antwort3: "…passiert nichts",
        antwort4: "… habe ich ihn richtig angeschlossen",
        bildname: "J27_099_Bf_Twistesee,_Ausfsig_N1,_N2.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Was erwartet einen Triebfahrzeugführer wenn er an einem Mehrabschnittssignal ein blinkendes grünes Licht sieht, mit einer gelben '4' unterhalb des Signalschirms?",
        antwort1: "Er darf mit 160 km/h (bzw. nach Fahrplangeschwindigkeit) am Signal vorbeifahren, muss aber am nächsten Signal auf 40 km/h heruntergebremst haben",
        antwort2: "Er darf mit 160 km/h (bzw. nach Fahrplangeschwindigkeit) am Signal vorbeifahren, muss aber am nächsten Signal zum Stehen kommen",
        antwort3: "Er muss zum Stehen kommen, darf aber in 4 Sekunden weiterfahren",
        antwort4: "Er darf mit 40 km/h am Signal vorbeifahren, muss aber am nächsten Signal zum Stehen kommen",
        bildname: "Ks-Mehrabschnittssignal.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Welche Signalbegriffe kann ein Lichtsperrsignal anzeigen?",
        antwort1: "Hp 0 und Sh 1",
        antwort2: "Sh 0 und Sh 1",
        antwort3: "Hp 0 und Hp 1",
        antwort4: "Ks 0 und Ks 1",
        bildname: "WuS_Logo_L.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Welches elektronische Bauteil wandelt Spannungsänderungen in Frequenzänderungen im ZP 70 M um?",
        antwort1: "Astabiler Multivibrator",
        antwort2: "Bandpass",
        antwort3: "Trigger",
        antwort4: "Spannungskonstanter",
        bildname: "Achszähler.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Was kann ein weißes Zusatzlicht am Vorsignal bedeuten?",
        antwort1: "Es handelt sich um ein Vorsignalwiederholer",
        antwort2: "Es gibt kein Zusatzlich am Vorsignal",
        antwort3: "Ne 2-Tafel links aufgestellt",
        antwort4: "Signal betrieblich abgeschaltet",
        bildname: "Ks_Ks2+Zusatzlicht_(unten).svg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "In einem Spurplan Stellwerk von Siemens ist eine Weichengruppe defekt. Im Nachbarstellwerk auch Spurplan aber von Lorenz gibt es eine Ersatzgruppe. Kann ich diese nutzen?",
        antwort1: "Nein, das ist nicht möglich",
        antwort2: "Ja, die Gruppen sind eins zu eins die gleichen",
        antwort3: "Ja, aber erst nach Umbau nach Ril 892.0205 A27",
        antwort4: "Ja, aber die Kontakte der Relais Ü+ und Ü- müssen dauerhaft mit einem Schrumpfschlauch isoliert werden",
        bildname: "Technik_Relaisstellwerk_Köln_Kf-4038.jpg",
        bildid: "null",
        schwierigkeit: "mittel"
    },
    {
        frage: "Was bedeutet das Rangierfahrtsignal Sh 1?",
        antwort1: "Fahrverbot aufgehoben",
        antwort2: "Fahrt für Rangierfahrten",
        antwort3: "Rangierfahrt erlaubt",
        antwort4: "Fahrt für Sperrfahrten",
        bildname: "WuS_Logo_L.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Wie wird eine Aktiv-, Passivschaltung bei der GPE 'PZ 80' realisiert?",
        antwort1: "Durch Ein oder -Ausschalten eines Steuersignals",
        antwort2: "Durch Umpolen der Versorgungsspannung",
        antwort3: "Diese Schaltung ist erst ab der GPE 90R möglich",
        antwort4: "Sowohl durch Umpolen der Versorgungsspannung, als auch durch Ein oder -Ausschalten eines Steuersignals",
        bildname: "SunsetTracksCrop.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Wie hoch ist die restriktive Geschwindigkeit unter einer 1000 Hz-Beeinflussung mit der Zugart 'O'?",
        antwort1: "45 km/h",
        antwort2: "Gleisfreimeldung besetzt oder gestört",
        antwort3: "10 km/h",
        antwort4: "80 km/h",
        bildname: "2009_-_EOW_EDOB.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Was bedeutet die Kennzahl 600 bei Eisenbahnsignalkabel?",
        antwort1: "Reduktionsfaktor von etwa 0,55 bei etwa 100 V/km",
        antwort2: "Reduktionsfaktor von etwa 0,35 bei etwa 75 V/km",
        antwort3: "Reduktionsfaktor von etwa 0,15 bei etwa 100 V/km",
        antwort4: "Innenraumkabel",
        bildname: "Kabel.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Wie lang kann ein FTGS 46 Abschnitt mit Hilfe der Kasdakierung maximal sein?",
        antwort1: "1200 m",
        antwort2: "600 m",
        antwort3: "1500 m",
        antwort4: "700 m",
        bildname: "J27_099_Bf_Twistesee,_Ausfsig_N1,_N2.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Wie groß darf das Klammerkopfspiel am Mittelverschluss sein?",
        antwort1: "1,5 - 2 mm",
        antwort2: "0,5 - 1 mm",
        antwort3: "0,5 - 2 mm",
        antwort4: "1 - 1,5 mm",
        bildname: "Doppelkreuzungsweichen_im_Rbf_München_Nord.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Welche Durchfahrrille muss an einer 190er Weiche, Schienenform S49 im abzweigenden Strang mindestens vorhanden sein?",
        antwort1: "64 mm",
        antwort2: "58 mm",
        antwort3: "50 mm",
        antwort4: "62 mm",
        bildname: "L03_190_Abzw_Anger,_Weiche_02.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Wie groß darf das Klammerkopfspiel am Spitzenverschluss sein?",
        antwort1: "0,5 - 1 mm",
        antwort2: "1 - 1,5 mm",
        antwort3: "0,75 - 1,25 mm",
        antwort4: "0,25 - 0,75 mm",
        bildname: "SunsetTracksCrop.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Mit welcher Sendefrequenz wird ein ZP 43 betrieben?",
        antwort1: "43 kHz",
        antwort2: "9,86 kHz",
        antwort3: "4,3 kHz",
        antwort4: "430 kHz",
        bildname: "Achszähler.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Welches ist für Neuanlagen ein wichtiges Planungsregelwerk?",
        antwort1: "819",
        antwort2: "838",
        antwort3: "417",
        antwort4: "967",
        bildname: "Planausschnitt.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Welches Regelwerk ist das wichtigste im Bezug auf Bahnübergänge?",
        antwort1: "815",
        antwort2: "843",
        antwort3: "816",
        antwort4: "818",
        bildname: "Bahnübergang-de.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Mit wieviel Nm wird der Zungenkloben der Einheitsbeistellvorrichtung angezogen?",
        antwort1: "290 Nm",
        antwort2: "250 Nm",
        antwort3: "450 Nm",
        antwort4: "100 Nm",
        bildname: "Baustelle_S-Bahn_Schönhauser_Allee,_Berlin_(7047921593).jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Welche Bedeutung hat die 8 in dem Regelwerksbezeichnung 892?",
        antwort1: "Hauptgruppe",
        antwort2: "Untergruppe",
        antwort3: "Modulgruppe",
        antwort4: "Nebengruppe",
        bildname: "Dülmen,_Börnste,_Eisenbahnlinie_Dortmund-Enschede_--_2015_--_9918.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Mit welcher PZB Sicherung werden vorübergehende Langsamfahrstellen Kz 2 gesichert?",
        antwort1: "1000 Hz ständig wirksam an Lf1 und 150m vor Lf2 500 Hz ständig wirksam",
        antwort2: "1000 Hz ständig wirksam an Lf1",
        antwort3: "GÜ mit 1000 Hz an Lf1",
        antwort4: "GÜ mit 2000 Hz 485m vor Lf2",
        bildname: "J32_957_Bft_Leipzig_Nord,_Sig_ZS301,_N302.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Woran erkennt der Fahrdienstleiter, dass sein Felderblock zum nächsten Bahnhof in Grundstellung ist?",
        antwort1: "Farbscheibe weiß",
        antwort2: "Farbscheibe rot",
        antwort3: "Farbscheibe rot und weiß",
        antwort4: "Farbscheibe gelb",
        bildname: "Mechanisches_Stellwerk_Bahnhof_Fridingen_(2018).jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "In welchem Schriftstück wird der Aufbau und die Ansprüche an Eisenbahnsignalkabeln festgehalten?",
        antwort1: "416 technisches Lastenheft",
        antwort2: "417 technisches Heft",
        antwort3: "418 technisches Lastenheft",
        antwort4: "419 technisches Kabelheft",
        bildname: "Kabel.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Welche besondere Eigenschaft haben PZB-Kabel?",
        antwort1: "besonders geringe Betriebskapazität",
        antwort2: "besonders hohe Betriebskapazität",
        antwort3: "2,5mm Ader Durchmesser",
        antwort4: "besonders geringe Betriebsinduktivität",
        bildname: "Kabel.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Ab welcher Tiefe dürfen Kabelquerungen unter Gleisen durchgeführt werden?",
        antwort1: "ab 1 m unter SU",
        antwort2: "ab 1,5 m unter SO",
        antwort3: "ab 2 m unter SU",
        antwort4: "ab 2,5 m unter SO",
        bildname: "Kabel.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Wie ist die optimale Säuredichte bei 20 Grad Celsius bei Bleiakkumulatoren?",
        antwort1: "1,24",
        antwort2: "1,22",
        antwort3: "1,25",
        antwort4: "1,23",
        bildname: "Storage_battery_manual.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Unter welchem Punkt, in einer Betra, findet man den Anlagenverantwortlichen?",
        antwort1: "7",
        antwort2: "4.1",
        antwort3: "1",
        antwort4: "2",
        bildname: "Baustelle_S-Bahn_Schönhauser_Allee,_Berlin_(7047921593).jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Ab wann müssen Einträge vom Arbeits- und Störungsbuch in den Nachweis der vorübergehenden Änderungen übertragen werden?",
        antwort1: "ab dem 8. Tag",
        antwort2: "ab dem 3. Tag",
        antwort3: "ab dem 5. Tag",
        antwort4: "ab dem 2. Tag",
        bildname: "Baustelle_S-Bahn_Schönhauser_Allee,_Berlin_(7047921593).jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Was bedeutet das abgebildete Symbol im Verschlussplan eines Dr S 2-Stellwerkes?",
        antwort1: "Haltfallverhinderter Abschnitt",
        antwort2: "Überwachter Schutzraum",
        antwort3: "Abschnitt der beim Einstellen der Fahrstraße und nach Fahrstellung des Signals auf Freisein überwacht wird",
        antwort4: "Bei eingestellter Fahrstraße ist die Erlaubnisabgabe verschlossen",
        bildname: "Haltfallverhindernd.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Welche Sperre ist auf dem Bild abgebildet?",
        antwort1: "Anfangssperre",
        antwort2: "Endsperre",
        antwort3: "Fahrstraßenfestlegesperre",
        antwort4: "Bahnhofswiederholungssperre",
        bildname: "anfangssperre.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Wie schnell darf ein Triebfahrzeugführer bei Hl 3b fahren?",
        antwort1: "100 km/h und ab dem nächsten Signal Fahrplangeschwindigkeit",
        antwort2: "40 km/h und ab dem nächsten Signal Fahrplangeschwindigkeit",
        antwort3: "60 km/h und ab dem nächsten Signal Fahrplangeschwindigkeit",
        antwort4: "Fahrplangeschwindigkeit und ab dem nächsten Signal 40 bzw. 60 km/h",
        bildname: "Hl_3b_Signal.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Auf welche Kontaktweglänge wird der DMK mit magnetischen Einsätzen im Regelfall eingestellt?",
        antwort1: "165 mm",
        antwort2: "148 mm",
        antwort3: "160 mm",
        antwort4: "200 mm",
        bildname: "Schienenkontakt_Siemens_DMK.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Auf welche Kontaktweglänge wird der MK im Regelfall eingestellt?",
        antwort1: "148 mm",
        antwort2: "160 mm",
        antwort3: "165 mm",
        antwort4: "199 mm",
        bildname: "Schienenkontakt_Bahnübergang_Bauform_MK_(Magnetschienenkontakt)_in_Vörie.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Nach welcher Zeit muss ein Triebfahrzeug, nach einer 1000 Hz-Beeinflussung in der oberen Zugart, die Geschwindigkeit von 85 Km/h erreicht haben?",
        antwort1: "23 s",
        antwort2: "32 s",
        antwort3: "20 s",
        antwort4: "45 s",
        bildname: "J32_957_Bft_Leipzig_Nord,_Sig_ZS301,_N302.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "In welcher Richtlinie finde ich grundsätzlichen und spezifische Informationen über Gleisstromkreise der Firma Siemens?",
        antwort1: "892.9205 A30",
        antwort2: "892.9206 A12",
        antwort3: "892.9204 A20",
        antwort4: "892.9205 A40",
        bildname: "146_271_Köln_Hauptbahnhof_2015-12-17-02.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Welche Relais sind in Grundstellung in der Motorzählwerksgruppe angezogen?",
        antwort1: "Ü1, Ü2, Fz1/2, Fm",
        antwort2: "K1, K2, UZ1, Pk1",
        antwort3: "P1, P2, R, Fz 2",
        antwort4: "Ü1, Ü2, R, P1, P2",
        bildname: "Elektromechanisches_Motorzählwerk_für_Achszähler_von_Siemens.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Mit welchen Frequenzen arbeitet die Fernübertragung bei der Motorzählwerksgruppe?",
        antwort1: "4125 Hz / 625 Hz",
        antwort2: "1250 Hz / 2000 Hz",
        antwort3: "2500 Hz / 5000 Hz",
        antwort4: "1000 Hz / 4000 Hz",
        bildname: "Elektromechanisches_Motorzählwerk_für_Achszähler_von_Siemens.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Mit was für einem Drehmoment wird der DEK 43 an der Schiene befestigt?",
        antwort1: "45 Nm",
        antwort2: "60 Nm",
        antwort3: "32 Nm",
        antwort4: "35 Nm",
        bildname: "Achszähler.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Bei dem GMP 900 handelt es sich um ein",
        antwort1: "Messgerät",
        antwort2: "Signalmast",
        antwort3: "Schaltkontakt",
        antwort4: "Weichenantrieb",
        bildname: "SunsetTracksCrop.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Wie lang ist die Messstrecke bei einer La mit der KZ 8 und einer eingestellten Zeit von 1,2 Sekunden bei der PZ 80",
        antwort1: "42,4 m",
        antwort2: "31,7 m",
        antwort3: "45 m",
        antwort4: "26,5 m",
        bildname: "J32_957_Bft_Leipzig_Nord,_Sig_ZS301,_N302.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Welchen Bohrlochdurchmesser benötige ich zum Anbringen von Schutzerden an der Schiene?",
        antwort1: "19 mm",
        antwort2: "21 mm",
        antwort3: "13 mm",
        antwort4: "25 mm",
        bildname: "Zwischensignal_FFM-Hoechst_Schnee.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Woran lässt sich eine Betriebserde im Gleis erkennen?",
        antwort1: "An dem Warnzeichen (Hochspannungspfeil)",
        antwort2: "An dem lauten Geräuschen",
        antwort3: "An dem Geruch nach verbranntem Fleisch",
        antwort4: "An einem bunten Mast",
        bildname: "Nahverkehrszüge_Frankfurt.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Wie nennt sich der Verbinder an der Flügelschiene?",
        antwort1: "Z-Verbinder",
        antwort2: "Kurzschlussverbinder",
        antwort3: "U-Verbinder",
        antwort4: "Diagonalverbinder",
        bildname: "146_271_Köln_Hauptbahnhof_2015-12-17-02.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Mit welchem Drehmoment werden die Anschlussseile von Gleisstromkreisen an einem GAG befestigt?",
        antwort1: "20 Nm",
        antwort2: "35 Nm",
        antwort3: "50 Nm",
        antwort4: "65 Nm",
        bildname: "146_271_Köln_Hauptbahnhof_2015-12-17-02.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Welche Schienenhöhe haben wir bei der UIC 60/ 60 E2 Schiene?",
        antwort1: "172 mm",
        antwort2: "162 mm",
        antwort3: "155 mm",
        antwort4: "185 mm",
        bildname: "SunsetTracksCrop.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Wie wird der Längswasserschutz einem Sternvierer verseiltem Kabel realisiert?",
        antwort1: "Mit Quellgarn/ -flies",
        antwort2: "Mit der kapazitätsarmen Füllmasse",
        antwort3: "Mittels der Murray-Methode",
        antwort4: "Mittels dickerer Isolierung",
        bildname: "Kabel.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Bei Eisenbahnsignalkabel gibt es die Reduktionsfaktoren:",
        antwort1: "400 / 500 / 600",
        antwort2: "100/200/300",
        antwort3: "A / B / C",
        antwort4: "01.02.2003",
        bildname: "Kabel.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Bis zu welcher Prüfspannung ist das Tischfeld 2000 in einem SpDrS60 Stellwerk ausgelegt?",
        antwort1: "2 kV",
        antwort2: "20 V",
        antwort3: "1 kV",
        antwort4: "150 V",
        bildname: "Spurplan_60_Stellwerk_im_Bahnhof_Steinhausen.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Wie viele Relais können maximal in einer Vollgruppe in einem SpDrS60 Stellwerk sein?",
        antwort1: "35",
        antwort2: "20",
        antwort3: "15",
        antwort4: "25",
        bildname: "Technik_Relaisstellwerk_Köln_Kf-4038.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Bei Signalen schaltet man von Tag und Nachtspannung, wie hoch sind beide Spannungen in einem Dr Sp S60-Stellwerk?",
        antwort1: "220 V / 145 V",
        antwort2: "230 V / 115 V",
        antwort3: "380 V / 220 V",
        antwort4: "220 V / 60 V",
        bildname: "146_271_Köln_Hauptbahnhof_2015-12-17-02.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    },
    {
        frage: "Mit welcher Schrittfrequenz werden die Bitmuster in FTGS gesendet?",
        antwort1: "103,5 Hz",
        antwort2: "105,7 Hz",
        antwort3: "117,1 Hz",
        antwort4: "100 Hz",
        bildname: "Zwischensignal_FFM-Hoechst_Schnee.jpg",
        bildid: "null",
        schwierigkeit: "schwer"
    }


];

async function uploadFragenMitBilder() {
    const bildIdMap = await uploadBilder();

    try {
        for (const frage of fragenMitAntwortenUndBilder) {
            if (frage.bildname && bildIdMap[frage.bildname]) {
                frage.bildid = bildIdMap[frage.bildname];
            }

            const frageRecord = await pb.collection('automat').create(frage);
            console.log('Frage erfolgreich erstellt:', frageRecord);
        }
    } catch (error) {
        console.error('Fehler beim Erstellen der Fragen mit Bild-IDs:', error);
    }
}

// Starte den Upload-Prozess
uploadFragenMitBilder();
