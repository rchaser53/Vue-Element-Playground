const path = require('path');

module.exports = {
	entry: './src/main.ts',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.ts', '.vue', '.js', '.css'],
		alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, 'src'),
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
        }
    },
    {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            loaders: {
                ts: 'ts-loader!tslint-loader?{"options":{"configFile":"tslint.json","tsConfigFile":"tsconfig.json","fix":true}}'
            }
        }
    }
		]
	},
	devServer: {
		historyApiFallback: {
			rewrites: [{ from: /vee\$/, to: '/vee' }, { from: /element\$/, to: '/element' }]
		},
		port: 3000,
		host: "localhost",
	},
	devtool: 'inline-source-map'
};