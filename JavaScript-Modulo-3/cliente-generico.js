function ClienteFn (nome, email, cpf, saldo) { //Função construtora
    this.nome = nome
    this.email = email
    this.cpf = cpf
    this.depositar = function(valor){
        this.saldo += valor
    }
}

class ClienteClass{ //Class com construtor
    constructor(nome, email, cpf, saldo){
    this.nome = nome
    this.email = email
    this.cpf = cpf
    this.depositar = function(valor){
        this.saldo += valor
    }
    }
}


const novoClienteFn = new ClienteFn('Jefferson', 'jefferson@gmail.com', '22233344455', 500)

const novoClienteClass = new ClienteClass('Jefferson', 'jefferson@gmail.com', '99099011200', 1000)

console.log(novoClienteFn);
console.log(novoClienteClass);