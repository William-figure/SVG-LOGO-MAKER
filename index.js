// index.js
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')
const { Circle, Square, Triangle } = require('./lib/shapes'); // Use require for importing modules

async function generateSVG() {
  // Step 1: Get user inputs
  const { text, shape, color } = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter the text to display in the SVG:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select the shape of the SVG:',
      choices: ['Circle', 'Square', 'Triangle'],
    },
    {
      type: 'input',
      name: 'color',
      message: 'Enter the color for the shape (hex or color name):',
    }
  ]);

  // Step 2: Create the selected shape with the color
  let svgShape;
  switch (shape) {
    case 'Circle':
      svgShape = new Circle(color, 150, 150, 100);
      break;
    case 'Square':
      svgShape = new Square(color, 100, 100, 200, 200);
      break;
    case 'Triangle':
      svgShape = new Triangle(color, 150, 50, 250, 250, 50, 250);
      break;
    default:
      console.error('Invalid shape selected!');
      return;
  }

  // Step 3: Create the SVG content
  const svgContent = `
<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
  ${svgShape.createShape()} 
  <text x="150" y="150" font-size="20" text-anchor="middle" fill="black">${text}</text>
</svg>
`;

// Step 4: Write the SVG content to a file in the ./examples directory
const outputDir = path.join(__dirname, 'examples');
const outputPath = path.join(outputDir, 'output.svg');

// Ensure the examples directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fs.writeFileSync(outputPath, svgContent, 'utf8');
}

// Call the function to generate SVG
generateSVG();
