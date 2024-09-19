const questions = [
    {
        question: "Mit welchen Frequenzen arbeitet der Fahrzeugsensor (alt) von Scheidt& Bachmann?",
        answers: [
            { text: "45 kHz / 50 kHz", correct: false },
            { text: "50 kHz / 80 kHz", correct: false },
            { text: "80 kHz / 60 kHz", correct: true },
            { text: "30 kHz / 60 kHz", correct: false }
        ],
        image: "Bahnübergang-de.jpg"
    },
    {
        question: "Wie nennt man den Weg, hinter einem Ausfahrsignal, der freigehalten werden muss?",
        answers: [
            { text: "Gefahrpunktabstand", correct: false },
            { text: "Bremskurvenabstand", correct: false },
            { text: "Durchrutschweg", correct: true },
            { text: "Anhalteweg", correct: false }
        ],
        image: "J27_099_Bf_Twistesee,_Ausfsig_N1,_N2.jpg"
    },
    {
        question: "Welche der nachfolgenden Antwortmöglichkeiten ist eine Auswerteeinrichtung für Gleisstromkreise?",
        answers: [
            { text: "Dreilagen-Motorrelais", correct: true },
            { text: "Motorzählwerksgruppe", correct: false },
            { text: "AzS70", correct: false },
            { text: "AzS350", correct: false }
        ],
        image: "146_271_Köln_Hauptbahnhof_2015-12-17-02.jpg"
    },
    {
        question: "Welche Frequenzen werden bei Gleismagneten verwendet bei einer Streckenausrüstung mit PZB 90?",
        answers: [
            { text: "1000 Hz, 2000 Hz und 3000 Hz", correct: false },
            { text: "2000 Hz, 3000 Hz oder 10.000 Hz", correct: false },
            { text: "500 Hz, 1000 Hz, 2000 und 3000 Hz", correct: false },
            { text: "500 Hz, 1000 Hz oder 2000 Hz", correct: true }
        ],
        image: "J32_957_Bft_Leipzig_Nord,_Sig_ZS301,_N302.jpg"
    },
    {
        question: "Aus wie vielen Systemen besteht der Radsensor RSR122, RSR123 oder auch der DEK 43?",
        answers: [
            { text: "Aus 4 Systemen", correct: false },
            { text: "Aus 8 Systemen", correct: false },
            { text: "Aus 1 System", correct: false },
            { text: "Aus 2 Systemen", correct: true }
        ],
        image: "Achszähler.jpg"
    },
    {
        question: "Wozu dient der Betriebsartenstecker bei der PZ80?",
        answers: [
            { text: "Zum Einstellen der Wirksamkeit der GÜ", correct: true },
            { text: "Zum Einstellen des Schwingkreises", correct: false },
            { text: "Zum Einstellen des Zweiggleisradius", correct: false },
            { text: "Zum Einstellen des Zungenaufschlags", correct: false }
        ],
        image: "GPÜ_Ingolstadt.jpg"
    },
    {
        question: "Welchen Vorteil bietet die Filterbaugruppe der 3. Generation (GFB 03) im Gegensatz zur Filterbaugruppe der 1. Generation (GFB 01) bei der PZ 80?",
        answers: [
            { text: "Unempfindlichen gegenüber von Störeinflüssen des ICE 3", correct: true },
            { text: "Damit lässt sich die Prüfzeit anpassen", correct: false },
            { text: "Die Filterbaugruppe 03 ist unempfindlich gegenüber LST-Mitarbeiter", correct: false },
            { text: "Die Filterbaugruppe 03 überwacht die komplette Anlage auf Fehler und Störungen", correct: false }
        ],
        image: "GPÜ_Ingolstadt.jpg"
    },
    {
        question: "Wie wird die Fahrstraßenfestlegung in einem SpDrS 60 Stellwerk dem Fahrdienstleiter angezeigt?",
        answers: [
            { text: "Durch einen runden Melder", correct: false },
            { text: "Durch einen quadratischen Melder", correct: true },
            { text: "Durch einen dreieckigen Melder", correct: false },
            { text: "Durch einen ovalen Melder", correct: false }
        ],
        image: "Spurplan_60_Stellwerk_im_Bahnhof_Steinhausen.jpg"
    },
    {
        question: "Erkennt der Fahrdienstleiter in H/V-System bei einem SpDrS 60 Stellwerk an seinen Signalen auf dem Stelltisch, ob das Signal Hp2 zeigt?",
        answers: [
            { text: "Ja, natürlich", correct: false },
            { text: "Nein, natürlich nicht", correct: true },
            { text: "Ja, aber nicht bei allen Signalen", correct: false },
            { text: "Nur wenn der Fdl die Funktion anschaltet", correct: false }
        ],
        image: "Spurplan_60_Stellwerk_im_Bahnhof_Steinhausen.jpg"
    },
    {
        question: "Bei einem ZSB 2000 handelt es sich um ein/e",
        answers: [
            { text: "Stellwerk", correct: true },
            { text: "Brücke", correct: false },
            { text: "Bahnübergang", correct: false },
            { text: "Signal", correct: false }
        ],
        image: "SunsetTracksCrop.jpg"
    },
    {
        question: "In welche zwei Arten von Balisen wird Unterschieden?",
        answers: [
            { text: "Grüne und Braune Balisen", correct: false },
            { text: "Linienförmige und Punktförmige Balisen", correct: false },
            { text: "Gesteuerte und ungesteuerte Balisen", correct: true },
            { text: "Schnelle und langsame Balisen", correct: false }
        ],
        image: "X_72633-34_ETCS_(European_Train_Control_System)A.jpg"
    },
    {
        question: "In dem ETCS-System gibt es das sogenannte NTC. Wofür steht diese Abkürzung?",
        answers: [
            { text: "National-Train-Control-System", correct: true },
            { text: "National Train-Communication", correct: false },
            { text: "Not too complicated", correct: false },
            { text: "Nothing to complain", correct: false }
        ],
        image: "X_72633-34_ETCS_(European_Train_Control_System)A.jpg"
    },
    {
        question: "Welche Betriebsspannung benötigen Gleismagneten?",
        answers: [
            { text: "60 V", correct: false },
            { text: "keine", correct: true },
            { text: "120 V", correct: false },
            { text: "230 V", correct: false }
        ],
        image: "J39_816_Bf_Sandersleben_(Anh),_von_Güsten.jpg"
    },
    {
        question: "Wie groß ist i.d.R. der Bremswegabstand?",
        answers: [
            { text: "1000 m", correct: true },
            { text: "1500 m", correct: false },
            { text: "1250 m", correct: false },
            { text: "1700 m", correct: false }
        ],
        image: "Formsignale.jpg"
    },
    {
        question: "Wofür steht die Abkürzung AJ bei Eisenbahnsignalkabel?",
        answers: [
            { text: "Für Außenkabel mit innenliegendem Mantel", correct: false },
            { text: "Für Außenkabel mit Induktionsschutz", correct: true },
            { text: "Für Kabel mit einer zusätzlichen Aderjustierung", correct: false },
            { text: "Diese Bezeichnung gibt es bei Eisenbahnsignalkabel nicht!", correct: false }
        ],
        image: "Kabel.jpg"
    },
    {
        question: "Welches Maß darf der Verschlusshub nicht unterschreiten?",
        answers: [
            { text: "9 mm", correct: false },
            { text: "8 mm", correct: true },
            { text: "11 mm", correct: false },
            { text: "7 mm", correct: false }
        ],
        image: "Doppelweichungskreuzung.jpg"
    },
    {
        question: "Über welches Maß wird beim CKA15 die Überdeckung ermittelt?",
        answers: [
            { text: "Funktionsmaß", correct: false },
            { text: "Spaltmaß", correct: false },
            { text: "Dreiecksmaß", correct: false },
            { text: "Kontrollmaß", correct: true }
        ],
        image: "SunsetTracksCrop.jpg"
    },
    {
        question: "Nennen Sie das Grenzmaß vom Klaffmaß?",
        answers: [
            { text: "4 mm", correct: false },
            { text: "3 mm", correct: true },
            { text: "2,5 mm", correct: false },
            { text: "5 mm", correct: false }
        ],
        image: "Nahverkehrszüge_Frankfurt.jpg"
    },
    {
        question: "Was ist ein Bahnübergang nach EBO?",
        answers: [
            { text: "ebene Kreuzung…..", correct: false },
            { text: "höhengleiche Kreuzung…..", correct: true },
            { text: "einfache Kreuzung….", correct: false },
            { text: "Zugverkehr kreuzt Straße….", correct: false }
        ],
        image: "Bahnübergang-de.jpg"
    },
    {
        question: "Welcher Gleismagnet wird auf Höhe des Vorsignals montiert?",
        answers: [
            { text: "500 Hz", correct: false },
            { text: "2000 Hz", correct: false },
            { text: "1000 Hz", correct: true },
            { text: "10.000 Hz", correct: false }
        ],
        image: "Zwischensignal_FFM-Hoechst_Schnee.jpg"
    },
    {
        question: "Wofür steht die Abkürzung BÜBM?",
        answers: [
            { text: "Bahnübergangsbelegmelder", correct: true },
            { text: "Bahnübergangsbesetztmelder", correct: false },
            { text: "Bahnübergangbelegtmacher", correct: false },
            { text: "Bahnbelegtübergangsmelder", correct: false }
        ],
        image: "Bahnübergang-de.jpg"
    },
    {
        question: "Wo wird der Zungenaufschlag an einer Weiche gemessen?",
        answers: [
            { text: "An der Zungenwurzel", correct: false },
            { text: "Genau in der Mitte der Weiche", correct: false },
            { text: "Auf Höhe der Verschlussklammerschraube", correct: true },
            { text: "Ein Schwellenfach vor dem Weichenanfang", correct: false }
        ],
        image: "Doppelkreuzungsweichen_im_Rbf_München_Nord.jpg"
    },
    {
        question: "Wofür steht die Abkürzung Betra?",
        answers: [
            { text: "Betriebs-/ Befehlsanweisung", correct: false },
            { text: "Betriebs- und Bauanweisung", correct: true },
            { text: "Bahn- und Betriebsanweisung", correct: false },
            { text: "Bund- und Bahnanweisung", correct: false }
        ],
        image: "Baustelle_S-Bahn_Schönhauser_Allee,_Berlin_(7047921593).jpg"
    },
    {
        question: "Wie schnell fährt ein Zug maximal mit dem Ausrüstungsstandard PZB 90?",
        answers: [
            { text: "320 km/h", correct: false },
            { text: "160 km/h", correct: true },
            { text: "100 km/h", correct: false },
            { text: "200 km/h", correct: false }
        ],
        image: "146_271_Köln_Hauptbahnhof_2015-12-17-02.jpg"
    },
    {
        question: "Welches ist keine Vorblockbedingung?",
        answers: [
            { text: "Zug muss gefahren sein", correct: false },
            { text: "Ausfahrsignal muss in Fahrt gestanden haben", correct: false },
            { text: "Ausfahrsignal sollte in Fahrt gestanden haben", correct: true },
            { text: "Ausfahrsignal muss wieder in Halt stehen", correct: false }
        ],
        image: "Mechanisches_Stellwerk_Bahnhof_Fridingen_(2018).jpg"
    },
    {
        question: "Welches ist keine Rückblockbedingung?",
        answers: [
            { text: "Zug muss gefahren sein", correct: false },
            { text: "Einfahrsignal sollte in Fahrt gestanden haben", correct: false },
            { text: "Vorblock ist eventuell eingegangen", correct: true },
            { text: "Zug muss mit Zg 2 an der Signalzuschlussstelle vorbeigefahren sein", correct: false }
        ],
        image: "Mechanisches_Stellwerk_Bahnhof_Fridingen_(2018).jpg"
    },
    {
        question: "Mit welchen Signalen werden vorübergehende Langsamfahrstellen gekennzeichnet?",
        answers: [
            { text: "Lf 1, Lf 2, Lf 3", correct: true },
            { text: "Lf 3, Lf 4, Lf 7", correct: false },
            { text: "Lf 6, Lf 7", correct: false },
            { text: "Lf 7, Lf 8, Lf 9", correct: false }
        ],
        image: "J32_957_Bft_Leipzig_Nord,_Sig_ZS301,_N302.jpg"
    },
    {
        question: "Welche Temperatur in Grad Celsius wäre optimal für den Betrieb von Batterien?",
        answers: [
            { text: "15 °C ± 5 K", correct: false },
            { text: "20 °C ± 5 K", correct: true },
            { text: "25 °C ± 3 °C", correct: false },
            { text: "30 °C ± 7 °C", correct: false }
        ],
        image: "Storage_battery_manual.jpg"
    },
    {
        question: "In welche zwei Kategorien lässt sich der unmittelbare Flankenschutz einteilen?",
        answers: [
            { text: "unmittelbar und mittelbar", correct: false },
            { text: "betrieblicher und technischer", correct: false },
            { text: "zeitlicher und räumlicher", correct: false },
            { text: "direkter und indirekter", correct: true }
        ],
        image: "Nahverkehrszüge_Frankfurt.jpg"
    },
    {
        question: "In welchem Abstand stehen Vorsignale zu Hauptsignale?",
        answers: [
            { text: "Bremswegabstand", correct: true },
            { text: "2500 m", correct: false },
            { text: "4000 m", correct: false },
            { text: "11000 m", correct: false }
        ],
        image: "Zwischensignal_FFM-Hoechst_Schnee.jpg"
    },
    {
        question: "Mit welchen Signalen werden ständige Langsamfahrstellen gekennzeichnet?",
        answers: [
            { text: "Lf 1, Lf 2, Lf 3", correct: false },
            { text: "Lf 12, Lf 13", correct: false },
            { text: "Lf 6, Lf 7", correct: true },
            { text: "gar nicht", correct: false }
        ],
        image: "J32_957_Bft_Leipzig_Nord,_Sig_ZS301,_N302.jpg"
    },
    {
        question: "Welche Angaben sind in einer BETRA unter dem Punkt 4.2 zu finden?",
        answers: [
            { text: "technisch Berechtigter", correct: true },
            { text: "Zuständiger Fdl", correct: false },
            { text: "Sperrzeiten", correct: false },
            { text: "Langsamfahrstelle", correct: false }
        ],
        image: "L03_190_Abzw_Anger,_Weiche_02.jpg"
    },
    {
        question: "Welches der folgenden Systeme ist ein Signalsystem der DB InfraGO?",
        answers: [
            { text: "Ks-System", correct: false },
            { text: "Ho-System", correct: true },
            { text: "Ko-System", correct: false },
            { text: "K/V-System", correct: false }
        ],
        image: "Ks-Mehrabschnittssignal.jpg"
    },
    {
        question: "Welche Sendefrequenz hat ein ZP D 43 von Siemens?",
        answers: [
            { text: "9,86 kHz", correct: false },
            { text: "24 kHz", correct: false },
            { text: "43 kHz", correct: true },
            { text: "6,52 kHz", correct: false }
        ],
        image: "Achszähler.jpg"
    },
    {
        question: "Mit welcher maximalen Geschwindigkeit kann ein Bahnübergang von Zügen befahren werden?",
        answers: [
            { text: "160 km/h", correct: true },
            { text: "80 km/h", correct: false },
            { text: "100 km/h", correct: false },
            { text: "250 km/h", correct: false }
        ],
        image: "Bahnübergang-de.jpg"
    },
    {
        question: "Was passiert wenn ein Zug eine 2000 Hz-Beeinflussung durch einen Gleismagneten bekommt?",
        answers: [
            { text: "Der Tf muss innerhalb von 23 Sekunden auf 85 km/h herunterbremsen", correct: false },
            { text: "Der Tf muss innerhalb von 153 m auf 45 km/h herunterbremsen", correct: false },
            { text: "Der Zug wird zwangsgebremst", correct: true },
            { text: "Der Tf muss die Wachsamkeitstaste bedienen", correct: false }
        ],
        image: "J27_099_Bf_Twistesee,_Ausfsig_N1,_N2.jpg"
    },
    {
        question: "Was kann ein weißes Zusatzlicht am Vorsignal bedeuten?",
        answers: [
            { text: "Um mehr als 5 % verkürzter Bremswegabstand", correct: true },
            { text: "Signal betrieblich abgeschaltet", correct: false },
            { text: "Mastschild fehlt", correct: false },
            { text: "Das Signalsystem ändert sich am nächsten Signal", correct: false }
        ],
        image: "Ks_Ks2+Zusatzlicht_(oben).svg"
    },
    {
        question: "In welchen 5 Schritten erfolgt das Umstellen einer Weiche?",
        answers: [
            { text: "1. Weichenüberwachung abschalten 2. Drehsinn ändern 3. Stellstrom anschalten 4. Bei Erreichen der Endlage Stellstrom abschalten 5. Überwachung wieder einschalten", correct: true },
            { text: "1. Stellstrom anschalten 2. Weichenüberwachung abschalten 3. Drehsinn ändern 4. Überwachung wieder einschalten 5. Stellstrom abschalten", correct: false },
            { text: "1. Weiche abschalten 2. Weiche umkurbeln 3. Weiche in Endlage bringen 4. Weiche zuschalten 5. Fahrdienstleiter anrufen", correct: false },
            { text: "1. Fahrdienstleiter anrufen 2. Small-Talk führen 3. Weiche umstellen lassen 4. Weiche reversieren 5. Gespräch beenden", correct: false }
        ],
        image: "Nahverkehrszüge_Frankfurt.jpg"
    },
    {
        question: "Mit welcher Geschwindigkeit darf eine Weiche, mit einem Zweiggleisradius von 190 m, im abzweigenden Gleis maximal befahren werden?",
        answers: [
            { text: "40 km / h", correct: true },
            { text: "60 km / h", correct: false },
            { text: "80 km / h", correct: false },
            { text: "100 km / h", correct: false }
        ],
        image: "L03_190_Abzw_Anger,_Weiche_02.jpg"
    },
    {
        question: "Wie schnell darf ein Zug bei Hp1 + ZS3 '10' fahren?",
        answers: [
            { text: "10 km/h", correct: false },
            { text: "100 km/h", correct: true },
            { text: "40 km/h", correct: false },
            { text: "50 km/h", correct: false }
        ],
        image: "Zwischensignal_FFM-Hoechst_Schnee.jpg"
    },
    {
        question: "Was versteht man unter punktförmiger Gleisfreimeldung?",
        answers: [
            { text: "Achszähltechnik", correct: true },
            { text: "Gleismagnete", correct: false },
            { text: "Videoüberwachung", correct: false },
            { text: "Blockwärter", correct: false }
        ],
        image: "146_271_Köln_Hauptbahnhof_2015-12-17-02.jpg"
    },
    {
        question: "Was ist die Grundstellung einer Weiche in einem mechanischen Stellwerk?",
        answers: [
            { text: "Zur Fahrt nach links", correct: false },
            { text: "Zur Fahrt nach Rechts", correct: false },
            { text: "Hauptsächlich benötigte Lage", correct: true },
            { text: "Gerader Strang", correct: false }
        ],
        image: "Mechanisches_Stellwerk_Bahnhof_Fridingen_(2018).jpg"
    },
    {
        question: "Was für eine Art Schutz kann eine Flankenschutzweiche bieten?",
        answers: [
            { text: "Unmittelbar, direkter Flankenschutz", correct: true },
            { text: "Unmittelbar, indirekter Flankenschutz", correct: false },
            { text: "Mittelbarer Flankenschutz", correct: false },
            { text: "Eigenzwieschutz", correct: false }
        ],
        image: "Doppelkreuzungsweichen_im_Rbf_München_Nord.jpg"
    },
    {
        question: "Wann braucht man eine Gefahrenraumfreimeldung am Bahnübergang?",
        answers: [
            { text: "Wenn es sich um einen nicht technisch gesicherten Bahnübergang handelt", correct: false },
            { text: "Wenn technisch nicht ausgeschlossen ist, dass Züge auf dem BÜ zum Stehen kommen könnten", correct: false },
            { text: "Wenn es sich um eine Bahnübergangssicherungsanlagen mit Vollabschluss handelt", correct: true },
            { text: "Wenn Züge planmäßig auf dem BÜ zum Stehen kommen", correct: false }
        ],
        image: "Bahnübergang-de.jpg"
    },
    {
        question: "Darf ein Triebfahrzeugführer wenn er das Ersatzsignal sieht am haltzeigenden Hauptsignal vorbeifahren?",
        answers: [
            { text: "Ja", correct: true },
            { text: "Nein", correct: false },
            { text: "Das ist abhängig vom Mastschild", correct: false },
            { text: "Das ist abhängig von der Stellwerkstechnik", correct: false }
        ],
        image: "Triebfahrzeugführer_IC-Steuerwagen.jpg"
    },
    {
        question: "Wie darf eine LST-Fachkraft den Fahrdienstleiter bei der erschwerten Achszählgrundstellung mit einer Motorzählwerksgruppe unterstützen?",
        answers: [
            { text: "P1-Relais und/oder P2-Relais andrücken", correct: true },
            { text: "R-Relais andrücken", correct: false },
            { text: "Fm-Relais andrücken", correct: false },
            { text: "Ü1-Relais und/oder Ü2-Relais andrücken", correct: false }
        ],
        image: "Elektromechanisches_Motorzählwerk_für_Achszähler_von_Siemens.jpg"
    },
    {
        question: "Wofür steht die Abkürzung SIMIS C?",
        answers: [
            { text: "Sicheres Mikrocomputersystem von Siemens Typ C", correct: true },
            { text: "Serielles Interface Mit Integrierter Sicherheitsebene von Conrad", correct: false },
            { text: "Sicherheit Mischsystem Commercial", correct: false },
            { text: "Signaltechnische Microcontrollersteuerung Version C", correct: false }
        ],
        image: "Elektronisches_Stellwerk_Köln-Betriebsbahnhof-3887.jpg"
    },
    {
        question: "Was gehört zu einer Einfahrzugfahrstraße?",
        answers: [
            { text: "Fahrweg, Durchrutschweg, Flankenschutz", correct: true },
            { text: "Fahrweg, Gefahrenpunktabstand, Flankenschutz", correct: false },
            { text: "Zug, Signal, Weiche", correct: false },
            { text: "Fahrweg, Schutzraum, Flankenschutz", correct: false }
        ],
        image: "Einfahrt_der_Dreiseenbahn_in_den_Bahnhof_Titisee.jpg"
    },
    {
        question: "Bevor ich einen DMK (Doppelmagnetschienenkontakt) ausbaue…",
        answers: [
            { text: "… grabe ich ein tiefes Loch in den Schotter (ca. 30 cm unter Schwellenunterkante)", correct: false },
            { text: "… baue ich die Anschlussseile ab", correct: false },
            { text: "…… lege ich ein Kurzschlusseisen auf den DMK", correct: true },
            { text: "… prüfe ich die Kontaktweglänge und notiere diese", correct: false }
        ],
        image: "Schienenkontakt_Siemens_DMK.jpg"
    },
    {
        question: "Wenn ich einen 2000 Hz-Gleismagneten kurzschließe…",
        answers: [
            { text: "… ist dieser dauerhaft wirksam", correct: false },
            { text: "… ist dieser dauerhaft unwirksam", correct: true },
            { text: "…passiert nichts", correct: false },
            { text: "… habe ich ihn richtig angeschlossen", correct: false }
        ],
        image: "J27_099_Bf_Twistesee,_Ausfsig_N1,_N2.jpg"
    },
    {
        question: "Was erwartet einen Triebfahrzeugführer wenn er an einem Mehrabschnittssignal ein blinkendes grünes Licht sieht, mit einer gelben '4' unterhalb des Signalschirms?",
        answers: [
            { text: "Er darf mit 160 km/h (bzw. nach Fahrplangeschwindigkeit) am Signal vorbeifahren, muss aber am nächsten Signal auf 40 km/h heruntergebremst haben", correct: true },
            { text: "Er darf mit 160 km/h (bzw. nach Fahrplangeschwindigkeit) am Signal vorbeifahren, muss aber am nächsten Signal zum Stehen kommen", correct: false },
            { text: "Er muss zum Stehen kommen, darf aber in 4 Sekunden weiterfahren", correct: false },
            { text: "Er darf mit 40 km/h am Signal vorbeifahren, muss aber am nächsten Signal zum Stehen kommen", correct: false }
        ],
        image: "Ks-Mehrabschnittssignal.jpg"
    },
    {
        question: "Welche Signalbegriffe kann ein Lichtsperrsignal anzeigen?",
        answers: [
            { text: "Sh 0 und Sh 1", correct: false },
            { text: "Hp 0 und Sh 1", correct: true },
            { text: "Hp 0 und Hp 1", correct: false },
            { text: "Ks 0 und Ks 1", correct: false }
        ],
        image: "WuS_Logo_L.jpg"
    },
    {
        question: "Welches elektronische Bauteil wandelt Spannungsänderungen in Frequenzänderungen im ZP 70 M um?",
        answers: [
            { text: "Bandpass", correct: false },
            { text: "Trigger", correct: false },
            { text: "Spannungskonstanter", correct: false },
            { text: "Astabiler Multivibrator", correct: true }
        ],
        image: "Achszähler.jpg"
    },
    {
        question: "Was kann ein weißes Zusatzlicht am Vorsignal bedeuten?",
        answers: [
            { text: "Es handelt sich um ein Vorsignalwiederholer", correct: true },
            { text: "Es gibt kein Zusatzlich am Vorsignal", correct: false },
            { text: "Ne 2-Tafel links aufgestellt", correct: false },
            { text: "Signal betrieblich abgeschaltet", correct: false }
        ],
        image: "Ks_Ks2+Zusatzlicht_(unten).svg"
    },
    {
        question: "In einem Spurplan Stellwerk von Siemens ist eine Weichengruppe defekt. Im Nachbarstellwerk auch Spurplan aber von Lorenz gibt es eine Ersatzgruppe. Kann ich diese nutzen?",
        answers: [
            { text: "Ja, die Gruppen sind eins zu eins die gleichen", correct: false },
            { text: "Ja, aber erst nach Umbau nach Ril 892.0205 A27", correct: false },
            { text: "Nein, das ist nicht möglich", correct: true },
            { text: "Ja, aber die Kontakte der Relais Ü+ und Ü- müssen dauerhaft mit einem Schrumpfschlauch isoliert werden", correct: false }
        ],
        image: "Technik_Relaisstellwerk_Köln_Kf-4038.jpg"
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
        resultText = "Weichen perfekt eingestellt! Du beherrschst das Bahnwissen wie ein Profi!";
        buttonText = 'Preis abholen';
        buttonOnClick = () => {
            window.parent.postMessage('prizeCollected', '*');
        };
    } else if (correctAnswers >= 7) {
        imageUrl = 'LOGO.svg';
        resultText = "Du bist auf dem Überholgleis, das war richtig gut!";
        buttonText = 'Zurück zum Start';
        buttonOnClick = () => {
            window.parent.postMessage('quizFailed', '*');
        };
    } else if (correctAnswers >= 4) {
        imageUrl = 'LOGO.svg';
        resultText = "Die Ampel steht auf gelb - du hast einen soliden Start hingelegt, aber da ist noch Platz nach oben!";
        buttonText = 'Zurück zum Start';
        buttonOnClick = () => {
            window.parent.postMessage('quizFailed', '*');
        };
    } else {
        imageUrl = 'LOGO.svg';
        resultText = "Rote Ampel! Ab zu unseren Schulungen ;)";
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

    // Aktualisiere die Breite der Progress Bar
    progressBar.style.width = `${progressPercentage}%`;

    // Aktualisiere den Fortschrittstext (z.B. "1/10", "2/10")
    progressText.innerText = `${currentQuestionNumber}/${totalQuestions}`;
}
