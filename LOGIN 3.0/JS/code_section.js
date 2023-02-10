/* This function add to every code field on form an oninput event and a event listener when the user requires to 
delete or erase a digit from a field*/ 
function digitFieldFocus() {
    var header = document.getElementById("code-container");
    var fields = header.getElementsByClassName("digit");

    for (var i = 0; i < fields.length; i++) {
        //fields[i].oninput =  function(){ changeFieldFocus(this) };
        fields[i].addEventListener('keyup',  function(event) { 
            const key = event.key; // const {key} = event; ES6+
            if (key === "Delete" || key === "Backspace" ) {
                this.previousElementSibling.focus(); 
            } else {
                changeFieldFocus(this);
            }
        });
    }
}

/* This function add to every code field that is next to the current field a focus,
but before that, it checks that the value also is numeric */
function changeFieldFocus(field) {
    var id = field.getAttribute('id');
    if (document.getElementById(id).value == 0  || document.getElementById(id).value == 1 || document.getElementById(id).value == 2 || document.getElementById(id).value == 3 || document.getElementById(id).value == 4 || document.getElementById(id).value== 5 || document.getElementById(id).value == 6 || document.getElementById(id).value == 7 || document.getElementById(id).value == 8 || document.getElementById(id).value == 9) {
        if(document.getElementById(id).value != "" && document.getElementById(id).value != " "){
            document.getElementById(id).nextElementSibling.focus();
        } else {
            document.getElementById(id).value = "";
        }
    } else {
        document.getElementById(id).value = "";
    }
}

// verifies the validation of the code sended to the registered email:
function verifyCode(){
    //validations....if(verify() == true) {.......}

    displayResultSection();
}

// make the result section visible with the propper message according to the verification status:
function displayResultSection() {
    document.getElementById("verify-button").onclick = function () {
        var form = document.getElementById("portal");
        var xhtml = new XMLHttpRequest();

        xhtml.open('GET', 'result_section.html', true);
        xhtml.onreadystatechange = function () {
            form.innerHTML = this.responseText;
            var script = document.createElement("script");
            script.innerHTML = "displayPortal();";
            form.appendChild(script);
        };
        xhtml.send();
    };
}

/* 
detects if the backspace or delete button is pressed on the document.getElementById(id)board when a digit-field is focus so 
its erase the value, but also turn the focus onto the previus digit field*/