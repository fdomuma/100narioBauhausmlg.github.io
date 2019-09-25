
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
var conoce = document.getElementById("Conoce");
var programa = document.getElementById("Programa");
var bdonde = document.getElementById("BAUHAUS");
var organización = document.getElementById("Organizacion");

function myFunction() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
        conoce.classList.add("fondo-oscuro");
        programa.classList.add("fondo-oscuro");
        bdonde.classList.add("fondo-oscuro");
        organización.classList.add("fondo-oscuro");
        checkbox.classList.add("sticky");
        Redes.style.display  = "";
    } else {
        navbar.classList.remove("sticky");
        conoce.classList.remove("fondo-oscuro");
        programa.classList.remove("fondo-oscuro");
        bdonde.classList.remove("fondo-oscuro");
        organización.classList.remove("fondo-oscuro");
        checkbox.classList.remove("sticky");
        Redes.style.display("none")
    }
}
