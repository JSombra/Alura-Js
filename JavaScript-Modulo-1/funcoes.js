function imprimeTexto(texto) {
    console.log(texto)
}

function soma (x, y) {
    return x + y;
}

function nomeIdade (nome, idade) {
    return `Meu nome é ${nome}, e minha idade é ${idade}`    
}

function multiplica (x, y) {
    return x * y;    
}


console.log(soma(50, 50));
imprimeTexto(soma(40, 90))
console.log(nomeIdade("Jefferson", 22));
console.log(multiplica(soma(4, 5), soma(9, 10)))