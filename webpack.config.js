var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    index: './app/index.js',
  },
  output: {
		path: 'dist',
		filename: 'js/[name].js'
	},
  target: 'electron',
  devtool: '#inline-source-map',
  plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
  		filename: 'index.html',
  		template: 'app/index.html',
  		inject: true,
      chunks: ['index'],
  		minify: false,
  	}),
    new ExtractTextPlugin('css/[name].css'),
	],
  module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react', 'stage-0'],
        plugins: ['transform-decorators-legacy'],
			}
		}, {
			test: /\.jsx$/,
      exclude: /(node_modules|bower_components)/,
			loader: 'babel',
		}, {
			test: /\.css$/,
			exclude: /(node_modules|bower_components)/,
			loader: ExtractTextPlugin.extract(
        'style',
        "css?modules&importLoaders=1&localIdentName=[path][name]-[local]!autoprefixer-loader"
      )
		}, {
			test: /\.css$/,
      exclude: /app/,
			loader: ExtractTextPlugin.extract(
        'style',
        "css!autoprefixer-loader"
      )
		}, {
			test: /\.less$/,
			exclude: /(node_modules|bower_components)/,
			loader: ExtractTextPlugin.extract(
        "style",
        "css?modules&importLoaders=1&localIdentName=[path][name]-[local]!less"
      )
		}, {
			test: /\.less$/,
			exclude: /app/,
			loader: ExtractTextPlugin.extract(
        "style",
        "css!less"
      )
		}, {
      test: /\.json$/,
      loader: 'json'
    }, {
			test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
			exclude: /assets\/.*?\.(png|jpe?g|gif|svg)(\?.*)?$/,
			loader: 'file',
			query: {
				name: 'images/[name].[hash].[ext]',
				publicPath: '../'
			}
		}, {
			test: /.*?\.(woff2?|eot|ttf|otf)(\?.*)?$/,
			loader: 'file',
			query: {
				name: 'fonts/[name].[hash].[ext]',
				publicPath: '../'
			}
		}]
	},
};
