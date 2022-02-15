const notas = [10, 6, 8, 10]
notas.push(7) //push adiciona um elemento ao array
notas.pop() // pop remove o último elemento de um array

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(`A média utilizando contas salvas em uma variável Let ${media}`)

// notas.splice(3, 1) splice remove um elemento do array definindo primeiro o indice que deve ser considerado. No exemplo, está dizendo. A partir do indice 3, remova 1 elemento


//-----------------------------------
function mediaAluno (notasDoAluno) {
    const soma = notasDoAluno.reduce((i, nota) => nota + i,0)
    return soma/notasDoAluno.length
}
const mediaNovo = notas.reduce((acum, atual) => atual + acum, 0) /notas.length

// resolução simplificada, utilizando o metodo .reduce, praticado no arquivo media-das-turmas.js
//-----------------------------------

console.log(`A média utilizando uma função é ${mediaAluno(notas)}`);
console.log(`A média utilizando uma Arrow Function é ${mediaNovo}`);