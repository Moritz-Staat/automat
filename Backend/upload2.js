import PocketBase from 'pocketbase';
import fs from 'fs';

const pb = new PocketBase('http://10.1.10.147:8100');

// Beispiel-Daten für die Bilder (mit lokalen Pfaden)
const bilder = [
    { bildname: "Bild 1", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/1.jpg" },
    { bildname: "Bild 2", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/2.jpg" },
];

async function uploadBilder() {
    const bildIdMap = {};
    try {
        for (const bild of bilder) {
            const bildBuffer = fs.readFileSync(bild.bildpath);

            const bildFile = new File([bildBuffer], bild.bildname, { type: 'image/jpeg' });

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
        bildname: "Bild 1",
        bildid: null,
        schwierigkeit: "mittel"
    },
    {
        frage: "Was ist die Hauptstadt von Deutschland?",
        antwort1: "Berlin",
        antwort2: "Hamburg",
        antwort3: "München",
        antwort4: "Frankfurt",
        bildname: "Bild 2",
        bildid: null,
        schwierigkeit: "leicht"
    },
    {
        frage: "Was ist die Hauptstadt von Italien?",
        antwort1: "Rom",
        antwort2: "Mailand",
        antwort3: "Venedig",
        antwort4: "Florenz",
        bildname: "Bild 2",
        bildid: null,
        schwierigkeit: "leicht"
    },

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
