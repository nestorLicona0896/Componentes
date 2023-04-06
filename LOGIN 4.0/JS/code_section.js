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
    
    displayResultSection();
}

// make the result section visible with the propper message according to the verification status:
function displayResultSection() {
    const activeForm = document.getElementsByClassName('active-form');
    var formId = activeForm[0].getAttribute('id');
    document.getElementById(formId).classList.toggle('inactive-form', true);
    document.getElementById(formId).classList.toggle('active-form', false);
        
    document.getElementById('result-form').classList.toggle('inactive-form', false);
    document.getElementById('result-form').classList.toggle('active-form', true); 
}




