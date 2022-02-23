const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


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
        // filename: '[name]_[chunkhash:8].js',
        // 暂时不要哈希后缀，方便调试
        filename: '[name]_[chunkhash:8].js',
    },
    // 生成map文件，生产环境建议关闭
    devtool: 'eval-cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        // 打包后输出的位置
                        outputPath: 'images/',
                        // 小于2048kb的以base64形式打包在js文件中，可以减少http请求
                        limit: 2048
                    }
                }
            },
            {
                test: /\.(less|css)$/,
                // loader执行顺序为从右往左，从下到上
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                    'postcss-loader'
                ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '首页',
            filename: 'index.html',
            template: './src/index.html',
            // script标签的插入位置
            inject: 'body'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash:8].css'
        })
    ],
    mode: 'development'
}