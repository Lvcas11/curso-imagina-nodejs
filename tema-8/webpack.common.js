const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index.ts',
  target: 'node', // Específicamente para aplicaciones Node.js
  externals: [nodeExternals()], // Excluye dependencias de node_modules en el bundle
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js'], // Permite importar archivos sin especificar la extensión
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader', // Compila TypeScript a JavaScript
        exclude: /node_modules/
      },
      {
        enforce: 'pre', // Ejecuta el cargador antes de otros cargadores
        test: /\.js$/,
        loader: 'source-map-loader', // Carga mapas de origen para ayudar en la depuración
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), // Limpia el directorio de salida antes de cada compilación
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/config/.env'), to: '.env' } // Copia el archivo .env al directorio de salida
      ]
    }),
    new Dotenv({
      path: path.resolve(__dirname, 'src/config/.env'), // Ruta a tu archivo .env
      safe: true, // Opcional: Verifica que todas las variables definidas en .env.example estén presentes en .env
      systemvars: true // Habilita el uso de variables de entorno del sistema si no se encuentran en el archivo .env
    })
  ]
};
