document.getElementById('logo').onclick = function() {
    document.getElementById('pinModal').style.display = 'block';
    document.getElementById('wholepage').classList.add('modal-blur');
}

document.getElementsByClassName('close')[0].onclick = function() {
    closeModal();
}

window.onclick = function(event) {
    if (event.target == document.getElementById('pinModal')) {
        closeModal();
    }
}

document.getElementById('submitPin').onclick = function() {
    const pinInput = document.getElementById('pinInput');
    if (pinInput.value === '101010') {
        alert('PIN korrekt! Relais wird ausgelöst.');
        doPost('1', 'http://192.168.0.120/Start');
        closeModal();
    } else {
        showError();
        setTimeout(() => {
            closeModal();
        }, 3000);
    }
}

function doPost(param, url) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url + "?param=" + param, true);
    xhr.send();
}

function closeModal() {
    document.getElementById('pinInput').value = '';
    document.getElementById('pinModal').style.display = 'none';
    document.getElementById('errorOverlay').style.display = 'none';
    document.getElementById('wholepage').classList.remove('modal-blur');
}

function showError() {
    document.getElementById('errorOverlay').style.display = 'flex';
}
