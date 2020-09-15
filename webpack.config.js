const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.resolve(__dirname, "output"),
        filename: "bundle.js",
        libraryTarget: "commonjs2",
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "src"),
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                        },
                    },
                ],
            },
            {
                test: /\.(s*)css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    externals: {
        react: "commonjs react", // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
    },
};
