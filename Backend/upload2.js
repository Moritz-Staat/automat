import PocketBase from 'pocketbase';
import fs from 'fs';
import csv from 'csv-parser';

const pb = new PocketBase('http://10.1.10.147:8100');

// Lese die CSV-Datei und extrahiere die Fragen
function leseFragenAusCSV(dateipfad) {
    return new Promise((resolve, reject) => {
        const fragen = [];
        fs.createReadStream(dateipfad)
            .pipe(csv())
            .on('data', (row) => {
                console.log('CSV-Daten Zeile:', row);  // Protokolliere jede Zeile
                fragen.push(row);
            })
            .on('end', () => resolve(fragen))
            .on('error', reject);
    });
}

async function uploadFragenMitBilder() {
    const fragenMitAntwortenUndBilder = await leseFragenAusCSV('fragen2.csv');

    try {
        for (const frage of fragenMitAntwortenUndBilder) {
            console.log('Frage-Daten vor dem Hochladen:', frage);  // Protokolliere die Frage-Daten

            let bildid = null;

            // Wenn ein Bildpfad vorhanden ist, lade das Bild hoch
            if (frage.bildpath) {
                try {
                    const bildBuffer = fs.readFileSync(frage.bildpath);
                    const bildFile = new File([bildBuffer], frage.bildpath.split('/').pop(), { type: 'image/jpeg' });

                    const bildRecord = await pb.collection('bilder').create({
                        fragenbild: bildFile,
                    });

                    console.log('Bild erfolgreich hochgeladen:', bildRecord);
                    bildid = bildRecord.id;
                } catch (error) {
                    console.error(`Fehler beim Hochladen des Bildes für Frage "${frage.frage}":`, error);
                }
            }

            // Protokolliere die gesendeten Daten
            const frageData = {
                frage: frage.frage,
                antwort1: frage.antwort1,
                antwort2: frage.antwort2,
                antwort3: frage.antwort3,
                antwort4: frage.antwort4,
                bildid: bildid, // Bild-ID wird gesetzt
                schwierigkeit: frage.schwierigkeit,
            };

            console.log('Frage-Daten, die hochgeladen werden:', frageData);

            // Frage in der Datenbank erstellen, mit oder ohne Bild-ID
            const frageRecord = await pb.collection('automat').create(frageData);
            console.log('Frage erfolgreich erstellt:', frageRecord);
        }
    } catch (error) {
        console.error('Fehler beim Erstellen der Fragen mit Bild-IDs:', error);
    }
}

// Starte den Upload-Prozess
uploadFragenMitBilder();
