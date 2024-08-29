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
        doPost('1', 'http://192.168.0.120/Register');
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

let timeout = undefined
/* Nach Beenden des Quizzes Zählen, Verlinken zur Startseite und Preis ausspucken*/
window.addEventListener('message', (event) => {
    /*
     if (timeout != undefined) {
         return
     }
     if (event.data === 'prizeCollected') {
         let level1wins = localStorage.getItem('level1win')
         if (level1wins == null) {
             level1wins = 1
         } else {
             level1wins = parseInt(level1wins)
             level1wins += 1;
         }
         localStorage.setItem('level1win', level1wins.toString())
         doPost('1', 'http://192.168.0.120/Beginner');
         timeout=setTimeout(() => {
             timeout=undefined
             window.location.href = '../Automat.html';
         }, 3000);
     } else if (event.data === 'quizFailed') {
         let loses = localStorage.getItem('loses')
         if (loses == null) {
             loses = 1
         } else {
             loses = parseInt(loses)
             loses += 1;
         }
         localStorage.setItem('loses', loses.toString())
         doPost('1', 'http://192.168.0.120/Trostpreis');
         timeout=setTimeout(() => {
             timeout=undefined
             window.location.href = '../Automat.html';
         }, 3000);
     } */
    show(event.data)
});

function doPost(param, url) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url + "?param=" + param, true);
    xhr.send();
}
let _data;
function show(data) {
    document.getElementById('Preisauswahl').classList.remove('preise');
    _data=data;
    document.getElementById('Preisauswahl').classList.add('preiseshown');
}

premiumButton.addEventListener('click', () => {
    // Ändere den Popup-Inhalt für das Premium-Angebot
    popupText.textContent = "Melde dich bei unserem Stand und wir geben dir dein Premium Geschenk";
    popupGif.style.display = 'none';
    popupButtons.style.display = 'none';
    timeout = setTimeout(() => {
        timeout = undefined
        window.location.href = '../Automat.html';
    }, 3000);
});

normalButton.addEventListener('click', () => {
    if (timeout != undefined) {
        return
    }
    if (_data === 'prizeCollected') {
        let level1wins = localStorage.getItem('level1win')
        if (level1wins == null) {
            level1wins = 1
        } else {
            level1wins = parseInt(level1wins)
            level1wins += 1;
        }
        localStorage.setItem('level1win', level1wins.toString())
        doPost('1', 'http://192.168.0.120/Beginner');
        timeout = setTimeout(() => {
            timeout = undefined
            window.location.href = '../Automat.html';
        }, 3000);
    } else if (_data === 'quizFailed') {
        let loses = localStorage.getItem('loses')
        if (loses == null) {
            loses = 1
        } else {
            loses = parseInt(loses)
            loses += 1;
        }
        localStorage.setItem('loses', loses.toString())
        doPost('1', 'http://192.168.0.120/Trostpreis');
        timeout = setTimeout(() => {
            timeout = undefined
            window.location.href = '../Automat.html';
        }, 3000);
    }
    popup.style.display = 'none';
    mainContent.classList.remove('blurred');
});
