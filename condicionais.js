// Condicionais
// Em javaScript, o sinao de tres igual geralmente para ser verdadeiro ela valida o tipo de dado do valor da variavel, diferente de quando tem dois sinais de igula que so 
// Valida o numero independentemente de ser uma string com numero dois sempre sera verdade.

let sum = 1 + 1;

if(sum === 2){
    console.log("Sum is 2!");
}else{
    console.log("Sum is not 2!");
}

let sum0 = 1 + 1;
if(sum0 == '2'){
    console.log("Sum is 2!");
}else{
    console.log("Sum is not 2!");
}

if(sum0 === '2'){
    console.log("Sum is 2!");
}else{
    console.log("Sum is not 2!");
}

// Para estes casos, teremos as seguintes saidas: 
// Sum is 2!
// Sum is 2!
// Sum is not 2!

const sum1 = 2 + 2;
const sum2 = 3 + 10;

if(sum1 === 4 && sum2 === 6){
    console.log("Sum is 4 and sum2 is 6!");
}

if(sum1 === 4 || sum2 === 6){
    console.log("Sum1 is 4 or sum2 is 6!");
}

// Entendo Ternary

const sum3 = 1 + 1;

// Com if e else teriamos algo como:

if(sum3 === 2){
    console.log("Sum3 is 2!");
}else{
    console.log("Sum3 is 4");
}

// Com ternary teriamos algo como:

let number = sum3 === 2 ? 2 : 4

console.log(number)

