


// makes that the home-section of the form gets displayed but also loads all the scripts of this section:
function displayHomeSection() {
    var form = document.getElementById("portal");
    var xhtml = new XMLHttpRequest();

    xhtml.open('GET', 'home_section.html', true);
    xhtml.onreadystatechange = function () {
        /* if (this.readyState !== 4) return;
        if (this.status !== 200) return; // or whatever error handling you want */
        form.innerHTML = this.responseText;
        var script = document.createElement("script");
        script.innerHTML = "displaySection();";
        form.appendChild(script);
    };
    xhtml.send();
}


