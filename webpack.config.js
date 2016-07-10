module.exports = {
    entry: './src/components/App.jsx',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /(node_modules|bower_components)/,
              loader: 'babel',
              query: { presets: ['es2015'] }
            },
            { test: /\.jsx$/, exclude: /(node_modules|bower_components)/,
              loader: 'babel',
              query: { presets: ['es2015', 'react'] }
            }
        ]
    }
};
