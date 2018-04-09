module.exports = function (config) {
    config.set({
        files: [
            {
                pattern: "web-app/js/services/CACHE_SERVICE.js",
                mutated: true,
                included: false
            },
            "test/**/*.js"
        ],
        testRunner: "jest",
        mutator: "javascript",
        babelrcFile: '.babelrc',
        transpilers: [
            'babel'
        ],
        reporter: ["clear-text", "progress"],
        coverageAnalysis: "off"
    });
};
