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
        var activeOption = document.getElementsByClassName("btn active");

        if (activeOption.length > 0) { // THERE'S AN ACTIVE BUTTON: 
          if (this == document.getElementById("catalogue-btn") || this == document.getElementById("about-btn")) {
            if (this.classList == "btn") {
              activeOption[0].className = "btn";
              this.className = "btn active";
              if (this == document.getElementById("catalogue-btn")) {
                document.getElementById("about").checked = false;
              } else {
                document.getElementById("catalogue").checked = false;
              }
            } else {
              this.className = "btn";
            }
          } else {
            activeOption[0].className = "btn";
            this.className = "btn active";
            document.getElementById("catalogue").checked = false;
            document.getElementById("about").checked = false;
          }
        } else { // tHERE ISN'T ACTIVE BUTTON:
          this.className = "btn active";
          document.getElementById("catalogue").checked = false;
          document.getElementById("about").checked = false;
        }
      });
  }
}

/* FUNCTION TO DISPLAY SEARCH BAR */

function displaySearch () {
  var bar = document.getElementsByClassName("search-bar");
  if(bar.length > 0) {
    if( bar[0].style.display == "flex") {
      bar[0].style.display="none";
    } else {
      bar[0].style.display="flex";
    }
  }
}



