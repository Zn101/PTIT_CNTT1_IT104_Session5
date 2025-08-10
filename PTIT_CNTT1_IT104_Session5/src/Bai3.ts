class Employee {
    public name: string;
    protected company: string;
    private _phone: string;
    constructor (name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this._phone = phone;
    }

    printInfo() {
        return (`name: ${this.name}, company: ${this.company}, phone: ${this._phone}`)
    }
}

const employee1 = new Employee("Nguyen A", "company1", "012345678");
console.log(employee1.printInfo());