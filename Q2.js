class Circle {
    constructor(radius , color ) {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    getColor() {
        return this.color;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    setColor(color) {
        this.color = color;
    }

    toString() {
        return `Circle[radius=${this.radius}, color=${this.color}]`;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

// Create a new Circle object
let myCircle = new Circle(5, 'blue');

// Get the radius
console.log(myCircle.getRadius()); // Outputs: 5

// Get the color
console.log(myCircle.getColor()); // Outputs: 'blue'

// Set a new radius
myCircle.setRadius(10);

// Set a new color
myCircle.setColor('green');

// Get the new radius
console.log(myCircle.getRadius()); // Outputs: 10

// Get the new color
console.log(myCircle.getColor()); // Outputs: 'green'

// Get the area of the circle
console.log(myCircle.getArea()); // Outputs: 314.1592653589793

// Get the circumference of the circle
console.log(myCircle.getCircumference()); // Outputs: 62.83185307179586

// Get the string representation of the circle
console.log(myCircle.toString()); // Outputs: 'Circle[radius=10, color=green]'
