const notasIniciais = [10, 9, 8, 7, 6]

const novasNotasFn = notasIniciais.map(pontoExtra) //Código funcionando
function pontoExtra (nota) {
    if (nota == 10) {
        return nota
    } else { 
        return ++nota // ++ antes, adiciona antes de apresentar. ++ depois da variável adiciona depois da conta. Sempre deve ser usado o ++ antes quando o valor tiver que ser adicionado antes. (++ operador de incremento)
    }
}


const novasNotasArrow = notasIniciais.map(notas => {return notas == 10 ? notas : notas++}) //código utilizando uma ArrowFunction

const menosPonto = notasIniciais.map(notas => {return notas - 1})

const menosPontoFn = notasIniciais.map(menosPontoExtra)
function menosPontoExtra (nota) {
    return nota - 1
}

console.log(novasNotasFn);
console.log(novasNotasArrow);
console.log(menosPonto);
console.log(menosPontoFn);

