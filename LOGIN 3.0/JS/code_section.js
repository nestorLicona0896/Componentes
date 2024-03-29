/* This function add to every code field on form an oninput event and a event listener when the user requires to 
delete or erase a digit from a field */ 
function digitFieldFocus() {
    var header = document.getElementById("code-container");
    var fields = header.getElementsByClassName("digit");
    const arrayValues = [];
    
    for (var i = 0; i < fields.length; i++) {
        //fields[i].oninput =  function(){ changeFieldFocus(this) };
        fields[i].addEventListener('keyup', function (event) {
            const key = event.key; // const {key} = event; ES6+
            changeFieldFocus(this, key, arrayValues);
            
        });
    }
}

/* This function add to every code field that is next to the current field a focus */
function changeFieldFocus(field, key, arrayValues) {
    var id = field.getAttribute('id');
    //if (document.getElementById(id).value == 0 || document.getElementById(id).value == 1 || document.getElementById(id).value == 2 || document.getElementById(id).value == 3 || document.getElementById(id).value == 4 || document.getElementById(id).value == 5 || document.getElementById(id).value == 6 || document.getElementById(id).value == 7 || document.getElementById(id).value == 8 || document.getElementById(id).value == 9) {
    if (key == 0 || key == 1 || key == 2 || key == 3 || key == 4 || key == 5 || key == 6 || key == 7 || key == 8 || key == 9) {

        if (document.getElementById(id).value != " " && key != " ") {
            document.getElementById(id).value = key;
            if (document.getElementById(id).nextElementSibling != null) {
                document.getElementById(id).nextElementSibling.focus();
            } else {
                document.getElementById("verify-button").focus();
            }
        } else {
            document.getElementById(id).value = "";
        }
        arrayValues.push(key);
        
        //alert(arrayValues[1]);
    } else {
        
        if (key === "Delete" || key === "Backspace") {
            document.getElementById(id).previousElementSibling.focus();
        } else {
            document.getElementById(id).value = "";
        }
        
    }
}

// verifies the validation of the code sended to the registered email:
function verifyCode() {
    //validations....if(verify() == true) {.......}
    document.getElementById("verify-button").onclick = function () {
        displayResultSection();
    };
}

// make the result section visible with the propper message according to the verification status:
function displayResultSection() {
   
    var form = document.getElementById("portal-section");
    var xhtml = new XMLHttpRequest();

    xhtml.open('GET', 'result_section.html', true);
    xhtml.onreadystatechange = function () {
        form.innerHTML = this.responseText;
        var script = document.createElement("script");
        script.innerHTML = "displayHomePortal();";
        form.appendChild(script);
    };
    xhtml.send();

}

/* this code section uses html DOM properties to change the border color on some elements 
on the input field on the login section form, whenever the input is clicked; the icon & 
the borders will change color: v 2.0 */

function highlightField2(field){
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
}





