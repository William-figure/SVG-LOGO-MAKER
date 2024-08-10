class Shape{
  constructor(color) {
    this.color = color
  }

  validateColor(color) {
    const regex = /^#([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$|^(black|white|red|green|blue|yellow|cyan|magenta|gray|grey|maroon|olive|purple|teal|navy)$/
    if (color === '') {
      throw new Error('color cannot be null')
    } else if (typeof color == "number") {
      throw new Error('color cannot be a number')
    } else if (!regex.test(color)) {
      throw new Error('invalid color input')
    }
    return true
  }
}

class Circle{
  constructor(color, cx, cy, r) {
    this.color = color
    this.cx = cx
    this.cy = cy
    this.r = r
  }
  createCircle(){
    return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.color}" />`
  }
}

class Square{
  constructor(color, x, y, width, height) {
    this.color = color
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }
  createSquare() {
    return `<square x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.color}" />`
  }
}

class Triangle{
  constructor(color, x1, y1, x2, y2, x3, y3) {
    this.color = color
    this.x1 = x1
    this.y1 = y1
    this.x2 = x2
    this.y2 = y2
    this.x3 = x3
    this.y3 = y3
  }
  createTriangle() {
    return `<polygon points="${this.x1},${this.y1} ${this.x2},${this.y2} ${this.x3},${this.y3}" fill="${color} />`
  }
}

export {Shape, Circle, Triangle, Square}
