class Vehicle {
    name: string;
    year: number;
    company: string;
    constructor (name: string, year: number, company: string) {
        this.name = name;
        this.year = year;
        this.company = company;
    }

    getInfo() {
        return (`name: ${this.name}, year: ${this.year}, company: ${this.company}`)
    }
}

const vehicle1 =  new Vehicle("vehicle1", 1, "vehicle");
console.log(vehicle1.getInfo())
const vehicle2 = new Vehicle("vehicle2", 2, "vehicle2");
console.log(vehicle2.getInfo())