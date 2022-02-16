const cliente = {
    nome:"Jefferson",
    idade: 22,
    cpf: "99999999900",
    email: "soombra73@gmail.com",
    telefone: ["1190099-0099", "11900110011"]
}

cliente.dependente = {
    nome: 'Sara',
    parentesco: 'Tia',
    dataDeNasc: '10/07/1980'
}

// console.log(cliente);

cliente.dependente.nome = 'Sara Silva'
// console.log(cliente);

cliente.dependente.filho = {
    nome: 'José',
    idade: 8,
    grauDeParentesco: 'Terceiro Grau',
    dataDeNasc: '01/01/2014'
}

// console.log(cliente);

cliente.dependente.filho.nome = 'José da Silva'

console.log(cliente);