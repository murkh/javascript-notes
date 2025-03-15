class Shape {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }
}

class Rectange extends Shape {
  constructor(length, breadth, stupid) {
    super(length, breadth);
    this.stupid = stupid;
  }
  area() {
    console.log(this.stupid);
    return this.length * this.breadth;
  }

  static hello() {
    return "HELLO WORLD";
  }
}

x = new Rectange(10, 20, "hello pussy");
console.log(x.area());
