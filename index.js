const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');
const SVG = require('./lib/svg');

function askQuestions () {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'letters',
                message: 'Enter 3 characters'
            },
            {
                type: 'input',
                name: 'colorTxt',
                message: 'Enter the svg text color name or value'
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Pick the SVG shape',
                choices: ['circle', 'triange', 'square']
            },
            {
                type: 'input',
                name: 'colorBgnd',
                message: 'Enter the svg background color name or value'
            },
        ])
        .then((data) => {
            let myLogo;
            switch(data.shape){
                case 'circle': 
                myLogo = new Circle();
                break;

                case 'triangle':
                    myLogo = new Triangle();
                    break;

                case 'square':
                    myLogo = new Square();
                    break;
            }
            myLogo.setColor(data.colorBgnd);
            const fullSVG = new SVG();
            fullSVG.setShape(myLogo);
            fullSVG.setTextColor(data.colorTxt, data.letters);
            if (data.letters.length > 3) {
                console.log('too many letters')
                askQuestions();
            }
            writeSVG('thisSVG.svg', fullSVG.makeSVG());
        });
}

function writeSVG (fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err?console.log(err):console.log('Generated SVG file');
    })
}

askQuestions();