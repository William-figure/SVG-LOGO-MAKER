class Shape {
  constructor(color) {
    if (this.validateColor(color)) {
      this._color = color.toLowerCase(); // Store color in a private field and ensure it's lowercase
    }
  }

  get color() {
    return this._color; // Provide read-only access to color
  }

  validateColor(color) {
    if (color == null) {
      throw new Error('color cannot be null');
    }
    if (typeof color !== 'string') {
      throw new Error('color cannot be a number');
    }
    if (color.trim() === '') { // Explicit check for empty string
      throw new Error('color cannot be an empty string');
    }

    const hexColorPattern = /^#[0-9a-f]{6}$/i;       // Matches #RRGGBB (case-insensitive)
    const shortHexColorPattern = /^#[0-9a-f]{3}$/i;  // Matches #RGB (case-insensitive)
    const namedColors = /^(red|blue|green|yellow|black|white|gray)$/; // Matches only lowercase named colors

    const isValidColor = hexColorPattern.test(color) || shortHexColorPattern.test(color) || namedColors.test(color.toLowerCase());

    if (!isValidColor) {
      throw new Error('invalid color input');
    }

    return true;
  }
}

// Circle Class
class Circle extends Shape {
  constructor(color, cx, cy, r) {
    super(color);
    this.cx = cx;
    this.cy = cy;
    this.r = r;
  }

  createShape() {
    return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.color}" />`;
  }
}

// Square Class
class Square extends Shape {
  constructor(color, x, y, width, height) {
    super(color);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  createShape() {
    return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.color}" />`;
  }
}

// Triangle Class
class Triangle extends Shape {
  constructor(color, x1, y1, x2, y2, x3, y3) {
    super(color);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
  }

  createShape() {
    return `<polygon points="${this.x1},${this.y1} ${this.x2},${this.y2} ${this.x3},${this.y3}" fill="${this.color}" />`;
  }
}

module.exports = { Shape, Circle, Triangle, Square };
