module.exports = {
  apps: [
    {
      //Configuramos el nombre del proceso que tendrá mi aplicación
      name: "api_template",
      //Difinimos el script que vamos a ejecutar
      script: "server/bin/www",
      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: "1G",
      //Definimos las variables de entorno de mis ambientes
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};