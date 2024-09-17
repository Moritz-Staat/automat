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
