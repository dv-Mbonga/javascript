// Entendendo JSON
// Quando estamos transitando dados do front-End para um back-End, não conseguimos enviar dados como uma lista ou objeto, então enviamos como JSON

// Exemplo

const todos = [
    {
        id: 1,
        descricao: "Estudar programação",
        compltado: false
    },
    {
        id: 2,
        descricao: "Ler",
        compltado: true,
    },
    {
        id: 3,
        descricao: "Treinar",
        compltado: true,
    },
];

// Imagina que etes dados vamos enviar para uma API (Servidor), teremos que converter estes dados para JSON. Então:

const todosJSON = JSON.stringify(todos);

console.log(todos)

// E para converter o JSON para uma lista basta: 

const todosList = JSON.parse(todosJSON);

console.log(todosList);