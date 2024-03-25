const path = require('path');

module.exports = {
    entry: './test/test.ts',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'testbundle.js',
        sourceMapFilename: "./testbundle.js.map"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.png$/i,
                use: 'url-loader',
            }

        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    devServer: {
static: path.join(__dirname, '/test'),
        compress: true,
        port: 9001,
        watchFiles: ['./test/**/*.ts'],
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
            },
    }
}
