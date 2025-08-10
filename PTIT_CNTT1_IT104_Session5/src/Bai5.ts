class Rectangle {
    private _width: number;
    private _height: number;
    constructor (width: number, height: number) {
        this._width = width;
        this._height = height;
    }

    perimeter() {
        return((this._width+this._height)*2);
    }
    area() {
        return(this._width*this._height);
    }

    setSize(width: number, height: number) {
        this._width = width;
        this._height = height;
    }
}

let width: number = 5;
let height: number = 10;
let rectangle1 = new Rectangle(width, height);
console.log(`perimiter: ${rectangle1.perimeter()}`);
console.log(`area: ${rectangle1.area()}`);
width = 10;
height = 20;
rectangle1.setSize(width, height);
console.log(`perimiter: ${rectangle1.perimeter()}`);
console.log(`area: ${rectangle1.area()}`);


