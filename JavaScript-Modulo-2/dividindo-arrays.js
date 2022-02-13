const alunos = ["João", "Juliana", "Ana", "Caio", "Marjorie", "Guilherme", "Aline", "Fabiana", "Andre", "Carlos", "Paulo", "Bia", "vivian", "Isabela", "Vinicius", "Renan", "Renata", "Daysi", "Camilo", "Jefferson"];

const sala1 = alunos.slice(0, alunos.length/2);
const sala2 = alunos.slice(alunos.length/2)

console.log(alunos);
console.log("-------------------------");
console.log(`Alunos da sala 1 ${sala1}`);
console.log("-------------------------");
console.log(`Alunos da sala 2 ${sala2}`);