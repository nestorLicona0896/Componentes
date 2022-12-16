// SHOW MENU BUTTON WHEN SCREEN GO UNDER/BELOWS 720PX WIDTH:
function showMenuIcon(menuBtn) {
  menuBtn.classList.toggle("change");
}

// ADD ACTIVE CLASS TO THE CURRENT MENU BUTTON (HIGHLIGHT IT):
function focusMenuOption() {
  var header = document.getElementById("navbar-main");
  var btns = header.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click",
      function () {
        var currentOption = document.getElementsByClassName("active");
        currentOption[0].className = currentOption[0].className.replace(" active", "");
        this.className += " active";
        if (currentOption[0].getAttribute('id') != "catalogue-btn" && currentOption[0].getAttribute('id') != "about-btn") {
          document.getElementById("catalogue-menu").style.display = "none";
          document.getElementById("about-menu").style.display = "none";

        } else {
          showSubmenu(currentOption[0].getAttribute('id'));
        }
      });
  }
}

// SHOW MAIN NAVBAR SUBMENU:
function showSubmenu(submenuBtn) {
  if (submenuBtn == "catalogue-btn") {
    if (document.getElementById("catalogue-menu").style.display == 'none') {
      document.getElementById("catalogue-menu").style.display = "flex";
    } else {
      document.getElementById("catalogue-menu").style.display = "none";
    }
    document.getElementById("about-menu").style.display = "none";
  } 
  if (submenuBtn == "about-btn") {
    if (document.getElementById("about-menu").style.display == 'none') {
      document.getElementById("about-menu").style.display = "flex";
    } else {
      document.getElementById("about-menu").style.display = "none";
    }
    document.getElementById("catalogue-menu").style.display = "none";
  }
}
