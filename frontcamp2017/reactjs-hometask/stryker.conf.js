module.exports = function(config) {
  config.set({
    files: [
      {
        pattern: "web-app/**/*.js",
        mutated: true,
        included: false
      },
      "tests/**/*.js"
    ],
    testRunner: "jest",
    mutator: "javascript",
    babelrcFile: '.babelrc', // Location of your .babelrc file
    transpilers: [
      'babel' // Specify that your code needs to be transpiled before tests can be run
    ],
    reporter: ["clear-text", "progress"],
    coverageAnalysis: "off"
  });
};
