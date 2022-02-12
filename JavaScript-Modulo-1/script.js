//Var não deve ser mais utilizado, apenas Let e Const
// var altura = 2;
// var comprimento = 7;
// var area = altura * comprimento;

// console.log(area)

// let forma = "Retângulo";
// let altura = 2;
// let comprimento = 7;
// let area;

// console.log(area)

// if (forma === "Retângulo") {
//     area = altura * comprimento;
// } else {
//     area = (altura * comprimento) / 2
// }
// console.log(area)

const forma = "Triângulo";
const altura = 5;
const comprimento = 10;
let area;

if (forma === "Quadrado") {
    area = altura * comprimento
} else {
    area = (altura * comprimento) / 2
}
console.log(area)