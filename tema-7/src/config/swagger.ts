import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

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

export default (app: any) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
