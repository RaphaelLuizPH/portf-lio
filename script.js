AOS.init({duration: 400, delay: 400,}
);

function mudarTema() {
  const html = document.documentElement;
  html.classList.toggle("dark");
}
/*
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

  m = ChecarTempo(m);
  s = ChecarTempo(s);

  document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;

  setTimeout(startTime, 1000);
}

function ChecarTempo(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
*/