class Cliente {
    constructor (nome, email, cpf, saldo){ //nome da classe sempre com a primeira letra maiuscula
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo += valor
    }
    exibirSaldo(){
        console.log(`Novo Saldo R$ ${this.saldo}`);
    }
}

const jefferson = new Cliente("Jefferson", "jefferson@email.com", "11122233399", 1000)

console.log(jefferson)

jefferson.depositar(670)

jefferson.exibirSaldo()