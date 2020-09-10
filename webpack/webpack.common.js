const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '..', 'src', 'main.js'),
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(svelte)$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            preprocess: require('svelte-preprocess')({ scss: true }),
            emitCss: true,
          },
        },
      },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: 'babel-loader',
      //       options: {
      //         plugins: [
      //           isDevelopment && require.resolve('react-refresh/babel'),
      //         ].filter(Boolean),
      //       },
      //     },
      //     {
      //       loader: 'stylelint-custom-processor-loader',
      //     },
      //   ],
      // },
      {
        test: /.*\.icone\.(svg|gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'static/images',
          },
        },
      },
      {
        test: /.*\.inline\.(svg)$/i,
        use: [
          {
            loader: 'react-svg-loader',
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader','css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/template.html',
      favicon: './src/assets/favicon/favicon.png',
    }),
    // new webpack.DefinePlugin({
    //   'process.env.APP_ENV': JSON.stringify(process.env.APP_ENV),
    //   'process.env.REACT_FAST': JSON.stringify(process.env.REACT_FAST),
    //   'process.env.translate': JSON.stringify(process.env.translate),
    //   lang: JSON.stringify(`${i18n.lang}-${i18n.alpha2Code}`),
    // }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contentHash].css',
    }),
  ],
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte')
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main']
  },
};
