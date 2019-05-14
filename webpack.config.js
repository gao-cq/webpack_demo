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
				test: /\.css$/,
				use:[
					"style-loader",
					{
						loader:"css-loader"
						
					}
				]
			},
			{
				test: /\.js$/,
				loader: "babel-loader",
				options:{
					"presets": ["@babel/preset-env"]
				}
			}
		]
	},
	plugins:[
		new htmlWebpackPlugin({
			filename:'index.html',
			template:'index.html',
			inject:'body'
		})
	]
}