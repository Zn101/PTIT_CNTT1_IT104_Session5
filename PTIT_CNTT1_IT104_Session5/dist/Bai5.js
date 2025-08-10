class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    perimeter() {
        return ((this._width + this._height) * 2);
    }
    area() {
        return (this._width * this._height);
    }
    setSize(width, height) {
        this._width = width;
        this._height = height;
    }
}
let width = 5;
let height = 10;
let rectangle1 = new Rectangle(width, height);
console.log(`perimiter: ${rectangle1.perimeter()}`);
console.log(`area: ${rectangle1.area()}`);
width = 10;
height = 20;
rectangle1.setSize(width, height);
console.log(`perimiter: ${rectangle1.perimeter()}`);
console.log(`area: ${rectangle1.area()}`);
export {};
