const isProd = (env) => env.NODE_ENV === "production";
const isDev = (env) => env.NODE_ENV === "development";

module.exports.isDev = isDev;
module.exports.isProd = isProd;
