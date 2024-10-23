document.getElementById('questionForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const frage = document.getElementById('question').value;
    const antwort1 = document.getElementById('option1').value;
    const antwort2 = document.getElementById('option2').value;
    const antwort3 = document.getElementById('option3').value;
    const antwort4 = document.getElementById('option4').value;

    const data = {
        frage,
        antwort1,
        antwort2,
        antwort3,
        antwort4,
    };

    try {
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
            console.error('Fehler:', errorText);
            alert('Fehler beim Hinzufügen der Frage: ' + errorText);
        }
    } catch (error) {
        console.error('Fehler:', error);
        alert('Ein Fehler ist aufgetreten.');
    }
});
