
let HtmlWebPackPlugin = require('html-webpack-plugin');
//import HtmlWebPackPlugin from 'html-webpack-plugin';

module.exports = [       
    {
        mode: 'development',
        entry: './src/render/index.jsx',
        target: 'electron-renderer',
        resolve: {
            extensions: ['.js','.jsx']
        },
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                //include: '/src/render/',
                exclude: /node_modules/,
                use: ['babel-loader']
            },{
                test: /\.css$/i,
                use: ['style-loader','css-loader']
            },{
                test: /\.(eot|woff|ttf|svg)$/,
                use: ['url-loader']
            }]
        },       
        devtool: 'source-map',
        output: {
            path: __dirname + "/dist/render",
            filename: 'render.js'
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: './public/index.html',
                filename: 'index.html'               
            })
        ],  
        devServer: {
            //contentBase: __dirname + "/public",            
            port: 3000
        } 
    },
    /*
    },*/
];