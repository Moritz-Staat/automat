document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('userToken');
    if (!token) {
        alert('Bitte logge dich ein!');
        window.location.href = 'Fragenformular.html';
        return;
    }

    const categoryElements = document.querySelectorAll('.category');
    const categoryTitle = document.getElementById('category-title');
    const questionsRows = document.getElementById('questions-rows');
    const editModal = document.getElementById('editModal');
    const closeModal = document.getElementById('closeModal');
    const editForm = document.getElementById('editForm');
    let currentQuestionId = null;

    closeModal.addEventListener('click', () => {
        editModal.style.display = 'none';
    });

    async function fetchQuestions(category) {
        try {
            const response = await fetch('http://192.168.178.95:8100/api/collections/automat/records', {
                headers: { 'Authorization': `Bearer ${token}` },
            });

            if (response.ok) {
                const data = await response.json();
                populateQuestions(data.items, category);
            } else {
                alert('Fehler beim Abrufen der Fragen.');
            }
        } catch (error) {
            alert('Ein Fehler ist aufgetreten.');
        }
    }

    function populateQuestions(questions, category) {
        questionsRows.innerHTML = '';
        categoryTitle.textContent = `Fragen (${category.charAt(0).toUpperCase() + category.slice(1)})`;
        const filteredQuestions = questions.filter(q => q.schwierigkeit === category);

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
            questionsRows.appendChild(row);
        });
    }

    categoryElements.forEach(category => {
        category.addEventListener('click', () => {
            const selectedCategory = category.dataset.category;
            categoryElements.forEach(cat => cat.classList.remove('active'));
            category.classList.add('active');
            fetchQuestions(selectedCategory);
        });
    });

    document.addEventListener('click', async (event) => {
        const target = event.target;

        if (target.classList.contains('edit-btn')) {
            currentQuestionId = target.dataset.id;

            try {
                const response = await fetch(`http://192.168.178.95:8100/api/collections/automat/records/${currentQuestionId}`, {
                    headers: { 'Authorization': `Bearer ${token}` },
                });

                if (response.ok) {
                    const question = await response.json();
                    document.getElementById('editQuestion').value = question.frage;
                    document.getElementById('editOption1').value = question.antwort1;
                    document.getElementById('editOption2').value = question.antwort2;
                    document.getElementById('editOption3').value = question.antwort3;
                    document.getElementById('editOption4').value = question.antwort4;

                    document.querySelector(`input[name="editSchwierigkeit"][value="${question.schwierigkeit}"]`).checked = true;

                    editModal.style.display = 'block';
                } else {
                    alert('Fehler beim Abrufen der Frage.');
                }
            } catch (error) {
                alert('Ein Fehler ist aufgetreten.');
            }
        }

        if (target.classList.contains('delete-btn')) {
            const id = target.dataset.id;
            if (confirm('Möchtest du diese Frage wirklich löschen?')) {
                try {
                    const response = await fetch(`http://192.168.178.95:8100/api/collections/automat/records/${id}`, {
                        method: 'DELETE',
                        headers: { 'Authorization': `Bearer ${token}` },
                    });

                    if (response.ok) {
                        alert('Frage gelöscht!');
                        const activeCategory = document.querySelector('.category.active').dataset.category;
                        fetchQuestions(activeCategory);
                    } else {
                        alert('Fehler beim Löschen.');
                    }
                } catch (error) {
                    alert('Ein Fehler ist aufgetreten.');
                }
            }
        }
    });

    editForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const updatedData = {
            frage: document.getElementById('editQuestion').value,
            antwort1: document.getElementById('editOption1').value,
            antwort2: document.getElementById('editOption2').value,
            antwort3: document.getElementById('editOption3').value,
            antwort4: document.getElementById('editOption4').value,
            schwierigkeit: document.querySelector('input[name="editSchwierigkeit"]:checked').value,
        };

        try {
            const response = await fetch(`http://192.168.178.95:8100/api/collections/automat/records/${currentQuestionId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(updatedData),
            });

            if (response.ok) {
                alert('Frage erfolgreich aktualisiert!');
                editModal.style.display = 'none';
                const activeCategory = document.querySelector('.category.active').dataset.category;
                fetchQuestions(activeCategory);
            } else {
                alert('Fehler beim Aktualisieren der Frage.');
            }
        } catch (error) {
            alert('Ein Fehler ist aufgetreten.');
        }
    });

    // Initiale Kategorie laden
    fetchQuestions('leicht');
    document.querySelector('[data-category="leicht"]').classList.add('active');
});
