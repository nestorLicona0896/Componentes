/* This function add to every code field on form an oninput event */ 
function digitFieldFocus() {
    var header = document.getElementById("code-container");
    var fields = header.getElementsByClassName("digit");

    for (var i = 0; i < fields.length; i++) {
        fields[i].oninput = function() { changeFieldFocus(this) };
    }
}

/* This function add to every code field that is next to the current field a focus,
but before that, it checks that the value also is numeric */ 
function changeFieldFocus(field) {

    var id = field.getAttribute('id');
    if (field.value != "") {
        if (field.value == 0 || field.value == 1 || field.value == 2 || field.value == 3 || field.value == 4 || field.value == 5 || field.value == 6 || field.value == 7 || field.value == 8 || field.value == 9  ) {
            
            if(document.getElementById(id).nextElementSibling != null) {
                if(document.getElementById(id).nextElementSibling.value == ""){
                    document.getElementById(id).nextElementSibling.focus();
                }
            } else {
                document.getElementById("verify-button").focus();
            }
        } else {
            field.value = "";
        }
    }
}

// verifies the validation of the code sended to the registered email:
function verifyCode(){
    //validations....if(verify() == true) {....}

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
            script.innerHTML = "displayLoginSection();";
            form.appendChild(script);
        };
        xhtml.send();
    };
}