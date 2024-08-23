const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack');
const GoogleFontsPlugin = require('google-fonts-webpack-plugin');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        util: require.resolve('util/'),
        zlib: require.resolve('browserify-zlib'),
        stream: require.resolve('stream-browserify'),
        url: require.resolve('url/'),
        assert: require.resolve('assert/'),
      },
      plugins: [
        new GoogleFontsPlugin({
          fonts: ['Advent+Pro:wght@400;600']
        })
      ]
    },
  },
});