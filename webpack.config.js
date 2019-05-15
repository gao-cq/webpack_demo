var htmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: 'js/bunle.js'
	},
	mode: 'development',
	module:{
		rules:[
			{
				test: /\.js$/,
				loader: "babel-loader",
				options:{
					"presets": ["@babel/preset-env"]
				}
			},
			{
				test: /\.css$/,
				use:[
					{
						loader:"style-loader"
					},
					{
						loader:"css-loader",
						options:{
							importLoaders:1
						}
					},
					{
						loader:"postcss-loader"
					}
				]
			},
			{
				test:/\.scss$/,
				use:[
					{
						loader:"style-loader"
					},
					{
						loader:"css-loader",
						options:{
							importLoaders:1
						}
					},
					{
						loader:"postcss-loader"
					},
					"sass-loader"
				]
			},
			{
			    test: /\.html$/,
			    use:[ 
			    	{
				        loader: 'html-loader',
				        options: {
				            // attrs: [':data-src']
				        }
				    }
		        ]
			},
			{
				test: /\.tpl$/,
			    loader: 'ejs-loader'
			},
			{
				test:/\.(png|jpg|gif|svg)$/,
				use:[
					{
						loader:'url-loader',
						options:{
							limit:1000,
							name:'[name]-[hash:5].[ext]'
						}
					},
					{
						loader:'image-webpack-loader'
					}
				]
			},
			{
				test: /\.ejs$/,
				use:[
					'ejs-loader',
					'ejs-html-loader'
				]	     
			}
		]
	},
	plugins:[
		new htmlWebpackPlugin({
			filename:'index.html',
			template:'index.ejs',
			inject:'body'
		})
	]
}