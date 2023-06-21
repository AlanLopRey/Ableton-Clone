const d = document;
function hamburgerMenu(menuBtn, hamburgerMenu, menuTriangle) {
  d.addEventListener("click", (e) => {
    //si le hacemos click a el panel btn o todo lo que este dentro de el panel btn
    if (e.target.matches(menuBtn) || e.target.matches(`${menuBtn} *`)) {
      //entonces a la clase panle activale o desactivale la clase is-active
      d.querySelector(hamburgerMenu).classList.toggle("is-active");
      d.querySelector(menuTriangle).classList.toggle("rotate-triangle");
      //y a la clase panelBtn tambien le agregamos o quitamos el is-active
      d.querySelector(menuBtn).classList.toggle("is-active");
    }
  });
}

hamburgerMenu(".menu-btn", ".menu", ".menu-triangle");

//Navbar control

const navbar = d.querySelector("#navbar");

console.log(navbar);
let lastScrollTop = 0;

window.addEventListener(
  "scroll",
  (e) => {
    var { pageYOffset } = window;
    if (pageYOffset > lastScrollTop && pageYOffset >= 120) {
      navbar.classList.remove("visible");
    } else if (pageYOffset < lastScrollTop) {
      navbar.classList.add("visible");
    }
    lastScrollTop = pageYOffset <= 0 ? 0 : pageYOffset;
  },
  { passive: true }
);
