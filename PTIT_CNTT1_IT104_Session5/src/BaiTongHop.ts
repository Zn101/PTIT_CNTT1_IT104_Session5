class Animal {
    private _name: string;
    protected age: number;
    public species: string;
    constructor(name: string, age: number, species: string) {
        this._name = name;
        this.age = age;
        this.species = species;
    }
    speak(): void {
        console.log("Animal sound");
    }
    get getName():string  {
        return this._name;
    }
    set setName(newName: string) {
        this._name = newName;
    }
    get getAge():number  {
        return this.age;
    }
    set setAge(newAge: number) {
        this.age = newAge;
    }
}

class Dog extends Animal {
    public breed: string;
    constructor(name: string, age: number, species: string, breed: string) {
        super(name, age, species);
        this.breed = breed;
    }
    speak() {
        console.log("Gau gau");
    }
}

class Cat extends Animal {
    public breed: string;
    constructor(name: string, age: number, species: string, breed: string) {
        super(name, age, species);
        this.breed = breed;
    }
    speak() {
        console.log("Meo meo");
    }
}

class Rabbit extends Animal {
    public breed: string;
    constructor(name: string, age: number, species: string, breed: string) {
        super(name, age, species);
        this.breed = breed;
    }
    speak() {
        console.log("Kho kho");
    }
}

const dog = new Dog("Micky", 10, "Dog", "Ngao");
// dog.setName("Lu Lu");
console.log("Dog: ", dog)