// makes that the login section of the form gets displayed and also loads its js functions
function displayLogin() {
    var form = document.getElementById("portal-section");
    var xhtml = new XMLHttpRequest();

    xhtml.open('GET', 'login_section.html', true);
    xhtml.onreadystatechange = function () {
        form.innerHTML = this.responseText;
        var script = document.createElement("script");
        script.innerHTML = "displayRegister(); displayEmailSection();";
        form.appendChild(script);
    };
    xhtml.send();

} 

/* this code section uses html DOM properties to change the border color on some elements 
on the input field on the login section form, whenever the input is clicked; the icon & 
the borders will change color: v 2.0 */

/* function highlightField2(field){
    var parentId = field.parentElement.getAttribute('id');
    
    document.getElementById(parentId).firstElementChild.style = "border-color: #50e3c2;";
    document.getElementById(parentId).lastElementChild.style = "border-color: #50e3c2;";
    (document.getElementById(parentId).firstElementChild).firstElementChild.style = "filter: invert(96%) sepia(98%) saturate(810%) hue-rotate(83deg) brightness(103%) contrast(78%);";

    var inputs = document.getElementsByClassName("input-field");
    for (var i = 0; i < inputs.length; i++) {
        if(inputs[i].getAttribute('id') != parentId) {
            inputs[i].firstElementChild.style = "border: solid #d3d3d3 1px;";
            inputs[i].lastElementChild.style = "border: solid #d3d3d3 1px;";
            (inputs[i].firstElementChild).firstElementChild.style = "filter: opacity(55%);";
        }
    }
} */

function submitForm(){
    alert("el formulario ha sido enviado");
}