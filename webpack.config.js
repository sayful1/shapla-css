const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const autoprefixer = require('autoprefixer');
const combineMediaQuery = require('postcss-combine-media-query');
const svgToMiniDataURI = require('mini-svg-data-uri');

let plugins = [];
let entryPoints = {
  shapla: "./src/shapla.scss",
  elements: "./src/elements/_all.scss",
  components: "./src/components/_all.scss",
  "color-theme": "./src/color-theme.scss",
  flexbox: "./src/flexbox.scss",
  grid: "./src/grid.scss",
  sizing: "./src/sizing/_all.scss",
  typography: "./src/typography/_all.scss",
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
                postcssOptions: {
                  plugins: [
                    autoprefixer(),
                    combineMediaQuery()
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
    },
    resolve: {
      modules: [
        path.resolve('./node_modules'),
        path.resolve('./src'),
      ],
      extensions: ['*', '.js', '.json']
    },
    "plugins": plugins
  }
};
