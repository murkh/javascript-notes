class Shape {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }

  area() {
    return this.length * this.breadth;
  }
}

class Rectange extends Shape {
  @override
  area() {
    return this.length * this.breadth * 2;
  }
}

const x = new Rectange(10, 20);
console.log(x.area());
