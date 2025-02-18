// Entendendo Loops

for(let index = 1; index <= 20; index++){
    //console.log(index);
}

const cars = ["Ferrari", "Tesla", "Mercedes"];

for(let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

// Podemos fazer com o for melhorado e o resultado ser o mesmo para uma lista de carros conforme declarado acima

console.log("++++++++++++++++++++++++++++++++++")

for(let car of cars){
    console.log(car);
}

// Tambem podemos iterar com forEach, teremos o mesmo resultado. 

console.log("+++++++++++++++++++++++++++++++++")

cars.forEach(function(car){
    console.log(car);
})

// Outra coisa boa iterando com forEach podemos sempre demonstrar o indice o a posição do elemento em representatividade.

console.log("++++++++++++++++++++++++++++++++++++++++++++")

cars.forEach(function(car, index){
    console.log(index);
    console.log(car);
})

// While

let contador = 0;

while(contador < 10){
    console.log("contador eh menor que 10!");
    contador++;
}

const person = {
    name: "Leonado",
    age: 52
};

for(property in person){
    console.log(person[property]);
}