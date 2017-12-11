const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, '../src'),
    entry: {
        app: './js/app.js'
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: 'channels.bundle.js',
        path: path.resolve(__dirname, '../dist'),
    },
    resolveLoader: {
        modules: ['node_modules', path.resolve(__dirname, '../loaders')]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['src', 'node_modules']
    },
    module: {
        rules: [
            /**
             * Remove number attributes in JSON files
             */
            {
                test: /\.json$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'json-loader'
                }, {
                    loader: 'remove-number-attributes-webpack-loader'
                }]
            },

            /**
             * Bundling CSS files (bundling starts from the last item in use):
             *
             * sass-loader  : compile SASS to CSS
             * css-loader   : resolve import inside of js files
             * style-loader : creates styles nodes
             *
             */
            {
                test: /\.scss$/,
                exclude: /node_modules/,
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
                        publicPath: './'
                    }
                }
            }]
    },

    plugins: [

        /**
         * Put to the output directory html file with already attached entry points
         */
        new HtmlWebpackPlugin({
            title: 'News feed',
            template: 'index.html'
        }),

        /**
         * Copy mocha data to the dist folder
         */
        new CopyWebpackPlugin([
            {
                from: 'data/',
                to: '../dist/data'
            }
        ])
    ]
};
