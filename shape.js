class Shape{
    constructor(name){
        this.name = name;
    }
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }

}



class Rectangle extends Shape {
    constructor(name, length, width) {
        super(name);
        this.length = length;
        this.width = width;
    }
    calculateArea(){
        return this.length * this.width;
    }
    isSquare(){
        return this.length === this.width;
    }
}
const RectangleShape = new Rectangle("Rectangle", 5, 10);
console.log("Area of Rectangle", RectangleShape.calculateArea());
console.log("Is Rectangle a square", RectangleShape.isSquare());
