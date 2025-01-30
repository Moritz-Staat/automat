document.getElementById('logo').onclick = function () {
    document.getElementById('pinModal').style.display = 'block';
    document.getElementById('wholepage').classList.add('blurred');
};

document.getElementsByClassName('close')[0].onclick = function () {
    closeModal();
};

window.onclick = function (event) {
    if (event.target == document.getElementById('pinModal')) {
        closeModal();
    }
};

document.getElementById('submitPin').onclick = function () {
    const pinInput = document.getElementById('pinInput');

    if (pinInput.value === '151107') {
        let kontakt = localStorage.getItem('kontaktdaten');
        if (kontakt == null) {
            kontakt = 1;
        } else {
            kontakt = parseInt(kontakt);
            kontakt += 1;
        }
        localStorage.setItem('kontaktdaten', kontakt);
        doPost('1', 'http://192.168.0.120/Expert');
        closeModal();
    }
};

document.querySelectorAll('#numpad .num').forEach(button => {
    button.onclick = function () {
        const pinInput = document.getElementById('pinInput');
        pinInput.value += button.innerText;
    };
});

document.getElementById('backspace').onclick = function () {
    const pinInput = document.getElementById('pinInput');
    pinInput.value = pinInput.value.slice(0, -1);
};

function closeModal() {
    document.getElementById('pinInput').value = '';
    document.getElementById('pinModal').style.display = 'none';
    document.getElementById('wholepage').classList.remove('blurred');
}

let timeout = undefined;

window.addEventListener('message', (event) => {
    if (event.data === 'prizeCollected') {
        let level3wins = localStorage.getItem('level3win');
        if (level3wins == null) {
            level3wins = 1;
        } else {
            level3wins = parseInt(level3wins);
            level3wins += 1;
        }
        localStorage.setItem('level3win', level3wins.toString());
        doPost('1', 'http://192.168.0.120/Hyper');
        timeout = setTimeout(() => {
            timeout = undefined;
            window.location.href = '../Automat.html';
        }, 1000);
    } else if (event.data === 'quizFailed') {
        let loses = localStorage.getItem('loses');
        if (loses == null) {
            loses = 1;
        } else {
            loses = parseInt(loses);
            loses += 1;
        }
        localStorage.setItem('loses', loses.toString());
        doPost('1', 'http://192.168.0.120/Register');
        timeout = setTimeout(() => {
            timeout = undefined;
            window.location.href = '../Automat.html';
        }, 1000);
    }
});

function doPost(param, url) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url + "?param=" + param, true);
    xhr.send();
}
