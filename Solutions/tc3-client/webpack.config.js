// webpack.config.js
// Copyright © 2019 NextStep IT Training. All rights reserved.
//

var path = require('path')

module.exports = {
    mode: 'development',
    entry: './app/src/index.js',
    output: {
        path: path.resolve(__dirname, 'app/dist/assets/scripts'),
        publicPath: "/assets/scripts/",
        filename: 'app.bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'app/dist'),
        compress: true,
        port: 9000,
        index: 'index.html'
    }
}
