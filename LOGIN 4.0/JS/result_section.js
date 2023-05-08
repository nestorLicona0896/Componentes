function displayPortalHome() {
    const activeForm = document.querySelector('.active-form');
   
    activeForm.classList.toggle('inactive-form', true); 
    activeForm.classList.toggle('active-form', false);

    document.getElementById('home-form').classList.toggle('active-form', true);
    document.getElementById('home-form').classList.toggle('inactive-form', false);
    rotatePortal2();
}

