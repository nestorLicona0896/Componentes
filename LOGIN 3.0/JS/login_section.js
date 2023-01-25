// makes that the register-section of the form gets displayed and also loads its js functions:
function displayRegister() {
    document.getElementById("register-link").onclick = function () {
        var form = document.getElementById("portal");
        var xhtml = new XMLHttpRequest();

        xhtml.open('GET', 'register_section.html', true);
        xhtml.onreadystatechange = function () {
            form.innerHTML = this.responseText;
            var script = document.createElement("script");
            script.innerHTML = "displayLogin();";
            form.appendChild(script);
        };
        xhtml.send();
    };
} 

// makes that the email-section of the form gets displayed and also loads its js functions  for passsword recovering:
function displayEmailSection() {
    document.getElementById("forgot-link").onclick = function () {
        var form = document.getElementById("portal");
        var xhtml = new XMLHttpRequest();

        xhtml.open('GET', 'email_section.html', true);
        xhtml.onreadystatechange = function () {
            form.innerHTML = this.responseText;
            var script = document.createElement("script");
            script.innerHTML = "sendVerificationCode();";
            form.appendChild(script);
        };
        xhtml.send();
    };
} 



