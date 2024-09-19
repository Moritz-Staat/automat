let timeout;
let playCount = 0;

function showScreensaver() {
    const screensaver = document.getElementById('screensaver');
    const video = document.getElementById('screensaverVideo');

    const videos = [
        '../Images/RZ_ChrisOmat_Bildschirmschonervideo_3er_v1.mp4',
        '../Images/RZ_ChrisOmat_Bildschirmschonervideo_3er_v2.mp4',
        '../Images/RZ_ChrisOmat_Bildschirmschonervideo_3er_v3.mp4',
    ];

    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    video.src = randomVideo;

    screensaver.classList.remove('hidden');
    video.play();

    playCount = 0;

    video.removeEventListener('ended', onVideoEnded);
    video.addEventListener('ended', onVideoEnded);
}

function onVideoEnded() {
    playCount++;
    const video = document.getElementById('screensaverVideo');

    if (playCount < 2) {
        video.play();
    } else {
        hideScreensaver();
        // Startet den Timer, um den Screensaver nach 5 Sekunden erneut anzuzeigen
        resetTimer();
    }
}

function hideScreensaver() {
    const screensaver = document.getElementById('screensaver');
    const video = document.getElementById('screensaverVideo');

    video.removeEventListener('ended', onVideoEnded);

    screensaver.classList.add('hidden');
    video.pause();
    video.currentTime = 0;
}

function resetTimer() {
    hideScreensaver();
    clearTimeout(timeout);
    timeout = setTimeout(showScreensaver, 20000);
}

document.addEventListener('mousemove', resetTimer);
document.addEventListener('keydown', resetTimer);
document.addEventListener('touchstart', resetTimer);

resetTimer();


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
    } else if (pinInput.value === '1111') {
        localStorage.clear();
        doPost('1', 'http://192.168.0.120/Start');
    } else if (pinInput.value === '258') {
        const data = {
            level1: getFromLocalStorage('level1win'),
            level2: getFromLocalStorage('level2win'),
            level3: getFromLocalStorage('level3win'),
            loses: getFromLocalStorage('loses'),
            kontakt: getFromLocalStorage('kontaktdaten')
        };
        alert('Level1Stand:' + data.level1 + '\nLevel2Stand:' + data.level2 + '\nLevel3Stand:' + data.level3 + '\nTrostpreise:' + data.loses + '\nkontaktpreise: ' + data.kontakt);
    } else {
        pinInput.classList.add('error-border');
        setTimeout(() => {
            pinInput.classList.remove('error-border');
            closeModal();
        }, 2000);
    }
};


function getFromLocalStorage(key) {
    let value = localStorage.getItem(key);
    if (!value) {
        value = 0
    }
    return value;
}

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

function birnenwechsler() {
    const data = {
        level1: getFromLocalStorage('level1win'), /*Andere Level darunter*/
        level2: getFromLocalStorage('level2win'),
        level3: getFromLocalStorage('level3win'),
        loses: getFromLocalStorage('loses'),
        kontakt: getFromLocalStorage('kontaktdaten')
    }
    if (data.level1 > 3 || data.level2 > 3 || data.level3 > 3 || data.loses > 3 || data.kontakt > 3) {
        document.getElementById('zählstand').src = "../images/orangebirne.svg"
    } else if (data.level1 > 5 || data.level2 > 5 || data.level3 > 5 || data.loses > 5 || data.kontakt > 5) {
        document.getElementById('zählstand').src = "../images/rotebirne.svg"
    } else {
        document.getElementById('zählstand').src = "../images/grünebirne.svg"
    }
}

birnenwechsler()

// Überschrift Animation

window.addEventListener('load', () => {
    const h1 = document.getElementById('animated-h1');

    // Funktion zum Ausführen der Animation
    const animateHeading = () => {
        h1.classList.add('animate');

        // Entferne die Klasse nach der Dauer der Animation (2 Sekunden), um sie erneut starten zu können
        setTimeout(() => {
            h1.classList.remove('animate');
        }, 2000); // 2 Sekunden entspricht der Animationsdauer in CSS
    };

    // Starte die Animation beim ersten Laden
    animateHeading();

    // Wiederhole die Animation alle 10 Sekunden
    setInterval(animateHeading, 10000); // 10.000 Millisekunden = 10 Sekunden
});