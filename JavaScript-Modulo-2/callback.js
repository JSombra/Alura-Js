const nomes = ['Jefferson', 'Raquel', 'Stephany']
const notas = [10, 9, 8]
let indice = 0
nomes.forEach(imprimeDados, indice)
notas.forEach(imprimeDados)
function imprimeDados (dados) {
    console.log(dados);
}

