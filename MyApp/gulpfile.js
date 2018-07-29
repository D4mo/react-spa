(function () {
    var SCRIPTS = {
        'dev': 'npm run dev',
        'serve': 'npm run serve',
        'dtos': 'npm run dtos',
        'build': 'npm run build',
        'publish': 'npm run publish',
        'tests': 'npm run test',
        'tests-coverage': 'npm run test-coverage'
    };

    var gulp = require('gulp');
    var exec = require('child_process').exec;

    function runScript(script, done) {
        process.env.FORCE_COLOR = 1;
        var proc = exec(script + (script.startsWith("npm") ? " --silent" : ""));
        proc.stdout.pipe(process.stdout);
        proc.stderr.pipe(process.stderr);
        proc.on('exit', () => done());
    }

    // Tasks
    Object.keys(SCRIPTS).forEach(name => {
        gulp.task(name, done => runScript(SCRIPTS[name], done));
    });

})();