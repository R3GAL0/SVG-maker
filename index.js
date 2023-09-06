const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');

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


            // reprompt for bad values
            // make the svg
            // print svg to file



}

askQuestions();