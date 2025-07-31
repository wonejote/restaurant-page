import bandejaImg from './assets/bandejaPaisa.jpg';
import arrozImg from './assets/arrozPollo.png';
import consomeImg from './assets/consome.jpg';


export function cargarMenu() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const titulo = document.createElement("h1");
  titulo.textContent = "Nuestro Menú";
  content.appendChild(titulo);

  const platos = [
    {
      nombre: "Bandeja Paisa",
      imagen: bandejaImg, 
      descripcion: "Una deliciosa bandeja con fríjoles, madurito, arroz, aguacate y carne de res y cerdo"
    },
    {
      nombre: "Arroz con Pollo",
      imagen: arrozImg,
      descripcion: "Clásico arroz con pollo, acompañado de ensalada fresca."
    },
    {
      nombre: "Consomé",
      imagen: consomeImg,
      descripcion: "Consomé de pezcado con todo el sabor de la costa"
    }
  ];

  platos.forEach(plato => {
    const carta = document.createElement("div");
    carta.classList.add("carta");

    const nombre = document.createElement("h2");
    nombre.textContent = plato.nombre;

    const imagen = document.createElement("img");
    imagen.src = plato.imagen;
    imagen.alt = plato.nombre;

    const descripcion = document.createElement("p");
    descripcion.textContent = plato.descripcion;

    carta.appendChild(nombre);
    carta.appendChild(imagen);
    carta.appendChild(descripcion);
    content.appendChild(carta);
  });
}
