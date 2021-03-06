const path = require('path');

module.exports = {
    mode: 'production',
    entry: './index.js',
    output: {
        filename: 'lais-cookie-consent.min.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                loader: "css-loader",
            },
        ],
    },
};