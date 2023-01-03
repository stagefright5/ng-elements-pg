import { JSDOM } from 'jsdom';
import { execSync } from 'node:child_process';
import { createReadStream, createWriteStream, mkdirSync, readFileSync } from 'node:fs';
import { join, sep } from 'node:path';

const PROJECT_DIST_PATH = './dist/sf5-elements-container';

const ARGS_MAP = new Map();

/**
 * @description Runs the given `npm run <command>` commands
 * @param {string[]} commands - The `npm run <command>` commands to run
 */
export const runNPMCommands = (commands) => {
    for (const command of commands) {
        _runCommand(`npm run ${command}`);
    }
};

/**
 * @description Runs the given command
 * @param {string} command - The command to run
 */
const _runCommand = (command) => {
    return execSync(command, { stdio: 'inherit', cwd: process.cwd() });
};

/**
 * @description Reads the index.html of sf5-elements-container file from the dist folder of the current workspace
 * @returns {string}
 */
export const getIndexHtml = () => {
    return readFileSync(`${PROJECT_DIST_PATH}/index.html`, 'utf-8');
};

/**
 * @description Parses the given HTML string into a DOM document
 * @param {string} html - The HTML string to parse into a DOM document
 * @returns {Document} - The DOM document parsed from the given HTML string
 */
export const parseToDOM = (html) => {
    const dom = new JSDOM(html);
    return dom.window.document;
};

/**
 * @description Gets the names of the script files in the body of the given document
 * @param {Document} document - The document to get the script file names from
 * @returns {string[]} - The names of the script files in the body of the document
 */
export const getScriptFileNames = (document) => {
    const scripts = document.querySelectorAll('body script');
    const scriptFileNames = [];
    for (const script of scripts) {
        const src = script.getAttribute('src');
        if (src) {
            scriptFileNames.push(src);
        }
    }
    return scriptFileNames;
};

/**
 * @description Streams the contents of the script files into a single file at the given path
 * @param {string[]} scriptFileNames - The names of the script files to merge
 */
export const mergeScripts = (scriptFileNames) => {
    const outputPath = ARGS_MAP.get('--output-path');
    _ensureParentDirExists(outputPath);
    const outputStream = createWriteStream(outputPath);
    for (const scriptFileName of scriptFileNames) {
        const scriptFileStream = createReadStream(`${PROJECT_DIST_PATH}/${scriptFileName}`);
        scriptFileStream.pipe(outputStream, { end: false });
    }
};

/**
 * @description Ensures that the parent directory of the given file exists
 * @param {string} filePath - The path to the file
 */
const _ensureParentDirExists = (filePath) => {
    // `join` is used to normalize the path to the OS specific path separator
    const parentDir = join(filePath).split(sep).slice(0, -1).join(sep);
    mkdirSync(parentDir, { recursive: true });
};

/**
 * @description validates and caches value of the given process argument
 */
export const processSetOptions = () => {
    if (process.argv.length < 3) {
        throw new Error('No `--output-path="/path/to/output/file"` argument provided');
    }
    const args = process.argv.find((arg) => arg.startsWith('--output-path'));
    const outputPath = args?.split('=')[1];
    if (!outputPath) {
        throw new Error('No `--output-path="/path/to/output/file"` argument provided');
    }
    ARGS_MAP.set('--output-path', outputPath);
};

/**
 *
 * @param {string} arg
 * @returns {string} - The value of the given process argument
 */
export const getArg = (arg) => {
    return ARGS_MAP.get(arg);
};

/**
 * @description Chains the given functions together
 * @param  {...(...args) => any} fns - The functions to chain
 * @returns {(...args) => any} - A function which when called will call the
 * given functions in the order they were given with the result of the previous
 * function as the argument to the next function
 * @example
 * const add = (a) => a + 1;
 * const multiply = (a) => a * 2;
 * const divide = (a) => a / 2;
 * const result = chain(add, multiply, divide)(1);
 * console.log(result); // 2
 */
export const chain = (...fns) => {
    return (seed) => fns.reduce((v, f) => f(v), seed);
};
