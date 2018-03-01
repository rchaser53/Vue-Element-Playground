const path = require('path');
// const config = require('../config')

module.exports = {
	entry: './src/main.ts',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.ts', '.vue', '.js', '.css'],
		alias: {
			vue$: 'vue/dist/vue.esm.js'
		}
	},
	module: {
		rules: [
      {
        enforce: 'pre',
        test: /\.ts$/,
        loader: 'tslint-loader',
        exclude: /(node_modules)/,
        options: {
            configFile: 'tslint.json'
        }
    },
    {
        test: /\.ts$/,
        exclude: /node_modules|vue\/src/,
        loader: 'ts-loader',
        options: {
            appendTsSuffixTo: [/\.vue$/],
            // transpileOnly: true
        }
    },
    {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            loaders: {
                ts: 'ts-loader!tslint-loader?{"options":{"configFile":"tslint.json","tsConfigFile":"tsconfig.json","fix":true}}'
                // ts: 'ts-loader'
            }
        }
    }
		]
	},
	devServer: {
		historyApiFallback: {
			rewrites: [{ from: /vee\$/, to: '/vee' }, { from: /element\$/, to: '/element' }]
		},
		// open: true,
		port: 3000,
		// openPage: 'element',
		host: "localhost",
	},
	devtool: 'inline-source-map'
};