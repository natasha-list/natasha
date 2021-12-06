const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssWebpackPlugin = require("mini-css-extract-plugin")
module.exports = {
    module:{
        rules:[
            {
                test:/\.html$/i,
                use:[
                    {
                        loader:"html-loader",
                        options:{
                            minimize:true
                        }
                    }
                ]
            },
            {
                test:/\.css$/i,
                use:[
                    {
                        loader:MiniCssWebpackPlugin.loader,
                        options:{
                            publicPath:'./'
                        }                            
                    },
                    "css-loader"
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html",
            filename:"index.html"
        }),
        new MiniCssWebpackPlugin()
    ]

}