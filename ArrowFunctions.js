// Entendendo funções

function sum(a, b){
    console.log(a + b);
}

sum(2, 10);

function multiplicacao(a, b){
    return a * b;
}

const mult = multiplicacao(4, 4);
console.log(mult);

// Se por acaso no parametro da chamada da funcao passarmos um unico numero, podemos dizer ao JS para assumir o valor do parametro da funcao. Exemplo

function subtrair(a, b = 2){
    return a - b;
}

const sub = subtrair(10);
console.log(sub)

// Arrow Function. Vamos repetir as mesmas funcoes que fizemos acima para se entender o conceito de arrow function

const sumArrow = (a, b) => {
    return a + b;
}

const sumValue = sumArrow(2, 2);
console.log(sumValue);

//Tambem eh valido fazer assim, ja que somente temos uma unica linha dentro do escopo da funcao
const multiplicacaoArrow = (a, b = 4) =>  a * b;

const multiplicacaoValue = multiplicacaoArrow(8);
console.log(multiplicacaoValue);


//Tambem podemos imprimir o numero em que se vai operar e ter o seu resultado, neste caso que temos mais de uma linha de codigo, não poderiamos eliminar os {}
const subtrairArrow = (a, b = 2) => {
    console.log(a,b);
    return a - b;
}

const subtrairValue = subtrairArrow(10);
console.log(subtrairValue);