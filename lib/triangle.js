const Shapes = require('./shapes.js');

class Triangle extends Shapes{

    makeShape() {
        // shape is triange, circle, or square
        return `<polygon points="150,0 50,200 250,200" fill="${this.color}"/>`;
    }

}

module.exports = Triangle;

`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

<circle cx="150" cy="100" r="80" fill="green"/>

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>`