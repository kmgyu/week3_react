export default {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
    [
      "babel-preset-vite", // for env setting
      {
        "env": true,
        "glob": false
      }
    ]
  ]
};