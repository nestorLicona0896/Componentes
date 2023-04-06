// makes that the email-section of the form gets displayed and also loads its js functions  for passsword recovering:
function recoverPassword() {
    const activeForm = document.getElementsByClassName('active-form');
    var formId = activeForm[0].getAttribute('id');
    document.getElementById(formId).classList.toggle('inactive-form', true);
    document.getElementById(formId).classList.toggle('active-form', false);
        
    document.getElementById('email-form').classList.toggle('inactive-form', false);
    document.getElementById('email-form').classList.toggle('active-form', true);  
} 

function login(){
    alert('hola!');
}


