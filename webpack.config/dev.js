const merge = require('webpack-merge');
const common = require('./common.js');

module.exports = merge(common, {
    mode: 'development',
    // 开发工具 source map -> 开发时指出错误位置
    devtool: 'inline-source-map',
    // 开发服务器
    devServer: {
        contentBase: './dist'
    }
});