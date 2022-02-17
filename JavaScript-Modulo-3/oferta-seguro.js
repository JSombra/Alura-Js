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

function oferecerSeguro(obj) {
    const propostaCliente = Object.keys(obj) //keys retorna a propriedade do objeto
    if (propostaCliente.includes("dependentes")) {
        console.log(`Temos uma proposta de seguros para ${obj.nome}`);
    }
}

oferecerSeguro(cliente)

console.log(Object.values(cliente)); // values mostra os valores das chaves, mas não as propriedades
console.log(Object.entries(cliente)); // entries mostra os valores e propriedades de um objeto em formato de array