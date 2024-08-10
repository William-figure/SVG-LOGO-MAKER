// import {Text, SVG} from './svg'

// describe('Text Class', () => {
//   let text
//   beforeEach(() => {
//     text = Text('helloWorld')
//   })
//   test("should have a property called text", () => {
//     expect(text).toHaveProperty('text')
//     expect(text.text).toBe('helloWorld')
//   })
//   describe('createText method', () => {
//     test('should have a function called createText', () => {
//       expect(text).toHaveProperty('createText')
//       expect(typeof text.createText).toBe("function")
//     })
//     test('the function should return correct svg text syntax', () => {
//       expect(text.createText()).toBe(` <text x="50" y="50" font-family="Arial" font-size="20" fill="black">${text.text}</text>`)
//     })
//   })
// })
// describe('SVG Class', () => {
//   let svg;
//   beforeEach(() => {
//     svg = SVG()
//   })
//   describe('createSVG method', () => {
//     test('should have createSVG function', () => {
//       expect(svg).tohaveProperty('createSVG')
//       expect(typeof svg.createSVG).toBe('function')
//     })
//     describe('createSVG function', () => {
//       test('should return correct svg syntax', () => {
//         expect(svg.createSVG()).toContain(`<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`)
//       })
//     }) 
//   })
// })