module.exports = {
  apps: [
    {
      name: 'strapi-boilerplate',
      cwd: '/home/forge/strapi.boilerplate.okie.my',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        // Default environment variables
      },
      env_production: {
        NODE_ENV: 'production',
        // Production-specific environment variables
        // DATABASE_HOST: 'localhost',
        // DATABASE_PORT: '27017',
        // DATABASE_NAME: 'strapi',
        // DATABASE_USERNAME: 'root',
        // DATABASE_PASSWORD: 'root',
      },
    },
  ],
};