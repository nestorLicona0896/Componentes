// send the verification code to the registered email and displays the code-section: */
function sendRecoveryEmail(){
    /* propper validation of the email an then calls another function to dsiplay code-section
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
   
    const activeForm = document.querySelector('.active-form');
    
    activeForm.classList.toggle('inactive-form', true); 
    activeForm.classList.toggle('active-form', false);

    document.getElementById('code-form').classList.toggle('active-form', true);
    document.getElementById('code-form').classList.toggle('inactive-form', false);     

    rotatePortal2();
}

