// makes that the register-section of the portal gets displayed:
function displayRegisterSection (){
    
    const carousel = document.querySelector('.carousel');
    const activeForm = document.querySelector('.active-form');
    var selectedIndex = 0;
    var cellCount = 6;
    var cellSize = 500;
    var radius, theta;

    selectedIndex++;
    //var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
    theta = 360 / cellCount;
    radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCount ) );
    var angle = theta * selectedIndex * -1;
    carousel.style.transform = 'translateZ(' + -radius + 'px) ' + 'rotateY' + '(' + angle + 'deg)';
   
    activeForm.classList.toggle('inactive-form', true); 
    activeForm.classList.toggle('active-form', false);

    document.getElementById('register-form').classList.toggle('active-form', true);
    document.getElementById('register-form').classList.toggle('inactive-form', false);
}


// makes that the login-section of the portal gets displayed:
function displayLoginSection() {
    const carousel = document.querySelector('.carousel');
    const activeForm = document.querySelector('.active-form');
    var selectedIndex = 0;
    var cellCount = 6;
    var cellSize = 500;
    var radius, theta;

    selectedIndex++;
    selectedIndex++;
    //var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
    theta = 360 / cellCount;
    radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCount ) );
    var angle = theta * selectedIndex * -1;
    carousel.style.transform = 'translateZ(' + -radius + 'px) ' + 'rotateY' + '(' + angle + 'deg)';
   
   
    activeForm.classList.toggle('inactive-form', true); 
    activeForm.classList.toggle('active-form', false);

    document.getElementById('login-form').classList.toggle('active-form', true);
    document.getElementById('login-form').classList.toggle('inactive-form', false);
}

/* this code section uses html DOM properties to change the border color on some elements 
on the input field section on the login section form, whenever the input is clicked; the icon & 
the borders will change color: */

function highlightField (field){ 
    var parentId = field.parentElement.getAttribute('id');
    document.getElementById(parentId).firstElementChild.style = "border-color: #50e3c2;";
    document.getElementById(parentId).lastElementChild.style = "border-color: #50e3c2;";
    (document.getElementById(parentId).firstElementChild).firstElementChild.style = "filter: invert(96%) sepia(98%) saturate(810%) hue-rotate(83deg) brightness(103%) contrast(78%);";
}

/* this code section uses html DOM properties to change the border color on some elements 
on the input field section on the login section form, whenever the input lost its focus; the icon & 
its borders will change color: */

function unhighlightField(field){
    var parentId = field.parentElement.getAttribute('id');
    document.getElementById(parentId).firstElementChild.style = "border-color: #d3d3d3;";
    document.getElementById(parentId).lastElementChild.style = "border-color: #d3d3d3;";
    (document.getElementById(parentId).firstElementChild).firstElementChild.style = "filter: opacity(55%);";

}

/* Loads the forms from the portal*/
function loadForms() {
    var portal = document.getElementById("carousel-portal");

    var registerHtml = new XMLHttpRequest();
    registerHtml.open('GET', 'register_section.html', true);

    var loginHtml = new XMLHttpRequest();
    loginHtml.open('GET', 'login_section.html', true);

    var emailHtml = new XMLHttpRequest();
    emailHtml.open('GET', 'email_section.html', true);

    var codeHtml = new XMLHttpRequest();
    codeHtml.open('GET', 'code_section.html', true);

    var resultHtml = new XMLHttpRequest();
    resultHtml.open('GET', 'result_section.html', true);

    registerHtml.onload, loginHtml.onload, emailHtml.onload, codeHtml.onload, resultHtml.onload = function () {
        portal.insertAdjacentHTML("beforeend", registerHtml.responseText);
        portal.insertAdjacentHTML("beforeend", loginHtml.responseText);
        portal.insertAdjacentHTML("beforeend", emailHtml.responseText);
        portal.insertAdjacentHTML("beforeend", codeHtml.responseText);
        portal.insertAdjacentHTML("beforeend", resultHtml.responseText);
    }
    
    registerHtml.send();
    loginHtml.send();
    emailHtml.send();
    codeHtml.send();
    resultHtml.send();
}