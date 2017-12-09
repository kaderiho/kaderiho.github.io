const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    }
};
