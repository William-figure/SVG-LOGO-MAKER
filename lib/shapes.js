// Shape Class
class Shape {
  constructor(color) {
    this.color = color;
  }

  validateColor(color) {
    console.log(`Validating color: ${color}`);
    
    if (color == null) {
      throw new Error('color cannot be null');
    }
    if (typeof color !== 'string') {
      throw new Error('color cannot be a number');
    }
    const hexColorPattern = /^#[0-9A-F]{6}$/i;
    const shortHexColorPattern = /^#[0-9A-F]{3}$/i;
    const namedColors = /^(red|blue|green|yellow|black|white|gray)$/i;
  
    const isValidColor = hexColorPattern.test(color) || shortHexColorPattern.test(color) || namedColors.test(color);
    
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

  createCircle() {
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

  createSquare() {
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

  createTriangle() {
    return `<polygon points="${this.x1},${this.y1} ${this.x2},${this.y2} ${this.x3},${this.y3}" fill="${this.color}" />`;
  }
}

module.exports = { Shape, Circle, Triangle, Square };
