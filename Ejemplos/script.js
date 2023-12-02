//clases
/*class Animal{
    constructor(patas, tamanio){
        this.patas = patas;
        this.tamanio = tamanio;
    }
}

class Gato extends Animal{
    constructor(patas, tamanio, color){
        super(patas, tamanio);
        this.color = color;
    }
}

const perro = new Animal(4, "Mediano");
console.log(perro); // {patas: 4, tamanio: 'Mediano'}

//funciones

function mensaje(nombre){
    console.log(`Hola ${nombre}`);
}

const mensaje1 = (nombre) => {
    //template string
    console.log(`Hola ${nombre}`);
}

mensaje("Juan");
mensaje1("Pedro");

//Desestructuracion de objetos

const persona = {
    nombre :"Pepe",
    apellido:"Lopez",
    edad:30
};
const {nombre ,apellido,edad}=persona;
console.log(nombre);
console.log(apellido);
console.log(edad);
//-----------------------------------------------

const web = {
    nombre: "Udenar",
    links: {
      sitio: "www.udenar.edu.co"
    },
    redesSociales: {
      youtube: {
        enlace: "www.youtube.com/udenar",
        nombre: "Youtube Udenar"
      },
      facebook:{
        enlace: "www.facebook.com/udenar",
        nombre: "Facebook Udenar"
      },
      instagram:{
        enlace: "www.instagram.com/udenar",
        nombre: "Instagram Udenar"
      }
    }
}

const {links, redesSociales} = web;
const {instagram:instagramnuevo} = web.redesSociales;

console.log(links);
console.log(redesSociales);
console.log(instagramnuevo);

//Desestructuracion de arreglos
let numeros=[5,6,7];
[numeros5,numeros6,numeros7]=numeros;
console.log(numeros5);

//operador de propagacion

const frutas = ['manzana', 'pera', 'mango', 'fresa'];
const dulces = ['mermelada', 'manjar', 'Helado', ...frutas];

console.log(dulces);*/

//Tipo Modulo
import {pi, suma} from './modulo.js';
console.log(pi);
suma(3,4);
