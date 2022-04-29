const HtmlWebPackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin')

const deps = require('./package.json').dependencies

const getEnvValue = _env => {
  if (_env.github) {
    return `Github`
  } else if (_env.vercel) {
    return `Vercel`
  } else {
    return `Local`
  }
}

const getUrl = (_env, _module, _port) => {
  if (_env.github) {
    return `https://oseasjs.github.io/module-federation-react/${_module}/`
  } else if (_env.vercel) {
    return `https://module-federation-react-${_module}.vercel.app/`
  } else {
    return `http://localhost:${_port}/`
  }
}

module.exports = (_, argv) => ({
  output: {
    publicPath: getUrl(argv.env, 'home', 9020)
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json']
  },
  devServer: {
    port: 9020,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'home',
      filename: 'remoteEntry.js',
      remotes: {
        home: `home@[homeUrl${getEnvValue(argv.env)}]remoteEntry.js`,
        search: `search@[searchUrl${getEnvValue(argv.env)}]remoteEntry.js`,
        checkout: `checkout@[checkoutUrl${getEnvValue(argv.env)}]remoteEntry.js`
      },
      exposes: {
        './Home': './src/HomeContent',
        './Frame': './src/Frame'
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom']
        }
      }
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html'
    })
  ]
})
