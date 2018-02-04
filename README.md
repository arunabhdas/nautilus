# nautilus
A project management tool and submarine tool for traversing the planet


# nautilus-react

# Prerequisites
brew update
brew install yarn

# Steps

==> npm install -g create-react-app

==> create-react-app nautilus


## Install dependencies

==> npm i --save webpack

or

==> npm i -S webpack


--------------------------------------

==> npm i --save react react-dom

OR

==> npm i -S react react-dom

## Install dev dependencies

==> npm i --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react react-hot-loader webpack webpack-dev-server

OR

==> npm i -D babel-core babel-loader babel-preset-es2015 babel-preset-react react-hot-loader webpack webpack-dev-server

## Webpack installation and configuration
==> yarn add webpack webpack-dev-server path

==> touch webpack.config.js

    Paste the following

    https://gist.github.com/learncodeacademy/25092d8f1daf5e4a6fd3

var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
      'webpack-dev-server/client?http://127.0.0.1:8080/',
      'webpack/hot/only-dev-server',
      './src'
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  resolve: {
      modulesDirectories: ['node_modules', 'src'],
      extensions: ['', '.js']
  },
  module: {
    loaders: [
    {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
    }
    ]
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
  ]
}

==> touch index.html

Paste the following 

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Nautilus</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="main.js"></script>
</head>
<body>
    <div id="app"/>
    <script src="bundle.js"></script>
</body>
</html>




# nautilus-angular


# Steps

==> ng new nautilus


==> ng g component projects


 
# Running 

==> ng serve --open

# Meta

~/repos/ad/githubrepos/nautilus/nautilus-react (master) 
==> npm --version
5.6.0
~/repos/ad/githubrepos/nautilus/nautilus-react (master) 
==> nvm --version
0.31.0
~/repos/ad/githubrepos/nautilus/nautilus-react (master) 
==> node --version
v9.5.0