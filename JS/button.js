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
        if (currentOption[0].getAttribute('id') == "catalogue-btn" || currentOption[0].getAttribute('id') == "about-btn") {
          styleSubmenuBtn(currentOption[0].getAttribute('id'));
        } else {
          document.getElementById("click").checked = false;
          document.getElementById("catalogue-btn").style.background = "none";
          document.getElementById("click2").checked = false;
          document.getElementById("about-btn").style.background = "none";
        }
      });
  }
}

// CHANGE BUTTON MENU STYLE:
function styleSubmenuBtn(idBtn){
  if (idBtn == "catalogue-btn") {
    if (document.getElementById("click").checked == true) {
      document.getElementById(idBtn).style.background = "none";
    } else {
      document.getElementById(idBtn).style.background = "gold";
    }
  } 

  if (idBtn == "about-btn") {
    if (document.getElementById("click2").checked == true) {
      document.getElementById(idBtn).style.background = "none";
    } else {
      document.getElementById(idBtn).style.background = "gold";
    }
  }
}
