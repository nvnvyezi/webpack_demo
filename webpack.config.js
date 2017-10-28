 //引进一个node核心模块path
    var path=require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const CleanWebpackPlugin = require('clean-webpack-plugin');
    const webpack = require('webpack');
    module.exports={
        //打包的入口
        entry:{
            // "./src/index.js",
            // app: './src/index.js',
            // print: './src/print.js'
            // app: './src/index.js'
            index: './src/index.js',
    another: './src/another-module.js'
        },
        devtool: 'inline-source-map',
        devServer: {
            contentBase: './dist',
            hot: true
            // inline: true
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
             new HtmlWebpackPlugin({
               title: 'Hot Output Management'
             }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common' // 指定公共 bundle 的名称。
            })
        ],
        //打包出口
        output:{
            // filename:"bundle.js",//打包后的文件名
            filename: '[name].bundle.js',
            // //path必须是绝对路径
            publicPath: __dirname,//添加静态资源, 否则会出现路径错误
            // //path.resolve将相对路径转绝对路径
            path:path.resolve( './dist'), //打包后文件的路径
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        'file-loader'
                    ]
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [
                        'file-loader'
                    ]
                }
            ]
        }
    };