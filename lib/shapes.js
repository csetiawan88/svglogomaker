class Shape {
  constructor(shapeColor, textColor, text) {
    this.shapeColor = shapeColor;
    this.textColor = textColor;
    this.text = text;
  }
}

//300x200 pixel image (width="300" height="200") to be shown.
class Circle extends Shape {
  constructor(shapeColor, textColor, text) {
    super(shapeColor, textColor, text);
  }
  render() {
    return `
      <svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="130" cy="90" r="90" fill="${this.shapeColor}" />
          <text x="125" y="110" font-size="65" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>
      `;
  }
}

class Triangle extends Shape {
  constructor(shapeColor, textColor, text) {
    super(shapeColor, textColor, text);
  }
  render() {
    return `
      <svg version="1.1" 
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
          <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>
          <text x="150" y="150" font-size="65" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>
      `;
  }
}

class Square extends Shape {
  constructor(shapeColor, textColor, text) {
    super(shapeColor, textColor, text);
  }
  render() {
    return `
      <svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" fill="${this.shapeColor}"/>
          <text x="100" y="125" font-size="65" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>
      `;
  }
}

// module.exports = { Circle, Triangle, Square };

function setShape(response) {
  if (response.shape === "Circle") {
    let userShape = new Circle(
      response.shapeColor,
      response.textColor,
      response.text
    );
    return userShape.render();
  }
  if (response.shape === "Square") {
    let userShape = new Square(
      response.shapeColor,
      response.textColor,
      response.text
    );
    return userShape.render();
  }
  if (response.shape === "Triangle") {
    let userShape = new Triangle(
      response.shapeColor,
      response.textColor,
      response.text
    );
    return userShape.render();
  }
}

module.exports = setShape;
