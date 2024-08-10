const { Text, SVG } = require('./svg');

describe('Text Class', () => {
  let text;

  beforeEach(() => {
    text = new Text('helloWorld');
  });

  test('should have a property called "text"', () => {
    expect(text).toHaveProperty('text');
    expect(text.text).toBe('helloWorld');
  });

  describe('createText Method', () => {
    test('should have a function called "createText"', () => {
      expect(text).toHaveProperty('createText');
      expect(typeof text.createText).toBe('function');
    });

    test('should return the correct SVG text syntax', () => {
      const expectedOutput = `<text x="50" y="50" font-family="Arial" font-size="20" fill="black">${text.text}</text>`;
      expect(text.createText()).toBe(expectedOutput);
    });
  });
});

describe('SVG Class', () => {
  let svg;

  beforeEach(() => {
    svg = new SVG();
  });

  describe('createSVG Method', () => {
    test('should have a function called "createSVG"', () => {
      expect(svg).toHaveProperty('createSVG');
      expect(typeof svg.createSVG).toBe('function');
    });

    test('should return the correct SVG syntax', () => {
      const expectedSVGOutput = `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`;
      expect(svg.createSVG()).toContain(expectedSVGOutput);
    });
  });
});
