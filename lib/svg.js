// const Circle = require('./circle.js');
// const Triangle = require('./triangle.js');
// const Square = require('./squarejs');

class SVG {
    constructor(){
        this.text = '';
        this.shape = '';
    }

    makeSVG() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">${this.shape}${this.text}</svg>`;
    }

    setTextColor(color, text) {
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }

    setShape(shape) {
        this.shape = shape.makeShape();
    }
}

module.exports = SVG;