const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            /**
             * Bundling CSS files:
             *
             * sass-loader  : compile SASS to CSS
             * style-loader : creates styles nodes
             * css-loader   : resolve import inside of js files
             *
             */
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            },

            /**
             * Compile .js files running babel
             */
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },

            /**
             * File loader for supporting fonts inside of CSS files
             */
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: 'src/styles/fonts/'
                    }
                }
            }]
    }
};
