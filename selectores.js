//Selecionando um elemento
/*
const addUserText = document.getElementById('add-user');

console.log(addUserText)

addUserText.innerText = "Adicionar user";*/

// Selecionando elemento com querySelector

const addUserText = document.querySelector("#add-user");

addUserText.textContent = "Adicionar Usuario";

console.log(addUserText);

// Estes comandos acima servem para selecionar um elemento


//Pegando o formuario
const myForm = document.querySelector(".container #my-form");
console.log(myForm);

//Pegando o primeiro elemento numa lista ou itens

const item = document.querySelector(".item");
console.log(item);


//Selecionando multiplos elementos

const allElements = document.querySelectorAll(".item");
console.log(allElements);

// Outra forma de pegar todos os intem da lista

const alliItems = document.getElementsByClassName(".item");
console.log(alliItems);

// A melhor forma de pegar todos elementos numa lista sempre será usando querySelectorAll porque
// querySelectorAll retorna uma lista e a lista podemos manipular

// Ainda sobre pegar os elementos de uma lista, podemos usar também o getElementsByTagName

const allItemsTagName = document.getElementsByTagName("li");
console.log(allItemsTagName);

//Att: Aconselho a usar querySelector porque retorna uma lista e podemos facilmente manipular, diferente das otras formas que retornam uma collection