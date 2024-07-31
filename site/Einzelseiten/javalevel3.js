document.getElementById('logo').onclick = function() {
    document.getElementById('pinModal').style.display = 'block';
    document.getElementById('wholepage').classList.add('blurred');
};

document.getElementsByClassName('close')[0].onclick = function() {
    closeModal();
};

window.onclick = function(event) {
    if (event.target == document.getElementById('pinModal')) {
        closeModal();
    }
};

document.getElementById('submitPin').onclick = function() {
    const pinInput = document.getElementById('pinInput');
    if (pinInput.value === '151107') {
        alert('PIN korrekt! Relais wird ausgelöst.');
        doPost('1', 'http://192.168.0.120/Register');
        closeModal();
    } else {
        pinInput.classList.add('error-border');
        setTimeout(() => {
            pinInput.classList.remove('error-border');
            closeModal();
        }, 2000);
    }
};

document.querySelectorAll('#numpad .num').forEach(button => {
    button.onclick = function() {
        const pinInput = document.getElementById('pinInput');
        pinInput.value += button.innerText;
    };
});

document.getElementById('backspace').onclick = function() {
    const pinInput = document.getElementById('pinInput');
    pinInput.value = pinInput.value.slice(0, -1);
};

function doPost(param, url) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url + "?param=" + param, true);
    xhr.send();
}

function closeModal() {
    document.getElementById('pinInput').value = '';
    document.getElementById('pinModal').style.display = 'none';
    document.getElementById('wholepage').classList.remove('blurred');
}


/* Nach Beenden des Quizzes Zurück Verlinken zur Startseite*/
window.addEventListener('message', (event) => {
    if (event.data === 'prizeCollected') {
        doPost('1', 'http://192.168.0.120/Hyper');
        setTimeout(() => {
            window.location.href = '../Automat.html';
        }, 3000);
    } else if (event.data === 'quizFailed') {
        window.location.href = '../Automat.html';
    }
});

function doPost(param, url) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url + "?param=" + param, true);
    xhr.send();
}