module.exports = function (api) {
  api.cache(true)
  return {
    presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.js', '.json'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@contexts': './src/contexts',
            '@pages': './src/pages',
            '@routes': './src/routes',
            '@services': './src/services',
            '@styles': './src/styles',
            '@utils': './src/utils',
            '@src': './src',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
