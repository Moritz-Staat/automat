let timeout;

function showScreensaver() {
    const screensaver = document.getElementById('screensaver');
    const video = document.getElementById('screensaverVideo');
    screensaver.classList.remove('hidden');
    video.play();
}

function hideScreensaver() {
    const screensaver = document.getElementById('screensaver');
    const video = document.getElementById('screensaverVideo');
    screensaver.classList.add('hidden');
    video.pause();
    video.currentTime = 0;
}

function resetTimer() {
    hideScreensaver();
    clearTimeout(timeout);
    timeout = setTimeout(showScreensaver, 20000000); // 10 Sekunden
}

document.addEventListener('mousemove', resetTimer);
document.addEventListener('keydown', resetTimer);

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
        alert('PIN korrekt! Relais wird ausgelöst.');
        doPost('1', 'http://192.168.0.120/Register');
        closeModal();
    } else if (pinInput.value === '1111') {
        localStorage.clear()
    } else if (pinInput.value === '258') {
        const data = {
            level1: getFromLocalStorage('level1wins'), /*Andere Level darunter*/
            level2: getFromLocalStorage('level2wins'),
            level3: getFromLocalStorage('level3wins'),
            loses: getFromLocalStorage('loses'),
        }
        alert('Level1Stand:' + data.level1 + '\nLevel2Stand:' + data.level2 + '\nLevel3Stand:' + data.level3 + '\nTrostpreise:' + data.loses);
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
        level1: getFromLocalStorage('level1wins'), /*Andere Level darunter*/
        level2: getFromLocalStorage('level2wins'),
        level3: getFromLocalStorage('level3wins'),
        loses: getFromLocalStorage('loses'),
    }
    if (data.level1 > 39 || data.level2 > 39 || data.level3 > 39 || data.loses > 39) {
        document.getElementById('zählstand').src = "../images/orangebirne.svg"
    } else if (data.level1 > 39 || data.level2 > 49 || data.level3 > 49 || data.loses > 49) {
        document.getElementById('zählstand').src = "../images/rotebirne.svg"
    } else {
        document.getElementById('zählstand').src = "../images/grünebirne.svg"
    }
}
birnenwechsler()