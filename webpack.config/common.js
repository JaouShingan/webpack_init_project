const path = require('path');
// 清理打包输出时的文件夹 /dist
const CleanWebpackPlugin = require('clean-webpack-plugin');
// 打包时重置index.html文件，并将需要引入的js/css等文件引入其中。可以指定模版index.html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口
    entry: {
        app: './src/main.js'
    },
    // 插件
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({})
    ],
    // 输出
    output: {
        filename: '[name].bundle.js',
        // __dirname 当前js的绝对路径
        // ../dist -> 让输出指向绝对路径的上一级的dist文件夹
        path: path.resolve(__dirname, '../dist')
    },
    // 模块
    module: {
        rules: [
            // css 处理 npm install --save-dev style-loader css-loader
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            // 当有异步加载的时候chunks的值应当为async
            chunks: 'all'
        }
    }
};