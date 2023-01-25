
// change the section of the portal that will be displayed login/register:
function displaySection() {

    var registerButton = document.getElementById("signup-button");
    registerButton.onclick = function () {
        displayRegisterSection();
    };

    var loginButton = document.getElementById("login-button");
    loginButton.onclick = function () {
        displayLoginSection();
    };
}


// makes that the register-section of the form gets displayed but also loads all the scripts of this section:
function displayRegisterSection() {
    var form = document.getElementById("portal");
    var xhtml = new XMLHttpRequest();

    xhtml.open('GET', 'register_section.html', true);
    xhtml.onreadystatechange = function () {
        /* if (this.readyState !== 4) return;
        if (this.status !== 200) return; // or whatever error handling you want */
        form.innerHTML = this.responseText;
        var script = document.createElement("script");
        script.innerHTML = "displayLogin();";
        form.appendChild(script);
    };
    xhtml.send();
}

// makes that the login-section of the form gets displayed but also loads all the functions of the new section:
function displayLoginSection() {
    /*fetch('login.html')
    .then(response => response.text())
    .then(text => document.getElementById('portal').innerHTML = text);
    */
    var form = document.getElementById("portal");
    var xhtml = new XMLHttpRequest();

    xhtml.open('GET', 'login_section.html', true);
    xhtml.onreadystatechange = function () {
        /* if (this.readyState !== 4) return;
        if (this.status !== 200) return; // or whatever error handling you want */
        form.innerHTML = this.responseText;
        var script = document.createElement("script");
        script.innerHTML = "displayRegister();";
        script.innerHTML = "displayEmailSection();";
        form.appendChild(script);
    };
    xhtml.send();
}


