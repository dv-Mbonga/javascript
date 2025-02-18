// Variaveis
// Vamos ver somente variaveis mais basicas, e o estudo sera incremental cada vez que sentirmos necessidade de implementar algo explicaremos e aplicaremos.

// var não é a forma mais legar de declarar variaveis
/*
if(1 + 1 === 2){
    var message = 'Hello world!'
}

alert(message)
*/

/*
const messageConst = 'Hello world!'

//isso gera um erro porque const são constantes e são imutáveis
messageConst = 'Ola mundo!'
*/

//String

const firstName = 'Leonardo'
const lastName = "Di Caprio"

//Concatenando Strings
console.log('Meu nome é ' + firstName + ' ' + lastName)

//Outra forma seria usando template strings

console.log(`Meu nome eh ${firstName} ${lastName}`)

// Existem metodos que ajudam a manipular a string
// toUpperCase() - Exibir toda string em maiusculo
// toLoweCase() - Exibir toda string em minusculo

console.log(`Meu nome é ${firstName.toUpperCase()} ${lastName.toLocaleLowerCase()}`)
console.log(`Meu nome é ${firstName.toLowerCase()} ${lastName.toUpperCase()}`)

// Tambem temos os metodos split 
// split basicamente corta a string em listas

const names = 'Leonardo,Baião,Juliana';

console.log(names.split(","))


const name = `Leonardo`;

console.log(name.split(""))

// Numbers
const number = 5;

console.log(Number.toString())
console.log(typeof number)
console.log(typeof number.toString())

// Booleanos

console.log( 2 == 3)
console.log(2 == 2)

// Null e undefined

const x = null;
const y = undefined;

// Listas

const list = [1, 2, 3, 4, 5]

// Objectos

const Object = {name: "Leonardo"}