import { execSync } from 'node:child_process';
import { JSDOM } from 'jsdom';
import { readFileSync, writeFileSync } from 'node:fs';

const PROJECT_DIST_PATH =
    './dist/elements-angular-ws/dist/sf5-elements-container';

/**
 *
 * @param {string} html
 * @returns {Document}
 */
export const parseToDOM = html => {
    const dom = new JSDOM(html);
    return dom.window.document;
};
export const getScriptFileNames = document => {
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
export const combineScriptContentsToSingleFile = scriptFileNames => {
    let scriptContents = '';
    for (const scriptFileName of scriptFileNames) {
        scriptContents += readFileSync(
            `${PROJECT_DIST_PATH}/${scriptFileName}`,
            'utf-8'
        );
    }
    return scriptContents;
};
export const getPathArgumentFromCli = () => {
    const args = process.argv.find(arg => arg.startsWith('--output-path'));
    if (!args) {
        throw new Error('No --output-path argument provided');
    }
    const outputPath = args.split('=')[1];
    if (!outputPath) {
        throw new Error('No --output-path argument provided');
    }
    return outputPath;
};
/**
 *
 * @param {string} scriptContents
 * @param {string} path
 */
export const outputCombinedScriptToPath = (scriptContents, path) => {
    writeFileSync(path, scriptContents, 'utf-8');
};
export const getIndexHtml = () => {
    return readFileSync(`${PROJECT_DIST_PATH}/index.html`, 'utf-8');
};
/**
 *
 * @param {string} command
 */
const runNPMCommand = command => {
    return execSync(command, { stdio: 'inherit', cwd: process.cwd() });
};
export const runNPMCommands = commands => {
    for (const command of commands) {
        runNPMCommand(`npm run ${command}`);
    }
};
