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
                document.getElementById("button-verification").focus();
            }
        } else {
            field.value = "";
        }
    }
}