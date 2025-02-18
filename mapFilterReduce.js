// Entendendo Map, Filter e Reduce
// São funções ou métodos em String muito úteis no usu das listas


// Imagine que cada valor da lista pretendemos multiplicar por 2 [1, 4, 6, 8, 10], para isso usamos o Map
const numbers  = [1, 2, 3, 4, 5]

const numeroMultplicadosPorDois = numbers.map(function(numbers){
    return numbers * 2;
})

console.log(numeroMultplicadosPorDois)


// Filter 
// Imagina que pretendemos pegar o conjunto de numeros que obedecem uma determinada caracteristica
// Numeros ou idades pares por exemplo, filter filtra as idades e retorna numa nova lista as idades pares

const ages = [8, 13, 27, 30, 22, 40];

const agesPares = ages.filter(function(age){
    return age % 2 === 0;
})

console.log(agesPares)

// Reduce
// Imagine que pretendemos reduzir todos os itens da lista por um so
// Imagine que pretendemos somar todas as idades da variavel "ages"

const somaNumeros = ages.reduce(function(age, acumulador){
    return acumulador + age;
}, 0)

console.log(somaNumeros)