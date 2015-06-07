var webpack = require('./node_modules/webpack');
module.exports = {
    entry: {
              Home: ["./src/app.jsx"],
              About: "./src/B.jsx",
              common: [
                "./node_modules/react",
                "./node_modules/style-loader"
              ]
           },
    output: {
              path: './build',
              filename: "[name].bundle.js"
            },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"common", /* filename= */"common.bundle.js")
    ],
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.jsx$/, loader: 'jsx-loader' }
        ]
    }
};
