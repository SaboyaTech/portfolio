const Webpack = require('webpack');
module.exports = {
	entry: {
		vendor: './src/vendor.js',
		main: './src/index.js',
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ['html-loader'],
			},
			{
				test: /\.(woff(2)?|ttf|otf|eot|jpg|jpeg|png|gif|svg|pdf)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[hash].[ext]',
							outputPath: 'assets',
							esModule: false,
						},
					},
				],
			},
			{
				test: /\.(mp4|webm)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[hash].[ext]',
							outputPath: 'assets',
						},
					},
				],
			},
		],
	},
	// This config allows to use jQuery $ sign
	plugins: [
		new Webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
		}),
	],
};
