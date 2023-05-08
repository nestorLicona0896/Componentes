// makes that the email-section of the form gets displayed and also loads its js functions  for passsword recovering:
function recoverPassword() {
    
    const activeForm = document.querySelector('.active-form');
    
    activeForm.classList.toggle('inactive-form', true); 
    activeForm.classList.toggle('active-form', false);

    document.getElementById('email-form').classList.toggle('active-form', true);
    document.getElementById('email-form').classList.toggle('inactive-form', false);

    rotatePortal2();
} 

// CLIENT SIDE (envia solicitud)
// llegan los datos para validar en el algoritmo...

// salen los datos validados e ingresan al servidor..


//SERVER SIDE 

// el servidor recibe los datos..

// validacion de datos.

// respuesta...(inicia , elimina, edita..) 

// accion en la base de datos por ejemplo/ cambia el rendimiento/ la apariencia...


// CLIENT SIDE (recibe respuesta)

// el resultado de la solicitud se ve reflejado en tiempo real
