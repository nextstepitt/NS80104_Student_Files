var path = require('path');

module.exports = {
    mode: 'development',
    entry: './app/src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/assets/scripts'),
        publicPath: "/assets/scripts/",
        filename: 'app.bundle.mjs'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
}
