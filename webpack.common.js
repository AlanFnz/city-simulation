const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: 'html/index.html',
    }),
  ],
  entry: './src/main.ts',
  module: {
    rules: [
      {
        // load GLSL shaders in as text
        test: /.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use: ['raw-loader'],
      },
      {
        // process typescript
        test: /.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        // process css
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // images and GLTF files
        test: /\.(png|jpe?g|gif|svg|gltf|glb)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets',
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        // font files
        test: /\.(otf|ttf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/fonts',
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

