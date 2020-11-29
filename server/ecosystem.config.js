module.exports = {
  apps: [
    {
      name: 'app',
      script: './dist/app.js',
      instances: 0,
      exec_mode: 'cluster',
    },
  ],
};
