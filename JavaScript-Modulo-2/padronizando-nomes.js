let nomes = ['ana Julia', 'Caio vinicius', 'BIA silva']
let primeiroNome = 'JeFfErSoN'

const nomesMaiusculos = nomes.map(nome => {return nome.toUpperCase()})// toUpperCase() deixa todas as letras maiusculos

console.log(nomesMaiusculos);

const nomesMinusculos = nomes.map(nome => {return nome.toLowerCase()}) // toLowerCase() deixa todas as letras minusculas

console.log(nomesMinusculos);

let primeiraLetraMaiuscula = primeiroNome[0].toUpperCase()

for (let i = 1; i < primeiroNome.length; i++) {
    primeiraLetraMaiuscula += primeiroNome[i].toLowerCase();
}
console.log(primeiraLetraMaiuscula);