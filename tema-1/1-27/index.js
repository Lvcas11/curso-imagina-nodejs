// import { multiplicar, sumar, restar } from "./operaciones";

// console.log("la suma entre 1 y 2 es: ", sumar(1, 2));
// console.log("la resta entre 1 y 2 es: ", restar(1, 2));
// console.log("la multiplicacion entre 1 y 2 es: ", multiplicar(1, 2));

// import operaciones from "./operaciones";
// console.log("la suma entre 1 y 2 es: ", operaciones.sumar(1, 2));
// console.log("la resta entre 1 y 2 es: ", operaciones.restar(1, 2));
// console.log(
//   "la multiplicacion entre 1 y 2 es: ",
//   operaciones.multiplicar(1, 2)
// );

// import Operaciones from "./operaciones";

// const operaciones = new Operaciones();

// console.log("la suma entre 1 y 2 es: ", operaciones.sumar(1, 2));
// console.log("la resta entre 1 y 2 es: ", operaciones.restar(1, 2));
// console.log(
//   "la multiplicacion entre 1 y 2 es: ",
//   operaciones.multiplicar(1, 2)
// );

import { Operaciones } from "./operaciones";

const operaciones = new Operaciones();

console.log("la suma entre 1 y 2 es: ", operaciones.sumar(1, 2));
console.log("la resta entre 1 y 2 es: ", operaciones.restar(1, 2));
console.log(
  "la multiplicacion entre 1 y 2 es: ",
  operaciones.multiplicar(1, 2)
);
