const { Shape, Circle, Triangle, Square } = require('./shapes');

// Shape Class Tests
describe('Shape Class', () => {
  let shape;

  beforeEach(() => {
    shape = new Shape('red');
  });

  test('should have a property called color', () => {
    expect(shape).toHaveProperty('color');
    expect(shape.color).toBe('red');
  });

  describe('validateColor method', () => {
    test('should have a function called validateColor', () => {
      expect(shape).toHaveProperty('validateColor');
      expect(typeof shape.validateColor).toBe('function');
    });

    test('should throw an error if color is not a string', () => {
      expect(() => shape.validateColor()).toThrow('color cannot be null');
      expect(() => shape.validateColor(123)).toThrow('color cannot be a number');
    });

    test('should throw an error if color is a string but in the wrong format', () => {
      const invalidColors = ['sss', '#sss', '#fffss', '#123', 'color'];
      invalidColors.forEach(color => {
        expect(() => shape.validateColor(color)).toThrow('invalid color input');
      });
    });

    test('should return true if color is a string and in the right format', () => {
      const validColors = ['red', '#000', '#ff0000'];
      validColors.forEach(color => {
        expect(shape.validateColor(color)).toBe(true);
      });
    });
  });
});

// Circle Class Tests
describe('Circle Class', () => {
  let circle;

  beforeEach(() => {
    circle = new Circle('red', 100, 100, 50);
  });

  test('should have property color, cx, cy, r', () => {
    expect(circle).toHaveProperty('color');
    expect(circle.color).toBe('red');
    expect(circle).toHaveProperty('cx');
    expect(circle.cx).toBe(100);
    expect(circle).toHaveProperty('cy');
    expect(circle.cy).toBe(100);
    expect(circle).toHaveProperty('r');
    expect(circle.r).toBe(50);
  });

  describe('createCircle method', () => {
    test('should have a function called createCircle', () => {
      expect(circle).toHaveProperty('createCircle');
      expect(typeof circle.createCircle).toBe('function');
    });

    test('should output the correct SVG for a circle', () => {
      const expectedSvg = `<circle cx="${circle.cx}" cy="${circle.cy}" r="${circle.r}" fill="${circle.color}" />`;
      expect(circle.createCircle()).toBe(expectedSvg);
    });
  });
});

// Square Class Tests
describe('Square Class', () => {
  let square;

  beforeEach(() => {
    square = new Square('red', 100, 100, 50, 50);
  });

  test('should have property color, x, y, width, height', () => {
    expect(square).toHaveProperty('color');
    expect(square.color).toBe('red');
    expect(square).toHaveProperty('x');
    expect(square.x).toBe(100);
    expect(square).toHaveProperty('y');
    expect(square.y).toBe(100);
    expect(square).toHaveProperty('width');
    expect(square.width).toBe(50);
    expect(square).toHaveProperty('height');
    expect(square.height).toBe(50);
  });

  describe('createSquare method', () => {
    test('should have a function called createSquare', () => {
      expect(square).toHaveProperty('createSquare');
      expect(typeof square.createSquare).toBe('function');
    });

    test('should output the correct SVG for a square', () => {
      const expectedSvg = `<rect x="${square.x}" y="${square.y}" width="${square.width}" height="${square.height}" fill="${square.color}" />`;
      expect(square.createSquare()).toBe(expectedSvg);
    });
  });
});

// Triangle Class Tests
describe('Triangle Class', () => {
  let triangle;

  beforeEach(() => {
    triangle = new Triangle('red', 50, 10, 90, 90, 10, 90);
  });

  test('should have property color, x1, y1, x2, y2, x3, y3', () => {
    expect(triangle).toHaveProperty('color');
    expect(triangle.color).toBe('red');
    expect(triangle).toHaveProperty('x1');
    expect(triangle.x1).toBe(50);
    expect(triangle).toHaveProperty('y1');
    expect(triangle.y1).toBe(10);
    expect(triangle).toHaveProperty('x2');
    expect(triangle.x2).toBe(90);
    expect(triangle).toHaveProperty('y2');
    expect(triangle.y2).toBe(90);
    expect(triangle).toHaveProperty('x3');
    expect(triangle.x3).toBe(10);
    expect(triangle).toHaveProperty('y3');
    expect(triangle.y3).toBe(90);
  });

  describe('createTriangle method', () => {
    test('should have a function called createTriangle', () => {
      expect(triangle).toHaveProperty('createTriangle');
      expect(typeof triangle.createTriangle).toBe('function');
    });

    test('should output the correct SVG for a triangle', () => {
      const expectedSvg = `<polygon points="${triangle.x1},${triangle.y1} ${triangle.x2},${triangle.y2} ${triangle.x3},${triangle.y3}" fill="${triangle.color}" />`;
      expect(triangle.createTriangle()).toBe(expectedSvg);
    });
  });
});
