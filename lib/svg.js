const fs = require('fs');
const path = require('path');
const { Circle, Square, Triangle } = require('./shapes'); // Import shape classes

class Text {
  constructor(text, fontSize = 20, fill = 'black') {
    this.text = text;
    this.fontFamily = 'Arial';
    this.fontSize = fontSize;
    this.fill = fill;
  }

  setPositionForShape(shape) {
    let x, y;

    if (shape instanceof Circle) {
      x = shape.cx;
      y = shape.cy;
    } else if (shape instanceof Square) {
      x = shape.x + shape.width / 2;
      y = shape.y + shape.height / 2;
    } else if (shape instanceof Triangle) {
      x = (shape.x1 + shape.x2 + shape.x3) / 3;
      y = (shape.y1 + shape.y2 + shape.y3) / 3;
    }

    this.x = x;
    this.y = y; // Remove the vertical adjustment
  }

  createText() {
    return `<text x="${this.x}" y="${this.y}" text-anchor="middle" font-family="${this.fontFamily}" font-size="${this.fontSize}" fill="${this.fill}">${this.text}</text>`;
  }
}

class SVG {
  constructor(width = 300, height = 300) {
    this.width = width;
    this.height = height;
    this.xmlns = "http://www.w3.org/2000/svg";
    this.elements = [];
  }

  addShape(shape, text) {
    this.elements.push(shape.createShape());
    if (text) {
      text.setPositionForShape(shape);
      this.elements.push(text.createText());
    }
  }

  createSVG() {
    const svgContent = this.elements.join('\n');
    return `<svg width="${this.width}" height="${this.height}" xmlns="${this.xmlns}">\n${svgContent}\n</svg>`;
  }

  saveToFile(filename) {
    const filePath = path.join(__dirname, '../examples', filename); // Direct path to examples directory
    console.log(`Saving SVG to: ${filePath}`); // Debugging line
    fs.writeFileSync(filePath, this.createSVG());
    console.log(`SVG file saved to ${filePath}`);
  }
  
}

module.exports = { Text, SVG };
