/**
 * @fileoverview This script is used to create a new element library.
 * It is run by the `npm run create-element-lib` command from the root of the workspace.
 * It runs the `npm run build-lib` and `npm run build-container` commands
 * to build the library and container.
 * It then merges the script files (runtime.js, polyfills.js and main.js)
 * from the dist into a single file and writes it to the given output path
 * in the same order as they are loaded in the index.html file.
 */
import * as _ from './utils.mjs';

try {
    _.processSetOptions();
    _.runNPMCommands(['build-lib', 'build-container']);
    _.chain(_.getIndexHtml, _.parseToDOM, _.getScriptFileNames, _.mergeScripts)();
    console.log('Done!');
} catch (e) {
    console.error(e);
}
