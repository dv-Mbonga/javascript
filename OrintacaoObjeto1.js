// Orientação a Objeto
// As classes em JS são praticamente impressoras de objetos
// Se eu tiver uma classe Person por exemplo e ter o seu contrutor e seus dados, esta classe vai imprimir os dados em um objeto

class Person{

    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName(){
        console.log(`O ${this.firstName} ${this.lastName} tem ${this.age} anos de idade`)
    }

    speak(){
        console.log("Hello Man")
    }

    static speakEstatico(){
        console.log("Hello Man estatico")
    }
}

const person = new Person('Leronardo', 'Di Caprio', 52);

console.log(person);

person.getFullName();

person.speak();

// Métodos estaticos 
// São métodos que não precisam que a classe seja instânciada para serem executadas
// No exemplo de cima, o metodo getFullName precisa ser instanciada porque usa os dados do construtor, já o metodo speak pode ser um método estatico por não usar nenhum
// dado do contrutor

Person.speakEstatico();