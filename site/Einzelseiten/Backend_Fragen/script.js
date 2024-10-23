document.getElementById('questionForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const frage = document.getElementById('question').value;
    const antwort1 = document.getElementById('option1').value;
    const antwort2 = document.getElementById('option2').value;
    const antwort3 = document.getElementById('option3').value;
    const antwort4 = document.getElementById('option4').value;
    const imageFile = document.getElementById('image').files[0];

    // Funktion zum Hochladen des Bildes
    async function uploadImage(file) {
        const formData = new FormData();
        formData.append('fragenbild', file); // Das Feld für das Bild

        const response = await fetch('http://127.0.0.1:8090/api/collections/bilder/records', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const imageData = await response.json();
            return imageData.id; // Bild-ID zurückgeben
        } else {
            throw new Error('Fehler beim Hochladen des Bildes');
        }
    }

    try {
        const imageId = await uploadImage(imageFile); // Bild hochladen und ID erhalten

        const data = {
            frage,
            antwort1,
            antwort2,
            antwort3,
            antwort4,
            bildid: imageId // Bild-ID zur Frage hinzufügen
        };

        const response = await fetch('http://127.0.0.1:8090/api/collections/automat/records', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert('Frage erfolgreich hinzugefügt!');
            document.getElementById('questionForm').reset();
        } else {
            const errorText = await response.text();
            alert('Fehler beim Hinzufügen der Frage: ' + errorText);
        }
    } catch (error) {
        alert('Ein Fehler ist aufgetreten: ' + error.message);
    }
});
