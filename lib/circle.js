const Shapes = require('./shapes.js');

class Circle extends Shapes{

    makeShape() {
        // shape is triange, circle, or square
        return `<circle cx='150' cy='110' r='80' fill='${this.color}'/>`;
    }

}

module.exports = Circle;