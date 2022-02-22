const path = require('path')

module.exports = {
    // 单页应用，单入口配置
    // entry: './src/index.js',
    // 多页应用，多入口配置，输出多个js文件
    entry: {
        index: './src/index.js',
        login: './src/login.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        // name: 占位符，使用entry出配置的key或filename，未配置默认为main
        // chunkhash：每个chunk（块，输出的js文件）生成一个唯一的哈希字符串，“:8”意为指定八位哈希字符串
        filename: '[name]_[chunkhash:8].js',
    },
    mode: 'development'
}