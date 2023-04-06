// Get all forms by their id
const form1 = document.getElementById('login-form');
const form2 = document.getElementById('register-form');


// Set the active form to form1
let activeForm = form1;

// Show the active form and hide the others
const showActiveForm = () => {
    form1.classList.toggle('inactive-form', form1 !== activeForm);
    form2.classList.toggle('inactive-form', form2 !== activeForm);
    activeForm.classList.toggle('active-form', true);
};

// Show the next form when the current form is clicked
form1.addEventListener('readystatechange', () => {
    activeForm = form2;
    showActiveForm();
});

form2.addEventListener('readystatechange', () => {
    activeForm = form1;
    showActiveForm();
});