AOS.init({ duration: 400, delay: 400 });

const quemsou = document.querySelector("#quemsou");
const Objetivos = document.querySelector("#Objetivos");
const Experiência = document.querySelector("#Experiência");
const Skills = document.querySelector("#Skills");
const quem = document.querySelector("#quemsoubutton");
const obj = document.querySelector("#obj");
const xp = document.querySelector("#xp");
const skills = document.querySelector("#skills");
const aboutmebutton = document.querySelector(".sobremim");
quemsou.style.display = "flex";
Objetivos.style.display = "none";
Experiência.style.display = "none";
Skills.style.display = "none";

// Muda o tema
function mudarTema() {
  const html = document.documentElement;
  html.classList.toggle("dark");
}

// Calcula idade

var ano = new Date().getFullYear();
idade = document.querySelector("#idade");
idade.innerText = ` ${ano - 2002}   ` + `anos de idade, `;

// Esconde ou mostra o texto
function quemsoutxt() {
  if (quemsou.style.display === "none") {
    quemsou.style.display = "flex";
    quem.style.border = "var(--icon-color) solid 1px";
  } else {
    quemsou.style.display = "none";
  }
  Objetivos.style.display = "none";
  Experiência.style.display = "none";
  Skills.style.display = "none";
}

function objtvs() {
  if (Objetivos.style.display === "none") {
    Objetivos.style.display = "flex";
    obj.style.border = "var(--icon-color) solid 1px";
  } else {
    Objetivos.style.display = "none";
  }
  quemsou.style.display = "none";
  Experiência.style.display = "none";
  Skills.style.display = "none";
}

function exp() {
  if (Experiência.style.display === "none") {
    Experiência.style.display = "flex";
    xp.style.border = "var(--icon-color) solid 1px";
  } else {
    Experiência.style.display = "none";
  }
  quemsou.style.display = "none";
  Objetivos.style.display = "none";
  Skills.style.display = "none";
}

function skill() {
  if (Skills.style.display === "none") {
    Skills.style.display = "flex";
    skills.style.border = "var(--icon-color) solid 1px";
  } else {
    Skills.style.display = "none";
  }
  quemsou.style.display = "none";
  Experiência.style.display = "none";
  Objetivos.style.display = "none";
}

aboutmebutton.addEventListener("click", aboutme);
quem.addEventListener("click", quemsoutxt);
obj.addEventListener("click", objtvs);
xp.addEventListener("click", exp);
skills.addEventListener("click", skill);

// Move a tela
function aboutme() {
  var aboutme = window.document.querySelector("#aboutme");
  aboutme.scrollIntoView({ block: "start", behavior: "smooth" });
}

const imageContainer = document.querySelector(".sitecontainer");
const image = document.querySelector(".sitecontainer img");
let isDragging = false;
let startX, startY, scrollLeft, scrollTop;

// Função para iniciar o arrasto
function startDrag(e) {
  isDragging = true;
  imageContainer.style.cursor = "grabbing";
  startX = (e.pageX || e.touches[0].pageX) - imageContainer.offsetLeft;
  startY = (e.pageY || e.touches[0].pageY) - imageContainer.offsetTop;
  scrollLeft = imageContainer.scrollLeft;
  scrollTop = imageContainer.scrollTop;
}

// Função para terminar o arrasto
function stopDrag() {
  isDragging = false;
  imageContainer.style.cursor = "grab";
}

// Função para arrastar
function drag(e) {
  if (!isDragging) return;
  e.preventDefault();
  const x = (e.pageX || e.touches[0].pageX) - imageContainer.offsetLeft;
  const y = (e.pageY || e.touches[0].pageY) - imageContainer.offsetTop;
  const walkX = (x - startX) * 2; // Ajuste a velocidade do arrasto conforme necessário
  const walkY = (y - startY) * 2; // Ajuste a velocidade do arrasto conforme necessário
  let newScrollLeft = scrollLeft - walkX;
  let newScrollTop = scrollTop - walkY;

  // Limitar o scroll para os limites da imagem
  if (newScrollLeft < 0) newScrollLeft = 0;
  if (newScrollLeft > imageContainer.scrollWidth - imageContainer.clientWidth) {
    newScrollLeft = imageContainer.scrollWidth - imageContainer.clientWidth;
  }
  if (newScrollTop < 0) newScrollTop = 0;
  if (
    newScrollTop >
    imageContainer.scrollHeight - imageContainer.clientHeight
  ) {
    newScrollTop = imageContainer.scrollHeight - imageContainer.clientHeight;
  }

  imageContainer.scrollLeft = newScrollLeft;
  imageContainer.scrollTop = newScrollTop;
}

// Eventos de mouse
imageContainer.addEventListener("mousedown", startDrag);
imageContainer.addEventListener("mouseleave", stopDrag);
imageContainer.addEventListener("mouseup", stopDrag);
imageContainer.addEventListener("mousemove", drag);

// Eventos de toque
imageContainer.addEventListener("touchstart", startDrag);
imageContainer.addEventListener("touchend", stopDrag);
imageContainer.addEventListener("touchmove", drag);
