const cliente = {
    nome:"Jefferson",
    idade: 22,
    cpf: "99999999900",
    email: "soombra73@gmail.com",
    telefone: ["1190099-0099", "11900110011"]
}

const info = ['nome', 'idade', 'cpf', 'email', 'telefone']

// info.forEach(chaves => console.log(cliente[chaves]))

// console.log(cliente);

cliente.telefone.forEach(fones => console.log(fones));