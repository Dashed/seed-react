var
path = require('path'),
webpack = require('webpack');

var appRoot = __dirname;

module.exports = {
    colors: true,
    watch: true,
    entry: {
        app: "./src/index.js",
        vendor: [
            'babel-runtime/regenerator',
            // 'babel-runtime/core-js',
            // 'babel-runtime/helpers',
        ]
    },

    output: {
        path: path.join(appRoot, "./public/js"),
        filename: "app.js"
    },
    devtool: "#source-map",

    resolve: {
        root: path.join(appRoot, "/src/"),
        modulesDirectories: ["node_modules"]
    },

    module: {
        postLoaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?optional=runtime'
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.js")
    ]
};
