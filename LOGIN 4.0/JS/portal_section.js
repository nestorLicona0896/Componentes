//const carousel = document.querySelectorAll('.carousel');
 //var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
var selectedIndex = 0;
var cellCount = 6;
var cellSize = 500;
var radius, theta;
var idActiveForm = '';

// makes that the register-section of the portal gets displayed:
function displayRegisterSection (){
    const carousel = document.querySelector('.carousel');
   
    const activeForm = carousel.querySelector('.active-form');
    idActiveForm = activeForm.getAttribute('id');
    idActiveForm == 'login-form' ? selectedIndex --:selectedIndex ++;
   
   
    activeForm.classList.toggle('inactive-form', true); 
    activeForm.classList.toggle('active-form', false);

    document.getElementById('register-form').classList.toggle('active-form', true);
    document.getElementById('register-form').classList.toggle('inactive-form', false);
    rotatePortal();
}


// makes that the login-section of the portal gets displayed:
function displayLoginSection() {
    var carousel = document.querySelector('.carousel');
   
    const activeForm = carousel.querySelector('.active-form');
    idActiveForm = activeForm.getAttribute('id');
    idActiveForm == 'register-form' ? selectedIndex ++:selectedIndex +=2;
    
    
    activeForm.classList.toggle('inactive-form', true); 
    activeForm.classList.toggle('active-form', false);

    document.getElementById('login-form').classList.toggle('active-form', true);
    document.getElementById('login-form').classList.toggle('inactive-form', false);
    rotatePortal();
}

/* rotates the hexagon allowing to see the active form */
function rotatePortal(){
    
    const carousel = document.querySelector('.carousel');
    theta = 360 / cellCount;
    radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCount ) );
    var angle = theta * selectedIndex * -1;
    carousel.style.transform = 'rotateY(' + angle + 'deg)';    
    
  }

/* rotates the hexagon allowing to see the active form */
function rotatePortal2(){
    const carousel = document.querySelector('.carousel');
    selectedIndex++;
    theta = 360 / cellCount;
    radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCount ) );
    var angle = theta * selectedIndex * -1;
    carousel.style.transform = 'rotateY(' + angle + 'deg)';
}

/* this code section uses html DOM properties to change the border color on some elements 
on the input field section on the login section form, whenever the input is clicked; the icon & 
the borders will change color: */
function highlightField(){ 
    
}

/* this code section uses html DOM properties to change the border color on some elements 
on the input field section on the login section form, whenever the input lost its focus; the icon & 
its borders will change color: */

function unhighlightField(){
}

/* Loads the forms from the portal*/
function loadForms() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain attribute:*/
    file = elmnt.getAttribute("include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("include-html");
          loadForms();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }

}

/* disable the buttons and the inputs from the inactive forms */
function disableInputsAndButtons() {
   /*  const header = document.getElementById('carousel-portal');
    const inactiveForms = header.getElementsByClassName("form");
    for(var index = 0; index < inactiveForms.length; index ++){
       
        //alert(inactiveForms[index].getAttribute('id'));
    } */
}