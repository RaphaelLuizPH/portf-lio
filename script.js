AOS.init({ duration: 1000, delay: 400 });

let quemsou = document.querySelector("#quemsou");
let Objetivos = document.querySelector("#Objetivos");
let Experiência = document.querySelector("#Experiência");
let Skills = document.querySelector("#Skills");
let quem = document.querySelector("#quemsoubutton");
let obj = document.querySelector("#obj");
let xp = document.querySelector("#xp");
let skills = document.querySelector("#skills");
let aboutmebutton = document.querySelector(".sobremim");
quemsou.style.display = "flex";
quem.style.border = "var(--icon-color) solid 1px";
Objetivos.style.display = "none";
Experiência.style.display = "none";
Skills.style.display = "none";

// Muda o tema
function mudarTema() {
  const html = document.documentElement;
  html.classList.toggle("dark");
}

const aboutmelist = [quemsou, Objetivos, Experiência, Skills];
const aboutmebuttonlist = [quem, obj, xp, skills];

function txtselct(n) {
  for (let i = 0; i < aboutmelist.length; i++) {
    if (i !== n) {
      aboutmebuttonlist[i].style.border = "none";
      aboutmelist[i].style.display = "none";
    } else {
      aboutmebuttonlist[i].style.border = "var(--icon-color) solid 1px";
      aboutmelist[i].style.display = "flex"; 
    }
  }
}

// Calcula idade

var ano = new Date().getFullYear();
idade = document.querySelector("#idade");
idade.innerText = ` ${ano - 2002}   ` + `anos de idade, `;

// Esconde ou mostra o texto

aboutmebutton.addEventListener("click", aboutme);

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
