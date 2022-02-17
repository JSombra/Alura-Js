const clientes = [
    {
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
        }]
    },
    {
        nome: 'Raquel',
        idade: 24,
        cpf: '55522233344',
        email: 'email2@emailemail.com',
        fones: ['11999887116', '11977665544'],
        dependentes: [{
            nome: 'José Silva',
            parentesco: 'Filha',
            dataNasc: '20/03/2011'},
        {
            nome: 'Claudia Maria',
            parentesco: 'Tia',
            dataNasc: '04/02/1989'
        }]
    },
    {
        nome: 'Joana',
        idade: 24,
        cpf: '55522233344',
        email: 'email2@emailemail.com',
        fones: ['11999887116', '11977665544'],
        dependentes: [{
            nome: 'Sabrina Silva',
            parentesco: 'Filha',
            dataNasc: '20/03/2011'},
        {
            nome: 'Marcos Lok',
            parentesco: 'Tia',
            dataNasc: '04/02/1989'
        }]
    },
    {
        nome: 'Lucas',
        idade: 24,
        cpf: '55522233344',
        email: 'email2@emailemail.com',
        fones: ['11999887116', '11977665544'],
        dependentes: [{
            nome: 'Felipe Silva',
            parentesco: 'Filha',
            dataNasc: '20/03/2011'},
        {
            nome: 'Cristina Maria',
            parentesco: 'Tia',
            dataNasc: '04/02/1989'
        }]
    },
    {
        nome: 'Luiz',
        idade: 24,
        cpf: '55522233344',
        email: 'email2@emailemail.com',
        fones: ['11999887116', '11977665544'],
        dependentes: [{
            nome: 'Luciana Silva',
            parentesco: 'Filha',
            dataNasc: '20/03/2011'},
        {
            nome: 'Vitoria Maria',
            parentesco: 'Tia',
            dataNasc: '04/02/1989'
        }]
    },
]

let listaDependentesFor = []
let listaDependentesForEach = []


for (let i = 0; i < clientes.length; i++) {
    listaDependentesFor.push(...clientes[i].dependentes)
}

//2 formas de resolver o desafio. Com for e forEach
clientes.forEach((clientes) => listaDependentesForEach.push(...clientes.dependentes))

console.table(listaDependentesFor)
console.log("--------Tabela de Cima feita com For, Tabela de Baixo Feita com forEach-------");
console.table(listaDependentesForEach)





//     Anotação
// const converterObjJSON = JSON.stringify(clientes) // Converte um objeto em formato JSON
// console.log(converterObjJSON);
// console.log(JSON.parse(converterObjJSON)); Converte um formato JSON em Objeto