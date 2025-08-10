class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this._phone = phone;
    }
    printInfo() {
        return (`name: ${this.name}, company: ${this.company}, phone: ${this._phone}`);
    }
}
const employee1 = new Employee("Nguyen A", "company1", "012345678");
console.log(employee1.printInfo());
export {};
