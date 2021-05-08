const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //   mode: "development",
  entry: "./src/index.js", // Archivo js de entrada
  output: {
    path: path.join(__dirname, "/"), // Carpeta de salida __dirname: path base
    filename: "bundle.js", //nombre del js empaquetado
  },
  devServer: {
    // contentBase: path.join(__dirname, "dist"),
    // compress: true,
    port: 4000,
  },
  resolve: {
    extensions: [".js", ".jsx"], // Extensiones que se van a manejar
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
        exclude: /node-modules/, // No transpilar en esa carpeta
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Html a subir al epaquetador
    }),
  ],
};
