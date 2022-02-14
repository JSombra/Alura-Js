const alunosSala = ['Jefferson', 'Raquel', 'Ana', 'Joana', 'Lucas']
const mediaSala = [7, 8, 10, 8, 5]

let alunoMedia = [alunosSala, mediaSala] 

const exibeNomeNota = (nomeDoAluno) => { //arrow function
    if (alunoMedia[0].includes(nomeDoAluno)) { //includes está buscando o parâmetro passado pelo usuário
        let indice = alunoMedia[0].indexOf(nomeDoAluno)
        // console.log(indice);
        return alunoMedia[0][indice] + ' sua média é ' + alunoMedia[1][indice]
    } else {
        return "Aluno não encontrado"
    }
}

console.log(exibeNomeNota("Raquel"));


