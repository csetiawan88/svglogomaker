const test = require("./shape");

describe("New Triangle", () => {
  it("should return string for a green triangle", () => {
    const newTriangle = new test.Triangle("CH1", "red", "green");
    const result = newTriangle.render();
    console.log(result);

    expect(result).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="green" />'
    );
  });
});
describe("New Square", () => {
  it("should return string for a blue square", () => {
    const newSquare = new test.Square("CS1", "blue", "black");
    const result = newSquare.render();
    console.log(result);

    expect(result).toEqual('<rect width="200" height="200" fill="blue" />');
  });
});
describe("New Circle", () => {
  it("should return string for an orange circle", () => {
    const newCircle = new test.Circle("CS1", "red", "orange");
    const result = newCircle.render();
    console.log(result);

    expect(result).toEqual('<circle cx="130" cy="90" r="90" fill="orange" />');
  });
});

// Shape Test
<>
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
</>;
