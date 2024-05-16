// Forma 1
// const multiplicar = (a, b) => a * b;
// const restar = (a, b) => a - b;
// const sumar = (a, b) => a + b;

// export { multiplicar, restar, sumar };

// Forma 2
// export const multiplicar = (a, b) => a * b;
// export const restar = (a, b) => a - b;
// export const sumar = (a, b) => a + b;

// Forma 3
// export function multiplicar(a, b) {
//   return a * b;
// }
// export function restar(a, b) {
//   return a - b;
// }
// export function sumar(a, b) {
//   return a + b;
// }

// Forma 4
// export default {
//   sumar(a, b) {
//     return a + b;
//   },
//   restar(a, b) {
//     return a - b;
//   },
//   multiplicar(a, b) {
//     return a * b;
//   },
// };

// Forma 5

// export default class Operaciones {
//   sumar(a, b) {
//     return a + b;
//   }
//   restar(a, b) {
//     return a - b;
//   }
//   multiplicar(a, b) {
//     return a * b;
//   }
// }

// Forma 6

export class Operaciones {
  sumar(a, b) {
    return a + b;
  }
  restar(a, b) {
    return a - b;
  }
  multiplicar(a, b) {
    return a * b;
  }
}
