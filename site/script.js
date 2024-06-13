let timeout;

function showScreensaver() {
    document.getElementById('screensaver').classList.remove('hidden');
}

function hideScreensaver() {
    document.getElementById('screensaver').classList.add('hidden');
}

function resetTimer() {
    hideScreensaver();
    clearTimeout(timeout);
    timeout = setTimeout(showScreensaver, 10000); // 10 Sekunden
}

document.addEventListener('mousemove', resetTimer);
document.addEventListener('keydown', resetTimer);

resetTimer(); // Timer beim Laden der Seite starten
