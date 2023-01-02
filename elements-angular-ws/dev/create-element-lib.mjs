import * as _ from './utils.mjs';

try {
    const outputPath = _.getPathArgumentFromCli();
    _.runNPMCommands(['build-lib', 'build-container']);
    const doc = _.parseToDOM(_.getIndexHtml());
    const scriptFileNames = _.getScriptFileNames(doc);
    const combinedScript = _.combineScriptContentsToSingleFile(scriptFileNames);
    _.outputCombinedScriptToPath(combinedScript, outputPath);
    console.log('Done!');
} catch (e) {
    console.error(e);
}
