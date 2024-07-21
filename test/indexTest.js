class Circle {
  constructor(radius) {
      this._radius = radius;
  }

  get diameter() {
      return this._radius * 2;
  }
r
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

module.exports = Circle;
