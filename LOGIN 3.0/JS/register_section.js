// makes that the login section of the form gets displayed and also loads its js functions
function displayLogin() {
    document.getElementById("login-link").onclick = function () {
        var form = document.getElementById("portal");
        var xhtml = new XMLHttpRequest();
    
        xhtml.open('GET', 'login_section.html', true);
        xhtml.onreadystatechange = function () {
            form.innerHTML = this.responseText;
            var script = document.createElement("script");
            script.innerHTML = "displayRegister(); displayEmailSection();";
            form.appendChild(script);
        };
        xhtml.send();
    };
} 
