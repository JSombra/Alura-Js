const alunos = ['Ana', 'Joana', 'Helena', 'Jefferson']
const mediaAlunos = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, mediaAlunos]

console.log(listaDeNotasEAlunos);

// console.log(`${listaDeNotasEAlunos[0][0]}, sua média é ${listaDeNotasEAlunos[1][0]}`);
// console.log(`${listaDeNotasEAlunos[0][1]}, sua média é ${listaDeNotasEAlunos[1][1]}`);
// console.log(`${listaDeNotasEAlunos[0][2]}, sua média é ${listaDeNotasEAlunos[1][2]}`);
// console.log(`${listaDeNotasEAlunos[0][3]}, sua média é ${listaDeNotasEAlunos[1][3]}`); O Indice 1 seria considerando o array mediaAlunos. Já o indice 0, está se referindo ao array alunos.


for (let index = 0; index < alunos.length; index++) {
    if (listaDeNotasEAlunos[1][index] >= 7) {
        console.log(`${listaDeNotasEAlunos[0][index]}, você foi aprovado(a). Sua média foi ${listaDeNotasEAlunos[1][index]}`);
    } else {
        console.log(`${listaDeNotasEAlunos[0][index]}, você foi reprovado(a). Sua média foi ${listaDeNotasEAlunos[1][index]}`);
    }
}
