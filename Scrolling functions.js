
window.onscroll = function() {
	showBackTopFunction()
	myFunction()
};

// When the user scrolls down 480px from the top of the document, show the button

function showBackTopFunction() {
    if (document.body.scrollTop > 480 || document.documentElement.scrollTop > 480) {
      document.getElementById("VueltaArriba").style.display = "block";
    } else {
      document.getElementById("VueltaArriba").style.display = "none";
    }
  }

// When the user clicks on the button, scroll to the top of the document
function goTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Funciones de scrolling
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var checkbox = document.getElementById("menu-toogle")
var Redes = document.getElementById("RRSS-insertadas")


function myFunction() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
        checkbox.classList.add("sticky");
        Redes.style.display  = "";
    } else {
        navbar.classList.remove("sticky");
        checkbox.classList.remove("sticky");
        Redes.style.display("none")
    }
}
