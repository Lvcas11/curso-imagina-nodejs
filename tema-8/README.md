## Backend con Node.js, Express, TypeScript, JWT, MongoDB y Jest

Este proyecto es una aplicación de prueba diseñada para demostrar el funcionamiento básico de un backend utilizando Node.js con Express, TypeScript, JWT para autenticación, MongoDB como base de datos y Jest para pruebas unitarias.

### Estructura del Proyecto

```
├── src/
│ ├── controllers/ # Controladores de las rutas
│ ├── errores/ # Manejadores de errores
│ ├── middlewares/ # Middlewares de la aplicación
│ ├── models/ # Modelos de datos (por ejemplo, Mongoose)
│ ├── routes/ # Definición de rutas de la aplicación
│ ├── app.ts # Configuración de Express y middlewares
│ ├── index.ts # Punto de entrada de la aplicación
├── test/
│ ├── unit/ # Pruebas unitarias
│ ├── integration/ # Pruebas de integración
├── .env # Archivo para variables de entorno
├── .eslintrc.js # Configuración de ESLint
├── jest.config.js # Configuración de Jest
├── package.json # Dependencias y scripts de la aplicación
└── tsconfig.json # Configuración de TypeScript
```

### Scripts Disponibles

En el archivo `package.json`, encontrarás los siguientes scripts:

- `build`: Compila el código TypeScript a JavaScript en la carpeta `dist/`.
- `start`: Ejecuta la aplicación en producción desde el directorio `dist/`.
- `dev`: Inicia la aplicación en modo de desarrollo con nodemon, reiniciando automáticamente al detectar cambios en los archivos.
- `test`: Ejecuta todas las pruebas unitarias con Jest en modo observador interactivo.
- `test:coverage`: Ejecuta las pruebas y genera un informe de cobertura de código.

### Instrucciones para Ejecutar

Para ejecutar la aplicación localmente, sigue estos pasos:

1. Instala las dependencias con `npm install`.
2. Inicia el servidor en modo de desarrollo con `npm run dev`.

### Notas Adicionales

- El archivo `.env` se utiliza para configurar las variables de entorno necesarias.
- Se incluyen configuraciones para ESLint y Jest en los archivos `.eslintrc.js` y `jest.config.js`, respectivamente.
