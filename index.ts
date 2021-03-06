#!/usr/bin/env node

import { MainProcess } from './src/main-process';
import { DEBUG, Util } from './src/util';

const fs = require('fs');
const yargs = require('yargs');

const argv = yargs.usage('Usage: $0 <tsFile> [options]')
    .options({
        's': { alias: 'spec', describe: 'write the spec file along with source file', type: 'boolean' },
        'f': {
            alias: 'force',
            describe: 'It prints out a new test file, and it does not ask a question when overwrite spec file',
            type: 'boolean'
        },
        'F': {
            alias: 'forcePrint',
            describe: 'It prints out to console, and it does not ask a question',
            type: 'boolean'
        },
        'm': { alias: 'method', describe: 'Show code only for this method', type: 'string' },
        'v': { alias: 'verbose', describe: 'log verbose debug messages', type: 'boolean' },
        'c': { alias: 'config', describe: 'The configuration file to load options from', type: 'string', default: '../genese-tests.config.js' }
    })
    .example('$0 my.component.ts', 'generate Angular unit test for my.component.ts')
    .help('h')
    .argv;

Util.setDebug(argv.verbose);
const tsFile: string = argv._[0].replace(/\.spec\.ts$/, '.ts');
if (!(tsFile && fs.existsSync(tsFile))) {
    console.error('Error. invalid typescript file. e.g., Usage $0 <tsFile> [options]');
    process.exit(1);
}
const mainProcess = new MainProcess();
mainProcess.start(tsFile, argv);



