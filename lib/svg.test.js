const fs = require('fs');
const path = require('path');
const { Circle, Square, Triangle } = require('./shapes');
const { Text, SVG } = require('./svg');

describe('SVG Class', () => {
  let svg;

  beforeEach(() => {
    svg = new SVG(300, 300);
  });

  test('should create an SVG with a Circle and centered text', () => {
    const circle = new Circle('blue', 150, 150, 50);
    const circleText = new Text('Circle Text');

    svg.addShape(circle, circleText);
    const svgContent = svg.createSVG();

    expect(svgContent).toContain('<circle cx="150" cy="150" r="50" fill="blue" />');
    expect(svgContent).toContain('<text x="150" y="150" text-anchor="middle" font-family="Arial" font-size="20" fill="black">Circle Text</text>');
  });

  test('should create an SVG with a Square and centered text', () => {
    const square = new Square('green', 100, 100, 100, 100);
    const squareText = new Text('Square Text');

    svg.addShape(square, squareText);
    const svgContent = svg.createSVG();

    expect(svgContent).toContain('<rect x="100" y="100" width="100" height="100" fill="green" />');
    expect(svgContent).toContain('<text x="150" y="150" text-anchor="middle" font-family="Arial" font-size="20" fill="black">Square Text</text>');
  });

  test('should create an SVG with a Triangle and centered text', () => {
    const triangle = new Triangle('red', 150, 50, 200, 150, 100, 150);
    const triangleText = new Text('Triangle Text');

    svg.addShape(triangle, triangleText);
    const svgContent = svg.createSVG();

    expect(svgContent).toContain('<polygon points="150,50 200,150 100,150" fill="red" />');
    expect(svgContent).toContain('<text x="150" y="116.66666666666667" text-anchor="middle" font-family="Arial" font-size="20" fill="black">Triangle Text</text>');
  });

  test('should save the SVG file correctly', () => {
    const circle = new Circle('blue', 150, 150, 50);
    const circleText = new Text('Circle Text');
    svg.addShape(circle, circleText);

    const filename = 'test_example.svg';
    const filePath = path.join('examples', filename); // Direct path to examples directory

    // Remove the file if it exists before the test
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    svg.saveToFile(filename);

    expect(fs.existsSync(filePath)).toBe(true);

    const savedContent = fs.readFileSync(filePath, 'utf8');
    expect(savedContent).toContain('<circle cx="150" cy="150" r="50" fill="blue" />');
    expect(savedContent).toContain('<text x="150" y="150" text-anchor="middle" font-family="Arial" font-size="20" fill="black">Circle Text</text>');

    // Clean up after test
    fs.unlinkSync(filePath);
  });
});
