const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { isDev } = require("./utils");

const getBabelLoader = () => ({
  test: /\.(js)$/,
  exclude: /node_modules/,
  use: ["cache-loader", "babel-loader?cacheDirectory", "thread-loader"]
});

const getCssLoader = env => ({
  test: /\.(sc|c)ss$/,
  use: [
    isDev(env) ? "style-loader" : MiniCssExtractPlugin.loader,
    "css-loader",
    "sass-loader"
  ]
});

const getImageLoader = () => ({
  test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|)$/,
  loader: "url-loader"
});

const getXmlRawLoader = () => ({
  test: /\.xml$/,
  loader: "raw-loader"
});

const getLoaders = env =>
  [
    getBabelLoader(),
    getCssLoader(env),
    getImageLoader(),
    getXmlRawLoader()
  ].filter(loader => loader);

module.exports.getLoaders = getLoaders;
