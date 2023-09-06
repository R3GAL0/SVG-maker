const Shapes = require('./shapes.js');

class Square extends Shapes{

    makeShape() {
        // shape is triange, circle, or square
        return `<rect x='0' y='0' width='1000' height='1000' fill='${this.color}'/>`;
    }

}

module.exports = Square;