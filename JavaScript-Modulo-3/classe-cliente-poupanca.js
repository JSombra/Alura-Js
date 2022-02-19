class Cliente {
    constructor(nome, cpf, email, saldo) {
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo += valor
    }

    exibirSaldo(valor) {
        console.log(this.saldo);
    }
}

class ClientePoupanca extends Cliente{
    constructor(nome, cpf, email, saldo, saldoPoupanca){
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }
    depositarPoupanca(valor){
        this.saldoPoupanca += valor
    }
}

const jefferson = new ClientePoupanca("Jefferson", "jefferson@email.com", "11009922211", 400, 800)

const raquel = new Cliente("Raquel", "11022233399", "raquell@email.com", 1000)

jefferson.depositarPoupanca(200) // método apenas existe para clientes criados a partir da classe ClientePoupanca
jefferson.depositar(600)
console.log(jefferson);

console.log("-------------------");

console.log(raquel);
raquel.depositar(1000)
console.log(raquel);
