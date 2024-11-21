// Variable, um das Token nach dem Login zu speichern
let userToken = null;

// Elemente holen
const loginFormContainer = document.getElementById('loginFormContainer');
const questionFormContainer = document.getElementById('questionFormContainer');

// Login-Formular-Event-Listener
document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://192.168.178.95:8100/api/collections/users/auth-with-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                identity: email,
                password: password
            }),
        });

        if (response.ok) {
            const data = await response.json();
            userToken = data.token;  // Token speichern

            // Erfolgsmeldung und Formular wechseln
            alert('Erfolgreich eingeloggt!');
            loginFormContainer.style.display = 'none';  // Login-Formular ausblenden
            questionFormContainer.style.display = 'block';  // Fragenformular einblenden
        } else {
            const errorText = await response.text();
            alert('Login fehlgeschlagen: ' + errorText);
        }
    } catch (error) {
        alert('Ein Fehler ist aufgetreten: ' + error.message);
    }
});

// Frageformular-Event-Listener
document.getElementById('questionForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    if (!userToken) {
        alert('Bitte logge dich ein, um eine Frage hinzuzufügen.');
        return;
    }

    const frage = document.getElementById('question').value;
    const antwort1 = document.getElementById('option1').value;
    const antwort2 = document.getElementById('option2').value;
    const antwort3 = document.getElementById('option3').value;
    const antwort4 = document.getElementById('option4').value;
    const imageFile = document.getElementById('image').files[0];

    const schwierigkeit = document.querySelector('input[name="schwierigkeit"]:checked').value;

    async function uploadImage(file) {
        const formData = new FormData();
        formData.append('fragenbild', file);

        const response = await fetch('http://192.168.178.95:8100/api/collections/bilder/records', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const imageData = await response.json();
            return imageData.id;
        } else {
            throw new Error('Fehler beim Hochladen des Bildes');
        }
    }

    try {
        const imageId = await uploadImage(imageFile);

        const data = {
            frage,
            antwort1,
            antwort2,
            antwort3,
            antwort4,
            schwierigkeit: schwierigkeit,
            bildid: imageId
        };

        const response = await fetch('http://192.168.178.95:8100/api/collections/automat/records', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`  // Token anhängen
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
alert('Erfolgreich eingeloggt!');
const choice = confirm('Möchtest du Fragen hinzufügen? Klicke auf OK. Möchtest du Fragen verwalten? Klicke auf Abbrechen.');
if (choice) {
    questionFormContainer.style.display = 'block';
} else {
    window.location.href = 'fragenverwaltung.html';
}
