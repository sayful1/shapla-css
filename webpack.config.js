const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const autoprefixer = require('autoprefixer');
const combineMediaQuery = require('postcss-combine-media-query');
const svgToMiniDataURI = require('mini-svg-data-uri');

let plugins = [];
let entryPoints = {
  utility: "./src/utility.scss",
  flexbox: "./src/flexbox.scss",
  grid: "./src/grid.scss",
  sizing: "./src/sizing/_all.scss",
  "color-theme": "./src/colors/_all.scss",
  spacing: [
    "./src/spacing/_margin.scss",
    "./src/spacing/_padding.scss",
    "./src/spacing/_space-between.scss",
  ],
  "responsive-spacing": [
    "./src/spacing/_margin-responsive.scss",
    "./src/spacing/_padding-responsive.scss",
  ],
};

plugins.push(new MiniCssExtractPlugin({
  filename: "./[name].css"
}));

module.exports = (env, argv) => {
  let isDev = argv.mode !== 'production';

  return {
    "entry": entryPoints,
    "output": {
      "path": path.resolve(__dirname, 'dist'),
      "filename": '[name].js'
    },
    "devtool": isDev ? 'eval-source-map' : false,
    "module": {
      "rules": [
        {
          "test": /\.js$/i,
          "use": {
            "loader": "babel-loader",
            "options": {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.(sass|scss|css)$/i,
          use: [
            {
              loader: isDev ? "style-loader" : MiniCssExtractPlugin.loader
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
                plugins: () => [
                  autoprefixer(),
                  combineMediaQuery()
                ],
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
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: '../fonts',
              },
            },
          ],
        },
        {
          test: /\.(png|je?pg|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192, // 8KB
                outputPath: '../images',
              },
            },
          ],
        },
        {
          test: /\.svg$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10240, // 10KB
                outputPath: '../images',
                generator: (content) => svgToMiniDataURI(content.toString()),
              },
            },
          ],
        }
      ]
    },
    optimization: {
      minimizer: [
        new TerserPlugin(),
        new OptimizeCSSAssetsPlugin()
      ],
      splitChunks: {
        cacheGroups: {
          commonVendors: {
            test: /[\\/]node_modules[\\/](vue|vuex|vue-router|axios)[\\/]/,
            name: 'common-vendors',
            chunks: 'all',
          }
        }
      }
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve('./assets/src/'),
      },
      modules: [
        path.resolve('./node_modules'),
        path.resolve(path.join(__dirname, 'assets/src/')),
        path.resolve(path.join(__dirname, 'assets/src/shapla')),
      ],
      extensions: ['*', '.js', '.vue', '.json']
    },
    "plugins": plugins
  }
};
