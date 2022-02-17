function Cliente (nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function (valor) {
        this.saldo += valor
    }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const jefferson = new ClientePoupanca("Jefferson", "11344566790", "jefferson@outlook.com", 100, 200)

console.log(jefferson);

ClientePoupanca.prototype.depositarPoup = function (valor) {
    this.saldoPoup += valor
}


jefferson.depositarPoup(1000)
console.log(jefferson.saldoPoup);