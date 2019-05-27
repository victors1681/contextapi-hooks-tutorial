const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

getTerserPlugin = () =>
  new TerserPlugin({
    cache: true,
    parallel: true,
    terserOptions: {
      compress: {
        dead_code: true,
        conditionals: true,
        booleans: true
      },
      module: false,
      output: {
        comments: false,
        beautify: false
      }
    }
  });

getOptimizationAssetsPlugin = () =>
  new OptimizeCssAssetsPlugin({
    assetNameRegExp: /\.css$/g,
    cssProcessor: require("cssnano"),
    cssProcessorPluginOptions: {
      preset: ["default", { discardComments: { removeAll: true } }]
    },
    canPrint: true
  });

getChunks = () => ({
  splitChunks: {
    cacheGroups: {
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        name: "vendors",
        chunks: "all"
      },
      styles: {
        test: /\.css$/,
        name: "styles",
        chunks: "all",
        enforce: true
      }
    }
  }
});

getOptimization = () => ({
  ...getChunks(),
  minimizer: [getTerserPlugin(), getOptimizationAssetsPlugin()]
});

module.exports.getOptimization = getOptimization;
