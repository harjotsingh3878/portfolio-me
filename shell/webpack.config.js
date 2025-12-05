const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

// Use Netlify URLs in production, localhost in development
const getRemoteUrl = (service, port) => {
  if (isProduction) {
    return `${service}@https://portfolio-mfe-${service}.netlify.app/remoteEntry.js`;
  }
  return `${service}@http://localhost:${port}/remoteEntry.js`;
};

module.exports = {
  entry: './src/index.js',
  mode: isProduction ? 'production' : 'development',
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        transactions: getRemoteUrl('transactions', 3001),
        profile: getRemoteUrl('profile', 3002),
        notifications: getRemoteUrl('notifications', 3003),
      },
      shared: {
        react: { singleton: true, eager: false, requiredVersion: '^18.2.0', strictVersion: false },
        'react-dom': { singleton: true, eager: false, requiredVersion: '^18.2.0', strictVersion: false },
        'react-router-dom': { singleton: true, eager: false },
        '@reduxjs/toolkit': { singleton: true, eager: false },
        'react-redux': { singleton: true, eager: false },
        '@tanstack/react-query': { singleton: true, eager: false },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
