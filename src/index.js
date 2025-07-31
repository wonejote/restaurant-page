//index,js
import "./styles.css";
import {cargarAbout} from "./about";
import {cargarMenu} from "./menu";
import {cargarHome} from "./home";

console.log("pagina de restaurante usando webpack");
cargarHome();

const content = document.querySelector("#content");
const botones = document.querySelectorAll("button");

botones.forEach(boton => {
   boton.addEventListener("click",() =>
{
    switch(boton.id)
    {
        case "menu": {
            cargarMenu();
            break;
        }
        
        case "home" : {
            cargarHome();  
            break;
        }
               
        case "about" :{
            cargarAbout();
            break;
        }

    }
})
    
});