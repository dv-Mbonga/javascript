// listas

const names = ["Leonardo", "Juliana", "Bernardo", "André", 10, false];

const Juliana = names[1];

console.log(Juliana)

// Adicionando nomes no final da lista
names.push('Lurdes')

console.log(names)


// Adicionando dado no inicio da lista

names.unshift(20)

console.log(names)

names.unshift("Fernanda")

console.log(names)

// Metodo pop() remove o ultimo valor ou dado de uma lista

names.pop()

console.log(names)

names.pop()

console.log(names)

// Saber o indice de determinado elemento

console.log(names.indexOf('Bernardo'))

// Ordernar a lista de forma alfabetica

const ordenarNames = names.sort();

console.log(ordenarNames)

// Verificar quantos itens a lista possui

console.log(names.length)

// verificar se determinada variavel é uma lista

const namesIsArray = Array.isArray(names)

console.log(namesIsArray)