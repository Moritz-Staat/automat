document.addEventListener('DOMContentLoaded', async () => {
    const pb = new PocketBase('http://10.1.10.204:8100'); // Verbindung zur PocketBase-Instanz
    const token = localStorage.getItem('userToken');
    if (!token) {
        showCustomAlert('Bitte logge dich ein!');
        window.location.href = 'Fragenformular.html';
        return;
    }

    // Authentifizierung mit Token
    pb.authStore.save(token, null);

    const categoryElements = document.querySelectorAll('.category');
    const categoryTitle = document.getElementById('category-title');
    const questionsRows = document.getElementById('questions-rows');
    const editModal = document.getElementById('editModal');
    const overlay = document.getElementById('overlay');
    const closeModal = document.getElementById('closeModal');
    const editForm = document.getElementById('editForm');
    const contentContainer = document.querySelector('.container');
    let currentQuestionId = null;

    function openEditModal() {
        editModal.style.display = 'block';
        overlay.style.display = 'block';
        contentContainer.classList.add('modal-active'); // Hintergrund blurren
    }

    function closeEditModal() {
        editModal.style.display = 'none';
        overlay.style.display = 'none';
        contentContainer.classList.remove('modal-active'); // Blur entfernen
    }

    closeModal.addEventListener('click', closeEditModal);
    overlay.addEventListener('click', closeEditModal);

    function showCustomAlert(message) {
        const alertBox = document.createElement('div');
        alertBox.classList.add('custom-alert');
        alertBox.innerHTML = `
            <div class="custom-alert-content">
                <p>${message}</p>
                <button id="closeAlert">OK</button>
            </div>
        `;
        document.body.appendChild(alertBox);

        document.getElementById('closeAlert').addEventListener('click', () => {
            document.body.removeChild(alertBox);
        });
    }

    async function fetchQuestions(category) {
        try {
            const records = await pb.collection('automat').getFullList(); // Abruf aller Datensätze
            console.log("Rückgabedaten:", records); // Debugging
            populateQuestions(records, category);
        } catch (error) {
            showCustomAlert('Fehler beim Abrufen der Fragen.');
        }
    }

    function populateQuestions(questions, category) {
        console.log("Alle Fragen:", questions); // Debugging
        const filteredQuestions = questions.filter(q => q.schwierigkeit.toLowerCase() === category.toLowerCase());
        console.log("Gefilterte Fragen:", filteredQuestions); // Debugging

        questionsRows.innerHTML = '';
        categoryTitle.textContent = `Fragen (${category.charAt(0).toUpperCase() + category.slice(1)})`;

        filteredQuestions.forEach(question => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${question.frage}</td>
                <td>${question.antwort1}</td>
                <td>${question.antwort2}</td>
                <td>${question.antwort3}</td>
                <td>${question.antwort4}</td>
                <td>
                    <button class="edit-btn" data-id="${question.id}">
                        <img src="editieren.svg" alt="Bearbeiten">
                    </button>
                    <button class="delete-btn" data-id="${question.id}">
                        <img src="löschen.svg" alt="Löschen">
                    </button>
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

        if (target.closest('.edit-btn')) {
            currentQuestionId = target.closest('.edit-btn').dataset.id;

            try {
                const record = await pb.collection('automat').getOne(currentQuestionId);
                console.log("Datensatz für Bearbeitung:", record);

                document.getElementById('editQuestion').value = record.frage;
                document.getElementById('editOption1').value = record.antwort1;
                document.getElementById('editOption2').value = record.antwort2;
                document.getElementById('editOption3').value = record.antwort3;
                document.getElementById('editOption4').value = record.antwort4;

                document.querySelector(`input[name="editSchwierigkeit"][value="${record.schwierigkeit}"]`).checked = true;

                openEditModal();
            } catch (error) {
                showCustomAlert('Fehler beim Abrufen der Frage.');
            }
        }

        if (target.closest('.delete-btn')) {
            const id = target.closest('.delete-btn').dataset.id;
            if (confirm('Möchtest du diese Frage wirklich löschen?')) {
                try {
                    await pb.collection('automat').delete(id);
                    showCustomAlert('Frage gelöscht!');
                    const activeCategory = document.querySelector('.category.active').dataset.category;
                    fetchQuestions(activeCategory);
                } catch (error) {
                    showCustomAlert('Fehler beim Löschen.');
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

        console.log("Aktualisierte Daten:", updatedData); // Debugging

        try {
            await pb.collection('automat').update(currentQuestionId, updatedData);
            showCustomAlert('Frage erfolgreich aktualisiert!');
            closeEditModal();
            const activeCategory = document.querySelector('.category.active').dataset.category;
            fetchQuestions(activeCategory);
        } catch (error) {
            console.error("Fehler beim Aktualisieren:", error); // Debugging
            showCustomAlert('Fehler beim Aktualisieren der Frage.');
        }
    });

    // Initiale Kategorie laden
    fetchQuestions('leicht');
    document.querySelector('[data-category="leicht"]').classList.add('active');
});
