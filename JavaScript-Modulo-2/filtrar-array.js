const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro']
const notas = [4, 4.5, 4, 7.5]

const alunosReprovados = alunos.filter((_, indice) => notas[indice] < 5);
console.log(`Reprovados: ${alunosReprovados}`);
