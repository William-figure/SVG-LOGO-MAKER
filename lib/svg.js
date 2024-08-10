class Text {
  constructor(text) {
    this.text = text;
  }

  createText() {
    return `<text x="50" y="50" font-family="Arial" font-size="20" fill="black">${this.text}</text>`;
  }
}

class SVG {
  constructor() {
    this.width = 200;
    this.height = 200;
    this.xmlns = "http://www.w3.org/2000/svg";
  }

  createSVG() {
    return `<svg width="${this.width}" height="${this.height}" xmlns="${this.xmlns}"></svg>`;
  }
}

module.exports = { Text, SVG };
