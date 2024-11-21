document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('userToken');
    if (!token) {
        alert('Bitte logge dich ein!');
        window.location.href = 'Fragenformular.html';
        return;
    }

    async function fetchQuestions() {
        try {
            const response = await fetch('http://192.168.178.95:8100/api/collections/automat/records', {
                headers: { 'Authorization': `Bearer ${token}` },
            });

            if (response.ok) {
                const data = await response.json();
                populateTables(data.items);
            } else {
                alert('Fehler beim Abrufen der Fragen.');
            }
        } catch (error) {
            console.error(error);
            alert('Ein Fehler ist aufgetreten.');
        }
    }

    function populateTables(questions) {
        ['leicht', 'mittel', 'schwer'].forEach(level => {
            const tbody = document.getElementById(`${level}-rows`);
            tbody.innerHTML = '';
            const filteredQuestions = questions.filter(q => q.schwierigkeit === level);
            filteredQuestions.forEach(question => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${question.frage}</td>
                    <td>${question.antwort1}</td>
                    <td>${question.antwort2}</td>
                    <td>${question.antwort3}</td>
                    <td>${question.antwort4}</td>
                    <td>
                        <button class="edit-btn" data-id="${question.id}">Bearbeiten</button>
                        <button class="delete-btn" data-id="${question.id}">Löschen</button>
                    </td>
                `;
                tbody.appendChild(row);
            });
        });
    }

    fetchQuestions();

    document.addEventListener('click', async (event) => {
        const target = event.target;
        if (target.classList.contains('delete-btn')) {
            const id = target.getAttribute('data-id');
            if (confirm('Möchtest du diese Frage wirklich löschen?')) {
                try {
                    const response = await fetch(`http://192.168.178.95:8100/api/collections/automat/records/${id}`, {
                        method: 'DELETE',
                        headers: { 'Authorization': `Bearer ${token}` },
                    });
                    if (response.ok) {
                        alert('Frage gelöscht!');
                        fetchQuestions();
                    } else {
                        alert('Fehler beim Löschen.');
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        }
    });
});
