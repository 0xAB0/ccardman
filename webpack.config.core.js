
module.exports = [  
{
    mode: 'development',
    entry: './src/core/electron.js',
    target: 'electron-main',
    module: {
        rules: [{
            test: /\.(js|jsx)$/,                
            include: '/src/core/',
            loader: 'babel-loader'                
        }]
    },
    devtool: 'source-map',
    output: {
        path: __dirname + "/dist/core",
        filename: 'electron.js'
    }
}];