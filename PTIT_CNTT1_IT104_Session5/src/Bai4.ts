class Vehicle {
    public name: string;
    protected year: number;
    private _company: string;
    readonly id: number;
    constructor (name: string, year: number, company: string, id: number) {
        this.name = name;
        this.year = year;
        this._company = company;
        this.id = id;
    }

    printInfo() {
        return (`name: ${this.name}, year: ${this.year}, company: ${this._company}, id: ${this.id}`)
    }
}

const vehicle1 = new Vehicle("vehicle1", 1, "company1", 1);
console.log(vehicle1.printInfo());