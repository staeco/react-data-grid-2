module.exports = {
  presets: [
    '@babel/env',
    '@babel/react',
    '@babel/typescript'
  ],
  plugins: [
    ['@babel/transform-runtime', { useESModules: true }],
    '@babel/proposal-class-properties'
  ]
};
