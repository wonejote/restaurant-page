

export function cargarAbout() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const seccionAbout = document.createElement("section");
  seccionAbout.classList.add("about");

  const titulo = document.createElement("h1");
  titulo.textContent = "Sobre Nosotros";

  const historia = document.createElement("p");
  historia.textContent = "Fundado en 1995, nuestro restaurante familiar ha sido un lugar de encuentro para quienes buscan el auténtico sabor colombiano. Cocinamos con amor y tradición.";

  const ubicacion = document.createElement("p");
  ubicacion.textContent = "📍 Estamos ubicados en Medellín, Colombia. Calle Sabor No. 123.";


  seccionAbout.appendChild(titulo);
  seccionAbout.appendChild(historia);
  seccionAbout.appendChild(ubicacion);
  

  content.appendChild(seccionAbout);
}