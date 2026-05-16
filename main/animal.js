class Animal {

    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    #breed

    constructor(name, breed) {
        super(name);
        this.#breed = breed;
    }

    get breed() {
        return this.#breed
    }
}

const animal = new Animal('Bob')
const chien = new Dog('Prosper', 'Labrador')

console.log(chien.breed)