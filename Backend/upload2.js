import PocketBase from 'pocketbase';
import fs from 'fs';

const pb = new PocketBase('http://10.1.10.147:8100');

// Beispiel-Daten für die Bilder (mit lokalen Pfaden)
const bilder = [
    { bildname: "Bild 1", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/1.jpg" },
    { bildname: "Bild 2", bildpath: "C:/Users/MoritzStaat/WebstormProjects/automat/Backend/Fragenbilder/2.jpg" },
    // Weitere Bilder hier
];

async function uploadBilder() {
    const bildIds = [];
    try {
        for (const bild of bilder) {
            const bildBuffer = fs.readFileSync(bild.bildpath);

            const bildFile = new File([bildBuffer], bild.bildname, { type: 'image/jpeg' });

            const bildRecord = await pb.collection('bilder').create({
                fragenbild: bildFile,
            });

            console.log('Bild erfolgreich hochgeladen:', bildRecord);
            bildIds.push(bildRecord.id);
        }
    } catch (error) {
        console.error('Fehler beim Hochladen der Bilder:', error);
    }
    return bildIds;
}

const fragenMitAntwortenUndBilder = [
    {
        frage: "Was ist die Hauptstadt von Frankreich?",
        antwort1: "Paris",
        antwort2: "London",
        antwort3: "Berlin",
        antwort4: "Madrid",
        bildid: null, // Platzhalter für Bild-ID
        schwierigkeit: "mittel"
    },
    {
        frage: "Was ist die Hauptstadt von Deutschland?",
        antwort1: "Berlin",
        antwort2: "Hamburg",
        antwort3: "München",
        antwort4: "Frankfurt",
        bildid: null, // Platzhalter für Bild-ID
        schwierigkeit: "leicht"
    },
];

async function uploadFragenMitBilder() {
    const bildIds = await uploadBilder();

    try {
        for (let i = 0; i < fragenMitAntwortenUndBilder.length; i++) {
            fragenMitAntwortenUndBilder[i].bildid = bildIds[i];
            const frageRecord = await pb.collection('automat').create(fragenMitAntwortenUndBilder[i]);
            console.log('Frage erfolgreich erstellt:', frageRecord);
        }
    } catch (error) {
        console.error('Fehler beim Erstellen der Fragen mit Bild-IDs:', error);
    }
}
uploadFragenMitBilder();
