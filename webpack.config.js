const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const svgToMiniDataURI = require('mini-svg-data-uri');
const WebpackCleanPlugin = require('webpack-clean');

let entryPoints = {
  style: ["./src/shapla.scss"],
  shapla: ["./src/shapla.scss"],
  grid: ["./src/grid.scss"],
};

module.exports = (env, argv) => {
  let isDev = argv.mode !== 'production';

  let plugins = [];

  plugins.push(new MiniCssExtractPlugin({
    filename: "../css/[name].css"
  }));

  plugins.push(new WebpackCleanPlugin(['dist/style.js', 'dist/shapla.js', 'dist/grid.js']));

  return {
    entry: entryPoints,
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js'
    },
    devtool: isDev ? 'eval-source-map' : false,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/i,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                '@babel/preset-env',
              ],
              plugins: [
                ['@babel/plugin-proposal-class-properties'],
                ['@babel/plugin-proposal-private-methods'],
                ['@babel/plugin-proposal-object-rest-spread'],
              ]
            }
          }
        },
        {
          test: /\.(sass|scss|css)$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {publicPath: ''}
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: isDev,
                importLoaders: 1
              }
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: isDev,
                postcssOptions: {
                  plugins: [
                    ['postcss-preset-env'],
                  ],
                },
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: isDev,
              },
            }
          ]
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/i,
          type: 'asset/resource',
          generator: {
            filename: '../fonts/[hash][ext]'
          }
        },
        {
          test: /\.(png|je?pg|gif)$/i,
          type: 'asset',
          generator: {
            filename: '../images/[hash][ext]'
          }
        },
        {
          test: /\.svg$/i,
          type: 'asset',
          generator: {
            filename: '../images/[hash][ext]',
            dataUrl: content => svgToMiniDataURI(content.toString())
          },
        }
      ]
    },
    optimization: {
      minimizer: [
        new TerserPlugin(),
        new CssMinimizerPlugin()
      ],
    },
    resolve: {
      modules: [
        path.resolve('./node_modules'),
      ],
      extensions: ['*', '.js', '.scss', '.json']
    },
    plugins: plugins,
  }
};
