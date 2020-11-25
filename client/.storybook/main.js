const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.resolve.alias = {
      ...config.resolve.alias,
      '@atoms': path.resolve(__dirname, '../src/components/atoms/'),
      '@molecules': path.resolve(__dirname, '../src/components/molecules/'),
      '@organisms': path.resolve(__dirname, '../src/components/organisms/'),
      '@templates': path.resolve(__dirname, '../src/components/templates/'),
      '@theme': path.resolve(__dirname, '../src/theme/'),
      '@utils': path.resolve(__dirname, '../src/utils/'),
      '@views': path.resolve(__dirname, '../src/views/'),
      '@reducers': path.resolve(__dirname, '../src/reducers/'),
      '@store': path.resolve(__dirname, '../src/store/'),
      '@hooks': path.resolve(__dirname, '../src/hooks/'),
    };

    // Return the altered config
    return config;
  },
};