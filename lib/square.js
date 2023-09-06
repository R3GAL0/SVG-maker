const Shapes = require('./shapes.js');

class Square extends Shapes{

    makeShape() {
        // shape is triange, circle, or square
        return `<rect x='50' y='50' fill='${this.color}'/>`;
    }

}

module.exports = Square;