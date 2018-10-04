'use strict'
const merge = require('webpack-merge');
// 压缩代码、删除未用代码等
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// 输出为压缩文件
// const CompressionPlugin = require("compression-webpack-plugin");
const common = require('./common.js');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new UglifyJSPlugin()
        // new CompressionPlugin({
        //     test: /\.*/,
        //     // asset: '[path].gz[query]',
        //     algorithm: 'gzip',
        //     deleteOriginalAssets: true,
        //     // filename(asset) {
        //     //     // asset: { file: '1.js', path: '1.js', query: '' }
        //     //     console.log(asset)
        //     //     asset = asset.file + '-gz'
        //     //     return asset
        //     // },
        //     minRatio: 1
        // })
    ]
});