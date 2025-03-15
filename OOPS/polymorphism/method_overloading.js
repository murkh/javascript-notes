class Shape {
  area() {
    if (arguments.length == 2) {
      return arguments[0] * arguments[1];
    }
    if (arguments.length == 3) {
      return arguments[0] * arguments[1] * arguments[2];
    }
  }
}

const x = new Shape();
console.log(x.area(10, 20));
console.log(x.area(10, 20, 12));
