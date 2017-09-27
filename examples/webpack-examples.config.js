const path = require("path");

module.exports = {
    entry: "./app.ts", 
    output: {
        filename: "app.js",
        library: "spryt",
        libraryTarget: "var"
    },
    resolve: {
        extensions: [".ts"]
    },
    module: {
        rules:[
            {
                test: /\.ts$/, loader: "ts-loader" 
            }
        ]
    }
};