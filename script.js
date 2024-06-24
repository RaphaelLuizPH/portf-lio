AOS.init({ duration: 400, delay: 400 });

function mudarTema() {
  const html = document.documentElement;
  html.classList.toggle("dark");
}


let aboutmebutton = document.querySelector('.sobremim')

aboutmebutton.addEventListener('click', aboutme);

function aboutme() {
  var aboutme = window.document.querySelector("#aboutme");
  aboutme.scrollIntoView({ block: "start", behavior: "smooth" });
}
