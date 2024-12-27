import { Maridaje } from "./classes/maridaje.js";
import { Varietal } from "./classes/varietal.js";
import { Vino } from "./classes/vino.js";
import { TipoUva } from "./classes/tipoUva.js";
import { Resena } from "./classes/resena.js";
import { Bodega } from "./classes/bodega.js";
import { RegionVitivinicola } from "./classes/regionVitivinicola.js";
import { Pais } from "./classes/pais.js";
import { Provincia } from "./classes/provincia.js";
const descripcionesDeVinos = [
    "Un vino tinto con aromas intensos de frutas rojas y un toque de roble.",
    "Este vino blanco destaca por sus notas cítricas y un final refrescante.",
    "Un elegante vino rosado con un bouquet floral y un sabor afrutado.",
    "Un vino espumoso con burbujas finas y un toque de manzana verde.",
    "Un vino tinto con cuerpo, taninos firmes y un retrogusto a chocolate negro.",
    "Un vino blanco seco con un equilibrio perfecto entre acidez y dulzor.",
    "Un vino dulce de postre con notas de miel y albaricoque.",
    "Este vino tinto joven ofrece una explosión de frutas frescas y un final suave.",
    "Un vino rosado ligero con aromas a fresa y un toque de hierbas.",
    "Un vino blanco afrutado con un toque de vainilla y un final cremoso.",
    "Un vino tinto robusto con notas de cuero y especias, ideal para carnes a la parrilla.",
    "Un vino blanco ligero y refrescante con aromas a limón y hierbas frescas.",
    "Un vino rosado seco con toques de cereza y un final elegante.",
    "Un vino espumoso brut con burbujas finas y notas de pera madura.",
    "Un vino tinto suave y sedoso con notas de vainilla y frutos rojos.",
    "Un vino blanco afrutado con un toque de melocotón y un final persistente.",
    "Un vino dulce y afrutado con notas de ciruela y especias.",
    "Un vino tinto joven con aromas intensos a moras y un sabor equilibrado.",
    "Un vino rosado fresco y afrutado con notas de frutas del bosque y hierbas frescas.",
    "Un vino blanco seco con notas cítricas y minerales, perfecto para mariscos."
]; // array con descripciones del vino
const maridajes = [
    { nombre: "Quesos y Embutidos", descripcion: "Un acompañamiento clásico con una variedad de quesos y embutidos." },
    { nombre: "Pescados y Mariscos", descripcion: "Perfecto para vinos blancos, combina pescados frescos y mariscos." },
    { nombre: "Carnes Rojas", descripcion: "Ideal para vinos tintos, resalta el sabor de las carnes a la parrilla." },
    { nombre: "Ensaladas Frescas", descripcion: "Ligero y refrescante, complementa los vinos rosados." },
    { nombre: "Postres Dulces", descripcion: "Un maridaje para vinos dulces, incluye pasteles y frutas." },
    { nombre: "Comida Italiana", descripcion: "Pizza y pasta que maridan perfectamente con vinos tintos y blancos." },
    { nombre: "Tapas Españolas", descripcion: "Una variedad de tapas que resaltan con diferentes tipos de vinos." },
    { nombre: "Sushi y Sashimi", descripcion: "Combina muy bien con vinos blancos y espumosos." },
    { nombre: "Asados", descripcion: "El acompañamiento perfecto para vinos tintos robustos." },
    { nombre: "Platos Picantes", descripcion: "Marida con vinos que pueden balancear el picante de la comida." }
];
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function crearBodega() {
    let region = new RegionVitivinicola("La tierra es roja", "Tierra");
    // let provincia =  new Provincia('Cordoba', [region])
    let provincia = new Provincia('Cordoba');
    provincia.establecerRegion(region);
    // let pais = new Pais('Argentina', [provincia])
    let pais = new Pais('Argentina');
    pais.establecerProvincia(provincia);
    let bodega = new Bodega([""], "Bodega rosita, Bodega familiar muy querida por los vecinos", "Fundada en 100 A.C", "Mira que vino", "1900/12/13", region);
    return bodega;
}
let vinos = [];
function generarMaridajeAleatorio() {
    let maridaje = [];
    let indice = generarNumeroAleatorio(0, maridajes.length - 1);
    let maridajeSeleccionado = maridajes[indice];
    let creado = new Maridaje(maridajeSeleccionado.descripcion, maridajeSeleccionado.nombre);
    maridaje.push(creado);
    return maridaje;
}
export const crearVinosAutomaticos = (cantidad) => {
    for (let i = 0; i < cantidad; i++) {
        let anada = generarNumeroAleatorio(1840, 2024);
        let descripcionIndice = generarNumeroAleatorio(0, descripcionesDeVinos.length - 1);
        let notaCataBodega = descripcionesDeVinos[descripcionIndice];
        let nombre = `Vino ${i + 1}`;
        let maridaje = generarMaridajeAleatorio();
        let precio = generarNumeroAleatorio(50, 1000);
        let varietal = [
            new Varietal('rico', 90, new TipoUva('cordobesa', 'lila')),
            new Varietal('suave', 85, new TipoUva('mendocina', 'malbec'))
        ];
        let bodega = crearBodega();
        let vino = new Vino(anada, "", nombre, notaCataBodega, precio, maridaje, varietal, bodega);
        vinos.push(vino);
    }
    return vinos;
};
function booleanoAleatorio() {
    return Math.random() < 0.5; // Devuelve true si el numero aleatorio es menor que 0.5, de lo contrario devuelve false
}
//CREAR RESENASAAAAASSSS
const frasesResenas = [
    "Muy piola como para pasar el rato con amigos.",
    "Sabroso, pero olor feo.",
    "Una vez me vino con una rata.",
    "Para salir de joda 10/10.",
    "QUIEEEEN SE AH TOMADO TODO EL VINO OH OH OH.",
    "PENSE QUE ERA COCA.",
    "Excelente elección para una cena romántica.",
    "Demasiado amargo para mi gusto.",
    "Perfecto para una tarde de verano en el patio.",
    "Lo compré por su etiqueta bonita, pero resultó ser delicioso.",
    "Un vino que nunca decepciona.",
    "Buen valor por el precio que tiene.",
    "No lo recomendaría a menos que te guste el sabor ácido.",
    "Me recordó a los vinos que probé en mi viaje a Italia.",
    "El maridaje con queso azul es divino.",
    "Un vino complejo que merece ser saboreado lentamente.",
    "Se lleva bien con la comida picante.",
    "No puedo dejar de beberlo, ¡es adictivamente delicioso!",
    "Un aroma embriagador que invita a disfrutarlo.",
    "Lo compré por curiosidad y ahora se ha convertido en mi favorito."
];
// const tipoResena = ['Amigos', 'Sommelier', 'Normal']
// Ejemplo de uso:
export const crearResenaAleatoria = (vino) => {
    let ano = generarNumeroAleatorio(2013, 2024);
    let mes = generarNumeroAleatorio(1, 12);
    let dia = generarNumeroAleatorio(1, 31);
    let fechaResena = `${ano}/${mes}/${dia}`;
    let puntajeResena = generarNumeroAleatorio(0, 10);
    let fraseIndice = generarNumeroAleatorio(0, frasesResenas.length - 1);
    let frase = frasesResenas[fraseIndice];
    const miBooleano = booleanoAleatorio();
    // let resena = new Resena(frase, miBooleano, fechaResena, puntajeResena, vino)
    let resena = new Resena(frase, miBooleano, fechaResena, puntajeResena);
    vino.agregarResena(resena);
};
