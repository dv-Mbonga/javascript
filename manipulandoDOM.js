// Manipulando elementos do DOM

// Vamos começando removendo um elemento. Exemplo, vamos remover a lista de itens que temos no formulario

const items = document.querySelector(".items");

console.log(items);

// Com este codigo, removemos todos os elementos da lista
//items.remove();
//console.log(items);

//Removendo somente um elemento
//console.log(items.firstElementChild.remove());

// Removendo o ultimo elemento
//console.log(items.lastElementChild.remove());

// Modificando o elemento do meio

items.children[1].textContent = "Item Um";

// Mudando o ultimo elemento

items.lastElementChild.innerHTML = "<h1>Hello World!</h1>"

// Vamos agora para um exemplomais realista, vamos mudar a cor do nosso botao

const button = document.querySelector(".btn");

button.style.background = "red";