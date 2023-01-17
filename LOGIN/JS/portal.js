function displaySection() {

    var loginButton = document.getElementById("button-login");
    loginButton.onclick = function() {
        displayLoginSection()
    };

    var registerButton = document.getElementById("button-signup");
    registerButton.onclick = function() {
        displayRegisterSection()
    };
}

function displayLoginSection() {
    var form = document.getElementById("portal");

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'iniciar_sesion.html', true);
    xhr.onreadystatechange = function () {
        /* if (this.readyState !== 4) return;
        if (this.status !== 200) return; // or whatever error handling you want */
        form.innerHTML = this.responseText;
    };
    xhr.send();
}

function displayRegisterSection() {
    var form = document.getElementById("portal");

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'registro.html', true);
    xhr.onreadystatechange = function () {
        /* if (this.readyState !== 4) return;
        if (this.status !== 200) return; // or whatever error handling you want */
        form.innerHTML = this.responseText;
    };
    xhr.send();
}