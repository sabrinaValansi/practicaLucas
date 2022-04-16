import {factura} from "./src/facturas.js";



//console.log(factura);

factura.forEach(dato => console.log(dato));

console.log("----ORDEN MENOR A MAYOR----");
factura.sort((a,b)=>a.importe-b.importe);
console.log(factura);
console.log("----ORDEN MAYOR A MENOR----");
factura.sort((b,a)=>a.importe-b.importe);
console.log(factura);clearScreenDown

console.log("----filtro importe mayor a 2000----");
const facturasFiltradas= factura.filter(dato => dato.importe>2000);
console.log(facturasFiltradas);

console.log("----nuevo objeto----");
const nuevaFactura = factura.map(dato => {return{num:dato.numero,imp:dato.importe*2}});
console.log(nuevaFactura);

console.log("----Acumulador----");
let sumaFacturas = factura.reduce((acumulador,fact)=>acumulador+fact.importe,0);
console.log(sumaFacturas);

console.log("------ARCHIVO DE TEXTO------");
import fs from 'fs'
import { clearScreenDown } from "readline";

const textoNuevo = '\nesto es un texto nuevo';

fs.appendFileSync( './textos/texto.txt' , textoNuevo ) ;

const datos = fs.readFileSync('./textos/texto.txt','utf-8');

console.log(datos);

const diAlgo = (texto) => console.log(texto);

setTimeout(()=> {
    diAlgo("Pasaron 3 segundos");
    console.log("Terminado");
},3000);
setTimeout(()=> {
    diAlgo("Pasaron 7 segundos");
    console.log("Terminado");
},7000);

