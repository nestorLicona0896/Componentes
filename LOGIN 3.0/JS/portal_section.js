/* // makes that the home-section of the portal gets displayed but also loads all the scripts of this section:
function displayHomeSection() {
    //alert("first call is working!");
    var portal = document.getElementById("portal");
    var xhtml = new XMLHttpRequest();

    xhtml.open('GET', 'home_section.html', true);
    xhtml.onreadystatechange = function () {
        /* if (this.readyState !== 4) return;
        if (this.status !== 200) return; // or whatever error handling you want 
        portal.innerHTML = this.responseText;
        var script = document.createElement("script");
        script.innerHTML = "displaySection();";
        portal.appendChild(script);
    };
    xhtml.send();
} */


// change the section of the portal that will be displayed login/register:
/* function displaySection() {

    var registerButton = document.getElementById("signup-button");
    registerButton.onclick = function () {
        displayRegisterSection();
    };

    var loginButton = document.getElementById("login-button");
    loginButton.onclick = function () {
        displayLoginSection();
    };
} */

// makes that the register-section of the portal gets displayed but also loads all the scripts of this section:
function displayRegisterSection() {
    
    var portal = document.getElementById("portal-section");
    var xhtml = new XMLHttpRequest();
    alert('click!');
    xhtml.open('GET', 'register_section.html', true);
    xhtml.onreadystatechange = function () {
        /* if (this.readyState !== 4) return;
        if (this.status !== 200) return; // or whatever error handling you want */
        portal.innerHTML = this.responseText;
        var script = document.createElement("script");
        script.innerHTML = "displayLogin1();";
        portal.appendChild(script);
        
    };
    xhtml.send();
}

// makes that the login-section of the portal gets displayed but also loads all the functions of the new section:
function displayLoginSection() {
    /*fetch('login.html')
    .then(response => response.text())
    .then(text => document.getElementById('portal').innerHTML = text);
    */
    var portal = document.getElementById("portal-section");
    var xhtml = new XMLHttpRequest();

    xhtml.open('GET', 'login_section.html', true);
    xhtml.onreadystatechange = function () {
        /* if (this.readyState !== 4) return;
        if (this.status !== 200) return; // or whatever error handling you want */
        portal.innerHTML = this.responseText;
        var script = document.createElement("script");
        script.innerHTML = "displayRegister(); displayEmailSection();";
        portal.appendChild(script);
    };
    xhtml.send();
}


function saludar(){
    alert('hola');
}