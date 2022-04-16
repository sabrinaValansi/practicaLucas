console.log("Hola");
console.log("Chau");

//import {factura} from "./src/facturas.js";
//import fs from './textos/texto.txt';

//console.log(factura);

factura.forEach(dato => console.log(dato));

console.log("----ORDEN MENOR A MAYOR----");
factura.sort((a,b)=>a.importe-b.importe);
console.log(factura);
console.log("----ORDEN MAYOR A MENOR----");
factura.sort((b,a)=>a.importe-b.importe);
console.log(factura);

console.log("----filtro importe mayor a 2000----");
const facturasFiltradas= factura.filter(dato => dato.importe>2000);
console.log(facturasFiltradas);

console.log("----nuevo objeto----");
const nuevaFactura = factura.map(dato => {return{num:dato.numero,imp:dato.importe*2}});
console.log(nuevaFactura);

/* const data = fs.readFileSync( './textos/text.txt' , 'utf-8' )
console .log(data) */