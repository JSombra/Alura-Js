const idadeMinima = 18;
const idadeCliente = 15;

if (idadeCliente >= idadeMinima) {
    console.log("Maior de Idade")
} else {
    console.log("Menor de Idade")
}

console.log(idadeCliente >= idadeMinima ? "Maior de Idade" : "Menor de Idade") //Operador ternário. if = ? else = :


let a = []
let b = 20
let c = true 
let d = ''

if (b === 20 && c != false && d == 0) {
    console.log("Verdade")    
} else {
    console.log("Falso")
}

if (a == 0) {
    console.log("Verdade")    
} else {
    console.log("Falso")
}