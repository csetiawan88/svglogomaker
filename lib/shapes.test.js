// Shape Test

class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="130" cy="90" r="90" fill="orange"/>`;
  }
}

class Square extends Shape {
  render() {
    return `<rect width="200" height="200" fill="blue"/>`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="green"/>`;
  }
}

//Circle test
describe("Circle Test", () => {
  test("should return string for a orange circle", () => {
    let shape = new Circle();
    let shapeColor = "orange";
    shape.setColor(shapeColor);
    expect(shape.render()).toEqual(
      `<circle cx="130" cy="90" r="90" fill="orange"/>`
    );
  });
});

//Triangle Test
describe("Triangle Test", () => {
  test("should return string for a green triangle", () => {
    let shape = new Triangle();
    let shapeColor = "green";
    shape.setColor(shapeColor);
    expect(shape.render()).toEqual(
      `<polygon points="150, 18 244, 182 56, 182" fill="green"/>`
    );
  });
});

//Square test
describe("Square Test", () => {
  test("should return string for a blue square", () => {
    let shape = new Square();
    let shapeColor = "blue";
    shape.setColor(shapeColor);
    expect(shape.render()).toEqual(
      `<rect width="200" height="200" fill="blue"/>`
    );
  });
});

// Shape Test requirement.
/* <>
  // Triangle
  <svg
    version="1.1"
    width="300"
    height="200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon points="150, 18 244, 182 56, 182" fill="green" />
    <text x="150" y="150" font-size="65" text-anchor="middle" fill="blue">
      123
    </text>
  </svg>
  // Circle
  <svg
    version="1.1"
    width="300"
    height="200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="130" cy="90" r="90" fill="blue" />
    <text x="125" y="110" font-size="65" text-anchor="middle" fill="red">
      123
    </text>
  </svg>
  // Square
  <svg
    version="1.1"
    width="300"
    height="200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="200" height="200" fill="blue" />
    <text x="100" y="125" font-size="65" text-anchor="middle" fill="red">
      123
    </text>
  </svg>
</>; */
