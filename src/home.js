

export function cargarHome() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const seccionHome = document.createElement("section");
  seccionHome.classList.add("home");

  const titulo = document.createElement("h1");
  titulo.textContent = "Bienvenido a La Cocina de Abuela";

  const descripcion = document.createElement("p");
  descripcion.textContent = "Cocina tradicional colombiana con el sabor de casa.";

  

  seccionHome.appendChild(titulo);
  seccionHome.appendChild(descripcion);
  

  content.appendChild(seccionHome);
}
