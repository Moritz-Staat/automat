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


// Zwischenspeicherung
function showScreensaver() {
    const screensaver = document.getElementById('screensaver');
    const video = document.getElementById('screensaverVideo');

    // Liste der Videos
    const videos = ['../Images/RZ_ChrisOmat_Bildschirmschonervideo_Einzeln_v1.mp4', '../Images/RZ_ChrisOmat_Bildschirmschonervideo_Einzeln_v2.mp4', '../Images/RZ_ChrisOmat_Bildschirmschonervideo_Einzeln_v3.mp4', '../Images/RZ_ChrisOmat_Bildschirmschonervideo_Einzeln_v4.mp4', '../Images/RZ_ChrisOmat_Bildschirmschonervideo_Einzeln_v5.mp4', '../Images/RZ_ChrisOmat_Bildschirmschonervideo_Einzeln_v6.mp4', '../Images/RZ_ChrisOmat_Bildschirmschonervideo_Einzeln_v7.mp4', '../Images/RZ_ChrisOmat_Bildschirmschonervideo_Einzeln_v8.mp4', '../Images/RZ_ChrisOmat_Bildschirmschonervideo_Einzeln_v9.mp4', '../Images/RZ_ChrisOmat_Bildschirmschonervideo_Einzeln_v10.mp4'];

    // Zufällig eines der Videos auswählen
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];

    // Das ausgewählte Video in den Video-Element setzen
    video.src = randomVideo;

    screensaver.classList.remove('hidden');
    video.play();
}





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
    timeout = setTimeout(showScreensaver, 5000); // 5 Sekunden
}

// Event-Listener nur für den Screensaver hinzufügen
const screensaver = document.getElementById('screensaver');

screensaver.addEventListener('click', function (event) {
    // Screensaver verstecken, wenn darauf geklickt wird
    hideScreensaver();
    event.preventDefault(); // Verhindert Standardaktion auf Screensaver-Klick
});

// Standard-Interaktionen auf der Seite
document.addEventListener('mousemove', resetTimer);
document.addEventListener('keydown', resetTimer);
document.addEventListener('touchstart', resetTimer);

resetTimer();
