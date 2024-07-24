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
    timeout = setTimeout(showScreensaver, 10000); // 10 Sekunden
}

document.addEventListener('mousemove', resetTimer);
document.addEventListener('keydown', resetTimer);

resetTimer();

document.addEventListener('DOMContentLoaded', function() {
    var openPopupImg = document.getElementById('openPopup');
    var closePopupBtn = document.getElementById('closePopup');
    var popup = document.getElementById('popupForm');

    openPopupImg.addEventListener('click', function() {
        popup.style.display = 'block';
    });

    closePopupBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    // Schließen beim Klicken außerhalb des Popups
    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });

    // Form submission handler (prevent default form submission for demo purposes)
    document.getElementById('popupFormContent').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Formular abgesendet!');
        popup.style.display = 'none';
    });
});
