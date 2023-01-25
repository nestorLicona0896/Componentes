// send the verification code to the registered email and displays the code-section: */
function sendVerificationCode(){
    /* propper vcalidation of the email an then calls another function to dsiplay code-section
       if (validateEmail() == true) {
        ...
       }
    */
    displayCodeSection();

}

// proceeds to validate and verify the registered email direction:
function validateEmail(){

}

// charges insede the form the code section and its functions:
function  displayCodeSection() {
    document.getElementById("send-button").onclick = function () {
        var form = document.getElementById("portal");
        var xhtml = new XMLHttpRequest();

        xhtml.open('GET', 'code_section.html', true);
        xhtml.onreadystatechange = function () {
            form.innerHTML = this.responseText;
            var script = document.createElement("script");
            script.innerHTML = "digitFieldFocus();";
            script.innerHTML += "verifyCode();";
            form.appendChild(script);
        };
        xhtml.send();
    };
}

