'use strict'
const merge = require('webpack-merge');
// 压缩代码、删除未用代码等
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./common.js');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new UglifyJSPlugin()
    ]
});