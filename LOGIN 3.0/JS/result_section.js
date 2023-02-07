// makes that the login-section of the form gets displayed but also loads all the functions of the new section:
function displayPortal() {
    /*fetch('login.html')
    .then(response => response.text())
    .then(text => document.getElementById('portal').innerHTML = text);
    */
    var continueButton = document.getElementById("continue-button");
    continueButton.onclick = function () {
        displayHomeSection();
    };
    
}

/* function displayHomeSection() {
    var form = document.getElementById("portal");
    var xhtml = new XMLHttpRequest();

    xhtml.open('GET', 'home_section.html', true);
    xhtml.onreadystatechange = function () {
        form.innerHTML = this.responseText;
        var script = document.createElement("script");
        script.innerHTML = "displaySection();";
        form.appendChild(script);
    };
    xhtml.send();
} */

