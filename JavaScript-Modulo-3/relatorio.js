const cliente = {
    nome: 'Jefferson',
    idade: 22,
    cpf: '11122233344',
    email: 'email@email.com',
    fones: ['11999887766', '11977665544'],
    dependentes: [{
        nome: 'Sara Silva',
        parentesco: 'Filha',
        dataNasc: '20/03/2011'},
    {
        nome: 'Samia Maria',
        parentesco: 'Tia',
        dataNasc: '04/02/1989'
    }],
    saldo: 100,
    depositar: function(valor) {
        this.saldo += valor
    }
}

let relatorio = "";

for (let info in cliente) {
    if (typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue
    } else {
        relatorio += `
        ${info} ===> ${cliente[info] }
        `
    }
}

console.log(relatorio);
