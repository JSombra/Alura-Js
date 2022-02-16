const clientes = {
    nome:"Jefferson",
    idade: 22,
    cpf: "12312312311",
    email: "soombra73@gmail.com"
}

console.log(`O nome do cliente é ${clientes.nome}, idade ${clientes.idade}, CPf os 3 primeiros dígitos ${clientes.cpf.substring(0, 3)}, e e-mail ${clientes.email}`);
//notação de ponto, é usada para acessar um dado do objeto.
//método substring, irá mostrar apenas os 3 primeiros dígitos da string CPF, sendo 0 o indice inicial, e o 3 como indice final, para que o método pare antes do indice 3, mostrando apenas o 0, 1 e 2