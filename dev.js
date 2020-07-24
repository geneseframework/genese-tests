#!/usr/bin/env node
"use strict";

exports.__esModule = true;
var chalk = require('chalk');
var main = require("./src/main-process");
var Util = require('./src/util')

try {
    console.log(chalk.yellowBright("WELCOME TO GENESE TESTS"));
    console.log();
    var mainProcess = new main.MainProcess();
    const pathFolderToAnalyze = '/Users/utilisateur/Documents/perso_gilles_fabre/projets/genese/genese-tests-mocks/src/app/example/gn-my.service.ts';
    const options = {
        config: __dirname + '/genese-tests.config.js',
        force: true,
        spec: true
    };
    Util.DEBUG = true;
    mainProcess.start(pathFolderToAnalyze, options);

}
catch (err) {
    console.error(chalk.red("Error in conversion process : " + err.stack));
}
