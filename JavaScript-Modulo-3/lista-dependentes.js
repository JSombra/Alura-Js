const cliente = {
    nome: 'Jefferson',
    idade: 22,
    cpf: '11122233344',
    email: 'email@email.com',
    fones: ['11999887766', '11977665544'],
    dependentes: [{
        nome: 'Sara Silva',
        parentesco: 'Filha',
        dataNasc: '20/03/2011'
    }]
}

cliente.dependentes.push({ //push adiciona um novo dado ao final de um array
    nome: 'Samia Maria',
    parentesco: 'Tia',
    dataNasc: '04/02/1989'
})

console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependentes => dependentes.dataNasc === "20/03/2011")

console.log(filhaMaisNova[0].nome);