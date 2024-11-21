let userToken = null;

document.addEventListener('DOMContentLoaded', () => {
    const savedToken = localStorage.getItem('userToken');
    if (savedToken) {
        userToken = savedToken;  // Token aus localStorage laden
        document.getElementById('loginFormContainer').style.display = 'none';
        document.getElementById('questionFormContainer').style.display = 'block';
    }
});

document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://192.168.178.95:8100/api/collections/users/auth-with-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ identity: email, password: password }),
        });

        if (response.ok) {
            const data = await response.json();
            userToken = data.token;
            localStorage.setItem('userToken', userToken);  // Token speichern

            alert('Erfolgreich eingeloggt!');
            document.getElementById('loginFormContainer').style.display = 'none';
            document.getElementById('questionFormContainer').style.display = 'block';
        } else {
            alert('Login fehlgeschlagen.');
        }
    } catch (error) {
        alert('Ein Fehler ist aufgetreten: ' + error.message);
    }
});

document.getElementById('questionForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const token = localStorage.getItem('userToken');
    if (!token) {
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
            bildid: imageId,
        };

        const response = await fetch('http://192.168.178.95:8100/api/collections/automat/records', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert('Frage erfolgreich hinzugefügt!');
            document.getElementById('questionForm').reset();
        } else if (response.status === 401) {
            alert('Deine Sitzung ist abgelaufen. Bitte logge dich erneut ein.');
            localStorage.removeItem('userToken');
            location.reload();
        } else {
            const errorText = await response.text();
            alert('Fehler beim Hinzufügen der Frage: ' + errorText);
        }
    } catch (error) {
        alert('Ein Fehler ist aufgetreten: ' + error.message);
    }
});

document.getElementById('logoutButton').addEventListener('click', () => {
    localStorage.removeItem('userToken');
    alert('Erfolgreich abgemeldet!');
    location.reload();
});
