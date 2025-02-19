// Herança em Orientação a Objeto

class Animal{
    constructor(name){
        this.name = name;
    }

    walk(){
        console.log(`${this.name} Andou`);
    }
}

const animal = new Animal("Leão");

animal.walk();

// Posso herdar todas as caracteristicas da classe Animal e criar um animal especifico e reescrever seus metodos. Exemplo

class Dog extends Animal{
    constructor(name){
        super(name);
    }

    walk(){
        console.log(`${this.name} correu`);
    }
}

const dog = new Dog("Laica");

dog.walk();