class Animal {
    constructor(name, age, species) {
        this._name = name;
        this.age = age;
        this.species = species;
    }
    speak() {
        console.log("Animal sound");
    }
    get getName() {
        return this._name;
    }
    set setName(newName) {
        this._name = newName;
    }
    get getAge() {
        return this.age;
    }
    set setAge(newAge) {
        this.age = newAge;
    }
}
class Dog extends Animal {
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.breed = breed;
    }
    speak() {
        console.log("Gau gau");
    }
}
class Cat extends Animal {
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.breed = breed;
    }
    speak() {
        console.log("Meo meo");
    }
}
class Rabbit extends Animal {
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.breed = breed;
    }
    speak() {
        console.log("Kho kho");
    }
}
const dog = new Dog("Micky", 10, "Dog", "Ngao");
// dog.setName("Lu Lu");
console.log("Dog: ", dog);
export {};
