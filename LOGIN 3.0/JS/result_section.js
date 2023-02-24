// makes that the login-section of the form gets displayed but also loads all the functions of the new section:
function displayHomePortal() {
    /*fetch('login.html')
    .then(response => response.text())
    .then(text => document.getElementById('portal').innerHTML = text);
    */
    var continueButton = document.getElementById("continue-button");
    continueButton.onclick = function () {
        displayHomeSection(); // makes a call in the portal_form.js file to the displayHomeSection() function
    };
}


