function displayLogin(){
    var loginButton = document.getElementById("button-login-1");
    loginButton.onclick =  function() { showLoginForm() };
}

function showLoginForm() {
    document.getElementById("portal-container").style.display = "none";
    document.getElementById("login-container").style.display = "flex";
}