
    constructor(radius) {
        this._radius = radius;
    }

  
    get diameter() {
        return this._radius * 2;
    }
 set diameter(diameter) {
        this._radius = diameter / 2;
    }

   
    get circumference() {
        return Math.PI * this.diameter;
    }

   
    set circumference(circumference) {
        this._radius = circumference / (2 * Math.PI);
    }

    
    get area() {
        return Math.PI * (this._radius ** 2);
    }

    set area(area) {
        this._radius = Math.sqrt(area / Math.PI);
    }

    get radius() {
        return this._radius;
    }


    set radius(radius) {
        this._radius = radius;
    }
}


const circle = new Circle(5);
console.log(`Radius: ${circle.radius}`);
console.log(`Diameter: ${circle.diameter}`); 
console.log(`Circumference: ${circle.circumference}`);
console.log(`Area: ${circle.area}`);

circle.diameter = 20;
console.log(`New Radius: ${circle.radius}`); 
console.log(`New Area: ${circle.area}`); 
circle.circumference = 62.83185307179586;
console.log(`New Radius: ${circle.radius}`); 
console.log(`New Diameter: ${circle.diameter}`); 
