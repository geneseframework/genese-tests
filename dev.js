#!/usr/bin/env node
"use strict";

exports.__esModule = true;
var chalk = require('chalk');
// var ansi_colors_1 = require("ansi-colors");
var main = require("./src/typescript-parser");

try {
    console.log(chalk.yellowBright("WELCOME TO GENESE TESTS"));
    console.log();
    console.log(chalk.yellowBright("PARSER"));
    var mainProcess = new main.TypescriptParser();
    const pathFolderToAnalyze = __dirname + '/src/complexity/core/mocks/';
    // mainProcess.start(__dirname, pathFolderToAnalyze, __dirname, 'typescript');

}
catch (err) {
    console.error(chalk.red("Error in conversion process : " + err.stack));
}
