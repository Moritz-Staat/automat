// Elemente abrufen
const popupButton = document.getElementById('popupButton');
const popup = document.getElementById('popup');
const popupText = document.getElementById('popupText');
const popupGif = document.getElementById('popupGif');
const popupButtons = document.getElementById('popupButtons');
const premiumButton = document.getElementById('premiumButton');
const normalButton = document.getElementById('normalButton');
const mainContent = document.getElementById('mainContent');


popupButton.addEventListener('click', () => {
    popup.style.display = 'block';
    mainContent.classList.add('blurred');
});


premiumButton.addEventListener('click', () => {
    // Ändere den Popup-Inhalt für das Premium-Angebot
    popupText.textContent = "Melde dich bei unserem Stand und wir geben dir dein Premium Geschenk";
    popupGif.style.display = 'none';
    popupButtons.style.display = 'none';
});

normalButton.addEventListener('click', () => {
    alert("Du bleibst beim normalen Preis.");
    popup.style.display = 'none';
    mainContent.classList.remove('blurred');
});



//SOcial Media Icons
// Elemente abrufen
const socialPopup = document.getElementById('socialpopup');
const socialPopupContent = document.getElementById('socialpopup-content');
const socialPopupQr = document.getElementById('socialpopup-qr');
const socialIcons = document.getElementById('social-icons');

// QR-Codes für die jeweiligen Social Media Plattformen
const qrCodes = {
    whatsapp: '../../../images/websiteqr.svg', // Pfad zum WhatsApp-QR-Code
    instagram: '../../../images/instagramqr.svg', // Pfad zum Instagram-QR-Code
    facebook: '../../../images/facebookqr.svg', // Pfad zum Facebook-QR-Code
    linkedin: '../../../images/linkedinqr.svg' // Pfad zum LinkedIn-QR-Code
};

// Funktion zum Öffnen des Popups
function openPopup(socialMedia) {
    socialPopupQr.src = qrCodes[socialMedia]; // Ändert den QR-Code
    socialPopup.style.display = 'flex'; // Zeigt das Popup
}

// Funktion zum Schließen des Popups
function closePopup() {
    socialPopup.style.display = 'none'; // Versteckt das Popup
}

// Klick-Event-Listener für die Social-Buttons
document.getElementById('whatsapp').addEventListener('click', () => openPopup('whatsapp'));
document.getElementById('instagram').addEventListener('click', () => openPopup('instagram'));
document.getElementById('facebook').addEventListener('click', () => openPopup('facebook'));
document.getElementById('linkedin').addEventListener('click', () => openPopup('linkedin'));

// Klick außerhalb des Popups schließt das Popup
socialPopup.addEventListener('click', (event) => {
    if (event.target === socialPopup) {
        closePopup();
    }
});

