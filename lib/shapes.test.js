const Shapes = require('./shapes.js');
const Triangle = require('./triangle.js');
const Circle = require('./circle.js');
const Square = require('./square.js');

describe('Shape Tests', () => {
  describe('Triangle', () => {
    it('should create a pink triangle', () => {
      const testShape = new Triangle();
      const expectedShape = `<polygon points='50,10 10,90 90,90' fill='pink'/>`;
      testShape.setColor('pink');
      expect(testShape.makeShape()).toEqual(expectedShape);
    });
  });

  describe('Square', () => {
    it('should create a pink square', () => {
      const testShape = new Square();
      const expectedShape = `<rect x='50' y='50' fill='pink'/>`;
      testShape.setColor('pink');
      expect(testShape.makeShape()).toEqual(expectedShape);
    });
  });

  describe('Circle', () => {
    it('should create a pink circle', () => {
      const testShape = new Circle();
      const expectedShape = `<circle cx='150' cy='110' r='80' fill='pink'/>`;
      testShape.setColor('pink');
      expect(testShape.makeShape()).toEqual(expectedShape);
    });
  });

});


describe('SVG tests', () => {
  describe('should make a basic svg', () => {
    it('should create an SVG element', () => {
      const testSVG = new SVG();
      const expectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"></svg>`;
      // testShape.setColor('pink');
      expect(testSVG.makeSVG()).toEqual(expectedSVG);
    });
  });
});