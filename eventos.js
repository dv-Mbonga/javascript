// Eventos - São formas que determinadas acão se acontece.
// Um exemplo seria, pretender algo assim que apertar no botão submit

//Pegando o evento escutando pelo click ao botão e imprimir uma mensagem...
const submitButton = document.querySelector('#submit-button');



// Pegando os dados do formulario

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const myForm = document.querySelector("#my-form");
const item = document.querySelector(".items")
const body = document.querySelector("body");

submitButton.addEventListener("click", function(e){
    e.preventDefault();
    //console.log("Clicked!");

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if(nameValue === '' || emailValue === ''){
       return alert("Por favor, preencha todos os campos!")
    }

    //Colocando os dados vindo do formulario na text do formulario abaixo

    myForm.style.background = "red";
    item.firstElementChild.textContent = nameValue;
    item.children[1].textContent = emailValue;
    body.style.background = 'white'
 
});