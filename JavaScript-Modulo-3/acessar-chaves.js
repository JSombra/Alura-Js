const cliente = {
    nome:"Jefferson",
    idade: 22,
    cpf: "12312312311",
    email: "soombra73@gmail.com"
}

const chaves = ['nome', 'idade', 'cpf', 'email']
// console.log(cliente[chaves[0]]); //notação de colchetes

for (let i = 0; i < chaves.length; i++) {
    console.log(cliente[chaves[i]])
}

chaves.forEach(chave => console.log(cliente[chave]));//forEach passa pelo loop toda vez, pegando um novo dado do array. a primeira vez, a váriavel chave, representa nome, na segunda idade, e assim sucessivamente. Com isso, utilizando a notação de colchetes, ele pode ser passado como indice para mostrar os elementos de um objeto

