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
