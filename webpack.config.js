const path = require('path')

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src/index.ts'),
    output: {
        path: path.resolve(__dirname),
        filename: './dist/nats.js',
        libraryTarget: 'umd',
        library: 'nats'
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: "ts-loader", exclude:  /(node_modules|test)/}
        ]
    },
    devtool: "source-map"
};
