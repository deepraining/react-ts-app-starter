const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');

module.exports = ({ config, mode }) => {
  config.module.rules.push(
    {
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        },
        'less-loader',
      ],
      test: /\.less$/,
    },
    {
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        },
        'sass-loader',
      ],
      test: /\.scss$/,
    },
    {
      loader: 'awesome-typescript-loader!react-docgen-typescript-loader',
      test: /\.(ts|tsx)$/,
    },
  );
  config.plugins.push(new TSDocgenPlugin());
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
