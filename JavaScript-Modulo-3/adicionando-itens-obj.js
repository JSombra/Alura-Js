const cliente = {
    nome:"Jefferson",
    idade: 22,
    cpf: "12312312311",
    email: "soombra73@gmail.com"
}

cliente.telefone = "(11)99111-1111"
cliente.conta = "12345-0"

const info = ['nome', 'idade', 'cpf', 'email', 'telefone', 'conta']

console.log(cliente);
info.forEach(indice => console.log(cliente[indice]))

cliente.telefone = "(11)22233-1091" // essa nova informação será reescrita. Logo o novo valor de telefone será esse, e não o da linha 8

console.log(cliente);