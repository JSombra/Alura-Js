const notas = [10, 6, 8, 10]
notas.push(7) //push adiciona um elemento ao array
notas.pop() // pop remove o último elemento de um array


// notas.splice(3, 1) splice remove um elemento do array definindo primeiro o indice que deve ser considerado. No exemplo, está dizendo. A partir do indice 3, remova 1 elemento

console.log(notas);

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(`A média é ${media}`)