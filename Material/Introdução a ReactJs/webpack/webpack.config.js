const path = require('path');

module.exports = {
    output : {
        entry: './src/index.js',
        output: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}