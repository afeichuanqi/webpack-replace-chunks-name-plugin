const path = require('path');
const TypescriptDeclarationPlugin = require('typescript-declaration-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: path.resolve('src/webpack-replace-chunks-name-plugin.ts'),
    output: {
        path: path.resolve('dist'),
        filename: 'index.js',
        libraryTarget: 'commonjs2',
        libraryExport: 'default'
    },
    module: {
        rules: [
            {
                test:/\.(ts)$/,
                exclude:[/node_modules/],
                use:{
                    loader:'ts-loader',
                }
            }
        ]
    },
    plugins: [
        new TypescriptDeclarationPlugin({
        })
    ]
}