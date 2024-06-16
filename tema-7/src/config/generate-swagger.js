const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerAutogen = require("swagger-autogen")();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Usuarios",
      version: "1.0.0",
      description: "Documentación de la API de Usuarios",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor de desarrollo",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
        },
      },
    },
  },
  apis: [
    "./src/controllers/usuarios/usuarios.ts",
    "./src/routes/usuarios/usuarios.ts",
    "./src/models/usuarios/usuarios.ts",
  ],
};

const specs = swaggerJsdoc(options);

const outputFile = "./swagger-output.json";
const routes = [
  "./src/routes/usuarios/usuarios.ts",
  "./src/controllers/usuarios/usuarios.ts",
  "./src/models/usuarios/usuarios.ts",
];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, options);
