class Vehicle {
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this._company = company;
        this.id = id;
    }
    printInfo() {
        return (`name: ${this.name}, year: ${this.year}, company: ${this._company}, id: ${this.id}`);
    }
}
const vehicle1 = new Vehicle("vehicle1", 1, "company1", 1);
console.log(vehicle1.printInfo());
export {};
