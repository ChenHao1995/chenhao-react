var path = require('path')
module.exports = {
  rules: [
    {
      test: /\.ts$|\.tsx?$/,
      loader: 'ts-loader',
      // include: path.join(__dirname, "./src"),
      exclude: [/ts/, /tscBuild/]
    },
    {
      enforce: 'pre',
      test: /\.js$|\.jsx$/,
      loader: 'eslint-loader',
      options: {
        fix: true
      },
      exclude: [/node_modules/, /assets/]
    },
    {
      test: /\.ts$|\.tsx$|\.js$|\.jsx$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            [
              'env',
              {
                targets: {
                  browsers: [
                    'last 2 versions',
                    'Firefox ESR',
                    '> 1%',
                    'ie >= 9',
                    'iOS >= 8',
                    'Android >= 4'
                  ]
                },
                // debug: true,
                useBuiltIns: true
              }
            ],
            'react',
            'stage-0'
          ],
          plugins: [
            'transform-decorators-legacy',
            [
              'import',
              [
                {
                  libraryName: 'antd-mobile',
                  style: true
                },
                {
                  libraryName: 'antd',
                  style: true
                }
              ]
            ]
          ]
        }
      },
      include: path.join(__dirname, './src'),
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        }
      ]
    },
    // {
    //   test: /\.css$/,
    //   use: ExtractTextPlugin.extract({
    //     fallback: 'style-loader',
    //     use: {
    //       loader: 'css-loader',
    //       options: {
    //         sourceMap: true
    //       }
    //     }
    //   })
    // },
    {
      test: /\.(jpe?g|png|gif)$/i,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[hash:8].[name].[ext]'
        }
      }
    },
    {
      test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[hash:8].[name].[ext]'
        }
      }
    },
    {
      test: /\.less$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        },
        {
          loader: 'less-loader',
          options: { javascriptEnabled: true }
        }
      ]
      // loader: 'style-loader!css-loader!less-loader',
    }
  ]
}
