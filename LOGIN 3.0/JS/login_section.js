// makes that the register-section of the form gets displayed and also loads its js functions:
function displayRegister() {
    document.getElementById("register-link").onclick = function () {
        var form = document.getElementById("portal-section");
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
        var form = document.getElementById("portal-section");
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

/* this code section uses html DOM properties to change the border color on some elements 
on the input field on the login section form, whenever the input is clicked; the icon & 
the borders will change color: v 1.0 */

/* function highlightField(field){
    
    field.firstElementChild.style = "border-color: #50e3c2;";
    field.lastElementChild.style = "border-color: #50e3c2;";
    (field.firstElementChild).firstElementChild.style = "filter: invert(96%) sepia(98%) saturate(810%) hue-rotate(83deg) brightness(103%) contrast(78%);";
    //var header = document.getElementById("login-section");   
    var id = field.getAttribute('id');
    var inputs = document.getElementsByClassName("input-field");
    for (var i = 0; i < inputs.length; i++) {
        if(inputs[i].getAttribute('id') != id) {
            inputs[i].firstElementChild.style = "border: solid #d3d3d3 1px;";
            inputs[i].lastElementChild.style = "border: solid #d3d3d3 1px;";
            (inputs[i].firstElementChild).firstElementChild.style = "filter: opacity(55%);";
        }
    }
    
} */

/* this code section uses html DOM properties to change the border color on some elements 
on the input field on the login section form, whenever the input is clicked; the icon & 
the borders will change color: v 2.0 

function highlightField2(field){
    var parentId = field.parentElement.getAttribute('id');
    
    document.getElementById(parentId).firstElementChild.style = "border-color: #50e3c2;";
    document.getElementById(parentId).lastElementChild.style = "border-color: #50e3c2;";
    (document.getElementById(parentId).firstElementChild).firstElementChild.style = "filter: invert(96%) sepia(98%) saturate(810%) hue-rotate(83deg) brightness(103%) contrast(78%);";

    var inputs = document.getElementsByClassName("input-field");
    for (var i = 0; i < inputs.length; i++) {
        if(inputs[i].getAttribute('id') != parentId) {
            inputs[i].firstElementChild.style = "border-color: #d3d3d3;";
            inputs[i].lastElementChild.style = "border-color: #d3d3d3;";
            (inputs[i].firstElementChild).firstElementChild.style = "filter: opacity(55%);";
        }
    }
}*/

/* this code section uses html DOM properties to change the border color on some elements 
on the input field section on the login section form, whenever the input is clicked; the icon & 
the borders will change color: v 3.0 */

function highlightField3(field){
    var parentId = field.parentElement.getAttribute('id');
    document.getElementById(parentId).firstElementChild.style = "border-color: #50e3c2;";
    document.getElementById(parentId).lastElementChild.style = "border-color: #50e3c2;";
    (document.getElementById(parentId).firstElementChild).firstElementChild.style = "filter: invert(96%) sepia(98%) saturate(810%) hue-rotate(83deg) brightness(103%) contrast(78%);";

}

/* this code section uses html DOM properties to change the border color on some elements 
on the input field section on the login section form, whenever the input lost its focus; the icon & 
its borders will change color: v 1.0 */

function unhighlightField(field){
    var parentId = field.parentElement.getAttribute('id');
    document.getElementById(parentId).firstElementChild.style = "border-color: #d3d3d3;";
    document.getElementById(parentId).lastElementChild.style = "border-color: #d3d3d3;";
    (document.getElementById(parentId).firstElementChild).firstElementChild.style = "filter: opacity(55%);";

}